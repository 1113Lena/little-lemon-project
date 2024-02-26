import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Reserve.module.css'
import food from '../img/49490969.jpg'

export default function Reserve() {
  const navigate = useNavigate()


   


  return (
    <div className={styles.reserve}>
        <section>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>Little Lemon is a Mediterranean inspired bar and 
                small plates restaurant focusing on fresh produce 
                and big flavours, offering bespoke cocktails and a 
                premium wine selection.
            </p>
            <img src={food} alt="food"/>
            <button onClick={() => navigate('booking')}>Reserve Table</button>
        </section>
    </div>
  )
}
