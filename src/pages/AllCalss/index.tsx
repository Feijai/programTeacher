import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'

import p1 from '../../assets/teacher01.jpg'
import p2 from '../../assets/teacher02.jpg'
import p3 from '../../assets/teacher03.jpg'
import p4 from '../../assets/teacher04.jpg'

const AllCalssCss = styled.div`
    .container{
        padding-top:42px;
    }
    .languageSwiper{
        display:flex;
        .swiper-slide{
            width:auto!important;
        } 
        button{
            padding:16px 32px;
            border-radius:8px;
            border:1px solid white;
            color:white;
        }
    }
    .classCards{
        margin-top:48px;
    }
    
`

const CardCss = styled.div`
    padding:48px;
    display:flex;
    border-radius:24px;
    .avator{
        text-align:center;
        img{
            width:100px;
            height:100px;
            border-radius:50px;
            margin-bottom:8px;
        }
    }
    .mid{
        margin-left:48px;
        .language{
            margin-top:4px;
        }
        .text{
            margin-top:8px;
        }
    }
    .payment{
        max-width:168px;
        margin-left:88px;
        text-align:center;
        button{
            border-radius:8px;
            width:100%;
            height:42px;
        }
        .introduce{
            margin-top:16px;
            border:1px solid white;
            color:white
        }
        .reserve{
            margin-top:8px;
            border:0px;
        }
    }
    @media (max-width: 768px) {
        flex-direction: column;
        padding:32px 24px;
        .avator{
            span{
                display:block;
            }
        }
        .mid{
            margin:0px;
            margin-top:24px;
        }
        .payment{
            margin:0px;
        }
    }
`

const category = [{ id: 0, text: '所有課程' }, { id: 1, text: '行動應用開發' }, { id: 2, text: '資料庫/資料科學' },
{ id: 3, text: '前端語言' }, { id: 4, text: '後端語言' }, { id: 5, text: '作業系統伺服器' }]

const data = { img: p1, name: 'Belinda', title: '基礎前端 - HTML', languageType: '前端語言', languageId: 3, text: '帶領無基礎的平民老百姓，從最基礎的 HTML 語法出發，使用最淺顯易懂的語言與生活隨處可見的例子，輕鬆進入網頁架設的世界，完成一個基礎的網頁架設。', money: 1600 }


const ClassCard = () => {
    return (
        <CardCss className="classCard globalBGGray">
            <div className='avator'>
                <img src={data.img} alt="" className='' />
                <span className='s16'>{data.name}</span>
            </div>
            <div className="mid">
                <div className='title s24 titleWord'>{data.title}</div>
                <h3 className='language s16 fontColorGreen'>{data.languageType}</h3>
                <div className='text s16'>{data.text}</div>
            </div>
            <div className="payment ">
                <div className="time s16">50分鐘</div>
                <h2 className="money s32">{`NT$${data.money}`}</h2>
                <button className="introduce s18 globalBGGray ">課程介紹</button>
                <button className='reserve s18 linearLR'>立即預約</button>
            </div>
        </CardCss>
    )
}

export default function AllCalss() {
    const handleClick = (id: number): void => {

    }
    return (
        <AllCalssCss className='globalBGBlack2'>
            <div className="container ">
                <Swiper watchSlidesProgress={true} slidesPerView={'auto'} spaceBetween={16} className='languageSwiper'>
                    {category.map((ele, idx) => (
                        <SwiperSlide key={idx}><button onClick={() => { handleClick(ele.id) }}
                            className="globalBGBlack2">{ele.text}</button></SwiperSlide>
                    ))}
                </Swiper>
                <div className="classCards">
                    <ClassCard />
                </div>
            </div>
        </AllCalssCss>
    )
}
