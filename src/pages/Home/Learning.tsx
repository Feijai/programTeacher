import React, { Component } from 'react'
import styled from 'styled-components'
import bg1 from '../../assets/info01.jpg'
import bg2 from '../../assets/info02.jpg'
import bg3 from '../../assets/info03.jpg'
import bg4 from '../../assets/info04.jpg'


const CardCss = styled.div<CardProps>`
    width:25%;
    padding:216px 48px;
    position:relative;
    .material-icons{
        font-size:30px;
    }
    .backgroundImage{
        height:100%;
        width:100%;
        background-image: url(${props => props.background});
        background-position:center center;
        position:absolute;
        top:0;
        left:0;
        z-index:-2;
    }
    .bgopacity{
        height:100%;
        width:100%;
        background-color:#1c1c1c;
        position:absolute;
        top:0;
        left:0;
        z-index:-1;
        opacity:0.9;
    }
    .title{
        margin-top:18px;
        position:relative;
        padding-bottom:16px;
        .titleFooter{
            position:absolute;
            width:50px;
            background-color:white;
            height:3px;
            left:0;
            bottom:0;
        }
        
    }
    .text{
        margin-top:32px;
        opacity:0.5;
    }

    :hover{
        .material-icons{
            color:#62DB54;
        }
        .bgopacity{
            height:100%;
            width:100%;
            background-color:#1A1A1A;
            position:absolute;
            top:0;
            left:0;
            z-index:-1;
            opacity:0.1;
        }
        .title{
            .titleFooter{
                background-color:#62DB54;
            }
        }
        .text{
            opacity:1;
        }
    }
    @media (max-width: 1000px){
        width:50%;
    }
    @media (max-width:768px){
        width:100%;
        padding:40px 72px;
        text-align:center;
        pointer-events: none; //取消hover事件
        .backgroundImage{
            background-size: cover;
        }
        .material-icons{
            color:#62DB54;
        }
        .title{
            .titleFooter{
                left:50%;
                transform: translate(-50%);
                background-color:#62DB54
            }
        }
    }

`
interface CardProps {
    background: string;
}

interface CardsProps {
    background: string;
    icon: string;
    title: string;
    text: string[];
}

const data = [{ background: bg1, icon: 'forum', title: '對症下藥，專案製作', text: ['除了可以瘋狂提問之外', '還有機會一起完成專案'] },
{ background: bg2, icon: 'tips_and_updates', title: '激發你的學習潛力', text: ['進度制課程安排&個人化學習建議', '有效管理你的學習動力'] },
{ background: bg3, icon: 'thumb_up', title: '學習效率', text: ['針對學員狀況調整內容與步調', '學習精準最有效'] },
{ background: bg4, icon: 'group', title: '一對一指導', text: ['針對學員狀況調整內容與步調', '學習精準最有效'] },
]



const Cards: React.FC<CardsProps> = (data) => {
    return (
        <CardCss className="LearningCard" background={data.background}>
            <div className="backgroundImage" />
            <div className="bgopacity" />
            <div className="icon">
                <span className='material-icons material-symbols-outlined'>{data.icon}</span>
            </div>
            <div className="title titleWord">
                <h2 className='s24'>{data.title}</h2>
                <div className='titleFooter'></div>
            </div>
            <div className="text s18">
                {data.text.map((ele, idx) => (
                    <React.Fragment key={idx}>
                        {ele}
                        {data.text.length - 1 > idx && <br />}
                    </React.Fragment>
                ))}
            </div>
        </CardCss>
    )
}

export default class Learning extends Component {
    render() {
        return (
            <div className='d-flex flex-wrap'>
                {data.map((ele, idx) => (
                    <Cards key={idx} {...ele} />
                ))}
            </div>
        )
    }
}
