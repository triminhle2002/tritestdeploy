import React, { useEffect, useRef, useState } from 'react';
import SlidePhoto from '../SlidePhoto/SlidePhoto';
import SlideHome from '../SlidePhoto/SlideHome';
import { getAlbumsPhoto } from '../../apis/albumphoto'
import { Link } from 'react-router-dom';




const Home = () => {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await getAlbumsPhoto();
        console.log(response);
        setAlbums(response);
      } catch (error) {
        console.error('Lỗi khi lấy danh sách ảnh:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='w-full bg-black'>
      <div className='mb-5'>
        <SlideHome />
        <div className='flex items-center justify-center'>
          <div className='h-16 w-full'>
            <div className='flex items-center justify-start'>
              <span className='text-[150px] mt-[-40%] ml-[10%] font-bold text-white z-40 max-sm:text-xl max-md:text-2xl max-sm:mt-[-70%]'>
                FOTOFUSHION
              </span>
            </div>
            <div className='flex items-center justify-start'>
              <span className='mt-[-25%] ml-[10%] text-xl text-white font-semibold z-40 '>Nắm bắt khoảnh khắc - Tạo nên Hồi ức Vĩnh cửu - Nơi lưu trữ kỉ niệm!</span>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full m-4'>
        <div className='flex items-center justify-center text-3xl m-6 font-bold'>
          <span className=' text-white '>CONCEPT </span>
          <span className=' text-orange-500 ml-2'>ALBUMS</span>
        </div>
        <div className='w-full flex items-center justify-center'>
          <div className='grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-8'>
            {albums.slice(0, 6).map((album, index) => (
              <Link to={`/photoofalbums/${album.id}`}>
                <div className='h-auto w-64 bg-white mb-4 rounded-lg shadow-2xl cursor-pointer duration-500 hover:scale-105 hover:shadow-xl'>
                  <img src={album.cover_photo} alt="" className='h-80 w-64 object-cover rounded-lg' />
                  <div className='flex items-center justify-center'>
                    <div className='h-16 w-[80%] bg-black mt-[-30%] border opacity-80 flex items-center justify-center shadow-xl rounded-md'>
                      <span className='text-white text-xl '>{album.name}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className='w-full m-4 pt-4'>
        <div className='flex items-center justify-center text-3xl m-6 font-bold'>
          <span className=' text-white '>TOP SELLER </span>
          <span className=' text-orange-500 ml-2'>SẢN PHẨM</span>
        </div>
        <div className='w-full flex items-center justify-center'>
          <div className='grid grid-cols-4 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-4'>
            {albums.slice(0, 8).map((album, index) => (
              <div className='h-auto w-64 bg-white cursor-pointer transition duration-500 ease-in-out hover:opacity-50 hover:shadow-xl '>
                <img src={album.cover_photo} alt="" className='h-80 w-64 object-cover' />
                <div className='flex items-center justify-center'>
                  <div className='h-16 w-full bg-black border shadow-xl rounded-md'>
                    <div className='flex items-center justify-start'>
                      <span className='ml-3 text-white text-xl '>{album.name}</span>
                    </div>
                    <div className='flex items-center justify-start'>
                      <span class="ml-3 text-md font-medium text-white line-through ">$109</span>
                      <span class="ml-3 text-white text-md font-medium">$79</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='w-full m-4'>
        <div className='flex items-center justify-center text-3xl m-6 font-bold'>
          <span className=' text-white '>THỢ</span>
          <span className=' text-orange-500 ml-2'>CHỤP ẢNH</span>
        </div>
        <div className='w-full flex items-center justify-center'>
          <div className='grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-8'>
            {albums.slice(0, 3).map((album, index) => (
              <div className='h-auto w-64 bg-white mb-4 rounded-lg shadow-2xl cursor-pointer duration-500 hover:scale-105 hover:shadow-xl'>
                <img src={album.cover_photo} alt="" className='h-80 w-64 object-cover rounded-lg' />
                <div className='flex items-center justify-center'>
                  <div className='h-16 w-[80%] bg-black mt-[-30%] border opacity-80 flex items-center justify-center shadow-xl rounded-md'>
                    <span className='text-white text-xl '>{album.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SlidePhoto />
    </div>
  );
};

export default Home;    