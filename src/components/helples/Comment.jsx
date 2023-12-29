import React from 'react'
import { FiSend } from "react-icons/fi";
import { Button } from 'flowbite-react';
const Comment = () => {
    return (
        <div className='w-full h-auto border'>
            <div className='flex items-start justify-center m-2'>
                <div className="avatar-group -space-x-6 rtl:space-x-reverse w-[10%]">
                    <div className="avatar">
                        <div className="w-12">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                </div>
                <div class="flex py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 w-[80%]">
                    <textarea id="comment" rows="1"
                        class="textarea textarea-accent w-[90%] "
                        placeholder="Viết bình luận của bạn..." required></textarea>
                    <div className='flex items-center justify-center ml-4'>
                        <Button gradientMonochrome="lime"><FiSend /></Button>
                    </div>
                </div>
            </div>

            <div className='flex items-start justify-center'>
                <div className='w-4/5 flex items-start justify-center'>
                    <div className="w-[10%] avatar-group flex justify-center items-end">
                        <div className="avatar">
                            <div className="w-8">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className='w-[90%] border bg-gray-100 p-1 rounded-xl my-2'>
                        <div className='flex items-start justify-start '>
                            <h1 className='text-base font-semibold'>Thiên Quang</h1>
                        </div>
                        <div className='px-2'>
                            <h2>Hình chụp đẹp quá .Tôi muốn chụp theo phong cách này thì xem báo giá ở đâu vậy </h2>
                        </div>
                        <div className='flex'>
                            <div className='w-[30%] flex justify-between items-start text-sm ml-2'>
                                <span >10h</span>
                                <button>Thích</button>
                                <button>Trả lời</button>
                            </div>
                        </div>
                    </div>


                </div>

            </div>


        </div>
    )
}

export default Comment
