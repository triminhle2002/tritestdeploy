import React, { useContext, useEffect, useState } from 'react'
import AddAlbums from '../add/AddAlbumPhoto'
import { Table, Button, Modal } from 'flowbite-react';
import AuthContext from '../../../context/authProvider';
import * as albumsphoto from '../../../apis/albumphoto'
import * as firebase from '../../../apis/firebase'
import EdidAlbums from '../edid/edidAlbums';
import { ToastContainer, toast } from 'react-toastify';
import { HiOutlineExclamationCircle } from 'react-icons/hi'


const Albums = () => {
    const [albumspt, setAlbumspt] = useState([])
    const { auth } = useContext(AuthContext);

    const [selectedCustomer, setSelectedCustomer] = useState(null);

    const [itemDeleteId, setItemDeleteId] = useState(null);

    const [openModal, setOpenModal] = useState(false);
    const [delete_costumer, setDelete_costumer] = useState(false);
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


    // Lấy tất cả dữ liệu từ database lên
    useEffect(() => {
        // console.log(auth);
        const fetchData = async () => {
            try {
                const response = await albumsphoto.getAlbumsPhoto()
                console.log(response);
                setAlbumspt(response);
            } catch (error) {
                console.error('Lỗi khi lấy danh sách ảnh:', error);
            }
        };
        fetchData();
    }, []);
    // lấy url của hình ảnh
    const getUrlPhoto = async (id) => {
        try {
            const response = await albumsphoto.getAlbumsPhotoById(id)
            console.log(response);
            setUrl_photo(response.cover_photo)
        } catch (error) {

        }
    }

    // XÓA dữ liệu albums và cả hình ảnh ở trên firebase
    const handleDeleteImage = async () => {
        try {
            const deleteSuccess = await firebase.deleteImage(url_photo);
            if (deleteSuccess) {
                const deleteItem = await albumsphoto.deleteAlbums(auth.accessToken, itemDeleteId)
                if (deleteItem.statusCode === 204) {
                    notify("Xóa thiết bị thành công", 'success');
                    handleCloseModal();
                }
                else {
                    notify("Xóa thiết bị không thành công", 'error');
                }
            }
            else {
                // Xóa không thành công, thực hiện xử lý tương ứng
                notify("Xóa hình ảnh trên firebase không thành công", 'error');
            }

        } catch (error) {
            notify("Xóa thiết bị không thành công", 'error');

        }
    };

    if (delete_costumer) {
        handleDeleteImage();
    }

    // mở modal sửa
    const openEditModal = (item) => {
        setSelectedCustomer(item);
        document.getElementById('my_modal_4 edit').showModal();
    };

    // mở modal xóa

    const openDeleteModal = (id) => {
        getUrlPhoto(id)
        setItemDeleteId(id)
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
                    <div className='flex items-center justify-center'>
                        <Button gradientMonochrome="lime" onClick={() => document.getElementById('my_modal_4_1').showModal()}>Thêm Albums Mới</Button>
                    </div>
                </div>
            </div>
            <dialog id="my_modal_4_1" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <AddAlbums />
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => handleCloseModal()}>✕</button>
                            <button className="btn" onClick={() => handleCloseModal()}>Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
            <div className='flex items-center justify-center'>
                <div className='w-[80%] m-4'>
                    <Table>
                        <Table.Head>
                            <Table.HeadCell>Tên</Table.HeadCell>
                            <Table.HeadCell>Tình trạng</Table.HeadCell>
                            <Table.HeadCell>Số lượng ảnh</Table.HeadCell>
                            <Table.HeadCell>Ngày tạo</Table.HeadCell>
                            <Table.HeadCell>
                                <span className="sr-only">Edit</span>
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {albumspt.map((item) => {
                                return (
                                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            {item.name}
                                        </Table.Cell>
                                        <Table.Cell>{item.category}</Table.Cell>
                                        <Table.Cell>{item.sum_photo}</Table.Cell>
                                        <Table.Cell>{item.date_create}</Table.Cell>

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
                                            <Button color="failure" onClick={() => { setOpenModal(false); setDelete_costumer(true) }}>
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

export default Albums
