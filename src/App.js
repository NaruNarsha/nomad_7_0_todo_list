import { useState } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, SetToDos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    // event.preventDefautl() 
    //  - 폼 제출 시 브라우저의 기본 동작을 방지합니다. 
    //    기본적으로 폼을 제출하면 페이지가 새로고침되는데, 
    //    이를 막아줍니다.
    event.preventDefault(); 

    if(toDo === "") {
      return;
    }

    SetToDos(currentArray => [toDo, ...currentArray]);
    setTodo("")
  };

  console.log(toDos);

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange} 
          value={toDo} 
          type="text" 
          placeholder="whrit">
        </input>
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
