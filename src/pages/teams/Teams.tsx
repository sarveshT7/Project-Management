import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TeamMember } from '@/types/team';
import { AvatarImage } from '@radix-ui/react-avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { FilterIcon, MailIcon, MapPinIcon, MoreVerticalIcon, PhoneIcon, PlusIcon, SearchIcon } from 'lucide-react';
import React from 'react'

const Teams: React.FC = () => {
    const mockTeamMembers: TeamMember[] = [
        {
            id: '1',
            name: 'John Doe',
            email: 'john.doe@company.com',
            role: 'admin',
            department: 'Engineering',
            phone: '+1 (555) 123-4567',
            location: 'New York, NY',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
            status: 'active',
            joinDate: '2023-01-15',
            projectsCount: 8,
            tasksCompleted: 142
        },
        {
            id: '2',
            name: 'Jane Smith',
            email: 'jane.smith@company.com',
            role: 'manager',
            department: 'Product',
            phone: '+1 (555) 234-5678',
            location: 'San Francisco, CA',
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b60e5e3e?w=150&h=150&fit=crop&crop=face',
            status: 'active',
            joinDate: '2023-02-20',
            projectsCount: 12,
            tasksCompleted: 98
        },
        {
            id: '3',
            name: 'Bob Wilson',
            email: 'bob.wilson@company.com',
            role: 'developer',
            department: 'Engineering',
            phone: '+1 (555) 345-6789',
            location: 'Austin, TX',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
            status: 'active',
            joinDate: '2023-03-10',
            projectsCount: 6,
            tasksCompleted: 87
        },
        {
            id: '4',
            name: 'Alice Brown',
            email: 'alice.brown@company.com',
            role: 'designer',
            department: 'Design',
            phone: '+1 (555) 456-7890',
            location: 'Los Angeles, CA',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
            status: 'active',
            joinDate: '2023-04-05',
            projectsCount: 4,
            tasksCompleted: 73
        },
        {
            id: '5',
            name: 'Charlie Davis',
            email: 'charlie.davis@company.com',
            role: 'developer',
            department: 'Engineering',
            location: 'Remote',
            status: 'pending',
            joinDate: '2024-01-20',
            projectsCount: 0,
            tasksCompleted: 0
        }
    ];

    const getRoleBadgeColor = (role: string) => {
        switch (role) {
            case 'admin': return 'bg-red-100 text-red-800';
            case 'manager': return 'bg-blue-100 text-blue-800';
            case 'developer': return 'bg-green-100 text-green-800';
            case 'designer': return 'bg-purple-100 text-purple-800';
            case 'client': return 'bg-gray-100 text-gray-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    }
    const getStatusBadgeColor = (status: string) => {
        switch (status) {
            case 'active': return 'bg-green-100 text-green-800';
            case 'inactive': return 'bg-gray-100 text-gray-800';
            case 'pending': return 'bg-yellow-100 text-yellow-800';
            default: return 'bg-gray-100 text-gray-800'
        }
    }
    const teamArray = [
        {
            name: 'Total Members', color: 'text-black-600', length: mockTeamMembers.length
        },
        {
            name: 'Active Members', color: 'text-green-600', length: mockTeamMembers.filter(m => m.status === 'active').length
        },
        {
            name: 'Pending Invites', color: 'text-yellow-600', length: mockTeamMembers.filter(m => m.status === 'pending').length
        },
        {
            name: 'Department', color: 'text-black-600', length: [...new Set(mockTeamMembers.map(m => m.department))].length
        }
    ]
    return (
        <div className='space-y-6 p-4 pb-8 h-[calc(100vh-64px)] overflow-y-auto'>
            <div className="flex items-center justify-between mt-6">
                <div>
                    <h2 className="text-4xl font-bold text-gray-900">Teams</h2>
                    <p className="text-gray-600 mt-1">Manage your team members and their roles</p>
                </div>
                <Button
                    //   onClick={() => setShowInviteDialog(true)}
                    className="bg-blue-600 hover:bg-blue-700"
                >
                    <PlusIcon className="h-5 w-5 mr-2" />
                    Invite Member
                </Button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                {
                    teamArray && teamArray.length > 0 && teamArray.map((item) => (
                        <Card >
                            <CardHeader className='pb-2'>
                                <CardTitle className='text-sm font-medium text-gray-600'>{item.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className={`text-2xl font-bold ${item.color}`}>{item.length}</div>
                            </CardContent>
                        </Card>
                    ))
                }
            </div>
            <Tabs defaultValue="grid" className="space-y-6">
                <div className="flex items-center justify-between">
                    <TabsList className='p-4'>
                        <TabsTrigger className='p-2 bg-white' value="grid">Grid View</TabsTrigger>
                        <TabsTrigger className='p-2 bg-blue-50' value="table">Table View</TabsTrigger>
                    </TabsList>

                    {/* Filters */}
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <input
                                type="text"
                                placeholder="Search members..."
                                className="pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div className="flex items-center space-x-2">
                            <FilterIcon className="h-5 w-5 text-gray-400" />
                            <select
                                className="px-3 py-2 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option value="all">All Departments</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Product">Product</option>
                                <option value="Design">Design</option>
                                <option value="Marketing">Marketing</option>
                            </select>

                            <select
                                className="px-3 py-2 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option value="all">All Status</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                                <option value="pending">Pending</option>
                            </select>
                        </div>
                    </div>
                </div>
                <TabsContent value='grid'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {
                            mockTeamMembers && mockTeamMembers.length > 0 && mockTeamMembers.map((member) => (
                                <Card>
                                    <CardHeader>
                                        <div className='flex items-start justify-between'>
                                            <div className='flex space-x-2'>
                                                <Avatar className='h-12 w-12'>
                                                    <AvatarImage src={member.avatar} alt={member.name} />
                                                    <AvatarFallback>
                                                        <h2 className='text-2xl font-medium'>{member.name.split(' ').map(n => n[0]).join('')}</h2>
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <h3 className="font-semibold text-gray-900">{member.name}</h3>
                                                    <p className="text-sm text-gray-500">{member.department}</p>
                                                </div>
                                            </div>
                                            <Button variant="ghost" size="sm">
                                                <MoreVerticalIcon className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </CardHeader>
                                    <CardContent className='space-y-4'>
                                        <div className='flex items-center justify-between'>
                                            {/* className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getRoleBadgeColor(member.role)}`} */}
                                            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${getRoleBadgeColor(member.role)}`}>{member.role}</span>
                                            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${getStatusBadgeColor(member.status)}`}>{member.status}</span>
                                        </div>
                                        <div className='space-y-2 text-sm'>
                                            <div className='flex items-center text-gray-600'>
                                                <MailIcon className='w-4 h-4 mr-2' />
                                                {member.email}
                                            </div>
                                            {member.phone && (<div className='flex items-center text-gray-600'>
                                                <PhoneIcon className='w-4 h-4 mr-2' />
                                                {member.phone}
                                            </div>)}
                                            <div className='flex items-center text-gray-600'>
                                                <MapPinIcon className='w-4 h-4 mr-2' />
                                                {member.location}
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-2 border-t pt-4 border-gray-200 gap-4'>
                                            <div className='text-center'>
                                                <div className='text-lg font-semibold text-gray-900'>{member.projectsCount}</div>
                                                <div className='text-xs text-gray-500'>Projects</div>
                                            </div>
                                            <div className='text-center'>
                                                <div className='text-lg font-semibold text-gray-900'>{member.tasksCompleted}</div>
                                                <div className='text-xs text-gray-500'>Tasks Done</div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))
                        }
                    </div>

                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Teams