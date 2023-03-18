import React from 'react'

const AddTask = ({taskList , setTaskList , selectedTask , setSelectedTask}) => {

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(selectedTask.id){
            const updateTaskList = taskList.map((todo)=>(
                todo.id === selectedTask.id ? {id:selectedTask.id , name:e.target.form.task.value }: {id: todo.id , name:todo.name}
            ));
            setTaskList(updateTaskList);
            setSelectedTask({});
            console.log(taskList);
        }else{
            const newTask = {
                id : Math.random(),
                name: e.target.form.task.value,
            }
            setTaskList([...taskList , newTask]);
            e.target.form.task.value="";
            setSelectedTask({});// remove input
            console.log(taskList);
        }

    }
  return (
    <form>
      <input  value={selectedTask.name || ""} type="text" name='task' placeholder='add task' onChange={e=> setSelectedTask({...selectedTask , name:e.target.form.task.value})} />
            <button type="submit" onClick={handleSubmit}>{selectedTask.id ? "Update" : "Add Task"}</button>
    </form>
  )
}

export default AddTask
