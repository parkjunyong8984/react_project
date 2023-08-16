import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Sec2 from '../css/section2.module.scss'



const Section2 = () => {
    const images = [
        'https://www.nhreits.com/wp-content/uploads/2023/06/img_asset01.png',
        'https://www.nhreits.com/wp-content/uploads/2023/06/img_asset02.png',
        'https://www.nhreits.com/wp-content/uploads/2023/06/img_asset02.png',
        'https://www.nhreits.com/wp-content/uploads/2023/06/img_asset02.png',
        'https://www.nhreits.com/wp-content/uploads/2023/06/img_asset02.png',
        'https://www.nhreits.com/wp-content/uploads/2023/06/img_asset02.png',
        'https://www.nhreits.com/wp-content/uploads/2023/06/img_asset02.png',
        'https://www.nhreits.com/wp-content/uploads/2023/06/img_asset02.png'
        // Add more image URLs here
      ];
    
    return (
        <section className="recommend">
            <div className={`d-flex ${Sec2["inner"]}`}>
                <div className="title col-6 text-center" data-aos="fade-up">
                    <h3>고객의 건강을 최우선으로<br/>생각하는 최고의 파트너의 추천</h3>
                    <div className="col-6 d-flex justify-content-center mx-auto py-5">
                        <form action="process-form.php" method="POST">
                            <input type="text" id="name" name="name" className="col-12 my-3" required placeholder="* 회사명" />
                            <input type="email" id="email" name="email" className="col-12 mb-3" required placeholder="email" />
                            <div className="col-12 mb-3 d-flex" id="checkbox">
                            <textarea id="writing" name="writing" rows="5" placeholder="요구 직무능력" className='col-12'></textarea>
                            </div>
                            <div className="d-flex justify-content-between">
                            <input type="tel" id="phone" name="phone" placeholder="연락처 010-0000-0000" required pattern="[0-9]{3}-[0-9]{3,4}-[0-9]{4}" />
                                <input type="submit" value="제안하기" />
                            </div>
                            <div>
                            <input type="checkbox" name="privacyAgreement" value="music" id="music" />
                            <label htmlFor="music">개인정보정책동의</label>
                            </div>
                        </form>
                </div>
        </div>
        <div className="col-6" data-aos="fade-up" data-aos-delay="200">
            <Swiper  slidesPerView={1}
                    spaceBetween={5}
                    centeredSlides={true}
                    breakpoints={{
                        768: {
                          slidesPerView: 1.5,
                          spaceBetween: 30,
                        },
                      }}
                    className="mySwiper">
                {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <div className="">
                    <div className="">
                        <img src={image} alt={`Slider ${index + 1}`} />
                    </div>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </div>
    </section>

    )
}
export default Section2;