import { GetStaticProps } from "next"
type Post = {
  id: number
  title: string
}
type Props = {
  posts: Post[]
}
export default function Posts({ posts }: Props) {
  return (
    <div>
      {posts.map((post) => (
        <p key={post.id}>title={post.id}: {post.title}</p>
      ))}
    </div>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts: Post[] = await res.json()
  return { props: { posts},
  }     
}