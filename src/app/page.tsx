import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

type BlogType = {
  _id: string;
  title: string;
  description: string;
  image: string;
};

const getBlogs = async () => {
  return client.fetch(`*[_type=="blog"]`);
};

export default async function Home() {
  const blogs = await getBlogs();
  console.log(blogs);

  return (
    <main className="bg-gradient-to-r from-gray-900 to-blue-800 max-h-screen">
      <header><Navbar /></header>
      <HeroSection/>
      <div className="flex gap-20 m-8">
        {blogs.map((blog: BlogType) => (
          <div key={blog._id} className="flex flex-col gap-y-4">
            <h3 className="text-2xl">{blog.title}</h3>
            <p>{blog.description}</p>
            <Image
              src={urlFor(blog.image).url()}
              height={200}
              width={200}
              alt="img-blog"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
