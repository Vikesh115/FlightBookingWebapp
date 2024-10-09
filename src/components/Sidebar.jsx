import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white flex flex-col">
            <div className="flex items-center justify-center h-20 shadow-md">
                <h1 className="text-2xl font-bold">Flight App</h1>
            </div>

            <nav className="mt-10 flex flex-col gap-4">
                <NavLink
                    to="/search"
                    className={({ isActive }) => isActive ? "bg-gray-700 p-4" : "p-4 hover:bg-gray-700"}
                >
                    Search Flights
                </NavLink>

                <NavLink
                    to="/results"
                    className={({ isActive }) => isActive ? "bg-gray-700 p-4" : "p-4 hover:bg-gray-700"}
                >
                    Flight Results
                </NavLink>

            </nav>
        </div>
    );
};

export default Sidebar;
