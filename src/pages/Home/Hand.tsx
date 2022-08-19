import React from 'react'
import styled from 'styled-components'


const HandCss = styled.div`
  padding:80px 72px;
  .row{
    align-items:center;
    justify-content:space-between;
  }
  .title{
    max-width:calc(25% - 18px); 
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
    max-width:calc(25% - 18px); 
    height:264px;
    padding:48px 24px;
    text-align:center;
    :hover{
      background-color:#202020;
      border-radius:12px;
      border: 1px solid #62DB54;
    }
    .material-icons{
      font-size: 40px;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .cardTitle{
      margin-top:28px;
      font-weight:bold;
    }
    .cardContent{
      margin-top:16px;
    }
  }
  @media (max-width: 960px) {
    .title{
      max-width:calc(50% - 12px);
      text-align:center;
      .titleFooter{
        left:50%;
        transform:translate(-50%);
      }

    }
    .handCard{
      max-width:calc(50% - 12px);
    }
  }
  @media(max-width: 576px) {
    padding:40px 12px;
    .row{
      row-gap:24px;
    }
    .title{
      max-width:100%;
    }
    .handCard{
      max-width:100%;
      background-color:#202020;
      border-radius:12px;
      border: 1px solid #62DB54;
    }
  }
`

interface HandCardProps {
  icon: string[]
  title: string
  text: string[]
}

const data = [
  { icon: ['last_page'], title: '超過 100 種專業課程', text: ['學習標準化的電腦形式語言', '培養運算思維和邏輯素養'] },
  { icon: ['rocket_launch'], title: '高效學習', text: ['客製化專屬課表', '讓學習變簡單'] },
  { icon: ['location_on'], title: '指定地點', text: ['專業老師到你指定的地點', '一對一高效學習'] },
]


const HandCard: React.FC<HandCardProps> = (props) => {
  const { icon, title, text } = props
  return (
    <div className="handCard col-xl-3 col-lg-6 s18">
      <span className="material-icons material-symbols-outlined linearTD " >
        {icon}
      </span>
      <div className="cardTitle">
        <h3>{title}</h3>
      </div>
      <div className="cardContent ">
        {text.map((ele, textIdx) => (
          <React.Fragment key={textIdx}>
            <span>{ele}</span>
            {text.length > textIdx && <br />}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}


export default function Hand() {
  return (
    <HandCss className='globalBGGray d-flex'>
      <div className="container align-self-center">
        <div className="row">
          <div className="title col-xl-3 col-lg-6">
            <h2 className='s24'>手把手帶你<br />親自到家教到會</h2>
            <div className="titleFooter"></div>
          </div>
          {data.map((ele, idx) => (
            <HandCard {...ele} key={idx} />
          ))}
        </div>
      </div>
    </HandCss>
  )
}
