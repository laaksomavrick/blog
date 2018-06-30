import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import BlogPostHeader from '../BlogPostHeader/BlogPostHeader'

class BlogList extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { posts } = this.props
    return (
      <div className="blog-list">
        {posts.map(post =>
          <Link to={ `/post/${post._id}` } key={post._id}>
            <h1> 
              <BlogPostHeader title={post.title} />
            </h1>
          </Link>
        )}
      </div>
    )
  }
}
  
export default BlogList