import Image from "next/image";
import styles from "./card.module.css"

export default function EventCard () {
  return(
    <div className={styles.card}>
      <div className={styles.cardimg}>
        <Image src={'/img/Wedding.jpg'} alt="Card" fill={true} objectFit='cover'/>
      </div>
      <div className={styles.cardtext}>
        <h3>The Bloom Pavilion</h3>
        <p className={styles.subtext}>A breathtaking outdoor banquet where love blossoms amidst nature and unforgettable memories are made.</p>
      </div>
    </div>
  )
}