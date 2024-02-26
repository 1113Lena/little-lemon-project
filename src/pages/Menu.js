import Swal from 'sweetalert2';
import recipes from '../recipes'
import styles from './Menu.module.css'
import { useNavigate } from 'react-router-dom'


export default function Menu(){

   const navigate = useNavigate();

   function handleOrder(id) {
    console.log(id,"aa")
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, order it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "ordered!",
            text: "Your order has been processing.",
            icon: "success"
          });
        }
      });

   }
    return (
        <>
            
            <div className={styles.menucontainer}>
                <div className={styles.menuheader}>
                    <h2>This week specials</h2>
                   
                    <button onClick={()=> navigate("/")}> &larr; Back</button>

                </div>

                <div className={styles.card}>
                    {recipes.map((item) => 
                        <div className={styles.menuitems}>
                            <img src={item.image} alt=""/>
                            <div className={styles.menucontent}>
                                <div className={styles.heading}>
                                    <h5>{item.title}</h5>
                                    <p>{item.price}</p>
                                </div>
                                <p>{item.description}</p>
                                <button className={styles.orderBtn} onClick={()=>handleOrder(item.id)}>Order Now</button>
                            </div>
                        </div>
                    )}

                </div>

            </div>
        </>
    )
}