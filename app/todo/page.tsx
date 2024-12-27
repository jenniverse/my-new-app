'use client'

import { useState, useEffect } from 'react'
import { AddTodo } from './components/add-todo'
import { TodoItem } from './components/todo-item'
import { useLocalStorage } from './hooks/use-local-storage'

interface Todo {
  id: number
  text: string
  completed: boolean
}

export default function TodoList() {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', [])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }])
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  if (!isLoaded) {
    return null // or a loading spinner
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-lg sm:p-20">
          <div className="max-w-md mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Todo List</h2>
            <AddTodo onAdd={addTodo} />
            <ul className="space-y-2 mt-6">
              {todos.map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={() => toggleTodo(todo.id)}
                  onRemove={() => removeTodo(todo.id)}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

