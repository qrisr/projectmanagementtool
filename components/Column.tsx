'use client'

import { Column as ColumnType, Task } from '@/types/kanban'
import { useState } from 'react'
import { useDroppable } from '@dnd-kit/core'
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { Card } from './Card'

interface ColumnProps {
  column: ColumnType
  tasks: Task[]
  onAddTask: (columnId: string, task: Task) => void
  onDeleteTask: (taskId: string) => void
  onUpdateTask: (task: Task) => void
  onDeleteColumn: (columnId: string) => void
}

export function Column({
  column,
  tasks,
  onAddTask,
  onDeleteTask,
  onUpdateTask,
  onDeleteColumn,
}: ColumnProps) {
  const [isAddingTask, setIsAddingTask] = useState(false)
  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [newTaskDescription, setNewTaskDescription] = useState('')
  const [showColumnOptions, setShowColumnOptions] = useState(false)

  const { setNodeRef } = useDroppable({
    id: column.id,
  })

  const handleAddTask = () => {
    if (newTaskTitle.trim()) {
      const newTask: Task = {
        id: Date.now().toString(36) + Math.random().toString(36).substr(2),
        title: newTaskTitle.trim(),
        description: newTaskDescription.trim(),
        columnId: column.id,
        createdAt: Date.now(),
      }
      onAddTask(column.id, newTask)
      setNewTaskTitle('')
      setNewTaskDescription('')
      setIsAddingTask(false)
    }
  }

  return (
    <div className="flex flex-col bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm h-full min-w-[300px] max-w-[350px]">
      {/* Column Header */}
      <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 flex-1">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${column.color} opacity-80`} />
            <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
              {column.title}
            </h2>
          </div>
          <span className="px-2 py-0.5 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 rounded-full">
            {tasks.length}
          </span>
        </div>
        {column.id !== 'todo' && column.id !== 'in-progress' && column.id !== 'completed' && (
          <button
            onClick={() => setShowColumnOptions(!showColumnOptions)}
            className="p-1 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 rounded transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 6a2 2 0 11-4 0 2 2 0 014 0zM10 12a2 2 0 11-4 0 2 2 0 014 0zM10 18a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        )}
        {showColumnOptions && (
          <div className="absolute right-5 top-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
            <button
              onClick={() => {
                onDeleteColumn(column.id)
                setShowColumnOptions(false)
              }}
              className="w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 text-left rounded-lg transition-colors"
            >
              Delete Column
            </button>
          </div>
        )}
      </div>

      {/* Tasks Container */}
      <div
        ref={setNodeRef}
        className="flex-1 overflow-y-auto px-4 py-3 space-y-3"
      >
        <SortableContext
          items={column.taskIds}
          strategy={verticalListSortingStrategy}
        >
          {tasks.map((task) => (
            <Card
              key={task.id}
              task={task}
              onDelete={onDeleteTask}
              onUpdate={onUpdateTask}
            />
          ))}
        </SortableContext>
      </div>

      {/* Add Task Section */}
      <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-3">
        {isAddingTask ? (
          <div className="space-y-2 animate-slide-up">
            <input
              autoFocus
              type="text"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              placeholder="Task title..."
              className="w-full text-sm font-medium text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 rounded px-3 py-2 border border-gray-200 dark:border-gray-600 focus:border-purple-300 dark:focus:border-purple-500 focus:ring-2 focus:ring-purple-100 dark:focus:ring-purple-900"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  if (newTaskTitle.trim()) {
                    handleAddTask()
                  }
                }
                if (e.key === 'Escape') {
                  setIsAddingTask(false)
                  setNewTaskTitle('')
                  setNewTaskDescription('')
                }
              }}
            />
            <textarea
              value={newTaskDescription}
              onChange={(e) => setNewTaskDescription(e.target.value)}
              placeholder="Add notes (optional)..."
              className="w-full text-xs text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 rounded px-3 py-2 border border-gray-200 dark:border-gray-600 focus:border-purple-300 dark:focus:border-purple-500 focus:ring-2 focus:ring-purple-100 dark:focus:ring-purple-900 resize-none h-16"
            />
            <div className="flex gap-2">
              <button
                onClick={handleAddTask}
                disabled={!newTaskTitle.trim()}
                className="flex-1 px-3 py-2 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
              >
                Add Task
              </button>
              <button
                onClick={() => {
                  setIsAddingTask(false)
                  setNewTaskTitle('')
                  setNewTaskDescription('')
                }}
                className="flex-1 px-3 py-2 text-xs font-semibold text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setIsAddingTask(true)}
            className="w-full px-4 py-2.5 text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg transition-colors flex items-center justify-center gap-2 group"
          >
            <svg
              className="w-4 h-4 group-hover:scale-110 transition-transform"
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
            Add Card
          </button>
        )}
      </div>
    </div>
  )
}
