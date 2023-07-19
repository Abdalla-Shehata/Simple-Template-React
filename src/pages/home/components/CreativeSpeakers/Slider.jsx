import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import required modules
import { Autoplay } from 'swiper/modules';
import speakerData from '../../../../Design-system/components/CreativeSpeakers/SpeakersData';
import CreativeSpeakers from '../../../../Design-system/components/CreativeSpeakers/CreativeSpeakers';

export default function Slider() {
    return (
        <Swiper
            modules={[Autoplay]}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            loop={true}
            // pagination={{clickable: true,}}
            spaceBetween={50}
            slidesPerView={4}
        >
            {speakerData.map((item) => {
                return (
                    <SwiperSlide key={item.id}>
                        <CreativeSpeakers
                            name={item.name}
                            job={item.job}
                            alt={item.alt}
                            img={item.image}
                        />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}
