import {useState} from 'react'



export function TaskList() {    
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState('')

    const addTask = (e) => {
        e.preventDefault()
        setTasks([...tasks, { text: task, done: false }])
        setTask('')
    }
    

  // Fonction pour marquer comme terminée
  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <section className="container">
        <h2> Ma liste des trucs à faire </h2>
        <div className="add-task">
            
        {/* formulaire d'ajout de taches */}
        <form onSubmit={addTask}>
            <input
            type="text"
            value={task} 
            placeholder="Ajouter une tâche" 
            onChange={(e) => setTask(e.target.value)} />
            <br />
            
            <button 
            type="submit"
            onClick={addTask}
            className='btn' > Ajouter une tache </button>
        </form>
        </div>

{/* Liste des tâches */}
        <div className="task-list">
            <h2>Liste des tâches :</h2>
                <ul>
                    {tasks.map((task, index)=>(
                    <li key={index}>
                    <input type="checkbox" 
                            checked={task.done}
                            onChange={() => toggleTask(index)} /> 

        {/*ajoute la class done si elle n'y est pas quand la checbox est cochée  */}
                    <span
                     className={task.done ? "done" : ""}
                    >
                     {task.text}
                    </span>
                    </li>
            ))}

                </ul>
        </div>

    </section>
)


};









