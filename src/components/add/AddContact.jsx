import styles from "./AddContact.module.css";

export function AddContact(props) {
    return (
        <section className={styles.add_contact}>
            <form className={styles.form}>
                <div className={styles.info}>
                    <label for="name" className={styles.name_label}>Name</label>
                    <input name="name" className={styles.name}></input>
                </div>
                <div className={styles.info}>
                    <label for="email" className={styles.email_label}>Email</label>
                    <input name="email" type="email" className={styles.email}></input>
                </div>
                <button className={styles.submit}>submit</button>
            </form>
        </section>
    )
}