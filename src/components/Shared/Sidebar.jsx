'use client'
import Link from 'next/link';

const Sidebar = () => {
    return (
        <nav className="w-64 bg-gray-800 text-white p-4">
            <ul className="space-y-2">
                <li>
                    <Link href="/admin/dashboard">
                        <h1 className="block p-2 hover:bg-gray-700">Dashboard</h1>
                    </Link>
                </li>
                <li>
                    <Link href="/admin/users">
                        <h1 className="block p-2 hover:bg-gray-700">User Management</h1>
                    </Link>
                </li>
                <li>
                    <Link href="/admin/content">
                        <h1 className="block p-2 hover:bg-gray-700">Content Management</h1>
                    </Link>
                </li>
                <li>
                    <Link href="/admin/bookings">
                        <h1 className="block p-2 hover:bg-gray-700">Booking Management</h1>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
