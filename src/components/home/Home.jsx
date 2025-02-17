import styles from "./Home.module.css";
import { useRef, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import mxit from "../../assets/mxit-icon.svg"

export function Home(props) {
    return (
        <section className={styles.home}>
            <div className={styles.head}>
                <img className={styles.mxit_icon} src={mxit} />
                <h1 className={styles.heading}>Mxit</h1>
                <h2 className={styles.subheading}>A new era of instant messaging</h2>
            </div>
            <div className={styles.options}>
                <Link className={styles.login} to="../login">Login</Link>
                <p className={styles.register_text}>Dont have an account?<span><Link to="../register"> Register</Link></span></p>
            </div>
        </section>
    )
}