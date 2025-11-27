import { useState } from "react";
import type { CreateUser } from "../types/User";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";

const CREATE_USER = gql`
  mutation CreateUser($userDetail: CreateUserInput!) {
    createUser(user: $userDetail) {
      ...UserDetail
    }
  }

  fragment UserDetail on User {
    name
    username
    age
  }
`;

const AddUsers = () => {
  const [user, setUser] = useState<CreateUser>({
    name: "",
    username: "",
    age: 0,
  });
  const [createUser] = useMutation(CREATE_USER, {
    refetchQueries: ["GetAllUser"],
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUser({ variables: { userDetail: user } });
  };
  return (
    <div>
      <h1>Add User</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <span>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Enter Name..."
              value={user.name}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </span>
        </div>
        <div>
          <span>
            <label htmlFor="age">Age: </label>
            <input
              required
              type="number"
              name="age"
              id="age"
              placeholder="Enter Age..."
              value={user.age}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, age: Number(e.target.value) }))
              }
            />
          </span>
        </div>
        <div>
          <span>
            <label htmlFor="username">UserName: </label>
            <input
              type="text"
              required
              name="username"
              id="username"
              placeholder="Enter UserName..."
              value={user.username}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, username: e.target.value }))
              }
            />
          </span>
        </div>
        <div>
          <span>
            <label htmlFor="nationality">Nationality: </label>
            <select
              name="nationality"
              id="nationality"
              value={user.nationality}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, nationality: e.target.value }))
              }
            >
              <option value="INDIA">INDIA</option>
              <option value="USA">USA</option>
              <option value="CANADA">CANADA</option>
              <option value="GERMANY">GERMANY</option>
              <option value="BRAZIL">BRAZIL</option>
            </select>
          </span>
        </div>
        <button type="submit">Submit</button>
      </form>
      <hr />
    </div>
  );
};

export default AddUsers;
