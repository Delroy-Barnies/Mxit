import styles from "./Contacts.module.css"
import { Link } from "react-router-dom"
import { Header } from "../header/Header";

export function Contacts(props) {
    return (
        <section className={styles.contacts}>
            <ul className={styles.contacts_list}>
                {props.contacts.map((contact) => {
                    return contact ? <li className={styles.contact} onClick={props.currantContact}><Link className={styles.link} to={`../contacts/${contact.id}`}>
                        <div className={styles.contact_left}>
                            <div className={styles.contact_img} style={{ backgroundImage: `url(${contact.profile_pic})`, backgroundSize: "cover" }}>
                            </div>
                            <div className={styles.is_online} style={{ backgroundColor: contact.is_online ? "green" : "gray" }}></div>
                        </div>
                        <div className={styles.contact_info}>
                            <div className={styles.contact_name_and_message}>
                                <h3 className={styles.contact_name}>{contact.name}</h3>
                                <p className={styles.contact_last_message}>{contact.last_message.substring(0, 25)}</p>
                            </div>
                            <div className={styles.contact_unread_}>
                                {contact.unread != 0 ? <p className={styles.contact_unread}>{contact.unread}</p> : null}
                            </div>
                        </div>
                    </Link>
                    </li>
                        : null;
                })}
            </ul>
        </section>
    )
}