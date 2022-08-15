import React, { useState } from 'react'
import styled from 'styled-components'
import p1 from '../../assets/logo.svg'
import Button from 'react-bootstrap/Button';
import LoginModal from '../LoginModal'

const HeaderCss = styled.div`
    padding:24px 70px;
    .logo{
        height: 42px;
        img{
            height:100%;
            object-fit: cover;
        }
    }
    .headFc{
        font-size:18px;
        column-gap:48px;
        .material-icons{
            margin-right:6px;
        }
        button{
            border-color:#2D2D2D;
            background-color:inherit;
        }
    }
`

const Header: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);

    return (
        <HeaderCss className='globalBGGray fontWhite '>
            <div className="row p-6">
                <div className="logo col-lg ">
                    <img src={p1} alt="" />
                    <span></span>
                </div>
                <div className="headFc col-lg d-flex justify-content-end align-items-center">
                    <Button >首頁</Button>
                    <Button>課程介紹</Button>
                    <Button className='d-flex' onClick={() => { setShow(true) }}>
                        <span className="material-icons ">
                            account_circle
                        </span>
                        登入
                    </Button>
                </div>
            </div>
            <LoginModal show={show} setShow={setShow} />
        </HeaderCss>
    )

}

export default Header