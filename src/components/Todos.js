import React from 'react'

const Todos = ({ todos }) => {
  return (
    todos.map((todo, i)=>{
      return <Todo status={'active'} todo={todo} />
    })
  )
}

const Todo = ({ todo, status, label, id }) => {
  return (
    <>
      <div className='todo'>
        <button><i class="bi bi-circle"></i></button>{todo}<button></button></div>
    </>
  )
}

export default Todos