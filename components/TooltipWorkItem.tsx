import Mattact from '../library/Mattact';
import jss from 'jss';

const TooltipWorkItem = (props: { item: string }) => {
  const styles = {
    techKnowledgeItem: `
    display: flex;
    align-items: center;
    margin: 10px 5px;
    `
  }

  const { classes } = jss.createStyleSheet(styles).attach();

  return (
    <li className={classes.techKnowledgeItem}>
      <div className='icon-check'></div>
      <p>{props.item}</p>
    </li>
  )
}

export default TooltipWorkItem;