import { deleteDoc, doc, collection, updateDoc, addDoc } from 'firebase/firestore'
import { UseFormResetField } from 'react-hook-form'
import { inputTodo } from '../components/Todos/todoForm'
import { db } from './config'

const todoCollectionRef = collection(db, 'todos')

export const handleDelete = async (id: string) => {
  deleteDoc(doc(todoCollectionRef, `${id}`))
}

export const updateTodo = async (id: string, newTitle: string) => {
  updateDoc(doc(todoCollectionRef, `${id}`), { title: newTitle })
}

export const addTodo = async (data: inputTodo) => {
  addDoc(todoCollectionRef, { title: data.title, done: false })
}
