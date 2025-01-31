
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import galleryImages from '../../data/gallery';
import './Gallery.css';

import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
    return (
        <div className='gallery'>
            <h2 className="main-text">Naša galerija</h2>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {galleryImages.map((image, idx) => {
                    return (
                        <SwiperSlide key={idx}>
                            <img src={image.image} alt={image.title} />
                        </SwiperSlide>
                    );
                })}

            </Swiper>
        </div>
    );
}
