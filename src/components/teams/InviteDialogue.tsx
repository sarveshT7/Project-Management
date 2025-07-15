import { InviteFormData, InviteMemberDialogProps, inviteSchema } from '@/types/team';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from "sonner"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog';
import { MailIcon, UserPlusIcon } from 'lucide-react';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Button } from '../ui/button';
const InviteDialogue: React.FC<InviteMemberDialogProps> = ({
    open,
    onOpenChange
}) => {
    const [loading, setLoading] = useState(false);
    const form = useForm<InviteFormData>({
        resolver: zodResolver(inviteSchema),
        defaultValues: {
            name: '',
            email: '',
            role: 'developer',
            department: ''
        }
    });
    const onSubmit = (data: InviteFormData) => {
        console.log('form hit')
        try {
            setLoading(true)
            setTimeout(() => {
                toast('Invitation has been sent successfully');
                form.reset()
                onOpenChange(false)
            }, 1000);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className='sm:max-w-md'>
                <DialogHeader>
                    <DialogTitle className='flex items-center gap-6'>
                        <UserPlusIcon className="h-5 w-5 text-blue-600" />
                        Invite Team Member
                    </DialogTitle>
                    <DialogDescription>
                        Send an invitation to a new team member. They'll receive an email with instructions to join.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John Doe" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email Address</FormLabel>
                                    <FormControl>
                                        <div className='relative'>
                                            <MailIcon className='absolute top-1/2 left-3 space-x-2
                                             transform -translate-y-1/2 h-4 w-4 text-gray-400' />
                                            <Input placeholder='abc@gamil.com' {...field} className='pl-10' />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="role"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Role</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger className='w-[400px] !border-slate-300 hover:!border-slate-400 focus:!border-slate-500'>
                                                <SelectValue placeholder="Select a role" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent >
                                            <SelectItem value="admin">Admin</SelectItem>
                                            <SelectItem value="manager">Manager</SelectItem>
                                            <SelectItem value="developer">Developer</SelectItem>
                                            <SelectItem value="designer">Designer</SelectItem>
                                            <SelectItem value="client">Client</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="department"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Department</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger className='w-[400px] !border-slate-300 hover:!border-slate-400 focus:!border-slate-500'>
                                                <SelectValue placeholder="Select a department" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="Engineering">Engineering</SelectItem>
                                            <SelectItem value="Product">Product</SelectItem>
                                            <SelectItem value="Design">Design</SelectItem>
                                            <SelectItem value="Marketing">Marketing</SelectItem>
                                            <SelectItem value="Sales">Sales</SelectItem>
                                            <SelectItem value="HR">Human Resources</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <DialogFooter className='flex gap-2 pt-4'>
                            <Button
                                type='button'
                                variant='outline'
                                className='!border-gray-500'
                                onClick={() => onOpenChange(false)}
                                disabled={loading}
                            >Cancel</Button>
                            <Button
                                type='submit'
                                disabled={loading}
                            >
                                {
                                    loading ?
                                        <>
                                            <div className='animate-spin size-4 rounded-full border-b-2 border-white mr-2' />
                                        </> :
                                        <>
                                            <MailIcon className='size-4' />
                                            Send Invitation
                                        </>

                                }
                            </Button>
                        </DialogFooter>

                    </form>
                </Form>
            </DialogContent>
        </Dialog >
    )
}

export default InviteDialogue