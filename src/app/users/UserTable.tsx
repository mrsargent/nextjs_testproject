import React from 'react'
import {sort} from 'fast-sort'
import Link from 'next/link';

interface User {
    id: number;
    name: string;
    email: string;
  }

interface Props {
    sortOrder:string;
}


const UserTable = async ({sortOrder}: Props) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', 
        {next: {revalidate: 10 }}); //next.js caches data but gets new data every 10 seconds
      const users: User[] = await res.json();
      const sortedUsers: User[] = sort(users).asc(
        sortOrder === "email" ? 
        user => user.email : 
        user => user.name
    );

  return (
    <table className='table table-bordered'>
    <thead className='text-2xl'>
      <th>
        <Link href="/users?sortOrder=name">Name</Link>
      </th>
      <th>
      <Link href="/users?sortOrder=email">Email</Link>
      </th>
    </thead>
    <tbody>
    {sortedUsers.map(user=><tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      </tr>)}
    </tbody>
    
  </table>
  )
}

export default UserTable