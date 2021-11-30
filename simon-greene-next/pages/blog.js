import Header from "../components/Header";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Blog({ posts }) {
  const apiurl = "http://localhost:1337";
  return (
    <div>
      <Header />
      <h1 className="pagetitle">My blog</h1>
      <div className={styles.container}>
        {posts &&
          posts.map((post) => (
            <Link href={`/${post.slug}`} key={post.id}>
              <a className={styles.blogcard}>
                <Image
                  src={apiurl + post.image[0].url}
                  alt="Oh no! No image to show"
                  width={400}
                  height={250}
                />
                <p className={styles.category}>{post.category.category}</p>
                <h1 className={styles.h1}>{post.title}</h1>
                <p className={styles.author}>By {post.author.author}</p>
              </a>
            </Link>
          ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/posts");
  const posts = await res.json();

  return {
    props: { posts },
  };
}
