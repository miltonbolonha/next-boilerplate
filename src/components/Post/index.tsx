import Link from "next/link";

interface PostProps {
  slug: string;
  date: string;
  timeToRead?: number;
  title: string;
  description: string;
  main_class?: string;
}

const Post: React.FC<PostProps> = ({ slug, date, timeToRead, title, description, main_class }) => {
  return (
    <Link href={slug} passHref>
      <div className="PostLink">
        <section className="PostWrapper">
          {main_class && (
            <div className={`is-${main_class} PostTag`}>{main_class}</div>
          )}
          <time className="PostInfo">
            <div className="PostDate">
              {date} {timeToRead && ` • ${timeToRead} min de leitura`}
            </div>
            <h1 className="PostTitle">{title}</h1>
            <h2 className="PostDescription">{description}</h2>
          </time>
        </section>
      </div>
    </Link>
  );
};

export default Post;
