import {Switch,Route,Redirect} from "react-router-dom";
import Login from "../src/components/login";
import Navbar from "./navbar";
import Data from "./components/data";
import Register from "./components/register";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div>
        <main className="container">
        <Switch>
      <Route path="/login" component={Login}></Route>
      <Route path="/data" component={Data}></Route>
      <Route path="/register" component={Register}></Route>
      <Route exact path="/" component={Register}></Route>
      <Redirect to="/register"></Redirect>
      </Switch>
      </main>
      </div>
    </div>
  );
}

export default App;
