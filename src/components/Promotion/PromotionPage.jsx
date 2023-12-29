// import { useDispatch, useSelector } from "react-redux";
import React from "react";
// import React, { Suspense, useEffect, useState } from "react";
// import { getListCategoriesApi } from "../../apis/category";
// import { loyaltyProgramItem, sliderItem } from "../../utils/constant";
import banner1 from "../../assets/images/promation.jpg";
import banner2 from "../../assets/images/web-mobile.jpg";
// import subBanner1 from "../../assets/images/sub-slide1.jpg";
// import subBanner2 from "../../assets/images/sub-slide2.jpg";
import Slider from "./Slider";
// import SliderListImage from "./SliderListImage";

const PromotionPage = () => {
  return (
    <>
      {/* {loading && <Loading />} */}
      <div>
        <div className="mx-auto w-full flex flex-col gap-6 pb-20 mt-28">
          <div className="w-full grid grid-cols-10 gap-1 h-[290px]">
            <div className="col-span-10">
              <Slider listBanner={[banner1, banner2, banner1]} />
            </div>
          </div>
        </div>
        <div className=" w-full bg-zinc-400 h-[1000px] mt-120 flex items-center justify-center text-center">
          <div className="">
            <span className="text-xl text-white font-semibold z-40">
              Nắm bắt khoảnh khắc - Tạo nên Hồi ức Vĩnh cửu - Nơi lưu trữ kỉ
              niệm!
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromotionPage;
