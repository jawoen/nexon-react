import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_URL } from '../../config/apiurl';
import { setId } from '../../modules/logincheck';
import Editpassword from './Editpassword';


const Findpassword = () => {
    
    const dispatch= useDispatch();
    const [idInfo,setIdInfo] = useState("");
    const [formData,setFormData] = useState({
        m_id : "",
        m_phone : ""
    }); 
    const onChange = (e) =>{
        const { name,value} = e.target;
        setFormData({
            ...formData,
            [name] : value
        })
    }
    useEffect(() => {
        if (formData.m_phone.length === 11) {
            setFormData({
                ...formData,
            m_phone: formData.m_phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
          });
        } else if (formData.m_phone.length === 13) {
            setFormData({
                ...formData,
                m_phone: formData.m_phone
                //하이픈이 입력되면 공백으로 변경되고 하이픈이 다시 생성됨
              .replace(/-/g, '')
              .replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
          });
        }
      }, [formData.m_phone]);
    const onSubmit = (e) =>{
        e.preventDefault();
        axios.post(`${API_URL}/findpass`, formData)
        .then(res=>{
            alert("아이디와 이름이 확인되셨습니다.");
           setIdInfo(res.data);
           dispatch(setId(res.data));
           console.log(res.data);
        })
        .catch(e=>{
            console.log(e)
        })
    }
    return (
        <div className='Findid'>
            { idInfo ? <Editpassword/> :
            <>
            <form onSubmit={onSubmit}>
                <div id='Findid'>
                    <div id='Findidimg'>
                            <p>가입시 입력한 회원정보를 입력해 주세요.</p>
                    </div>
                    <div id='Findidinput'>
                        <input type='text' placeholder='아이디'
                        name='m_id' value={formData.m_id} onChange={onChange}/>
                    </div>
                    <div id='Findidinput'>
                        <input type='text' placeholder='휴대폰번호'
                        name='m_phone' value={formData.m_phone} onChange={onChange}/>
                    </div>
                </div>
                <button id='Joinfooter'>비밀번호 찾기</button>
           </form> 
            </>}
        </div>
    );
};

export default Findpassword;