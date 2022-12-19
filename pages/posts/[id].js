import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';

export default function Home({ posts }) {
    return (
    <ul>
      {posts.map(post => {
        <li>
          {post.title}
        </li>
      })}
    </ul>
    );
  }
  
export async function getStaticProps(context) {
    const res = await fetch('https://.../posts');
    const data = await res.json();
    return {
        props: {
            posts: data.posts
        },
        revalidate: 60
    }
}