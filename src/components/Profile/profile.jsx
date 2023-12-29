import React, { useState } from 'react'
import { icons } from "../../utils/icons";
import HoSoCaNhan from './HoSoCaNhan';



const Profile = () => {

    const [activeTab, setActiveTab] = useState("profile");
    const handleTabClick = (tabName) => {
        setActiveTab(tabName); // Cập nhật trạng thái khi nhấn vào thẻ li
    };

    return (
        <div className='w-full bg-black pt-40'>
            <div className='flex justify-center items-start'>
                <div className='w-3/4 text-white flex items-start justify-center'>
                    <div className='w-1/4 h-auto m-4 bg-white text-black flex items-center justify-center rounded-lg'>
                        <ul className='w-3/4'>
                            <li
                                className={`m-4 cursor-pointer flex items-center border border-yellow-300 p-2 rounded-2xl ${activeTab === "profile" && "bg-yellow-200" // Kiểm tra trạng thái để áp dụng lớp CSS khác nhau
                                    }`}
                                onClick={() => handleTabClick("profile")}
                            >
                                <span className='mx-2'><icons.BiSolidUser /></span>
                                Hồ Sơ
                            </li>

                            <li
                                className={`m-4 cursor-pointer flex items-center border border-yellow-300 p-2 rounded-2xl ${activeTab === "address" && "bg-yellow-200" // Kiểm tra trạng thái để áp dụng lớp CSS khác nhau
                                    }`}
                                onClick={() => handleTabClick("address")}
                            >

                                <span className='mx-2'><icons.FaRegAddressCard /></span>

                                Địa Chỉ

                            </li>
                            <li
                                className={`m-4 cursor-pointer flex items-center border border-yellow-300 p-2 rounded-2xl ${activeTab === "ChangePassword" && "bg-yellow-200" // Kiểm tra trạng thái để áp dụng lớp CSS khác nhau
                                    }`}
                                onClick={() => handleTabClick("ChangePassword")}
                            >

                                <span className='mx-2'><icons.GiSkeletonKey /></span>

                                Đổi Mật Khẩu

                            </li>
                            <li
                                className={`m-4 cursor-pointer flex items-center border border-yellow-300 p-2 rounded-2xl ${activeTab === "myorder" && "bg-yellow-200" // Kiểm tra trạng thái để áp dụng lớp CSS khác nhau
                                    }`}
                                onClick={() => handleTabClick("myorder")}
                            >

                                <span className='mx-2'><icons.RiListUnordered /></span>

                                Đơn Mua

                            </li>
                            <li
                                className={`m-10 cursor-pointer flex items-center border border-yellow-300 p-2 rounded-2xl ${activeTab === "logout" && "bg-yellow-200" // Kiểm tra trạng thái để áp dụng lớp CSS khác nhau
                                    }`}
                                onClick={() => handleTabClick("logout")}
                            >
                                Đăng Xuất
                            </li>
                        </ul>

                    </div>
                    <div className="w-3/4 m-4 bg-black rounded-xl">
                        <div className='relative'>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/fotofushion-51865.appspot.com/o/FrojectImage%2Fbgprofile.jpg?alt=media&token=9b1d45dc-0459-4109-826d-3a79de3fac95"
                                alt="Background"
                                style={{
                                    width: '100%', // Đặt chiều rộng theo mong muốn
                                    height: 'auto', // Để tự động tính chiều cao dựa trên chiều rộng
                                    borderRadius: '20px', // Đặt bo tròn theo mong muốn
                                }}
                            />
                            <div className='absolute top-0 w-full'>
                                {/* {activeTab === "address" && <Address />} */}
                                {activeTab === "profile" && <HoSoCaNhan />}
                                {/* {activeTab === "bank" && <Hoso />}
                                {activeTab === "myorder" && <Order />}
                                {activeTab === "ChangePassword" && <ChangePasswordPage />} */}
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Profile
