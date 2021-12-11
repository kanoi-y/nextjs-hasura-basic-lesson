import { makeVar } from '@apollo/client'

interface task {
  title: string
}

export const todoVar = makeVar<task[]>([]);
