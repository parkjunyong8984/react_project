import React from 'react';
import Sec3 from '../css/section3.module.scss'

const Section3 = () => {
    return (
        <section className={Sec3.inner}>
					<div className="" >
						<div className=""
						data-aos="fade-up"
						data-aos-delay="500"
						ata-aos-duration="1500">
							<h3 className="" animate="">NEWS</h3>
						</div>
						<div className="">
							<div className="" animate="">
								<ul className={`d-flex ${Sec3["newsgnb"]}`}
								data-aos="fade-up"
								data-aos-delay="500"
								ata-aos-duration="1500">
									<li className=""><a href="javascript:void(0);">프로그램</a></li>
									<li><a href="javascript:void(0);">언론보도</a></li>
									<li><a href="javascript:void(0);">공지사항</a></li>
								</ul>
								<div className="" animate="">
									<div className="">
										<div id={Sec3.slider} className="mo-slider">
											<ul className=" data-list col-12 d-flex justify-content-between">
                                                <li className="col-4" animate="">
														<div className=""
														data-aos="fade-up"
														data-aos-delay="200"
														ata-aos-duration="1500">
															<span className={Sec3.span}>프로그램</span>
															<p className="">
																<span className={Sec3.span}>[호반미술상] 초대 선정작가 강운, 홍순명 선정</span>
															</p>
															<br></br>
														</div>
														<p classNameName={Sec3.p}>2023.04.20</p>
														<div className=""
														data-aos="fade-up"
														data-aos-delay="400"
														ata-aos-duration="1500">
															<img src="./sec31.jpg" alt=""/>
														</div>
												</li>
												<li className="col-4" animate="">
														<div className=""
														data-aos="fade-up"
														data-aos-delay="600"
														ata-aos-duration="1500">
															<span className="">프로그램</span>
															<p className="">
																<span>[문화예술 후원] 파독 근로자 60주년 기념 음악회 ‘베를린 아리랑’ 1억원 후원</span>
															</p>
														</div>
														<p className="">2023.02.28</p>
														<div className="col-12"
														data-aos="fade-up"
														data-aos-delay="500"
														ata-aos-duration="1500">
															<img src="./sec32.jpg" alt=""/>
														</div>
												</li>
												<li className="col-4" animate="">
														<div className=""
														data-aos="fade-up"
														data-aos-delay="500"
														ata-aos-duration="1500">
															<span className="tag bd-l r100">프로그램</span>
															<p className="">
																<span>[H-EAA] 전국청년작가 미술공모전 '2022 H-EAA' 시상식 개최</span>
															</p>
                                                           <br></br>
														</div>
														<p className="">2023.02.28</p>
														<div className=""
														data-aos="fade-up"
														data-aos-delay="500"
														ata-aos-duration="1500">
															<img src="./sec33.jpg" alt=""/>
														</div>
												</li>
											</ul>
											<div className="swiper-pagination"></div>
										</div>
									</div>
									<div className="d-none">
										<div id="newsSwiper02" className="mo-slider">
											<ul className=" data-list col-3">
											    <li className="" animate="">
													<a href="" className="">
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
												<li className="" animate="">
													<a href="" className="">
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
												<li className="" animate="">
													<a href="" className="">
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
									<div className="d-none">
										<div id="newsSwiper03" className="mo-slider">
											<ul className=" data-list col-3">
												<li className="" animate="">
													<a href="" className="">
														<div className="">
															<span className="tag bd-l r100">공지사항</span>
															<p className="">
																<span>[H-EAA] 2023 H-EAA 공모전  최종 선정작가 10인 안내</span>
															</p>
															<p className="">2023.07.20</p>
														</div>
													</a>
												</li>
												<li className="" animate="">
													<a href="" className="">
														<div className="">
															<span className="tag bd-l r100">공지사항</span>
															<p className="">
																<span>[H-EAA] 2023 H-EAA 공모전 1차 합격자 안내</span>
															</p>
															<p className="">2023.06.22</p>
														</div>
													</a>
												</li>
												<li className="" animate="">
													<a href="" className="">
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