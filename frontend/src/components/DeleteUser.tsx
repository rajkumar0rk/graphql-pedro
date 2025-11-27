import { gql } from '@apollo/client'
import { useMutation } from '@apollo/client/react';
import React from 'react'


const DELETE_USER=gql`
mutation DeleteUser($id:ID!){
  deleteUser(userID:$id){
    name 
    username
    age

  }
}`
const DeleteUser = () => {
  const [id, setId] = React.useState<string>("");
  const[deleteUser]=useMutation(DELETE_USER,{refetchQueries:["GetAllUser"]})
  return (
    <div>
      <h1>Delete User</h1>
      <div>
        <span>
          <label htmlFor="id">ID: </label>
          <input
            type="text"
            name="id"
            placeholder="Enter ID..."
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </span>
      </div>
      <button
        onClick={() => deleteUser({ variables: {id:id} })}
      >
        Delete
      </button>
    <hr />
    </div>
  )
}

export default DeleteUser