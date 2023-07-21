// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// Import required Swiper Modules
import {FreeMode, Pagination} from 'swiper/modules';

const Carousell = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            freemode={true}
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide sigma</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            ...
        </Swiper>
    );
};

export default Carousell;
