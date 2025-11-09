export interface Task {
  id: string
  title: string
  description: string
  columnId: string
  createdAt: number
}

export interface Column {
  id: string
  title: string
  color: string
  taskIds: string[]
}

export interface BoardState {
  columns: Column[]
  tasks: Record<string, Task>
}
