import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Title from '../../components/Title';
import { API_URL } from '../../config/apiurl';
import { useNavigate } from 'react-router-dom';

const JoinPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData ] = useState({
        m_id: "",
        m_name: "",
        m_pass: "",
        m_passch: "",
        m_email: "",
        m_phone: "",
        m_address1: "",
        m_address2: ""
    });
     //인풋에 값을 입력하면 name 값과 value 에 맞춰서 기본상태 (setForm 상태를 변환시켜줌)
    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    // // 팝업창 상태관리
    // const [isPopupOpen, setIsPopupOpen] = useState(false);
    // // 팝업창 열기
    // const openPostCode = () => {
    //     setIsPopupOpen(true)
    // }
    // // 팝업창 닫기
    // const closePostCode = () => {
    //     setIsPopupOpen(false)
    // }
    // // 주소 넣기
    // const onAddData = (data) => {
    //     console.log(data);
    //     setFormData({
    //         ...formData,
    //         m_address1: data.address
    //     })
    // }
    // //폼전송 이벤트 
    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     //입력이 다 되어있는지 체크하고 addMember()호출
    //     if(formData.m_id !== "" && formData.m_pass !== "" && formData.m_phone !== "" 
    //     && formData.m_address1 !== "" && formData.m_address2 !== "" && formData.m_email !== "" ){
    //         addMember();
    //     }
    // }
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
    const onSubmit = (e) => {
        e.preventDefault();
        //입력이 다 외었는지 체크
        const reg1= /^[a-z0-9A-Z]{8,45}$/;
        const reg2= /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,45}$/;
        const reg4= /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        if(reg1.test(formData.m_id) && formData.m_id !== ""){
            console.log("good")
            //비밀번호 확인
            if(formData.m_password !=="" &&  reg2.test(formData.m_pass)){
                console.log("passgood");
                if(formData.m_pass === formData.m_passch){
                    console.log("passchgood")
                    if(reg4.test(formData.m_email)){
                        console.log("굿굿")
                        addMember();
                      }else{
                        alert("이메일을 다시 입력해주세요")
                        setFormData({
                            ...formData,
                            m_email:""
                        })
                      }
                }
                else{
                    alert("비밀번호와 비밀번호확인이 일치 하지않습니다")
                    setFormData({
                        ...formData,
                        m_passch:""
                    })
                }
            }else{
                alert("비밀번호를 다시 입력해주세요")
                setFormData({
                    ...formData,
                    m_pass:""
                })
            }
        }
        else{
            alert("아이디를 다시 입력해주세요")
            setFormData({
                ...formData,
                m_id:""
            })
        }
    }

    const addMember = () => {
        console.log("호출");
        axios.post(`${API_URL}/join`, formData)
        .then(res=> {
            alert('등록되었습니다.');
            navigate('/Login');
        })
        .catch(e=>{
            console.log("에러 발생")
            console.log(e);
        })
    }
    return (
        <div className='inner'>
            <Title title="Join"/>
            <div>
                <form onSubmit={onSubmit}>
                    <table className='defaulttable'>
                        <tbody>
                            <tr>
                                <td>이름</td>
                                <td><input type="text" 
                                name="m_name" value={formData.m_name} 
                                onChange={onChange} /></td>
                            </tr>
                            <tr>
                                <td>아이디</td>
                                <td><input type="text" 
                                name="m_id" value={formData.m_id} 
                                onChange={onChange} /></td>
                            </tr>
                            <tr>
                                <td>비밀번호</td>
                                <td><input type="password" 
                                name="m_pass" value={formData.m_pass} 
                                onChange={onChange} /></td>
                            </tr>
                            <tr>
                                <td>비밀번호 체크</td>
                                <td><input type="password"
                                name="m_passch" value={formData.m_passch} 
                                onChange={onChange} /></td>
                            </tr>
                            <tr>
                                <td>이메일</td>
                                <td><input type="text" 
                                name="m_email" value={formData.m_email} 
                                onChange={onChange} /></td>
                            </tr>
                            <tr>
                                <td>전화번호</td>
                                <td><input type="text"
                                name="m_phone" value={formData.m_phone} 
                                onChange={onChange} /></td>
                            </tr>
                            <tr>
                                <td>주소</td>
                                <td><input type="text"
                                name="m_address1" value={formData.m_address1} 
                                onChange={onChange} />
                                <input type="text"
                                name="m_address2" value={formData.m_address2} 
                                onChange={onChange} />
                                </td>
                            </tr>
                            <tr>
                               <td colSpan={2}>
                                <button type="submit">등록</button>
                                <button type="reset">취소</button>
                               </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
};

export default JoinPage;