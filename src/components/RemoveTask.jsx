import React from 'react';



const RemoveTask = ({ tasks, setTasks }) => {
  const removeTask = () => {
    // On garde uniquement les tâches NON cochées
    const newTasks = tasks.filter((task) => !task.done);
    setTasks(newTasks);
  };


    return (
        <div>
            <button 
             className = "btn" 
             onClick={removeTask}>Supprimer la tâche</button>
        </div>
    );
};

export default RemoveTask;