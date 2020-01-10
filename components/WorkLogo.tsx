import Mattact from '../library/Mattact';
import Tooltip from './Tooltip';

import { WorkLogoTooltip } from '../types/Mwny';

const WorkLogo = (props: { info: WorkLogoTooltip, tech: string }) => {
  const createTooltipComponent = (event: MouseEvent, info: any): void => {
    const tooltip: HTMLElement = (
      <Tooltip clickEvent={event} info={info}></Tooltip>
    );

    Mattact.renderTooltip(tooltip, document.getElementById('tooltip-render-container'))
  }

  return (
    <div
      className={`svg-container logo-${props.tech}`}
      onClick={() => createTooltipComponent(event as MouseEvent, props.info)}
    // onMouseleave={() => Mattact.unrenderTooltip()}
    ></div>
  )
}

export default WorkLogo;