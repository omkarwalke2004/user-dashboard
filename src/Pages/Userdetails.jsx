import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchUsers } from '../utils/api';

const Userdetails = () => {
    const{id} = useParams();
    const[user,setuser]= useState(null);
    useEffect(()=>{
        fetchUsers().then((data)=>{
            setuser(data.find((u)=>u.id.toString() === id))
        })
    },[id])
    if(!user) return <h1>Loading...</h1>
  return (
<div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 p-8 text-white">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg text-gray-900">
        {/* Enhanced Heading */}
        <h2 className="text-4xl font-semibold mb-6 text-center text-yellow-300">
          User Details
        </h2>

        {/* User Info */}
        <div className="space-y-4">
          <p className="text-2xl font-semibold">Name: <span className="font-normal">{user.name}</span></p>
          <p className="text-xl">Email: <span className="font-normal">{user.email}</span></p>
          <p className="text-xl">City: <span className="font-normal">{user.address.city}</span></p>
          <p className="text-xl">Company: <span className="font-normal">{user.company.name}</span></p>
        </div>

        {/* Address Info */}
        <div className="mt-6">
          <h3 className="text-2xl font-mono text-yellow-600">Address:</h3>
          <p className="text-lg">Street: <span className="font-normal">{user.address.street}</span></p>
          <p className="text-lg">Suite: <span className="font-normal">{user.address.suite}</span></p>
          <p className="text-lg">Zipcode: <span className="font-normal">{user.address.zipcode}</span></p>
        </div>
      </div>
    </div>


  )
}

export default Userdetails
