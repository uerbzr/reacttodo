import './App.css';
import {useState} from 'react'
function App() {
  const [tasks, setTasks] = useState([
    { text: 'Go to gym', checked: true },
    { text: 'Drink coffee', checked: false },
])

const handleSubmit = (event) => {
  event.preventDefault()
  console.log(event.target[0].value)
  setTasks([...tasks, {text: event.target[0].value, checked:false }])
}

const handleDelete = (index) => {
    console.log(tasks, tasks.filter(item => {
      
    }))

    const updated = tasks.filter((todoItem, todoIndex) => todoIndex !== index)
    setTasks([...updated])
}

const handleUpdate = (index, checked) => {
    // TODO Find the task by the provided index
    // Change the checked property on the task
    // Update the state array to re-render the component
    // HINT: .map() or access by index
    console.log(tasks[index].checked = checked)

    const updated = tasks[index].checked = checked;
    setTasks([...updated])
}


  return (
    <div className='app'>
    <main>
        <form onSubmit={handleSubmit}>
            <input type="text" name="task" />
            <button type="submit">add task</button>
        </form>

        {
            tasks.map((todoItem, index) => {
                return (
                    <div>
                        <span>{todoItem.text}</span>
                        <input onChange={(event) => handleUpdate(index, event.target.checked)} type="checkbox" checked={todoItem.checked} />
                        <small className="deleteBtn" onClick={() => handleDelete(index)}>Delete</small>
                    </div>
                )
            })
        }
    </main>
</div>
  );
}

export default App;