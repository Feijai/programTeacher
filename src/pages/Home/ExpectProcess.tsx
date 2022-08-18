import React from 'react'
import styled from 'styled-components'

const ExpectProcessCss = styled.div`
    height:489px;
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
`

export default function ExpectProcess() {
    return (
        <ExpectProcessCss className='globalBGBlack2'>
            <div className="container paddingTB80">
                <div className="header fontWhite s28"><h2>預期上課流程</h2><div className='borderBottom'></div></div>
            </div>
        </ExpectProcessCss>
    )
}
