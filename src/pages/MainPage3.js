import React from "react";
import { Link } from "react-router-dom";
import './MainPage3.css';

const MainPage3 = () =>{
    return (
        <div className="main3">
            <div className="main3h">
                <h2>News</h2>
                <p><Link to="/subnews"><b>more →</b></Link></p>
            </div>
            <div className="main3sub">
                <ul>
                    <li>
                        <div className="imgbox">
                            <img src="./images/main1.jpg" alt=""></img>
                        </div>
                        <div className="titlebox">
                            <h4>넥슨게임즈 | 2023.02.06</h4>
                            <h2>넥슨게임즈, 그룹내 존재감 '재부각'</h2>
                        </div>
                            <p>최근 넥슨 그룹 내에서 넥슨게임즈의 존재감이 재부각되고 있
                            다. 기존 작품이 흥행 역주행을보이고 있는 가운데 자체 개발
                            력 강화로 차기작에 대한 기대감까지 높이고 있다. 여기에 주
                            가 역시 올해…</p>
                        
                    </li>
                    <li>
                        <div className="imgbox">
                            <img src="./images/main2.jpg" alt=""></img>
                        </div>
                        <div className="titlebox">
                            <h4>넥슨게임즈 | 2023.02.03</h4>
                            <h2>넥슨게임즈, 넥슨의 미래 책임지는 신<br/>엔진 역할 '톡톡’</h2>
                        </div>
                            <p>최근 넥슨의 서브컬처 게임 ‘블루 아카이브’가 한국과 일본에
                            서 역주행에 성공하는 등 새로운 글로벌 대표 IP로 떠오르며
                            개발사 넥슨게임즈에 대한 관심도 높아지고 있다.넥슨의 핵심
                            개발 전초…</p>
                        
                    </li>
                    <li>
                        <div className="imgbox">
                            <img src="./images/main3.jpg" alt=""></img>
                        </div>
                        <div className="titlebox">
                            <h4>넥슨게임즈 | 2023.02.02</h4>
                            <h2>넥슨게임즈, 2023년 전직군 300여명<br/>수시채용...개발 경쟁력 강화</h2>
                        </div>
                            <p>넥슨게임즈가 올해 300여명 규모 채용을 진행한다. 인재 확보
                            를 통해 신작 개발과 글로벌 시장 진출에 박차를 가하겠다는
                            포석이다.넥슨게임즈는 루트슈터 게임 '퍼스트 디센던트', 3인
                            칭슈팅…</p>
                        
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default MainPage3;