import React from 'react';
import '../sass/pjy.scss';


const ScrollspyHeader = (props) => {
  return (
    <div className='container' id='Hd'>
    <div className="header  container">
      <div className="w-100 H-height H-border">
        <a href="#top">
        <img src={props.dbpath.navi.logosrc} alt="" />
        </a>
      </div>
      <div className="">
        <ul className="gnb d-flex pt-3">
           {
            props.dbpath.navi.gnb.map((v, i) => {
            return (<li className="ps-5"><a href="">{v}</a></li>)
          })
        }
        </ul>
      </div>
    </div>
    <div className="position-absolute H-Event-h">
      <div className="d-flex align-items-center">
        <h2><a href="">EVENT</a></h2>
        <ul className='d-flex'>
        <li className="">바디프로필</li>
        <li className="">다이어트</li>
        <li className="">그룹신청</li>
        </ul>
      </div>
      <div className="H-list">
        <ul className="d-flex">
          {
            Hdmenu.Hdlist.map((v, i) => {
              return (
                <li className={v.cls[0]} key={i}>{v.menu[0]}</li>
              )
            })
          }
        </ul>
      </div>
    </div>
    </div>
  );
};

export default ScrollspyHeader;