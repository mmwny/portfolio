import { h, init } from 'snabbdom';
import propsModule from 'snabbdom/modules/props';
import eventlistenersModule from 'snabbdom/modules/eventlisteners';
import { VNode } from 'snabbdom/vnode';

const patch = init([propsModule, eventlistenersModule]);
let rootVNode: VNode;
let tooltipVNode: VNode;

/**
 * Creates an element and the content for it, allows for nested elements,
 * Is a poor man's JSX...
 * @param element
 * @param props 
 * @param children 
 */
const buildElement = (element: any, props: any = {}, ...children: any): any => {
  if (typeof element === 'function') {
    return element(props);
  }

  let dataProps = {};
  let eventProps = {};

  for (let propKey in props) {
    if (propKey.substr(0, 2) === 'on') {
      const event = propKey.substring(2).toLowerCase();
      eventProps[event] = props[propKey];
    }
    else {
      dataProps[propKey] = props[propKey];
    }
  }

  return h(element, { props: dataProps, on: eventProps }, children);
}

/**
 * Render function to inject root element
 * @param el
 * @param rootDomElement
 */
const render = (el, rootDomElement) => {
  if (rootVNode == null) {
    rootVNode = rootDomElement;
  }

  rootVNode = patch(rootVNode, el);
}

/**
 * Render function to create tooltip
 * @param el 
 * @param rootDomElement 
 */
const renderTooltip = (el, rootDomElement) => {
  if (tooltipVNode == null) {
    tooltipVNode = rootDomElement;
  }

  tooltipVNode = patch(tooltipVNode, el);
}

/**
 * Function to unmount the tooltip
 */
const unrenderTooltip = () => {
  tooltipVNode = patch(tooltipVNode, h('span#tooltip-render-container'));
}

const rerenderTooltip = (element, props, children) => { 
  tooltipVNode = patch(tooltipVNode, buildElement(element, props, children));
}

const Mattact = {
  buildElement,
  render,
  renderTooltip,
  rerenderTooltip,
  unrenderTooltip
}

export default Mattact;