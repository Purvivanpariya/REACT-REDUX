import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ADD_USER } from '../Action/action'
import { Link, useNavigate } from 'react-router-dom'

function Add() {

    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const patch = useDispatch()
    const nav = useNavigate()
    const HandleSubmit =(e) =>{
        e.preventDefault()
        let obj = {
            name,phone
        }
        patch(ADD_USER(obj))
        setName('')
        setPhone('')
        nav('/')
    }
  return (
    <center>
        <h1>Add Page</h1>
        <form onSubmit={HandleSubmit}>
            <table>
                <thead>
                    <tr>
                        <td>Name :- </td>
                        <td><input type="text" onChange={(e) => setName(e.target.value)} value={name}/></td>
                    </tr>
                    <tr>
                        <td>Phone :- </td>
                        <td><input type="text"  onChange={(e) => setPhone(e.target.value)} value={phone}/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><button type='submit'>submit</button></td>
                    </tr>
                </thead>

            </table>
        </form>
        <Link to={'/'}>View</Link>
    </center>

    
  )
}

export default Add