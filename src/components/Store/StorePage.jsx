import { useDispatch, useSelector } from "react-redux";
import React, { Suspense, useEffect, useState } from "react";
import { getListCategoriesApi } from "../../apis/category";
import { loyaltyProgramItem, sliderItem } from "../../utils/constant";
import banner1 from "../../assets/images/team-meber.jpg";
import banner2 from "../../assets/images/web-mobile.jpg";
import subBanner1 from "../../assets/images/sub-slide1.jpg";
import subBanner2 from "../../assets/images/sub-slide2.jpg";
import Slider from "../ButtonLabelLoadingModelCheckbox/Slider";
import SliderListImage from "./SliderListImage";

import Loading from "../ButtonLabelLoadingModelCheckbox/Loading";
import { getListHotSellingProductsApi } from "../../apis/product";
import SwiperSlideProducts from "./SwiperSlideProducts";
import {
  getListProductsByUserThunkAction,
  productSelect,
} from "../../redux/features/productSlice";

const ProductCard = React.lazy(() => import("./ProductCard"));

const fakeListCategories = [
  //TODO: Fake Data
  {
    image: "hello",
    name: "hello",
  },
];

//TODO: fake data
const fakeListProduct = [
  {
    _id: "6421172575699c38bd844fe0",
    name: "Áo Polo nam có cổ BASIC-POLOMANOR vải cá sấu cotton CMC, nam tính, chỉn chu, sang trọng",
    description:
      '<p><strong>CHI TIẾT SẢN PHẨM</strong></p><ul><li>Thương hiệu: <a href="https://shopee.vn/search?brands=3165950" rel="noopener noreferrer" target="_blank">POLOMANOR</a></li><li>Xuất xứ: Việt Nam</li><li>Chất liệu: Cotton</li><li>Mẫu: Trơn</li><li>Gửi từ: TP. Hồ Chí Minh</li></ul><p><strong>MÔ TẢ SẢN PHẨM<span className="ql-cursor">﻿</span></strong></p><p>* Chính sách và điều kiện đổi trả của POLOMANOR:</p><p>+ Cam kết chất lượng và mẫu mã sản phẩm giống với hình ảnh.</p><p>+ Cam kết được đổi trả hàng trong vòng 30 ngày.</p><p>+ Hàng phải còn mới đầy đủ tem mác và chưa qua sử dụng</p><p>+ Sản phẩm bị lỗi do vận chuyển và do nhà sản xuất</p><p>📌 LƯU Ý: Khi quý khách có gặp bất kì vấn đề gì về sản phẩm và vận chuyển đừng</p><p>vội đánh giá mà hãy liên hệ Shop để đc hỗ trợ 1 cách tốt nhất nhé.</p>',
    price: {
      $numberDecimal: "199000",
    },
    minPrice: {
      $numberDecimal: "190000",
    },
    maxPrice: {
      $numberDecimal: "250000",
    },
    totalQuantity: 643,
    optionStyles: [
      "6421172575699c38bd844f8c",
      "6421172575699c38bd844f91",
      "6421172575699c38bd844f96",
      "6421172575699c38bd844f9b",
      "6421172575699c38bd844fa0",
      "6421172575699c38bd844fa5",
    ],
    sold: 899,
    imagePreview:
      "https://res.cloudinary.com/doo78f14s/image/upload/v1679890203/CDIO2-project/ujszle5yarhdawgar8wm.jpg",
    listImages: [
      "https://res.cloudinary.com/doo78f14s/image/upload/v1679890203/CDIO2-project/ujszle5yarhdawgar8wm.jpg",
      "https://res.cloudinary.com/doo78f14s/image/upload/v1679890211/CDIO2-project/nfktuxgp8poybmncq6tc.jpg",
      "https://res.cloudinary.com/doo78f14s/image/upload/v1679890207/CDIO2-project/bojv74ps9ofbpjazhnxe.jpg",
    ],
    listFilenameImages: [
      "CDIO2-project/ujszle5yarhdawgar8wm",
      "CDIO2-project/nfktuxgp8poybmncq6tc",
      "CDIO2-project/bojv74ps9ofbpjazhnxe",
    ],
    rating: 4.75,
    storeId: "64206b0253df24fa8ec3ceca",
    categoryId: "64202925c7098ac86241f698",
    isNewProduct: true,
    status: "Active",
    isSelling: true,
    slug: "ao-polo-nam-co-co-basic-polomanor-vai-ca-sau-cotton-cmc-nam-tinh-chin-chu-sang-trong",
    __v: 0,
  },
  {
    _id: "642060688d62945e3d6d5b3a",
    name: "Áo Polo nam có cổ UGO-NAVY vải cá sấu cotton UNI, nam tính, thanh lịch, sang trọng - POLOMANOR",
    description:
      '<p><strong>CHI TIẾT SẢN PHẨM</strong></p><ul><li>Thương hiệu:\t\t\tPolomanor</li><li>Xuất xứ:\t\t\t\t\tViệt Nam</li><li>Chiều dài tay áo:\t\tTay ngắn</li><li>Chất liệu:\t\t\t\t\tCotton</li><li>Mẫu:\t\t\t\t\t\tSọc</li><li>Gửi từ:\t\t\t\t\t\tTP. Hồ Chí Minh</li></ul><p><strong>MÔ TẢ SẢN PHẨM</strong></p><p><span className="ql-cursor">﻿</span>* Chính sách và điều kiện đổi trả của POLOMANOR:</p><p>+ Cam kết chất lượng và mẫu mã sản phẩm giống với hình ảnh.</p><p>+ Cam kết được đổi trả hàng trong vòng 30 ngày.</p><p>+ Hàng phải còn mới đầy đủ tem mác và chưa qua sử dụng</p><p>+ Sản phẩm bị lỗi do vận chuyển và do nhà sản xuất</p><p>📌 LƯU Ý: Khi quý khách có gặp bất kì vấn đề gì về sản phẩm và vận chuyển đừngvội đánh giá mà hãy liên hệ Shop để đc hỗ trợ 1 cách tốt nhất nhé.</p>',
    price: {
      $numberDecimal: "275000",
    },
    minPrice: {
      $numberDecimal: "275000",
    },
    maxPrice: {
      $numberDecimal: "299000",
    },
    totalQuantity: 151,
    optionStyles: ["642060688d62945e3d6d5b2c"],
    sold: 192,
    imagePreview:
      "https://res.cloudinary.com/doo78f14s/image/upload/v1679843431/CDIO2-project/eeqiouivcjyabmikfvrk.jpg",
    listImages: [
      "https://res.cloudinary.com/doo78f14s/image/upload/v1679843431/CDIO2-project/eeqiouivcjyabmikfvrk.jpg",
      "https://res.cloudinary.com/doo78f14s/image/upload/v1679843427/CDIO2-project/yop50qlhf7nroco9hdci.jpg",
      "https://res.cloudinary.com/doo78f14s/image/upload/v1679843428/CDIO2-project/duzjyydgkevuf6kofc20.jpg",
      "https://res.cloudinary.com/doo78f14s/image/upload/v1679843429/CDIO2-project/w4kfmcfsllpkobiodcme.jpg",
      "https://res.cloudinary.com/doo78f14s/image/upload/v1679843429/CDIO2-project/jfsjt0erjmxtvkfhalzz.jpg",
      "https://res.cloudinary.com/doo78f14s/image/upload/v1679843430/CDIO2-project/ltiioqngg9ei6k9gtotr.jpg",
    ],
    listFilenameImages: [
      "CDIO2-project/eeqiouivcjyabmikfvrk",
      "CDIO2-project/yop50qlhf7nroco9hdci",
      "CDIO2-project/duzjyydgkevuf6kofc20",
      "CDIO2-project/w4kfmcfsllpkobiodcme",
      "CDIO2-project/jfsjt0erjmxtvkfhalzz",
      "CDIO2-project/ltiioqngg9ei6k9gtotr",
    ],
    rating: 4,
    storeId: "64204142389c3b60726125bd",
    categoryId: "64202925c7098ac86241f698",
    isNewProduct: true,
    status: "Active",
    isSelling: true,
    slug: "ao-polo-nam-form-rong-ugo-navy-vai-ca-sau-cotton-uni",
    __v: 0,
  },
  {
    _id: "642113a975699c38bd844f28",
    name: "Sách - Clean code – sạch và con đường trở thành lập trình viên giỏi",
    description:
      "<p>Tên sách: CLEAN CODE - Mã Sạch Và Con Đường Trở Thành Lập Trình Viên Giỏi</p><p>Thể loại: Sách kỹ năng</p><p>Công ty phát hành: Tri Thức Trẻ Books</p><p>Khổ sách: 16x24 cm</p><p>Số trang: 596</p><p>Hình thức: Bìa mềm</p><p>Giá bìa: 386.000 đ</p><p>Số ISBN: 978-604-9996-38-2</p><p>Mã vạch: 893-610-781-336-1</p><p>Nhà xuất bản: NXB Dân Trí</p><p>---</p><p><br></p><p>GIỚI THIỆU VỀ CUỐN SÁCH</p><p>Clean Code - Mã sạch và con đường trở thành lập trình viên giỏi</p><p><br></p><p>Hiện nay, lập trình viên là một trong những nghề nghiệp được nhiều người lựa chọn theo đuổi và gắn bó. Đây là công việc đòi hỏi sự tỉ mỉ, nhiều công sức nhưng mang lại giá trị cao và một tương lai công việc hứa hẹn. Là một trong số những chuyên gia giàu kinh nghiệm, điêu luyện và lành nghề trong ngành, tác giả đã đúc rút từ kinh nghiệm của mình, viết về những tình huống trong thực tế, đôi khi có thể trái ngược với lý thuyết để xây dựng nên cuốn cẩm nang này, nhằm hỗ trợ những người đang muốn trở thành một lập trình viên chuyên nghiệp.</p><p><br></p><p>Cuốn sách được nhiều lập trình viên đánh giá là quyển sách giá trị nhất mà họ từng đọc trong sự nghiệp của mình. Cuốn sách hướng dẫn cách để viết những đoạn mã có thể hoạt động tốt, cũng như truyền tải được ý định của người viết nên chúng.</p><p><br></p><p>Cuốn sách được chia thành ba phần lớn. Phần đầu tiên mô tả các nguyên tắc, mô hình và cách thực hành viết mã sạch. Phần thứ hai gồm nhiều tình huống điển hình với mức độ phức tạp gia tang không ngừng. Mỗi tình huống là một bài tập giúp làm sạch mã, chuyển đổi mã có nhiều vấn đề thành mã có ít vấn đề hơn. Và phần cuối là tuyển tập rất nhiều những dấu hiệu của mã có vấn đề, những tìm tòi, suy nghiệm từ thực tiễn được đúc rút qua cách tình huống điển hình.</p>",
    price: {
      $numberDecimal: "308000",
    },
    totalQuantity: 57,
    optionStyles: [],
    sold: 87,
    imagePreview:
      "https://res.cloudinary.com/doo78f14s/image/upload/v1679889320/CDIO2-project/sl2mc9igydn4pzgwsqt1.jpg",
    listImages: [
      "https://res.cloudinary.com/doo78f14s/image/upload/v1679889320/CDIO2-project/sl2mc9igydn4pzgwsqt1.jpg",
      "https://res.cloudinary.com/doo78f14s/image/upload/v1679889316/CDIO2-project/fw8mxxv0vdt7sdql391c.jpg",
      "https://res.cloudinary.com/doo78f14s/image/upload/v1679889316/CDIO2-project/wo2mapor7lza2rzw67ld.jpg",
    ],
    listFilenameImages: [
      "CDIO2-project/sl2mc9igydn4pzgwsqt1",
      "CDIO2-project/fw8mxxv0vdt7sdql391c",
      "CDIO2-project/wo2mapor7lza2rzw67ld",
    ],
    rating: 4,
    storeId: "64206b0253df24fa8ec3ceca",
    categoryId: "642029dec7098ac86241f6b4",
    isNewProduct: true,
    status: "Active",
    isSelling: true,
    slug: "sach-clean-code-sach-va-con-duong-tro-thanh-lap-trinh-vien-gi-i",
    __v: 0,
  },
  {
    _id: "642073cd53df24fa8ec3d067",
    name: "Keycap Bàn Phím Cơ Không Dây Bluetooth Virtual War 104/68/87/980.etc Chất Lượng Cao",
    description:
      "<p>đây chỉ là keycaps, không bao gồm bàn phím</p><p><br></p><p>Tên sản phẩm: Keycap chiến tranh ảo</p><p>Hồ sơ: Cherry/XDA</p><p>Màu sắc: Đen / trắng</p><p>Số phím: 131 phím</p><p>Chất liệu: PBT</p><p>Quá trình: Thăng hoa</p><p>Dù che bóng: Có</p><p>Thích ứng: 61/64/68/78/84/87/96/980/104/108 và các cấu hình khác</p><p><br></p><p><br></p>",
    price: {
      $numberDecimal: "980000",
    },
    totalQuantity: 104,
    optionStyles: [],
    sold: 50,
    imagePreview:
      "https://res.cloudinary.com/doo78f14s/image/upload/v1679848394/CDIO2-project/kp8muwbac5oaswizkwpl.jpg",
    listImages: [
      "https://res.cloudinary.com/doo78f14s/image/upload/v1679848394/CDIO2-project/kp8muwbac5oaswizkwpl.jpg",
      "https://res.cloudinary.com/doo78f14s/image/upload/v1679848397/CDIO2-project/n0egwuv1bjmub7griqcg.jpg",
      "https://res.cloudinary.com/doo78f14s/image/upload/v1679848394/CDIO2-project/nvqpviintzkqh6v3k3tk.jpg",
    ],
    listFilenameImages: [
      "CDIO2-project/kp8muwbac5oaswizkwpl",
      "CDIO2-project/n0egwuv1bjmub7griqcg",
      "CDIO2-project/nvqpviintzkqh6v3k3tk",
    ],
    rating: 4,
    storeId: "64206b0253df24fa8ec3ceca",
    categoryId: "64202953c7098ac86241f6a0",
    isNewProduct: true,
    status: "Active",
    isSelling: true,
    slug: "keycap-ban-phim-co-khong-day-bluetooth-virtual-war-104-68-87-980-etc-chat-luong-cao",
    __v: 0,
  },
  {
    _id: "64206f9753df24fa8ec3cfa1",
    name: "Sapphire chống xước , chống nước",
    description:
      "<p>•\t Kiểu dáng : Nam</p><p>•\t Máy : Quartz ( dùng pin )</p><p>•\t Chất liệu dây : Da</p><p>•\t Chất liệu vỏ : Thép không gỉ 316L ( All Stainless Steel ) </p><p>•\t Mặt kính : Kính chống trầy (Saphirre Glass)</p><p>•\t Chống nước : 3ATM Tiêu chuẩn ( Có thể bơi lội được )</p><p>•\t Kích thước mặt : 40mm</p><p>•\t Kích thước dây : 20mm</p><p>•\t Độ dày : 7mm</p><p>•\t Bảo hành : 1 năm</p>",
    price: {
      $numberDecimal: "1350000",
    },
    totalQuantity: 30,
    optionStyles: [],
    sold: 24,
    imagePreview:
      "https://res.cloudinary.com/doo78f14s/image/upload/v1679847318/CDIO2-project/ljbrbuu8zexuurgm0wft.jpg",
    listImages: [
      "https://res.cloudinary.com/doo78f14s/image/upload/v1679847318/CDIO2-project/ljbrbuu8zexuurgm0wft.jpg",
      "https://res.cloudinary.com/doo78f14s/image/upload/v1679847317/CDIO2-project/vw6hholfljh71rbjsbgr.jpg",
      "https://res.cloudinary.com/doo78f14s/image/upload/v1679847317/CDIO2-project/doyqicstiy5pqfa70gec.jpg",
    ],
    listFilenameImages: [
      "CDIO2-project/ljbrbuu8zexuurgm0wft",
      "CDIO2-project/vw6hholfljh71rbjsbgr",
      "CDIO2-project/doyqicstiy5pqfa70gec",
    ],
    rating: 3,
    storeId: "64206b0253df24fa8ec3ceca",
    categoryId: "64202a2ec7098ac86241f6c4",
    isNewProduct: true,
    status: "Active",
    isSelling: true,
    slug: "ao-polo-nam-co-co-ugo-navy-vai-ca-sau-cotton-uni-nam-tinh-thanh-lich-sang-trong-polomanor",
    __v: 0,
  },
  {
    _id: "642070a153df24fa8ec3cfd5",
    name: "Đồng hồ Nam Orient FAG00003W0 , Chính hãng full box , Caballero , Automatic , Dây da",
    description:
      "<p>•\t Kiểu dáng : Nam</p><p>•\t Máy : Quartz ( dùng pin )</p><p>•\t Chất liệu dây : Da</p><p>•\t Chất liệu vỏ : Thép không gỉ 316L ( All Stainless Steel ) </p><p>•\t Mặt kính : Kính chống trầy (Saphirre Glass)</p><p>•\t Chống nước : 3ATM Tiêu chuẩn ( Có thể bơi lội được )</p><p>•\t Kích thước mặt : 40mm</p><p>•\t Kích thước dây : 20mm</p><p>•\t Độ dày : 7mm</p><p>•\t Bảo hành : 1 năm</p>",
    price: {
      $numberDecimal: "8050000",
    },
    totalQuantity: 104,
    optionStyles: [],
    sold: 6,
    imagePreview:
      "https://res.cloudinary.com/doo78f14s/image/upload/v1679847581/CDIO2-project/oc2sxgnvl6vy4grw7kgc.jpg",
    listImages: [
      "https://res.cloudinary.com/doo78f14s/image/upload/v1679847581/CDIO2-project/oc2sxgnvl6vy4grw7kgc.jpg",
      "https://res.cloudinary.com/doo78f14s/image/upload/v1679847584/CDIO2-project/pkxgqlayqs8safmklple.jpg",
      "https://res.cloudinary.com/doo78f14s/image/upload/v1679847581/CDIO2-project/a0cdy5nx6yncho6mwwnh.jpg",
    ],
    listFilenameImages: [
      "CDIO2-project/oc2sxgnvl6vy4grw7kgc",
      "CDIO2-project/pkxgqlayqs8safmklple",
      "CDIO2-project/a0cdy5nx6yncho6mwwnh",
    ],
    rating: 4,
    storeId: "64206b0253df24fa8ec3ceca",
    categoryId: "64202a2ec7098ac86241f6c4",
    isNewProduct: true,
    status: "Active",
    isSelling: true,
    slug: "dong-ho-nam-orient-fag00003w0-chinh-hang-full-box-caballero-automatic-day-da",
    __v: 0,
  },
];

