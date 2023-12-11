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
      title: "Number",
      dataIndex: "number",
      key: "number"
    },
    {
      title: "Ticket",
      dataIndex: "ticket",
      key: "ticket"
    },
    {
      title: "Event Date",
      dataIndex: "eventDate",
      key: "eventDate"
    },
    {
      title: "Delete User",
      key: "action",
      render: (text, record) => (
        <Button onClick={() => handleDeleteUser(record._id)}><MdDelete /></Button>
      )
    },
  ];

  const handleDeleteUser = (ticketId) => {
 
    const apiUrl = `http://localhost:3000/api/ticket?id=${ticketId}`;

    axios
      .delete(apiUrl)
      .then(() => {
        toast.success('Ticket deleted successfully!');
       ticketData();
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  };

  const ticketData = () => {
    setIsLoading(true);
    fetch('http://localhost:3000/api/ticket')
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
    ticketData();
  }, []);

  return (
    <div style={{ overflowX: 'auto' }}>
      <Table columns={columns} dataSource={dataSource} loading={isLoading} scroll={{ x: true }} className="sm:flex-col" />
    </div>
  );
};

export default Page;