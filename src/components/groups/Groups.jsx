import styles from "./Groups.module.css"
import { Link } from "react-router-dom"

export function Groups(props) {
    return (
        <section className={styles.groups}>
            <ul className={styles.groups_list}>
                {props.groups.map((group) => {
                    return group ? <li className={styles.group} onClick={props.currantGroup}><Link className={styles.link} to={`../groups/${group.id}`}>
                        <div className={styles.group_left}>
                            <div className={styles.group_img} style={{ backgroundImage: `url(${group.profile_pic})`, backgroundSize: "cover" }}>
                            </div>
                        </div>
                        <div className={styles.group_info}>
                            <div className={styles.group_name_and_message}>
                                <h3 className={styles.group_name}>{group.name}</h3>
                                <p className={styles.group_last_message}>{group.last_message.substring(0, 25)}</p>
                            </div>
                            <div className={styles.group_unread_}>
                                {group.unread != 0 ? <p className={styles.group_unread}>{group.unread}</p> : null}
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