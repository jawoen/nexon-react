import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Title from '../../components/Title';
import { API_URL } from '../../config/apiurl';
import { goToHome, setLogin } from '../../modules/logincheck';
import { setCookie } from '../../util/cookie';
import '../css/Login.css';

const Login = () => {
    //input입력값 상태관리 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        useremail: "",
        userpass : "",
    })
    const onChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        })
    }
    const onSubmit = (e) => {
        //form전송이벤트 제거 
        e.preventDefault();
        //인풋에 입력되었는지 체크
        if(loginData.useremail === '' || loginData.userpass === ''){
            alert("이메일과 비밀번호를 입력해주세요");
        }else {
           axios.post(`${API_URL}/login`, loginData)
           .then(result=>{
            const { m_email, m_id } = result.data[0];
            if(m_email && m_id){
                alert("로그인 되었습니다.");
                //현재 시간 객체 생성
                let expires = new Date();
                //60분 더한 값으로 변경
                expires.setMinutes(expires.getMinutes()+60);
                //쿠키생성
                setCookie('useremail', `${m_email}`, {path: '/', expires});
                setCookie('username',`${m_id}`, {path: '/', expires});
                dispatch(setLogin());
                dispatch(goToHome(navigate));
            }
           })
           .catch(e=>{
            console.log(e)
           }) 
        }
    }
    return (
        <div id="login">
                <h2>로그인</h2>
            <div className='inner' onSubmit={onSubmit}>
                    <p>*넥슨에 처음 지원하실 경우 먼저 회원 가입을 진행 해주시기 바랍니다.</p>
                    <div className='top'>
                        <div>
                            <div className='idps'>아이디</div>
                            <div><input type="text" name="userid" 
                            value={loginData.userid} 
                            placeholder=" 아이디를 입력하세요"
                            onChange={onChange}/></div>
                        </div>
                        <div>
                            <div className='idps'>비밀번호</div>
                            <div><input type="password" name="userpass"
                            value={loginData.userpass}
                            placeholder=" 비밀번호를 입력하세요"
                            onChange={onChange}
                            /></div>
                        </div>
                    </div>
                    <div className='find'>
                        <div><Link to="/findid"><span>아이디 찾기</span></Link></div>
                        <div><Link to="/findpass"><span>비밀번호 찾기</span></Link></div>
                    </div>
                    <div className='btns'>
                        <button type="submit">로그인</button>
                        <button><Link to="/join">회원가입</Link></button>
                    </div>
            </div>
        </div>
    );
};

export default Login;