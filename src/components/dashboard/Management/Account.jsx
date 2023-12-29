import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../../context/authProvider'
import * as roleApi from '../../../apis/role'
import * as accountApi from '../../../apis/account'
import { Modal, Table, Button } from 'flowbite-react';

import AddRole from '../add/AddRole'
import EdidRole from '../edid/edidRole';

import { ToastContainer, toast } from 'react-toastify';
import { HiOutlineExclamationCircle } from 'react-icons/hi'

const Account = () => {
    const { auth } = useContext(AuthContext);
    const [roles, setRoles] = useState([])
    const [accounts, setAccounts] = useState([])

    const [selectedItem, setSelectedItem] = useState(null);

    const [role_id, setRole_id] = useState(null);
    const [email, setEmail] = useState(null);


    const [openModal, setOpenModal] = useState(false);
    const [delete_role, setDelete_role] = useState(false);
    const [delete_account, setDelete_account] = useState(false);



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
            console.log(auth.accessToken);
            try {
                const response = await roleApi.getAllRole(auth.accessToken);
                const dataAccount = await accountApi.getAllAccount(auth.accessToken);
                setRoles(response);
                setAccounts(dataAccount)
            } catch (error) {
                console.error('Lỗi khi lấy danh sách vai trò và tài khoản:', error);
            }
        };
        if (auth.accessToken !== undefined) {
            fetchData();
        }

    }, [auth.accessToken]);
    const handleDeleteRole = async () => {
        try {
            const deleteRoles = await roleApi.deleteRole(auth.accessToken, role_id);
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

    if (delete_role) {
        handleDeleteRole();
    }


    const openEditModal = (role) => {
        console.log(role);
        setSelectedItem(role);
        document.getElementById('my_modal_4 edit').showModal();
    };
    const openDeleteModal = (id) => {
        setRole_id(id)
        setOpenModal(true)
    }
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setReloadPage(true);


    };
    useEffect(() => {
        console.log(accounts);
        console.log(roles);

    }, [accounts, roles])
    return (
        <div>
            <ToastContainer />
            <div>
                <div className='w-full flex items-center justify-center m-2'>
                    <span className='text-2xl font-semibold'>Quản Lí Vai Trò</span>
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
                            <Button gradientMonochrome="lime" onClick={() => document.getElementById('my_modal_4_1').showModal()}>Thêm Vai Trò Mới</Button>
                        </div>
                    </div>
                </div>
                <dialog id="my_modal_4_1" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <AddRole />
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => handleCloseModal()}>✕</button>
                                <button className="btn" onClick={() => handleCloseModal()}>Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
                <div className='flex items-center justify-center'>
                    <div className='w-[70%] m-4'>
                        <Table>
                            <Table.Head>
                                <Table.HeadCell>ID</Table.HeadCell>
                                <Table.HeadCell>Vai trò</Table.HeadCell>
                                <Table.HeadCell>
                                    <span className="sr-only">Edit</span>
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                {roles.map((item) => {
                                    return (
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                {item.id}
                                            </Table.Cell>
                                            <Table.Cell>{item.name}</Table.Cell>

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
                                        <EdidRole item={selectedItem} />
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
                                                Bạn có chắc rằng bạn muốn xóa trang phục này?
                                            </h3>
                                            <div className="flex justify-center gap-4">
                                                <Button color="failure" onClick={() => { setOpenModal(false); setDelete_role(true) }}>
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
            <div>
                <div className='w-full flex items-center justify-center m-2'>
                    <span className='text-2xl font-semibold'>Quản Lí Tài Khoản</span>
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
                    <div className='w-[70%] m-4'>
                        <Table>
                            <Table.Head>
                                <Table.HeadCell>Email</Table.HeadCell>
                                <Table.HeadCell>Số Điện Thoại</Table.HeadCell>
                                <Table.HeadCell>Vai Trò</Table.HeadCell>

                                <Table.HeadCell>
                                    <span className="sr-only">Edit</span>
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                {accounts.map((item) => {
                                    return (
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                {item.email}
                                            </Table.Cell>
                                            <Table.Cell>{item.phone_number}</Table.Cell>
                                            <Table.Cell>{item.role_id}</Table.Cell>
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
                                        <EdidRole item={selectedItem} />
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
                                                Bạn có chắc rằng bạn muốn xóa trang phục này?
                                            </h3>
                                            <div className="flex justify-center gap-4">
                                                <Button color="failure" onClick={() => { setOpenModal(false); setDelete_role(true) }}>
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

        </div>
    )
}

export default Account
