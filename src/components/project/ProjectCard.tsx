import { Project, ProjectCardProps } from '@/types/project';
import { CalendarIcon, DollarSignIcon, MoreVerticalIcon, UsersIcon } from 'lucide-react';
import React from 'react'

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onEdit, onDelete }) => {

    const getStatusColor = (status: Project['status']) => {
        switch (status) {
            case 'active': return 'bg-blue-100 text-blue-800';
            case 'completed': return 'bg-green-100 text-green-800';
            case 'on-hold': return 'bg-yellow-100 text-yellow-800';
            case 'cancelled': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    }
    const getPriorityColor = (priority: Project['priority']) => {
        switch (priority) {
            case 'low': return 'bg-red-500';
            case 'medium': return 'bg-orange-500';
            case 'high': return 'bg-yellow-500';
            case 'critical': return 'bg-green-500';
            default: return 'bg-green-500';
        }
    }
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full ${getPriorityColor(project.priority)}`}></div>
                    <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
                </div>
                <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                    </span>
                    <button className="p-1 hover:bg-gray-100 rounded">
                        <MoreVerticalIcon className="h-5 w-5 text-gray-400" />
                    </button>
                </div>
            </div>
            <p className='text-gray-900 mb-4'>{project.description}</p>
            <div className='grid grid-cols-2 gap-2 mb-4'>
                <div className='flex items-center text-sm text-gray-500'>
                    <CalendarIcon className='h-4 w-4 mr-2' />
                    Due {new Date(project.endDate).toLocaleDateString()}
                </div>
                <div className='flex items-center text-sm text-gray-500'>
                    <UsersIcon className='w-4 h4 mr-2' />
                    {project.teamMembers.length} members
                </div>
                <div className='flex items-center text-sm text-gray-500'>
                    <DollarSignIcon className='w-4 h4 mr-2' />
                    ${project.spent.toLocaleString()} / ${project.budget.toLocaleString()}
                    {/* {project.spent / project.budget} */}
                </div>
            </div>
            <div className='mb-4'>
                <div className='flex'>
                    <span className='text-gray-600'>Progress </span>
                    <span className='font-medium'>{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                    ></div>
                </div>
            </div>
        </div >
    )
}

export default ProjectCard