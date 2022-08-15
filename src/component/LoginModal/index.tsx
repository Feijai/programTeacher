import React from 'react';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components'
import FbIcon from '../../assets/icon_fb'
import GoogleIcon from '../../assets/icon_google'

interface LoginModalProps {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}

const LoginModalCss = styled.div`
    border-color:#FFFFFF;
    background-color:#2D2D2D;
    .header{
        padding:24px;
        position:relative;
        .title{
            font-size:24px;
            font-weight:bold;
            line-height:1.5;
            left:48%;
        }
        .btn-close{
            position:absolute;
            right:29px;
        }

    }
    .container{
        margin-top:8px;
        margin-bottom:60px;
        width: 331px;
        flex-wrap:wrap;
        flex-direction:column;
        row-gap:24px;
        input{
            border-radius:4px;
            background-color:#1C1C1C;
            width:100%;
            border:1px solid #FFFFFF;
            height:40px
        }
        button{
            width:100%;
            border-radius:8px;
            height:42px;
        }
    }

    .otherLogin{
        width: 331px;
        margin: 27px auto;
        border-top: 1px solid black;
        position: relative;
        .loginWay{
            width: 128px;
            text-align: center;
            position: absolute;
            top: -12px;
            left: 32%;
        }   
    }
    .otherButton{
        margin-bottom:40px;
        button{
            border-color:white;
            border-radius:4px;
            width:100%;
            position:relative;
            svg{
                position:absolute;
                left:32px;
                top: 50%;
                transform: translate(-50%,-50%);
            }
        }
    }
    @media (max-width: 575px){
        .container{
            width:100%;
        }
    }
`


const LoginModal: React.FC<LoginModalProps> = ({ show, setShow }) => {
    const handleClose = () => {
        setShow(false)
    }
    return (
        <Modal show={show} onHide={handleClose} centered size="lg">
            <LoginModalCss className=''>
                <div className='header d-flex justify-content-center'>
                    <div className='title fontWhite'>
                        登入
                    </div>
                    <button type="button" className="btn-close btn-close-white" aria-label="Close"
                        onClick={handleClose} />
                </div>

                <div className="container fontLightGray d-flex">
                    <div className='s16'>信箱 <input type="text" className='s16 fontLightGray' /></div>

                    <div className='s16'>密碼 <input type="password" className='s16 fontLightGray' /></div>
                    <button className='linearLR fontWhite s18' onClick={handleClose}>登入</button>
                </div>

                <div className="otherLogin ">
                    <div className="loginWay fontLightGray s16 globalBGGray">其他登入方式</div>
                </div>

                <div className="container d-flex otherButton">
                    <button className='fb globalBGGray fontWhite'>
                        <FbIcon name={'fbLogo'} />
                        <span>Facebook 登入</span>
                    </button>
                    <button className='google globalBGGray fontWhite'>
                        <GoogleIcon name={'GoogleLogo'} />
                        <span>Google 登入</span>
                    </button>
                </div>
            </LoginModalCss>
        </Modal >

    );
}

export default LoginModal;