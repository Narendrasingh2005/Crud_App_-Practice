import axios from 'axios';
import React from 'react';


function Update() {
    const nar=async(e)=>{
        e.preventDefault()
        const id = e.target.id.value;
        const name = e.target.name.value;
        const age = e.target.age.value;

        const data = {name,age}
        await axios.put(`http://localhost:9000/users/${id}`,data)
        alert("DATA UPDATE")
    }
  return (
    <div>
        <h1 style={{color:'red'}}>Updated Data</h1>

        <form onSubmit={nar}>
            <label>ID: <input type="text" name='id' /></label>
            <label>NAME: <input type="text" name='name' /></label>
            <label>AGE: <input type="text" name='age' /></label>
            <button type='submit'>SAVE</button>
        </form>
    </div>
  )
}

export default Update