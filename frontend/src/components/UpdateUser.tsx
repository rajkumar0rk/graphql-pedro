import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";
import { useState } from "react";

const UPDATE_USERNAME = gql`
  mutation UpdateUserName($id: ID!, $username: String!) {
    updateUserName(user:{id: $id, username: $username}) {
      name
      username
      age
    }
  }
`;
const UpdateUser = () => {
  const [id, setId] = useState<string>("");
  const [userName, setUserName] = useState<string>("");

  const [updateUserName] = useMutation(UPDATE_USERNAME,{refetchQueries:["GetAllUser"]});
  return (
    <div>
      <h1>Update UserName</h1>
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
      <div>
        <span>
          <label htmlFor="username">UserName: </label>
          <input
            type="text"
            name="username"
            placeholder="Enter UserName..."
            id="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </span>
      </div>
      <button
        onClick={() => updateUserName({ variables: {id:id, username: userName } })}
      >
        Update
      </button>
      <hr />
    </div>
  );
};

export default UpdateUser;
