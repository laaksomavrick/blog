import React from 'react';
import { Row, Col } from 'reactstrap';
import BlogPostHeader from '../BlogPostHeader/BlogPostHeader';

class BlogPost extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { post } = this.props
    return (
      <div className="blog-post">
        <BlogPostHeader title={post.title} />
        <div className="blog-post-body">
          {post.body}
        </div>
      </div>
    )
  }
}
  
export default BlogPost