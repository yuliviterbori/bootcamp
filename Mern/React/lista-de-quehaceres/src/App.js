import { useEffect, useState } from 'react'
import ListItems from './components/items';
import './App.css';
import Form from './components/form';

const initialList = [{
  id:1,
  text:"Get Pyhton black belt",
  done: false
},
{
  id:2,
  text:"Get MERN black belt",
  done: false
}]

function App() {
  const localStorageData = localStorage.getItem('TODOLIST1');
  let initialWithLocal = [...initialList];
  if(!localStorageData){
    localStorage.setItem('TODOLIST1', JSON.stringify(initialList));
  }else{
    initialWithLocal = JSON.parse(localStorageData);
  }

  const [list, setList] = useState(initialWithLocal);
  const onDelete = id =>{
    const newList = list.filter(itm => itm.id!== id);
    setList(newList)
  }
  const handleChecked = (id, isDone) =>{
    const newList = list.map(itm => {
      if(itm.id === id){
        return { ...itm, done:isDone}
      }
      return {...itm}
    });
    setList(newList);
    //
  }
  const handleAdd = text =>{
    const newItem = {
      id: list[list.length-1].id+1,
      text: text,
      done: false
    }
    setList([...list, newItem]);
  }

  useEffect(()=>{
    localStorage.setItem('TODOLIST1', JSON.stringify(list));
  }, [list])

  return (
    <div className="App">
      <h1>To Do List</h1>
      <Form handleAdd={handleAdd} />
      <ListItems items={list} onDelete={onDelete} handleChecked={handleChecked} />
    </div>
  );
}

export default App;
