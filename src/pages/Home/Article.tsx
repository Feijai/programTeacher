import React from 'react'
import styled from 'styled-components'
import p1 from '../../assets/article01.jpg'
import p2 from '../../assets/article02.jpg'
import p3 from '../../assets/article03.jpg'
import TitleComp from '../../component/TitleComp'

const ArticleCss = styled.div`
    .articleCards{
        margin-top:48px;
        column-gap:24px;
        row-gap:24px;
    }
    .articleCard{
        padding: 32px;
        width:calc(33.33% - 16px);
        position: relative;
        img{
            width:100%;
        }
        .cardTitle{
            margin-top:16px;
        }
        .cardText{
            margin-top:16px;
        }
        .more{
            margin-top:16px;
            text-align:end;
            button{
                background-color:#1C1C1C;
                color:#62DB54;
                font-family:'Azeret Mono';
                border:0px;
            }
        }

        :hover{
            .border_corner{
                z-index: 3;
                position: absolute;
                width: 32px;
                height: 32px;
                background: rgba(0,0,0,0);
                border: 1px solid #62DB54;
            }
            .border_corner_left_top{
                top: -2px;
                left: -2px;
                border-right: none;
                border-bottom: none;
                border-top-left-radius: 6px;
            }
            .border_corner_right_top{
                top: -2px;
                right: -2px;
                border-left: none;
                border-bottom: none;
                border-top-right-radius: 6px;
            }
            .border_corner_left_bottom{
                bottom: -2px;
                left: -2px;
                border-right: none;
                border-top: none;
                border-bottom-left-radius: 6px;
            }
            .border_corner_right_bottom{
                bottom: -2px;
                right: -2px;
                border-left: none;
                border-top: none;
                border-bottom-right-radius: 6px;
            }
        }
    }
    @media (max-width: 768px) {
        .container{
            padding:40px 12px;
        }
        .articleCards{
            margin-top:40px;
            flex-wrap:wrap;
            flex-direction: column
        }
        .articleCard{
            pointer-events: none;
            padding:0px;
            width:100%
        }
    }

`

const data = [
    { pic: p1, title: '2022 前端開發者學習地圖', text: "轉職為前端的這條職業路上該如何發展？本篇為前端開發者提供學習地圖參考" },
    { pic: p2, title: '軟體工程師有哪些類別', text: "軟體工程師領域廣闊，許多人仍然對此相關職務感到陌生，本篇就介紹主流的軟體工程師職務" },
    { pic: p3, title: '免費 25 小時前端教學資源', text: "這篇文章規劃了適合「前端工程師」的學習地圖，讓新進的學生了解如何選擇課程" },
]

// const data = { pic: p1, title: '2022 前端開發者學習地圖', text: "轉職為前端的這條職業路上該如何發展？本篇為前端開發者提供學習地圖參考" }

interface ArticleCardProps {
    pic: string;
    title: string;
    text: string;
}

const ArticleCard: React.FC<ArticleCardProps> = (data) => {
    return (
        <div className="articleCard">
            {/* border 四個角 */}
            <div className="border_corner border_corner_left_top"></div>
            <div className="border_corner border_corner_right_top"></div>
            <div className="border_corner border_corner_left_bottom"></div>
            <div className="border_corner border_corner_right_bottom"></div>

            <img src={data.pic} alt="" />
            <div className="cardTitle s18 titleWord">{data.title}</div>
            <div className="cardText s16">{data.text}</div>
            <div className="more"><button className='s18'>MORE</button></div>
        </div>
    )
}

export default function Article() {
    return (
        <ArticleCss className='globalBGBlack2 '>
            <div className="container paddingTB80">
                <TitleComp title={['文章分享']} />
                <div className="articleCards d-flex">
                    {data.map((ele, idx) => (
                        <ArticleCard key={idx} {...ele} />
                    ))}
                </div>
            </div>
        </ArticleCss >
    )
}
