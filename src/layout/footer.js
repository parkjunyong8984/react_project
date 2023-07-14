import Ftcss from '../css/footer.module.scss'
import { Fttime } from '../db/db'

const Ft = () => {

    return (
        <div className={`${Ftcss["Ft-box"]}`}>
<div className={`container ${Ftcss["inner"]}`}>
					<div className={`d-flex justify-content-between ${Ftcss["Ft-Head"]}`}>
						<div className="">
							<p className={Ftcss.Headfont}>무엇을 도와드릴까요?</p>
							<div className="">
								<p className="">
									<a href={Ftcss.font} target="_blank">자주묻는 질문</a>
								</p>
								<p className="">
									<a href="" target="_blank">수강신청·변경·취소안내</a>
								</p>
								<p className="">
									<a href="" target="_blank">온라인 신청가이드</a>
								</p>
							</div>
						</div>
						<div className={`d-flex ${Ftcss["Ft-call"]}`}>
							<div className="">
								<p className={`d-flex justify-content-end ${Ftcss["call-font"]}`}>1577.0001</p>
								<p className="d-flex justify-content-end">백화점 대표전화</p><p>({Fttime.time}. {Fttime.date})</p>
							</div>
							<div className="">
								<p className={`d-flex justify-content-end ${Ftcss["call-font"]}`}>1899.8900</p>
								<p className="d-flex justify-content-end">L.POINT 콜센터</p><p>({Fttime.time}. {Fttime.date})</p>
							</div>
						</div>
					</div>
					<div className={`d-flex justify-content-between ${Ftcss["Ft-bottom"]}`}>
						<div className="">
							<div className="">
								<a href="" title="새창" target="_blank" className="">개인정보처리방침</a>
								<a href="" title="새창" target="_blank"  className="">영상정보처리운영관리방침</a>
								<a href="" title="새창" target="_blank"  className="">이용약관</a>
							</div>
							<p className="">롯데쇼핑(주) 주소 : 서울특별시 중구 소공동 1번지 (서울시 중구 남대문로 81)<span className="">대표이사 : 정준호</span></p>
							<p className="">COPYRIGHT © LOTTESHOPPING.CO.,LTD. ALL RIGHTS RESERVED</p>
						</div>
						<div className="">
							<div className="">
								<a href="" title="롯데 관계사 사이트 팝업 열기"><span>롯데 관계사 사이트</span></a>
							</div>
							<p className=""><img src="" alt=""/></p>
						</div>
					</div>
				</div>
        </div>
    )
}
export default Ft;