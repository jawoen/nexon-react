import React from 'react';
import './SubNews.css';

const SubNews = () => {
    return (
        <div className='SubNews'>
            <div className='headmenu'>
                <p className='text'>
                    <img src='./images/home.png'/>
                    <span>Home</span>
                    <span>미디어</span>
                    <span><b>뉴스</b></span>
                </p>
            </div>
            <div className='headmenu2'>
                <h3>뉴스</h3>
                <div className='search'>
                    <select>
                        <option>전체 카테고리</option>
                        <option>넥슨 게임즈</option>
                        <option>V4</option>
                        <option>히트2</option>
                    </select>
                    <input type='text' placeholder='검색어를 입력해주세요' />
                    <button><img src='./images/icon.png'/></button> 
                </div>
            </div>
            <div className='title_menu'>
                <ul>
                    <div className='box'>
                    <li>
                        <div className="subimgbox">
                            <img src="./images/main1.jpg" alt=""></img>
                        </div>
                        <div className="subtitlebox">
                            <h4>넥슨게임즈 | 2023.02.06</h4>
                            <h2>넥슨게임즈, 그룹내 존재감 '재부각'</h2>
                        </div>
                        <p>최근 넥슨 그룹 내에서 넥슨게임즈의 존재감이 재부각되고 있다.
                        기존 작품이 흥행 역주행을 보이고 있는 ...</p>
                    </li>
                    <li>
                         <div className="subimgbox">
                            <img src="./images/main2.jpg" alt=""></img>
                         </div>
                         <div className="subtitlebox">
                            <h4>넥슨게임즈 | 2023.02.03</h4>
                            <h2>넥슨게임즈, 넥슨의 미래 책임지는 신엔진 역할 '톡톡’</h2>
                        </div>
                            <p>최근 넥슨의 서브컬처 게임 ‘블루 아카이브’가 한국과 일본에서
                            역주행에 성공하는 등 새로운 글로벌 대표 IP로 ...</p>
                    </li>
                    <li>
                        <div className="subimgbox">
                            <img src="./images/main3.jpg" alt=""></img>
                         </div>
                         <div className="subtitlebox">
                            <h4>넥슨게임즈 | 2023.02.02</h4>
                            <h2>넥슨게임즈, 2023년 전직군 300여명 수시채용...개발 경쟁력 강화</h2>
                        </div>
                            <p>넥슨게임즈가 올해 300여명 규모 채용을 진행한다. 인재 확보
                            를 통해 신작 개발과 글로벌 시장 진출에 박차를 가...</p>
                    </li>
                    </div>
                    <div className='box'>
                    <li>
                        <div className="subimgbox">
                            <img src="./images/main_news1.jpg" alt=""></img>
                         </div>
                         <div className="subtitlebox">
                            <h4>블루 아카이브 2023.01.27</h4>
                            <h2>[칼럼]김용하 총괄 PD를 만나고, '블루 아카이브' 애니메이션화 확정에 부쳐</h2>
                        </div>
                            <p>설 연휴 사이에 '블루 아카이브' 유저들에게 매우 기쁜 소식이 전해졌다. \
                            일본에서 '블루 아카이브'가 애니메이션...</p>
                    </li>
                    <li> 
                        <div className="subimgbox">
                            <img src="./images/main_news2.jpg" alt=""></img>
                        </div>
                        <div className="subtitlebox">
                            <h4>블루 아카이브 2023.01.25</h4>
                            <h2>벌써 2주년, 일본 점령한 '블루 아카이브'의 '문화적 확장'</h2>
                        </div>
                            <p>'서브컬처 본고장' 일본에서 한국 서브컬처 게임이 정상급 반열에 올랐다.
                            문화의 감성을 이해하고 진심으로 퀄리티...</p>
                    </li>
                    <li>
                        <div className="subimgbox">
                            <img src="./images/main_news3.jpg" alt=""></img>
                        </div>
                        <div className="subtitlebox">
                            <h4>서든어택 2023.01.19</h4>
                            <h2>2023년, 서든어택 김태현 디렉터가 지키려는 가치</h2>
                        </div>
                            <p>서든어택은 2023년에도 계속 달린다. 새해를 맞이해 
                            서든어택의 새로운 '총대' 김...</p>
                    </li>
                    </div>
                    <div className='box'>
                    <li>
                        <div className="subimgbox">
                            <img src="./images/main3.jpg" alt=""></img>
                        </div>
                        <div className="subtitlebox">
                            <h4>넥슨게임즈 2023.01.19</h4>
                            <h2>넥슨 미래 책임질 넥슨게임즈, 듀랑고 이어 던파까지</h2>
                        </div>
                            <p>넥슨게임즈(대표 박용현)가 네오플과 함께 넥슨 그룹 내 핵심 
                            개발사로 입지를 다지고 있다. 넥슨의 미래를 책임질...</p>
                    </li>
                    <li>
                        <div className="subimgbox">
                            <img src="./images/main_news4.jpg" alt=""></img>
                        </div>
                        <div className="subtitlebox">
                            <h4>베일드 엑스퍼트 2023.01.19</h4>
                            <h2>“베일드 엑스퍼트, 지형지물 이용한 전략 게임”</h2>
                        </div>
                            <p>넥슨게임즈는 PC 슈팅 게임 ‘베일드 엑스퍼트(VEILED EXPERTS)’의 
                            개발자 라이브 방송을 19일 진행...</p>
                    </li>
                    <li>
                    <div className="subimgbox">
                            <img src="./images/main_news5.jpg" alt=""></img>
                        </div>
                        <div className="subtitlebox">
                            <h4>서든어택 2023.01.18</h4>
                            <h2>넥슨 대표 장수게임 ‘서든어택’, FPS 1위 탈환… “쾌적한 환경 최우선” 목표</h2>
                        </div>
                            <p>'서든어택'은 여전한 인기를 유지하며 FPS 점유율 1위(1월 1주차, 5.82%)를 
                            재탈환했다. 그간 차별화된...</p>
                    </li>
                    </div>
                    
                    <div className='box'>
                        <li>
                            <div className="subimgbox">
                                <img src="./images/main_news6.jpg" alt=""></img>
                            </div>
                            <div className="subtitlebox">
                                <h4>블루아카이브 2023.01.11</h4>
                                <h2>1월은 ‘블루 아카이브’를 시작할 때입니다</h2>
                            </div>
                                <p>넥슨이 10일 수집형 RPG '블루 아카이브'에서 설날 인사와
                                함께 2023년 운용 기조를 공개했다.&...</p>
                        </li>
                        <li>
                            <div className="subimgbox">
                                <img src="./images/main_news7.jpg" alt=""></img>
                            </div>
                            <div className="subtitlebox">
                                <h4>넥슨게임즈 2023.01.11</h4>
                                <h2>[테크M 피플] '듀랑고' 이어 '던파'도 품은 '미다스의 손' 박용현에 쏠린 눈</h2>
                            </div>
                                <p>게임업계 '미다스의 손'으로 불리는 박용현 넥슨게임즈 
                                대표가 '듀랑고' IP에 이어 '던전앤파이터' 지식재산권(...</p>
                        </li>
                        <li>
                            <div className="subimgbox">
                                <img src="./images/main3.jpg" alt=""></img>
                            </div>
                            <div className="subtitlebox">
                                <h4>넥슨게임즈 2023.01.11</h4>
                                <h2>넥슨게임즈, '던전앤파이터' 오픈월드 액션 RPG 만든다</h2>
                            </div>
                                <p>넥슨게임즈가 던전앤파이터 지식재산권(IP)에 기반을 둔
                                멀티 플랫폼 오픈월드 액션 역할수행게임(RPG) '프로젝...</p>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default SubNews;