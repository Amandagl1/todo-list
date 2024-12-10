import React, { useRef } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems.jsx'

const Todo = () => {

const [todoList, setTodoList] = useState([]);

{/* Add functionality to the code. When user inputs a text and presses the add button,
     the new task gets added to the list */}
const inputRef = useRef();

const addText = () => {
    {/* Add .trim to remove spaces from beginning and end of text */}
    const inputText = inputRef.current.value.trim();
    {/* Log the inputted value to the console */}
    console.log(inputText);
}

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md
    flex flex-col p-7 min-h-[550px] rounded-xl'>

    {/* --Title-- */}

    <div className='flex items-center mt-7 gap-2'>
        <img className='w-8' src={todo_icon} alt="todo_icon" />
        <h1 className='text-3xl font-semibold'>To-Do List</h1>
    </div>

    {/* --Input box-- */}

    <div className='flex items-center my-7 bg-gray-200
    rounded-full'>
        <input ref={inputRef} className='bg-transparent border-0 outline-none
        flex-1 h-12 pl-6 pr-2 placeholder:text-slate-600' 
        type="text" placeholder='Add a task'/>
        <button onClick={addText} className='border-none rounded-full 
        bg-orange-600 w-28 h-14 text-white text-lg
        font-medium cursor-pointer'>ADD +</button>
    </div>

{/* --To Do List-- */}

    <div>
        <TodoItems text="Learn Coding"/>
        <TodoItems text="Practice for job interviews"/>
    </div>

    </div>
  )
}

export default Todo
