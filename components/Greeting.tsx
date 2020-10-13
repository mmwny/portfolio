import Mattact from '../library/Mattact';
import jss from 'jss';

import { Profile } from '../types/Mwny';
import ToggleButton from './ToggleButton';

const Greeting = (props: { profile: Profile }) => {
  const styles = {
    todoContainer: {
      fontFamily: 'monospace',
      fontSize: '14px',
      color: 'gray',
      paddingLeft: '25px',
      '& > p': {
        margin: '15px 0',
        fontWeight: 'lighter'
      }
    },
    '@media screen and (max-width: 768px)': {
      todoContainer: {
        paddingLeft: '10px'
      }
    },
    mobileLogo: {},
    '@media screen and (max-width: 325px) and (max-height: 575px)': {
      mobileLogo: {
        display: 'none'
      }
    }
  }

  const { classes } = jss.createStyleSheet(styles).attach();

  return (
     <div>
      <ToggleButton />
      <h2>{props.profile.greeting}</h2>
      <h1>{props.profile.blurb}</h1>
      <div className={classes.todoContainer}>
        <p>&gt; {props.profile.tasks[0]}</p>
        <p className={classes.mobileLogo}>&gt; {props.profile.tasks[1]}</p>
        <p>&gt; {props.profile.tasks[2]}</p>
        <p>&gt; {props.profile.tasks[3]}</p>
      </div>
    </div>
  );
}

export default Greeting;