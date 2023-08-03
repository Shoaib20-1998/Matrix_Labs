import styled from '@emotion/styled'
import React, { useState } from 'react'
import usedebounce from '../Debouncing/usedebounce'
import { useWeb3Modal } from '@web3modal/react'
function TopSearchandConnect({onSearch}) {

    function handlechange(e){
        onSearch(e.target.value)
    }

    const func = usedebounce(handlechange,1000)
    const { open, close } = useWeb3Modal()
    return (
        <DIV>
            <div className='.search-container'><input onChange={func} type="text" placeholder='Search' /></div>
          
            <div><button className='btn' onClick={() => open()} >Connect</button></div>
        </DIV>
    )
}

export default TopSearchandConnect


const DIV = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:30px;
    margin: auto;

    div>input{
        width: 435px;
        height: 50px;
        flex-shrink: 0;
        border-radius: 20px;
        border: 1px solid #FFF;
        padding:4%;
        background: linear-gradient(132deg, rgba(124, 15, 53, 0.20) 0%, rgba(88, 18, 102, 0.20) 100%);  
    }
    
    .search-container {
    position: relative;
    display: inline-block;
  }     
    .btn{
        width: 156px;
        height: 52px;
        flex-shrink: 0;
        border-radius: 20px;
        color: white;
        background: linear-gradient(131deg, #7C0F35 0%, #581266 100%);
    }


input[type="text"]::placeholder {
  color: #aaa; /* Placeholder text color */
}

/* Add the search icon as a background image */
input[type="text"] {
  background-image: url('search.png'); /* Replace with the path to your search icon image */
  background-repeat: no-repeat;
  background-position: right 8px center; /* Position the icon at the right and center vertically */
  background-size: 16px 16px; /* Adjust the size of the icon as needed */
}

@media only screen and (min-width:10px) and (max-width: 700px){

  display: block;
  button{
    margin: 10px;
  }
  div>input{
        width: 300px;
        height: 50px;
        flex-shrink: 0;
        border-radius: 20px;
     margin: 10px;
        
    }
    
}
`