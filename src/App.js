import './App.css';
import React,{useState} from 'react';
import AddUser from './component/Users/AddUser';
import UserList from './component/Users/UserList';

function App() {
  const [userData, setUserData] = useState([])

  const addUserHandler = (username, userage) =>{
    setUserData(prevuserData =>{
      return [...prevuserData, {name:username, age:userage,id:Math.random()}]
    })
  }
  return (
    <div className="App">
    <AddUser onAdduser={addUserHandler}></AddUser>
    <UserList users={userData}></UserList>
    </div>
  );
}

export default App;
