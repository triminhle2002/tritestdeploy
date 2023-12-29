import React from 'react'
import logoFushion from '../../public/img/logoFushion.jpg'
import { AiFillPhone, AiOutlineFacebook, AiOutlineYoutube, AiOutlineDown, AiOutlineMail } from "react-icons/ai";
import { BiLogoTiktok } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { BsInstagram, BsTwitter, BsFillPenFill } from "react-icons/bs";

const footer = () => {
    return (
        <div>

            <footer class="bg-black ">
                <div className=' text-white flex justify-center items-center font-sans text-base m-2'>
                    <ul className='flex justify-center items-center mt-2'>
                        <li className='mr-4'>
                            <a className='flex items-center justify-center'>
                                <BsInstagram />
                                <span className='ml-2 text-xs'>Instagram</span>
                            </a>

                        </li>
                        <li className='mr-4'>
                            <a className='flex items-center justify-center'>
                                <AiOutlineFacebook />
                                <span className='ml-2 text-xs'>Facebook</span>

                            </a>
                        </li>
                        <li className='mr-4'>
                            <a className='flex items-center justify-center'>
                                <BiLogoTiktok />
                                <span className='ml-2 text-xs'>Tiktok</span>
                            </a>
                        </li>
                        <li className='mr-4'>
                            <a className='flex items-center justify-center'>
                                <BsTwitter />
                                <span className='ml-2 text-xs'>Twitter</span>
                            </a>
                        </li>
                        <li className='mr-4'>
                            <a className='flex items-center justify-center'>
                                <AiOutlineYoutube />
                                <span className='ml-2 text-xs'>Youtube</span>
                            </a>
                        </li>
                    </ul>

                </div>
                <div class=" mx-auto max-w-screen-xl p-4 py-6 lg:py-8 border-b w-[90%] shadow-sm flex items-center justify-center">
                    <div class="md:flex md:justify-between items-center w-[35%]">
                        <div class="mb-6 md:mb-0">
                            <a href="/" class="flex items-center">
                                <img src={logoFushion} class="h-8 mr-3" alt=" Fushion Logo" />
                                <span class="self-center text-2xl font-semibold whitespace-nowrap text-white max-sm:text-sm">FutoFusion</span>
                            </a>
                        </div>
                    </div>
                    <div class="md:flex md:justify-between text-btnprimary w-[18%]">
                        <div class="mb-6 md:mb-0">
                            <div class="flex items-center">
                                <div class="h-14 w-14 rounded-full flex items-center justify-center bg-[#4C4D52] text-3xl">
                                    <AiFillPhone />
                                </div>
                                <div className='ml-2 max-sm:hidden'>
                                    <span>Số Điện Thoại</span>
                                    <br />
                                    <span>+84 12345697698</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="md:flex md:justify-between text-btnprimary w-[20%] ">
                        <div class="mb-6 md:mb-0">
                            <div class="flex items-center">
                                <div class="h-14 w-14 rounded-full flex items-center justify-center bg-[#4C4D52] text-3xl">
                                    <AiOutlineMail />
                                </div>
                                <div className='ml-2 max-sm:hidden'>
                                    <span>Email</span>
                                    <br />
                                    <span>fotofushion@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="md:flex md:justify-between text-btnprimary w-[27%]">
                        <div class="mb-6 md:mb-0">
                            <div class="flex items-center">
                                <div class="h-14 w-14 rounded-full flex items-center justify-center bg-[#4C4D52] text-3xl">
                                    <CiLocationOn />
                                </div>
                                <div className='ml-2 max-sm:hidden'>
                                    <span>Địa Chỉ</span>
                                    <br />
                                    <span>245-Nguyễn Văn Linh Hải Châu Đà Nắng</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="flex justify-center ">
                    <div className='w-[90%] flex text-white justify-center items-center'>
                        <div className='w-1/2 justify-items-center align-items-center m-10'>
                            <span className='max-sm:hidden'>The world without photography will be meaningless to us if there is no light and color, which opens up our minds and expresses passion.</span>
                            <br />
                            <span className='text-3xl font-dancing flex justify-center items-center mt-10'> Latest photo</span>
                            <div className='flex items-center justify-center mt-5'>
                                <div className='h-24 w-24 bg-red-500 m-3'></div>
                                <div className='h-24 w-24 bg-red-500 m-2'></div>
                                <div className='h-24 w-24 bg-red-500 m-2'></div>
                                <div className='h-24 w-24 bg-red-500 m-2'></div>
                            </div>
                        </div>
                        <div className='w-1/2 justify-items-center align-items-center m-10'>
                            <span className='flex items-center justify-center text-3xl'> Fanpage Facebook</span>
                            <br />
                            <div className='flex justify-center items-center'>
                                <div className="w-[600px] h-[270px] bg-white"></div>
                            </div>
                        </div>
                    </div>
                </div>


            </footer>

        </div>
    )
}

export default footer
