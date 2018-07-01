import React from 'react'
import BlogPostHeader from '../BlogPostHeader/BlogPostHeader'
import ReactMarkdown from 'react-markdown'
import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css';

const CodeBlock = (props) => {
  const html = Prism.highlight(props.literal, Prism.languages[props.language])
  const cls = `language-${props.language}`
  return (
    <pre className={cls}>
      <code
        dangerouslySetInnerHTML={{__html: html}}
        className={cls}
      />
    </pre>
  )
}

class BlogPost extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    Prism.highlightAll()
  }

  componentDidUpdate() {
    Prism.highlightAll()
  }

  render() {
    const { post } = this.props
    return (
      <div className="blog-post">
        <BlogPostHeader title={post.title} />
        <div className="blog-post-body">
          <ReactMarkdown source={post.body} renderers={{CodeBlock: CodeBlock}} />
        </div>
      </div>
    )
  }
}
  
export default BlogPost