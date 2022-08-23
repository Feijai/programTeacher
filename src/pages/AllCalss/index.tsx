import React from 'react'
import styled from 'styled-components'

const AllCalssCss = styled.div`
    .container{
        padding-top:42px;
        ul{
            display:flex;
            column-gap:16px;
            button{
            padding:16px 32px;
            border-radius:8px;
            border:1px solid white;
            color:white;
            }
        }
    }
`

const category = [{ id: 0, text: '所有課程' }, { id: 1, text: '行動應用開發' }, { id: 2, text: '資料庫/資料科學' },
{ id: 3, text: '前端語言' }, { id: 4, text: '後端語言' }, { id: 5, text: '作業系統伺服器' }]

export default function AllCalss() {
    const handleClick =(id: number):void=>{

    }
    return (
        <AllCalssCss className='globalBGBlack2'>
            <div className="container ">
                <ul>
                    {category.map((ele, idx) => (
                        <li key={idx}><button onClick={()=>{handleClick(ele.id)}}
                        className="globalBGBlack2">{ele.text}</button></li>
                    ))}
                </ul>
            </div>
        </AllCalssCss>
    )
}
