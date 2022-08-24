import React from 'react'
import styled from 'styled-components'
import TitleComp from '../../component/TitleComp'
import t1 from '../../assets/teacher01.jpg'
import t2 from '../../assets/teacher02.jpg'
import t3 from '../../assets/teacher03.jpg'
import t4 from '../../assets/teacher04.jpg'

const HotClassCss = styled.div`
  .container{
      padding:80px 0px;
  }
  .classCards{
    display: flex;
    justify-content:space-between;
    margin-top:48px;
  }
  .classCard{
    background-color:#2D2D2D;
    border-radius:24px;
    max-width:306px;
    padding:24px 0px 16px 0px;
    .user{
      text-align:center;
      img{
        height:100px;
        width:100px;
        border-radius:50px;
      }
      .name{
        margin-top:8px;
        display:block;
      }
    }
    .text{
      margin-top:24px;
      padding:0px 24px;
      .cardTitle{
        min-height:58px;
        max-height:58px;
      }
      .language{
        margin-top:8px;
      }
      .context{
        display:block;
        margin-top:8px;
      }
    }
    hr{
      margin-top:32px;
      color:#C1C1C1
    }
    .cost{
      margin-top:16px;
      text-align:center;
      .money{
        margin-left:8px;
        font-family:'Azeret Mono';
      }
    }
  }
  .classBtn{
    text-align:center;
    margin-top:48px;
    .classList{
      border-radius:8px;
      color:white;
      padding:8px 32px;
    }
  }

  @media (max-width: 1400px) {
    .classCards{
      row-gap:24px;
      flex-flow:wrap;
    }
    .classCard{
      max-width:calc(50% - 12px);
    }
  }
  @media (max-width:576px) {
    .container {
      padding:40px 12px;
    }
    .classCards{
      margin-top:24px;
    }
    .classCard{
      max-width:100%;
      .text{
        .cardTitle{
          min-height:auto;
          max-height:auto;
        }
      }
    }
    .classBtn{
      margin-top:24px;
    }
  }
`

const data = [{ photo: t1, name: 'Belinda', title: '基礎前端 - HTML', language: '前端語言', text: '帶領無基礎的平民老百姓，從最基礎的 HTML 語法出發，使用最淺顯易懂的語言與生活隨處可見的例子...', money: 1600 },
{ photo: t2, name: 'Guava', title: '2022 Python 全攻略｜從入門到實務', language: '後端語言', text: 'Python支援多種程式設計範式，包括函數式、指令式、反射式、結構化和物件導向程式設計，它擁有動態...', money: 2200 },
{ photo: t3, name: 'Joe', title: '活用 Line Bot ｜APP 開發到上架完整實戰攻略', language: '行動應用開發', text: 'Line Bot 可用於實用的目的，如客戶服務或資訊獲取，有些聊天機器人會搭載自然語言處理系統，但大多簡...', money: 1800 },
{ photo: t4, name: 'Lina', title: 'Linux 零基礎七天入門｜入門到實務', language: '作業系統與伺服器', text: 'Linux是一種自由和開放原始碼的類UNIX作業系統，作業系統中包含了許多使用者圖形介面和其他實用...', money: 1100 },
]

interface DataProps {
  photo: string;
  name: string;
  title: string;
  language: string;
  text: string;
  money: number;
}

const Card: React.FC<DataProps> = (data) => {
  return (
    <div className="classCard">
      <div className="user">
        <img src={data.photo} alt="" />
        <span className="name">{data.name}</span>
      </div>
      <div className="text">
        <div className="cardTitle s20 titleWord">{data.title}</div>
        <h6 className="language fontColorGreen">{data.language}</h6>
        <span className="context">{data.text}</span>
      </div>
      <hr />
      <div className="cost">
        <span className="time">50分鐘</span>
        <span className="money s32">{`NT$${data.money}`}</span>
      </div>
    </div>
  )
}

export default function HotClass() {
  return (
    <HotClassCss className='globalBGBlack'>
      <div className="container s16">
        <TitleComp title={['熱門課程推薦']} />
        <div className="classCards">
          {data.map((ele, idx) => (<Card {...ele} key={idx} />))}
        </div>
        <div className='classBtn'><button className='classList linearLR s18'>所有課程列表</button></div>
      </div>

    </HotClassCss>
  )
}
