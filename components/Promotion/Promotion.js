import React from 'react';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import NextIcon from '@mui/icons-material/ArrowForward';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Slider from 'dandelion-animated-slider';
import { useTranslation } from 'next-i18next';
import useMediaQuery from '@mui/material/useMediaQuery';
import useStyles from './promotion-style';
import imgAPI from 'public/images/imgAPI';

const sliderData = [
  {
    image: imgAPI.photo[14],
    title: 'Insurance Claims Management',
    desc: 'Evidencer can streamline the process of managing insurance claims for auto accidents, property damage, medical expenses, and more, providing a transparent and efficient platform for insurers and claimants to interact.',
    date: 'evidencer.freeweb3.com'
  },
  {
    image: imgAPI.photo[15],
    title: 'Legal Dispute Resolution ',
    desc: 'Evidencer`s decentralized claim resolution system can be utilized in legal disputes, such as contract disputes, landlord-tenant disputes, and small claims court cases, enabling parties to resolve conflicts in a transparent and impartial manner.',
    date: 'evidencer.freeweb3.com'
  },
  {
    image: imgAPI.photo[16],
    title: 'Healthcare Documentation',
    desc: 'Evidencer can be used to securely store and manage healthcare documentation, such as medical records, insurance claims, and billing information, providing patients and healthcare providers with a centralized platform for accessing and sharing sensitive healthcare data.',
    date: 'evidencer.freeweb3.com'
  },
  {
    image: imgAPI.photo[17],
    title: 'Financial Transactions',
    desc: 'Evidencer`s blockchain technology can facilitate secure and transparent financial transactions, such as peer-to-peer lending, crowdfunding campaigns, and cryptocurrency transfers, providing individuals and businesses with a reliable platform for conducting financial transactions.',
    date: 'evidencer.freeweb3.com'
  }
];

function Promotion() {
  const { classes, cx } = useStyles();
  const { t } = useTranslation('common');
  const isTablet = useMediaQuery(theme => theme.breakpoints.down('lg'));

  return (
    <div className={classes.root}>
      <div className={classes.sliderWrap}>
        <Slider
          className="slider-wrapper"
          previousButton={(
            <NextIcon />
          )}
          nextButton={(
            <NextIcon />
          )}
        >
          {sliderData.map((item, index) => (
            <div className={cx(classes.item, index % 2 === 1 ? classes.odd : classes.even)} key={index.toString()}>
              <Grid container>
                <Grid item xs={12} lg={4}>
                  &nbsp;
                </Grid>
                <Grid item xs={12} lg={7}>
                  {!isTablet && (
                    <section>
                      <div className={classes.imgWrap}>
                        <div className={classes.decoration}>
                        </div>
                        <figure className={classes.image}>
                        <img src={item.image} alt={item.title} style={{ width: '300px', height: 'auto' }} />                        </figure>
                      </div>
                    </section>
                  )}
                  <Paper className={classes.paper}>
                    <Typography variant="h1">
                      <ButtonBase>
                        {item.title}
                      </ButtonBase>
                    </Typography>
                    <Typography component="p">
                      {item.desc}
                    </Typography>
                    <section className={classes.time}>
                      <Typography component="h6">
                        {t('crypto-landing.promo_periode')}
                        :&nbsp;
                        {item.date}
                      </Typography>
                    </section>
                  </Paper>
                </Grid>
              </Grid>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Promotion;
