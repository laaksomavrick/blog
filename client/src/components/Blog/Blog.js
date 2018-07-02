import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Container } from 'reactstrap'
import BlogList from '../BlogList/BlogList'
import BlogHeader from '../BlogHeader/BlogHeader'
import BlogPost from '../BlogPost/BlogPost';
import BlogPostForm from '../BlogPostForm/BlogPostForm'
import { getPosts, getPostsCount } from '../../api/posts'

class Blog extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      postCount: 0,
      page: 0,
      limit: 7
    }
  }

  async componentDidMount() {
    await this.handleGetCount()
    await this.handleGetPosts()
  }

  handleGetCount = async () => {
    const newPostCount = await getPostsCount()
    this.setState({
      postCount: newPostCount.count
    })
  }

  handleGetPosts = async () => {
    const { page, limit, posts } = this.state
    const newPosts = await getPosts(page, limit)
    this.setState({
      posts: posts.concat(newPosts),
      page: page + 1
    })
  }

  render() {

    const { posts, postCount } = this.state

    const blogList = (props) => (
      <BlogList
        posts={posts}
        postCount={postCount}
        onGetPosts={this.handleGetPosts}
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
          <Route name="blogPostForm" exact path="/new" component={BlogPostForm} />
          <Route component={() => <Redirect to="/" /> } /> 
        </Switch>
      </Container>
    )
  }

}

export default Blog
