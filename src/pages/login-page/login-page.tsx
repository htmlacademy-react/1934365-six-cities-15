import { FormEvent, ReactEventHandler, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useActionCreators } from '../../store/hooks';
import { userActions } from '../../store/slices/user';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../components/utils/types';
import { toast } from 'react-toastify';

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

  function handleButtonClick(evt: FormEvent<HTMLButtonElement>) {
    evt.preventDefault();
    if (!formData.password.match(/^(?=.*\d)(?=.*[a-zA-Z]).{2,}$/)) {
      toast.error('Password must contain 1 letter and 1 digit');
      return;
    }
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
                  value={formData.email}
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
                  value={formData.password}
                  minLength={2}
                />
              </div>
              <button
                className="login__submit form__submit button" type="button"
                onClick={handleButtonClick}
              >Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Root}>
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
