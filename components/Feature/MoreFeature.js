import React, { useState } from 'react';
import {
  ThemeProvider, StyledEngineProvider,
  createTheme, useTheme
} from '@mui/material/styles';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import LinearProgress from '@mui/material/LinearProgress';
import { useTranslation } from 'next-i18next';
import { useText } from 'theme/common';
import Title from '../Title';
import useStyles from './feature-style';

const coinData = [
  {
    name: 'IPFS',
    logo: '/images/2024-stack/01b-200w.png',
    progress: 100,
    color: '#32cd32'
  },
  {
    name: 'Ethereum',
    logo: '/images/2024-stack/02-200w.png',
    progress: 100,
    color: '#32cd32'
  },
  {
    name: 'ENS',
    logo: '/images/2024-stack/03-200w.png',
    progress: 100,
    color: '#32cd32'
  },
  {
    name: 'Solidity',
    logo: '/images/2024-stack/04-200w.png',
    progress: 100,
    color: '#32cd32'
  },
  {
    name: 'Chainlink',
    logo: '/images/2024-stack/05-200w.png',
    progress: 100,
    color: '#32cd32'
  },
  {
    name: 'Node.js',
    logo: '/images/2024-stack/06-200w.png',
    progress: 100,
    color: '#32cd32'
  },
  {
    name: 'React',
    logo: '/images/2024-stack/07-200w.png',
    progress: 100,
    color: '#32cd32'
  },
  {
    name: 'Arbitrum',
    logo: '/images/2024-stack/08-200w.png',
    progress: 100,
    color: '#32cd32'
  },
  {
    name: 'Polygon',
    logo: '/images/2024-stack/09-200w.png',
    progress: 100,
    color: '#32cd32'
  },
  {
    name: 'Optimism',
    logo: '/images/2024-stack/10-200w.png',
    progress: 100,
    color: '#32cd32'
  },
  {
    name: 'GraphQL',
    logo: '/images/2024-stack/11-200w.png',
    progress: 100,
    color: '#32cd32'
  },
  {
    name: 'TheGraph',
    logo: '/images/2024-stack/12-200w.png',
    progress: 100,
    color: '#32cd32'
  },
  {
    name: 'Metamask',
    logo: '/images/2024-stack/13a-200w.png',
    progress: 100,
    color: '#32cd32'
  },
  {
    name: 'Infura',
    logo: '/images/2024-stack/14a-200w.png',
    progress: 100,
    color: '#32cd32'
  },
  {
    name: 'Etherscan',
    logo: '/images/2024-stack/15-200w.png',
    progress: 100,
    color: '#32cd32'
  },
  {
    name: 'Next.js',
    logo: '/images/2024-stack/next-200w-200w.png',
    progress: 100,
    color: '#32cd32'
  }
];

function MoreFeature() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const [play, setPlay] = useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation('common');

  const themeProgress = color => createTheme({
    palette: {
      primary: {
        main: color
      }
    }
  });

  const handlePlay = visible => {
    if (visible.inViewport) {
      setTimeout(() => { setPlay(true); }, 500);
    }
  };

  return (
    <div className={classes.moreFeature}>
      <Container fixed={isDesktop}>
        <div className={classes.item}>
          <Grid container spacing={6} alignItems="center">
            <Grid item md={6} xs={12}>
              <div className={cx(classes.text, isMobile && classes.center)}>
                <span className="ion-ios-lock-outline" />
                <Title text={t('crypto-landing.morefeature_title1')} align={isMobile ? 'center' : 'left'} />
                <Typography className={text.subtitle2} display="block" align={isMobile ? 'center' : 'left'}>
                  {t('crypto-landing.morefeature_subtitle1')}
                </Typography>
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <ScrollAnimation
                animateOnce
                animateIn="fadeInLeftShort"
                delay={300}
                duration={0.3}
              >
                <figure className={classes.illustration}>
                  <img src="/images/crypto/illustration1.png" alt="feature" />
                </figure>
              </ScrollAnimation>
            </Grid>
          </Grid>
        </div>
        <div className={classes.item}>
          <Grid
            container
            direction={isMobile ? 'column-reverse' : 'row'}
            spacing={6}
            alignItems="center"
          >
            <Grid item md={6} xs={12}>
              <ScrollAnimation
                animateOnce
                animateIn="fadeInRightShort"
                offset={-100}
                delay={300}
                duration={0.3}
              >
                <figure className={classes.illustration}>
                  <img src="/images/crypto/illustration2.png" alt="feature" />
                </figure>
              </ScrollAnimation>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className={cx(classes.text, isMobile && classes.center)}>
                <span className="ion-ios-analytics-outline" />
                <Title text={t('crypto-landing.morefeature_title2')} align={isMobile ? 'center' : 'left'} />
                <Typography className={text.subtitle2} display="block" align={isMobile ? 'center' : 'left'}>
                  {t('crypto-landing.morefeature_subtitle2')}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className={classes.item}>
          <Grid container>
            <Grid item sm={12}>
              <div className={cx(classes.text, classes.center)}>
                <span className="ion-ios-flash-outline" />
                <Title className={text.subtitle2} text={t('crypto-landing.morefeature_title3')} align="center" />
                <Typography display="block" align="center" className={text.subtitle2}>
                  {t('crypto-landing.morefeature_subtitle3')}
                </Typography>
              </div>
              <Container maxWidth="md">
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeIn"
                  offset={-100}
                  duration={1}
                  afterAnimatedIn={handlePlay}
                >
                  <ul className={classes.progressWrap}>
                    {coinData.map((item, index) => (
                      <li key={index.toString()}>
                        <div className={classes.coin}>
                          <Avatar className={classes.logo} src={item.logo} alt={item.name} />
                          <Typography variant="h5">
                            {item.name}
                          </Typography>
                        </div>
                        <div className={classes.progress}>
                          <div className={classes.unit}>
                            <Typography variant="h6">
                              <span></span>
                              &nbsp;
                            </Typography>
                            <Typography variant="h6">
                              <span>Up-time</span>
                              &nbsp;100%
                            </Typography>
                          </div>
                          <StyledEngineProvider injectFirst>
                            <ThemeProvider theme={themeProgress(item.color)}>
                              <LinearProgress
                                variant="determinate"
                                value={play ? item.progress : 0}
                                classes={{
                                  root: classes.track,
                                  bar: classes.bar
                                }}
                              />
                            </ThemeProvider>
                          </StyledEngineProvider>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollAnimation>
              </Container>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default MoreFeature;
