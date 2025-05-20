// src/app/posts/[id]/page.tsx

import { notFound } from "next/navigation";
import Link from "next/link";

// Define the type for dynamic route params
type Props = {
  params: {
    id: string;
  };
};

export default async function UsersDetailPage({ params }: Props) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

  if (!res.ok) {
    notFound();
  }

  const post = await res.json();

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p className="mb-6 text-gray-700">{post.body}</p>
      <Link href="/posts" className="text-blue-600 hover:underline">
        ← Back to Posts
      </Link>
    </div>
  );
}

