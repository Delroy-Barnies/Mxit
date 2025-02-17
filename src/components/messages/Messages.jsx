import styles from "./Messages.module.css";
import clip from "../../assets/clip.svg";
import { useRef, useEffect, useState } from "react";
import { useParams } from "react-router";

export function Messages(props) {

    const { id } = useParams();
    const [display, setDisplay] = useState("none");
    const scrollRef = useRef(null);
    useEffect(() => { scrollRef.current.scrollTop = scrollRef.current.scrollHeight; }, []);
    useEffect(() => {
        setDisplay("grid");
    }, [props.currant]);
    return (
        <section className={styles.messages} style={{ display: id ? display : "none" }}>
            <div className={styles.filter}>
                <div className={styles.messages_} ref={scrollRef}>
                    {props.currant != null ? props.currant.history.map((message) => {
                        if ("sent" in message) {
                            return <div className={styles.sent}><p className={styles.sent_text}>{message.sent}</p>
                                {"time" in message ? <p className={styles.sent_time}>{message.time}</p> : null}</div>
                        } else if ("date" in message) {
                            return <div className={styles.new_date}><p className={styles.new_date_text}>{message.date}</p></div>
                        } else {
                            return <div className={styles.recieved}>
                                {"sent_by" in message ? <p className={styles.sent_by}>{message.sent_by}</p> : null}
                                <p className={styles.recieved_text}>{message.recieved}</p>
                                {"time" in message ? <p className={styles.received_time}>{message.time}</p> : null}
                            </div>
                        }

                    }) : null}
                    <div className={styles.anchor}></div>
                </div>
            </div>
            <div className={styles.input}>
                <img src={clip} className={styles.clip} />
                <textarea className={styles.input_message} maxLength="500" placeholder="Type your message and press enter..."></textarea>
            </div>
        </section>
    )
}