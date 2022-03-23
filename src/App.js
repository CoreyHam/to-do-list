import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import ClearButton from './components/ClearButton';
import Display from './components/Display';
import FilterButtons from './components/FilterButtons';
import Input from './components/Input';
import Todos from './components/Todos';
import { useState } from 'react';

export default function App() {
  const [todos, setTodoList] = useState(['something']);
  return (
    <div className="app">
      <div className='title'>todos</div>
      <Display>
        <Input setTodoList={setTodoList}/>
        <Todos todos={todos} />
        <div className='bottom-div'>
          <h3>items left</h3>
          <FilterButtons />
          <ClearButton />
        </div>
      </Display>
    </div>
  );
}