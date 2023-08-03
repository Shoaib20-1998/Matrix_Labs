import React, { useEffect, useState } from 'react';
import Sidebar from '../Component/Sidebar';
import TokenResultPage from '../Component/Tokenresult';
import PairResultPage from '../Component/Pairresult';
import styled from '@emotion/styled';
import TopSearchandConnect from '../Component/TopSearchandConnect';
import axios from 'axios';
import HamburgerMenu from '../Component/Ham';
import Logo from '../Images/NFTify.png'

const Dashboard = () => {
  const [activePage, setActivePage] = useState('Token Result');
  const [GetSearch, setGetSearch] = useState('');
  const [alldata, setalldata] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);

  const handlePageChange = (page) => {
    setActivePage(page);
    setShowSidebar(false);
  };

  const Getalldata = async (GetSearch) => {
    let api;
    try {
      if (GetSearch) {
        api = `https://api.dexscreener.com/latest/dex/search?q=${GetSearch}`;
      } else {
        api = `https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8,0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c`;
      }
      axios.get(api).then((res) => {
        let pair = res.data.pairs;
        let count = 0;
        let arr = [];
        for (let i = 0; i < pair.length; i++) {
          if (count === 10) {
            break;
          }
          arr.push(pair[i]);
          count++;
        }
        arr.sort(function (a, b) {
          return b.priceUsd - a.priceUsd;
        });
        setalldata(arr);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Getalldata(GetSearch);
  }, [GetSearch]);

  const handleHamburgerClick = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <TopDiv>
      
      {!showSidebar && (
        <Div>
          <div className='sideber'>
            <Sidebar activePage={activePage} show  onPageChange={handlePageChange} />
          </div>
        </Div>
      )}
      
      <div className='Main'>
        <div>
          {showSidebar && <HamburgerMenu activePage={activePage} onPageChange={handlePageChange} />}
        </div>
        <TopSearchandConnect onSearch={setGetSearch} />
        <div>
          {activePage === 'Token Result' ? <TokenResultPage data={alldata} /> : <PairResultPage data={alldata} />}
        </div>
        
      </div>

      <div className='mainbottom'>
        <div className='Bottomline'></div>
      </div>
      <div>
      
        <div>
          <Hamburger onClick={handleHamburgerClick}>
            <span></span>
            <span></span>
            <span></span>
          </Hamburger>
        </div>
          
      </div>
    </TopDiv>
  );
};

export default Dashboard;

const Div = styled.div`
  display: flex;
  .sideber {
    width: 20%;
    height: 982px;
    flex-shrink: 0;
  }
  .Main {
    height: 1000px;
    width: 80%;
    background-image: url('main.png');
  }
`;

const TopDiv = styled.div`
  position: relative;
  .sideber {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    border: 3px solid white;
    border-radius: 0px 32px 32px 0px;
    background: #292929;
  }
  .Main {
    margin-left: 20%;
    padding: 20px;
    height: 100vh;
    overflow-y: auto;
    background-image: url('main.png');
    background-size: cover;
    background-repeat: no-repeat;
  }
  .mainbottom {
    width: 100%;
    margin: auto;
  }
  .Bottomline {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 68px;
    flex-shrink: 0;
    background: #f30050;
    margin: auto;
  }

  @media only screen and (min-width: 10px) and (max-width: 700px) {
    .sideber {
      display: none;
    }
    .Main {
      margin-left: 0;
      width: 100%;
      padding-top: 80px;
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  margin: 20px;

  span {
    height: 2px;
    width: 25px;
    background-color:#f30050;
    margin: 5px;
  }

  @media only screen and (min-width: 10px) and (max-width: 700px) {
    display: flex;
    z-index: 1;
    position: absolute;
    top: 20px;
    left: 20px;
  }
  
`;
