"use client";

import "tailwindcss/tailwind.css";
import Image from "next/image";
import { CiUser, CiSearch, CiShoppingCart } from "react-icons/ci";
import palays from "../../public/assets/palays.png";
import cardImage1 from "../../public/assets/card1.jpg";
import cardImage2 from "../../public/assets/card2.jpg";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect } from "react";
import { useGlobalContext } from "@/provider/store";

export default function Home() {
  const { outfits, handlerGETOutfits } = useGlobalContext();
  register();
  useEffect(() => {
    if (!outfits.length) {
      handlerGETOutfits();
      // console.log(outfits);
    }
  }, [outfits]);

  // useEffect(() => {
  //   handlerGETOutfits();
  //   console.log(outfits);
  // }, [outfits]);
  return (
    <>
      <header className="w-full flex flex-col">
        <div className="bg-black py-2 flex justify-center">
          <p className=" text-gray-50 text-xs ">
            FRETE GRÁTIS À PARTIR DE R$399
          </p>
        </div>
        <div className="w-full flex items-center border-b-2 border-gray-300">
          <div className="max-w-screen-xl flex justify-between items-center w-full px-10 py-5 mx-auto">
            <figure>
              <Image src={palays} alt="logo da marca palays" width="200" />
            </figure>

            <div className="flex space-x-2">
              <button>
                <CiSearch className="w-6 h-6" />
              </button>

              <a href="">
                <CiUser className="w-6 h-6" />
              </a>
              <button>
                <CiShoppingCart className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="w-full max-w-screen-xl mx-auto py-7 px-10 ">
        <h1 className="w-full text-2xl font-helvetica font-bold mb-8">Store</h1>

        <div className="w-full flex gap-3 ">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={3}
            pagination={{ clickable: true }}
            navigation={true}
            spaceBetween={10}
          >
            {outfits.map((outfit) => (
              <SwiperSlide key={outfit.id}>
                <div className="w-[269px] flex flex-col">
                  <figure>
                    <Image
                      className="mx-auto"
                      src={cardImage1}
                      alt="imagem do card"
                      width="200"
                    />
                  </figure>

                  <div className="flex flex-col py-6">
                    <span className=" font-bold text-sm font-helvetica">
                      {" "}
                      {outfit.name}
                    </span>
                    <span className="font-normal font-helvetica text-base">
                      {outfit.price}{" "}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>
    </>
  );
}
