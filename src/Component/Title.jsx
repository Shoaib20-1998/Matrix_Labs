import styled from '@emotion/styled'
import React, { Children } from 'react'

function Title({children}) {
    return (
        <DIV>
            <h1 className='title'>{children}</h1>
        </DIV>
    )
}

export default Title

const DIV = styled.div`

margin: 10px;

text-align:'left';
.title{
    color: var(--cultured-grey, #F7F9F9);
 font-family: 'work flow';
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 28px; /* 116.667% */
padding:20px;
}

`