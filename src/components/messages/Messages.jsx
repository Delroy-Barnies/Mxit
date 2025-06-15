import styles from "./Messages.module.css";
import clip from "../../assets/clip.svg";
import { useRef, useEffect, useState } from "react";
import { useParams } from "react-router";
import send from "../../assets/send.svg"

export function Messages(props) {

    const { id } = useParams();
    const [display, setDisplay] = useState("none");
    const { user, setUser } = useState(null);
    const scrollRef = useRef(null);

    useEffect(() => {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        const fetchData = async () => {
            try {
                const res = await fetch('https://mxit-server.onrender.com/userData', {
                    method: 'GET',
                    credentials: 'include'
                });

                if (!res.ok) {
                    console.log(res.status);
                } else {
                    const result = await res.json();
                    setUser(result);
                }
            } catch (error) {
                console.error('Error sending data:', error);
            }
        };
        fetchData();

    }, []);
    useEffect(() => {
        setDisplay("grid");
    }, [props.current]);

    const handleSubmitMessage = async (e) => {
        e.preventDefault();
        const payload = {
            message: e.target.message.value
        };
        try {
            const res = await fetch(`https://mxit-server.onrender.com/contacts/${props.current.id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload),
                credentials: "include"
            });
            const result = await res.json();
            console.log(result);
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };


    return (
        <section className={styles.messages} style={{ display: id ? display : "none" }}>
            <div className={styles.filter}>
                <div className={styles.messages_} ref={scrollRef}>
                    {props.current && props.current.hasOwnProperty("messages") ? props.current.messages.map((message) => {
                        if (user.id === message.userId) {
                            return <div className={styles.sent}><p className={styles.sent_text}>{message.message}</p>
                                {"time" in message ? <p className={styles.sent_time}>{message.uploadTime}</p> : null}</div>
                        } /*else if ("date" in message) {
                            return <div className={styles.new_date}><p className={styles.new_date_text}>{message.date}</p></div>
                        }*/ else {
                            return <div className={styles.recieved}>
                                {"sent_by" in message ? <p className={styles.sent_by}>{message.sent_by}</p> : null}
                                <p className={styles.recieved_text}>{message.message}</p>
                                {"time" in message ? <p className={styles.received_time}>{message.dateTime}</p> : null}
                            </div>
                        }

                    }) : null}
                    <div className={styles.anchor}></div>
                </div>
            </div>
            <form className={styles.input} onSubmit={handleSubmitMessage}>
                <img src={clip} className={styles.clip} />
                <textarea className={styles.input_message} name="message" maxLength="500" placeholder="Enter your message..."></textarea>
                <button type="submit" className={styles.send_button}><img src={send} className={styles.send} /></button>
            </form>
        </section>
    )
}