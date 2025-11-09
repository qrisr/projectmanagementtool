'use client'

import { useState, useEffect, useCallback } from 'react'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragStartEvent,
  DragOverlay,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable'
import { BoardState, Column as ColumnType, Task } from '@/types/kanban'
import { loadBoardState, saveBoardState, generateId } from '@/lib/storage'
import { Column } from './Column'
import { Card } from './Card'

export function KanbanBoard() {
  const [boardState, setBoardState] = useState<BoardState | null>(null)
  const [activeId, setActiveId] = useState<string | null>(null)
  const [isAddingColumn, setIsAddingColumn] = useState(false)
  const [newColumnTitle, setNewColumnTitle] = useState('')

  // Load initial state
  useEffect(() => {
    const state = loadBoardState()
    setBoardState(state)
  }, [])

  // Save state whenever it changes
  useEffect(() => {
    if (boardState) {
      saveBoardState(boardState)
    }
  }, [boardState])

  const sensors = useSensors(
    useSensor(PointerSensor, {
      distance: 8,
    }),
    useSensor(KeyboardSensor)
  )

  const getTaskById = useCallback(
    (taskId: string): Task | undefined => {
      return boardState?.tasks[taskId]
    },
    [boardState]
  )

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveId(null)

    if (!boardState) return

    const { active, over } = event

    if (!over) return

    const activeTaskId = active.id as string
    const overTaskId = over.id as string

    // Get all columns
    const newState = { ...boardState }
    const allColumnIds = newState.columns.map((col) => col.id)

    // Check if we're dropping over a column
    if (allColumnIds.includes(String(overTaskId))) {
      // Moving task to a new column
      const activeTask = newState.tasks[activeTaskId]
      if (!activeTask) return

      // Remove from old column
      const oldColumnIndex = newState.columns.findIndex(
        (col) => col.id === activeTask.columnId
      )
      if (oldColumnIndex !== -1) {
        newState.columns[oldColumnIndex].taskIds = newState.columns[
          oldColumnIndex
        ].taskIds.filter((id) => id !== activeTaskId)
      }

      // Add to new column
      const newColumnIndex = newState.columns.findIndex(
        (col) => col.id === overTaskId
      )
      if (newColumnIndex !== -1) {
        newState.columns[newColumnIndex].taskIds.push(activeTaskId)
        activeTask.columnId = String(overTaskId)
      }

      setBoardState(newState)
    } else {
      // Moving within same column or between columns
      const activeTask = newState.tasks[activeTaskId]
      const overTask = newState.tasks[overTaskId]

      if (!activeTask || !overTask) return

      const activeColumnId = activeTask.columnId
      const overColumnId = overTask.columnId

      if (activeColumnId === overColumnId) {
        // Reorder within same column
        const columnIndex = newState.columns.findIndex(
          (col) => col.id === activeColumnId
        )
        if (columnIndex !== -1) {
          const oldIndex = newState.columns[columnIndex].taskIds.indexOf(
            activeTaskId
          )
          const newIndex = newState.columns[columnIndex].taskIds.indexOf(
            overTaskId
          )
          newState.columns[columnIndex].taskIds = arrayMove(
            newState.columns[columnIndex].taskIds,
            oldIndex,
            newIndex
          )
        }
      } else {
        // Moving to different column
        const oldColumnIndex = newState.columns.findIndex(
          (col) => col.id === activeColumnId
        )
        const newColumnIndex = newState.columns.findIndex(
          (col) => col.id === overColumnId
        )

        if (oldColumnIndex !== -1 && newColumnIndex !== -1) {
          newState.columns[oldColumnIndex].taskIds = newState.columns[
            oldColumnIndex
          ].taskIds.filter((id) => id !== activeTaskId)

          const overIndex = newState.columns[newColumnIndex].taskIds.indexOf(
            overTaskId
          )
          newState.columns[newColumnIndex].taskIds.splice(
            overIndex,
            0,
            activeTaskId
          )
          activeTask.columnId = overColumnId
        }
      }

      setBoardState(newState)
    }
  }

  const handleAddTask = (columnId: string, task: Task) => {
    if (!boardState) return

    const newState = { ...boardState }
    newState.tasks[task.id] = task

    const columnIndex = newState.columns.findIndex((col) => col.id === columnId)
    if (columnIndex !== -1) {
      newState.columns[columnIndex].taskIds.push(task.id)
    }

    setBoardState(newState)
  }

  const handleDeleteTask = (taskId: string) => {
    if (!boardState) return

    const newState = { ...boardState }
    const task = newState.tasks[taskId]

    if (task) {
      const columnIndex = newState.columns.findIndex(
        (col) => col.id === task.columnId
      )
      if (columnIndex !== -1) {
        newState.columns[columnIndex].taskIds = newState.columns[
          columnIndex
        ].taskIds.filter((id) => id !== taskId)
      }

      delete newState.tasks[taskId]
    }

    setBoardState(newState)
  }

  const handleUpdateTask = (task: Task) => {
    if (!boardState) return

    const newState = { ...boardState }
    newState.tasks[task.id] = task
    setBoardState(newState)
  }

  const handleAddColumn = () => {
    if (!boardState || !newColumnTitle.trim()) return

    const newState = { ...boardState }
    const newColumn: ColumnType = {
      id: generateId(),
      title: newColumnTitle.trim(),
      color: 'bg-cyan-100',
      taskIds: [],
    }

    newState.columns.push(newColumn)
    setBoardState(newState)
    setNewColumnTitle('')
    setIsAddingColumn(false)
  }

  const handleDeleteColumn = (columnId: string) => {
    if (!boardState) return

    const newState = { ...boardState }

    // Don't allow deleting default columns
    if (
      columnId === 'todo' ||
      columnId === 'in-progress' ||
      columnId === 'completed'
    ) {
      return
    }

    const columnIndex = newState.columns.findIndex((col) => col.id === columnId)
    if (columnIndex !== -1) {
      const tasksToDelete = newState.columns[columnIndex].taskIds
      tasksToDelete.forEach((taskId) => {
        delete newState.tasks[taskId]
      })
      newState.columns.splice(columnIndex, 1)
    }

    setBoardState(newState)
  }

  const activeTask = activeId ? getTaskById(activeId) : undefined

  if (!boardState) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-gray-500">Loading...</div>
      </div>
    )
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="min-h-screen p-6 md:p-8 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        {/* Header */}
        <div className="mb-8 max-w-full">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Project Board
          </h1>
          <p className="text-gray-600">
            Organize your tasks and track progress with ease
          </p>
        </div>

        {/* Kanban Board */}
        <div className="flex gap-6 overflow-x-auto pb-4 max-w-full">
          <SortableContext
            items={boardState.columns.map((col) => col.id)}
            strategy={horizontalListSortingStrategy}
          >
            {boardState.columns.map((column) => (
              <Column
                key={column.id}
                column={column}
                tasks={column.taskIds.map(
                  (taskId) => boardState.tasks[taskId]
                )}
                onAddTask={handleAddTask}
                onDeleteTask={handleDeleteTask}
                onUpdateTask={handleUpdateTask}
                onDeleteColumn={handleDeleteColumn}
              />
            ))}
          </SortableContext>

          {/* Add Column Button */}
          <div className="flex-shrink-0">
            {isAddingColumn ? (
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 w-[300px] space-y-3 animate-slide-up">
                <input
                  autoFocus
                  type="text"
                  value={newColumnTitle}
                  onChange={(e) => setNewColumnTitle(e.target.value)}
                  placeholder="Column name..."
                  className="w-full text-sm font-medium text-gray-900 bg-gray-50 rounded px-3 py-2 border border-gray-200"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleAddColumn()
                    if (e.key === 'Escape') {
                      setIsAddingColumn(false)
                      setNewColumnTitle('')
                    }
                  }}
                />
                <div className="flex gap-2">
                  <button
                    onClick={handleAddColumn}
                    disabled={!newColumnTitle.trim()}
                    className="flex-1 px-4 py-2 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 disabled:opacity-50 rounded-lg transition-colors"
                  >
                    Create
                  </button>
                  <button
                    onClick={() => {
                      setIsAddingColumn(false)
                      setNewColumnTitle('')
                    }}
                    className="flex-1 px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setIsAddingColumn(true)}
                className="w-[300px] h-full min-h-[200px] flex items-center justify-center rounded-xl border-2 border-dashed border-purple-300 hover:border-purple-500 bg-gradient-to-b from-purple-50 to-purple-100 hover:bg-gradient-to-b hover:from-purple-100 hover:to-purple-200 transition-all duration-200 group"
              >
                <div className="text-center">
                  <svg
                    className="w-8 h-8 text-purple-400 group-hover:text-purple-600 mx-auto mb-2 group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <p className="text-sm font-medium text-purple-600 group-hover:text-purple-700">
                    Add Column
                  </p>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Drag Overlay for smooth drag preview */}
      <DragOverlay>
        {activeTask ? (
          <div className="bg-white rounded-lg shadow-2xl border border-purple-300 p-4 max-w-[300px] opacity-95">
            <h3 className="text-sm font-medium text-gray-900">
              {activeTask.title}
            </h3>
            {activeTask.description && (
              <p className="text-xs text-gray-600 mt-2">
                {activeTask.description}
              </p>
            )}
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  )
}
