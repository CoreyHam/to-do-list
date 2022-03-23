import React from 'react'

const Todos = () => {
  return (
    <>
    <Todo status={[]} label={''} id={[]} /> {/* I need to get the label from the input somehow */}
    </>
  )
}

const Todo = ({status, label, id}) => {
  return (
    <>
    <div className='todo'>{label}</div>
    </>
  )
}

export default Todos