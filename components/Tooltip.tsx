import Mattact from '../library/Mattact';
import jss from 'jss';

import TooltipWorkItem from './TooltipWorkItem';
import { TechStackItem } from '../types/Mwny';

const calPosX = (clientX: number, horizontalAdjust: number): number => {
  if (!clientX) {
    return (window.innerWidth - 350) / 2;
  }

  if (window.innerWidth < 550) {
    return (window.innerWidth - 350) / 2;
  } else {
    let rightSideSpace = 350 - horizontalAdjust;
    let popOverPosIfRight = clientX - 350 + horizontalAdjust;
    if (clientX + rightSideSpace > window.innerWidth) {
      if (popOverPosIfRight > 0) {
        return popOverPosIfRight;
      } else {
        return  (window.innerWidth - 350) / 2;
      }
    } else {
      return clientX - horizontalAdjust;
    }
  }
}

const calPosY = (clientY: number, pageY: number, verticalAdjust: number): number => {
  if (!clientY) {
    return (window.innerHeight - 250) / 2;
  }
  let bottomSideSpace = 250 + verticalAdjust;

  if (clientY + bottomSideSpace > window.innerHeight) {
    return pageY - 250 - verticalAdjust;
  } else {
    return pageY + verticalAdjust;
  }
}

const Tooltip = (props: { clickEvent: MouseEvent, info: TechStackItem }) => {
  console.log(props.clickEvent)
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
          {props.info.techExp[0] ? <TooltipWorkItem item={props.info.techExp[0]} /> : ''}
          {props.info.techExp[1] ? <TooltipWorkItem item={props.info.techExp[1]} /> : ''}
          {props.info.techExp[2] ? <TooltipWorkItem item={props.info.techExp[2]} /> : ''}
          {/* {
            () => props.info.techExp.map((tech: string) => <TooltipWorkItem item={tech} />)
          } */}
        </ul>
      </div>
    </div>
  );
}

export default Tooltip;