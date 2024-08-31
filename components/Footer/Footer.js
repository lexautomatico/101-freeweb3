import React from "react";
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import { useTranslation } from "next-i18next";
import logo from "public/images/crypto-logo.png";
import brand from "public/text/brand";
import imgApi from "public/images/imgAPI";
import SelectLang from "../LangSwitch/Select";
import useStyles from "./footer-style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Copyright() {
  return (
    <Typography variant="body2" display="block" color="textSecondary">
      &copy;&nbsp;
      {brand.crypto.footerText}
    </Typography>
  );
}

const footer = {
  description: [
    "Terms of use",
    "Privacy policy",

  ],
  link: [
    "https://terms.freeweb3.com",
    "https://terms.freeweb3.com",
  ],
};

const news = [
  {
    text: "Freeweb3 is coming to your work.",
    img: imgApi.avatar[0],
  },
  {
    text: "Freeweb3 is coming to your home.",
    img: imgApi.avatar[1],
  },
  {
    text: "Freeweb3 reaches boyond the traditional.",
    img: imgApi.avatar[2],
  },
];

function Footer(props) {
  const { classes, cx } = useStyles();
  const { invert, toggleDir } = props;

  // Translation Function
  const { t } = useTranslation("common");

  return (
    <Container fixed component="footer">
      <div className={cx(classes.footer, invert && classes.invert)}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <div className={classes.logo}>
              <img src={logo} alt="logo" />
              <Typography variant="h6" color="textPrimary">
                {brand.crypto.projectName}
              </Typography>
            </div>
            <Typography
              color="textPrimary"
              className={classes.footerDesc}
              gutterBottom
            >
              {t("crypto-landing.banner_title")}
            </Typography>
            <div className={classes.quickLinks}>
              <Typography
                variant="h6"
                className={classes.title}
                color="textPrimary"
                gutterBottom
              >
                {t("crypto-landing.footer_link")}
              </Typography>
              <ul>
                {footer.description.map((item, index) => (
                  <li key={item}>
                    <Link
                      href={footer.link[index]}
                      variant="subtitle1"
                      color="textSecondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            {news.map((item, index) => (
              <ButtonBase
                className={classes.blogItem}
                href="#"
                key={index.toString()}
              >
                <figure>
                  <img src={item.img} alt="thumb" />
                </figure>
                <div className={classes.listText}>
                  <Typography variant="button" className={classes.category}>
                    {t("crypto-landing.footer_news")}
                  </Typography>
                  <Typography display="block" component="span">
                    {item.text}
                  </Typography>
                </div>
              </ButtonBase>
            ))}
          </Grid>
          <Grid item xs={12} md={3}>
            <div className={classes.socmed}>
              <a
                href="https://x.com/tenfinney"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  aria-label="Twitter"
                  className={classes.margin}
                  size="small"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                      d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                      fill="white"
                    />
                  </svg>
                </IconButton>
              </a>
              <a
                href="https://www.linkedin.com/in/scott-stevenson-jd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  aria-label="Linkedin"
                  className={classes.margin}
                  size="small"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ color: "white" }}
                  />
                </IconButton>
              </a>
              <a
                href="https://github.com/tenfinney"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  aria-label="GitHub"
                  className={classes.margin}
                  size="small"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ color: "white" }}
                  />
                </IconButton>
              </a>
            </div>
          </Grid>
          <Copyright />
        </Grid>
      </div>
    </Container>
  );
}

Footer.propTypes = {
  invert: PropTypes.bool,
  toggleDir: PropTypes.func,
};

Footer.defaultProps = {
  invert: false,
  toggleDir: () => {},
};

export default Footer;
