import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../context/authProvider';
import { Button } from 'flowbite-react'

const HoSoCaNhan = () => {
    const { auth } = useContext(AuthContext);
    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState({
        fullName: auth.fullName,
        phone: auth.phone,
        email: auth.email,
        gender: auth.gender,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleGenderChange = (e) => {
        setEditedData((prevData) => ({
            ...prevData,
            gender: e.target.value,
        }));
    };

    const handleSave = () => {
        // Thực hiện lưu dữ liệu đã chỉnh sửa tại đây
        // Sau khi lưu xong, cập nhật trạng thái và tắt chế độ chỉnh sửa
        setIsEditing(false);
    };

    const handleCancel = () => {
        // Nếu người dùng hủy bỏ, khôi phục dữ liệu về giá trị ban đầu và tắt chế độ chỉnh sửa
        setEditedData({
            fullName: auth.fullName,
            phone: auth.phone,
            email: auth.email,
            gender: auth.gender,
        });
        setIsEditing(false);
    };

    return (
        <div className='w-full h-auto'>
            <div className='relative'>
                <div className='absolute top-0 w-full '>
                    <div class="py-4 px-6 flex items-center justify-center">
                        <div className='p-4 rounded shadow-sm m-2 w-full text-white'>
                            <div className='flex items-center justify-center'>
                                <label class="block  font-bold mb-2 text-3xl text-white" for="name">
                                    Thông Tin Cá Nhân
                                </label>
                            </div>

                            <div class="mb-4 w-[48%]">
                                <label class="block text-white font-bold mb-2" for="name">
                                    Tên Khách Hàng
                                </label>
                                <input
                                    className={`input input-bordered ${isEditing ? 'input-warning' : ''} w-full max-w-xs text-black font-semibold  max-sm:text-xs leading-tight focus:outline-none focus:shadow-outline`}
                                    id="name"
                                    type="text"
                                    value={isEditing ? editedData.fullName : auth.fullName}
                                    readOnly={!isEditing}
                                    onChange={handleInputChange}
                                    name="fullName"
                                />
                            </div>
                            <div class="mb-4 w-[48%]">
                                <label class="block text-white font-bold mb-2" for="phoneNumber">
                                    Số Điện Thoại
                                </label>
                                <input
                                    className={`input input-bordered ${isEditing ? 'input-warning' : ''} w-full max-w-xs text-black max-sm:text-xs font-semibold leading-tight focus:outline-none focus:shadow-outline`}
                                    id="phoneNumber"
                                    type="number"
                                    value={isEditing ? editedData.phone : auth.phone}
                                    readOnly={!isEditing}
                                    onChange={handleInputChange}
                                    name="phone"
                                />
                            </div>
                            <div class="mb-4 max-sm:text-xs">
                                <label class="block text-white font-bold mb-2" for="email">
                                    Email
                                </label>
                                <input
                                    className={`input input-bordered ${isEditing ? 'input-warning' : ''} w-full max-w-xs max-sm:text-xs text-black font-semibold leading-tight focus:outline-none focus:shadow-outline`}
                                    id="email"
                                    type="email"
                                    value={isEditing ? editedData.email : auth.email}
                                    readOnly={!isEditing}
                                    onChange={handleInputChange}
                                    name="email"
                                />
                            </div>
                            <div class="mb-4 max-sm:text-xs">
                                <label class="block text-white font-bold mb-2" for="gender">
                                    Giới Tính
                                </label>
                                {isEditing ? (
                                    <select
                                        className={`input input-bordered input-warning w-full max-w-xs max-sm:text-xs text-black font-semibold leading-tight focus:outline-none focus:shadow-outline`}
                                        id="gender"
                                        onChange={handleGenderChange}
                                        value={editedData.gender}
                                        name="gender"
                                    >
                                        <option value="Nam">Nam</option>
                                        <option value="Nữ">Nữ</option>
                                    </select>
                                ) : (
                                    <input
                                        className={`input input-bordered ${isEditing ? 'input-warning' : ''} w-full max-w-xs max-sm:text-xs text-black font-semibold leading-tight focus:outline-none focus:shadow-outline`}
                                        id="gender"
                                        type="text"
                                        value={auth.gender === null ? "Chưa có thông tin" : auth.gender}
                                        readOnly
                                    />
                                )}
                            </div>
                            <div className='ml-[15%]'>
                                {isEditing ? (
                                    <div className='flex items-start justify-start'>
                                        <Button className='bg-green-400' onClick={handleSave}>
                                            Lưu
                                        </Button>
                                        <Button className='bg-red-400' onClick={handleCancel}>
                                            Hủy
                                        </Button>
                                    </div>
                                ) : (
                                    <Button className='bg-green-400 right-0' onClick={() => { setIsEditing(true) }}>Chỉnh sửa</Button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HoSoCaNhan
