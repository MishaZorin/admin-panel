import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router";
// import Login from './Login'

import './App.css'
// react router
function App() {
  const [userNumber, setUserNumber] = useState(2)
  const [userId, setUserId] = useState(null)
  const [update, setUpdate] = useState(null)
  const [statusValue, setstatusValue] = useState('')
  const [nameValue, setnameValue] = useState('')
  const [emailValue, setemailValue] = useState('')
  const [users, setUsers] = useState([
    {
      name: 'Alex',
      email: 'Alex@gmail.com',
      status: 'Active'
    },
    {
      name: 'fsociety',
      email: 'fsociety@gmail.com',
      status: 'Active'
    }
  ])


  function addNewUser() {
    setUsers((u) => {
      let updatedUsers = [...u]
      if (update == true) {
        updatedUsers[userId].name = nameValue
        updatedUsers[userId].email = emailValue
        updatedUsers[userId].status = statusValue
        setUpdate(false)
      }
      else {
        let newUser = {
          name: nameValue,
          email: emailValue,
          status: statusValue
        }
        updatedUsers.push(newUser)



      }
      return updatedUsers
    })



  }
  function deleteUser(userNumber) {
    setUserNumber(userNumber)
    setUsers((u) => {
      let nextUser = [...u]
      nextUser.splice(userNumber, 1)
      return nextUser
    })


  }
  function editUser(userNumber) {
    setUserId(userNumber)
    setUpdate(true)
    setnameValue(users[userNumber].name)
    setemailValue(users[userNumber].email)
    setstatusValue(users[userNumber].status)

  }

  return (

    <>
      {/* <Routes>
        <Route path="step-3" element={<Login />} />
      </Routes> */}
      <div className="app">
        <div className="layout">
          <div className="card">
            <h2>User List</h2>

            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user, userNumber) => {
                  return (
                    <tr>
                      <th>{user.name}</th>
                      <th>{user.email}</th>
                      <td><span className="status active">{user.status}</span></td>
                      <td>
                        <button className="btn btn-edit" onClick={() => editUser(userNumber)}>Edit</button>
                        <button className="btn btn-delete" onClick={() => deleteUser(userNumber)}>Delete</button>
                      </td>
                    </tr>
                  );
                })}
                <tr>

                </tr>

              </tbody>
            </table>



          </div>


          <div className="card">
            <h2>Edit User</h2>

            <label>Name</label>
            <input value={nameValue} onChange={(event) => {
              setnameValue(event.target.value)
            }} />
            <label>Email</label>
            <input value={emailValue} onChange={(event) => {
              setemailValue(event.target.value)
            }} />

            <label>Status</label>
            <select value={statusValue} onChange={(event) => {
              setstatusValue(event.target.value)
            }}>
              <option>Active</option>
              <option>Blocked</option>
            </select>

            <button className="btn btn-primary full" onClick={() => addNewUser()}>Save Changes</button>

            <div className="alert success">User updated successfully!</div>

          </div>
        </div>


      </div>
    </>
  )
}

export default App
