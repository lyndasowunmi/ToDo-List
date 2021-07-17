import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Userfront from "@userfront/react";
import ToDo  from "./ToDo";
import './App.css';

export const addTodo = (todos, newTodo) => [...todos].concat(newTodo) /*  JEST testing the handleSubmit("addToDo") function */
export const deleteTodo = (todos, deletedToDo) => [...todos.slice(0, deletedToDo)] /*  JEST testing the handleSubmit("deleteToDo") function */


Userfront.init("demo1234");

const SignupForm = Userfront.build({
  toolId: "nkmbbm",
});
const LoginForm = Userfront.build({
  toolId: "alnkkd",
});
const PasswordResetForm = Userfront.build({
  toolId: "dkbmmo",
});


export default function App() {
  return (
    <Router>
      <div>
        <nav id="nav-list">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/reset">Reset</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/reset">
            <PasswordReset />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <SignupForm />
    </div>
  );
}

function Login() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}

function PasswordReset() {
  return (
    <div>
      <PasswordResetForm />
    </div>
  );
}

function Dashboard() {
  return (
   <ToDo />
  );
}