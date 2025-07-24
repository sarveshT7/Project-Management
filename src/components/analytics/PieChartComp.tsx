import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

const PieChartComp = (props: any) => {
    const { color, icon: Icon, title, label, dataFunc } = props.data;
    const { colors: COLORS } = props
    // console.log('dataafunc', dataFunc)
    // const { data } = props;
    // console.log('data', data)
    return (
        <Card className='rounded-lg shadow-md hover:bg-gray-50 transition-colors'>
            <CardHeader>
                <CardTitle className='flex font-medium text-gray-900 text-xl items-center gap-x-2'>
                    <div className={`rounded-full p-2 transition-transform duration-300
                    hover:scale-110 ${color}`}>
                        <Icon className={`size-6 ${color}`} />
                    </div>

                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription className='space-y-1'>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={dataFunc}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={label}
                                outerRadius={120}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {dataFunc.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                                {/* {projectStatusData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))} */}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </CardDescription>
            </CardContent>
        </Card>
    )
}

export default PieChartComp