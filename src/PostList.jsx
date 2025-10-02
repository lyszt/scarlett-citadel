// src/components/PostList.jsx
import React from 'react';
import PropTypes from 'prop-types';
import postsData from '../posts.json';
import headerImage from "./assets/images/background.jpg"

export default function PostList({ max = 0 }) {
    const posts = Array.isArray(postsData) ? [...postsData] : [];

    // Sort by year descending, then title
    posts.sort((a, b) => {
        const yearDiff = (b.year ?? 0) - (a.year ?? 0);
        if (yearDiff !== 0) return yearDiff;
        return (a.title || a.id).localeCompare(b.title || b.id);
    });

    const visible = max > 0 ? posts.slice(0, max) : posts;

    if (visible.length === 0) {
        return <p>No posts available.</p>;
    }

    return (
        <section className="absolute top-0 left-0 flex justify-center bg-gray-100 h-screen w-screen z-5">
            <div className="postList text-black">
                <div className="w-screen h-full flex items-center">
                    
                    <div className="card flex flex-col justify-start text-left items-start gap-5 left-10 z-6 absolute h-[60%] bg-white w-[25%]
                     rounded-xl shadow-lg shadow-stone-600 flex items-center justify-start p-10">
                        <h2 className="text-2xl">Publications</h2>
                        <hr className="border-stone-200 border w-1/5 border-2"/>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

                    </div>
                    <div className="img-wrapper overflow-hidden h-5/6 w-screen relative flex items-center justify-center">
                        <img src={headerImage} alt="" className="w-screen relative"/>
                </div>
                </div>
                <h2>Publications</h2>
                <ul>
                    {visible.map((post) => (
                        <li key={post.id}>
                            <a href={`/posts/${post.id}`}>
                                <h3>{post.title ?? post.id}</h3>
                                {post.year && <span>{post.year}</span>}
                                {post.excerpt && <p>{post.excerpt}</p>}
                                {post.tags && post.tags.length > 0 && (
                                    <ul>
                                        {post.tags.map((tag) => (
                                            <li key={tag}>{tag}</li>
                                        ))}
                                    </ul>
                                )}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

PostList.propTypes = {
    max: PropTypes.number,
};
