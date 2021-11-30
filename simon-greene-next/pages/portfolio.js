import Header from "../components/Header";
import styles from "../styles/Portfolio.module.css"; 
import Image from "next/image";

export default function Portfolio({ images }) {
  const apiurl = "http://localhost:1337";
  return (
    <div>
      <Header />
      <div>
        <h1 className="pagetitle">Portfolio</h1>
        {images &&
          images.map((image) => (
              <div className={styles.figure} key={image.id}>
                <Image
                  src={apiurl + image.image.url}
                  alt="Me!"
                  width={700}
                  height={500}
                />
                <p>{image.caption}</p>
              </div>
          ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/images");
  const images = await res.json();

  return {
    props: { images },
  };
}
