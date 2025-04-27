import styles from "./Register.module.css";
import chats from "../../assets/chats.svg";
import groups from "../../assets/groups.svg";
import settingsIcon from "../../assets/settings.svg";
import back from "../../assets/back.svg";
import { Link, useNavigate } from "react-router";
import { useState, useRef, useEffect } from "react";

export function Register(props) {
    const [hasError, setHasError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        const payload = {
            name: e.target.email.value,
            email: e.target.email.value,
            password: e.target.password.value,
            confirmPassword: e.target.confirmPassword.value
        };

        console.log(payload);

        try {
            const res = await fetch('https://mxit-server.onrender.com/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(payload)
            });

            if (!res.ok) {
                setHasError(true);
                setErrorMessage(res.json());
                console.log(res.json());
            } else {
                const result = await res.json();
                console.log(result);
                navigate('../login');
            }
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

    return (
        <section className={styles.register}>
            <form className={styles.form} onSubmit={handleRegister}>
                <h1 className={styles.heading}>REGISTER</h1>
                <div className={styles.input}>
                    <label for="name" className={styles.email_label}>Name</label>
                    <input name="name" className={styles.name} required />
                </div>
                <div className={styles.input}>
                    <label for="email" className={styles.email_label}>Email</label>
                    <input type="email" name="email" className={styles.email} required />
                </div>
                <div className={styles.input}>
                    <label for="password" className={styles.password_label}>Password</label>
                    <input type="password" name="password" className={styles.password} required />
                </div>
                <div className={styles.input}>
                    <label for="confirmPassword" className={styles.password_label}>Confirm Password</label>
                    <input type="password" name="confirmPassword" className={styles.password} required />
                </div>
                <button type="submit" className={styles.submit}>submit</button>
                {hasError ? <p className={styles.error}>{errorMessage}</p> : null}
                <p className={styles.return}>Already a member? <span><Link className={styles.login} to="../login">Sign In</Link></span></p>
            </form>
        </section >
    )
}