import { BoardState } from '@/types/kanban'

const STORAGE_KEY = 'kanban-board-state'

const DEFAULT_STATE: BoardState = {
  columns: [
    {
      id: 'todo',
      title: 'TODO',
      color: 'bg-purple-100',
      taskIds: [],
    },
    {
      id: 'in-progress',
      title: 'In Progress',
      color: 'bg-blue-100',
      taskIds: [],
    },
    {
      id: 'completed',
      title: 'Completed',
      color: 'bg-green-100',
      taskIds: [],
    },
  ],
  tasks: {},
}

export function loadBoardState(): BoardState {
  if (typeof window === 'undefined') return DEFAULT_STATE

  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
  } catch (error) {
    console.error('Failed to load board state:', error)
  }

  return DEFAULT_STATE
}

export function saveBoardState(state: BoardState): void {
  if (typeof window === 'undefined') return

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch (error) {
    console.error('Failed to save board state:', error)
  }
}

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}
