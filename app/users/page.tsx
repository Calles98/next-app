import React from 'react'

interface User {
  id: number; 
  name: string;
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    //next: { revalidate: 10 },  // data cache
    cache: 'no-store'
  });
  const users: User[] = await res.json(); 

  return (
    
    <>
      <h1>Users</h1><ul>
        <p>{new Date().toLocaleTimeString()}</p>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  )
}

export default UsersPage