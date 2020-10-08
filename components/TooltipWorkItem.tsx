import Mattact from '../library/Mattact';
import jss from 'jss';

import { TechStackItem } from '../types/Mwny';

const TooltipWorkItem = (props: { item: TechStackItem }) => {
  const styles = {
    title: `
      text-align: right;
      border-radius: 8px 8px 0 0;
      padding: 15px;
      color: white;
      font-family: 'Roboto-Regular';
      background-color: #${props.item.color};
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
    `,
    techKnowledgeItem: `
      display: flex;
      align-items: top;
      margin: 10px 5px;
    `,
    text: `
      font-size: 15px;
      margin-left: 5px;
      width: 295px;
    `
  }

  const { classes } = jss.createStyleSheet(styles).attach();

  return (
    <div>
      <h3 className={classes.title}>{props.item.title}</h3>
      <div className={classes.logoContainer}>
        <div className={`${classes.logo} logo-${props.item.logo}`}></div>
      </div>
      <ul className={classes.techKnowledgeContainer}>
        {
          props.item.techExp[0] ?
            <li className={classes.techKnowledgeItem}>
              <div className='icon-check'></div>
              <p className={classes.text}>{props.item.techExp[0]}</p>
            </li>
            : ''
        }
        {
          props.item.techExp[1] ?
            <li className={classes.techKnowledgeItem}>
              <div className='icon-check'></div>
              <p className={classes.text}>{props.item.techExp[1]}</p>
            </li> 
            : ''
        }
        {
          props.item.techExp[2] ? 
            <li className={classes.techKnowledgeItem}>
              <div className='icon-check'></div>
              <p className={classes.text}>{props.item.techExp[2]}</p>
            </li> 
            : ''
        }   
      </ul>
    </div>
  );
}

export default TooltipWorkItem;