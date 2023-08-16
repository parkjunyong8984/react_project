import React, { useEffect,useState } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';


import Hdcss from '../css/header.module.scss'



const Header = (props) => {   
    const linknm =  props.dbpath.navi.gnb.map((v, i)=>{
        return v.alink
      }) 
        
    const [ topevent, setTopevent] = useState(true)
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    //스크롤의 물리적인 Y축 정보를 랜더링의 기준처리 -> useState의 변수로 만들어라
    const [visible, setVisible] = useState(true);
    //2가지 상태만 저장할 상태변수(랜더링변수) 선언 -> 위, 아래만 체크하면 되므로

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        //스크롤Y축의 값을 요 변수에 담아라
        const visible = prevScrollPos > currentScrollPos; // if문 true, false 리턴함
        //그 변수가 아까 담아둔 상태변수값보다 작으면 (휠을 위로 올린경우) true를 담아라
        setVisible(visible); //  상태변수값으로 만들어라 (랜더링일어남)
        // 아래로 계속 내릴경우에는 랜더링안하고 위로 올릴때 랜더링 계속 위로 올리면 랜더링안함
        setPrevScrollPos(currentScrollPos); // 현재 Y축 위치값을 변경 (랜더링일어암)
      };
  
    useEffect(() => {
      
      // 시간차를 극복하기 위해서 함수로 만들어서  이벤트에 호출되도록 하여
      // 타이밍어긋나지않도록 하는 거임
  
      window.addEventListener('scroll', handleScroll);
      // 스크롤을 일으키면 y축값이 달라져서 랜더링할것이고 거기에 맞춰 함수실행한다.
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
        //컴포넌트가 살았가다가 죽고 다시 태어나는 반복적인 윤회에서
        //그 생에 마지막 처리를 의미함
        //눈에 안보이는 명령 콘솔창을 괴롭히는 프로세스를 깔끔하게 처리하는 거임
      };
    }, [prevScrollPos]); 
    // 마우스가 움직일때만 (위든 아래이든) 실행해라. 상태변수가 변경된 값으로 랜더링이 실행할때마다
    // 같이 처리될 함수 useEffect에 넣어둔거임
  
    return (       
        <Navbar expand="lg" id={Hdcss.navHd} fixed="top"  className={visible ? `${Hdcss.hd} ${Hdcss.active}` : Hdcss.hd} as="header">
         
                 <Container className={`d-flex justify-content-between align-items-start ${Hdcss["container"]}`}>                              
                  { topevent &&  <div className={Hdcss.top}>
                        <a href="">이벤트
                        </a>
                    </div> }
                    <div className={Hdcss.middle}>
                           <Navbar.Brand as="h1" className='col-12 text-center m-0 p-0'>
                           <a href="#top" className={Hdcss.logo}>
                                <img src={props.dbpath.navi.logosrc} alt="" />
                           </a>
                           </Navbar.Brand>
                           <Navbar.Toggle aria-controls="navbar-nav" />
                           <Navbar.Collapse id="navbar-nav" className="justify-content-center">
                           <Nav>
                                <Scrollspy
                                items={linknm}
                                currentClassName="active"
                                offset={-100}
                                componentTag="ul"
                                className="gnb d-flex"
                                >
                            {
                                props.dbpath.navi.gnb.map((v,i)=>{
                                    return (
                                        <li className={Hdcss.Menu} key={i} ><a href={"#"+v.alink} className="d-block">{v.title}</a></li>
                                    )
                                })
                            }
                               </Scrollspy>
                           </Nav>
                        </Navbar.Collapse>
                    </div>
                    <div className={Hdcss.bottom}>
                        <ul className='d-flex'>
                       {
                        props.dbpath.navi.utile.map((v,i)=>{
                            return (
                                <li className="" key={i} ><a href="" className='d-block position-relative'>
                                       
                                       {  i !==  ( props.dbpath.navi.utile.length - 1) ? <i>{v.title}</i> : <i className={Hdcss.bgsearch}><span className="visually-hidden">{v.title}</span></i>  } 
                                     
                                       
                                    </a>
                                </li>
                            )
                        })
                       
                        }
                        </ul>
                    </div>
                </Container>
           
        </Navbar>
           
      
    )
}
export default Header;