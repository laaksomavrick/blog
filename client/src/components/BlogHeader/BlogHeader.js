import React from 'react'
import { Link } from 'react-router-dom'
import './BlogHeader.scss'

const BlogHeader = (props) => {
  const base = "blog-header"
  return (
    <div className={base}>
      <Link className={`${base}__href`}to={`/`}>
        <h1 className={`${base}__text`}>
          Mavrick Laakso
        </h1>
      </Link>
    </div>
  );
}

export default BlogHeader
