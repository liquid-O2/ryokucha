'use client'
import { Todos } from '../../app/todos/page'
import * as Icon from 'react-feather'
import { handleDelete, updateTodo } from '../../firebase/firestoreHandlers'
import { useState } from 'react'
import UpdateModal from './updateModal'

type modalProps = {
  id: string
  title: string
  update: boolean
}

const DisplayTodos = ({ todosArray }: { todosArray: Todos[] }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [modalDetails, setModalDetails] = useState<modalProps>()

  const openUpdateModal = (id: string, title: string) => {
    setModalDetails({ id, title, update: true })
    setIsModalVisible(true)
  }

  const handleCheck = (id: string, checked: boolean) => {
    updateTodo(id, 'done', checked)
  }

  return (
    <>
      {isModalVisible && (
        <UpdateModal id={modalDetails!.id} title={modalDetails!.title} setIsModalVisible={setIsModalVisible} />
      )}
      {todosArray.map((todo) => (
        <div
          key={todo.id}
          className={`flex w-full p-4 rounded-lg mt-7 border border-neutral-400 bg-neutral-900 items-center ${
            todo.done && 'opacity-40'
          }`}>
          <div className='todoInfo mr-auto flex relative items-center '>
            <input
              type='checkbox'
              className='mr-2 checkbox'
              defaultChecked={todo.done}
              onChange={(e) => handleCheck(todo.id, e.target.checked)}
            />
            <Icon.Check
              size={16}
              className='absolute left-[2px] top-[25%] checkIcon pointer-events-none stroke-neutral-800'
              strokeWidth={3}
            />
            <p className={`text-lg ${todo.done && 'line-through'} `}>{todo.title}</p>
          </div>

          <div className='actions'>
            <button className='delete p-2 bg-neutral-800 rounded-lg mr-2' onClick={() => handleDelete(todo.id)}>
              <Icon.Trash size={20} />
            </button>
            <button
              className='update p-2 bg-neutral-800 rounded-lg'
              onClick={() => openUpdateModal(todo.id, todo.title)}>
              <Icon.Edit size={20} />
            </button>
          </div>
        </div>
      ))}
    </>
  )
}

export default DisplayTodos
