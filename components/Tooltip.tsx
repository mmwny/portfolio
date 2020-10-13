import Mattact from '../library/Mattact';
import jss from 'jss';

import TooltipWorkItem from './TooltipWorkItem';
import { TechStackItem } from '../types/Mwny';
import TooltipContact from './TooltipContact';

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

const calculateWidth = (fullScreen: boolean, contact: boolean, pageWidth: number) => {
  if (fullScreen || pageWidth < 360) {
    return pageWidth - 80;
  } else if (contact) {
    return 300;
  } 
  return 340;
}

const calculateHeight = (fullScreen: boolean, contact: boolean, pageHeight: number) => {
  if (fullScreen) {
    return pageHeight - 80;
  } else if (contact) {
    return 500;
  } 
  return 250;
}

const Tooltip = (props: { clickEvent: MouseEvent, fullScreen?: boolean, contact?: boolean, submittedForm?: boolean, invalidForm?: boolean, info?: TechStackItem }) => {
  const elementClicked: HTMLElement = (props.clickEvent.currentTarget || props.clickEvent.target) as HTMLElement;

  const clientXIfClickCenter = props.clickEvent.clientX + (elementClicked.offsetWidth / 2 - props.clickEvent.offsetX);
  const clientYIfClickCenter = props.clickEvent.clientY + (elementClicked.offsetHeight / 2 - props.clickEvent.offsetY);
  const pageYIfClickCenter = props.clickEvent.pageY + (elementClicked.offsetHeight / 2 - props.clickEvent.offsetY);

  const horizontalAdjust = elementClicked.offsetWidth / 2;
  const verticalAdjust = elementClicked.offsetHeight / 2 + 5;
  
  const width = calculateWidth(props.fullScreen, props.contact, window.innerWidth);
  const height = calculateHeight(props.fullScreen, props.contact, window.innerHeight);

  const posX = props.fullScreen || props.contact ? (window.innerWidth - width) / 2 : calPosX(clientXIfClickCenter, horizontalAdjust);
  const posY = props.fullScreen || props.contact ? (window.innerHeight - height) / 2 : calPosY(clientYIfClickCenter, pageYIfClickCenter, verticalAdjust);

  const styles = {
    tooltipContainer: `
      position: absolute;
      top: ${posY}px;
      left: ${posX}px;
      width: ${width}px; 
      height: ${height}px;   
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 1px 3px 0 rgba(74, 74, 74, 0.47);
    `,
  }

  const { classes } = jss.createStyleSheet(styles).attach();

  return (
    <div className={classes.tooltipContainer}>
      { props.contact ? <TooltipContact fullScreen={props.fullScreen} submittedForm={props.submittedForm} invalidForm={props.invalidForm} /> : <TooltipWorkItem item={props.info} /> }
    </div>
  );
}

export default Tooltip;