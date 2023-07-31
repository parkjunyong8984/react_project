
import Hdcss from '../css/header.module.scss'


const Header = (props) => {      
    return (       
           
            <header>
                <div className={`d-flex justify-content-between ${Hdcss["container"]}`}>
                    <button className='d-none'></button>
                    <div className={Hdcss.top}>
                        <a href="">이벤트
                        </a>
                    </div>
                    <div className={Hdcss.middle}>
                        <a href="">
                           <img src={props.dbpath.navi.logosrc} alt="" />
                        </a>
                        <ul className="d-flex">
                            {
                                props.dbpath.navi.gnb.map((v,i)=>{
                                    return (
                                        <li className="" key={i} ><a href={v.alink} className="d-block">{v.title}</a></li>
                                    )
                                })
                            }
                        </ul>
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
                </div>
            </header>
           
      
    )
}
export default Header;