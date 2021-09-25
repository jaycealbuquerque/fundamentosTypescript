
type Todo = {
  title: string;
  description: string;
  complete: boolean;
}

// readonly
const todo: Readonly<Todo> = {
  title: 'assistir dark denovo',
  description: 'relembrar os detalhes',
  complete: false
}

todo.complete = true

// Partial
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate }
}

const todo2: Todo = updateTodo(todo, { complete: true })

// pick
type TodoPreview = Pick<Todo, 'title' | 'complete'>

const todo3: TodoPreview = {
  title: 'estudar',
  complete: true
}

// omit
type TodoPreview2 = Omit<Todo, 'description'>

const todo4: TodoPreview2 = {
  title: 'estudar denovo',
  complete: true
}