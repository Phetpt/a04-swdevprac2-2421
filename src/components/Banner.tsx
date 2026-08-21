import Image from "next/image";
import styles from "./banner.module.css"

export default function Banner () {
  return (
    <div className={styles.banner}>
      <Image src={'/img/Cover.jpg'} alt="Cover" fill={true} objectFit="cover" priority/>
      <div className={styles.bannerText}>
        <h1 style={{ fontSize: '40px' }}>where every event finds its venue</h1>
        <h3 style={{ fontSize: '18px' }}>Your dream event begins here. we provide a breathtaking backdrop for your special day. With elegant ballrooms, exquisite dining, and personalized service.</h3>
        <h3 style={{ fontSize: '18px' }}>we ensure every detail is nothing short of perfect. Let’s create unforgettable moments together.</h3>
      </div>
    </div>
  );
}