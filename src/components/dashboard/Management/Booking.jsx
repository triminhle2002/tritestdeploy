import React, { useContext, useEffect, useState } from 'react'
import * as bookingApi from '../../../apis/booking'
import AuthContext from '../../../context/authProvider';
import { ToastContainer, toast } from 'react-toastify';
import { Table, Button, Modal } from 'flowbite-react';
import EdidAlbums from '../edid/edidAlbums';
import AddAlbums from '../add/AddAlbumPhoto'
import { HiOutlineExclamationCircle } from 'react-icons/hi'
import * as albumsphoto from '../../../apis/albumphoto'
import * as firebase from '../../../apis/firebase'

const Booking = () => {
    const [listBooking, setListBooking] = useState([])
    const { auth } = useContext(AuthContext);
    const [role_id, setRole_id] = useState(null);

    const [selectedCustomer, setSelectedCustomer] = useState(null);

    const [itemDeleteId, setItemDeleteId] = useState(null);


    const [openModal, setOpenModal] = useState(false);
    const [delete_booking, setDelete_booking] = useState(false);

    const [url_photo, setUrl_photo] = useState('')

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [reloadPage, setReloadPage] = useState(false);
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
        if (!isModalOpen && reloadPage) {
            window.location.reload();
        }
    }, [isModalOpen, reloadPage]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await bookingApi.getAllBookingDetails(auth.accessToken);
                setListBooking(response);
            } catch (error) {
                console.error('Lỗi khi lấy danh sách booking:', error);
            }
        };
        if (auth.accessToken !== undefined) {
            fetchData();
        }
    }, [auth.accessToken]);

    useEffect(() => {
        return () => {
            console.log(listBooking);
        };
    }, [listBooking])

    const getUrlPhoto = async (id) => {
        try {
            const response = await albumsphoto.getAlbumsPhotoById(id)
            console.log(response);
            setUrl_photo(response.cover_photo)
        } catch (error) {

        }
    }

    // XÓA dữ liệu albums và cả hình ảnh ở trên firebase
    const handleDeleteRole = async () => {
        try {
            const deleteRoles = await bookingApi.deleteBlogPost(auth.accessToken, role_id);
            console.log(deleteRoles.statusCode);
            if (deleteRoles.statusCode === 204) {
                notify("Xóa vai trò thành công", 'success');
                handleCloseModal();
            }
            else {
                notify("Xóa vai trò không thành công", 'error');
            }
        } catch (error) {
            notify(error, 'error');
        }
    };

    if (delete_booking) {
        handleDeleteRole();
    }

    // mở modal sửa
    const openEditModal = (item) => {
        setSelectedCustomer(item);
        document.getElementById('my_modal_4 edit').showModal();
    };

    // mở modal xóa

    const openDeleteModal = (id) => {
        setRole_id(id)
        setOpenModal(true)
    }
    // useEffect(() => {
    //     console.log(albumspt);

    // }, [albumspt])

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setReloadPage(true);


    };
    return (
        <div>
            <ToastContainer />
            <div className='w-full flex items-center justify-center m-2'>
                <span className='text-2xl font-semibold'>Quản Lí Thiết Bị Cho Thuê</span>
            </div>
            <div className='flex items-center justify-center'>
                <div className='w-3/5 h-10 m-4 flex items-center justify-center'>
                    <div class='w-1/2 mx-auto'>
                        <div className="join">
                            <div>
                                <div>
                                    <input className="input input-bordered join-item" placeholder="Search" />
                                </div>
                            </div>
                            <select className="select select-bordered join-item">
                                <option disabled selected>Lựa chọn</option>
                                <option>Sci-fi</option>
                                <option>Drama</option>
                                <option>Action</option>
                            </select>
                            <div className="indicator">
                                <button className="btn join-item">Tìm Kiếm</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='flex items-center justify-center'>
                <div className='w-[80%] m-4'>
                    <Table>
                        <Table.Head>
                            <Table.HeadCell>STT</Table.HeadCell>
                            <Table.HeadCell>Ngày Chụp</Table.HeadCell>
                            <Table.HeadCell>Giá</Table.HeadCell>
                            <Table.HeadCell>Thanh toán</Table.HeadCell>
                            <Table.HeadCell>Xác nhận</Table.HeadCell>

                            <Table.HeadCell>
                                <span className="sr-only">Edit</span>
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {listBooking.map((item, index) => {
                                return (
                                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <Table.Cell>
                                            {index}
                                        </Table.Cell>
                                        <Table.Cell>{item.booking_time}</Table.Cell>
                                        <Table.Cell>{item.price}</Table.Cell>
                                        <Table.Cell>{item.payment_status}</Table.Cell>
                                        <Table.Cell>{item.status}</Table.Cell>


                                        <Table.Cell>
                                            <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 m-1 "
                                                onClick={() => openEditModal(item)}>
                                                Sửa
                                            </a>
                                            <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 m-1"
                                                onClick={() => openDeleteModal(item.id)}>
                                                Xóa
                                            </a>
                                        </Table.Cell>
                                    </Table.Row>
                                )
                            })}
                            <dialog id="my_modal_4 edit" className="modal">
                                <div className="modal-box w-11/12 max-w-5xl">
                                    <EdidAlbums item={selectedCustomer} />
                                    <div className="modal-action">
                                        <form method="dialog">
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => handleCloseModal()}>✕</button>
                                            <button className="btn" onClick={() => handleCloseModal()}>Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                                <Modal.Header />
                                <Modal.Body>
                                    <div className="text-center">
                                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                            Bạn có chắc rằng bạn muốn xóa Albums này?
                                        </h3>
                                        <div className="flex justify-center gap-4">
                                            <Button color="failure" onClick={() => { setOpenModal(false); setDelete_booking(true) }}>
                                                {"Đúng, Tôi muốn xóa nó"}
                                            </Button>
                                            <Button color="gray" onClick={() => setOpenModal(false)}>
                                                Không, Tôi nhầm lẫn
                                            </Button>
                                        </div>
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default Booking
