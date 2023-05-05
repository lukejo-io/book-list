import { useRouter } from "next/router";

const Author = () => {
  const router = useRouter();
  const { authorid } = router.query;

  return <p>Post: {authorid}</p>;
};

export default Author;
