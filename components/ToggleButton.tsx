import Mattact from '../library/Mattact';
import jss from 'jss';

import Tooltip from './Tooltip';

const ToggleButton = () => {
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
      animation: 'wave 1s infinite linear',
      '&:focus': {
        outline: 'none',
        boxShadow: '0 0 0 2px rgb(135, 65, 135)'
      }
    }
  };

  const { classes } = jss.createStyleSheet(styles).attach();
  
  const createTooltipComponent = (event: Event, fullScreen: boolean): void => {
    if (event instanceof KeyboardEvent && event.key !== 'Enter') {
      return;
    }

    const tooltipComp = document.querySelector('form');

    if (tooltipComp) {
      Mattact.unrenderTooltip();
    } else {
      const tooltip: HTMLElement = (
        <Tooltip clickEvent={event as MouseEvent} fullScreen={fullScreen} contact={true}></Tooltip>
      );
  
      Mattact.renderTooltip(tooltip, document.getElementById('tooltip-render-container'))
    }
  }

  const isMobile = window.innerWidth <= 425;

  return (
    <button 
      className={classes.contactButton}
      onMousedown={() => createTooltipComponent(event as MouseEvent, isMobile)}
      onKeydown={() => createTooltipComponent(event as KeyboardEvent, isMobile)}
    >
      <span aria-hidden='true' focusable='false'>👋</span>
      <span className='sr-only'>Contact Me</span>
    </button>
  )
}

export default ToggleButton;