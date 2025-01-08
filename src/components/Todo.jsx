import React, { useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const Todo = () => {

{/* Initialize the useState hook with [] (empty array)
    where multiple values will be stored */}

const [todoList, setTodoList] = useState([]);

{/* Add functionality to the code. When user inputs a text and presses the add button,
     the new task gets added to the list */}
      
const inputRef = useRef();

{/* ----- Add a task ----- */}

const addTodo = () => {
    // Add .trim to remove spaces from beginning and end of text
    const inputText = inputRef.current.value.trim();

    // Condition that checks if there is any input to prevent empty todos
    if (inputText === "") {
        return null;
    }

    const newTodo = {
        id: Date.now(),
        text: inputText,
        isComplete: false,
    }

    // Update the todo list
    setTodoList((prev) => [...prev, newTodo]);

    // Clear input field
    inputRef.current.value = "";

    // Log the input text
    console.log(inputText);
};

{/* ----- Delete a task ----- */}

const deleteTodo = (id) => {
    //Update state by filtering through todos and returning all but id
    setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id != id))
};

{/* ----- Display ----- */}
  return (
    <div className='bg-white place-self-center w-11/12 max-w-md
    flex flex-col p-7 min-h-[550px] rounded-xl'>

    {/* --Title-- */}

    <div className='flex items-center mt-7 gap-2'>
        <img className='w-8' src={todo_icon} alt="todo_icon" />
        <h1 className='text-3xl font-semibold'>To-Do List</h1>
    </div>

    {/* --Input box-- */}

    <div className='flex items-center my-7 bg-gray-200 rounded-full'>
        <input ref={inputRef} className='bg-transparent border-0 outline-none
        flex-1 h-12 pl-6 pr-2 placeholder:text-slate-600' 
        type="text" placeholder='Add a task'/>

        <button type='button' onClick={addTodo} 
        className='border-none rounded-full cursor-pointer
        w-28 h-14 bg-orange-600 text-white text-lg font-medium'>
            ADD +
        </button>
    </div>

{/* --To Do List-- */}

    <div>
        {todoList.map((item) => {
            return <TodoItems text={item.text} id={item.id}
            isComplete={item.isComplete} />
        })}

    {/* Test to display sample text

        <TodoItems text="Learn Coding"/>
        <TodoItems text="Practice for job interviews"/>
    */}

    </div>

    </div> 
  )
}

export default Todo
