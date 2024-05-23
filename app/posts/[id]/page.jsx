import { Suspense } from "react";
import PostsPage from "../page";

async function loadPosts(id) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  const data = await res.json();
  // console.log(data);
  return data;
}

async function Page({ params }) {
  const post = await loadPosts(params.id);
  return (
    <div>
      <h1>Post page {params.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <hr />
      <h1>Otras Publicaciones</h1>
      <Suspense fallback={<div>Cargando publicaciones...</div>}>
        <PostsPage />
      </Suspense>
    </div>
  );
}

export default Page;
