import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Add } from './add/Add'
import { AddContact } from './add/AddContact'
import { AddGroup } from './add/AddGroup'
import styles from './App.module.css'
import { Contacts } from './contacts/Contacts'
import { Footer } from './footer/Footer'
import { Groups } from './groups/Groups'
import { Header } from './header/Header'
import { Login } from './login/Login'
import { Messages } from './messages/Messages'
import { Register } from './register/Register'
import { Sidebar } from './sidebar/Sidebar'

const user = {
  id: 1,
  name: "Delroy Barnies",
  profile_pic: "https://th.bing.com/th/id/R.fbe8409922dc33e0f454bf215f0370f0?rik=fH5KfYeWwT%2fZBQ&pid=ImgRaw&r=0",
  email: "Delroylbarnies@gmail.com"
}

const contacts = [{
  id: 1,
  name: "Chloe Adams",
  profile_pic: "https://th.bing.com/th/id/OIP.qXIfZnBiTFQ01b6zCn5FWQHaNK?rs=1&pid=ImgDetMain",
  is_online: true,
  unread: 3,
  last_message: "Hey, you online?",
  history: [
    { date: "2025/01/18" },
    {
      sent: "Hey",
      time: "04:30 PM"
    },
    {
      recieved: "Hey, How are you?",
      time: "04:32 PM"
    },
    {
      recieved: "You there?",
      time: "05:45 PM"
    },
    { date: "2025/01/19" },
    {
      sent: "Yeah, Sorry i didnt get your message in time, so what do you wanna talk about?",
      time: "09:30 AM"
    },
    {
      sent: "Hey",
      time: "07:00 PM"
    },
    {
      recieved: "Hey, How are you?",
      time: "07:11 PM"
    },
    { date: "2025/01/20" },
    {
      recieved: "You there?",
      time: "04:08 AM"
    },
    {
      sent: "Yeah, Sorry i didnt get your message in time, so what do you wanna talk about?",
      time: "04:30 AM"
    }
  ],
},
{
  id: 2,
  name: "Amin Rockhead",
  profile_pic: "https://i.pinimg.com/originals/2b/83/34/2b8334f7d5c9ca88f5c9554e0c2f9315.png",
  is_online: false,
  unread: 0,
  last_message: "can you send it to me?",
  history: [{ sent: "Hey" }, { recieved: "Hey, How are you?" }]
},
{
  id: 3,
  name: "Chloe Adams",
  profile_pic: "https://th.bing.com/th/id/OIP.xyzS3DXwfkKrbvb46n4jvgAAAA?rs=1&pid=ImgDetMain",
  is_online: true,
  unread: 3,
  last_message: "Hey, you online?",
  history: [{ sent: "Hey" }, { recieved: "Hey, How are you?" }]
},
{
  id: 4,
  name: "Amin Rockhead",
  profile_pic: "https://th.bing.com/th/id/R.f645b78e51a192cb4e9caa4aac6c0875?rik=ZTglhfD9mmwNIA&riu=http%3a%2f%2fcdn.collider.com%2fwp-content%2fuploads%2fgod-of-war-image.jpg&ehk=D%2bfse8wLp7FcFA%2bqBBv%2bCP0fIUGXa8YSkuFKGmU83yk%3d&risl=&pid=ImgRaw&r=0",
  is_online: false,
  unread: 1,
  last_message: "can you send it to me?",
  history: [{ sent: "Hey" }, { recieved: "Hey, How are you?" }]
},
{
  id: 5,
  name: "Chloe Adams",
  profile_pic: "https://th.bing.com/th/id/OIP.g1qhGczUlljF6CdC7mNMmwHaEo?w=3840&h=2400&rs=1&pid=ImgDetMain",
  is_online: true,
  unread: 3,
  last_message: "Hey, you online?",
  history: [{ sent: "Hey" }, { recieved: "Hey, How are you?" }]
},
{
  id: 6,
  name: "Amin Rockhead",
  profile_pic: "https://clipground.com/images/user-icon-vector-png-6.png",
  is_online: false,
  unread: 1,
  last_message: "can you send it to me?",
  history: [{ sent: "Hey" }, { recieved: "Hey, How are you?" }]
},
{
  id: 7,
  name: "Chloe Adams",
  profile_pic: "https://clipground.com/images/user-icon-vector-png-6.png",
  is_online: false,
  unread: 3,
  last_message: "Hey, you online?",
  history: [{ sent: "Hey" }, { recieved: "Hey, How are you?" }]
},
{
  id: 8,
  name: "Amin Rockhead",
  profile_pic: "https://clipground.com/images/user-icon-vector-png-6.png",
  is_online: false,
  unread: 1,
  last_message: "can you send it to me?",
  history: [{ sent: "Hey" }, { recieved: "Hey, How are you?" }]
},
{
  id: 9,
  name: "Chloe Adams",
  profile_pic: "https://clipground.com/images/user-icon-vector-png-6.png",
  is_online: true,
  unread: 3,
  last_message: "Hey, you online?",
  history: [{ sent: "Hey" }, { recieved: "Hey, How are you?" }]
},
{
  id: 10,
  name: "Amin Rockhead",
  profile_pic: "https://clipground.com/images/user-icon-vector-png-6.png",
  is_online: true,
  unread: 1,
  last_message: "can you send it to me? Im waiting here",
  history: [{ sent: "Hey" }, { recieved: "Hey, How are you?" }]
},
{
  id: 11,
  name: "Chloe Adams",
  profile_pic: "https://clipground.com/images/user-icon-vector-png-6.png",
  is_online: true,
  unread: 3,
  last_message: "Hey, you online?",
  history: [{ sent: "Hey" }, { recieved: "Hey, How are you?" }]
},
{
  id: 12,
  name: "Amin Rockhead",
  profile_pic: "https://clipground.com/images/user-icon-vector-png-6.png",
  is_online: true,
  unread: 1,
  last_message: "can you send it to me?",
  history: [{ sent: "Hey" }, { recieved: "Hey, How are you?" }]
}]

