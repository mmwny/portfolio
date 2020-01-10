import Mattact from '../library/Mattact';
import jss from 'jss';

import TooltipWorkItem from './TooltipWorkItem';
import { WorkLogoTooltip } from '../types/Mwny';

const calPosX = (mouseX: number, horizontalAdjust: number): number => {
  let ret = 0;
  if (window.innerWidth < 550) {
    ret = (window.innerWidth - 350) / 2;
  } else {
    let rightSideSpace = 350 - horizontalAdjust;
    let popOverPosIfRight = mouseX - 350 + horizontalAdjust;
    if (mouseX + rightSideSpace > window.innerWidth) {
      if (popOverPosIfRight > 0) {
        ret = popOverPosIfRight;
      } else {
        ret = (window.innerWidth - 350) / 2;
      }
    } else {
      ret = mouseX - horizontalAdjust;
    }
  }
  return ret;
}

const calPosY = (clientY: number, pageY: number, verticalAdjust: number): number => {
  let ret: number;
  let bottomSideSpace = 250 + verticalAdjust;
  if (clientY + bottomSideSpace > window.innerHeight) {
    ret = pageY - 250 - verticalAdjust;
  } else {
    ret = pageY + verticalAdjust;
  }
  return ret;
}

const Tooltip = (props: { clickEvent: MouseEvent, info: WorkLogoTooltip }) => {
  const elementClicked: HTMLElement = (event.currentTarget || event.target) as HTMLElement;

  const clientXIfClickCenter = props.clickEvent.clientX + (elementClicked.offsetWidth / 2 - props.clickEvent.offsetX);
  const clientYIfClickCenter = props.clickEvent.clientY + (elementClicked.offsetHeight / 2 - props.clickEvent.offsetY);
  const pageYIfClickCenter = props.clickEvent.pageY + (elementClicked.offsetHeight / 2 - props.clickEvent.offsetY);

  const horizontalAdjust = elementClicked.offsetWidth / 2;
  const verticalAdjust = elementClicked.offsetHeight / 2 + 5;

  const posX = calPosX(clientXIfClickCenter, horizontalAdjust);
  const posY = calPosY(clientYIfClickCenter, pageYIfClickCenter, verticalAdjust);

  const styles = {
    tooltipContainer: `
      position: absolute;
      top: ${posY}px;
      left: ${posX}px;
      width: 350px;
      height: 250px;
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 1px 3px 0 rgba(74, 74, 74, 0.47);
    `,
    title: `
      text-align: right;
      border-radius: 8px 8px 0 0;
      padding: 15px;
      color: white;
      font-family: 'Roboto-Regular';
      background-color: #${props.info.color};
    `,
    logoContainer: `
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      overflow: hidden;
      top: 15px;
      left: 15px;
      width: 50px;
      height: 50px;
      background-color: white;
      box-shadow: 0 1px 3px 0 rgba(74, 74, 74, 0.47);
    `,
    logo: `
      width: 35px;
      height: 35px;
      background-size: 35px 34px;
      background-repeat: no-repeat;
      z-index: 10;
    `,
    techKnowledgeContainer: `
      margin: 0;
      padding: 10px 15px 15px 15px;
      list-style: none;
    `
  }

  const { classes } = jss.createStyleSheet(styles).attach();

  return (
    <div className={classes.tooltipContainer}>
      <div>
        <h3 className={classes.title}>{props.info.title}</h3>
        <div className={classes.logoContainer}>
          <div className={`${classes.logo} logo-${props.info.logo}`}></div>
        </div>
        <ul className={classes.techKnowledgeContainer}>
          {<TooltipWorkItem item={props.info.techExp[0]} />}
          {<TooltipWorkItem item={props.info.techExp[1]} />}
          {<TooltipWorkItem item={props.info.techExp[2]} />}
          {/* {
            () => props.info.techExp.map((tech: string) => <TooltipWorkItem item={tech} />)
          } */}
        </ul>
      </div>
    </div>
  );
}

export default Tooltip;