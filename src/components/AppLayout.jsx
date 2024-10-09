import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
    return (
        <div className="flex">
            <Sidebar />

            <div className="ml-64 w-full overflow-auto p-8">
                <Outlet />
            </div>
        </div>
    );
};

export default AppLayout;
