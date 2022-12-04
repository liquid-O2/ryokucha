import { collection, getDocs } from 'firebase/firestore'
import TodoForm from '../../components/Todos/todoForm'
import DisplayTodos from '../../components/Todos/displayTodos'
import { db } from '../../firebase/config'
import '../../styles/globals.css'

export type Todos = {
  id: string
  title: string
  done?: boolean
}

const getData = async () => {
  const todoCollectionRef = collection(db, 'todos')
  const data = await getDocs(todoCollectionRef)
  const todos = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  return todos as Todos[]
}

const Todo = async () => {
  const todos = await getData()

  return (
    <>
      <div className='wrapper flex flex-col justify-center relative items-center h-screen w-screen text-neutral-200 '>
        <div className='max-w-[1440px] text-center '>
          <p className='text-4xl mb-6'>Create new todos</p>
          <TodoForm update={false} id='' />
          <DisplayTodos todosArray={todos} />
        </div>
      </div>
    </>
  )
}

export default Todo
