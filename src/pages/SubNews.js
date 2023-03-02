import React from 'react';
import { API_URL } from '../config/apiurl';
import './SubNews.css';

const SubNews = ({data}) => {
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
            <div>{data.map(d=><SubNewsList list={d} key={d.n_no}/>)}</div>
        </div>
        )}
function SubNewsList({list}){
    return(
            <div className='title_menu'>
                <ul>
                    <div className='box'>
                    <li>
                        <div className="subimgbox">
                            <img src={`${API_URL}/upload/news/${list.n_image}`} alt=""/>
                        </div>
                        <div className="subtitlebox">
                            <h4>{list.n_title}</h4>
                            <h4>{list.n_date}</h4>
                            <h2>{list.n_titledesc}</h2>
                        </div>
                        <p>{list.n_desc}</p>
                    </li>
    
                    </div>
                </ul>
            </div>
    );
        }   
export default SubNews;