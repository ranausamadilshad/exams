/** @format */

import "./App.css";
import Dashboard from "./app/dashboard";
import ForgetPassword from "./app/forgetpassword";
import Login from "./app/login";
import Logout from "./app/logout";
import Question from "./app/question";
import Register from "./app/register";
import TestSetting from "./app/testSetting";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Register1 from "./app/register/register1";
import Register2 from "./app/register/register2";
function App() {
  return (
    <>
      <Dashboard />
      <TestSetting />
      <Question />
      <Register />
      <Login />
      <ForgetPassword />
      <Logout />
      <Register1 />
      <Register2 />

      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/testsetting">
            <TestSetting />
          </Route>
          <Route exact path="/questions">
            <Question />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/forgetPassword">
            <ForgetPassword />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
        </Routes>
      </BrowserRouter>{" "}
      <Register1 />
      <Register2 /> 
      */}
      {/* <Router>
        <Routes>
          <Route exact path="/" caseSensitive={false} element={<Login />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
