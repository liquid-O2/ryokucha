import { deleteDoc, doc, collection, updateDoc, addDoc } from 'firebase/firestore'
import { inputTodo } from '../components/Todos/todoForm'
import { db } from './config'

const todoCollectionRef = collection(db, 'todos')

export const handleDelete = async (id: string) => {
  deleteDoc(doc(todoCollectionRef, `${id}`))
}

export const updateTodo = async (id: string, key: string, value: string | boolean) => {
  updateDoc(doc(todoCollectionRef, `${id}`), { [key]: value })
}

export const addTodo = async (data: inputTodo) => {
  addDoc(todoCollectionRef, { title: data.title, done: false })
}
