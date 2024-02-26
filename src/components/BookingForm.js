import {useState} from 'react'
import styles from './BookingForm.module.css'
import DatePicker from 'react-date-picker';
import { useNavigate } from 'react-router-dom';

export default function BookingForm(props) {
    const [date,setDate] = useState("")
    const [times,setTimes] = useState('');
    const [guests,setGuests] = useState("")
    

    const handleSubmit =(e)=>{
        e.preventDefault();
        props.submitForm(e)
    }

    const handleChange =(e) =>{
        setDate(e);
        props.dispatch(e)
    } 

    const navigate = useNavigate();
  return (
    <header className={styles.header}>
        <section>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <label htmlFor='book-date'>Choose Date : </label>
                        {/* <DatePicker  id="date" onChange={(date) => setDate(date)} selected={date}
                            dateFormat="dd/MM/yyyy"
                        /> */}
                        <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required/>
                    </div>
                    <div>
                        <label htmlFor='book-time'>choose Time : </label>
                        <select id="book-time" required>
                           <option value="">Select a time : </option>
                           {props.availableTimes?.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
                        </select>
                    </div>
                    <div>
                        <label htmlFor='book-guests'>Number of guests : </label>
                        <input id="book-guests" min="1" value={guests}onChange={(e)=>setGuests(Number(e.target.value))} placeholder={0} max={10} required></input>
                    </div>
                    <div>
                        <input className={styles.btn} aria-label="On Click" type={"submit"} value={"Make Your Reservation"}/>
                        <button className={styles.cancel} onClick={()=>navigate("/")}>&larr;Back</button>
                    </div>
                </fieldset>


            </form>
        </section>
    </header>
  )
}
