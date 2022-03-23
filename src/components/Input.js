import { React, useState, useEffect } from 'react';

const Input = ({ setTodoList }) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(value);
    // console.log(value);
  }, [value]);

  return (
    <input 
    type="text" 
    value={value} 
    onChange={(e) => setValue(e.target.value)} 
    onKeyUp={(e) => {
      if(e.key === 'Enter'){
        setTodoList((todos)=>{
          todos.push(value)
          return [...todos]
        })
        setValue('')
      }
    }} />
  );
}

export default Input;