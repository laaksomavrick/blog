import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Container } from 'reactstrap'
import BlogList from '../BlogList/BlogList'
import BlogHeader from '../BlogHeader/BlogHeader'
import { getPosts } from '../../api/posts'
import './Blog.scss'
import BlogPost from '../BlogPost/BlogPost';

class Blog extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  async componentDidMount() {
    const posts = await getPosts();
    this.setState({
      posts
    })
  }

  // make the font look like code
  // header github colors

  render() {

    const { posts } = this.state

    const blogList = (props) => (
      <BlogList
        posts={posts}
        {...props}
      />
    )
    const blogPost = (props) => {
      const id = props.match.params.id
      const post = posts.find(p => p._id === id)
      return (
        <BlogPost 
          post={post} 
          {...props}
        />
      )
    }

    return (
      <Container className="blog">
        <BlogHeader />
        <Switch>
          <Route name="blogPost" path="/post/:id" render={blogPost} />
          <Route name="blogList" exact path="/" render={blogList} />
          <Route component={() => <Redirect to="/" /> } /> 
        </Switch>
      </Container>
    )
  }

}

export default Blog
