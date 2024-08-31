import React from 'react';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { useText } from 'theme/common';
import Parallax from '../Parallax/Hexagonal';
import Title from '../Title';
import useStyles from './faq-style';

const faqData = [
  {
    q: 'What inspired the creation of Freeweb3.com, and what problem does it aim to solve?',
    a: 'Freeweb3.com was inspired by the vision of democratizing access to Web3 technologies and empowering individuals to participate directly in the decentralized internet. It aims to address the barriers to entry that many people face when trying to onboard themselves onto the Web3 ecosystem.'
  },
  {
    q: 'Can you explain the concept of Web3 and how Freeweb3.com fits into this emerging landscape?',
    a: 'Web3 refers to the vision of a decentralized internet built on principles of openness, transparency, and user sovereignty. Freeweb3.com serves as a gateway for individuals to explore and participate in this emerging decentralized ecosystem, providing access to tools and applications that facilitate engagement with peer-to-peer computing and public blockchain technologies.'
  },
  {
    q: 'What are some of the key features and functionalities offered by Freeweb3.com',
    a: 'Freeweb3.com offers users the ability to create private keys, access basic tools and applications for participating in decentralized networks, and explore opportunities in decentralized finance (DeFi) and governance systems. Additionally, the platform promotes financial inclusion, economic empowerment, and resilience through its distributed architecture.'
  },
  {
    q: 'How does Freeweb3.com promote financial inclusion and economic empowerment, particularly for underserved communities?',
    a: 'By providing access to DeFi protocols and other decentralized applications, Freeweb3.com enables individuals who may have been excluded from traditional financial systems to access a wide range of financial services, including lending, borrowing, and earning interest on their assets. This has the potential to uplift underserved communities and unlock new opportunities for economic prosperity.'
  },
  {
    q: 'What are some potential use cases for Freeweb3.com, and how might university students in technical or administrative and communications majors benefit from using the platform?',
    a: 'Freeweb3.com can be used for a variety of purposes, including exploring decentralized applications, participating in peer-to-peer computing, and engaging in decentralized governance systems. University students in technical majors may benefit from using the platform to experiment with blockchain technology and develop innovative solutions, while students in administrative and communications majors may use it to explore the implications of decentralized systems on various industries and society as a whole..'
  },
  {
    q: 'How does Freeweb3.com address privacy and security concerns, particularly when it comes to managing cryptographic keys and interacting with decentralized applications?',
    a: 'Freeweb3.com employs robust encryption techniques to protect users private keys and ensure the security of their digital identities. Additionally, the platform provides guidance on best practices for securely interacting with decentralized applications and managing digital assets within the Web3 ecosystem.'
  },
  {
    q: 'What inspired the creation of Web3 Legal Engineering and the development of these innovative solutions?',
    a: 'Web3 Legal Engineering was founded with the vision of leveraging technology to revolutionize the legal industry. There is a need for more efficient and secure solutions for handling insurance claims and legal proceedings, which led to the development of groundbreaking tools and protocols. </a>'
  },
  {
    q: 'Where can people learn more about Web3 Legal Engineering and access additional information about these innovative solutions?',
    a: 'For more information about Web3 Legal Engineering and our groundbreaking solutions, listeners can visit our website at [lex.freeweb3.com](https://lex.freeweb3.com).'
  },
];

function Faq() {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const { t } = useTranslation('common');
  const [expanded, setExpanded] = React.useState(0);
  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className={classes.root}>
      <div className={classes.parallax}>
        <Parallax />
      </div>
      <Container fixed>
        <Grid container spacing={6}>
          <Grid item md={6}>
            <Title text={t('crypto-landing.faq_title')} align={isMobile ? 'center' : 'left'} />
            <Typography className={text.subtitle2} align={isMobile ? 'center' : 'left'} component="p">
              {t('crypto-landing.faq_subtitle')}
            </Typography>
            {!isTablet && (
              <div className={classes.illustration}>
                <img src="/images/crypto/faq.png" alt="illustration" />
              </div>
            )}
          </Grid>
          <Grid item md={6}>
            <div className={classes.accordion}>
              {faqData.map((item, index) => (
                <div className={classes.item} key={index.toString()}>
                  <Accordion
                    classes={{
                      root: classes.paper
                    }}
                    expanded={expanded === index}
                    onChange={handleChange(index)}
                  >
                    <AccordionSummary
                      classes={{
                        content: classes.content,
                        expanded: classes.expanded,
                      }}
                    >
                      <Typography className={classes.heading}>{item.q}</Typography>
                      <ExpandMoreIcon className={classes.icon} />
                    </AccordionSummary>
                    <AccordionDetails
                      classes={{
                        root: classes.detail,
                      }}
                    >
                      <Typography>
                        {item.a}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Faq;
