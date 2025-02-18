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
        setSettings(false);
    };

    return (
        <section className={styles.sidebar} style={{ display: id ? "none" : "flex" }}>
            <div className={styles.nav}>
                <Link to="../contact/" className={styles.button} >
                    <img src={chats} className={styles.icon} />
                    <p className={styles.link_text}>Chats</p>
                </Link>
                <Link to="../group/" className={styles.button} >
                    <img src={groups} className={styles.icon} />
                    <p className={styles.link_text}>Groups</p>
                </Link>
                <Link to="../add/" className={styles.button}>
                    <img src={add} className={styles.icon} />
                    <p className={styles.link_text}>Add</p>
                </Link>
                <button className={styles.button} onClick={() => setSettings(!settings)} >
                    <img src={settingsIcon} className={styles.icon} />
                    <p className={styles.link_text}>Settings</p>
                </button>
                <div ref={divRef} className={styles.settings} style={{ display: settings ? "flex" : "none" }}>
                    <div className={styles.settings_content}>
                        <button className={styles.back_button} onClick={handleClickOutside}><img src={back} className={styles.back_icon} on /></button>
                        <div className={styles.user_img} style={{ backgroundImage: `url(${props.user.profile_pic})`, backgroundSize: "cover" }}></div>
                        <div className={styles.input}>

                            <input name="name" className={styles.name} value={props.user.name}></input>
                        </div>
                        <div className={styles.input}>
                            <label for="email" className={styles.email_label}>Email</label>
                            <input name="email" className={styles.email} value={props.user.email}></input>
                        </div>
                        <div className={styles.wallpaper_div}>
                            <p className={styles.wallpaper_text}>Wallpaper</p>
                            <div className={styles.wallpaper}>
                            </div>
                        </div>
                        <Link to="../login" className={styles.logout}>Log out</Link>
                    </div>
                </div>
            </div>
        </section >
    )
}