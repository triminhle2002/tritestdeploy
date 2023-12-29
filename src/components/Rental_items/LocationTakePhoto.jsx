import React from 'react'

const LocationTakePhoto = () => {
    const diaDiemChupAnhDaNang = [
        {
            ten: "Cầu Rồng",
            price: 300000,
            diaChi: "Sông Hàn, Ngũ Hành Sơn, Đà Nẵng"
        },
        {
            ten: "Bãi biển Mỹ Khê",
            price: 300000,
            diaChi: "Quận Ngũ Hành Sơn, Đà Nẵng"
        },
        {
            ten: "Ngũ Hành Sơn (Núi Non Nước)",
            price: 300000,
            diaChi: "Hoà Hải, Ngũ Hành Sơn, Đà Nẵng"
        },
        {
            ten: "Linh Ứng Đại Vương",
            price: 300000,
            diaChi: "2 Hải Thượng Lãn Ông, Hải Châu, Đà Nẵng"
        },
        {
            ten: "Công viên Châu Á - Á Âu",
            price: 300000,
            diaChi: "1 Duy Tân, Hải Châu, Đà Nẵng"
        },
        {
            ten: "Cầu Thuận Phước",
            price: 300000,
            diaChi: "Quận Hải Châu, Đà Nẵng"
        },
        {
            ten: "Lăng Ông Quân",
            price: 300000,
            diaChi: "24 Trần Phú, Hải Châu, Đà Nẵng"
        },
        {
            ten: "Bảo tàng Champa",
            price: 300000,
            diaChi: "02 2/9, Hải Châu, Đà Nẵng"
        },
        {
            ten: "Khu du lịch Suối Khoáng nóng Thần Tài",
            price: 300000,
            diaChi: "Thanh Đông, Hòa Phong, Hòa Vang, Đà Nẵng"
        },
        {
            ten: "Sông Cổ Cò",
            price: 300000,
            diaChi: "Quận Sơn Trà, Đà Nẵng"
        },
        {
            ten: "Nhà thờ Con Gà",
            price: 300000,
            diaChi: "Hải Châu, Đà Nẵng"
        },
        {
            ten: "Bãi biển Non Nước",
            price: 300000,
            diaChi: "Quận Ngũ Hành Sơn, Đà Nẵng"
        },
        {
            ten: "Cầu Sông Hàn",
            price: 300000,
            diaChi: "Sông Hàn, Hải Châu, Đà Nẵng"
        },
        {
            ten: "Bán đảo Sơn Trà",
            price: 300000,
            diaChi: "Quận Sơn Trà, Đà Nẵng"
        },
        {
            ten: "Khu du lịch đền Hùng",
            price: 300000,
            diaChi: "Hòa Bắc, Liên Chiểu, Đà Nẵng"
        },
        {
            ten: "Bãi biển Phạm Văn Đồng",
            price: 300000,
            diaChi: "Quận Sơn Trà, Đà Nẵng"
        },
        {
            ten: "Khu du lịch Biển Đá Nhảy",
            price: 300000,
            diaChi: "Hoà Hiệp Nam, Liên Chiểu, Đà Nẵng"
        },
        {
            ten: "Công viên Biển Đông",
            price: 300000,
            diaChi: "Trần Thị Lý, Thanh Khê, Đà Nẵng"
        },
        {
            ten: "Bãi biển An Bàng",
            price: 300000,
            diaChi: "Quận Cẩm An, Hội An (gần Đà Nẵng)"
        },
        {
            ten: "Phố đi bộ - Cầu Rồng",
            price: 300000,
            diaChi: "Sông Hàn, Hải Châu, Đà Nẵng"
        }
    ];
    return (
        <div className='w-full bg-black'>

            <div className='flex items-center justify-center'>
                <div className='v-4/5 grid grid-cols-3 max-md:grid-cols-1 max-xl:grid-cols-2'>
                    {diaDiemChupAnhDaNang.map((item) => {
                        return (
                            <div className="card w-96 bg-white text-black m-4">
                                <div className="card-body">
                                    <h2 className="card-title">{item.ten}</h2>
                                    <p className='text-lg text-red-400 font-semibold animate-bounce'>{item.price} VND</p>
                                    <p style={{ whiteSpace: 'pre-line' }}>{item.diaChi}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn bg-btnprimary">Chọn</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default LocationTakePhoto
