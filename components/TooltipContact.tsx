import Mattact from '../library/Mattact';
import jss from 'jss';

const TooltipContact = () => {
  const styles = {
    header: {
      display: 'flex',
      padding: '15px',
      'justify-content': 'space-between',
      '& > button': {
        'background': 'none',
        border: 'none',
        cursor: 'pointer'
      }
    }
  }

  const { classes } = jss.createStyleSheet(styles).attach();

  return (
    <div>
      <header 
        className={classes.header}
      >
        <h4>Let's get in touch</h4>
        <button onClick={() => Mattact.unrenderTooltip()}>✖️</button>
      </header>
    </div>
  );
}

export default TooltipContact;