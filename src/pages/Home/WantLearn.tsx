import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import TitleComp from '../../component/TitleComp';

const WantLearnCss = styled.div`
    padding:80px 0px;
    .title2{
            display:none;
    }
    .swiper {
        margin-top:48px;
        max-width: 1440px;
        padding-left:24px;
    }
    .swiper-wrapper{
        display:flex;
    }
    .swiper-slide{
        padding:24px 32px;
        border:1px solid white;
        border-radius:8px;
        width:auto!important;
    }
    @media (max-width:768px) {
        padding:40px 0px;
        .title2{
            display:block;
        }
        .title{
            display:none;
        }
        .swiper {
            margin-top:24px;
            padding-left:17px;
        }
        .swiper-slide{
            font-size:16px;
            padding:16px;
        }
    }
`
const data = ['JavaScript', 'HTML/CSS', 'SQL', 'JAVA', 'Bash/Shell', 'Python', 'Android', 'IOS', 'PHP', 'C++', '.net', 'Dart', 'Flutter']

const SwiperComponent: React.FC = () => {
    return (<Swiper watchSlidesProgress={true} slidesPerView={'auto'} spaceBetween={16}>
        {data.map((ele, idx) => (
            <SwiperSlide key={idx} className="s18" >{ele}</SwiperSlide>
        ))}
    </Swiper>)
}

export default function WantLearn() {
    return (
        <WantLearnCss className='globalBGGray '>
            <div className="container">
                <div className="header">
                    <TitleComp title={['你想要學習的程式，都在這裡']} name={'title'}/>
                    <TitleComp title={['你想要學習的程式', '都在這裡']} name={'title2'}/>
                </div>
            </div>
            <SwiperComponent />

        </WantLearnCss>
    )
}
