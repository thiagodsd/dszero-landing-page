import { getAllPosts } from '@/lib/posts';
import React from 'react';

const Page = async () => {
    const posts = await getAllPosts();
    return (
        <section className="py-24">
            <div className="container">
                <h1>
                    Posts
                </h1>
                <ul>
                    {posts.map((post) => (
                        <li key={post.slug}>
                            <a href={`/posts/${post.slug}`}>
                                {post.frontmatter?.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Page;