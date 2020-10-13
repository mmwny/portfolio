import Mattact from '../library/Mattact';
import jss from 'jss';

import Tooltip from './Tooltip';
import { TechStackItem } from '../types/Mwny';

const WorkLogo = (props: { info: TechStackItem, tech: string }) => {
  const styles = {
    svgContainer: {
      margin: '10px 5px',
      height: '40px',
      backgroundRepeat: 'no-repeat',
      cursor: 'pointer',
      width: '35px',
      backgroundSize: '35px',
      '&.logo-react': {
        width: '42px',
        backgroundSize: '45px'
      }
    }
  }

  const { classes } = jss.createStyleSheet(styles).attach();
  
  const createTooltipComponent = (event: MouseEvent, info: any): void => {
    const tooltipComp = document.querySelector('form');

    if (tooltipComp) {
      Mattact.unrenderTooltip();
    }
    
    const tooltip: HTMLElement = (
      <Tooltip clickEvent={event} fullScreen={false} info={info}></Tooltip>
    );

    Mattact.renderTooltip(tooltip, document.getElementById('tooltip-render-container'))
  }

  return (
    <div
      className={`${classes.svgContainer} logo-${props.tech}`}
      role='img'
      aria-label={`${props.tech} logo`}
      onMouseenter={() => createTooltipComponent(event as MouseEvent, props.info)}
      onMouseleave={() => Mattact.unrenderTooltip()}
    >
      <a 
        onFocus={() => createTooltipComponent(event as MouseEvent, props.info)}
        onBlur={() => Mattact.unrenderTooltip()}
        href='#'
      ></a>
    </div>
  )
}

export default WorkLogo;