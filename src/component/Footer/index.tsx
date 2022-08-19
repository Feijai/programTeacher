import React from 'react'
import styled from 'styled-components'

const FooterCss = styled.div`
    height:67px;
    div{
        height:100%;
    }
`

export default function Footer() {
    return (
        <FooterCss className='globalBGDark fontDarkGray'>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    Coding Home © 2022 All Rights Reserved
                </div>
            </div>
        </FooterCss>
    )
}
