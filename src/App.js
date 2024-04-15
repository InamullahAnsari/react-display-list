import React, { useState, useEffect } from 'react';
import './style.css';

function App() {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    var url = 'https://jsonplaceholder.typicode.com/users';
    var data = await fetch(url);
    var users = await data.json();
    console.log(users);
    setUsers(users);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {users.map((user) => (
        <ul>
          <li>{user.name}</li>
          <li>{user.email}</li>
        </ul>
      ))}
    </div>
  );
}

export default App;
