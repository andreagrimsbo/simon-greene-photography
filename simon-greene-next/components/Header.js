import Link from "next/link";
import styles from "../styles/Header.module.css";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.centernav}>
        <Link href="/">
          <a className={router.pathname == "/" ? "active" : "link"}>home</a>
        </Link>
        <Link href="/about">
        <a className={router.pathname == "/about" ? "active" : "link"}>about</a>
        </Link>
        <Link href="/blog">
        <a className={router.pathname == "/blog" ? "active" : "link"}>blog</a>
        </Link>
        <Link href="/portfolio">
        <a className={router.pathname == "/" ? "active" : "link"}>portfolio</a>
        </Link>
      </div>
      <div className={styles.rightnav}>
        <Link href="/login">
        <a className={router.pathname == "/login" ? "active" : "link"}>login</a>
        </Link>
      </div>
    </nav>
  );
}
