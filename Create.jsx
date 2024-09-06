import React, { useState } from 'react'
import axios from 'axios'

function Create() {
  const [task, setTask] = useState()
  const handleAdd = () => {
    axios.post('http://localhost:3001/add', {task: task})
    .then(result => {
      location.reload()
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
        <input className="input" type="text" placeholder="Enter To Do" onChange={(e) = setTask(e.target.value)} />
        <button className="button" type='button' onClick={handleAdd} >Submit</button>
    </div>
  )
}

export default Create