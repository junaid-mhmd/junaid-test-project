import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/screens/Home";
import Login from "./components/Auth/Login";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </Router>
  );
}

export default App;
