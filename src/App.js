import {useState} from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [list,addList] = useState([]);
  const onChangeEvent = (e) => {
    //event.target = 이벤트 대상 오브젝트(input)
    setToDo(e.target.value);
  };
  const onSubmit = (e) =>{
    e.preventDefault();
    if(toDo === "") return;
    setToDo("");
    addList((currentArray)=> [toDo, ...currentArray]);
  }
  return (
    <div className="App">
      <h1>To Do List {list.length}</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={toDo} onChange={onChangeEvent}/>
        <button>Add</button>
      </form>

      <ul>
        {list.map((currentItem,value)=>(
          <li key={value}>{currentItem}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;
