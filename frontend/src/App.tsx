import "./App.css";
import AddUsers from "./components/AddUsers";
import DeleteUser from "./components/DeleteUser";
import FindMovies from "./components/FindMovies";
import FindUser from "./components/FindUser";
import Movies from "./components/Movies";
import UpdateUser from "./components/UpdateUser";
import Users from "./components/Users";

function App() {
  return (
    <div>
      <h1>Welcome to GraphQL Frontend</h1>
      <Users/>
      <FindUser/>
      <AddUsers/>
      <UpdateUser/>
      <DeleteUser/>
      <Movies/>
      <FindMovies/>
      <hr />
    </div>
  );
}

export default App;
