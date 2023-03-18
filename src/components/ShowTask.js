import React from 'react'

const ShowTask = ({taskList , setTaskList , selectedTask , setSelectedTask}) => {

    //clear
    const handleClear =()=>{
        setTaskList([]);
    }

    //delete
    const handleDelete =(id)=>{
        const updatedTasks = taskList.filter( todo=> todo.id !== id);
        setTaskList(updatedTasks);
    }

    //edit
    const handleEdit = (id)=>{
        const selected = taskList.find(todo => todo.id === id);
        setSelectedTask(selected);
        console.log(selectedTask);
    }

  return (
    <div>
      <div className='head'>
        <span onClick={handleClear} className='clear'>Clear All</span>
      </div>
      <ul>
        {
            taskList.map((task) =>(
                <li key={task.id}>
                    <p className='name'>{task.name}</p>
                    <i className='bi bi-pencil-square' onClick={()=>handleEdit(task.id)}></i>
                    <i className='bi bi-trash' onClick={()=> handleDelete(task.id)} ></i>
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default ShowTask
