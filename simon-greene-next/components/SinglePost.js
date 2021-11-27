import Link from "next/link";
import styles from "../styles/SinglePost.module.css";

export default function SingelPost({ title, published, content }) {
  return (
    <div className={styles.post}>
      <h1>{title}</h1>
      <p className={styles.meta}>{published}</p>
      <p>{content}</p>
      <div className={styles.meta}>
        <Link href="/blog">
          <a>Go back</a>
        </Link>
      </div>
    </div>
  );
}
