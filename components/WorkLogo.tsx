import Mattact from '../library/Mattact';
import Tooltip from './Tooltip';

import { TechStackItem } from '../types/Mwny';

const WorkLogo = (props: { info: TechStackItem, tech: string }) => {
  const createTooltipComponent = (event: MouseEvent, info: any): void => {
    const tooltip: HTMLElement = (
      <Tooltip clickEvent={event} info={info}></Tooltip>
    );

    Mattact.renderTooltip(tooltip, document.getElementById('tooltip-render-container'))
  }

  return (
    <div
      className={`svg-container logo-${props.tech}`}
      onMouseenter={() => createTooltipComponent(event as MouseEvent, props.info)}
      onMouseleave={() => Mattact.unrenderTooltip()}
    >
      <a 
        onFocus={() => createTooltipComponent(event as MouseEvent, props.info)}
        onBlur={() => Mattact.unrenderTooltip()}
        href='#'></a>
    </div>
  )
}

export default WorkLogo;