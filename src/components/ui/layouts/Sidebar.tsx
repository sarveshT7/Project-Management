import SidebarHeader from "@/components/SidebarHeader";
import SidebarNavLinks from "@/components/SidebarNavLists";
import { closeSidebar } from "@/store/slices/mobileNavSlice";
import { RootState } from "@/store/store";
import { ChartBarIcon, CogIcon, FolderIcon, HomeIcon, UsersIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

const Sidebar: React.FC = () => {
    const navigation = [
        { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
        { name: 'Projects', href: '/', icon: FolderIcon },
        { name: 'Team', href: '/team', icon: UsersIcon },
        { name: 'Analytics', href: '/analytics', icon: ChartBarIcon },
        { name: 'Settings', href: '/settings', icon: CogIcon },
    ];
    const dispatch = useDispatch();
    const { isSidebarVisible } = useSelector((state: RootState) => state.mobileNav);

    const handleCloseSidebar = () => dispatch(closeSidebar());

    return (
        <>
            {/* Desktop Sidebar */}
            <div className="hidden md:block w-64 h-full bg-white shadow-lg">
                <SidebarHeader />
                <SidebarNavLinks navigation={navigation} />
            </div>

            {/* Mobile Sidebar Overlay */}
            {isSidebarVisible && (
                <div className="md:hidden fixed inset-0 z-50 flex">
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50"
                        onClick={handleCloseSidebar}
                    />

                    {/* Sidebar */}
                    <div className="relative w-[90%] bg-white shadow-lg z-50">
                        <SidebarHeader onClose={handleCloseSidebar} />
                        <SidebarNavLinks onClick={handleCloseSidebar}
                            navigation={navigation} />
                    </div>
                </div>
            )}
        </>
    );
};

export default Sidebar;