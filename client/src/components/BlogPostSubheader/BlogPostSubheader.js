import React from 'react';
import './BlogPostSubheader.scss'

class BlogPostSubheader extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { time } = this.props
    const naturalDate = new Date(Date.parse(time)).toDateString()

    return (
      <span className="blog-post-subheader">
        {naturalDate}
      </span>
    )
  }
}
  
export default BlogPostSubheader