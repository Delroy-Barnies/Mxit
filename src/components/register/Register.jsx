import styles from "./Register.module.css";
import chats from "../../assets/chats.svg";
import groups from "../../assets/groups.svg";
import settingsIcon from "../../assets/settings.svg";
import back from "../../assets/back.svg";
import { Link } from "react-router";
import { useState, useRef, useEffect } from "react";

export function Register(props) {

    return (
        <section className={styles.register}>
            <div className={styles.form}>
                <h1 className={styles.heading}>REGISTER</h1>
                <div className={styles.input}>
                    <label for="email" className={styles.email_label}>Email</label>
                    <input type="email" name="email" className={styles.email} />
                </div>
                <div className={styles.input}>
                    <label for="password" className={styles.password_label}>Password</label>
                    <input type="password" name="password" className={styles.password} />
                </div>
                <div className={styles.input}>
                    <label for="password" className={styles.password_label}>Confirm Password</label>
                    <input type="password" name="password" className={styles.password} />
                </div>
                <div className={styles.checkbox}>
                    <input type="checkbox" name="remember" className={styles.remember} />
                    <label for="remember" className={styles.remember_label}>Remember me?</label>
                </div>
                <button type="submit" className={styles.submit}>submit</button>
                <Link className={styles.login} to="../login">Return to login</Link>
            </div>
        </section >
    )
}