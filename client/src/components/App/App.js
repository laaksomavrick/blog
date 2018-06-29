import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'reactstrap'
import BlogList from '../BlogList/BlogList'
import { getPosts } from '../../api/posts'
import './App.scss'

class App extends React.Component {

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

  render() {

    const { posts } = this.state

    return (
      <Container className="app">
        <div className="blog">
          <BlogList posts={posts} />
        </div>
      </Container>
    )
  }

}

export default App
