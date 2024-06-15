import { useEffect, useRef } from 'react';
import { Outlet } from "react-router-dom";
import Sidebar, { SidebarHandle } from './components/sidebar/Sidebar.tsx'
import Popup, { PopupProvider } from './components/popup/Popup.tsx';

function Root() {
    const sidebarRef = useRef<SidebarHandle>(null);
    const mainContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            console.log('working');
            // Check the sidebarref for null pointers
            if (sidebarRef && sidebarRef.current) {

                const appHeight: number = (mainContainerRef.current?.clientHeight) || 0;
                sidebarRef.current.setSidebarPosition(appHeight);

            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        // Remove on clean up
        return () => {
            window.removeEventListener('resize', handleResize);
        }

    }, []);

    return (
        <PopupProvider>
            <div id="main" className="py-0">

                <div ref={mainContainerRef} id="main-container" className="container-fluid px-md-4 pt-4 pb-1 pb-md-4">
                    <div className="row p-0">

                        <Outlet />

                    </div>
                </div>

                <Sidebar ref={sidebarRef} />

            </div>
            <Popup />
        </PopupProvider>
    )
}

export default  Root;