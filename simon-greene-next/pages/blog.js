import Header from "../components/Header";
import styles from "../styles/Blog.module.css";

export default function Blog({ posts }) {
  const apiurl = "http://localhost:1337";
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.pagetitle}>My blog</h1>
        {posts &&
          posts.map((post) => (
            <div className={styles.blogcard} key={post.id}>
              <img
                className={styles.cardimg}
                src={apiurl + post.image[0].formats.thumbnail.url}
              />
              <p className={styles.category}>{post.category.category}</p>
              <h1 className={styles.h1}>{post.title}</h1>
              <p className={styles.author}>By {post.author.author}</p>
            </div>
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
