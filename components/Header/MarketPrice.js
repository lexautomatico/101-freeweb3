import React from 'react';
import Avatar from '@mui/material/Avatar';
import Carousel from 'react-slick';
import useStyles from './header-style';

const marketList = [
  // {
  //   logo: '/images/2024-stack/11-100w.png',
  //   name: 'GraphQL',
  //   price: 10200,
  //   status: 'up',
  //   percent: 100,
  // },
  {
    logo: '/images/2024-stack/13a-100w.png',
    name: 'Metamask',
    price: 0.003,
    status: 'up',
    percent: 100,
  },
  // {
  //   logo: '/images/2024-stack/06-100w.png',
  //   name: 'NodeJS',
  //   price: 0.010,
  //   status: 'up',
  //   percent: 100,
  // },
  // {
  //   logo: '/images/2024-stack/07-100w.png',
  //   name: 'React',
  //   price: 0.010,
  //   status: 'up',
  //   percent: 100,
  // },
  {
    logo: '/images/2024-stack/01b-100w.png',
    name: 'IPFS',
    price: 1.45,
    status: 'up',
    percent: 100,
  },
  {
    logo: '/images/2024-stack/02-100w.png',
    name: 'Ethereum',
    price: 22.34,
    status: 'up',
    percent: 100,
  },
  {
    logo: '/images/2024-stack/03-100w.png',
    name: 'ENS',
    price: 0.010,
    status: 'up',
    percent: 100,
  },
  {
    logo: '/images/2024-stack/04-100w.png',
    name: 'Solidity',
    price: 1.45,
    status: 'up',
    percent: 100,
  },
  {
    logo: '/images/2024-stack/05-100w.png',
    name: 'Chainlink',
    price: 22.34,
    status: 'up',
    percent: 100,
  },
  {
    logo: '/images/2024-stack/08-100w.png',
    name: 'Arbitrum',
    price: 22.34,
    status: 'up',
    percent: 100,
  },
  {
    logo: '/images/2024-stack/09-100w.png',
    name: 'Polygon',
    price: 22.34,
    status: 'up',
    percent: 100,
  },
  {
    logo: '/images/2024-stack/10-100w.png',
    name: 'Optimism',
    price: 22.34,
    status: 'up',
    percent: 100,
  },
];

export default function MarketPrice() {
  const { classes } = useStyles();
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 300,
    cssEase: 'linear',
    pauseOnHover: true
  };
  const renderPercent = (arrow, percent) => {
    switch (arrow) {
      case 'down':
        return (
          
          <span className={classes.down}>
            <i>▼</i>
            {percent}
            %
          </span>
        );
      case 'up':
        return (
          <span className={classes.up}>
            <i>(web3)&nbsp;</i>
            {/* {percent}
            % */}
          </span>
        );
      default:
        return (
          <span className={classes.stay}>
            <i>-</i>
            {percent}
            %
          </span>
        );
    }
  };
  return (
    <div className={classes.market}>
      <Carousel {...settings}>
        {marketList.map((item, index) => (
          <div className={classes.item} key={index.toString()}>
            <div className={classes.coin}>
            &nbsp;
              <Avatar className={classes.logo} src={item.logo} alt={item.name} />
              {item.name}
              &nbsp;
              {renderPercent(item.status, item.percent)}
              &nbsp;&nbsp;
              
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
