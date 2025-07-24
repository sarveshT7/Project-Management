import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Activity, BarChart3 } from 'lucide-react'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const TeamProdChart = ({ teamProductivityData }) => {
    return (
        <Card className='rounded-lg shadow-md hover:bg-gray-50 transition-colors'>
            <CardHeader>
                <CardTitle className='flex font-medium text-gray-900 text-xl items-center gap-x-2'>
                    <div className={`rounded-full p-2 transition-transform duration-300
                    hover:scale-110 `}>
                        <BarChart3 className="mr-2 h-5 w-5 text-gray-500" />
                    </div>
                    Team Productivity
                </CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription className='space-y-1'>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={teamProductivityData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="member" angle={-45} textAnchor="end" height={100} />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="completedTasks" fill="#10B981" name="Completed Tasks" />
                            <Bar dataKey="assignedTasks" fill="#3B82F6" name="Assigned Tasks" />
                        </BarChart>
                    </ResponsiveContainer>
                </CardDescription>
            </CardContent>
        </Card>
    )
}

export default TeamProdChart