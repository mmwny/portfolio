import Mattact from '../library/Mattact';
import jss from 'jss';

const TooltipWorkItem = (props: { item: string }) => {
  const styles = {
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
    <li className={classes.techKnowledgeItem}>
      <div className='icon-check'></div>
      <p className={classes.text}>{props.item}</p>
    </li>
  )
}

export default TooltipWorkItem;