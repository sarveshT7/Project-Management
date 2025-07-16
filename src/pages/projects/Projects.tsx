import ProjectForm from '@/components/forms/ProjectForm';
import ProjectCard from '@/components/project/ProjectCard';
import { Button } from '@/components/ui/button';
import { Project } from '@/types/project';
import { FilterIcon, PlusIcon, SearchIcon } from 'lucide-react'
import React, { useState } from 'react'

const Projects = () => {
    const projects = [
        {
            id: '1',
            name: 'E-commerce Platform',
            description: 'Modern e-commerce solution with advanced features',
            status: 'active' as const,
            priority: 'high' as const,
            startDate: '2024-01-15',
            endDate: '2024-06-15',
            progress: 65,
            teamMembers: ['john.doe', 'jane.smith', 'bob.wilson'],
            budget: 150000,
            spent: 97500,
            createdAt: '2024-01-15T10:00:00Z',
            updatedAt: '2024-03-10T14:30:00Z',
        },
        {
            id: '2',
            name: 'Mobile App Development',
            description: 'Cross-platform mobile application',
            status: 'active' as const,
            priority: 'medium' as const,
            startDate: '2024-02-01',
            endDate: '2024-08-01',
            progress: 40,
            teamMembers: ['alice.brown', 'charlie.davis'],
            budget: 80000,
            spent: 32000,
            createdAt: '2024-02-01T09:00:00Z',
            updatedAt: '2024-03-08T16:45:00Z',
        },
    ];
    const [showForm, setShowForm] = useState(false);

    const handleCreateProject = (projectData: any) => {
        setShowForm(false)
    }
    return (
        <div className="space-y-6 p-4 h-[calc(100vh-64px)] overflow-y-scroll">
            <div className="flex items-center justify-between mt-6">
                <h2 className="text-4xl font-bold text-gray-900">Projects</h2>
                <Button
                    //   onClick={() => setShowInviteDialog(true)}
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={() => setShowForm(true)}
                >
                    <PlusIcon className="h-5 w-5 mr-2" />
                    New Project
                </Button>

            </div>
            <div className='bg-white rounded-lg shadow-sm p-6 border border-gray-200'>
                <div className="sm:flex sm:space-y-0 space-y-4 items-center space-x-4">
                    <div className='flex-1'>
                        <div className='flex relative border-gray-300'>
                            <SearchIcon className='text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ' />
                            <input type="text" placeholder='Search Projects'
                                className='border border-gray-300  w-full bg-white h-12 rounded-lg 
                        focus:ring-2 focus: ring-blue-500 focus:border-transparent pl-10' />
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <FilterIcon className='text-gray-400' />
                        <select className='sm:px-4 px-2 border border-gray-300  bg-white sm:h-12 h-10 rounded-lg'>
                            <option value="all">All Status</option>
                            <option value="active">Active</option>
                            <option value="completed">Completed</option>
                            <option value="on-hold">On Hold</option>
                            <option value="cancelled">Cancelled</option>
                        </select>
                        <select className='sm:px-4 px-2 border border-gray-300  bg-white sm:h-12 h-10 rounded-lg'>
                            <option value="all">All Priority</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                            <option value="critical">Critical</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap gap-4'>
                {
                    projects && projects.length > 0 && projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))
                }
            </div>
            {projects.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
                </div>
            )}

            {/* project form modal */}
            {
                showForm &&
                (
                    <ProjectForm
                        onSubmit={handleCreateProject}
                        onCancel={() => setShowForm(false)}
                    />
                )
            }
        </div>
    )
}

export default Projects