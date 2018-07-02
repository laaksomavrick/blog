import React from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'reactstrap';
import BlogPostHeader from '../BlogPostHeader/BlogPostHeader'
import './BlogList.scss'

class BlogList extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { posts, postCount, onGetPosts } = this.props
    const alertVisible = posts.length < postCount
    return (
      <div className="blog-list">
        {posts.map(post =>
          <Link to={ `/post/${post._id}` } key={post._id}>
            <h1> 
              <BlogPostHeader title={post.title} time={post.createdAt} />
            </h1>
          </Link>
        )}
        <Alert 
          className="blog-list__load-more"
          fade={false} 
          color="secondary" 
          isOpen={alertVisible}
          onClick={onGetPosts}
        >
          Load more
        </Alert>
      </div>
    )
  }
}
  
export default BlogList