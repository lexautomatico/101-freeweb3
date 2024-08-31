import React, { useState, useRef } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Carousel from 'react-slick';
import { useTranslation } from 'next-i18next';
import imgApi from 'public/images/imgAPI';
import { useText } from 'theme/common';
import Title from '../Title';
import TestiCard from '../Cards/Testimonial';
import useStyle from './testi-style';

const testiContent = [
  {
    text: 'Freeweb3 democratizes access to Web3 technologies, allowing individuals from all backgrounds to harness the power of decentralization.',
    name: 'Scott Stevenson J.D.',
    avatar: imgApi.avatar[6],
    title: 'Executive Manager',
  },
  {
    text: 'Driven by a passion for democratizing access to legal services and empowering individuals to navigate complex legal challenges, Scott has championed the development of user-friendly platforms like Freeweb3.com. This innovative platform serves as a gateway for individuals to onboard themselves onto the Web3 ecosystem, enabling direct participation in decentralized networks and blockchain technologies.',
    name: 'Scott Stevenson J.D.',
    avatar: imgApi.avatar[7],
    title: 'Executive Manager',
  },
  {
    text: 'Evidencer was founded with the vision of leveraging technology to revolutionize the legal industry. We saw a need for more efficient and secure solutions for handling insurance claims and legal proceedings, which led us to develop our groundbreaking tools and protocols.',
    name: 'Scott Stevenson J.D.',
    avatar: imgApi.avatar[1],
    title: 'Executive Manager',
  },
  {
    text: 'Scott is on a mission to revolutionize the way legal services are delivered and consumed. Through his visionary leadership, Web3 Legal Engineering has developed groundbreaking solutions such as Evidencer, a decentralized peer-to-peer blockchain-based claim management and resolution system.',
    name: 'Scott Stevenson J.D.',
    avatar: imgApi.avatar[2],
    title: 'Executive Manager',
  },
  {
    text: 'Scott is deeply passionate about education and mentorship. He is actively involved in mentoring university students, particularly those studying technical or administrative and communications majors, guiding them on their journey to becoming future leaders in the legal and technology industries.',
    name: 'Scott Stevenson J.D.',
    avatar: imgApi.avatar[3],
    title: 'Executive Manager',
  },
  {
    text: 'Scott has been at the forefront of innovation, leveraging his legal background to drive transformative change in the legal industry. With a deep understanding of emerging technologies and their implications for the practice of law, Scott has become a leading authority on the intersection of law and technology.',
    name: 'Scott Stevenson J.D.',
    avatar: imgApi.avatar[9],
    title: 'Executive Manager',
  },
  {
    text: 'Scott Stevenson is a visionary entrepreneur and legal technologist with a unique blend of legal expertise and technical acumen. With a Juris Doctor (JD) degree from Concord Law School at Purdue University Global and a technical business degree from California State University in Fullerton, CA, Scott has cultivated a diverse skill set that spans both the legal and technology domains.',
    name: 'Scott Stevenson J.D.',
    avatar: imgApi.avatar[2],
    title: 'Executive Manager',
  },
  {
    text: 'Web3 Legal Engineering offers comprehensive education, training, and support programs for legal professionals interested in adopting our solutions. This includes workshops, webinars, online resources, and dedicated support channels to assist with implementation and ongoing usage.',
    name: 'Scott Stevenson J.D.',
    avatar: imgApi.avatar[3],
    title: 'Executive Manager',
  },
];

function Testimonials() {
  const slider = useRef(null);
  const { classes, cx } = useStyle();
  const { classes: text } = useText();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const { t } = useTranslation('common');
  const [active, setActive] = useState(0);
  const [activeTransition, setActiveTransition] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 7000,
    afterChange: (current) => setActive(current),
    beforeChange: (current, next) => setActiveTransition(next),
  };

  const slideState = index => {
    if (index === activeTransition - 1 || index === active - 1) {
      return classes.past;
    }
    if (index === activeTransition + 1 || index === active + 1) {
      return classes.future;
    }
    if (index === activeTransition || index === active) {
      return classes.current;
    }
    return classes.slide;
  };

  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <Title text={t('crypto-landing.testi_title')} align="center" />
        <Typography className={text.subtitle2} align="center">
          {t('crypto-landing.testi_subtitle')}
        </Typography>
        <Grid container spacing={6}>
          <Grid item md={1} xs={12} />
          <Grid item md={10} xs={12}>
            <div className={classes.sliderWrap}>
              <div className={classes.carousel}>
                <button
                  type="button"
                  className={cx(classes.nav, classes.prev)}
                  onClick={() => slider.current.slickPrev()}
                >
                  <i className="ion-ios-arrow-back" />
                </button>
                <Carousel ref={slider} {...settings}>
                  {testiContent.map((item, index) => (
                    <div key={index.toString()} className={cx(classes.item, slideState(index))}>
                      <div className={classes.slideContent}>
                        <TestiCard
                          text={item.text}
                          name={item.name}
                          title={item.title}
                          avatar={item.avatar}
                          active={index === active}
                        />
                      </div>
                    </div>
                  ))}
                </Carousel>
                <button
                  type="button"
                  className={cx(classes.nav, classes.next)}
                  onClick={() => slider.current.slickNext()}
                >
                  <i className="ion-ios-arrow-forward" />
                </button>
              </div>
              <div className={classes.pagination}>
                <ul>
                  {[...Array(testiContent.length)].map((e, index) => (
                    <li
                      key={index.toString()}
                      className={index === active ? classes.active : ''}
                    >
                      <button type="button" onClick={() => slider.current.slickGoTo(index)}>&nbsp;</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Testimonials;
