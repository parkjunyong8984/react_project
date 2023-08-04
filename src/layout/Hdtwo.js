
import React, { useState } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';
import Hdcss from '../css/header.module.scss'



const Header = (props) => {   
    const linknm =  props.dbpath.navi.gnb.map((v, i)=>{
        return v.alink
      }) 
        
    const [ topevent, setTopevent] = useState(true)
    return (       
        <Navbar expand="lg" id={Hdcss.navHd} className="fixed-top py-0" as="header">
         
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