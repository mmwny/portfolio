import Mattact from '../library/Mattact';
import jss from 'jss';

import * as porfolio from '../content/portfolio.json';

const Contact = () => {
  const styles = {
    contactContainer: `
      margin: 0;
      padding: 10px 15px 15px 15px;
      list-style: none;
      display: flex;
      font-family: 'Roboto-Bold';
      font-size: 14px;
    `,
    contactItem: {
      textDecoration: 'none',
      color: 'grey',
      margin: '0 5px',
      padding: '5px 10px',
      backgroundSize: '200% 100%',
      backgroundImage: 'linear-gradient(to right, rgb(240, 240, 240) 50%, yellow 50%)',
      transition: 'background-position 1s',
      '&:focus': {
        color: 'black',
        outline: 'none',
        backgroundPosition: '-100% 0'
      }
    }
  }

  const { classes } = jss.createStyleSheet(styles).attach();

  return (
    <ul className={classes.contactContainer}>
      <li><a className={classes.contactItem} href={porfolio.github} target='_blank' rel='noopener'>mmwny</a></li>
      <li><a className={classes.contactItem} href={porfolio.linkedIn} target='_blank' rel='noopener'>linkedin</a></li>
      <li><a className={classes.contactItem} href={`mailto: ${porfolio.email}`}>matt@mwny.dev</a></li>
      <li><a className={classes.contactItem} href={porfolio.resume} download>resume</a></li>
    </ul>
  )
}

export default Contact;