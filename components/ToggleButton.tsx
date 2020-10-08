import Mattact from '../library/Mattact';
import jss from 'jss';

import Tooltip from './Tooltip';

const ToggleButton = () => {
  const createTooltipComponent = (event: MouseEvent, fullScreen: boolean): void => {
    const tooltip: HTMLElement = (
      <Tooltip clickEvent={event} fullScreen={fullScreen} contact={true}></Tooltip>
    );

    Mattact.renderTooltip(tooltip, document.getElementById('tooltip-render-container'))
  }

  const styles = {
    contactButton: {
      float: 'right',
      fontSize: '16px',
      padding: '8px',
      backgroundColor: '#fff568',
      border: 'none',
      borderRadius: '50%',
      boxShadow: '0 1px 3px 0 rgba(74, 74, 74, 0.47)',
      cursor:'pointer',
      transition: 'all 1s',
      '&:focus': {
        outline: 'none',
        transform: 'rotate(45deg)',
        boxShadow: 'none'
      }
    }
  };

  const { classes } = jss.createStyleSheet(styles).attach();

  const isMobile = window.innerWidth <= 425;

  return (
    <button 
      className={classes.contactButton}
      role='img' 
      aria-label='Contact Me'
      onFocus={() => createTooltipComponent(event as MouseEvent, isMobile)}
    >
      👋
    </button>
  )
}

export default ToggleButton;