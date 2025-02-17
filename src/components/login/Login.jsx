import styles from "./Login.module.css";
import chats from "../../assets/chats.svg";
import groups from "../../assets/groups.svg";
import settingsIcon from "../../assets/settings.svg";
import back from "../../assets/back.svg";
import { Link } from "react-router";
import { useState, useRef, useEffect } from "react";

export function Login(props) {

    return (
        <section className={styles.login}>
            <div className={styles.form}>
                <h1 className={styles.heading}>LOGIN</h1>
                <div className={styles.input}>
                    <label for="email" className={styles.email_label}>Email</label>
                    <input type="email" name="email" className={styles.email} />
                </div>
                <div className={styles.input}>
                    <label for="password" className={styles.password_label}>Password</label>
                    <input type="password" name="password" className={styles.password} />
                </div>
                <div className={styles.checkbox}>
                    <input type="checkbox" name="remember" className={styles.remember} />
                    <label for="remember" className={styles.remember_label}>Remember me?</label>
                </div>
                <button type="submit" className={styles.submit}>submit</button>
                <p className={styles.register}>Need an account? <span><Link className={styles.link} to="../register">Sign Up</Link></span></p>
            </div>
        </section >
    )
}