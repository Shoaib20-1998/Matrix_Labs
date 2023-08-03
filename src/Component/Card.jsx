import styled from '@emotion/styled'
import React from 'react'
import dollar from '../Images/ic1.png'
import Round from '../Images/Round.png'

function Card({ ChainID, basicsymbol, dex, pairadress, title, basetoken, quotetoken, priceusd, pricenative }) {
  return (
    <DIV>
      <div>
        <div><h1 className='title'>{title}</h1></div>
        {ChainID? <div className='parent'> <p>Pair created at -</p><p>{ChainID}</p></div> : null}
        {basicsymbol? <div className='parent'> <p>Symbol -</p><p> {basicsymbol}</p> </div> : null}
        {dex? <div className='parent'> <p>Dex ID -</p><p> {dex}</p>    </div> : null}
        {pairadress? <div className='parent'> <p>Pair Address -</p><p> {dex}</p>    </div> : null}
        {/* {basetoken.name? <div className='parent'> <p>Name -</p><p> {basetoken?.name}</p> </div> : null} */}
        {/* {basetoken.symbol? <div className='parent'> <p>Symbol-</p><p> {basetoken?.symbol}</p> </div> : null}
        {basetoken.address? <div className='parent'> <p>Address -</p><p> {basetoken?.address}</p> </div> : null}
        {quotetoken.name? <div className='parent'> <p>Name -</p><p> {quotetoken?.name}</p> </div> : null}
        {quotetoken.symbol? <div className='parent'> <p>Symbol-</p><p> {quotetoken?.symbol}</p> </div> : null}
        {quotetoken.address? <div className='parent'> <p>Address -</p><p> {quotetoken?.address}</p> </div> : null}*/}
         {pricenative? <div className='parent'> <p>Price Native -</p><p> {pricenative}</p> </div> : null} 
        {priceusd? <div className='parent'> <p>Price USD -</p><p> {priceusd}</p> </div> : null}
      </div>
      <div className="image-container">
        <img className='round' alt="Main Image" src={Round} />
        <img src={dollar} alt="Inner Image" className="inner-image" />
      </div>
    </DIV>
  )
}

export default Card

const DIV = styled.div`
  width: 90%;
  height: 210px;
  border-radius: 10px;
  background: #390554;
  display:flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 5px;

 .parent{
   width:100%;
   display: flex;
   justify-content: space-between;
   align-items:center;
 }
 
 .parent>p{
  color: #F5F5F5;
  font-family:'Poppins';
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 5px;
 }

 .title{
  color: #FFF;
font-family: 'Poppins';
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
padding: 5px;
 }

 .image-container {
  position: relative; /* Set the container to relative positioning */
  display: inline-block; /* Set the container to inline-block for content-based width */
}

.image-container img {
  max-width: 100%; /* Ensure the images fit within the container */
}

.inner-image {
  position: absolute; /* Set the inner image to absolute positioning */
  top: 85%; /* Center it vertically */
  left: 130%; /* Center it horizontally */
  transform: translate(-50%, -50%); /* Center it perfectly */
  width: 50%; /* Adjust the width as needed */
}
.round{
  margin-top: 270%;
  margin-left: 80%;
  width: 50px;
}
`