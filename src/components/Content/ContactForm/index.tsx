import { FC } from 'react';
import {
    SubmitHandler,
    useForm
} from 'react-hook-form';
import clsx from 'clsx';

import styles from './ContactForm.module.scss';

import logo from '../../../assets/img/logos/logo.svg';

type TFrom = {
    email: string
}
type TProps = {
    contact: React.RefObject<HTMLDivElement>
}
export const ContactForm: FC<TProps> = ({ contact }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset
    } = useForm<TFrom>({
        mode: 'onSubmit'
    });

    const onSubmit: SubmitHandler<TFrom> = (data) => {
        if (isValid) {
            console.log(`Form sent. Your e-mail is ${data.email}`);
            reset();
        }
    }

    return (
        <div ref={contact} className={styles.contact}>
            <div className={styles.container}>
                <div className={styles.contact__body}>
                    <div className={styles.contact__logo}>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className={styles.contact__label}>Sport, real Motorsport.</div>
                    <form className={styles.contact__form} onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.contact__form__container}>
                            <div className={clsx(styles.contact__input, errors?.email && styles.error)}>
                                <input
                                    {...register('email', {
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                                            message: 'Please enter valid e-mail!'
                                        }
                                    })}
                                    placeholder={'Enter your email...'}
                                />
                            </div>
                            <div className={styles.contact__submit}>
                                <button>
                                    GO
                                </button>
                            </div>
                        </div>
                        <div className={styles.errors}>
                            {errors?.email && (
                                <span>{errors?.email.message || 'Error!'}</span>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}