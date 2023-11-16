import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
// import './styles.css';
// import { Pagination } from 'swiper/modules';
// import required modules
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'

import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
    return (
        <section>
            <SectionTitle
                subHeading={"From 11.00pm to 10.00pm"}
                heading={"Order Online"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <p className='text-4xl uppercase -mt-16 text-center text-white'>Salads</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <p className='text-4xl uppercase -mt-16 text-center text-white'>Pizzas</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <p className='text-4xl uppercase -mt-16 text-center text-white'>Soups</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <p className='text-4xl uppercase -mt-16 text-center text-white'>Cake</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <p className='text-4xl uppercase -mt-16 text-center text-white'>Salads</p>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;