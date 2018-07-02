import React from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'reactstrap';
import BlogPostHeader from '../BlogPostHeader/BlogPostHeader'
import BlogPostSubheader from '../BlogPostSubheader/BlogPostSubheader'
import './BlogList.scss'

class BlogList extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { posts, postCount, onGetPosts, working } = this.props
    const alertVisible = posts.length < postCount
    const alertMessage = working ? 'Loading...' : 'Load more'
    return (
      <div className="blog-list">
        {posts.map(post => 
          <div key={post._id} className="blog-list__post">
            <Link to={ `/post/${post._id}` }>
                <BlogPostHeader title={post.title} />
            </Link>
            <BlogPostSubheader time={post.createdAt}/>
          </div>
        )}
        <Alert 
          className="blog-list__load-more"
          fade={false} 
          color="secondary" 
          isOpen={alertVisible}
          onClick={onGetPosts}
        >
          {alertMessage}
        </Alert>
      </div>
    )
  }
}
  
export default BlogList