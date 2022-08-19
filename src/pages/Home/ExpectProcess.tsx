import React from 'react'
import styled from 'styled-components'

const ExpectProcessCss = styled.div`
    .header{
        height:56px;
        font-weight:bold;
        text-align:center;
        position: relative;
        .borderBottom{
            width: 50px;
            height:3px;
            background-color:#62DB54;
            position:absolute;
            left:50%;
            bottom:0;
            transform: translate(-50%);
        }
    }
    .row{
        margin-top:74px;
        justify-content:space-between;
    }
    .expectCard{
        border-radius:12px;
        border: 1px solid white;
        height:199px;
        max-width:calc(25% - 18px); 
        position:relative;
        padding-left:48px;
        span{
            width:62px;
            font-family:'Azeret Mono';
            font-weight:bold;
            line-height:inherit;
            position:absolute;
            text-align:center;
            left:48px;
            top:-28px;
        }
        .title{
            margin-top:48px;
        }
        .text{
            margin-top:16px;
        }
    }
    @media (max-width: 1200px) {
        .expectCard{
            max-width:calc(50% - 12px); 
        }
    }
    @media (max-width: 576px) {
        .container{
            padding:40px 12px;
        }
        .expectCard{
            max-width:100%; 
        }
        .header {
            font-size:24px;
        }
        .row{
            margin-top:50px;
            row-gap:50px;
        }
    }
`

const data = [{ num: '01', title: '預約', text: ['線上預約指定課程與老師', '由老師安排專屬課程'] },
{ num: '02', title: '付款', text: ['支援各種支付方式', '提供12期分期付款'] },
{ num: '03', title: '上課', text: ['地點由您指定', '密集性一對一教學'] },
{ num: '04', title: '提供滿意度', text: ['提供課程滿意度及回饋', '讓我們持續成長與進步'] },
]

interface ExpectCardProps {
    num: string;
    title: string;
    text: string[]
}

const ExpectCard: React.FC<ExpectCardProps> = (props) => {
    const { num, title, text } = props
    return (
        <div className="expectCard text-align-center col-xl-6 col-sm-12">
            <span className='cardNumber s48 fontColorGreen globalBGBlack2'>{num}</span>
            <div className="title s24">{title}</div>
            <div className="text s18">{text.map((ele, idx) => (
                <React.Fragment key={idx}>
                    {ele}
                    {text.length > idx && <br />}
                </React.Fragment>
            ))}</div>
        </div>
    )
}

export default function ExpectProcess() {
    return (
        <ExpectProcessCss className='globalBGBlack2'>
            <div className="container paddingTB80">
                <div className="header s28"><h2>預期上課流程</h2><div className='borderBottom'></div></div>
                <div className="row g-0 row-gap">
                    {data.map((ele, idx) => (
                        <ExpectCard {...ele} key={idx} />
                    ))}

                </div>
            </div>

        </ExpectProcessCss>
    )
}
