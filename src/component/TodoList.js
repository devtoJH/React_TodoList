import { useMemo, useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({todo, onUpdate, onDelete}) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearchResult = () => {
    return search === "" ? todo : todo.filter((it) => 
      it.content.toLowerCase().includes(search.toLowerCase())
    );
  };
  const analyzeTodo = useMemo(() => {
    console.log("analyzeTodo 함수 호출");
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todo]);
  const {totalCount, doneCount, notDoneCount} = analyzeTodo;

  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <div>
        <ul style={{lineHeight:'2.0'}}>
          <li>총 개수: {totalCount}</li>
          <li>완료된 할 일: {doneCount}</li>
          <li>완료되지 않은 할 일: {notDoneCount}</li>
        </ul>
      </div>
      <input 
        value={search}
        onChange={onChangeSearch}
        className="searchbar" 
        placeholder="검색어를 입력하세요" 
      />
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem 
            key={it.id} 
            {...it} 
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;