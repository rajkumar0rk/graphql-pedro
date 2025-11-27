import { useState } from "react";
import { useLazyQuery } from "@apollo/client/react";
import { gql } from "@apollo/client";

import type { User } from "../types/User";

const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      name
      username
      age
    }
  }
`;
const FindUser = () => {
  const [findUser, setFindUser] = useState<string>("");

  const [
    fetchUser,
    { data: userData, loading: userLoading, error: userError },
  ] = useLazyQuery<{ user: User }>(GET_USER);

  return (
    <div>
      <h1>Search User</h1>
      <input
        type="text"
        placeholder="Enter User Id..."
        value={findUser}
        onChange={(e) => setFindUser(e.target.value)}
      />
      <button onClick={() => fetchUser({ variables: { id: findUser } })}>
        Search
      </button>

      <hr />
      {userLoading && <p>Loading...</p>}
      {userError && <p>Error: {userError.message}</p>}
      {userData && userData.user ? (
        <div>
          <h2>User Details:</h2>
          <p>Name: {userData.user.name}</p>
          <p>Username: {userData.user.username}</p>
          <p>Age: {userData.user.age}</p>
        </div>
      ):<p>No User Found</p>}
      <hr />
      <hr />
    </div>
  );
};

export default FindUser;
