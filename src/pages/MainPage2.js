import React from 'react';
import './MainPage2.css';
const MainPage2 = () => {
    return (
        <div className='main2'>
            <div className='titleText'>
                <h1>We Make Games Better</h1>
                <h2><strong>NEXON GAMES</strong></h2>
                <span></span>
            </div>
            <div className='main2_sub'>
                <div className='left_con'>
                    <p>우리는 더 좋은 게임(Better Game)을</p><br/>
                    <p>만들고 세상에 보여주기 위해 모였습니다.</p><br/>
                    <br/>
                    <p>유저가 더 즐겁게 게임을 즐길 수 있도록,</p><br/>
                    <p>세상보다 먼저 한 발자국 더 나아갑니다.</p><br/>
                    <br/>
                    <p>넥슨게임즈의 방식으로</p><br/>
                    <p>더 좋은 게임을 만듭니다.</p><br/> 
                </div>
                <div className='right_con'>
                    <img src='./images/main_mid_img_01_new.png' />
                </div>
            </div>
        </div>
        
    );
};

export default MainPage2;