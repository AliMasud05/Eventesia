'use client'
import { Button, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import axios from 'axios';
import toast from 'react-hot-toast';


const Page = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email"
        },
        {
            title: "Age",
            dataIndex: "age",
            key: "age"
        },
        {
            title: "Role",
            dataIndex: "role",
            key: "role"
        },
        {
            title: "Delete User",
            key: "action",
            render: (text, record) => (
                <Button onClick={() => handleDeleteUser(record._id)}><MdDelete /></Button>
            )
        },
    ];

    const handleDeleteUser = (userId) => {
        const apiUrl = `http://localhost:3000/api/auth/register?id=${userId}`;

        axios
            .delete(apiUrl)
            .then(() => {
                toast.success('User deleted successfully!');
                userData(); 
            })
            .catch((error) => {
                console.error('Error deleting user:', error);
            });
    };

    const userData = () => {
        setIsLoading(true);
        fetch('http://localhost:3000/api/auth/register')
            .then(res => res.json())
            .then((result) => {
                setIsLoading(false);
                setDataSource(result);
            })
            .catch((error) => {
                setIsLoading(false);
                console.error('Error fetching data:', error);
            });
    };

    useEffect(() => {
       userData(); 
    }, []);

    return (
        <div>
            <Table columns={columns} dataSource={dataSource} loading={isLoading} />
        </div>
    );
};

export default Page;