'use client'
import { Button, DatePicker, Form, Input, InputNumber, Modal } from 'antd';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { BiTimeFive } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';



const EventCard = ({ product, customWidth, feature }) => {

    const session = useSession();
    const user = session.data?.user;
    const [singleData, setSingleData] = useState({});
    const [form] = Form.useForm();
    const [open, setOpen] = useState(false);
    const hide = () => {
        setOpen(false);
    };

    let data = {};


    if (product) {
        const { _id, title, location, ticket, price, guest, image, rating, about, eventDate } = product;
        data = { _id, title, location, ticket, price, guest, image, rating, about, eventDate };
    }






    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };
    const [loading, setLoading] = useState(false);

    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
        }, 3000);
    };

    const handleCancel = () => {
        setOpen(false);
    };
    const onFinish = async(formData) => {
        if (formData) {
            const dateString = formData.eventDate.$d;
            const dateObject = new Date(dateString);
            const formattedDate = dateObject.toDateString();
            formData.eventDate = formattedDate;            
        }
       if (!formData.name) {
        formData.name =user?.name;
       }
       
      
      
        try {
            const totalTicket = await axios.get(
                `http://localhost:3000/api/ticket?email=${user?.email}`
            ); 
            const userBooking = totalTicket.data.filter(
                (booking) => booking.eventDate
                    === formData?.eventDate);        
            if (userBooking.length > 0) {
                toast.error(
                    'You have already booked a ticket for this date. You can only book one ticket per day.'
                );
                setOpen(false);
                form.resetFields();
                return;
            }

            // Continue allowing multiple users to book on the same day
            const response = await axios.post(
                'http://localhost:3000/api/ticket',
                formData
            );
            if (response.status === 201) {
                toast('Thanks for Booking Ticket');
            } else {
                toast.error('Something wrong');
            }
        } catch (error) {
            console.error('Error creating event:', error);
        }
        setOpen(false);
        form.resetFields();
    };


    return (
        <div className='flex justify-center font-sans sm:w-full'>
            <div className={
                customWidth == 'true'
                    ? "border w-full h-[360px] sm:w-full bg-white shadow-lg relative rounded"
                    : "border w-full h-[332px] sm:w-full bg-white shadow-lg relative rounded"
            }>
                <div className='w-[36px] h-[36px] bg-[#FF9209] absolute left-[8px] top-[8px]'>
                    <h1 className='font-bold  text-white text-center text-[12px]'>{data.eventDate}</h1>
                </div>
                <Image

                    width={500}

                    height={500}
                    sizes="100vw"
                    style={
                        customWidth == 'true'
                            ?
                            { width: '318px', height: '180px', borderRadius: '50%,',margin:'0 auto' }
                            :
                            { width: '208px', height: '150px', borderRadius: '50%,',margin:'0 auto' }
                    }
                    src={data.image}
                    alt='' />
                <hr className='bg-[#FF9209] h-14 w-1 ml-[3px] mt-2 absolute ' />
                <div className='my-2 ml-3'>
                    <h1 className='font-semibold text-[13px] text-left ml-2 font-serif'>${data.title}</h1>
                    <p className='text-[#FF9209] text-[11px] ml-2 '>Ticket from $<span>{data.price}</span></p>
                    <p className='text-[#FF9209] text-[11px] ml-2 '>Ticket Available<span>{data.ticket}</span></p>
                    <p className='text-[#FF9209] text-[11px] ml-2 '>Rating :<span>{data?.rating}</span></p>
                    <div className='my-2'>
                        <h1 className='flex items-center mx-1 text-[12px]'> <span className='bg-[#FF9209] p-[2px]  rounded-lg mr-1'><BiTimeFive className='text-white ' /></span> Start <span className='ml-2'>20.00pm </span> </h1>
                        <h1 className='flex items-center mx-1 text-[12px]'> <span className='bg-[#FF9209] p-[2px]  rounded-lg mr-1'><CiLocationOn className='text-white ' /></span>  Manhattan , New York </h1>
                    </div>

                </div>

                <div 
                    className={
                        feature == 'true'
                            ?
                            ' flex items-center mt-3 justify-center'
                            :
                            ' flex items-center mt-3 justify-around'
                    }
                
               >
                    <>

                        <Modal
                            open={open}
                            title="Booking Your Ticket"
                            onOk={handleOk}
                            onCancel={handleCancel}
                            footer={[
                                <Button key="back" onClick={handleCancel}>
                                    Return
                                </Button>,


                            ]}
                        >
                            <Form
                                name="wrap"
                                form={form}
                                labelCol={{ flex: '110px' }}
                                labelAlign="left"
                                labelWrap
                                wrapperCol={{ flex: 1 }}
                                colon={false}
                                style={{ maxWidth: 600 }}
                                onFinish={onFinish}
                                initialValues={{
                                    username: user?.name, 
                                    email: user?.email, 
                                }}
                            >
                                <h1 className='text-center my-2 text-2xl font-semibold'>Title: {data.title}</h1>

                                <Form.Item label="Name" name="name" >
                                    <Input className='font-serif italic border-b-indigo-500' defaultValue={user?.name} placeholder={user?.name} readOnly />
                                </Form.Item>
                                <Form.Item label="Email" name="email" rules={[{ required: true }]}>
                                    <Input className='font-serif italic border-b-indigo-500' defaultValue={user?.email} placeholder={user?.email} readOnly />
                                </Form.Item>
                                <Form.Item label="Number" name="number" rules={[{ required: true }]}>
                                    <Input />
                                </Form.Item>


                                <Form.Item label="Number of Ticket" name="ticket" rules={[{ required: true }]}>
                                    <InputNumber />
                                </Form.Item>
                                <Form.Item label="DatePicker" name="eventDate">
                                    <DatePicker />
                                </Form.Item>

                                <Form.Item label=" ">
                                    <Button type="primary" className='bg-slate-700' htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Modal>
                    </>


                    <div className='flex items-center '>
                        <button onClick={showModal}
                            className={
                                feature == 'true'
                                    ?
                                    ' hidden'
                                    :
                                    ' text-[12px] shadow-md border border-[#d5d4d3] rounded-xl  py-[6px] px-[10px]  font-serif font-semibold hover:bg-[#FF9209] hover:text-white '
                            }
                        >TICKET BOOK</button>
                    </div>
                    <Link href={`service/${product._id}`} className='flex justify-center'
                    >
                        <button className='text-[12px] shadow-md border border-[#d5d4d3] rounded-xl  py-[6px] px-[10px]  font-serif font-semibold hover:bg-[#FF9209] hover:text-white'>TICKET & DETAILS</button>
                    </Link>


                </div>
            </div>
        </div>
    )
}

export default EventCard;