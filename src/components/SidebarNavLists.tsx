import { NavLink, useLocation } from "react-router-dom";
type NavItem = {
    name: string;
    href: string;
    icon: React.ElementType
}

// Reusable Navigation Links
const SidebarNavLinks = ({
    onClick,
    navigation
}:
    {
        onClick?: () => void;
        navigation: NavItem[]
    }) => {
    const location = useLocation()
    console.log('location', location.pathname)
    return (

        <nav className="mt-8">
            <div className="px-4 space-y-2">
                {navigation.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.href}
                        onClick={onClick}
                        className={({ isActive }) => {
                            // console.log(`${item.name} - isActive: ${isActive}, current path: ${window.location.pathname}`);
                            return `group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${isActive
                                ? '!bg-blue-50 !text-blue-700 border-r-2 border-blue-700'
                                : '!text-gray-700 !hover:bg-gray-100 !hover:text-gray-900'
                                }`;
                        }}
                    >
                        <item.icon className="mr-3 h-5 w-5 flex-shrink-0" aria-hidden="true" />
                        {item.name}
                    </NavLink>
                ))}
            </div>
        </nav>
    )
};
export default SidebarNavLinks