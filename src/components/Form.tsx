import { useState } from 'react';
import iconArrow from '../images/icon-arrow.svg';
import iconError from '../images/icon-error.svg';
import { isEmailValid as isEmailValidFunction } from '../utils/isEmailValid';

const Form = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isEmailValidFunction(email)) {
      setIsEmailValid(true);
      setEmail('');
    } else {
      setIsEmailValid(false);
    }
  };

  return (
    <>
      <form
        className={`card__form ${!isEmailValid && 'card__form--error'}`}
        onSubmit={handleSubmit}
      >
        <input
          className='card__input'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder='Email Address'
          type='email'
          name='email'
          id='email'
        />
        {!isEmailValid && (
          <img
            className='card__error-img'
            src={iconError}
            alt='A reddish circle with an exclamation mark inside'
          />
        )}
        <button
          className={`card__button ${!isEmailValid && 'card__button--error'}`}
          type='submit'
        >
          <img src={iconArrow} alt='Arrow pointing to the right' />
        </button>
      </form>
      {!isEmailValid && (
        <p className='card__error-text'>Please provide a valid email</p>
      )}
    </>
  );
};

export default Form;
