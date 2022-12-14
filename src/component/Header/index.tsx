import React from 'react'
import styled from 'styled-components'
import p1 from '../../assets/logo.svg'
import Button from 'react-bootstrap/Button';
import { ModalProps } from '../../globalInterFace'
import p2 from '../../assets/logo2.svg';
import { Link } from "react-router-dom";

const HeaderCss = styled.div`
    padding:24px 70px;
    border-width: 2px;
    border-style: solid;
    border-image:linear-gradient(to right,#09ACF5 50%, #62DB54 50%, #62DB54 100%)  0  0 100% 0;
    .logo{
        height: 42px;
        .img1{
            height:100%;
            object-fit: cover;
        }
        .img2{
            display:none;
            height:100%;
            object-fit: cover;
        }
    }
    .pcHead{
        font-size:18px;
        column-gap:48px;
        display:flex;
        .material-icons{
            margin-right:6px;
        }
        button{
            border-color:#2D2D2D;
            background-color:inherit;
        }
    }
    .mbMenu{
        width:24px;
        height:24px;
        display:none;
    }
    a{
        text-decoration: none;
        color:white;
    }
    @media (max-width: 827px) {
        .logo{
            .img1{
                display:none;
            }
            .img2{
                display:block;
            }
        }
        .headFc{
            display: flex;
            justify-content:end;
        }
        .pcHead{
            display:none;
        }
        .mbMenu{
            display:block;
        }
    }
`

const Header: React.FC<ModalProps> = (props) => {
    const { getLoginModal } = props
    return (
        <HeaderCss className='globalBGGray '>
            <div className="row p-6">
                <div className="logo col-6 ">
                    <img src={p1} alt="" className='img1' />
                    <img src={p2} alt="" className='img2' />
                </div>

                <div className="col-6 align-self-center headFc">
                    <div className='pcHead justify-content-end align-items-center'>
                        <Link to="/"><Button>??????</Button></Link>
                        <Link to="/class"><Button>????????????</Button></Link>
                        <Button className='d-flex' onClick={() => { getLoginModal() }}>
                            <span className="material-icons">
                                account_circle
                            </span>
                            ??????
                        </Button>
                    </div>
                    <span className="material-icons mbMenu">drag_handle</span>
                </div>
            </div>
        </HeaderCss>
    )

}

export default Header