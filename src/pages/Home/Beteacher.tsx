import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import bg from '../../assets/bg_share.jpg'
import TitleComp from '../../component/TitleComp'
import p1 from '../../assets/student01.jpg'
import p2 from '../../assets/student02.jpg'
import p3 from '../../assets/student03.jpg'
import p4 from '../../assets/student04.jpg'
import p5 from '../../assets/share.jpg'
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const BeteacherCss = styled.div`
    background-image:url(${bg});
    background-position: center center;
    background-size: cover;
    .swiper{
        margin-top:48px;
        height:429px;
        width:100%;
    }
    .swiper-slide{
        position:relative;
    }
    .swiperFunc{
        position:absolute;
        display:flex;
        column-gap:8px;
        margin-top:24px;
        bottom:0;
        left: calc(100% / (925 / 196));
        z-index:3;
        .swiper-pagination-clickable{
            display:flex;
            column-gap:8px;
            align-self:center;
        }
        .swiper-pagination-bullet{
            width:8px;
            height:8px;
            background-color: #62DB54;
            display:block;
            border-radius:50px;
        }
        .swiper-pagination-bullet-active{
            width:16px;
        }
        button{
            background-color:#000000;
            color:#62DB54;
            span{
                font-size:20px;
            }
        }
    }
    .becomeUs{
        margin-top:160px;
        background-color:#202020;
        border-radius:24px;
        display:flex;
        justify-content:space-between;
        padding:48px;
        .material-icons{
            font-size:80px;
            color:#FFFFFF;
        }
        .joinUs{
            margin-left:48px;
        }
        button{
            max-width:136px;
            max-height:42px;
            padding:8px 32px;
            align-self: center;
            background-color:inherit;
            border:1px solid white;
            color:white;
            border-radius:8px;
        }
    }
    @media (max-width: 992px) {
        .swiperFunc{
            left: calc(100% / 7);
        }
        .becomeUs{
            flex-direction:column;
            text-align:center;   
            margin-top:40px;    
            padding:40px;

            .header{
                flex-direction:column;
            }
            .joinUs{
                margin-top:24px;
            }
            .text{
                margin-top:24px;
            }
            button{
                margin-top:24px;
            }
        }
    }
    @media (max-width: 768px) {
        padding-top:40px;
        padding-bottom:40px;
        .swiper{
            margin-top:24px;
            height:532px;
        }
        .swiperFunc{
            bottom:40px;
            margin-top:0px;
            left:50%;
            transform:translate(-50%);
        }
    }
`


const ExperienceCardCss = styled.div`
    /* position:relative; */
    /* display:flex; */
    .cardPic{
        position:absolute;
        border-radius:24px;
        width:56.7567%;
        height:89.0443%;
        left:10px;
        top:0;
        z-index:2;
    }
    .pictureBg{
        position:absolute;
        width:56.7567%;
        height:89.0443%;
        top:10px;
        left:0;
        z-index:1;
        border-radius: 24px;
        border: 1px solid #7C7E77;
    }
    .userCardOuter{
        position:absolute;
        right:0;
        bottom:0;
        width:44.97297%;

    }
    .userCard{
        position:relative;
        background-color:#FFFFFF;
        border-radius:24px 24px 24px 0px;
        padding:32px;
        color:black;
        z-index:3;
        /* left:0; */
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

    @media (max-width: 768px) {
        height:100%;
        .pic{
            position:relative;
            height:41.91729%;
        }
        .cardPic{
            /* position:relative; */
            width:calc( 100% - 10px);
            height:calc( 100% - 10px)
        }
        .pictureBg{
            width:calc( 100% - 10px);
            height:calc( 100% - 10px)
        }

        .userCardOuter{
            width:100%;
            position:relative;
        }
        .userCard{
            margin-top:40px;
            img{
                height:80px;
                width:80px;
                top:-20%;
            }
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
            <div className="pic">
                <img src={data.pic} alt="" className='cardPic' />
                <div className="pictureBg" />
            </div>
            <div className="userCardOuter">
                <div className="userCard">
                    <img src={data.student} alt="" className="user" />
                    <div className="cardTitle s18 titleWord">{data.title}</div>
                    <div className="cardText s16">{data.text}</div>
                </div>
            </div>

        </ExperienceCardCss>
    )
}


const useSwiperRef = <T extends HTMLElement>(): [T | null, React.Ref<T>] => {
    const [wrapper, setWrapper] = useState<T | null>(null)
    const ref = useRef<T>(null)

    useEffect(() => {
        if (ref.current) {
            setWrapper(ref.current)
        }
    }, [])

    return [wrapper, ref]
}

export default function Beteacher() {
    const [paginationRef, setPaginationRef] = useState<HTMLElement | null>(null);
    const [nextEl, nextElRef] = useSwiperRef<HTMLButtonElement>()
    const [prevEl, prevElRef] = useSwiperRef<HTMLButtonElement>()

    return (
        <BeteacherCss className='paddingTB80'>
            <div className="container">
                <TitleComp title={['專屬你的學習課程', '超過 3000 位學員得到了程式超能力']} />
                <Swiper
                    loop={true}
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                        el: paginationRef,
                    }}
                    navigation={{
                        prevEl,
                        nextEl,
                    }}
                    modules={[Pagination, Navigation]}
                    className="midSwiper"
                >
                    {data.map((ele, idx) => {
                        return (
                            <SwiperSlide key={idx}><Experience {...ele} /></SwiperSlide>
                        )
                    })}
                    <div className='swiperFunc'>

                        <button ref={prevElRef}><span className="material-icons material-symbols-outlined">
                            arrow_back
                        </span></button>
                        <div ref={(node) => setPaginationRef(node)} />
                        <button ref={nextElRef}><span className="material-icons material-symbols-outlined">
                            arrow_forward
                        </span></button>
                    </div>
                </Swiper>
                <div className="becomeUs">
                    <div className='d-flex header'>
                        <span className='material-icons material-symbols-outlined'>menu_book</span>
                        <div className='joinUs'>
                            <h2 className='s28'>加入我們成為導師</h2>
                            <div className="text s18">歡迎各大程式大神加入我們，用知識在世界留下一點影響力。</div>
                        </div>
                    </div>
                    <button>立即預約</button>

                </div>
            </div>


        </BeteacherCss>
    )
}
