import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Userfront from "@userfront/react";
import { Redirect} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'; 
import ToDo  from "./ToDo";

import './App.css';

export const addTodo = (todos, newTodo) => [...todos].concat(newTodo) /*  JEST testing the handleSubmit("addToDo") function */
export const deleteTodo = (todos, deletedToDo) => [...todos.slice(0, deletedToDo)] /*  JEST testing the handleSubmit("deleteToDo") function */


Userfront.init("7n84y9n6");

const SignupForm = Userfront.build({
  toolId: "ldmlao",
});
const LoginForm = Userfront.build({
  toolId: "bmbano",
})
//const PasswordResetForm = Userfront.build({
 // toolId: "nabkna",
//});
//const LogoutButton = Userfront.build({
//  toolId: "klodan",
//});



export default function App() {
  return (
    <Router>
      <div>
          
            <span >
              <Link to="/"><img src="https://img.icons8.com/cute-clipart/64/000000/reminders.png" alt="" /> <b className="logo-text">The ToDo Organizer</b></Link>
            </span>
            
        <nav id="nav-list">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li> 
          </ul>
        </nav>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route> 
          <Route path="/logout" > 
          <LogOut/>
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

/*function PasswordReset() {
  return (
    <div>
      <PasswordResetForm />
    </div>
  );
} */

function LogOut() {
  return (
    <div>
     <LoginForm/>
    </div>
  ); 
}

/*function Dashboard() {
  return (
    <div> <button type="submit" onClick={LogOut} ><Link to="/login">Log out</Link></button><div>

    </div>< ToDo /> </div>
  );
} */

function Dashboard() {
  function renderFn({ location }) {
    // If the user is not logged in, redirect to login
    if (!Userfront.accessToken()) {
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location },
          }}
        />
      );
    }

    // If the user is logged in, show the dashboard
    //const userData = JSON.stringify(Userfront.user, null, 2);
    return (
          <div > <button type="button" id="log-out-button" className="btn btn-danger" onClick={Userfront.logout} ><Link  id="log-out-button" to="/login">Log out</Link></button><div>
          </div>< ToDo /> </div>
        
      
    );
  }

  return <Route render={renderFn} />;
}
