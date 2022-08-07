import Image from 'next/image';
import time from '../../../public/uploads/time.jpg';
import axios from 'axios';
import { useState } from 'react';

const third = () => {

  const [name ,SetName] = useState('');
  const [lastName ,SetLastName] = useState('');
  const [number ,setNumber] = useState('');
  const [Type ,SetType] = useState('ویزیت و مشاوره');
  const [err , setErr] = useState()

  const Post = async (e) => {
    e.preventDefault()
    const post = {name ,lastName , number ,Type};

    try {

      axios.post('http://localhost:27017/' , post).then(res =>{
        if(res.data.errMessage){
          setErr(res.data.errMessage)
        }else{
            console.log(res.data)
          }
      })

    }catch(err){
      setErr(err.response.data.err)
    }
  };
  console.log(err)
    return (
        <div className="third-con">
            <div className="time">
                <div className="time-left">
                    <Image priority src={time} layout={"fill"}  />
                </div>
                <div className="time-form">
                    <h1>دریافت نوبت آنلاین</h1>
                    <input type="text" placeholder="نام" onChange={(e) => SetName(e.target.value)} />
                    <input type="text" placeholder="نام خانوادگی" onChange={(e) => SetLastName(e.target.value)} /> 
                    <input type="number"  placeholder="شماره تلفن همراه" onChange={(e) => setNumber(e.target.value)}/>
                    <select placeholder="نوع درخواست" onChange={(e) => SetType(e.target.value)}>
                        <option value={"ویزیت و مشاوره"}>ویزیت و مشاوره</option>
                        <option value={"کامپوزیت و لمینت"}>کامپوزیت و لمینت</option>
                        <option value={"پر کردن و عصب کشی"}>پر کردن و عصب کشی</option>
                        <option value={"اورتودنسی"}>اورتودنسی</option>
                        <option value={"فک و صورت"}>فک و صورت</option>
                        <option value={"خدمات اطفال"}>خدمات اطفال</option>
                    </select>
                    <button onClick={Post}>ارسال نوبت</button>
                </div>
            </div>
            <div className="doctors-con">
              <div className="blue-tape"></div>
              <div className="green-tape"></div>
              <h1>کادر پزشکی کلینیک سامان</h1>
              <div className="doc-holder">
                <div className="doc-card">
                
                      <img className="doc-place" src='/uploads/doc1.jpg' />
                      <div className="doc-social">
                        <a>
                          <img src='/uploads/insta.png' />
                        </a>
                        </div>
                      <p>دکتر عصمت جعفرپور</p>
                </div>
                
                <div className="doc-card">
                      <img className="doc-place" src='/uploads/doc2.jpg' />
                      <p>دکتر نازنین نوربخش</p>
                <div className="doc-social">
                    <a>
                      <img src='/uploads/insta.png' />
                    </a>
                </div>
                </div>
              </div>
            </div>
            
        </div>
    )
}

export default third
