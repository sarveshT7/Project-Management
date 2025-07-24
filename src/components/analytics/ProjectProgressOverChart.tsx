import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Activity } from 'lucide-react'
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const ProjectProgressOverChart = ({ projectProgressData }) => {
    return (
        <Card className='rounded-lg shadow-md hover:bg-gray-50 transition-colors'>
            <CardHeader>
                <CardTitle className='flex font-medium text-gray-900 text-xl items-center gap-x-2'>
                    <div className={`rounded-full p-2 transition-transform duration-300
                    hover:scale-110 `}>
                        <Activity className="mr-2 h-5 w-5 text-gray-500" />
                    </div>
                    Team Productivity
                </CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription className='space-y-1'>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={projectProgressData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area
                                type="monotone"
                                dataKey="completed"
                                stackId="1"
                                stroke="#10B981"
                                fill="#10B981"
                                name="Completed Projects"
                            />
                            <Area
                                type="monotone"
                                dataKey="active"
                                stackId="1"
                                stroke="#F59E0B"
                                fill="#F59E0B"
                                name="Active Projects"
                            />
                            <Area
                                type="monotone"
                                dataKey="planned"
                                stackId="1"
                                stroke="#6B7280"
                                fill="#6B7280"
                                name="Planned Projects"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </CardDescription>
            </CardContent>
        </Card>
    )
}

export default ProjectProgressOverChart