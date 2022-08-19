import React from 'react'
import styled from 'styled-components'

const WantLearnCss = styled.div`
    padding:80px 0px;
    .header{
        text-align:center;
        position:relative;
        padding-bottom:16px;
        .headerBorder{
            background-color:#62DB54;
            width:50px;
            height:3px;
            position:absolute;
            bottom:0;
            left:50%;
            transform:translate(-50%)
        }
    }
`

export default function WantLearn() {
    return (
        <WantLearnCss className='globalBGGray '>
            <div className="container">
                <div className="header">
                    <h2 className="s28 titleWord">你想要學習的程式，都在這裡</h2>
                    <div className="headerBorder"></div>
                </div>
            </div>
        </WantLearnCss>
    )
}
