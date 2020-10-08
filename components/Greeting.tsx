import Mattact from '../library/Mattact';

import { Profile } from '../types/Mwny';
import ToggleButton from './ToggleButton';

const Greeting = (props: { profile: Profile }) => (
  <div>
    <ToggleButton />
    <h2>{props.profile.greeting}</h2>
    <h1>{props.profile.blurb}</h1>
    <div className='todo-container'>
      <p>&gt; {props.profile.tasks[0]}</p>
      <p>&gt; {props.profile.tasks[1]}</p>
      <p>&gt; {props.profile.tasks[2]}</p>
      <p>&gt; {props.profile.tasks[3]}</p>
    </div>
  </div>
);

export default Greeting;