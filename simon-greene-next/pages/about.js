import Image from "next/image";
import simon from "../public/simon-greene.jpeg"; 
import Header from "../components/Header";
import styles from "../styles/About.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.main}>
        <Header />
        <div className={styles.container}> 
        <h1>About me</h1>
          <div className={styles.content}>
            <p>
              Hi, my name is Simon Greene and I am a 26 year old professional
              photographer from London. I am currently based in Italy, living in
              the beautiful city of Milan. I travel around the country in my
              lovely red Fiat to photograph the sceneray and the people living
              in it. Shooting weddings is also one of the many joys I get to
              experience through my work. So if you are interested about my
              work, please check out my portfolio.
            </p>
            <p>
              If you are interested to work with me, feel free to contact me via
              the options below.
            </p>
          </div>
          <div className={styles.simonimg}>
          <Image src={"/simon-greene.jpeg"} alt='Home Page' width={416} height={624} />
          </div>
        </div>
      </div>
    </div>
  );
}
