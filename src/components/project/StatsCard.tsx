import { Project, Task } from '@/types/project'
import { CheckCircleIcon, ClockIcon, DollarSignIcon, FolderIcon, Icon, LucideIcon } from 'lucide-react';
import React from 'react'
import { Card, CardHeader } from '../ui/card';


interface DashboardCardProps {
    name: string;
    value: string | number;
    icon: LucideIcon;
    variant: 'blue' | 'green' | 'yellow' | 'purple';
    change: string;
    changeType: 'increase' | 'decrease';
    key: number;
}
const StatsCard: React.FC<DashboardCardProps> = ({ name, value, icon: Icon, variant, change, changeType, key }) => {


    const variantStyles = {
        blue: {
            background: 'bg-blue-100',
            icon: 'text-dashboard-blue',
            iconBg: 'bg-blue-300'
        },
        green: {
            background: 'bg-green-100',
            icon: 'text-dashboard-green',
            iconBg: 'bg-green-300'
        },
        yellow: {
            background: 'bg-yellow-100',
            icon: 'text-dashboard-yellow',
            iconBg: 'bg-yellow-300'
        },
        purple: {
            background: 'bg-purple-100',
            icon: 'text-dashboard-purple',
            iconBg: 'bg-purple-300'
        }
    };
    const styles = variantStyles[variant]
    console.log('styles', styles)
    return (
        <Card key={key} className={`transition-all duration-300 hover:shadow-lg
        border-0 ${styles.background}
        `}>
            <CardHeader className='flex items-center justify-between'>
                <div>
                    <p className='text-sm font-medium text-muted-foreground'>{name}</p>
                    <div>
                        <p className='text-2xl font-bold text-foreground'>{value}</p>
                        <span className={`
                                        ${changeType === 'increase' ? 'text-green-500 bg-green-300/10' :
                                'text-destructive bg-destructive/10'
                            }
                                        `}>
                            {change}
                        </span>
                    </div>
                </div>
                <div className={`rounded-full p-3 transition-transform duration-300
                    hover:scale-110 ${styles.iconBg}`}>
                    <Icon className={`size-6 ${styles.iconBg} `} />
                </div>
            </CardHeader>
        </Card>
    )
}

export default StatsCard