const groups = [{
  id: 1,
  name: "Gaming Wizards",
  profile_pic: "https://th.bing.com/th/id/OIP.Wslcxp3ZL8WT1UM0wJZCnwHaF0?rs=1&pid=ImgDetMain",
  members: ["Chloe Adams", "Amin Rockhead", "Chloe Adams", "Amin Rockhead", "Chloe Adams", "Amin Rockhead", "Chloe Adams", "Amin Rockhead"],
  admin: "Chloe Adams",
  unread: 3,
  last_message: "Hey, you online?",
  history: [
    { date: "2025/01/18" },
    {
      sent: "Hey",
      time: "04:30 PM",
    },
    {
      sent_by: "Chloe Adams",
      recieved: "Hey, How are you?",
      time: "04:32 PM"
    },
    {
      sent_by: "Chloe Adams",
      recieved: "You there?",
      time: "05:45 PM"
    },
    { date: "2025/01/19" },
    {
      sent: "Yeah, Sorry i didnt get your message in time, so what do you wanna talk about?",
      time: "09:30 AM"
    },
    {
      sent: "Hey",
      time: "07:00 PM"
    },
    {
      sent_by: "Amin Rockhead",
      recieved: "Hey, How are you?",
      time: "07:11 PM"
    },
    { date: "2025/01/20" },
    {
      sent_by: "Amin Rockhead",
      recieved: "You there?",
      time: "04:08 AM"
    },
    {
      sent: "Yeah, Sorry i didnt get your message in time, so what do you wanna talk about?",
      time: "04:30 AM"
    },
    {
      sent_by: "Amin Rockhead",
      recieved: "Lets chat about the new state of coding in React.",
      time: "04:30 AM"
    }
  ],
},
{
  id: 2,
  name: "Movies and Tv",
  profile_pic: "https://th.bing.com/th/id/OIP._naAGIOPK5m0Ssh9lZzDjAHaIy?rs=1&pid=ImgDetMain",
  members: ["Chloe Adams", "Amin Rockhead"],
  admin: "Chloe Adams",
  unread: 3,
  last_message: "So what we watching?",
  history: [
    { date: "2025/01/18" },
    {
      sent: "Hey",
      time: "04:30 PM",
    },
    {
      sent_by: "Chloe Adams",
      recieved: "Hey, How are you?",
      time: "04:32 PM"
    },
    {
      sent_by: "Chloe Adams",
      recieved: "You there?",
      time: "05:45 PM"
    },
    { date: "2025/01/19" },
    {
      sent: "Yeah, Sorry i didnt get your message in time, so what do you wanna talk about?",
      time: "09:30 AM"
    },
    {
      sent: "Hey",
      time: "07:00 PM"
    },
    {
      sent_by: "Amin Rockhead",
      recieved: "Hey, How are you?",
      time: "07:11 PM"
    },
    { date: "2025/01/20" },
    {
      sent_by: "Amin Rockhead",
      recieved: "You there?",
      time: "04:08 AM"
    },
    {
      sent: "Yeah, Sorry i didnt get your message in time, so what do you wanna talk about?",
      time: "04:30 AM"
    },
    {
      sent_by: "Amin Rockhead",
      recieved: "Lets chat about the new state of the nation.",
      time: "04:30 AM"
    }
  ],
}]

