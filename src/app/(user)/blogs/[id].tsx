import { GetStaticProps, GetStaticPaths } from 'next';
import axios from 'axios';
import RelatedPosts from '../../../components/RelatedPosts';

const BlogPost: React.FC<{ post: any }> = ({ post }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="content">
        {/* Your blog content here */}
      </div>
      <RelatedPosts />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await axios.get(`https://your-strapi-endpoint/posts/${params?.id}`);
  const post = res.data;

  return { props: { post } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get('https://your-strapi-endpoint/posts');
  const posts = res.data;

  const paths = posts.map((post: any) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
};

export default BlogPost;
