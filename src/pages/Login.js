import Nav from "../components/Nav"
import Footer
from "../components/Footer"
import styles from './Login.module.css'




export default function Login(){


    return (
        <div className={styles.bg}>
            <Nav />
            <form className={styles.form}>
                <div>
                    <label>First Name : </label>
                    <input tyle="text" placeholder="Enter your first name..." required></input>
                </div>
                <div>
                    <label>Last Name : </label>
                    <input type="text" placeholder="Enter your last name..." required></input>
                </div>
                <div>
                    <label>Email : </label>
                    <input type="email" placeholder="Enter your email..." required></input>
                </div>
                <div>
                    <label>Password : </label>
                    <input type="password" placeholder="Enter your password..." pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"></input>
                </div>
               <button className={styles.singnbtn}>Sign in</button>
                
            </form>
            <Footer />
        </div>
    )
}