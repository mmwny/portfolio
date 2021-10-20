import Mattact from '../library/Mattact';
import jss from 'jss';

import WorkLogo from './WorkLogo';
import { TechStack } from '../types/Mwny';

const Work = (props: { techStack: TechStack }) => {
  const styles = {
    workContainer: {
      backgroundColor: 'white',
      padding: '15px',
      borderRadius: '4px',
      display: 'grid',
      gridTemplateColumns: '160px 240px 160px',
      '& h3': {
        fontFamily: 'Roboto-Regular',
        fontSize: '16px'
      },
      '& a:focus': {
        outline: 'lightgrey auto 1px'
      },
      '& span > a > div': {
        margin: '10px 5px',
        backgroundRepeat: 'no-repeat',
        height: '35px',
      },
      '& span > div': {
        display: 'flex'
      }
    },
    '@media screen and (max-width: 768px)': {
      workContainer: {
        gridTemplateColumns: 'auto'
      }
    }
  }

  const { classes } = jss.createStyleSheet(styles).attach();

  return (
    <section className={classes.workContainer}>
      <span>
        <h3>I'm currently at:</h3>
        <a
          className='company-logo' 
          href='https://www.koho.ca/'
          rel='noopner'
          target='_blank'
        >
          <div className='logo' role='img' aria-label='KOHO Logo'></div>
        </a>
      </span>
      <span>
        <h3>At work I use:</h3>
        <div>
          <WorkLogo info={props.techStack.typescript} tech='typescript' />
          <WorkLogo info={props.techStack.angular} tech='angular' />
          <WorkLogo info={props.techStack.rxjs} tech='rxjs' />
          <WorkLogo info={props.techStack.ngrx} tech='ngrx' />
          <WorkLogo info={props.techStack.ionic} tech='ionic' />
        </div>
      </span>
      <span>
        <h3>At home I use:</h3>
        <div>
          <WorkLogo info={props.techStack.flutter} tech='flutter' />
          <WorkLogo info={props.techStack.node} tech='node' />
          <WorkLogo info={props.techStack.python} tech='python' />
        </div>
      </span>
    </section>
  )
}

export default Work;
