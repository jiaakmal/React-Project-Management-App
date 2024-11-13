import React from 'react'
import NewTask from './NewTask'

export default function Task() {
  return (
    <section>
        <h1 className='text-2xl font-bold text-stone-700 mb-4'>TASKS</h1>
          <NewTask/>
       <p className='text-stone-800 my-4'>This project does not have any task yet</p>
       <ul></ul>
    </section>
  )
}
