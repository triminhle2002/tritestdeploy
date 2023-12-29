import React, { useContext, useEffect, useState } from 'react'
import * as albumphoto from '../../../apis/albumphoto'
import AuthContext from '../../../context/authProvider';
import { Spinner } from '@material-tailwind/react';
import { ToastContainer, toast } from 'react-toastify';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../../../config/firebase.config';
import { v4 } from "uuid";


const AddAlbumPhoto = () => {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [cover_photo, setCover_photo] = useState('')
    const [sum_photo, setSum_photo] = useState('')
    const [location, setLocation] = useState(null)
    const [date_create, setDate_create] = useState('')


    const [submit, setSubmit] = useState(false);
    const [loading, setLoading] = useState(false);
    const { auth } = useContext(AuthContext);

    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");


    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };
    const uploadFile = async () => {
        try {
            const imageRef = ref(storage, `/Albums/Cover/${image.name + v4()}`);
            const snapshot = await uploadBytes(imageRef, image);

            // Assuming you want to set the URL for the uploaded image
            const url = await getDownloadURL(snapshot.ref);
            setUrl(url);
            setCover_photo(url);
        } catch (error) {
            console.error("Error uploading image: ", error);
        }
    };

    const notify = (message, type) => {
        const toastType = type === 'success' ? toast.success : toast.error;
        return toastType(message, {
            position: 'top-right',
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });
    };
    useEffect(() => {
        const fetchAdd = async () => {
            try {


                const addAlbums = await albumphoto.createAlbumsPhoto(auth.accessToken, name, cover_photo, sum_photo, category, location, date_create);
                if (addAlbums.statusCode === 201) {
                    notify("Thêm albums thành công", 'success');
                    setLoading(false);
                    setSubmit(false);
                } else {
                    notify("Thêm albums thất bại");
                    setLoading(false);
                    setSubmit(false);
                }

            } catch (error) {
                console.error('Error in fetchAdd:', error);
                setLoading(false);
                setSubmit(false);
            }
        };

        if (submit && auth.accessToken !== undefined) {
            fetchAdd();
        }
    }, [submit]);

    //Thêm hình ảnh vào bảng hình ảnh

    useEffect(() => {
        console.log(url);
        console.log(cover_photo);
    }, [cover_photo, url])

    const handleSubmit = async (e) => {
        e.preventDefault();
        await uploadFile();
        setSubmit(true);
        setLoading(true);
    };
    return (
        <>
            <ToastContainer />
            <div className='w-full bg-cover bg-center object-fill' style={{ backgroundImage: 'url("https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/402193474_1072122090448818_9070160038261961007_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=46XD4qyNmaIAX8RVsZ5&_nc_ht=scontent.fsgn2-9.fna&cb_e2o_trans=t&oh=00_AfBRK6_t3nGkeE_GH7SH7-E3F2XZsp3tPGjGc9xd8AdoJQ&oe=655F8542")' }}>
                <div className='flex items-center justify-center'>
                    <div className='w-[70%] bg-black h-auto m-4 p-4 flex items-center justify-center'>
                        <span className=' text-white text-2xl'>Thêm một albums mới </span>
                    </div>
                </div>
                <div className='w-full '>
                    <div className='flex items-center justify-center '>
                        <div className='w-[70%] p-8 border border-black rounded-lg shadow-xl bg-white m-2'>
                            <form action="" onSubmit={(e) => handleSubmit(e)}>
                                <div className="flex flex-col mb-6">
                                    <label className="font-medium text-left text-lg mb-2 text-black " htmlFor="">
                                        Nhập tên của Albums
                                    </label>
                                    <input
                                        id="nameInput"
                                        className="px-4 py-3 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                                        required
                                        type="text"
                                        autoComplete=""
                                        placeholder="Tên của Albums"
                                        onChange={(event) => setName(event.target.value)}
                                        value={name}
                                    />
                                </div>

                                <div className="flex flex-col mb-6">
                                    <label className="font-medium text-left text-lg mb-2 text-black " htmlFor="">
                                        Nhập loại của Albums
                                    </label>
                                    <div className='flex items-center justify-between'>
                                        <input
                                            id="categoryInput"
                                            className="w-2/3 px-4 py-3 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                                            required
                                            type="text"
                                            autoComplete=""
                                            placeholder="Nhập loại sản phẩm"
                                            onChange={(event) => { setCategory(event.target.value) }}
                                            value={category}
                                        />
                                        <select className=" w-[30%] px-4 py-3 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg">
                                            <option disabled selected>Lựa Chọn </option>
                                            <option>Auto</option>
                                            <option>Dark mode</option>
                                            <option>Light mode</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex flex-col mb-6">
                                    <label className="font-medium text-left text-lg mb-2 text-black " htmlFor="">
                                        Nhập trí chụp của albums
                                    </label>
                                    <input

                                        className="px-4 py-3 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                                        required
                                        type="text"
                                        autoComplete=""
                                        placeholder="null"
                                        onChange={(event) => setLocation(event.target.value)}
                                        value={location}
                                    />
                                </div>

                                <div className='flex items-center justify-between'>
                                    <div className="flex flex-col mb-6">
                                        <label className="font-medium text-left text-lg mb-2 text-black " htmlFor="">
                                            Nhập số lượng hình ảnh của albums
                                        </label>
                                        <input
                                            id="priceInput"
                                            className="px-4 py-3 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                                            required
                                            type="number"
                                            autoComplete=""
                                            placeholder="...............VNĐ"
                                            onChange={(event) => setSum_photo(event.target.value)}
                                            value={sum_photo}
                                        />
                                    </div>

                                    <div className="w-[48%] flex flex-col mb-6">
                                        <label className="font-medium text-left text-lg mb-2 text-black " htmlFor="">
                                            Nhập ngày tạo albums
                                        </label>
                                        <input
                                            id="rental_Input"
                                            className="px-4 py-3 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                                            required
                                            type="date"
                                            autoComplete=""
                                            placeholder="Chọn ngày"
                                            onChange={(event) => { setDate_create(event.target.value) }}
                                            value={date_create}
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col mb-6">
                                    <label className="font-medium text-left text-lg mb-2 text-black " htmlFor="">
                                        Đưa hình ảnh của trang thiết bị lên
                                    </label>
                                    <input
                                        id="urlphotoinput"
                                        className="px-4 py-3 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                                        required
                                        type="file"
                                        autoComplete=""
                                        multiple
                                        placeholder="url_photo"
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="flex justify-center">
                                    <button
                                        type="submit"
                                        className="py-2 px-4 bg-btnprimary text-blue-gray-900 rounded-md w-32 mx-6 hover:bg-light-green-800"
                                    >
                                        {loading ? (
                                            <div className="flex items-center justify-center">
                                                <Spinner className="h-6 w-6 mr-4" /> <span>Loading...</span>
                                            </div>
                                        ) : (
                                            <span>Thêm</span>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div >
        </>
    )
}

export default AddAlbumPhoto
