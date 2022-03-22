import './App.css';
import ClearButton from './components/ClearButton';
import Display from './components/Display';
import FilterButtons from './components/FilterButtons';
import Input from './components/Input';
import Todos from './components/Todos';

export default function App() {
  return (
    <div className="app">
      <Display />
      <Input />
      <Todos />
      <FilterButtons />
      <ClearButton />
    </div>
  );
}