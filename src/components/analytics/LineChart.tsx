import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { TrendingUp } from 'lucide-react'
import { CartesianGrid, Legend, Line, ResponsiveContainer, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

const LineChartComp = ({ dailyActivityData }) => {
    return (
        <Card className='rounded-lg shadow-md hover:bg-gray-50 transition-colors'>
            <CardHeader>
                <CardTitle className='flex font-medium text-gray-900 text-xl items-center gap-x-2'>
                    <div className={`rounded-full p-2 transition-transform duration-300
                    hover:scale-110 `}>
                        <TrendingUp className="mr-2 h-5 w-5 text-gray-500" />
                    </div>
                    Daily Activity
                </CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription className='space-y-1'>
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart data={dailyActivityData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="day" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="projects" stroke="#8884d8" name="Projects Created" />
                            <Line type="monotone" dataKey="tasks" stroke="#82ca9d" name="Tasks Created" />
                        </LineChart>
                    </ResponsiveContainer>
                </CardDescription>
            </CardContent>
        </Card>
    )
}

export default LineChartComp