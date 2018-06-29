import React from 'react';
import { Row, Col } from 'reactstrap';

class BlogList extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { posts } = this.props
    return (
      <div className="blog-list">
        {posts.map(post =>
          <h1 key={post._id}>
            <Row className="blog-post">
              <Col>
                {post.title}
              </Col>
            </Row>
          </h1>
        )}
      </div>
    )
  }
}
  
export default BlogList