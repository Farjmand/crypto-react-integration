import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptocurrencies , News }  from '../components';



const  { Title} = Typography;
const Homepage = () => {

  const { data, isFetching} = useGetCryptosQuery();
 
  const globalStats = data?.data?.stats;
  console.log(globalStats);
  if(isFetching) return 'Loading ...';

  return (
    <>
     <Title level = {2} className='heading'> Global Crypot Stats</Title>

     <Row>
       <Col span= {12}> 
       <Statistic title="Total Cryptcurrencies" value = "{globalStats.total} "/> 
       </Col>
       <Col span= {12}> 
       <Statistic title="Total Exchanges" value = "{millify(globalStats.totalExchanges)}" /> 
       </Col>
       <Col span= {12}> 
       <Statistic title="Total Market Cap" value = "{millify(globalStats.totalMarketCap)}" /> 
       </Col>
       <Col span= {12}> 
       <Statistic title="Total 24h Volume" value = "5" /> 
       </Col>
       <Col span= {12}> 
       <Statistic title="Total Markets" value = "5" /> 
       </Col>

     </Row>
     <div className='home-heading-container'>
       <Title level ={2} className='home-title'> Top 10 Cryptocurrencies</Title>
       <Title level ={3} className='show-more'> <Link to="/cryptocurrencies">Show more</Link> </Title>
     </div>
     <Cryptocurrencies simplified/>
     <div className='home-heading-container'>
       <Title level ={2} className='home-title'> Crypto News</Title>
       <Title level ={3} className='show-more'> <Link to="/cryptocurrencies">Show more</Link> </Title>
     </div>
     <News simplified />
    </>
   
  )
}

export default Homepage