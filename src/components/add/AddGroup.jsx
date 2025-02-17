import styles from "./AddGroup.module.css";

export function AddGroup(props) {
    return (
        <section className={styles.add_group}>
            <form className={styles.form}>
                <div className={styles.info}>
                    <label for="name" className={styles.name_label}>Name</label>
                    <input name="name" className={styles.name}></input>
                </div>
                <div className={styles.info}>
                    <h2 className={styles.name_label}>Add Members</h2>
                    <ul className={styles.contacts_list}>
                        {props.contacts.map((contact) => {
                            return contact ? <li className={styles.contact}>
                                <div className={styles.contact_img} style={{ backgroundImage: `url(${contact.profile_pic})`, backgroundSize: "cover" }}>
                                </div>
                                <h3 className={styles.contact_name}>{contact.name}</h3>
                            </li>
                                : null;
                        })}
                    </ul>
                </div>
                <button className={styles.submit}>submit</button>
            </form>
        </section>
    )
}