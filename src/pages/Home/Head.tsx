import React from 'react'
import styled from 'styled-components'
import bg_home from '../../assets/bg_home.jpg'
import bg_home_mobile from '../../assets/bg_home_mobile.jpg'

const HeadCss = styled.div`
    height:680px;
    background-image:url(${bg_home});
    background-position: center center;
    background-size: cover;
    .container{
        max-width:640px;
        height:259px;
        border:1px solid white;
        padding:41px 74px;
        position: relative;
        .context{
            margin-top:24px;
            text-align:center;
        }
        .leftTop{
            left:-5px;
            top:-5px;
        }
        .leftBottom{
            left:-5px;
            bottom:-5px;
        }
        .rightTop{
            right:-5px;
            top:-5px;
        }
        .rightBottom{
            right:-5px;
            bottom:-5px;
        }

    }
    .title{
        span{
            display:block;
            text-align:center;
            font-weight:bold;
        }
        .linearTD{
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
    @media (max-width: 655px) {
        background-image:url(${bg_home_mobile});
        height:336px;
        padding-left:12px;
        padding-right:12px;
        .container{
            max-width:336px;
            height:166px;
            padding:32px 27px;
            .title{
                font-size:24px;
            }
            .context{
                font-size:14px;
            }
        }
    }
`

export default function Head() {
    return (
        <HeadCss className="d-flex justify-content-center align-items-center fontWhite">
            <div className="container globalBGBlack2">
                <div className='leftTop whiteBox'/>
                <div className='leftBottom whiteBox'/>
                <div className='rightTop whiteBox'/>
                <div className='rightBottom whiteBox'/>
                <h1 className='title s48'>
                    <span className=' linearTD'>全台最豐富的程式家教</span>
                    <span className=''>在實踐中化理想為現實</span>
                </h1>
                <h4 className='context s18'>
                    全台最專業師資｜到府程式家教｜客製化課程
                </h4>
            </div>
        </HeadCss>
    )
}
