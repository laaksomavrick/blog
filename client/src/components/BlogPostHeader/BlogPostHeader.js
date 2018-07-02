import React from 'react';
import { Row, Col } from 'reactstrap';
import './BlogPostHeader.scss'

class BlogPostHeader extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { title, time } = this.props

    const naturalDate = new Date(Date.parse(time)).toDateString()

    return (
      <Row className="blog-post-header">
        <Col>
          <h1>
            {title}
          </h1>
          <div className="blog-post-header__time">
            {naturalDate}
          </div>
        </Col>
      </Row>
    )
  }
}
  
export default BlogPostHeader