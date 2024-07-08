import React, {useState} from 'react';
import {EnvelopeIcon, LockClosedIcon} from '@heroicons/react/24/outline';
import banner from '../../assets/TVC.svg';
import logoText from '../../assets/logoText.svg';
import network from '../../assets/network.svg';
import {Button, Form} from 'react-bootstrap';
import Footer from '../../components/Footer.jsx';
import Header from "../../components/Header.jsx";
import {useAuth} from "../../contexts/useAuth.jsx";
import ToastContainer from "../../components/Toast.jsx";
import {toast} from 'react-toastify';
import {Navigate, useNavigate} from 'react-router-dom';

const LoginComponent = () => {
    const navigate = useNavigate();
    const {token, loginUser, registerUser} = useAuth();
    // Redirect to home page if user is logged in
    if (token) {
        return <Navigate to={'/'}/>
    }

    const [activeTab, setActiveTab] = useState('login');
    const [errors, setErrors] = useState({
        passwordMismatch: false,
    });

    const [form, setForm] = useState({
        email: '',
        password: '',
        passwordConfirmation: '',
    });

    const handleChange = (e) => {
        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
        if (e.target.name === 'passwordConfirmation') {
            e.target.value ? setErrors({...errors, passwordMismatch: e.target.value !== form.password}) : setErrors({...errors, passwordMismatch: false});
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (activeTab === 'login') {
            try {
                const response = await loginUser(form.email, form.password);
                if (response && response.value) {
                    navigate('/');
                }
            } catch (error) {
                switch (error.response.status) {
                    case 401:
                        toast.error('Email hoặc mật khẩu không đúng');
                        break;

                    case 404:
                        toast.error('Tài khoản không tồn tại');
                        break;

                    default:
                        toast.error('Đã xảy ra lỗi');
                        break;
                }
            }

        } else {
            try {
                await registerUser(form);
                toast.success('Đăng ký tài khoản thành công');
                setActiveTab('login');
            } catch (error) {
                if (error.response.status === 409) {
                    toast.error('Email đã tồn tại');
                }
            }
        }
    }

    const handleActiveTab = (tab) => {
        setActiveTab(tab);
    }

    return (
        <>
            <ToastContainer/>
            <Header/>
            <div className="flex items-center justify-center bg-gray-100">
                <div className="bg-gray-100 flex justify-center absolute top-[100px] border-orange-500 border-2 rounded-xl p-4">
                    <div className="lg:flex flex-col items-start relative hidden">
                        <div className="absolute left-10 top-8 min-h-[77px] min-w-[366px] object-fit-cover">
                            <img loading="lazy" decoding="async" src={logoText} alt="logo"/>
                        </div>
                        <div className="relative aspect-[3/2] w-full max-w-[600px] object-fit-cover">
                            <img loading="lazy" decoding="async" src={banner} alt="banner"/>
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
                                    <Form className="flex flex-col mt-4" onSubmit={handleSubmit}>
                                        <Form.Group className="mt-3" controlId="formEmail">
                                            <Form.Label className="flex"><EnvelopeIcon
                                                className="size-5 mr-2"/>Email</Form.Label>
                                            <Form.Control type="email" placeholder="Nhập email" className="border-orange-300 text-lg focus:ring-4 focus:ring-orange-500/[.6]"
                                                          name="email" onChange={handleChange} value={form.email} required/>
                                        </Form.Group>

                                        <Form.Group className="mt-3" controlId="formPassword">
                                            <Form.Label className="flex"><LockClosedIcon className="size-5 mr-2"/>Mật khẩu</Form.Label>
                                            <Form.Control type="password" placeholder="Nhập mật khẩu" className="border-orange-300 text-lg focus:ring-4 focus:ring-orange-500/[.6]"
                                                          name="password" onChange={handleChange} value={form.password} required/>
                                        </Form.Group>
                                        <Button variant="primary" type="submit" className="mt-4 py-[10px] bg-orange-500 border-0 rounded-3xl w-full hover:bg-orange-700">
                                            Đăng nhập
                                        </Button>
                                        <a href="/" className="text-orange-500 text-center mt-4">Quên mật khẩu?</a>
                                    </Form>
                                </div>
                            )}
                            {activeTab === 'register' && (
                                <div className="w-full">
                                    <Form className="flex flex-col mt-4" onSubmit={handleSubmit}>
                                        <Form.Group className="mt-3" controlId="formEmail">
                                            <Form.Label className="flex"><EnvelopeIcon
                                                className="size-5 mr-2"/>Email</Form.Label>
                                            <Form.Control type="email" placeholder="Nhập email đăng ký" className="border-orange-300 focus:ring-4 focus:ring-orange-500/[.6] text-lg"
                                                          name="email" onChange={handleChange} value={form.email} required/>
                                        </Form.Group>

                                        <Form.Group className="mt-3" controlId="formPassword">
                                            <Form.Label className="flex"><LockClosedIcon className="size-5 mr-2"/>Mật khẩu</Form.Label>
                                            <Form.Control type="password" placeholder="Nhập mật khẩu" className="border-orange-300 text-lg focus:ring-4 focus:ring-orange-500/[.6]"
                                                          name="password" onChange={handleChange} value={form.password} required/>
                                        </Form.Group>
                                        <Form.Group className="mt-3" controlId="formConfirmPassword">
                                            <Form.Label className="flex"><LockClosedIcon className="size-5 mr-2"/>Xác nhận mật khẩu</Form.Label>
                                            <Form.Control type="password" placeholder="Nhập mật khẩu" className="border-orange-300 text-lg focus:ring-4 focus:ring-orange-500/[.6]"
                                                          name="passwordConfirmation" onChange={handleChange} value={form.passwordConfirmation} required/>
                                        </Form.Group>
                                        {errors.passwordMismatch && (
                                            <span className="text-red-500 text-sm mt-1">Mật khẩu không khớp</span>
                                        )}
                                        <Button variant="primary" type="submit" className="mt-4 py-[10px] bg-orange-500 border-0 rounded-3xl w-full hover:bg-orange-700">
                                            Đăng ký
                                        </Button>
                                    </Form>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center w-full text-center pt-[480px] sm:mx-20">
                    <span className="text-green-800 font-bold text-2xl">Kết nối FUTA Group</span>
                    <span className="text-gray-500 text-xl">Đa dạng hệ sinh thái FUTA Group qua App FUTA: mua vé xe Phương Trang, Xe Hợp Đồng, Xe Buýt, Giao hàng...</span>
                    <img loading="lazy" decoding="async" src={network} alt="network" className="py-8"/>
                </div>
            </div>
            <Footer/>
        </>
    );

};

export default LoginComponent;
