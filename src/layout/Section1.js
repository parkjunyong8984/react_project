import React, { useRef, useState } from 'react';
import Section from'../sass/section.module.css';



const Section1 = () => {
    return(
      <section id={Section.se1} className='position-relative'>
        <div className="">
          <div className="">
            <div className="position-absolute">
              <h2 className="">ABOUT </h2>
              <h2 className="">EBS MEDIA</h2>
            </div>
          </div>
        </div>
        <div className="img d-flex align-items-center">
          <div className=""><img src="./aboutimg.png" alt="img"/></div>
          <div className={Section.text}>
            <div className="">
              <p className="">
                EBS 미디어는 한국교육방송공사(EBS)의 자회사로, EBS 콘텐츠를 기반으로 <br/>
                <span className="">육아 교육</span> 부터 &emsp;<span className="">평생교육</span>&nbsp; 에 이르기까지 <b className="semi">국민 모두가 누릴 수 있는 <br/>
                교육 서비스를 제공</b>해 오고 있습니다.
              </p>
              <p className="">
                또한 EBS KIDS 채널 운영을 통해 국민 모두가 EBS 콘텐츠를 다양하게 <br/>
                누릴 수 있도록 언제나 여러분 곁에 <b className="bold">평생의 동반자</b>가 되겠습니다.
              </p>
            </div>
            <div className={`d-flex ${Section["logo"]}`}>
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