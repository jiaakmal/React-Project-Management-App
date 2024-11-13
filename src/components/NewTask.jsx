import React, { useState } from 'react'

export default function NewTask() {
    const [enteredTask , setEnteredTask] = useState()

    function handleChange(event){
        setEnteredTask(event.target.value)

    }

  return (
   <div className='flex items-center gap-4'>

     <h2>New Task</h2>
     <input onChange={handleChange} className='w-64 px-2 py-1 rounded-sm bg-stone-200' type="text" placeholder="Enter task name" />
     
     <button className='text-stone-700 hover:text-stone-950'>Add task</button>
 
   </div>
  )
}
