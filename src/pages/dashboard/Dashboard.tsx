import StatsCard from '@/components/project/StatsCard'
import { fetchProjects } from '@/store/slices/projectSlice'
import { AppDispatch, RootState } from '@/store/store'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const Dashboard: React.FC = () => {
   
    return (
        <div className="space-y-6 p-4">
            <h2 className="text-4xl font-bold text-gray-900">Dashboard</h2>
            {/* <StatsCard /> */}
        </div>
    )
}

export default Dashboard