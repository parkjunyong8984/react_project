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
								<p className="d-flex justify-content-end">대표전화</p><p>({Fttime.time}. {Fttime.date})</p>
							</div>
							<div className="">
								<p className={`d-flex justify-content-end ${Ftcss["call-font"]}`}>1899.8900</p>
								<p className="d-flex justify-content-end">콜센터</p><p>({Fttime.time}. {Fttime.date})</p>
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
							<p className="">옳은(주) 주소 : 서울 강남구 봉은사로37길 7-9 2F <span className="">대표이사 : 배00</span></p>
							<p className="">Copyrightⓒ슬림쿡.All rights Reserved.</p>
						</div>
						<div className="">
							<div className="">
								<a href="" title="슬림쿡 홈페이지 열기"><img src="./W-logo.png" alt="" /></a>
							</div>
							<p className=""><img src="" alt=""/></p>
						</div>
					</div>
				</div>
        </div>
    )
}
export default Ft;