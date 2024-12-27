import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'

interface TodoItemProps {
  todo: {
    id: number
    text: string
    completed: boolean
  }
  onToggle: () => void
  onRemove: () => void
}

function isValidUrl(string: string) {
  // Add protocol if missing
  const urlString = string.match(/^https?:\/\//) ? string : `https://${string}`;
  try {
    new URL(urlString);
    // Additional check for basic URL pattern
    return /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/.test(string) || 
           /^https?:\/\//.test(string);
  } catch {
    return false;
  }
}

export function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
  const isLink = isValidUrl(todo.text);

  return (
    <li className="flex items-center space-x-2">
      <Checkbox
        checked={todo.completed}
        onCheckedChange={onToggle}
        id={`todo-${todo.id}`}
      />
      <label
        htmlFor={`todo-${todo.id}`}
        className={`flex-grow ${todo.completed ? 'line-through text-gray-500' : ''} ${isLink ? 'underline text-blue-600 hover:text-blue-800' : ''}`}
      >
        {isLink ? (
          <a href={todo.text} target="_blank" rel="noopener noreferrer">
            {todo.text}
          </a>
        ) : (
          todo.text
        )}
      </label>
      <Button variant="ghost" size="icon" onClick={onRemove}>
        <Trash2 className="h-4 w-4" />
      </Button>
    </li>
  )
}

