import React, { useState } from 'react'

const Search = () => {
  const allusers = ['john', 'jane', 'shane', 'marin', 'lissa'];
  const [users, setUsers] = useState(allusers);
  const [str, setStr] = useState('');

 
   const handleChange = (e) => {
    const searchStr = e.target.value.toLowerCase();
    setStr(searchStr);

     // Filter users based on the search string
     
    const newUsers = allusers.filter((user) => user.toLowerCase().includes(searchStr));
    
    // Update the state with the filtered users
    setUsers(newUsers);
  };
  
  return (
    <div>
      <input type="text" placeholder='search' onChange={handleChange}  />
      
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  )
}

export default Search