function App() {

  const { section } = useParams();
  const { id } = useParams();
  const [currantContact, setCurrantContact] = useState();
  const [currantGroup, setCurrantGroup] = useState();

  useEffect(() => {
    contacts.forEach(contact => {
      contact.id === Number(id) ? setCurrantContact(contact) : null;
    });
    groups.forEach(group => {
      group.id === Number(id) ? setCurrantGroup(group) : null;
    });
  }, [id])

  switch (section) {

    case "login":
      return (
        <main className={styles.login}>
          <Login />
        </main>
      )

    case "register":
      return (
        <main className={styles.login}>
          <Register />
        </main>
      )

    case "contact":
      return (
        <main className={styles.main}>
          <Sidebar user={user} />
          <section className={styles.content}>
            <Header class="contact" currant={currantContact} />
            <section className={styles.app}>
              <Contacts contacts={contacts} />
              <Messages currant={currantContact} />
            </section>
            <Footer user={user} />
          </section>
        </main>)

    case "group":
      return (
        <main className={styles.main}>
          <Sidebar user={user} />
          <section className={styles.content}>
            <Header class="group" currant={currantGroup} />
            <section className={styles.app}>
              <Groups groups={groups} />
              <Messages currant={currantGroup} />
            </section>
            <Footer user={user} />
          </section>
        </main>)

    case "add":
      switch (id) {
        case "contact":
          return (
            <main className={styles.main}>
              <Sidebar user={user} />
              <section className={styles.content}>
                <Header class="" currant={currantGroup} />
                <section className={styles.app}>
                  <AddContact />
                </section>
                <Footer user={user} />
              </section>
            </main>)

        case "group":
          return (
            <main className={styles.main}>
              <Sidebar user={user} />
              <section className={styles.content}>
                <Header class="" currant={currantGroup} />
                <section className={styles.app}>
                  <AddGroup contacts={contacts} />
                </section>
                <Footer user={user} />
              </section>
            </main>)

        default:
          return (
            <main className={styles.main}>
              <Sidebar user={user} />
              <section className={styles.content}>
                <Header class="group" currant={currantGroup} />
                <section className={styles.app}>
                  <Add />
                </section>
                <Footer user={user} />
              </section>
            </main>)
      }

    default:
      return null;
  }
}

export default App
