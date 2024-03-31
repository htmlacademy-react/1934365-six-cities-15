import { FormEvent, ReactEventHandler, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useActionCreators } from '../../store/hooks';
import { userActions } from '../../store/slices/user';

type HtmlLoginForm = HTMLFormElement & {
  email: HTMLInputElement;
  login: HTMLInputElement;
}

type ChangeHandler = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>

export default function LoginPage(): JSX.Element {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { login } = useActionCreators(userActions);

  const handleChange: ChangeHandler = (evt) => {
    const { name, value } = evt.currentTarget;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  function handleSubmit(evt: FormEvent<HtmlLoginForm>) {
    evt.preventDefault();
    login(formData);
  }

  return (
    <>
      <Helmet>
        <title>Страница авторизации</title>
      </Helmet>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password" name="password"
                  placeholder="Password"
                  required
                  onChange={handleChange}
                  minLength={8}
                />
              </div>
              <button
                className="login__submit form__submit button" type="submit"
              >Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
