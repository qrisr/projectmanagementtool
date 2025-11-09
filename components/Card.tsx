'use client'

import { Task } from '@/types/kanban'
import { useState } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { PromptModal } from './PromptModal'

interface CardProps {
  task: Task
  onDelete: (id: string) => void
  onUpdate: (task: Task) => void
}

export function Card({ task, onDelete, onUpdate }: CardProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState(task.title)
  const [editedDescription, setEditedDescription] = useState(task.description)
  const [showOptions, setShowOptions] = useState(false)
  const [isGeneratingPrompt, setIsGeneratingPrompt] = useState(false)
  const [generatedPrompt, setGeneratedPrompt] = useState('')
  const [showPromptModal, setShowPromptModal] = useState(false)

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  }

  const handleSave = () => {
    if (editedTitle.trim()) {
      onUpdate({
        ...task,
        title: editedTitle.trim(),
        description: editedDescription.trim(),
      })
      setIsEditing(false)
    }
  }

  const handleCancel = () => {
    setEditedTitle(task.title)
    setEditedDescription(task.description)
    setIsEditing(false)
  }

  const handleGeneratePrompt = async () => {
    setIsGeneratingPrompt(true)
    try {
      const response = await fetch('/api/generate-prompt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cardTitle: task.title }),
      })

      if (!response.ok) {
        throw new Error('Failed to generate prompt')
      }

      const data = await response.json()
      setGeneratedPrompt(data.prompt)
      setShowPromptModal(true)
    } catch (error) {
      console.error('Error generating prompt:', error)
      alert('Failed to generate prompt. Please check your OpenAI API key.')
    } finally {
      setIsGeneratingPrompt(false)
    }
  }

  if (isEditing) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 space-y-3 animate-slide-up"
      >
        <input
          autoFocus
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          placeholder="Task title..."
          className="w-full text-sm font-medium text-gray-900 bg-gray-50 rounded px-2 py-1 border border-gray-200"
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSave()
            if (e.key === 'Escape') handleCancel()
          }}
        />
        <textarea
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
          placeholder="Add notes..."
          className="w-full text-xs text-gray-600 bg-gray-50 rounded px-2 py-1 border border-gray-200 resize-none h-20"
          onKeyDown={(e) => {
            if (e.key === 'Escape') handleCancel()
          }}
        />
        <div className="flex gap-2">
          <button
            onClick={handleSave}
            className="flex-1 px-2 py-1 text-xs font-medium text-white bg-purple-600 hover:bg-purple-700 rounded transition-colors"
          >
            Save
          </button>
          <button
            onClick={handleCancel}
            className="flex-1 px-2 py-1 text-xs font-medium text-gray-600 bg-gray-200 hover:bg-gray-300 rounded transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="relative group"
    >
      <div
        {...attributes}
        {...listeners}
        className="bg-white rounded-lg shadow-sm hover:shadow-md border border-gray-200 hover:border-purple-300 p-4 cursor-grab active:cursor-grabbing transition-all duration-200"
      >
        <div className="flex justify-between items-start gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-medium text-gray-900 break-words">
              {task.title}
            </h3>
            {task.description && (
              <p className="text-xs text-gray-600 mt-2 break-words line-clamp-3">
                {task.description}
              </p>
            )}
          </div>
          <div className="flex gap-1 flex-shrink-0">
            <button
              onClick={handleGeneratePrompt}
              disabled={isGeneratingPrompt}
              className="p-1 text-amber-500 hover:text-amber-600 hover:bg-amber-50 rounded transition-all disabled:opacity-50"
              title="Generate AI prompt for this feature"
            >
              {isGeneratingPrompt ? (
                <svg
                  className="w-4 h-4 animate-spin"
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
              ) : (
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.343a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM15.657 14.657a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM11 17a1 1 0 110-2v1a1 1 0 11-2 0v-1a1 1 0 112 0v1zM5.343 15.657a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM2 10a1 1 0 01-1 1H0a1 1 0 110-2h1a1 1 0 011 1zM5.343 5.343a1 1 0 001.414-1.414L6.05 3.222a1 1 0 00-1.414 1.414l.707.707z" />
                </svg>
              )}
            </button>
            <button
              onClick={() => setShowOptions(!showOptions)}
              className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-gray-600 rounded transition-all"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 6a2 2 0 11-4 0 2 2 0 014 0zM10 12a2 2 0 11-4 0 2 2 0 014 0zM10 18a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
          </div>
        </div>

        {showOptions && (
          <div className="absolute right-0 top-12 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
            <button
              onClick={() => {
                setIsEditing(true)
                setShowOptions(false)
              }}
              className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 text-left rounded-t-lg transition-colors"
            >
              Edit
            </button>
            <button
              onClick={() => {
                onDelete(task.id)
                setShowOptions(false)
              }}
              className="w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 text-left rounded-b-lg transition-colors"
            >
              Delete
            </button>
          </div>
        )}
      </div>

      <PromptModal
        isOpen={showPromptModal}
        prompt={generatedPrompt}
        cardTitle={task.title}
        onClose={() => setShowPromptModal(false)}
      />
    </div>
  )
}
