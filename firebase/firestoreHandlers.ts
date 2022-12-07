import { deleteDoc, doc, collection, updateDoc, addDoc, getDocs } from 'firebase/firestore'
import { inputTodo } from '../components/Todos/todoForm'
import { db } from './config'
import { Todos } from '../app/todos/page'
import { Dispatch, SetStateAction, useEffect } from 'react'

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

export const useFetchTodos = (setTodosArray: Dispatch<SetStateAction<Todos[]>>, todosArray: Todos[]) => {
  useEffect(() => {
    const fetchTodos = async () => {
      const todoCollectionRef = collection(db, 'todos')
      const data = await getDocs(todoCollectionRef)
      const todos = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      return todos as Todos[]
    }
    fetchTodos()
      .then((data) => {
        setTodosArray(data)
      })
      .catch((error) => console.log(error))
  }, [todosArray, setTodosArray])
}
