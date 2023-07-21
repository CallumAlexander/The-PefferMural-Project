// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// Import required Swiper Modules
import {FreeMode, Pagination, Zoom} from 'swiper/modules';

const Carousell = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            const startYear = 2012 + index; // Assuming it starts from 2012
            const endYear = startYear + 1;
            return '<span class="' + className + '">' + startYear + '/' + endYear + '</span>';
        },
    };
    return (
        <Swiper
            slidesPerView={2}
            spaceBetween={30}
            zoom={true}
            freeMode={true}
            pagination={pagination}
            modules={[FreeMode, Pagination, Zoom]}
            className="mySwiper"
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
    );
};

export default Carousell;
