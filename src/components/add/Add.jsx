import styles from "./Add.module.css";
import { Link } from "react-router-dom";
import add_user from "../../assets/add_user.svg";
import add_group from "../../assets/add_group.svg";

export function Add(props) {
    return (
        <section className={styles.add}>
            <ul className={styles.options}>
                <li>
                    <Link to="../add/contact/" className={styles.option}>
                        <img src={add_user} className={styles.icon} />
                        <p className={styles.text}>Add Contact</p>
                    </Link>
                </li>
                <li>
                    <Link to="../add/group/" className={styles.option}>
                        <img src={add_group} className={styles.icon} />
                        <p className={styles.text}>Add Group</p>
                    </Link>
                </li>
            </ul>
        </section>
    )
}