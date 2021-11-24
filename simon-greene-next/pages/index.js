import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.main}>
        <Header />
        <div className={styles.name}>
          <h1>Simon Greene</h1>
          <h2>Photography</h2>
        </div>
      </div>
    </div>
  );
}
