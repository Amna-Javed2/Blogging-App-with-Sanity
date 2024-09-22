import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

type BlogType = {
  _id: string;
  title: string;
  description: string;
  image: string;
};

const getBlogs = async () => {
  return client.fetch(`*[_type=="blog"]`)
};

export default async function Home() {
  const blogs = await getBlogs();
  console.log(blogs);

  return <main className="p-10">
    <div className="flex justify-start">
      <h1 className="text-[25px]">Blogging Website</h1>
    </div>
    <div className="flex gap-20 m-8">
      {blogs.map((blog: BlogType)=> (
        <div key={blog._id} className="flex flex-col gap-y-4">
          <h3 className="text-2xl">{blog.title}</h3>
          <p>{blog.description}</p>
          <Image src={urlFor(blog.image).url()} height={400} width={400} alt="img-blog" />
        </div>
      ))}
      </div>
  </main>;
}
