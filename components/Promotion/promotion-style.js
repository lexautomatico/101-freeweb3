import { makeStyles } from 'tss-react/mui';
import { lighten, darken } from '@mui/material/styles';
import decoBottomLight from 'public/images/crypto/deco-bottom-light.svg';
import decoBottomDark from 'public/images/crypto/deco-bottom-dark.svg';

const promotionStyles = makeStyles({ uniqId: 'promotion' })((theme, _params, classes) => ({
  root: {
    background: `url(${theme.palette.mode === 'dark' ? decoBottomDark : decoBottomLight}) bottom center no-repeat`,
    backgroundColor: theme.palette.mode === 'dark' ? darken(theme.palette.primary.dark, 0.6) : lighten(theme.palette.primary.main, 0.84),
    backgroundSize: '100%',
    position: 'relative',
    backgroundPosition: 'center 101%',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(10, 3),
    },
    [theme.breakpoints.down('sm')]: {
      padding: 0
    },
  },
  sliderWrap: {
    '& a[class*="previousButton"]': {
      right: 120,
      left: 'auto',
      top: 200,
      [theme.breakpoints.down('lg')]: {
        right: 20
      }
    },
    '& a[class*="nextButton"]': {
      left: 'auto',
      top: 140,
      right: 120,
      [theme.breakpoints.down('lg')]: {
        right: 20
      }
    },
    '& > div': {
      height: 500,
      [theme.breakpoints.down('md')]: {
        height: 320
      },
      '& > a': {
        background: theme.palette.background.paper,
        borderRadius: '50%',
        width: 40,
        height: 40,
        transition: 'all 0.3s ease',
        position: 'absolute',
        zIndex: 11,
        boxShadow: theme.shadows[2],
        [theme.breakpoints.down('sm')]: {
          display: 'none'
        },
        '&:hover': {
          backgroundImage: 'none'
        },
        '& svg': {
          width: 35,
          height: 35,
          position: 'absolute',
          left: 3,
          top: 3,
          fill: theme.palette.text.secondary
        }
      }
    }
  },
  paper: {},
  time: {},
  even: {
    '& h1': {
      color: theme.palette.secondary.main,
    },
    [`& .${classes.decoration}`]: {
      '& svg': {
        fill: theme.palette.secondary.main
      }
    }
  },
  odd: {
    '& h1': {
      color: theme.palette.primary.main,
    },
    [`& .${classes.decoration}`]: {
      '& svg': {
        fill: theme.palette.primary.main
      }
    }
  },
  hexa: {},
  item: {
    margin: theme.spacing(2, 0),
    padding: theme.spacing(0, 1),
    maxHeight: 500,
    zIndex: 10,
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(8),
    },
    '& svg': {
      width: 450,
      height: 450
    },
    '& section': {
      position: 'relative',
      zIndex: 10,
      opacity: 0,
      transform: 'translateX(40px)',
      transition: 'all 0.5s ease',
    },
    '&[class*="current"]': {
      '& section': {
        transform: 'translateX(0px)',
        opacity: 1
      },
    },
    '& figure': {
      margin: 0,
      lineHeight: '450px',
      width: 450,
      height: 450,
      textAlign: 'center',
      left: 0,
      top: 17,
      position: 'absolute',
      transition: 'none !important',
      '& img': {
        transition: 'none',
        verticalAlign: 'middle',
        width: 350,
        height: 393,
        opacity: '1 !important',
        transform: 'none !important',
      }
    },
    [`& .${classes.paper}`]: {
      position: 'relative',
      padding: theme.spacing(9, 6, 9, 16),
      borderRadius: 24,
      [theme.breakpoints.up('lg')]: {
        left: -80,
      },
      [theme.breakpoints.up('md')]: {
        marginTop: 60,
      },
      [theme.breakpoints.down('lg')]: {
        width: 'calc(100% - 80px)',
      },
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(6),
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        padding: theme.spacing(2),
      },
      '& button': {
        justifyContent: 'flex-start',
        [theme.breakpoints.down('md')]: {
          justifyContent: 'center',
        }
      }
    },
    '& h1': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(3),
      lineHeight: '42px',
      '& button': {
        textAlign: 'left',
        fontSize: 36,
        display: 'block',
        maxWidth: 500,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        fontFamily: 'Montserrat',
        fontWeight: theme.typography.fontWeightBold,
        [theme.breakpoints.down('lg')]: {
          width: '100%',
          fontSize: 28,
          lineHeight: '36px',
          textAlign: 'center'
        },
        [theme.breakpoints.down('sm')]: {
          fontSize: 20,
          lineHeight: '28px',
        }
      },
      [theme.breakpoints.down('sm')]: {
        whiteSpace: 'normal',
        lineHeight: '32px'
      },
    },
    '& p': {
      marginBottom: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
        fontSize: 14,
      }
    },
    [`& .${classes.time}`]: {
      '& h6': {
        fontSize: 14,
        color: theme.palette.text.secondary,
        [theme.breakpoints.down('sm')]: {
          textAlign: 'center'
        }
      }
    },
    '&:before': {
      display: 'none'
    }
  },
  decoration: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
    opacity: 0.5
  },
  imgWrap: {
    position: 'relative',
    top: -24,
    left: -400
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default promotionStyles;
