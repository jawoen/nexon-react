import axios from "axios";
import React, { useState } from "react";
import Title from "../components/Title";
import { API_URL } from "../config/apiurl";

const WriteNews = () => {
  const [formData, setFormData] = useState({
    n_title: "",
    n_date: "",
    n_titledesc: "",
    n_desc: "",
    n_image: "",
    n_category: "news",
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  //input타입이 file인 input이 onChange되었을때 호출되는 함수
  //변경된 파일을 서버로 업로드 전송하기
  const onChangeImage = (e) => {
    const { name } = e.target;
    //폼태그 생성하기
    const imageFormData = new FormData();
    //폼태그에 데이터 추가하기
    imageFormData.append("img", e.target.files[0]);
    //전송
    axios
      .post(`${API_URL}/upload`, imageFormData, {
        headers: { "content-type": "multipart/formdata" },
      })
      .then((res) => {
        console.log(res);
        setFormData({
          ...formData,
          [name]: res.data.imageUrl,
        });
      })
      .catch((e) => console.log(e));
  };

  //폼전송
  const onSubmit = (e) => {
    //form태그 전송 이벤트 삭제
    e.preventDefault();
    //인풋체크후 addNews호출
    addNews();
  };

  const addNews = () => {
    axios
      .post(`${API_URL}/News`, formData)
      .then((res) => {
        alert("등록되었습니다.");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="inner">
      <Title title="Add News" desc="뉴스 추가하기" />
      <form onSubmit={onSubmit}>
        <table className="defaulttable">
          <tbody>
            <tr className="newsname">
              <td>뉴스 제목</td>
              <td>
                <input
                  type="text"
                  name="n_title"
                  value={formData.n_title}
                  onChange={onChange}
                />
              </td>
            </tr>
            <tr>
              <td>등록 날짜</td>
              <td>
                <input
                  type="text"
                  name="n_date"
                  value={formData.n_date}
                  onChange={onChange}
                />
              </td>
            </tr>
            <tr>
              <td>간략설명</td>
              <td>
                <input
                  type="text"
                  name="n_titledesc"
                  value={formData.n_titledesc}
                  onChange={onChange}
                />
              </td>
            </tr>
            <tr>
              <td>분류</td>
              <td>
                <select
                  name="n_category"
                  value={formData.n_category}
                  onChange={onChange}
                >
                  <option value="넥슨게임즈">넥슨게임즈</option>
                  <option value="블루아카이브">블루아카이브</option>
                  <option value="서든어택">서든어택</option>
                  <option value="베일드 엑스퍼트">베일드 엑스퍼트</option>
                  <option value="히트2">히트2</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>이미지</td>
              <td>
                <input type="file" name="n_image" onChange={onChangeImage} />
                {formData.n_image && (
                  <div>
                    <img
                      src={`${API_URL}/upload/news/${formData.n_image}`}
                      width="80px"
                      alt=""
                    />
                  </div>
                )}
              </td>
            </tr>
            <tr>
              <td>상세설명글</td>
              <td>
                <textarea
                  name="n_desc"
                  value={formData.n_desc}
                  onChange={onChange}
                ></textarea>
              </td>
            </tr>
            <tr className="writenews_btn">
              <td colSpan={2}>
                <button type="submit">등록</button>
                <button type="reset">취소</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default WriteNews;