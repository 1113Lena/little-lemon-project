import React from 'react'
import styles from './Footer.module.css'
import logo2 from '../img/small_logo.png'
import { Instagram,Twitter,Facebook,LinkedIn } from '@mui/icons-material'


export default function Footer() {
  return (
    <footer >
      <section>
        <div className={styles.info}>
          <img src={logo2} alt="small logo"/>
          <div className={styles.footercontainer}>
            <p className={styles.companyinfo}>
              Little Lemon is a Mediterranean inspired bar and small plates restaurant focusing on fresh produce and big flavours, offering bespoke cocktails and a premium wine selection.
            </p>
          </div>
          <div>
              <p className={styles.info2}>Email : LittleLemon@gamil.com</p>
              <p className={styles.info2}>Contact : 905-905-1234</p>
              <p className={styles.info2}>Address : 123 Super Dr. </p>
              
          </div>  
          <div className={styles.msg}>
              <div className={styles.icon}>
                <p><Instagram /></p>
                <p><Twitter /></p>
                <p><Facebook/></p>
                <p><LinkedIn/></p>
          </div>
          <div>  
              <p>&copy;2024 Littlelemon info.</p>
            </div>
          </div>
        </div>
        
        
      </section>
    </footer>
  )
}
