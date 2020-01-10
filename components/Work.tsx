import Mattact from '../library/Mattact';
import WorkLogo from './WorkLogo';

import * as angular from '../content/angular-bio.json';
import * as rxjs from '../content/rxjs.json';
import * as ngrx from '../content/ngrx.json';
import * as typescript from '../content/typescript.json';
import * as react from '../content/react.json';
import * as node from '../content/node.json';
import * as flutter from '../content/flutter.json';

const Work = () => (
  <div className="work-container">
    <span>
      <h3>I'm currently at:</h3>
      <a
        href="https://cetaris.com/"
        rel="noopner"
        target="_blank"
      >
        <div className="work-container-logo__job"></div>
      </a>
    </span>
    <span>
      <h3>At work I use:</h3>
      <div className="work-container-logo-container">
        <WorkLogo info={angular} tech="angular" />
        <WorkLogo info={rxjs} tech="rxjs" />
        <WorkLogo info={ngrx} tech="ngrx" />
        <WorkLogo info={typescript} tech="typescript" />
      </div>
    </span>
    <span>
      <h3>At home I use:</h3>
      <div className="work-container-logo-container">
        <WorkLogo info={react} tech="react" />
        <WorkLogo info={node} tech="node" />
        <WorkLogo info={flutter} tech="flutter" />
      </div>
    </span>
  </div>
);

export default Work;
