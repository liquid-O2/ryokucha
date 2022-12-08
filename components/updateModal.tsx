import { Dispatch, SetStateAction } from 'react'
import TodoForm from './todoForm'
import * as Icon from 'react-feather'

type UpdateModalProps = {
  id: string
  title: string
  setIsModalVisible: Dispatch<SetStateAction<boolean>>
}

const UpdateModal = ({ id, title, setIsModalVisible }: UpdateModalProps) => {
  return (
    <>
      <div className='modalWrapper absolute flex justify-center items-center h-screen w-screen top-0 left-0 z-40 bg-black bg-opacity-70'>
        <div className='update-wrapper px-8 pt-16 pb-8 relative bg-neutral-900 rounded-2xl z-50'>
          <TodoForm update id={id} formTitle={title} setIsModalVisible={setIsModalVisible} />
          <button className='absolute top-4 right-4' onClick={() => setIsModalVisible((visibility) => !visibility)}>
            <Icon.X size={24} />
          </button>
        </div>
      </div>
    </>
  )
}

export default UpdateModal
