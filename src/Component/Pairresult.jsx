import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Title from './Title';
import Card from './Card';
import CardToken from './CardToken';
import CardPrice from './CardPrice';

const PairResultPage = ({ data }) => {
  return (
    <Div>
      <div className='map'>
        <div>
          <Title>Pair Search Results</Title>
        </div>

        {data.map((item) => {
          return <div className='map1' key={item.url}>
            <div>
              <Card title={'Basic Info'} ChainID={item.chainId} basicsymbol={item.quoteToken.symbol} dex={item.dexId} pairadress={item.pairAddress} />
            </div>
            <div>
              <CardToken title={'Basic Token'} name={item.baseToken.name} symbol={item.quoteToken.symbol} address={item.baseToken.address} />
            </div>
            <div>
              <CardToken title={'Quote Token'} name={item.quoteToken.name} symbol={item.quoteToken.symbol} address={item.quoteToken.address} />
            </div>
            <div>
              <CardPrice title={'Price'} priceusd={item.priceUsd} pricenative={item.priceNative} />
            </div>
          </div>

        })}

      </div>
    </Div>
  );
};

export default PairResultPage;

const Div = styled.div`
  height: 100%;
  width: 100%;
  .map1{
    display: grid;
    grid-template-columns: repeat(4,1fr);
  }
  @media only screen and (min-width:10px) and (max-width: 700px){

.map1{
display: grid;
grid-template-columns: repeat(1,1fr);
}
  }
`