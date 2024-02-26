import Nav from "../components/Nav"
import styles from './About.module.css'
import Footer from "../components/Footer"
import food from '../img/IMG_0133-4b9bb28.webp'


export default function About(){


    return (
        <>   
            <div className={styles.about}>
            <Nav />
           
                
                <div className={styles.aboutinfo}>
                    <img  src={food} alt="food"/>
                </div>
                <div className={styles.rs}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis accumsan lorem. Phasellus consequat eros et tortor vulputate dapibus. In ultricies erat vitae iaculis malesuada. Aliquam at lectus nibh. Duis dignissim urna eu sollicitudin faucibus. Nulla condimentum tincidunt arcu in lacinia. Integer tincidunt varius lorem, ac suscipit nulla. Nullam dictum lorem quis sapien vehicula, porta placerat risus posuere. Quisque semper rhoncus elit pretium egestas. Etiam molestie nunc non tincidunt feugiat. Donec elementum leo vel augue imperdiet, ut congue orci molestie. Nam mi sapien, iaculis at urna nec, ultricies sagittis sapien. Maecenas a ullamcorper tellus. Sed ullamcorper lectus vitae nisi consectetur finibus.</p>
                    <p>Morbi sit amet lectus mauris. Suspendisse potenti. Nam pretium pharetra sapien a mollis. Ut ullamcorper eget diam ac ornare. Sed commodo euismod ligula a ullamcorper. Maecenas dignissim ut nibh eget consectetur. Duis erat lacus, condimentum ac purus eget, laoreet vestibulum dolor. Nulla ultricies justo at lorem aliquam, sit amet pharetra odio sagittis. Fusce dignissim, nisi et congue viverra, dolor est vehicula lorem, et pulvinar ante ipsum sollicitudin mi. Vestibulum quis ullamcorper massa. Fusce luctus libero a porttitor maximus. Vestibulum dictum tristique volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer vulputate nulla vitae justo aliquet, nec pulvinar nibh pretium.</p>
                    <p>Curabitur sit amet semper metus. Duis pretium varius dapibus. In sed eros id elit dapibus egestas ut at justo. Etiam aliquet vel ipsum pulvinar pulvinar. Ut odio lorem, consectetur bibendum consectetur nec, pharetra quis leo. Proin elementum nec lorem eget venenatis. Integer sed arcu erat. Pellentesque velit lacus, mattis ac placerat eget, porttitor sed dui. Maecenas eleifend molestie nulla, lobortis laoreet nisl interdum nec. Fusce urna risus, pulvinar in placerat in, mollis a nibh. In viverra enim sit amet iaculis rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consectetur, massa sed posuere pellentesque, nisl diam auctor massa, eget porta tortor dolor sed odio. Donec vel pretium lorem. Integer tempus accumsan massa in ultrices.</p>
                </div>    
                
            </div>
            <Footer />
        </>
    )
}