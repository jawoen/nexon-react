import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../config/apiurl';
import { getDatas } from '../modules/special';
import SubNews from '../pages/SubNews';


const NewsContainer = ({ isMain, limits }) => {
    const NewsData = async () => {
        const data = await axios.get(`${API_URL}/news/${limits}`);
        return data;
    }
    const { loading, data, error} = useSelector(state=>state.special.specials);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getDatas(NewsData))
    },[dispatch])
    if(loading) return <div>로딩중입니다...</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return <div>데이터가 없습니다.</div>
    if(isMain) {
        return (
            <SubNews data={data}/>
        );
    }else {
        return (
            <SubNews data={data}/>
        )
    }
   
};

export default NewsContainer;