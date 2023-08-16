
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Hdcss from '../css/header.module.scss'


const Banner = () =>{
    useEffect(() => {
        AOS.init();
      }, []);

    return(
        <div id={Hdcss.Hd} data-aos="zoom-out" data-aos-duration="1500">
        <div class={`position-absolute ${Hdcss["Hdtext"]}`}>
        <span className={Hdcss.Ttext}
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1500"
        >
        다이어트 정기배달 푸드
        </span>
        <br></br>
        <span
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="1500"
        >
        <span className="">1</span>등 식단
        다이어트 푸드
        <span className="">1</span>위 <br />
        스시도시락
        </span>
    <p
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="1500"
    >
        다년간의 음식 개발 연구로 높은 품질을 만들어가는 <br />
        슬림쿡의 정기배달 메뉴는 이제 업계의 아이콘이 되었습니다.
    </p>
    <p
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-duration="1500"
    >
        건강한 음식을 위한 저희의 노력, <br />
        가장 먼저 드실 수 있게끔 하겠습니다.
    </p>

    <p
        data-aos="fade-up"
        data-aos-delay="700"
        data-aos-duration="1500"
    >
        <sup>*</sup> 2023 08-16 SlimCook
    </p>
    </div>
    </div>
    )
}

export default Banner;