import StatsCard from '@/components/project/StatsCard'
import { fetchProjects } from '@/store/slices/projectSlice'
import { AppDispatch, RootState } from '@/store/store'
import { Project, Task } from '@/types/project'
import { CheckCircle, Clock, DollarSign, Folder } from 'lucide-react'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

export const tasks: Task[] = [
    {
        id: '1',
        title: 'Design Login Page',
        description: 'Create a responsive login page with Tailwind CSS',
        status: 'in-progress',
        priority: 'high',
        assignedTo: 'user123',
        projectId: 'projectA',
        dueDate: '2025-07-25',
        tags: ['frontend', 'UI', 'auth'],
        estimatedHours: 8,
        actualHours: 5,
        createdAt: '2025-07-10T09:30:00Z',
        updatedAt: '2025-07-17T11:00:00Z',
    },
    {
        id: '2',
        title: 'Setup MongoDB Schema',
        description: 'Define and create collections for users and tasks',
        status: 'todo',
        priority: 'medium',
        assignedTo: 'user456',
        projectId: 'projectA',
        dueDate: '2025-07-22',
        tags: ['backend', 'database'],
        estimatedHours: 6,
        actualHours: 0,
        createdAt: '2025-07-15T10:00:00Z',
        updatedAt: '2025-07-15T10:00:00Z',
    },
    {
        id: '3',
        title: 'Implement JWT Auth',
        description: 'Add authentication using JWT and protect routes',
        status: 'review',
        priority: 'critical',
        assignedTo: 'user789',
        projectId: 'projectA',
        dueDate: '2025-07-20',
        tags: ['security', 'auth', 'backend'],
        estimatedHours: 10,
        actualHours: 0,
        createdAt: '2025-07-15T10:00:00Z',
        updatedAt: '2025-07-15T10:00:00Z',
    }
]

const Dashboard: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(fetchProjects())
    }, [dispatch])

    const projects = useSelector((state: RootState) => state.projects.projects);
    const loading = useSelector((state: RootState) => state.projects.loading);

    const activeProjects = projects.filter(p => p.status === "active").length;
    const completedTasks = tasks.filter(t => t.status === 'done').length;
    const inProgressTasks = tasks.filter(t => t.status === 'in-progress').length;
    const totalBudget = projects.reduce((sum, p) => sum + p.budget, 0)
    const totalSpent = projects.reduce((sum, p) => sum + p.spent, 0);
    const budgetUtilization = totalBudget > 0 ? (totalSpent / totalBudget) * 100 : 0;

    console.log('projects', projects)
    console.log('loading', loading)

    const stats = [
        {
            name: 'Active Projects',
            value: activeProjects,
            icon: Folder,
            variant: 'blue' as const,
            change: '+12%',
            changeType: 'increase' as const,
        },
        {
            name: 'Completed Tasks',
            value: completedTasks,
            icon: CheckCircle,
            variant: 'green' as const,
            change: '+8%',
            changeType: 'increase' as const,
        },
        {
            name: 'In Progress',
            value: inProgressTasks,
            icon: Clock,
            variant: 'yellow' as const,
            change: '-3%',
            changeType: 'decrease' as const,
        },
        {
            name: 'Budget Utilization',
            value: `${budgetUtilization.toFixed(1)}%`,
            icon: DollarSign,
            variant: 'purple' as const,
            change: '+5%',
            changeType: 'increase' as const,
        },
    ];
    return (
        <div className="min-h-screen bg-background p-6">
            <div className='max-w-7xl mx-auto'>
                <div className="mb-8">
                    <h2 className="text-4xl font-bold text-foreground mb-2">Dashboard</h2>
                    <p className="text-muted-foreground">Welcome back! Here's what's happening with your projects.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <StatsCard
                        key={index}
                        name={stat.name}
                        value={stat.value}
                        icon={stat.icon}
                        variant={stat.variant}
                        change={stat.change}
                        changeType={stat.changeType}
                    />
                ))}
            </div>
        </div>
    )
}

export default Dashboard