import Mattact from '../library/Mattact';

import { Profile } from '../types/Mwny';

const Greeting = (props: { profile: Profile }) => (
  <div>
    <h2>{props.profile.greeting}</h2>
    <h1>{props.profile.blurb}</h1>
    <div className='todo-container'>
      <p>> {props.profile.tasks[0]}</p>
      <p>> {props.profile.tasks[1]}</p>
      <p>> {props.profile.tasks[2]}</p>
    </div>
  </div>
);

export default Greeting;