import styles from "./AddContact.module.css";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

export function AddContact(props) {
    const [hasError, setHasError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const navigate = useNavigate();

    const handleAddContact = async (e) => {
        e.preventDefault();
        const payload = {
            name: e.target.name.value,
            email: e.target.email.value
        };
        console.log(payload);
        try {
            const res = await fetch('https://mxit-server.onrender.com/contacts/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload),
                credentials: "include"
            });

            if (!res.ok) {
                const errorData = await res.json();
                setHasError(true);
                setErrorMessage(errorData.message);
                console.log(res.json());
            } else {
                const result = await res.json();
                console.log(result);
                navigate('../contacts');
            }
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

    return (
        <section className={styles.add_contact}>
            <form className={styles.form} onSubmit={handleAddContact}>
                <div className={styles.info}>
                    <label for="name" className={styles.name_label}>Name</label>
                    <input name="name" className={styles.name}></input>
                </div>
                <div className={styles.info}>
                    <label for="email" className={styles.email_label}>Email</label>
                    <input name="email" type="email" className={styles.email}></input>
                </div>
                {hasError ? <p className={styles.error}>{errorMessage}!</p> : null}
                <button type="submit" className={styles.submit}>submit</button>
            </form>
        </section>
    )
}