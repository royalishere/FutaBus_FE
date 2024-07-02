import React, {useState} from 'react';
import {EnvelopeIcon, LockClosedIcon} from '@heroicons/react/24/outline';
import banner from '../../assets/TVC.svg';
import logoText from '../../assets/logoText.svg';
import {Button, Form} from 'react-bootstrap';
import Header from '../../components/Header.jsx';

const LoginComponent = () => {
    const [activeTab, setActiveTab] = useState('login');

    const handleActiveTab = (tab) => {
        setActiveTab(tab);
    }

    return (
        <>
            <Header/>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-gray-100 flex justify-center absolute top-[100px] border-orange-500 border-2 rounded-xl p-4">
                    <div className="lg:flex flex-col items-start relative hidden">
                        <div className="absolute left-10 top-8 min-h-[77px] min-w-[366px] object-fit-cover">
                            <img loading="lazy" decoding="async" src={logoText} alt="logo"></img>
                        </div>
                        <div className="relative aspect-[3/2] w-full max-w-[600px] object-fit-cover">
                            <img loading="lazy" decoding="async" src={banner} alt="banner"></img>
                        </div>
                    </div>

                    <div className="mt-8 mx-4 flex w-full flex-col items-center sm:w-[480px]">
                        <div className="form-login flex flex-col items-center justify-center sm:w-[480px]">
                            <div
                                className="text-2xl font-medium">{activeTab === 'login' ? 'Đăng nhập tài khoản' : 'Tạo tài khoản'}</div>
                            <div className="flex justify-center items-center w-full mt-4">
                                <button
                                    className={`py-2 px-4 grow font-bold ${activeTab === 'login' ? 'border-b-4 border-orange-500 text-orange-500' : 'text-gray-500'}`}
                                    onClick={() => handleActiveTab('login')}>
                                    ĐĂNG NHẬP
                                </button>
                                <button
                                    className={`py-2 px-4 grow font-bold ${activeTab === 'register' ? 'border-b-4 border-orange-500 text-orange-500' : 'text-gray-500'}`}
                                    onClick={() => handleActiveTab('register')}>
                                    ĐĂNG KÝ
                                </button>
                            </div>
                            {activeTab === 'login' && (
                                <div className="w-full">
                                    <Form className="flex flex-col mt-4">
                                        <Form.Group className="mt-3" controlId="formEmail">
                                            <Form.Label className="flex"><EnvelopeIcon
                                                className="size-5 mr-2"/>Email</Form.Label>
                                            <Form.Control type="email" placeholder="Nhập email" className="border-orange-300 text-lg" required/>
                                        </Form.Group>

                                        <Form.Group className="mt-3" controlId="formPassword">
                                            <Form.Label className="flex"><LockClosedIcon className="size-5 mr-2"/>Mật khẩu</Form.Label>
                                            <Form.Control type="password" placeholder="Nhập mật khẩu" className="border-orange-300 text-lg" required/>
                                        </Form.Group>
                                        <Button variant="primary" type="submit" className="mt-4 py-[10px] bg-orange-500 border-0 rounded-3xl w-full hover:bg-orange-700">
                                            Đăng nhập
                                        </Button>
                                    </Form>
                                </div>
                            )}
                            {activeTab === 'register' && (
                                <div className="w-full">
                                    <Form className="flex flex-col mt-4">
                                        <Form.Group className="mt-3" controlId="formEmail">
                                            <Form.Label className="flex"><EnvelopeIcon
                                                className="size-5 mr-2"/>Email</Form.Label>
                                            <Form.Control type="email" placeholder="Nhập email đăng ký" className="border-orange-300 text-lg" required/>
                                        </Form.Group>

                                        <Form.Group className="mt-3" controlId="formPassword">
                                            <Form.Label className="flex"><LockClosedIcon className="size-5 mr-2"/>Mật khẩu</Form.Label>
                                            <Form.Control type="password" placeholder="Nhập mật khẩu" className="border-orange-300 text-lg" required/>
                                        </Form.Group>
                                        <Form.Group className="mt-3" controlId="formConfirmPassword">
                                            <Form.Label className="flex"><LockClosedIcon className="size-5 mr-2"/>Xác nhận mật khẩu</Form.Label>
                                            <Form.Control type="password" placeholder="Nhập mật khẩu" className="border-orange-300 text-lg" required/>
                                        </Form.Group>
                                        <Button variant="primary" type="submit" className="mt-4 py-[10px] bg-orange-500 border-0 rounded-3xl w-full hover:bg-orange-700">
                                            Đăng ký
                                        </Button>
                                    </Form>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

};

export default LoginComponent;
