import React from 'react'
import styled from 'styled-components'

const TitleCompCss = styled.div`
  text-align:center;
  position: relative;
  padding-bottom:16px;
  .borderBottom{
            width: 50px;
            height:3px;
            background-color:#62DB54;
            position:absolute;
            left:50%;
            bottom:0;
            transform: translate(-50%);
  }
  @media (max-width: 576px) {
    .header {
            font-size:24px;
        }
  }
`

interface TitleCompProps {
  title: string[]
  name?: string
}

const TitleComp: React.FC<TitleCompProps> = (props) => {
  const { title, name } = props
  return (
    <TitleCompCss className={`header s28 titleWord ${name}`}>
      <h2>{title.map((ele, idx) => (
        <React.Fragment key={idx}>
          {ele}
          {title.length - 1 > idx && <br />}
        </React.Fragment>
      ))}
      </h2>
      <div className='borderBottom' />
    </TitleCompCss>
  )
}

export default TitleComp