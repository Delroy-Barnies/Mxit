import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router";
import add_user from "../../assets/add_user.svg";
import mxit_icon from "../../assets/mxit-icon.svg";
import styles from "./Header.module.css";

export function Header(props) {

    const { id } = useParams();
    const [dropdown, setDropdown] = useState(false);
    const divRef = useRef(null);

    const handleClickOutside = (event) => {
        if (divRef.current && !divRef.current.contains(event.target)) {
            setDropdown(false);
        }
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <header className={styles.header}>
            <div className={styles.header_left}>
                <input className={styles.searchbar} type="search" placeholder="Search" />
            </div>
            <div className={styles.header_left_mobile} style={{ display: id ? "none" : "flex" }}>
                <input className={styles.searchbar} type="search" placeholder="Search" />
                <Link to="../"><img className={styles.mxit_icon} src={mxit_icon} /></Link>
            </div>
            <div className={styles.header_right} style={{ display: id ? "flex" : "none" }}>
                {props.currant != null ?
                    props.class == "contact" ?
                        <div className={styles.contact} onClick={() => setDropdown(!dropdown)}>
                            <div className={styles.contact_img} style={{ backgroundImage: `url(${props.currant.profile_pic})`, backgroundSize: "cover" }}>
                                <div className={styles.is_online} style={{ backgroundColor: props.currant.is_online ? "green" : "gray" }}></div>
                            </div>
                            <div className={styles.contact_info}>
                                <h3 className={styles.contact_name}>{props.currant.name}</h3>
                                <p className={styles.contact_status}>{props.currant.is_online ? "online now" : "offline"}</p>
                            </div>
                            <div ref={divRef} className={styles.dropdown} style={{ display: dropdown ? "flex" : "none" }}>
                                <div className={styles.contact_img_info} style={{ backgroundImage: `url(${props.currant.profile_pic})`, backgroundSize: "cover" }}>
                                </div>
                                <div className={styles.contact_info_}>
                                    <input className={styles.contact_name_info} value={props.currant.name}></input>
                                    <p className={styles.contact_status_info}>{props.currant.is_online ? "online now" : "offline"}</p>
                                </div>
                            </div>
                        </div>
                        : <div className={styles.contact} onClick={() => setDropdown(!dropdown)}>
                            <div className={styles.contact_img} style={{ backgroundImage: `url(${props.currant.profile_pic})`, backgroundSize: "cover" }}>
                            </div>
                            <div className={styles.contact_info}>
                                <h3 className={styles.contact_name}>{props.currant.name}</h3>
                                <p className={styles.contact_status}>click to see group info</p>
                            </div>
                            <div ref={divRef} className={styles.dropdown} style={{ display: dropdown ? "flex" : "none" }}>
                                <div className={styles.contact_img_info} style={{ backgroundImage: `url(${props.currant.profile_pic})`, backgroundSize: "cover" }}>
                                </div>
                                <img src={add_user} className={styles.icon} />
                                <div className={styles.contact_info_}>
                                    <input className={styles.contact_name_info} value={props.currant.name}></input>
                                    <p className={styles.contact_status_info}>Members</p>
                                    <ul className={styles.members}>
                                        {props.currant.members.map((member) => {
                                            return (<li className={styles.member}>{member}</li>)
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    : null
                }
            </div>
            <div className={styles.profile_menu}>

            </div>
        </header>
    )
}