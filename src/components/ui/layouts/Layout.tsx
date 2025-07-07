import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

interface LayoutProps {
    children: React.ReactNode
}


const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false)
    const { isSidebarVisible } = useSelector((state: RootState) => state.mobileNav);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible)
    }

    return (
        <div className='h-screen w-screen bg-gray-100 flex flex-row'>
            <div>
                <Sidebar />
            </div>
            <div className='w-screen flex flex-col flex-1 overflow-hidden'>
                <Header
                />
                <main 
                    >
                    {children}
                </main>
            </div>
        </div >
    )
}

export default Layout