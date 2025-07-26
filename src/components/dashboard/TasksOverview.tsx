import { Task } from '@/types/project';
import { AlertCircleIcon, CalendarIcon, ClockIcon } from 'lucide-react';
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

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

        <Card className='hover:bg-gray-50 transition-colors rounded-lg shadow-md py-[16px]'>
            <CardHeader>
                {/* Title and Priority - Stack on mobile */}
                <CardTitle className='space-y-2 sm:space-y-0'>
                        <div className='flex sm:items-center justify-center gap-x-2 mb-2'>
                            <p className='text-sm font-medium text-gray-900 truncate'>{task.title}</p>
                            <div className="flex-shrink-0">
                                {getPriorityIcon(task.priority)}
                            </div>
                        </div>
                        {/* </CardTitle> */}


                        {/* Task Details - Responsive Grid */}
                        <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 text-xs'>
                            {/* Status */}
                            <div className='flex items-center'>
                                <span className={`size-6 sm:size-8 rounded-full ${getStatusColor(task.status)} flex
                items-center justify-center flex-shrink-0 text-xs`}>
                                    {task.status === "done" ? '✓' : task.status === 'in-progress' ? '◐' : '○'}
                                </span>
                            </div>

                            {/* Due Date */}
                            <div className={`${isOverDue(task.dueDate) ? 'text-red-600 font-medium' : 'text-gray-500'} 
            flex items-center text-xs`}>
                                <CalendarIcon className='size-3 sm:size-4 mr-1 sm:mr-2 flex-shrink-0' />
                                <span className="truncate">
                                    {new Date(task.dueDate).toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: window.innerWidth > 640 ? 'numeric' : '2-digit'
                                    })}
                                </span>
                            </div>

                            {/* Hours */}
                            <div className='flex items-center gap-x-1 text-gray-500 text-xs'>
                                <ClockIcon className='size-3 sm:size-4 flex-shrink-0' />
                                <span className="whitespace-nowrap">{task.actualHours}/{task.estimatedHours}h</span>
                            </div>

                            {/* Assigned To */}
                            <div className="text-gray-500 text-xs flex items-center">
                                <span className="capitalize truncate">
                                    {task.assignedTo.replace('.', ' ')}
                                </span>
                            </div>
                        </div>

                        {/* Status Badge - Hidden on mobile, shown on larger screens */}
                        <div className="sm:flex justify-end mt-3">
                            <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(task.status)}`}>
                                {task.status.replace('-', ' ')}
                            </span>
                        </div>
                </CardTitle>
            </CardHeader>
        </Card>
    )
}

export default TasksOverview