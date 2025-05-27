'use client';

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { blogsContent } from "@/lib/constants";

const BlogDetails: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const router = useRouter();

    const blog = blogsContent.blogs.find((b) => b.slug === slug)

    if (!blog) {
        return <div className="text-center pt-32 text-white">Blog not found.</div>
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-10 pt-24">
            <button
                onClick={() => router.push("/")}
                className="mb-4 text-blue-600 hover:underline"
            >
                ← Back to Home
            </button>

            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
            <p className="text-sm text-gray-500 mb-6">{blog.category}</p>

            <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-auto rounded mb-6"
            />

            <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: blog.content }}
            />
        </div>
    );
};

export default BlogDetails;
