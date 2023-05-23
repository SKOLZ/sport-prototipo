import { useSearchParams } from "react-router-dom";
import { Post } from "../../components/Post";
import { usePrismicDocumentByID } from "@prismicio/react";

export const PostDetail: React.FC = () => {
  const [params] = useSearchParams();
  const postId = params.get('post_id');
  const [post] = usePrismicDocumentByID(postId || '');
  console.log(post);
  return (
    <section className="page-container stretched">
      <Post title={post?.data.title[0].text} content={post?.data.content} />
    </section>
  );
} 
