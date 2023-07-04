import Prism from "prismjs";
import { useEffect } from "react";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { timeToRead } from "lib/utils";
import RecommendedPosts from "components/RecommendedPosts";
import Comments from "components/Comments";


interface BlogPostProps {
  post: {
    frontmatter: {
      title: string;
      description: string;
      date: string;
    };
    content: string;
    slug: string;
    nextPost: {
      slug: string;
      frontmatter: {
        title: string;
      };
    };
    prevPost: {
      slug: string;
      frontmatter: {
        title: string;
      };
    };
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [post]);

  return (
    <>
      <NextSeo
        title={`${post.frontmatter.title} - Milton Bolonha`}
        description={post.frontmatter.description}
        openGraph={{
          url: `https://eugenia3.com.br/${post.slug}`,
          title: `${post.frontmatter.title} - Milton Bolonha`,
          description: post.frontmatter.description,
          images: [
            {
              url: `some.png`,
              alt: `${post.frontmatter.title}`,
            },
          ],
        }}
      />
      <header className="PostHeader">
        <Link href="/" className="ButtonBack" passHref>
          ← Voltar na listagem
        </Link>
        <p className="PostDate">
          {post.frontmatter.date} • {timeToRead(post.content)}
        </p>
        <h1 className="PostTitle">{post.frontmatter.title}</h1>
        <h2 className="PostDescription">{post.frontmatter.description}</h2>
      </header>
      <div className="MainContent">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
      <RecommendedPosts next={post.nextPost} previous={post.prevPost} />
      <Comments title={post.frontmatter.title} />
    </>
  );
};

export default BlogPost;
