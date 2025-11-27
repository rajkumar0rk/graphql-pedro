import { useQuery } from "@apollo/client/react";
import { gql } from "@apollo/client";

import Loading from "./Loading";
import type { User } from "../types/User";
import ErrorMessage from "./ErrorMessage";

const GET_ALL_USERS = gql`
  query GetAllUser {
    users {
      id
      name
      username
      age
    }
  }
`;
const Users = () => {
  const {
    data: usersData,
    loading: usersLoading,
    error: usersError,
  } = useQuery<{ users: User[] }>(GET_ALL_USERS);
  if (usersLoading) return <Loading />;
  if (usersError) return <ErrorMessage error={usersError} />;
  return (
    <div>
      <h1>List of Users</h1>
      {usersData && usersData.users ? (
        usersData.users.map((user: User) => {
          return (
            <div key={user.id}>
              <p>Name: {user.name}</p>
              <p>Username: {user.username}</p>
              <p>Age: {user.age}</p>
              <hr />
            </div>
          );
        })
      ) : (
        <p>No Users Found</p>
      )}

      <hr />
    </div>
  );
};

export default Users;
