import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Vids() {
	return (
		<section id='vids' className='myScroll'>
			<Swiper>
				<SwiperSlide>1</SwiperSlide>
				<SwiperSlide>2</SwiperSlide>
				<SwiperSlide>3</SwiperSlide>
				<SwiperSlide>4</SwiperSlide>
				<SwiperSlide>5</SwiperSlide>
			</Swiper>
		</section>
	);
}

export default Vids;
