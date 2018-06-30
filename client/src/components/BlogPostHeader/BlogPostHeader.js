import React from 'react';
import { Row, Col } from 'reactstrap';

class BlogPostHeader extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { title } = this.props
    return (
      <Row className="blog-post-header">
        <Col>
          <h2>
            {title}
          </h2>
        </Col>
      </Row>
    )
  }
}
  
export default BlogPostHeader