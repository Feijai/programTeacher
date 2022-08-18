import React from 'react'
import styled from 'styled-components'


const HandCss = styled.div`
  height:424px;
  .title{
    max-width:196px;
    font-weight:bold;
    height:96.5px;
    position:relative;
    .titleFooter{
      width:50px;
      height:3px;
      position:absolute;
      background-color:#62DB54;
      bottom:0;
      left:calc(var(--bs-gutter-x) * .5);
    }
  }
  .handCard{
    .material-icons{
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`

export default function Hand() {
  return (
    <HandCss className='globalBGGray fontWhite d-flex'>
      <div className="container align-self-center">
        <div className="row">
          <div className="title col-lg-2">
            <h2 className='s24'>手把手帶你<br />親自到家教到會</h2>
            <div className="titleFooter"></div>
          </div>
          <div className="handCards col-lg-9">
            <div className="handCard">
              <span className="material-icons material-symbols-outlined linearTD ">
                arrow_back_ios
              </span>
              <span className="material-icons material-symbols-outlined linearTD">
                arrow_forward_ios
              </span>
              <div className="cardTitle">
                <h3>超過 100 種專業課程</h3>
              </div>
              <div className="cardContent">
                <span>學習標準化的電腦形式語言 <br />培養運算思維和邏輯素養</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HandCss>
  )
}
