import React from 'react';
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Logoicon from '../Images/lognicon.png'
import Logo from '../Images/NFTify.png'
import tokenlogo from '../Images/ic.png'
import pairlogo from '../Images/fluent.png'




const Sidebar = ({ activePage, onPageChange }) => {
  return (
    <Div>
      <Flex direction="column" spacing="2">
        <div className='logo'>
          <div className='logoimgdiv'><img className='imgtag' src={Logoicon} alt="" /></div>
          <div className='logoimgdiv'><img className='imgtag' src={Logo} /></div>
        </div>
        <div className='Mainbtn'>
          <div className='subbtn' style={{ backgroundColor: activePage === 'Token Result' ? '#F30050' : '#292929' }}>
            <img src={tokenlogo} alt="" />
            <button
              onClick={() => onPageChange('Token Result')}
              className='btn'
            >
              Token Address
            </button>
          </div>



          <div className='subbtn' style={{ backgroundColor: activePage === 'Pair Result' ? '#F30050' : '#292929' }}>
            <img src={pairlogo} alt="" />
            <button
              onClick={() => onPageChange('Pair Result')}
              className='btn'
            >
              Pair Address
            </button>
          </div>

        </div>
      </Flex>
    </Div>
  );
};

export default Sidebar;


const Div = styled.div` 
  height: 100%;
  width: 100%;

  .logo{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 15px;
    text-align:'center'
  }

  .btn{
    color: var(--cultured-grey, #F7F9F9);
    font-family: 'work flow';
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px; /* 140% */
    padding: 20px;
    width: 80%;

  }
  .Mainbtn{
    text-align: center;
  }
  .subbtn{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 65px;
  }
  @media only screen and (min-width:10px) and (max-width: 700px){

   display:none;
   height:0px;
   width:0px

}

`
