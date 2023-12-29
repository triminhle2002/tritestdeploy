import React, { useEffect, useState } from 'react';
import { getListPhotoByBlogId } from '../../apis/photo'
import './AlbumsPhotoPage.scss'
// import { Button, Modal } from 'flowbite-react';

const PhotoByBlogPost = ({ blog_id }) => {
    const [photos, setPhotos] = useState([]);
    // const [openModal, setOpenModal] = useState(false);
    const [urlImg, setUrlImg] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getListPhotoByBlogId({ blog_id });
                setPhotos(response.data)
            } catch (error) {
                console.error('Lỗi khi lấy danh sách ảnh:', error);
            }
        };
        if (blog_id !== undefined) {
            fetchData();
        }
    }, [blog_id]);


    return (
        <div>
            <div className='flex items-center justify-center'>
                <div className="gallerys w-3/4">
                    {photos.slice(0, 6).map((photo, index) => {
                        return (
                            <div className="pics scale-100 hover:scale-110" key={index} onClick={() => { document.getElementById('my_modal_2').showModal(); setUrlImg(photo.url_photo) }}>
                                <img src={photo.url_photo}
                                    alt={`Hình ảnh ${index + 1}`}
                                    style={{ width: '100%' }} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <div className="flex items-center justify-center">
                        <img src={urlImg} alt="Hình ảnh" className='object-cover w-full h-full' />
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}

export default PhotoByBlogPost
