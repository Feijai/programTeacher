import React, { useRef } from 'react'
import styled from 'styled-components'
import bg from '../../assets/bg_share.jpg'
import TitleComp from '../../component/TitleComp'
import p1 from '../../assets/student01.jpg'
import p2 from '../../assets/student02.jpg'
import p3 from '../../assets/student03.jpg'
import p4 from '../../assets/student04.jpg'
import p5 from '../../assets/share.jpg'
import SwiperClass, { Pagination, Navigation } from "swiper";
import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react";

const BeteacherCss = styled.div`
    background-image:url(${bg});
    background-position: center center;
    background-size: cover;
    .midSwiper{
        margin-top:48px;
    }
`


const ExperienceCardCss = styled.div`
    position:relative;
    .cardPic{
        max-width:525px;
        max-height:381px;
        margin-left:10px;
        z-index:2;
    }
    .pictureBg{
        position:absolute;
        max-width:525px;
        max-height:381px;
        top:10px;
        left:0;
        z-index:1;
        border-radius: 24px;
        border: 1px solid #7C7E77;
    }
    .userCardOutside{
        position:absolute;
        right:0;
        bottom:0;

    } 
    .userCard{
        max-width:416px;
        position:relative;
        background-color:#FFFFFF;
        border-radius:24px 24px 24px 0px;
        padding:32px;
        color:black;
        z-index:3;
        left:0;
        img{
            position:absolute;
            width:100px;
            height:100px;
            border-radius:50px;
            top:-30%;
            right:32px;
            transform: translate(-50%);
        }
        .cardText{
            margin-top:16px;
        }
    } 
`

const data = [
    { pic: p5, student: p1, title: '老師很有耐心', text: '老師手把手的細心教學，用手繪圖，以淺顯易懂的方式，讓零網頁基礎的我也能快速了解網頁的架構與原理，學網頁變得有趣多了！' },
    { pic: p5, student: p2, title: '老師很有耐心', text: '老師手把手的細心教學，用手繪圖，以淺顯易懂的方式，讓零網頁基礎的我也能快速了解網頁的架構與原理，學網頁變得有趣多了！' },
    { pic: p5, student: p3, title: '老師很有耐心', text: '老師手把手的細心教學，用手繪圖，以淺顯易懂的方式，讓零網頁基礎的我也能快速了解網頁的架構與原理，學網頁變得有趣多了！' },
    { pic: p5, student: p4, title: '老師很有耐心', text: '老師手把手的細心教學，用手繪圖，以淺顯易懂的方式，讓零網頁基礎的我也能快速了解網頁的架構與原理，學網頁變得有趣多了！' },
]

interface ExperienceProps {
    pic: string;
    student: string;
    title: string;
    text: string;
}


const Experience: React.FC<ExperienceProps> = (data) => {
    return (
        <ExperienceCardCss>
            <img src={data.pic} alt="" className='cardPic' />
            <div className="pictureBg" />
            <div className="userCardOutside">
                <div className="userCard">
                    <img src={data.student} alt="" className="user" />
                    <div className="cardTitle s18 titleWord">{data.title}</div>
                    <div className="cardText s16">{data.text}</div>
                </div>
            </div>
        </ExperienceCardCss>
    )
}

export default function Beteacher() {
    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    const swiperRef = useRef<SwiperClass>() as any
    return (
        <BeteacherCss className='paddingTB80'>
            <div className="container">
                <TitleComp title={['專屬你的學習課程', '超過 3000 位學員得到了程式超能力']} />
                <Swiper
                    onInit={(core: SwiperCore) => {
                        swiperRef.current = core.el
                    }}
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    navigation={true}
                    // modules={[Pagination, Navigation]}
                    pagination={pagination}
                    modules={[Pagination]}
                    className="midSwiper"
                >
                    
                    {data.map((ele, idx) => {
                        console.log('===swiperRef===', swiperRef)
                        return (
                            <SwiperSlide key={idx}><Experience {...ele} /></SwiperSlide>
                        )
                    })}
                </Swiper>
                <div className="becomeUs">
                    <span className='material-icons material-symbols-outlined'></span>
                    <div className='joinUs'>
                        <h2>加入我們成為導師</h2>
                        <div className="text">歡迎各大程式大神加入我們，用知識在世界留下一點影響力。</div>
                    </div>
                </div>
                <button>立即預約</button>
            </div>


        </BeteacherCss>
    )
}
