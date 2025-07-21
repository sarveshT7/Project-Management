import { CheckCircleIcon, FolderIcon, MessageCircleIcon, UserPlusIcon } from 'lucide-react';
import React from 'react'
import { notifications } from '@/pages/dashboard/Dashboard';

const RecentActivity: React.FC = () => {

    const getActivityIcon = (type: string) => {
        switch (type) {
            case 'success':
                return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
            case 'info':
                return <FolderIcon className="h-5 w-5 text-blue-500" />;
            case 'warning':
                return <MessageCircleIcon className="h-5 w-5 text-yellow-500" />;
            default:
                return <UserPlusIcon className="h-5 w-5 text-gray-500" />;
        }
    };
    const formatTimeAgo = (dateString: string) => {
        const date = new Date(dateString)
        const now = new Date()
        const diffMs = now.getTime() - date.getTime();
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        if (diffHours < 1) return 'Just now';
        if (diffHours < 24) return `${diffHours}h ago`;
        return `${Math.floor(diffHours / 24)}d ago`;
    }

    return (
        <>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    View All
                </button>
            </div>

            <div className="flow-root">
                <ul className="-mb-8">
                    {notifications.slice(0, 5).map((notification, index) => (
                        <li key={notification.id}>
                            <div className="relative pb-8">
                                {index !== notifications.length - 1 && (
                                    <span
                                        className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                                        aria-hidden="true"
                                    />
                                )}
                                <div className="relative flex space-x-3">
                                    <div className="flex-shrink-0">
                                        <div className="h-8 w-8 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center">
                                            {getActivityIcon(notification.type)}
                                        </div>
                                    </div>
                                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                                            <p className="text-sm text-gray-500">{notification.message}</p>
                                        </div>
                                        <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                            {formatTimeAgo(notification.timestamp)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default RecentActivity