import Link from "next/link";
import Header from "../components/Header";
import styles from "../styles/Post.module.css";

export default function Post({ post }) {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h2>{post.title}</h2>
        <p>{post.published}</p>
        <p>{post.content}</p>
        <Link href="/">
          <a>Go back</a>
        </Link>
      </div>
    </div>
  );
}

// tell next how many pages there are
export async function getStaticPaths() {
  const res = await fetch("http://localhost:1337/posts");
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return {
    paths,
    fallback: true,
  };
}

// for each page: get data for that page
export async function getStaticProps({ params }) {
  const { slug } = params;

  const res = await fetch(`http://localhost:1337/posts?slug=${slug}`);
  const data = await res.json();
  const post = data[0];

  return {
    props: { post },
  };
}
