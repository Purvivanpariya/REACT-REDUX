import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { VIEW_USER } from '../Action/action'
import { Link } from 'react-router-dom'

function View() {
    const patch = useDispatch()
    // let url = "http://localhost:8000/user"
    const record = useSelector(state => state.ApiUser.user)

    const DeleteData = (id) =>{
      patch()
    }
   

    useEffect(()=>{

      patch(VIEW_USER())
        // fetch(url)
        // .then(res => res.json())
        // .then(data => setRecord(data))
        
        // axios.get(`${url}`)
        // .then((res)=>{
        //   setRecord(res.data);
        // }).catch((err)=>{
        //   console.log(err);
        //   return false
        // })
    },[])

  return (
    <center>
        <h1>View Page</h1>

        <table border={1}>
          <thead>
            <th>Name</th>
            <th>Phone</th>
            <th>Delete</th>
            <th>Edit</th>
          </thead>
          <tbody>
              {
                record.map((val)=>{
                  return(
                    <tr>
                      <td>{val.name}</td>
                      <td>{val.phone}</td>
                      <td>
                        <button onClick={() => DeleteData(val.id)}>Delete</button>
                      </td>
                    </tr>
                  )
                })
              }
          </tbody>
        </table>

        
              <Link to={'/add'}>Add</Link>
    </center>
  )
}

export default View