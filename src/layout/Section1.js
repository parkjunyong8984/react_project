import React, { useRef, useState, useEffect } from 'react';
import Section from'../sass/section.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Section1 = () => {
  useEffect(() => {
    AOS.init();
  }, []);
    return(
      <section id={Section.se1} className='position-relative'>
        <div className="">
          <div className="">
            <div className={`position-absolute ${Section["S-img-div"]}`}>
              <h2 className=""
               data-aos="fade-left"
               data-aos-delay="200"
               data-aos-duration="1500"
              >ABOUT </h2>
              <h2 className=""
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="1500">EBS MEDIA</h2> 
            </div>
          </div>
        </div>
        <div className={`${Section["img"]} d-flex align-items-center`}>
          <div className={`col-6 ${Section["Se1img"]}`}
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1500"></div>
          <div className={`col-md-6 ${Section["text"]}`}>
            <div className="">
              <p className=""
                                  data-aos="fade-up"
                                  data-aos-delay="300"
                                  data-aos-duration="1500">
                EBS 미디어는 한국교육방송공사(EBS)의 자회사로, EBS 콘텐츠를 기반으로 <br/>
                <span className=""
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                    data-aos-duration="1500">육아 교육</span> 부터 &emsp;<span className="">평생교육</span>&nbsp; 에 이르기까지 <b className="semi">국민 모두가 누릴 수 있는 <br/>
                교육 서비스를 제공</b>해 오고 있습니다.
              </p>
              <p className=""
                                  data-aos="fade-up"
                                  data-aos-delay="500"
                                  data-aos-duration="1500">
                또한 EBS KIDS 채널 운영을 통해 국민 모두가 EBS 콘텐츠를 다양하게 <br/>
                누릴 수 있도록 언제나 여러분 곁에 <b className="bold">평생의 동반자</b>가 되겠습니다.
              </p>
            </div>
            <div className={`d-flex ${Section["logo"]}`}
                    data-aos="fade-up"
                    data-aos-delay="600"
                    data-aos-duration="1500">
              <img src="./logo.svg" alt="logo"/>
              <hr/>
              <img src="./logoK.svg" alt="logo"/>
            </div>
          </div>
        </div>
      </section>

    )


}

export default Section1;