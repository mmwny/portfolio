import Mattact from './library/Mattact';
import jss from 'jss';
import preset from 'jss-preset-default'

import Greeting from './components/Greeting';
import * as profile from './content/portfolio.json';
import Work from './components/Work';
import * as techStack from './content/techStack.json';
import Contact from './components/Contact';

jss.setup(preset())

const App = (
  <div>
    <Greeting profile={profile}/>
    <Work techStack={techStack}/>
    <Contact />
  </div>
);

Mattact.render(App, document.getElementById('root'));

