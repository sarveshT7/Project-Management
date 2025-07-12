export interface TeamMember {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'manager' | 'developer' | 'designer' | 'client';
    department: string;
    phone?: string;
    location: string;
    avatar?: string;
    status: 'active' | 'inactive' | 'pending';
    joinDate: string;
    projectsCount: number;
    tasksCompleted: number;
}