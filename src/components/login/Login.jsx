import styles from "./Login.module.css";
import chats from "../../assets/chats.svg";
import groups from "../../assets/groups.svg";
import settingsIcon from "../../assets/settings.svg";
import back from "../../assets/back.svg";
import { Link } from "react-router";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export function Login(props) {
    const navigate = useNavigate();
    const [hasError, setHasError] = useState(false)

    const handleLogin = async (e) => {
        e.preventDefault();
        const payload = {
            email: e.target.email.value,
            password: e.target.password.value
        };

        console.log(payload);

        try {
            const res = await fetch('https://mxit-server.onrender.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!res.ok) {
                setHasError(true);
            } else {
                const result = await res.json();
                console.log(result);
                navigate('../contacts');
            }
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

    return (
        <section className={styles.login}>
            <form className={styles.form} onSubmit={handleLogin}>
                <h1 className={styles.heading}>LOGIN</h1>
                <div className={styles.input}>
                    <label for="email" className={styles.email_label}>Email</label>
                    <input type="email" name="email" className={styles.email} required />
                </div>
                <div className={styles.input}>
                    <label for="password" className={styles.password_label}>Password</label>
                    <input type="password" name="password" className={styles.password} required />
                </div>
                <button type="submit" className={styles.submit}>submit</button>
                {hasError ? <p className={styles.error}>Invalid Email or Password!</p> : null}
                <p className={styles.register}>Need an account? <span><Link className={styles.link} to="../register">Sign Up</Link></span></p>
            </form>
        </section >
    )
}