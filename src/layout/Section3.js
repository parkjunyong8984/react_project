import React from 'react';
import Sec3 from '../css/section3.module.scss'

const Section3 = () => {
 
    return (
        <section className="">
					<div className="" >
						<div className="">
							<h3 className="" animate="">NEWS</h3>
							<a href="/news/activity" className="" animate="">
								<span className="">전체보기</span>
								<i className=""></i>
							</a>
						</div>
						<div className="">
							<div className="" animate="fade-up">
								<ul className="">
									<li className=""><a href="javascript:void(0);">프로그램</a></li>
									<li><a href="javascript:void(0);">언론보도</a></li>
									<li><a href="javascript:void(0);">공지사항</a></li>
								</ul>
								<div className="" animate="fade">

									<div className="">
										<div id="" className="swiper-container mo-slider">
											<ul className="swiper-wrapper data-list col-3">
                                                <li className="swiper-slide" animate="fade-up">
													<a href="/news/activityDetail?seq=32" className="">
														<div className="p">
															<span className="">프로그램</span>
															<p className="">
																<span>[호반미술상] 초대 선정작가 강운, 홍순명 선정</span>
															</p>
															<p classNameName="">2023.04.20</p>
														</div>
														<div className="">
															<img src="/attach_files/bbs/thumbnail_202307161952291.jpg" alt=""/>
														</div>
													</a>
												</li>
																								<li className="swiper-slide" animate="fade-up">
													<a href="/news/activityDetail?seq=34" className="i">
														<div className="">
															<span className="">프로그램</span>
															<p className="">
																<span>[문화예술 후원] 파독 근로자 60주년 기념 음악회 ‘베를린 아리랑’ 1억원 후원</span>
															</p>
															<p className="">2023.02.28</p>
														</div>
														<div className="">
															<img src="/attach_files/bbs/thumbnail_202307180959121.jpg" alt=""/>
														</div>
													</a>
												</li>
												<li className="swiper-slide" animate="fade-up">
													<a href="/news/activityDetail?seq=37" className="">
														<div className="">
															<span className="tag bd-l r100">프로그램</span>
															<p className="">
																<span>[H-EAA] 전국청년작가 미술공모전 '2022 H-EAA' 시상식 개최</span>
															</p>
															<p className="">2022.10.19</p>
														</div>
														<div className="">
															<img src="/attach_files/bbs/thumbnail_202307161954381.jpg" alt=""/>
														</div>
													</a>
												</li>
																							
											</ul>
											<div className="swiper-pagination"></div>
										</div>
									</div>

									<div className="">
										<div id="newsSwiper02" className="swiper-container mo-slider">
											<ul className="swiper-wrapper data-list col-3">
											    <li className="swiper-slide" animate="fade-up">
													<a href="/news/activityDetail?seq=21" className="">
														<div className="">
															<span className="tag bd-l r100">언론보도</span>
															<p className="">
																<span>[언론보도] 캔버스 위 ‘강운의 구름’… 그 시절 내가 떠올랐다</span>
															</p>
															<p className="">2023.05.31</p>
														</div>
														<div className="">
															<img src="/attach_files/bbs/thumbnail_202307141624301.jpg" alt=""/>
														</div>
													</a>
												</li>
												<li className="swiper-slide" animate="fade-up">
													<a href="/news/activityDetail?seq=29" className="">
														<div className="">
															<span className="tag bd-l r100">언론보도</span>
															<p className="">
																<span>[언론보도] 하이젠베르크의 부분과 전체는 홍순명을 만나 예술이 되었다</span>
															</p>
															<p className="">2023.04.26</p>
														</div>
														<div className="img-wrap">
															<img src="/attach_files/bbs/thumbnail_202307141624561.jpg" alt=""/>
														</div>
													</a>
												</li>
												<li className="swiper-slide" animate="fade-up">
													<a href="/news/activityDetail?seq=47" className="">
														<div className="">
															<span className="tag bd-l r100">언론보도</span>
															<p className="">
																<span>[언론보도] 중견·원로작가 예술세계 비추는 ‘등대’ 나섰다</span>
															</p>
															<p className="">2023.04.20</p>
														</div>
														<div className="img-wrap">
															<img src="/attach_files/bbs/thumbnail_202307161953461.png" alt=""/>
														</div>
													</a>
												</li>
																							</ul>
											<div className="swiper-pagination"></div>
										</div>
									</div>

									<div className="">
										<div id="newsSwiper03" className="swiper-container mo-slider">
											<ul className="swiper-wrapper data-list col-3">
												<li className="swiper-slide" animate="fade-up">
													<a href="/news/noticeDetail?seq=153" className="">
														<div className="">
															<span className="tag bd-l r100">공지사항</span>
															<p className="">
																<span>[H-EAA] 2023 H-EAA 공모전  최종 선정작가 10인 안내</span>
															</p>
															<p className="">2023.07.20</p>
														</div>
														
													</a>
												</li>
												<li className="swiper-slide" animate="fade-up">
													<a href="/news/noticeDetail?seq=18" className="">
														<div className="">
															<span className="tag bd-l r100">공지사항</span>
															<p className="">
																<span>[H-EAA] 2023 H-EAA 공모전 1차 합격자 안내</span>
															</p>
															<p className="">2023.06.22</p>
														</div>
														
													</a>
												</li>
																								<li className="swiper-slide" animate="fade-up">
													<a href="/news/noticeDetail?seq=39" className="">
														<div className="">
															<span className="tag bd-l r100">공지사항</span>
															<p className="">
																<span>[H-EAA] 전국청년작가 미술공모전 '2023 H-EAA' 개최</span>
															</p>
															<p className="">2023.05.02</p>
														</div>
														
													</a>
												</li>
																							</ul>
											<div className="swiper-pagination"></div>
										</div>
									</div>

								</div>
							</div>
						</div>
					</div>
				</section>
    )
}

export default Section3;