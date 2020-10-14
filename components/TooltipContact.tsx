import Mattact from '../library/Mattact';
import jss from 'jss';
import { SMTPClient } from 'emailjs';
import emailjs from 'emailjs-com';
import Tooltip from './Tooltip';

const TooltipContact = (props: { fullScreen: boolean, submittedForm?: boolean, invalidForm?: boolean }) => {
  const styles = {
    tooltip: {
      height: '100%',
      backgroundImage: 'linear-gradient(rgba(162, 161, 161, 1) 70%, rgba(135, 65, 135, .65))',
      borderRadius: '4px',
      color: 'white',
    },
    formContainer: {
      width: '100%',
      height: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      padding: '0 15px',
      '& > header': {
        display: 'flex',
        padding: '20px 0',
        fontFamily: 'Roboto-Bold',
        fontSize: '20px',
        justifyContent: 'space-between',
        '& > button': {
          fontSize: '18px',
          background: 'none',
          border: 'none',
          cursor: 'pointer'
        }
      },
      '& > section': {
        margin: '20px 20px 0 20px'
      },
      '& > section > span': {
        display: 'block',
        margin: '20px 0',
      },
      '& > section > span > div': {
        fontSize: '12px',
        fontFamily: 'Roboto-Bold',
        color: '#844039',
        padding: '10px',
        backgroundColor: '#c37b73',
        border: '1px solid #844039',
        borderRadius: '4px',
        textAlign: 'center'
      },
      '& > p': {
        fontFamily: 'Roboto',
        textAlign: 'center'
      }
    },
    input: {
      border: 'none',
      background: 'none',
      borderBottom: '1px solid white',
      width: '100%',
      fontFamily: 'Roboto-Light',
      textAlign: 'center',
      color: 'white',
      height: '40px',
      padding: '6px',
      '&:focus': {
        boxShadow: '0 1px 3px 0 rgba(74, 74, 74, 0.47)',
        outline: 'none'
      },
      '&::placeholder': {
        color: 'white'
      },
      '& disabled': {
        color: 'lightgrey'
      }
    },
    textarea: {
      resize: 'none',
      height: '130px'
    },
    submit: {
      width: '100%',
      fontSize: '20px',
      padding: '8px',
      backgroundColor: '#fff568',
      border: 'none',
      borderRadius: '20px',
      boxShadow: '0 1px 3px 0 rgba(74, 74, 74, 0.47)',
      cursor: 'pointer',
      margin: 'auto 0 15px 0',
      '&:focus': {
        outline: 'none',
        boxShadow: 'none'
      },
      '&:disabled': {
        backgroundColor: '#f0f0f0',
        boxShadow: 'none',
        cursor: 'not-allowed'
      }
    },
    invalid: {
      borderBottom: '1px solid #844039'
    }
  }

  const { classes } = jss.createStyleSheet(styles).attach();
 
  const submitEmail = (event) => {
    event.preventDefault();

    const name = document.querySelector('input[name="name"]') as HTMLInputElement;
    const email = document.querySelector('input[name="email"]') as HTMLInputElement;
    const message = document.querySelector('textarea[name="message"]') as HTMLInputElement;

    if (name.value && email.value && message.value) {
      const mail = {
        name: name.value,
        email: email.value,
        text: message.value,
      }

      emailjs.send('service_tptmnob', 'template_nw0ku8i', mail, 'user_41Ne7foGP3tJKZqACYcde').then((res) => {
        console.log(res);
        Mattact.rerenderTooltip(Tooltip, { clickEvent: event, fullScreen: props.fullScreen, contact: true, submittedForm: true, invalidForm: false }, {});
      })
    } else {
      Mattact.rerenderTooltip(Tooltip, { clickEvent: event, fullScreen: props.fullScreen, contact: true, submittedForm: true, invalidForm: true }, {});
    }
  }

  return (
    <div className={classes.tooltip}>
      <form className={classes.formContainer} onSubmit={() => submitEmail(event)}>
        <header>
          <h4><span aria-hidden='true' focusable='false'>👂</span> I'm Listening...</h4>
          <button onClick={() => Mattact.unrenderTooltip()}>
            <span aria-hidden='true' focusable='false'>👎</span>
            <span className='sr-only'>Close</span>
          </button>
        </header>
        <section>
          <span>
            <label className='sr-only' for='name'>Name</label>
            <input 
              className={`${classes.input} ${props.invalidForm && !(document.querySelector('input[name="name"]') as HTMLInputElement).value ? classes.invalid : '' }`} 
              id='name' 
              name='name' 
              type='text' 
              placeholder='Your name'
              disabled={props.submittedForm && !props.invalidForm}
            /> 
          </span>
          <span>
            <label className='sr-only' for='email'>Email</label>
            <input 
              className={`${classes.input} ${props.invalidForm && !(document.querySelector('input[name="email"]') as HTMLInputElement).value ? classes.invalid : '' }`} 
              id='email' 
              name='email' 
              type='email' 
              placeholder='Your email' 
              disabled={props.submittedForm && !props.invalidForm} 
            /> 
          </span>
          <span>
            <label className='sr-only' for='message'>Message</label>
            <textarea 
              className={`${classes.input} ${classes.textarea} ${props.invalidForm && !(document.querySelector('textarea[name="message"]') as HTMLInputElement).value ? classes.invalid : '' }`} 
              id='message' 
              name='message' 
              placeholder='What can I do for you?' 
              disabled={props.submittedForm && !props.invalidForm}
            ></textarea>
            { props.submittedForm && props.invalidForm ? <div>You forgot something!</div> : '' }
          </span>
        </section>
        { props.submittedForm && !props.invalidForm ? <p>{`Thanks ${(document.querySelector('input[name="name"]') as HTMLInputElement).value}, I'll get back to you.`}</p> : '' }
        { props.submittedForm && !props.invalidForm ?
          <button className={classes.submit} disabled>
            <span aria-hidden='true' focusable='false'>✔️</span>
            <span className='sr-only'>Sent</span>
          </button>
          :
          <button type='submit' className={classes.submit}>
            <span aria-hidden='true' focusable='false'>👍</span>
            <span className='sr-only'>Send</span>
          </button>
        }
      </form>
    </div>
  );
}

export default TooltipContact;