import Link from 'next/link';

interface RecommendedPostsProps {
  next: {
    slug: string;
    frontmatter: {
      title: string;
    };
  };
  previous: {
    slug: string;
    frontmatter: {
      title: string;
    };
  };
}

const RecommendedPosts: React.FC<RecommendedPostsProps> = ({
  next,
  previous,
}) => (
  <div className='RecommendedWrapper'>
    {previous && (
      <Link href={previous.slug} passHref>
        <div className='RecommendedLink previous'>
          {previous.frontmatter.title}
        </div>
      </Link>
    )}
    {next && (
      <Link href={next.slug} passHref>
        <div className='RecommendedLink next'>{next.frontmatter.title}</div>
      </Link>
    )}
  </div>
);

export default RecommendedPosts;
