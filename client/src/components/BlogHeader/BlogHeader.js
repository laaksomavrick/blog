import React from 'react'
import './BlogHeader.scss'

const BlogHeader = (props) => {
  const base = "blog-header"
  return (
    <div className={base}>
      <h1 className={`${base}__text`}>
        Mavrick Laakso
      </h1>
    </div>
  );
}

export default BlogHeader