const StorePage = () => {
  const [listCategories, setListCategories] = useState(fakeListCategories);
  const [limit, setLimit] = useState(20);
  const [loading, setIsLoading] = useState(false);
  const [listHotSellingProducts, setListHotSellingProducts] = useState([]);
  const [typeListProducts, setTypeListProducts] = useState("all");

  const dispatch = useDispatch();
  // const { listMyProducts } = useSelector(productSelect); //TODO: Fix
  const listMyProducts = fakeListProduct; //TODO: Fake data

  useEffect(() => {
    const fetchListCategoriesApi = async () => {
      const res = await getListCategoriesApi();
      if (res && res.data) {
        setListCategories(res.data);
      }
    };
    fetchListCategoriesApi();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchListProductByUserApi = async () => {
      try {
        setIsLoading(true);
        await dispatch(getListProductsByUserThunkAction({ limit }));
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    fetchListProductByUserApi();
  }, [dispatch, limit]);

  useEffect(() => {
    const fetchListHotSellingProductsApi = async () => {
      try {
        setIsLoading(true);

        const res = await getListHotSellingProductsApi();
        if (res && res.data) {
          setListHotSellingProducts(res.data);
        }
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    fetchListHotSellingProductsApi();
  }, []);

  return (
    <>
      {loading && <Loading />}
      <div className="mx-auto w-[80%] flex flex-col gap-6 pb-20 mt-32">
        <div className="w-full grid grid-cols-10 gap-1 h-[291px]">
          <div className="col-span-7">
            <Slider listBanner={[banner1, banner2]} />
          </div>
          <div className="col-span-3 flex flex-col h-full gap-1">
            <img src={subBanner1} alt="" className="rounded-md h-[143px]" />
            <img src={subBanner2} alt="" className="rounded-md h-[143px]" />
          </div>
        </div>
        <div className="sticky z-10 top-[110px]">
          <SliderListImage listSlides={listCategories} />
        </div>
        <div className="h-28 w-[100%] bg-zinc-200 grid grid-cols-5 gap-5 p-2 rounded-sm">
          {loyaltyProgramItem.map((item, index) => {
            return (
              <div key={index} className="flex gap-2 items-center">
                <span className="p-2 bg-slate-300 rounded-md text-gray-700">
                  {item.icon}
                </span>
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-semibold">{item.display}</span>
                  <span className="text-xs text-gray-500 font-bold">
                    {item.subDisplay}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="border bg-orange-50/70 px-2 py-4 rounded-md shadow-sm flex flex-col gap-3">
          <h4 className="uppercase text-lg font-extrabold bg text-teal-700">
            Sản phẩm bán chạy
          </h4>
          <SwiperSlideProducts listProducts={listHotSellingProducts} />
        </div>
        <div className="flex items-center justify-center gap-7">
          <button
            className={`uppercase px-2 py-1 text-lg font-extrabold border-b-4 text-teal-700 ${
              typeListProducts === "all"
                ? "border-sky-600"
                : "border-transparent"
            }`}
            onClick={() => setTypeListProducts("all")}
          >
            tất cả sản phẩm
          </button>
          <button
            className={`uppercase px-2 py-1 text-lg font-extrabold border-b-4 text-teal-700 ${
              typeListProducts === "following"
                ? " border-sky-600"
                : "border-transparent"
            }`}
            onClick={() => setTypeListProducts("following")}
          >
            Shop đang theo dõi
          </button>
        </div>
        <div className="border bg-orange-50/70 px-2 py-4 rounded-md shadow-sm flex flex-col gap-3">
          <div className="grid grid-cols-6 gap-1">
            {listMyProducts?.length > 0 &&
              listMyProducts.map((product) => {
                return (
                  <Suspense fallback={<div>Loading...</div>} key={product?._id}>
                    <ProductCard productInfo={product} />
                  </Suspense>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default StorePage;
