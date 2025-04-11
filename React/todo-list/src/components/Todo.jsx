import React, { useState } from "react";
import "tailwindcss";
export const Todo = () => {
  let [todo, setTodo] = useState("");
  let [todoList, setTodoList] = useState([]);

  function handleChange(event) {
    setTodo(event.target.value);
  }

  function handleClick() {
    if(todo){
      let newTodolist = [...todoList];
      newTodolist.push(todo);
      setTodoList(newTodolist);
      setTodo("")
    }else{
      alert("Task is empty")
    }
  }

  function handleDelete(index){
    const updateTodoList = todoList.filter((_,i)=>i != index)
    setTodoList(updateTodoList)
  }

  

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="w-100 flex-col px-14 py-8 bg-gray-800 rounded-2xl">
          <h1 className="flex justify-center items-center text-white">
            Todo List
          </h1>
          <div className="flex-row mt-5">
            <input
              className="text-black bg-white placeholder-black rounded m-5 p-1 outline-none"
              type="text"
              placeholder="Enter your task"
              onChange={handleChange}
              value={todo}
            />
            <input
              className=" bg-red-500 rounded p-1"
              type="button"
              value="Add"
              onClick={() => handleClick(todo)}
              style={{ cursor: "pointer" }}
            />
            {todoList.map((todo, index) => (
              <div
                key={index}
                className="flex items-center justify-between w-70 bg-white rounded mt-2"
              >
                {/* <span className="w-6 rounded-4xl text-white flex items-center justify-center cursor-pointer border-1">A</span> */}
                <div className="flex relative group">
                <h2 className="flex-grow ml-2 w-57">{todo}</h2>
                <button className="opacity-0 group-hover:opacity-100 w-10 bg-red-500 rounded text-white flex items-center justify-center cursor-pointer transition-opacity duration-300 ml-1"
                onClick={()=>handleDelete(index)}
                >
                  X
                </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
