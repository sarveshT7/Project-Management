import { Task } from '@/types/project';
import { AlertCircleIcon, CalendarIcon, ClockIcon } from 'lucide-react';
import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card';

interface TasksOverviewProps {
    task: Task;
}
const TasksOverview: React.FC<TasksOverviewProps> = ({ task }) => {
    const getStatusColor = (status: Task['status']) => {
        switch (status) {
            case 'todo':
                return 'bg-gray-100 text-gray-800';
            case 'in-progress':
                return 'bg-blue-100 text-blue-800';
            case 'review':
                return '!bg-yellow-100 text-yellow-800';
            case 'done':
                return 'bg-green-100 text-green-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };
    const getPriorityIcon = (priority: Task['priority']) => {
        if (priority === 'critical' || priority === 'high') {
            return <AlertCircleIcon className='size-4 text-red-500' />
        } else if (priority === 'medium') {
            return <AlertCircleIcon className='size-4 text-green-500' />
        }
        return null
    }
    const isOverDue = (dueDate: string) => {
        return new Date(dueDate) < new Date()
    }

    return (
            <Card className='hover:bg-gray-50 transition-colors rounded-lg shadow-md'>
                <CardHeader>
                    <div className='flex justify-center items-center'>
                        <p className='text-sm font-medium text-gray-900 truncate'>{task.title}</p>
                        <span className='ml-6'>
                            {getPriorityIcon(task.priority)}
                        </span>
                    </div>

                    <div className='flex flex-wrap gap-4 sm:gap-4 space-x-4 md:space-x-6 md:flex-nowrap items-center relative text-xs text-gray-500'>
                        <span className={`size-8 rounded-full ${getStatusColor(task.status)} flex
                    items-center justify-center`}>
                            {
                                task.status === "done" ? '✓' : task.status === 'in-progress' ? '◐' : '○'
                            }
                        </span>
                        <div className={isOverDue(task.dueDate) ? 'text-red-600 font-medium' : ''}>
                            <CalendarIcon className='size-4 mr-2 absolute top-2 -translate-x-full' />
                            <span className='ml-2'> {new Date(task.dueDate).toLocaleDateString()}</span>
                        </div>
                        <div>
                            <ClockIcon className='size-4 mr-2 absolute top-2 -translate-x-full' />
                            <span className='ml-2'> {task.actualHours}/{task.estimatedHours}h</span>
                        </div>
                        <span className="capitalize">{task.assignedTo.replace('.', ' ')}</span>

                        <span className={`px-3 py-2 rounded-full ${getStatusColor(task.status)}`}>
                            {task.status.replace('-', ' ')}
                        </span>
                    </div>
                </CardHeader>
            </Card>
    )
}

export default TasksOverview