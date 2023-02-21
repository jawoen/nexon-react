import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Title from '../../components/Title';
import { API_URL } from '../../config/apiurl';
import { goToHome, setLogin } from '../../modules/logincheck';
import { setCookie } from '../../util/cookie';

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
        <div className='inner' id="login">
            <Title title="Login"/>
                <h2>로그인</h2>
            <form onSubmit={onSubmit}>
                <table className='defaulttable small'>
                    <tbody>
                    <tr>
                        <td>아이디</td>
                        <td><input type="text" name="userid" 
                        value={loginData.userid} 
                        onChange={onChange}/></td>
                    </tr>
                    <tr>
                        <td>비밀번호</td>
                        <td><input type="password" name="userpass"
                        value={loginData.userpass}
                        onChange={onChange}
                        /></td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button type="submit">로그인</button>
                            <button><Link to='/join'>회원가입</Link></button>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <Link to="/findid"><span>아이디 찾기</span></Link> 
                            <Link to="/findpass"><span>비밀번호 찾기</span></Link>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default Login;