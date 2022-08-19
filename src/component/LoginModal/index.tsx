import React from 'react';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components'
import FbIcon from '../../assets/icon_fb'
import GoogleIcon from '../../assets/icon_google'
import { ModalProps } from '../../globalInterFace'

const LoginModalCss = styled.div`
    border-color:#FFFFFF;
    background-color:#2D2D2D;
    .header{
        padding:24px;
        position:relative;
        display:flex;
        .title{
            font-size:24px;
            font-weight:bold;
            line-height:1.5;
            left:48%;
        }
        .closeBtn{
            position:absolute;
            right:29px;
        }
    }
    .container{
        width: 331px;
        flex-wrap:wrap;
        flex-direction:column;
        row-gap:24px;
        padding-left:0px;
        padding-right:0px;
    }
    .loginForm{
        margin-top:8px;
        margin-bottom:60px;
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
            border: 0px;
        }
    }

    .sperater{
        max-width: 331px;
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
            height:40px;
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
        .header{
            display:block;
            margin:16px;
            .closeBtn{
                position:unset;
                text-align:end
            }
            .title{
                text-align:center;
            }
            
        }
        .container{
            width:100%;
            padding-right:24px;
            padding-left:24px;
        }
        .loginForm{
            margin-bottom:36px;
        }
        .otherButton{
            margin-bottom:48px;
        }
        .sperater{
            max-width:calc(100% - 48px);
            .loginWay{
                left: 38%;
            }
        }
    }
`


const LoginModal: React.FC<ModalProps> = ({ modalState, getLoginModal }) => {
    const handleClose = () => {
        getLoginModal()
    }
    return (
        <Modal show={modalState} onHide={handleClose} centered size="lg">
            <LoginModalCss className=''>
                <div className='header justify-content-center'>
                    <div className='closeBtn'>
                        <button type="button" className="btn-close btn-close-white" aria-label="Close"
                            onClick={handleClose} />
                    </div>
                    <div className='title'>
                        登入
                    </div>

                </div>

                <div className="container fontLightGray d-flex loginForm">
                    <div className='s16'>信箱 <input type="text" className='s16 fontLightGray' /></div>

                    <div className='s16'>密碼 <input type="password" className='s16 fontLightGray' /></div>
                    <button className='linearLR s18' onClick={handleClose}>登入</button>
                </div>

                <div className="sperater ">
                    <div className="loginWay fontLightGray s16 globalBGGray">其他登入方式</div>
                </div>

                <div className="container d-flex otherButton">
                    <button className='fb globalBGGray'>
                        <FbIcon name={'fbLogo'} />
                        <span>Facebook 登入</span>
                    </button>
                    <button className='google globalBGGray'>
                        <GoogleIcon name={'GoogleLogo'} />
                        <span>Google 登入</span>
                    </button>
                </div>
            </LoginModalCss>
        </Modal >

    );
}

export default LoginModal;