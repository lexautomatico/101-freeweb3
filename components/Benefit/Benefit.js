import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Parallax } from "react-parallax";
import { useTranslation } from "next-i18next";
import imgAPI from "public/images/imgAPI";
import { useText } from "theme/common";
import useStyles from "./benefit-style";

function Benefit() {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation("common");

  return (
    <div className={classes.root}>
      <div className={classes.parallaxWrap}>
        <Parallax bgImage={imgAPI.crypto[5]} bgImageAlt="benefit" strength={0}>
          <div className={classes.parallaxProps} />
        </Parallax>
      </div>
      <Container fixed={isDesktop}>
        <div className={classes.wrapper}>
          <Grid container>
            <Grid item md={5}>
              <div className={classes.desc}>
                <Typography
                  className={text.title2}
                  variant="h3"
                  align={isMobile ? "center" : "left"}
                >
                  {t("crypto-landing.benefit_title")}
                </Typography>
                <ul className={classes.list}>
                  <li>
                    <strong>Decentralization</strong>: Web3 technologies promote
                    decentralization, which means that no single entity has
                    control over the entire system. This can lead to more
                    transparent, democratic, and resilient public service
                    systems.
                  </li>
                  <li>
                    <strong>Transparency and Accountability</strong>:
                    Blockchains provide transparent and immutable records of
                    transactions or interactions, enhancing accountability
                    within public service systems. Citizens can track how public
                    resources are utilized, reducing corruption and increasing
                    trust in institutions.
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item md={7}>
              <div>
                <figure className={classes.img}>
                  <img src={imgAPI.crypto[28]} alt="benefit" />
                </figure>
              </div>
              {!isTablet && (
                <div className={classes.deco}>
                  <svg
                    width="585px"
                    height="151px"
                    viewBox="0 0 585 151"
                    version="1.1"
                  >
                    <defs>
                      <linearGradient
                        x1="66.8412844%"
                        y1="30.62426%"
                        x2="-21.0581447%"
                        y2="100%"
                        id="benefitLinearGradient-2"
                      >
                        <stop
                          stopColor={theme.palette.primary.main}
                          offset="0%"
                        />
                        <stop
                          stopColor={theme.palette.primary.light}
                          offset="100%"
                        />
                      </linearGradient>
                      <linearGradient
                        x1="66.8412844%"
                        y1="30.62426%"
                        x2="-21.0581447%"
                        y2="100%"
                        id="benefitLinearGradient-3"
                      >
                        <stop
                          stopColor={theme.palette.secondary.main}
                          offset="0%"
                        />
                        <stop
                          stopColor={theme.palette.secondary.light}
                          offset="100%"
                        />
                      </linearGradient>
                    </defs>
                    <g
                      id="Benefit-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Benefit-2"
                        transform="translate(-143.000000, -88.000000)"
                      >
                        <g
                          id="Benefit-3"
                          transform="translate(132.623862, 70.912032)"
                        >
                          <path
                            d="M15,67.3628158 C15,70.2420142 16.5400613,72.9026456 19.0401691,74.3422448 L45.8435518,89.7767212 C48.3436597,91.2163204 51.4237822,91.2163204 53.9238901,89.7767212 L80.7272727,74.3422448 C83.2273806,72.9026456 84.7674419,70.2420142 84.7674419,67.3628158 L84.7674419,36.4937339 C84.7674419,33.6144064 83.2273806,30.9539041 80.7272727,29.5141758 L53.9238901,14.0796994 C51.4237822,12.6401002 48.3436597,12.6401002 45.8435518,14.0796994 L19.0401691,29.5141758 C16.5400613,30.9539041 15,33.6144064 15,36.4937339 L15,67.3628158 Z"
                            id="BenefitFill-1"
                            fill="url(#benefitLinearGradient-3)"
                            transform="translate(49.883721, 51.928210) rotate(-330.000000) translate(-49.883721, -51.928210)"
                          />
                          <path
                            d="M520.561173,148.252603 C520.561173,151.131802 522.101234,153.792433 524.601342,155.232033 L551.404725,170.666509 C553.904833,172.106108 556.984955,172.106108 559.485063,170.666509 L586.288446,155.232033 C588.788553,153.792433 590.328615,151.131802 590.328615,148.252603 L590.328615,117.383522 C590.328615,114.504194 588.788553,111.843692 586.288446,110.403963 L559.485063,94.9694871 C556.984955,93.5298879 553.904833,93.5298879 551.404725,94.9694871 L524.601342,110.403963 C522.101234,111.843692 520.561173,114.504194 520.561173,117.383522 L520.561173,148.252603 Z"
                            id="BenefitFill-2"
                            fill="url(#benefitLinearGradient-2)"
                            transform="translate(555.444894, 132.817998) rotate(-330.000000) translate(-555.444894, -132.817998)"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              )}
            </Grid>
          </Grid>
        </div>
      </Container>



     <Container fixed={isDesktop}>
        <div className={classes.wrapper}>
          <Grid container>
            <Grid item md={5}>
              <div className={classes.desc}>
                <Typography
                  className={text.title2}
                  variant="h3"
                  align={isMobile ? "center" : "left"}
                >
                  {t("crypto-landing.benefit_title2")}
                </Typography>
                <ul className={classes.list}>
                <li>
                    <strong>Security</strong>: The cryptographic principles
                    underlying blockchain technology ensure a high level of
                    security. Data stored on a blockchain is encrypted and
                    tamper-proof, reducing the risk of data breaches and
                    unauthorized access.
                  </li>
                  <li>
                    <strong>Data Integrity</strong>: With blockchain technology,
                    data stored on the distributed ledger is immutable and
                    cannot be altered retroactively. This ensures the integrity
                    of public service records, preventing fraud and
                    manipulation.
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item md={7}>
              <div>
                <figure className={classes.img}>
                  <img src={imgAPI.crypto[29]} alt="benefit" />
                </figure>
              </div>
              {!isTablet && (
                <div className={classes.deco}>
                  <svg
                    width="585px"
                    height="151px"
                    viewBox="0 0 585 151"
                    version="1.1"
                  >
                    <defs>
                      <linearGradient
                        x1="66.8412844%"
                        y1="30.62426%"
                        x2="-21.0581447%"
                        y2="100%"
                        id="benefitLinearGradient-2"
                      >
                        <stop
                          stopColor={theme.palette.primary.main}
                          offset="0%"
                        />
                        <stop
                          stopColor={theme.palette.primary.light}
                          offset="100%"
                        />
                      </linearGradient>
                      <linearGradient
                        x1="66.8412844%"
                        y1="30.62426%"
                        x2="-21.0581447%"
                        y2="100%"
                        id="benefitLinearGradient-3"
                      >
                        <stop
                          stopColor={theme.palette.secondary.main}
                          offset="0%"
                        />
                        <stop
                          stopColor={theme.palette.secondary.light}
                          offset="100%"
                        />
                      </linearGradient>
                    </defs>
                    <g
                      id="Benefit-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Benefit-2"
                        transform="translate(-143.000000, -88.000000)"
                      >
                        <g
                          id="Benefit-3"
                          transform="translate(132.623862, 70.912032)"
                        >
                          <path
                            d="M15,67.3628158 C15,70.2420142 16.5400613,72.9026456 19.0401691,74.3422448 L45.8435518,89.7767212 C48.3436597,91.2163204 51.4237822,91.2163204 53.9238901,89.7767212 L80.7272727,74.3422448 C83.2273806,72.9026456 84.7674419,70.2420142 84.7674419,67.3628158 L84.7674419,36.4937339 C84.7674419,33.6144064 83.2273806,30.9539041 80.7272727,29.5141758 L53.9238901,14.0796994 C51.4237822,12.6401002 48.3436597,12.6401002 45.8435518,14.0796994 L19.0401691,29.5141758 C16.5400613,30.9539041 15,33.6144064 15,36.4937339 L15,67.3628158 Z"
                            id="BenefitFill-1"
                            fill="url(#benefitLinearGradient-3)"
                            transform="translate(49.883721, 51.928210) rotate(-330.000000) translate(-49.883721, -51.928210)"
                          />
                          <path
                            d="M520.561173,148.252603 C520.561173,151.131802 522.101234,153.792433 524.601342,155.232033 L551.404725,170.666509 C553.904833,172.106108 556.984955,172.106108 559.485063,170.666509 L586.288446,155.232033 C588.788553,153.792433 590.328615,151.131802 590.328615,148.252603 L590.328615,117.383522 C590.328615,114.504194 588.788553,111.843692 586.288446,110.403963 L559.485063,94.9694871 C556.984955,93.5298879 553.904833,93.5298879 551.404725,94.9694871 L524.601342,110.403963 C522.101234,111.843692 520.561173,114.504194 520.561173,117.383522 L520.561173,148.252603 Z"
                            id="BenefitFill-2"
                            fill="url(#benefitLinearGradient-2)"
                            transform="translate(555.444894, 132.817998) rotate(-330.000000) translate(-555.444894, -132.817998)"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              )}
            </Grid>
          </Grid>
        </div>
      </Container>



      <Container fixed={isDesktop}>
        <div className={classes.wrapper}>
          <Grid container>
            <Grid item md={5}>
              <div className={classes.desc}>
                <Typography
                  className={text.title2}
                  variant="h3"
                  align={isMobile ? "center" : "left"}
                >
                  {t("crypto-landing.benefit_title3")}
                </Typography>
                <ul className={classes.list}>
                  <li>
                    <strong>Cost Efficiency</strong>: Peer-to-peer networks
                    eliminate the need for intermediaries, reducing transaction
                    costs associated with public service delivery. Smart
                    contracts on blockchains automate processes, further
                    streamlining operations and reducing overhead costs.
                  </li>
                  <li>
                    <strong>Accessibility</strong>: Web3 technologies can
                    facilitate access to public services for underserved
                    populations, including those without access to traditional
                    banking systems or government identification. Peer-to-peer
                    networks can enable direct peer-to-peer transactions without
                    relying on centralized authorities.
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item md={7}>
              <div>
                <figure className={classes.img}>
                  <img src={imgAPI.crypto[30]} alt="benefit" />
                </figure>
              </div>
              {!isTablet && (
                <div className={classes.deco}>
                  <svg
                    width="585px"
                    height="151px"
                    viewBox="0 0 585 151"
                    version="1.1"
                  >
                    <defs>
                      <linearGradient
                        x1="66.8412844%"
                        y1="30.62426%"
                        x2="-21.0581447%"
                        y2="100%"
                        id="benefitLinearGradient-2"
                      >
                        <stop
                          stopColor={theme.palette.primary.main}
                          offset="0%"
                        />
                        <stop
                          stopColor={theme.palette.primary.light}
                          offset="100%"
                        />
                      </linearGradient>
                      <linearGradient
                        x1="66.8412844%"
                        y1="30.62426%"
                        x2="-21.0581447%"
                        y2="100%"
                        id="benefitLinearGradient-3"
                      >
                        <stop
                          stopColor={theme.palette.secondary.main}
                          offset="0%"
                        />
                        <stop
                          stopColor={theme.palette.secondary.light}
                          offset="100%"
                        />
                      </linearGradient>
                    </defs>
                    <g
                      id="Benefit-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Benefit-2"
                        transform="translate(-143.000000, -88.000000)"
                      >
                        <g
                          id="Benefit-3"
                          transform="translate(132.623862, 70.912032)"
                        >
                          <path
                            d="M15,67.3628158 C15,70.2420142 16.5400613,72.9026456 19.0401691,74.3422448 L45.8435518,89.7767212 C48.3436597,91.2163204 51.4237822,91.2163204 53.9238901,89.7767212 L80.7272727,74.3422448 C83.2273806,72.9026456 84.7674419,70.2420142 84.7674419,67.3628158 L84.7674419,36.4937339 C84.7674419,33.6144064 83.2273806,30.9539041 80.7272727,29.5141758 L53.9238901,14.0796994 C51.4237822,12.6401002 48.3436597,12.6401002 45.8435518,14.0796994 L19.0401691,29.5141758 C16.5400613,30.9539041 15,33.6144064 15,36.4937339 L15,67.3628158 Z"
                            id="BenefitFill-1"
                            fill="url(#benefitLinearGradient-3)"
                            transform="translate(49.883721, 51.928210) rotate(-330.000000) translate(-49.883721, -51.928210)"
                          />
                          <path
                            d="M520.561173,148.252603 C520.561173,151.131802 522.101234,153.792433 524.601342,155.232033 L551.404725,170.666509 C553.904833,172.106108 556.984955,172.106108 559.485063,170.666509 L586.288446,155.232033 C588.788553,153.792433 590.328615,151.131802 590.328615,148.252603 L590.328615,117.383522 C590.328615,114.504194 588.788553,111.843692 586.288446,110.403963 L559.485063,94.9694871 C556.984955,93.5298879 553.904833,93.5298879 551.404725,94.9694871 L524.601342,110.403963 C522.101234,111.843692 520.561173,114.504194 520.561173,117.383522 L520.561173,148.252603 Z"
                            id="BenefitFill-2"
                            fill="url(#benefitLinearGradient-2)"
                            transform="translate(555.444894, 132.817998) rotate(-330.000000) translate(-555.444894, -132.817998)"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              )}
            </Grid>
          </Grid>
        </div>
      </Container>


      <Container fixed={isDesktop}>
        <div className={classes.wrapper}>
          <Grid container>
            <Grid item md={5}>
              <div className={classes.desc}>
                <Typography
                  className={text.title2}
                  variant="h3"
                  align={isMobile ? "center" : "left"}
                >
                  {t("crypto-landing.benefit_title4")}
                </Typography>
                <ul className={classes.list}>
                <li>
                    <strong>Interoperability</strong>: Blockchain platforms can
                    facilitate interoperability between different public service
                    systems, allowing for seamless data exchange and
                    collaboration between government agencies and other
                    stakeholders. This can lead to more efficient service
                    delivery and better coordination of resources.
                  </li>
                  <li>
                    <strong>Resilience to Downtime</strong>: Peer-to-peer
                    networks are inherently resilient to downtime and censorship
                    since they do not rely on centralized servers or
                    infrastructure. This ensures continuous access to public
                    services even in the event of network disruptions or cyber
                    attacks.
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item md={7}>
              <div>
                <figure className={classes.img}>
                  <img src={imgAPI.crypto[31]} alt="benefit" />
                </figure>
              </div>
              {!isTablet && (
                <div className={classes.deco}>
                  <svg
                    width="585px"
                    height="151px"
                    viewBox="0 0 585 151"
                    version="1.1"
                  >
                    <defs>
                      <linearGradient
                        x1="66.8412844%"
                        y1="30.62426%"
                        x2="-21.0581447%"
                        y2="100%"
                        id="benefitLinearGradient-2"
                      >
                        <stop
                          stopColor={theme.palette.primary.main}
                          offset="0%"
                        />
                        <stop
                          stopColor={theme.palette.primary.light}
                          offset="100%"
                        />
                      </linearGradient>
                      <linearGradient
                        x1="66.8412844%"
                        y1="30.62426%"
                        x2="-21.0581447%"
                        y2="100%"
                        id="benefitLinearGradient-3"
                      >
                        <stop
                          stopColor={theme.palette.secondary.main}
                          offset="0%"
                        />
                        <stop
                          stopColor={theme.palette.secondary.light}
                          offset="100%"
                        />
                      </linearGradient>
                    </defs>
                    <g
                      id="Benefit-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Benefit-2"
                        transform="translate(-143.000000, -88.000000)"
                      >
                        <g
                          id="Benefit-3"
                          transform="translate(132.623862, 70.912032)"
                        >
                          <path
                            d="M15,67.3628158 C15,70.2420142 16.5400613,72.9026456 19.0401691,74.3422448 L45.8435518,89.7767212 C48.3436597,91.2163204 51.4237822,91.2163204 53.9238901,89.7767212 L80.7272727,74.3422448 C83.2273806,72.9026456 84.7674419,70.2420142 84.7674419,67.3628158 L84.7674419,36.4937339 C84.7674419,33.6144064 83.2273806,30.9539041 80.7272727,29.5141758 L53.9238901,14.0796994 C51.4237822,12.6401002 48.3436597,12.6401002 45.8435518,14.0796994 L19.0401691,29.5141758 C16.5400613,30.9539041 15,33.6144064 15,36.4937339 L15,67.3628158 Z"
                            id="BenefitFill-1"
                            fill="url(#benefitLinearGradient-3)"
                            transform="translate(49.883721, 51.928210) rotate(-330.000000) translate(-49.883721, -51.928210)"
                          />
                          <path
                            d="M520.561173,148.252603 C520.561173,151.131802 522.101234,153.792433 524.601342,155.232033 L551.404725,170.666509 C553.904833,172.106108 556.984955,172.106108 559.485063,170.666509 L586.288446,155.232033 C588.788553,153.792433 590.328615,151.131802 590.328615,148.252603 L590.328615,117.383522 C590.328615,114.504194 588.788553,111.843692 586.288446,110.403963 L559.485063,94.9694871 C556.984955,93.5298879 553.904833,93.5298879 551.404725,94.9694871 L524.601342,110.403963 C522.101234,111.843692 520.561173,114.504194 520.561173,117.383522 L520.561173,148.252603 Z"
                            id="BenefitFill-2"
                            fill="url(#benefitLinearGradient-2)"
                            transform="translate(555.444894, 132.817998) rotate(-330.000000) translate(-555.444894, -132.817998)"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              )}
            </Grid>
          </Grid>
        </div>
      </Container>



      <Container fixed={isDesktop}>
        <div className={classes.wrapper}>
          <Grid container>
            <Grid item md={5}>
              <div className={classes.desc}>
                <Typography
                  className={text.title2}
                  variant="h3"
                  align={isMobile ? "center" : "left"}
                >
                  {t("crypto-landing.benefit_title5")}
                </Typography>
                <ul className={classes.list}>
                  <li>
                    <strong>Incentive Mechanisms</strong>: Web3 technologies can
                    incorporate incentive mechanisms, such as token rewards or
                    reputation systems, to encourage participation and
                    contribution to public service systems. This can foster
                    community engagement and cooperation in addressing societal
                    challenges.
                  </li>
                  <li>
                    <strong>Innovation and Experimentation</strong>: By
                    leveraging Web3 technologies, public service systems can
                    foster innovation and experimentation in service delivery
                    models. Smart contracts, decentralized autonomous
                    organizations (DAOs), and other blockchain-based tools
                    enable novel approaches to governance and public
                    administration.
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item md={7}>
              <div>
                <figure className={classes.img}>
                  <img src={imgAPI.crypto[33]} alt="benefit" />
                </figure>
              </div>
              {!isTablet && (
                <div className={classes.deco}>
                  <svg
                    width="585px"
                    height="151px"
                    viewBox="0 0 585 151"
                    version="1.1"
                  >
                    <defs>
                      <linearGradient
                        x1="66.8412844%"
                        y1="30.62426%"
                        x2="-21.0581447%"
                        y2="100%"
                        id="benefitLinearGradient-2"
                      >
                        <stop
                          stopColor={theme.palette.primary.main}
                          offset="0%"
                        />
                        <stop
                          stopColor={theme.palette.primary.light}
                          offset="100%"
                        />
                      </linearGradient>
                      <linearGradient
                        x1="66.8412844%"
                        y1="30.62426%"
                        x2="-21.0581447%"
                        y2="100%"
                        id="benefitLinearGradient-3"
                      >
                        <stop
                          stopColor={theme.palette.secondary.main}
                          offset="0%"
                        />
                        <stop
                          stopColor={theme.palette.secondary.light}
                          offset="100%"
                        />
                      </linearGradient>
                    </defs>
                    <g
                      id="Benefit-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Benefit-2"
                        transform="translate(-143.000000, -88.000000)"
                      >
                        <g
                          id="Benefit-3"
                          transform="translate(132.623862, 70.912032)"
                        >
                          <path
                            d="M15,67.3628158 C15,70.2420142 16.5400613,72.9026456 19.0401691,74.3422448 L45.8435518,89.7767212 C48.3436597,91.2163204 51.4237822,91.2163204 53.9238901,89.7767212 L80.7272727,74.3422448 C83.2273806,72.9026456 84.7674419,70.2420142 84.7674419,67.3628158 L84.7674419,36.4937339 C84.7674419,33.6144064 83.2273806,30.9539041 80.7272727,29.5141758 L53.9238901,14.0796994 C51.4237822,12.6401002 48.3436597,12.6401002 45.8435518,14.0796994 L19.0401691,29.5141758 C16.5400613,30.9539041 15,33.6144064 15,36.4937339 L15,67.3628158 Z"
                            id="BenefitFill-1"
                            fill="url(#benefitLinearGradient-3)"
                            transform="translate(49.883721, 51.928210) rotate(-330.000000) translate(-49.883721, -51.928210)"
                          />
                          <path
                            d="M520.561173,148.252603 C520.561173,151.131802 522.101234,153.792433 524.601342,155.232033 L551.404725,170.666509 C553.904833,172.106108 556.984955,172.106108 559.485063,170.666509 L586.288446,155.232033 C588.788553,153.792433 590.328615,151.131802 590.328615,148.252603 L590.328615,117.383522 C590.328615,114.504194 588.788553,111.843692 586.288446,110.403963 L559.485063,94.9694871 C556.984955,93.5298879 553.904833,93.5298879 551.404725,94.9694871 L524.601342,110.403963 C522.101234,111.843692 520.561173,114.504194 520.561173,117.383522 L520.561173,148.252603 Z"
                            id="BenefitFill-2"
                            fill="url(#benefitLinearGradient-2)"
                            transform="translate(555.444894, 132.817998) rotate(-330.000000) translate(-555.444894, -132.817998)"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              )}
            </Grid>
          </Grid>
        </div>
      </Container>


    </div>
  );
}

export default Benefit;
