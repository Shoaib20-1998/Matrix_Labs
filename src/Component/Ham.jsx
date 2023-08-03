import React from 'react';
import { HiMenu } from 'react-icons/hi';
import { IconButton } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Logoicon from '../Images/lognicon.png'
import Logo from '../Images/NFTify.png'
import tokenlogo from '../Images/ic.png'
import pairlogo from '../Images/fluent.png'

const HamburgerMenu = ({ activePage, onPageChange}) => {


  return (
    <Div>
    <div className='Mainbtn' >
      <div className='subbtn' onClick={() => onPageChange('Token Result')} style={{ backgroundColor: activePage === 'Token Result' ? '#F30050' : '#292929' }}>
        <img src={tokenlogo} alt="" />
        <button
          
          className='btn'
        >
          Token Address
        </button>
      </div>
      <div  onClick={() => onPageChange('Pair Result')}className='subbtn' style={{ backgroundColor: activePage === 'Pair Result' ? '#F30050' : '#292929' }}>
        <img src={pairlogo} alt="" />
        <button
          
          className='btn'
        >
          Pair Address
        </button>
      </div>
    </div>
    </Div>

  );
};

export default HamburgerMenu;

const Div = styled.div` 
  margin: 20px;
.subbtn{
  width: 180px;
  padding: 10px;
  display: flex;
  border-radius: 25px;
  margin: 20px 0;
  font-size: 15px;
  justify-content: space-around;
  align-items: center;
  
}
  
  


`
