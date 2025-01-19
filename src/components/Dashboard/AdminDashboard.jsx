import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTAsk from '../others/AllTAsk'

function AdminDashboard() {
    return (
        <div className='h-screen w-full p-10'>
            <Header />
            <CreateTask/>
            <AllTAsk/>
        </div>
    )
}

export default AdminDashboard
