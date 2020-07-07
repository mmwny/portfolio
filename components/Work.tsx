import Mattact from '../library/Mattact';

import WorkLogo from './WorkLogo';
import { TechStack } from '../types/Mwny';

const Work = (props: { techStack: TechStack }) => (
  <div className='work-container'>
    <span>
      <h3>I'm currently at:</h3>
      <a
        className='company-logo' 
        href='https://www.cetaris.com/'
        rel='noopner'
        target='_blank'
      >
        <div className='work-container-logo__job'></div>
      </a>
    </span>
    <span>
      <h3>At work I use:</h3>
      <div className='work-container-logo-container'>
        <WorkLogo info={props.techStack.angular} tech='angular' />
        <WorkLogo info={props.techStack.rxjs} tech='rxjs' />
        <WorkLogo info={props.techStack.ngrx} tech='ngrx' />
        <WorkLogo info={props.techStack.typescript} tech='typescript' />
        <WorkLogo info={props.techStack.cordova} tech='cordova' />
      </div>
    </span>
    <span>
      <h3>At home I use:</h3>
      <div className='work-container-logo-container'>
        <WorkLogo info={props.techStack.react} tech='react' />
        <WorkLogo info={props.techStack.node} tech='node' />
        <WorkLogo info={props.techStack.flutter} tech='flutter' />
      </div>
    </span>
  </div>
);

export default Work;
