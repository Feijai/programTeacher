import React from 'react'
import styled from 'styled-components'

const HeaderCss = styled.div`
    padding:24px;
`
const Header: React.FC = () => {

    return (
        <HeaderCss>
            <div className="logo">
                <img src="" alt="" />
                <span></span>
            </div>
            <div className="headFunc">
                <span>首頁</span>
                <span>課程介紹</span>
                <span>
                    <span className="material-icons">
                        account_circle
                    </span>
                    登入</span>
            </div>
        </HeaderCss >
    )

}

export default Header