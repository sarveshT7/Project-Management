import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
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
export interface InviteMemberDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void
}

export const inviteSchema = z.object({
    name: z.string().min(2, 'Name must be atleast 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    role: z.enum(['admin', 'manager', 'developer', 'designer', 'client'], {
        message: 'Please select a role',
    }),
    department: z.string().min(1, 'please select a department')
})
export type InviteFormData = z.infer<typeof inviteSchema>