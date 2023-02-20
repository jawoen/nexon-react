import React from 'react';
import "./SubNexonGames.css";

const SubNexonGames = () => {
    return (
        <div className='nexongame'>
            <div className='first_visual'>
                <h2>넥슨게임즈</h2>
                <p>일상을 뛰어넘는 참신한 재미를 만듭니다.<br />
                놀라운 경험을 선사하는 새로운 세계를 창조합니다.</p>
            </div>
            <div className='sub_info'>
                <p>
                넥슨게임즈는 넥슨 컴퍼니의 게임 개발사로서, PC, 모바일, 콘솔 플랫폼을 아우르는<br/>
                다양한 장르의 게임을 개발, 국내는 물론 세계 각국에 선보이고 있습니다.<br />
                넥슨게임즈는 기존의 게임보다 한층 돋보이는 재미를 담은 다양한 신작들을 통해 한국을 넘어<br />
                세계로부터 주목받는 글로벌 개발사로 성장해 나갈 것입니다.
                </p>
            </div>
            <div className='second_section'>
                <h2>우리의 비전</h2>
                <div className='sub_visual'>
                    <h2>We make games better</h2>
                    <p>
                    우리는 더 좋은 게임(Better Game)을 만들고 세상에 보여주기 위해 모였습니다.<br />
                    유저가 더 즐겁게 게임을 즐길 수 있도록, 세상보다 먼저 한 발자국 더 나아갑니다.<br />
                    넥슨게임즈의 방식으로 더 좋은 게임을 만듭니다.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SubNexonGames;