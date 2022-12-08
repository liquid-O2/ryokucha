import TodoForm from '../../components/todoForm'
import DisplayTodos from '../../components/displayTodos'
import '../../styles/globals.css'

export type Todos = {
  id: string
  title: string
  done?: boolean
}

const Todo = () => {
  return (
    <>
      <div className='wrapper flex flex-col justify-center relative items-center h-screen w-screen text-neutral-200 '>
        <div className='max-w-[1440px] text-center '>
          <p className='text-4xl mb-6'>Create new todos</p>
          <TodoForm update={false} />
          <DisplayTodos />
        </div>
      </div>
    </>
  )
}

export default Todo
