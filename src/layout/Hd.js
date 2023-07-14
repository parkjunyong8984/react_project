import React from 'react';
import '../sass/pjy.scss';
import  { db } from '../db/db'

const ScrollspyHeader = () => {
  return (
    <div className='container' id='Hd'>
    <div className="header  container">
      <div className="w-100 H-height H-border">
        <a href="">
          <img src="./slim.svg" alt="" />
        </a>
      </div>
      <div className="">
        <ul className="gnb d-flex pt-3">
          {
            db.map((v, i) => {
            return (<li className="ps-5"><a href="">{v}</a></li>)
          })
        }
        </ul>
      </div>
    </div>
    <div className="d-flex position-absolute H-Event-h">
      <div className="d-flex align-items-center">
        <h2><a href="">EVENT</a></h2>
        <ul className='d-flex'>
        <li className="">바디프로필</li>
        <li className="">다이어트</li>
        <li className="">그룹신청</li>
        </ul>
      </div>
      <div className=""></div>
    </div>
    </div>
  );
};

export default ScrollspyHeader;