// src/components/PostList.jsx
import React from 'react';
import PropTypes from 'prop-types';
import postsData from '../posts.json';

export default function PostList({ max = 0 }) {
    const posts = Array.isArray(postsData) ? [...postsData] : [];
    posts.sort((a, b) => {
        const yearDiff = (b.year ?? 0) - (a.year ?? 0);
        if (yearDiff !== 0) return yearDiff;
        return (a.title || a.id).localeCompare(b.title || b.id);
    });

    const visible = max > 0 ? posts.slice(0, max) : posts;

    if (visible.length === 0) {
        return (
            <div style={{ padding: 12, background: '#f8fafc', borderRadius: 8 }}>
                <p style={{ margin: 0, color: '#4b5563' }}>No posts found.</p>
            </div>
        );
    }

    return (
        <section aria-labelledby="posts-heading">
            <h2 id="posts-heading" style={{ marginBottom: 12, fontSize: 20, fontWeight: 600 }}>
                Publications
            </h2>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
                {visible.map((post) => (
                    <li
                        key={post.id}
                        style={{
                            padding: 12,
                            borderRadius: 8,
                            border: '1px solid rgba(0,0,0,0.06)',
                            boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
                        }}
                    >
                        <a href={`/posts/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div>
                                    <h3 style={{ margin: 0, fontSize: 16, fontWeight: 500 }}>{post.title ?? post.id}</h3>
                                    {post.excerpt ? <p style={{ margin: '6px 0 0', fontSize: 13, color: '#6b7280' }}>{post.excerpt}</p> : null}
                                </div>
                                {post.year ? <div style={{ marginLeft: 12, fontSize: 13, color: '#6b7280' }}>{post.year}</div> : null}
                            </header>

                            {post.tags && Array.isArray(post.tags) && post.tags.length > 0 ? (
                                <div style={{ marginTop: 10, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                    {post.tags.map((tag) => (
                                        <span key={tag} style={{ fontSize: 12, padding: '4px 8px', borderRadius: 999, border: '1px solid rgba(0,0,0,0.08)' }}>
                      {tag}
                    </span>
                                    ))}
                                </div>
                            ) : null}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}

PostList.propTypes = {
    max: PropTypes.number
};
