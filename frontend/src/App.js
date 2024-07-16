import "./App.css";
import CreateUser from "./components/User/CreateUser";
import ShowUser from "./components/User/ShowUser";
import { Route, Routes } from "react-router-dom";
import EditUser from "./components/User/EditUser";
import User from "./components/User/User";
import Header from "./components/Common/Header";
import Home from "./components/Layout/Home";
import LogIn from "./components/User/LogIn";
import Signup from "./components/User/Signup";
import AuthRoute from "./components/Layout/AuthRoute";

function App() {
  return (
    <div className="App">
      <header className="container">
        <Routes>
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route 
            path="*" 
            element={
              <AuthRoute>
                <Header />
                <Routes>
                  <Route path="/" element={<ShowUser />} />
                  <Route path="/edit-user/:id" element={<EditUser />} />
                  <Route path="/user/:id" element={<User />} />
                  <Route path="/create-user" element={<CreateUser />} />
                </Routes>
              </AuthRoute>
            } 
          />
        </Routes>
      </header>
    </div>
  );
}

export default App;
