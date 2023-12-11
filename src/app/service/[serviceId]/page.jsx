'use client'
import EventCard from '@/components/Shared/EventCard';
import { Button, DatePicker, Form, Input, InputNumber, Modal, Popover } from 'antd';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiTwotoneMinusCircle } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { FaClockRotateLeft } from "react-icons/fa6";
import HotelCard from '@/components/Shared/HotelCard';
import { useForm } from "react-hook-form"
import { BiTimeFive } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';
import { useSession } from 'next-auth/react';
import toast from 'react-hot-toast';





const DetailPage = (props) => {

    const session = useSession();

    console.log(session.data);
    const user = session.data?.user;
    const [form] = Form.useForm();
    const [data, setData] = useState({});
    const [open, setOpen] = useState(false);



    const products = [
        { id: 1, name: 'Product 1', category: 'Category 1' },
        { id: 2, name: 'Product 2', category: 'Category 2' },
        { id: 3, name: 'Product 3', category: 'Category 1' },

    ];



    const { serviceId } = props.params;
    console.log(serviceId);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProducts = selectedCategory === 'All' ? products : products.filter(product => product.category === selectedCategory);






    useEffect(() => {
        // Define the URL for your GET request
        const apiUrl = `http://localhost:3000/api/posts/?id=${serviceId}`; // Replace with your API endpoint

        // Make a GET request using Axios
        axios
            .get(apiUrl)
            .then((response) => {
                setData(response.data[0]);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [serviceId]);
  
    let cardData ={}
    if (data && data.length > 0) {
        const value = data[0];
        const key = 'someKey'; // Replace 'someKey' with the actual key name you want to use

        cardData[key] = value;
    }

    console.log(cardData.someKey?._id);

    const hide = () => {
        setOpen(false);
    };

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
    const onFinish = async (formData) => {
        if (formData) {
            const dateString = formData.eventDate.$d;
            const dateObject = new Date(dateString);
            const formattedDate = dateObject.toDateString();
            formData.eventDate = formattedDate;
        }
        if (!formData.name) {
            formData.name = user?.name;
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
    };;

    return (
       <div>
        {
                data && <div className="product-page mt-24 pb-10 mb-10 bg-[#E0F4FF] ">

                  
                    <div className="relative" style={{ height: '300px' }}>
                        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center text-white/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
                            <h1 className="font-serif font-bold text-black">Welcome To Eventsia</h1>
                            <h1 className="font-serif font-bold text-black">
                                <span className="text-red-700">Wedding</span> Celebrations
                            </h1>
                            <Link href="/register">
                                <Button className="uppercase bg-[#0F2C59] text-white hover:outline-double font-bold font-serif" type="primary">
                                    Register
                                </Button>
                            </Link>
                        </div>
                        <div className="absolute inset-0 z-10">
                            <Image
                                src="https://i.ibb.co/fGtWcXV/fabio-fistarol-qai-Clhyq0s-unsplash.jpg"
                                alt="Description of the new image"
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                            />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 lg:grid-cols-4 mx-auto mt-3  lg:w-[1100px]'>
                        <div className='col-span-3'>
                            <Image

                                width={500}
                                height={500}
                                sizes="100vw"
                                style={{ borderRadius: '2px', }}
                                src="https://i.ibb.co/MCJNtXx/eric-ward-u-D0-W-sw-VGg-E-unsplash.jpg"
                                alt='' />
                            <div>
                                <h1 className='my-2 text-2xl font-semibold'>WHAT'S ABOUT EVENT /whats going <br />
                                    there come and learn
                                </h1>
                                <div className='my-2 mr-5 pr-4 relative'>
                                    <hr className='bg-[#FF9209] h-10 w-1   absolute left-[3px] top-[2px] ' />
                                    <h1 className='font-semibold text-[13px] text-left ml-2 font-serif'>{data.title}</h1>
                                    <p className='text-[#FF9209] text-[11px] ml-2 '>Ticket from $<span>{data.price}</span></p>
                                    <div className='my-2'>
                                        <h1 className='flex items-center mx-1 text-[12px]'> <span className='bg-[#FF9209] p-[2px]  rounded-lg mr-1'><BiTimeFive className='text-white ' /></span> Start <span className='ml-2'>20.00pm </span> </h1>
                                        <h1 className='flex items-center mx-1 text-[12px]'> <span className='bg-[#FF9209] p-[2px]  rounded-lg mr-1'><CiLocationOn className='text-white ' /></span>  {data.location} </h1>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <div>
                                            <h1 className='flex items-center '> <BiTimeFive className='mr-1 text-xl text-[#FF9209]' /> Speaker</h1>
                                            <h1 className='mr-3 text-md font-medium'>{data.guest}</h1>
                                        </div>
                                        <div>
                                            <h1 className='flex items-center '> <BiTimeFive className='mr-1 text-xl text-[#FF9209]' /> Max Seat</h1>
                                            <h1 className='mr-3'>{data.ticket} Seat</h1>
                                        </div>
                                        <Link href={`service/${data._id}`} className=' flex justify-center mt-4 '>
                                        </Link>
                                    </div>
                                    <p className='my-2 mx-1 text-[13px ]'>
                                        {data.about}
                                    </p>

                                </div>
                                <p className='my-3'>Praesent ac sem in neque venenatis tristique. Morbi et ligula velit. Nullam a augue vel mi porta vestibulum non ac elit. Vivamus convallis tortor et fermentum semper.
                                </p>
                                <p className='mb-3 leading-7'>
                                    In hac habitasse platea dictumst. Curabitur eget dui id metus pulvinar suscipit. Quisque vitae ligula laoreet, scelerisque leo quis, facilisis metus. Sed pellentesque, urna sed varius consectetur, eros augue fringilla magna, id sem magna vel diam. Nulla sed hendrerit nunc.
                                </p>
                                <div>
                                    <>
                                        <Button onClick={showModal} className='uppercase bg-[#0F2C59] text-white mr-3  hover:outline-double' type="primary">Book Ticket</Button>


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


                                    <Link href='/register'>
                                        <Button className='uppercase bg-[#0F2C59] text-white hover:outline-double ' type="primary">watch video</Button>
                                    </Link>
                                </div>
                            </div>
                            <div className='border-x my-3 '>
                                <div className=' py-4 bg-[#FFF6F6] '>

                                    <ul className='flex items-center justify-center bg-slate-400 py-2 font-serif font-normal text-white'>

                                        <li className='mx-2'>
                                            <button
                                                className='py-1 px-3 bg-white text-red-500 hover:bg-red-200 hover:text-white rounded-lg'
                                                onClick={() => setSelectedCategory('All')}
                                            >
                                                All SPEAKER
                                            </button>
                                        </li>
                                        <li className='mx-2'>
                                            <button
                                                className='py-1 px-3  bg-white text-red-500 hover:bg-red-200 hover:text-white rounded-lg'
                                                onClick={() => setSelectedCategory('Category 1')}
                                            >
                                                DAY1 SPEAKER
                                            </button>
                                        </li>
                                        <li className='mx-2'>
                                            <button
                                                className='py-1 px-3 bg-white text-red-500 hover:bg-red-200 hover:text-white rounded-lg'
                                                onClick={() => setSelectedCategory('Category 2')}
                                            >
                                                DAY2 SPEAKER
                                            </button>
                                        </li>
                                    </ul>
                                    <ul className='  h-auto my-3  py-6 px-3'>
                                        {filteredProducts.map((item) => (
                                            <div className='flex justify-around'>
                                                <div className='flex flex-col mr-4'>
                                                    <Image
                                                        width={50}
                                                        height={50}

                                                        style={{ width: '100px', height: '100px', borderRadius: '10px', overflow: 'hidden' }}
                                                        src="https://i.ibb.co/YtDWP94/png-transparent-icon-user-male-avatar-business-person-profile.png"
                                                        alt=''
                                                    />
                                                    <div className='w-32'>
                                                        <h1 >Jenifer pham</h1>
                                                        <h1>Developer PhP</h1>
                                                    </div>
                                                </div>
                                                <div className='mx-2'>
                                                    <h1 className='flex items-center s'><span><FaClockRotateLeft size={25} /> </span> 10.30-12.00</h1>
                                                    <h1>Day 1 Lesson-1</h1>
                                                    <hr className='bg-black h-1' />
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tempora quam quas sequi magni rerum facilis quisquam similique quae optio.</p>
                                                    <p>Contact <span>jogn@gmil.com</span></p>
                                                </div>

                                            </div>
                                        ))}
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div className='lg:border col-span-2 lg:col-span-1 flex flex-col justify-normal  space-y-1 px-2 '>

                            <div className='flex justify-between py-4'>
                                <h1>WHEN & WHERE </h1>
                                <AiTwotoneMinusCircle />
                            </div>
                            <hr />
                            <p>NYC - Financial Freedom</p>
                            <p>investor:{cardData.someKey?.guest}</p>
                            <p>Madison Ave</p>
                            <p>New York, NY 100100</p>
                            <p>Thursday , December 25,2023</p>
                            <p>from 6.30 PM to 8.30 PM(EST) </p>
                            <hr />
                            <div className='flex justify-between py-4'>
                                <h1>ORGANIZER </h1>
                                <AiTwotoneMinusCircle />
                            </div>
                            <hr />
                            <p className='leading-8'>Fusce pellentesque velvitae tincidunt egestas. Pellentesque habitant morbi.Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis</p>
                            <div className='flex items-center'>
                                <CiFacebook size={25} />
                                <h1>facebook/user</h1>
                            </div>
                            <div className='flex items-center'>
                                <TiSocialTwitterCircular className='my-2' size={25} />
                                <h1>@msorganiser</h1>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#FBF6EE]'>
                        <HotelCard />

                    </div>
                </div>
        }
       </div>
    );
};

export default DetailPage;
