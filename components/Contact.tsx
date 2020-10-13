import Mattact from '../library/Mattact';
import jss from 'jss';

import * as porfolio from '../content/portfolio.json';

const Contact = () => {
  const styles = {
    contactContainer: {
      margin: '0',
      width: '100%',
      padding: '10px 0',
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'Roboto-Bold',
      fontSize: '14px',
      '& li': {
        margin: '5px 5px'
      },
    },
    contactItem: {
      textDecoration: 'none',
      color: 'grey',
      backgroundSize: '200% 100%',
      backgroundImage: 'linear-gradient(to right, rgb(240, 240, 240) 50%, yellow 50%)',
      transition: 'background-position 1s',
      '&:focus': {
        color: 'black',
        outline: 'none',
        backgroundPosition: '-100% 0'
      }
    },
    '@media screen and (max-width: 768px)': {
      contactContainer: {
        flexDirection: 'column'
      }
    }
  }

  const { classes } = jss.createStyleSheet(styles).attach();

  return (
    <ul className={classes.contactContainer}>
      <li><a className={classes.contactItem} href={porfolio.github} target='_blank' rel='noopener'>Github</a></li>
      <li><a className={classes.contactItem} href={porfolio.linkedIn} target='_blank' rel='noopener'>Linkedin</a></li>
      <li><a className={classes.contactItem} href={`mailto: ${porfolio.email}`}>Email</a></li>
      <li><a className={classes.contactItem} href={porfolio.resume} download>Resume</a></li>
    </ul>
  )
}

export default Contact;