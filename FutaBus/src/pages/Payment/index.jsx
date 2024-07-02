import React from 'react';
import Header from '../../components/Header.jsx';
import './PaymentInfoComponent.css';
import QRcode from '../../assets/QR_code.svg';
import SmartBanking from '../../assets/smart_banking.svg';
import ZaloPay from '../../assets/zalopay.svg';
import MoMo from '../../assets/momo.svg';

const PaymentInfoComponent = () => {
    return (
        <>
            <Header />
            <div className="payment-info-container">
                <div className="payment-column">
                    <h3>Chọn phương thức thanh toán</h3>
                    <form className='payment-method'>
                        <label className="payment-option">
                            <input type="radio" name="paymentMethod" id="bankTransfer" />
                            <img src={SmartBanking} alt="Payment Method Icon" className="payment-icon" />
                            <span>Ngân hàng điện tử</span>
                        </label>
                        <label className="payment-option">
                            <input type="radio" name="paymentMethod" id="zalopay" />
                            <img src={ZaloPay} alt="Payment Method Icon" className="payment-icon" />
                            <span>ZaloPay</span>
                        </label>
                        <label className="payment-option">
                            <input type="radio" name="paymentMethod" id="momo" />
                            <img src={MoMo} alt="Payment Method Icon" className="payment-icon" />
                            <span>MoMo</span>
                        </label>
                    </form>
                </div>

                <div className="payment-column">
                    <h3>Tổng thanh toán</h3>
                    <p className='number'>500.000đ</p>
                    
                    <h3>Thời gian giữ chỗ còn lại</h3>
                    <p className='number'>19:59</p>
                    <img src={QRcode} loading="lazy" decoding="async" alt="QR Code" className="qr-code-image" />
                </div>

                <div className="payment-column">
                    <div className="rounded-box">
                        <h3>Thông tin hành khách</h3>
                        <div className="info-item">
                            <div className="info-label">Họ và tên:</div>
                            <div className="info-value">Nguyễn Văn A</div>
                        </div>
                        <div className="info-item">
                            <div className="info-label">Số điện thoại:</div>
                            <div className="info-value">0987654321</div>
                        </div>
                        <div className="info-item">
                            <div className="info-label">Email:</div>
                            <div className="info-value">abc@example.com</div>
                        </div>
                    </div>

                    <div className="rounded-box">
                        <h3>Thông tin chuyến đi</h3>
                        <div className="info-item">
                            <div className="info-label">Tuyến xe:</div>
                            <div className="info-value">Hà Nội - TP.HCM</div>
                        </div>
                        <div className="info-item">
                            <div className="info-label">Thời gian xuất bến:</div>
                            <div className="info-value">10:00 AM, 2024-07-03</div>
                        </div>
                        <div className="info-item">
                            <div className="info-label">Số lượng ghế:</div>
                            <div className="info-value">2</div>
                        </div>
                        <div className="info-item">
                            <div className="info-label">Số ghế:</div>
                            <div className="info-value">A12, A13</div>
                        </div>
                        <div className="info-item">
                            <div className="info-label">Điểm lên xe:</div>
                            <div className="info-value">Bến xe Mỹ Đình</div>
                        </div>
                        <div className="info-item">
                            <div className="info-label">Thời gian tới điểm lên xe:</div>
                            <div className="info-value">30 phút trước khi xe xuất bến</div>
                        </div>
                        <div className="info-item">
                            <div className="info-label">Đón tận nơi:</div>
                            <div className="info-value">Có</div>
                        </div>
                        <div className="info-item">
                            <div className="info-label">Tổng tiền lượt đi:</div>
                            <div className="info-value">500.000đ</div>
                        </div>
                        <div className="info-item">
                            <div className="info-label">Số lượng ghế:</div>
                            <div className="info-value">2</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PaymentInfoComponent;
