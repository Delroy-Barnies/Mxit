import styles from "./Footer.module.css";
import chats from "../../assets/chats.svg";
import groups from "../../assets/groups.svg";
import settingsIcon from "../../assets/settings.svg";
import add from "../../assets/add.svg";
import back from "../../assets/back.svg";
import { Link, useParams } from "react-router";
import { useState, useRef, useEffect } from "react";

export function Footer(props) {
    const [settings, setSettings] = useState(false);
    const divRef = useRef(null);
    const { id } = useParams();

    const handleClickOutside = (event) => {
        if (divRef.current && !divRef.current.contains(event.target)) {
            setSettings(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <section className={styles.sidebar} style={{ display: id ? "none" : "flex" }}>
            <div className={styles.nav}>
                <Link to="../contact/" className={styles.button} ><img src={chats} className={styles.icon} /></Link>
                <Link to="../group/" className={styles.button} ><img src={groups} className={styles.icon} /></Link>
                <Link to="../add/" className={styles.button}><img src={add} className={styles.icon} /></Link>
                <button className={styles.button} onClick={() => setSettings(!settings)} ><img src={settingsIcon} className={styles.icon} /></button>
                <div ref={divRef} className={styles.settings} style={{ display: settings ? "flex" : "none" }}>
                    <div className={styles.settings_content}>
                        <div className={styles.user_img} style={{ backgroundImage: `url(${props.user.profile_pic})`, backgroundSize: "cover" }}></div>
                        <div className={styles.input}>

                            <input name="name" className={styles.name} value={props.user.name}></input>
                        </div>
                        <div className={styles.input}>
                            <label for="email" className={styles.email_label}>Email</label>
                            <input name="email" className={styles.email} value={props.user.email}></input>
                        </div>
                        <Link to="../login" className={styles.logout}>Log out</Link>
                    </div>
                </div>
            </div>
        </section >
    )
}