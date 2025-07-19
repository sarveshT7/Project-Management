import { Project, Task } from '@/types/project'
import { CheckCircleIcon, ClockIcon, DollarSignIcon, FolderIcon, Icon, LucideIcon, TrendingUpIcon } from 'lucide-react';
import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card';


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
            iconBg: 'bg-yellow-400'
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
            <CardHeader className='flex items-center justify-between space-y-4'>
                <div>
                    <p className='text-sm font-medium text-muted-foreground'>{name}</p>
                    <div>
                        <p className='text-2xl font-bold text-foreground'>{value}</p>
                    </div>
                </div>
                <div className={`rounded-full p-3 transition-transform duration-300
                    hover:scale-110 ${styles.iconBg}`}>
                    <Icon className={`size-6 ${styles.iconBg} `} />
                </div>
            </CardHeader>
            <CardContent>
                <div className='flex items-center space-x-2'>
                    <TrendingUpIcon className={`size-4 mr-2 ${changeType === 'increase' ? 'text-green-500 bg-green-300/10' :
                        'text-destructive bg-destructive/10'
                        } `} />
                    <span className={`
                                        ${changeType === 'increase' ? 'text-green-500 bg-green-300/10' :
                            'text-destructive bg-destructive/10 rounded-full'
                        }
                                        `}>
                        {change}
                    </span>
                    <span className='text-sm'>
                        from last month
                    </span>
                </div>
            </CardContent>
        </Card>
    )
}

export default StatsCard