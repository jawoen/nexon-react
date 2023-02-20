import React, { useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin, setLogout } from '../modules/logincheck';
import { getCookie, removeCookie } from '../util/cookie';

const Header = () => {
    const isLogin = useSelector(state=>state.logincheck.isLogin);
    const username = getCookie("username");
    const dispatch = useDispatch();
    const logoutClick = () => {
        removeCookie('username');
        removeCookie('useremail');
        dispatch(setLogout());
    }
    useEffect(()=>{
        const loop = setInterval(()=>{
            const username = getCookie("username");
            if(username){
                dispatch(setLogin());
            }else {
                dispatch(setLogout());
                clearInterval(loop);
            }
        },3000)
    },[username,dispatch])
    return (
        <header>
            <div className='menu'>
                <h1><a href='/'><img src='images/main_logo.png' alt='' /></a></h1>
                <ul className='main_menu'>
                   <li><Link to='/SubNexonGames'>넥슨게임즈</Link></li>
                    <li><a href=''>게임</a></li>
                    <li><a href=''>인재채용</a></li>
                    <li><a href=''>투자정보</a></li>
                    <li><Link to='/media'>미디어</Link></li>
                </ul>
                <div className='member'>
                    <ul className='membermenu'>
                    { isLogin ? <><li onClick={logoutClick}>로그아웃</li>
                        <li><Link to="/join">회원정보</Link></li></> :
                        <><li><Link to="/login">로그인</Link></li>
                        <li><Link to="/join">회원가입</Link></li></>
                    }
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;