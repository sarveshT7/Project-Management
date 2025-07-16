import { toggleSidebar } from "@/store/slices/mobileNavSlice";
import { RootState } from "@/store/store";
import { Bell, Search, User, Menu } from "lucide-react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
type HeaderProps = {
    toggleMenu: () => void;
    isMenuVisible: boolean;
}

const Header: React.FC = () => {
    const unreadCount = 2
    const user = {
        name: 'Rahul',
        role: 'Admin',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    }

    const dispatch = useDispatch()
    const { isHeaderVisible } = useSelector((state: RootState) => state.mobileNav)

    const handleHamburgerClick = () => {
        dispatch(toggleSidebar())
    }
    if (!isHeaderVisible) {
        return null
    }
    return (
        <header className="bg-white shadow-sm border-b border-gray-200 w-full">
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">

                {/* Mobile menu button - visible on small screens */}
                <button className="md:hidden block p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                    onClick={handleHamburgerClick}
                >
                    <Menu className="h-6 w-6"
                    />
                </button>

                {/* Search bar - responsive sizing */}
                <div className="flex items-center flex-1 mx-2 sm:mx-4">
                    <div className="relative w-full">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />
                        <input
                            type="text"
                            placeholder="Search projects, tasks, or team members..."
                            className="w-full pl-10 pr-4 py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
                        />
                    </div>
                </div>

                {/* Right side actions */}
                <div className="flex items-center space-x-2 sm:space-x-4">

                    {/* Notification bell */}
                    <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                        <Bell className="h-5 w-5 sm:h-6 sm:w-6" />
                        {unreadCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center font-medium">
                                {unreadCount}
                            </span>
                        )}
                    </button>

                    {/* User Profile */}
                    <div className="flex items-center space-x-2 sm:space-x-3">
                        {/* User info - hidden on mobile, visible on tablet+ */}
                        <div className="hidden sm:flex flex-col text-right">
                            <span className="text-sm font-medium text-gray-900 truncate max-w-24 lg:max-w-none">
                                {user?.name}
                            </span>
                            <span className="text-xs text-gray-500 capitalize">
                                {user?.role}
                            </span>
                        </div>

                        {/* Avatar */}
                        {user?.avatar ? (
                            <img
                                className="h-7 w-7 sm:h-8 sm:w-8 rounded-full object-cover border border-gray-200"
                                src={user.avatar}
                                alt={user.name}
                            />
                        ) : (
                            <div className="h-7 w-7 sm:h-8 sm:w-8 bg-gray-300 rounded-full flex items-center justify-center border border-gray-200">
                                <User className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header