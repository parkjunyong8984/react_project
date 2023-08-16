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
              data-aos-duration="1500">Slim Cook</h2> 
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
                SilCook은 정기배달 식단부터 음료, 디저트, 전문가들의 맞춤식단까지 <br/>
                <span className=""
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                    data-aos-duration="1500">고객님들이</span> 가장 &emsp;<span className="">중요하게</span>&nbsp; 생각하는 <b className="semi">건강한 식단,맛있는 식단<br/>
                서비스를 제공</b>해 오고 있습니다.
              </p>
              <p className=""
                                  data-aos="fade-up"
                                  data-aos-delay="500"
                                  data-aos-duration="1500">
                또한 Slim Cook만의 제조과정을 통해 누구보다 빠르게 여러분들이 <br/>
                음식을 드실 수 있도록 언제나 여러분 곁에 <b className="bold">건강 동반자</b>가 되겠습니다.
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