import logo from './logo.svg';
import './App.css';
import Login from './components/userside/Login';
import Signup from './components/userside/Signup';
import Todo from './components/todo/Todo';
import {
  Routes,
  Route,
} from "react-router-dom";
import Auth from './services/Auth';
import Trash from './components/todo/Trash';
import Expire from './components/todo/Expire';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<Auth/>}>
          <Route path="/todo" element={<Todo />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/expaireTask" element={<Expire/>} />


      </Route>
    </Routes>
  );
}

export default App;
