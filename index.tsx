import Mattact from './library/Mattact';
import Work from './components/Work';
import jss from 'jss';
import preset from 'jss-preset-default'
import * as profile from './content/portfolio.json';

jss.setup(preset())

const App = (
  <div>
    <h2>{profile.greeting}</h2>
    <h1>{profile.blurb}</h1>
    <div className="todo-container">
      <p>> {profile.taskOne}</p>
      <p>> {profile.taskTwo}</p>
      <p>> {profile.taskThree}</p>
    </div>
    <Work />
  </div>
);

Mattact.render(App, document.getElementById('root'));

