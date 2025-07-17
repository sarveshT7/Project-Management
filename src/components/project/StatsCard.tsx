import { Project, Task } from '@/types/project'
import { CheckCircleIcon, ClockIcon, DollarSignIcon, FolderIcon } from 'lucide-react';
import React from 'react'

interface StatsCardsProps {
    projects: Project[];
    tasks: Task[];
}
const StatsCard: React.FC<StatsCardsProps> = ({ projects = [], tasks = [] }) => {
    const activeProjects = projects.filter(p => p.status === "active").length;
    const completedTasks = tasks.filter(t => t.status === 'done').length;
    const inProgressTasks = tasks.filter(t => t.status === 'in-progress').length;
    const totalBudget = projects.reduce((sum, p) => sum + p.budget, 0)
    const totalSpent = projects.reduce((sum, p) => sum + p.spent, 0);
    const budgetUtilization = totalBudget > 0 ? (totalSpent / totalBudget) * 100 : 0;

    const stats = [
        {
            name: 'Active Projects',
            value: activeProjects,
            icon: FolderIcon,
            color: 'bg-blue-500',
            change: '+12%',
            changeType: 'increase' as const,
        },
        {
            name: 'Completed Tasks',
            value: completedTasks,
            icon: CheckCircleIcon,
            color: 'bg-green-500',
            change: '+8%',
            changeType: 'increase' as const,
        },
        {
            name: 'In Progress',
            value: inProgressTasks,
            icon: ClockIcon,
            color: 'bg-yellow-500',
            change: '-3%',
            changeType: 'decrease' as const,
        },
        {
            name: 'Budget Utilization',
            value: `${budgetUtilization.toFixed(1)}%`,
            icon: DollarSignIcon,
            color: 'bg-purple-500',
            change: '+5%',
            changeType: 'increase' as const,
        },
    ];

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {
                stats.map((stat) => (
                    <div className='flex items-center justify-between'>
                        <div>{stat.name}</div>
                        <div><stat.icon /></div>
                    </div>
                ))
            }
        </div>
    )
}

export default StatsCard