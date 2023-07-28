import { useEffect } from 'react';
import Hdcss from '../css/header.module.scss'
import  { db } from '../db/db'
import Hdmenu from '../db/db.json'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Header = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div id={Hdcss.Hd} data-aos="zoom-out" data-aos-duration="1500">
            <header>
                <div className={`d-flex justify-content-between ${Hdcss["container"]}`}>
                    <button className='d-none'></button>
                    <div className={Hdcss.top}>
                        <a href="">이벤트
                        </a>
                    </div>
                    <div className={Hdcss.middle}>
                        <a href="">
                            <img src="./logo.png" alt="" />
                        </a>
                        <ul className="d-flex">
                            {
                                Hdmenu.navi.map((v,i)=>{
                                    return (
                                        <li className="" key={i}><a href={v.alink} className="d-block">{v.title}</a></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className={Hdcss.bottom}>
                        <ul className='d-flex'>
                        <li className=""><a href="" className='d-block position-relative'>매장찾기</a></li>
                        <li className=""><a href="" className='d-block position-relative'>구매하기</a></li>
                        <li className=""><a href="" className='d-block position-relative'><i className={Hdcss.bgsearch}></i></a></li>
                        </ul>
                    </div>
                </div>
            </header>
            <div class={`position-absolute ${Hdcss["Hdtext"]}`}>
                        <span className={Hdcss.Ttext}
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="1500"
                        >
                        첨단 뷰티 인삼 과학의 힘
                        </span>
                        <br></br>
                        <span
                        data-aos="fade-up"
                        data-aos-delay="400"
                        data-aos-duration="1500"
                        >
                        <span className="">6</span>년 연속
                        안티에이징 크림
                        <span className="">1</span>위 <br />
                        자음생크림
                        </span>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="500"
                        data-aos-duration="1500"
                    >
                        1960년대 시작된 뷰티 인삼 연구로부터 진화를 거듭해온 <br />
                        설화수 자음생크림은 이제 인삼 크림의 아이콘이 되었습니다.
                    </p>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="600"
                        data-aos-duration="1500"
                    >
                        피부를 위한 첨단 인삼 과학의 산물, <br />
                        자음생크림으로 피부에 자생력을 충전하세요.
                    </p>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="700"
                        data-aos-duration="1500"
                    >
                        <sup>*</sup> 2017-2022 Beaute Research 한국 매출 기준
                    </p>
                </div>
        </div>
    )
}
export default Header;