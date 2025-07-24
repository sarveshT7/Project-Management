import React from 'react'
import { projects } from '../projects/Projects'
import { Project } from '@/types/project';
import { tasks } from '../dashboard/Dashboard';
import { Briefcase, CheckCircle, Folder, Target, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, Tooltip, Cell, Pie, PieChart, Legend, LineChart, CartesianGrid, XAxis, YAxis, Line } from 'recharts'
import LineChartComp from '@/components/analytics/LineChart';
import PieChartComp from '@/components/analytics/PieChartComp';
import ProjectProgressOverChart from '@/components/analytics/ProjectProgressOverChart';
import TeamProdChart from '@/components/analytics/TeamProdChart';

const Analytics = () => {
  const totalProjects = projects.length;
  const activeProjects = projects.filter((project: Project) => project.status === 'active').length;
  const onHoldProjects = projects.filter((project: Project) => project.status === "on-hold")
  const completedProjects = projects.filter((project: Project) => project.status === 'completed').length;

  //  Calculate task status counts
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.status === 'done').length;
  const inProgressTasks = tasks.filter(task => task.status === 'in-progress').length;
  const todoTasks = tasks.filter(task => task.status === 'todo').length;


  // Project status data for Pie Chart
  const projectStatusData = [
    { name: 'Completed', value: completedProjects },
    { name: 'Active', value: activeProjects },
    { name: 'On Hold', value: onHoldProjects },
  ];

  // Task status data for Pie Chart
  const taskStatusData = [
    { name: 'Completed', value: completedTasks },
    { name: 'In Progress', value: inProgressTasks },
    { name: 'Todo', value: todoTasks },
  ];

  // Sample data for the last 7 days (replace with actual data fetching)
  const dailyActivityData: any = [
    { day: 'Day 1', projects: 10, tasks: 25 },
    { day: 'Day 2', projects: 12, tasks: 30 },
    { day: 'Day 3', projects: 8, tasks: 20 },
    { day: 'Day 4', projects: 15, tasks: 35 },
    { day: 'Day 5', projects: 11, tasks: 28 },
    { day: 'Day 6', projects: 9, tasks: 22 },
    { day: 'Day 7', projects: 13, tasks: 32 },
  ];

  // Team productivity data for Bar Chart
  const teamProductivityData: any = [
    { member: 'John Doe', completedTasks: 15, assignedTasks: 20 },
    { member: 'Jane Smith', completedTasks: 12, assignedTasks: 16 },
    { member: 'Mike Johnson', completedTasks: 18, assignedTasks: 22 },
    { member: 'Sarah Wilson', completedTasks: 9, assignedTasks: 14 },
    { member: 'David Brown', completedTasks: 21, assignedTasks: 25 },
  ];

  // Project progress over time for Area Chart
  const projectProgressData: any = [
    { month: 'Jan', completed: 5, active: 8, planned: 3 },
    { month: 'Feb', completed: 8, active: 12, planned: 5 },
    { month: 'Mar', completed: 12, active: 15, planned: 8 },
    { month: 'Apr', completed: 15, active: 18, planned: 12 },
    { month: 'May', completed: 18, active: 20, planned: 15 },
    { month: 'Jun', completed: 22, active: 16, planned: 18 },
  ];

  // Colors for the pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  const summaryData = [
    {
      title: 'Project Summary',
      icon: Folder,
      totalValue: totalProjects,
      activeValue: activeProjects,
      onHoldValue: onHoldProjects,
      completedValue: completedProjects,
      total: 'Total Projects',
      color: 'bg-blue-200'
    },
    {
      title: 'Task Summary',
      icon: Target,
      totalValue: totalTasks,
      activeValue: todoTasks,
      onHoldValue: inProgressTasks,
      completedValue: completedTasks,
      total: 'Total Tasks',
      color: 'bg-teal-200'
    }
  ]
  const piechartData: any = [
    {
      title: 'Project Status',
      icon: Briefcase,
      dataFunc: projectStatusData,
      label: renderCustomizedLabel,
      color: 'bg-green-200'
    },
    {
      title: 'Task Status',
      icon: CheckCircle,
      dataFunc: taskStatusData,
      label: renderCustomizedLabel,
      color: 'bg-yellow-200'
    },
  ]
  return (
    <div className='p-6 space-y-6 h-screen w-full'>
      <h2 className='text-3xl font-bold text-gray-900 '>Anlaytics Overview</h2>
      {/* Project and Task Summary */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 w-full'>
        {
          summaryData.map((data, index) => (
            <Card key={index} className='rounded-lg shadow-md hover:bg-gray-50 transition-colors'>
              <CardHeader>
                <CardTitle className='flex font-medium text-gray-900 text-xl items-center gap-x-2'>
                  <div className={`rounded-full p-2 transition-transform duration-300
                    hover:scale-110 ${data.color}`}>
                    <data.icon className={`size-6 ${data.color}`} />
                  </div>

                  {data.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className='space-y-1'>
                  <p className='text-gray-700 font-medium'>{`${data.total} : ${data.totalValue}`}</p>
                  <p className='text-green-600'>{`Completed Value : ${data.completedValue}`}</p>
                  <p className='text-blue-600'>{`Active : ${data.activeValue}`}</p>
                  <p className='text-yellow-600'>{`On-Hold : ${data.onHoldValue}`}</p>
                </CardDescription>
              </CardContent>
            </Card>
          ))
        }
      </div>

      {/*  pie chart */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 w-full'>
        {
          piechartData.map((data: any, index) => (
            <PieChartComp data={data} colors={COLORS} key={index} />
          ))
        }
      </div>

      {/* Daily Activity Chart */}
      <div className='grid grid-cols-1 gap-2 w-full'>
        <LineChartComp dailyActivityData={dailyActivityData} />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 w-full'>
        <TeamProdChart teamProductivityData={teamProductivityData} />
        <ProjectProgressOverChart projectProgressData={projectProgressData} />
      </div>

      {/* Additional Analytics Content */}
      <div className="bg-white shadow-md rounded-lg p-4 ">
        <h2 className="text-lg font-semibold mb-2 flex items-center">
          <Users className="mr-2 h-5 w-5 text-gray-500" /> Team Performance</h2>
        <p className="text-gray-600">Analyze team member contributions, task completion rates, and project involvement.</p>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Analytics