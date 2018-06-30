import React from 'react';
import { 
  Row, 
  Col, 
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input, 
  FormText,
  Alert
} from 'reactstrap';
import { createPost } from '../../api/posts'

class BlogPostForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: '',
      showSuccess: false,
      showError: false
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.sendPost()
  }

  handleTitleChange = (e) => {
    this.setState({title: e.target.value})
  }

  handleBodyChange = (e) => {
    this.setState({body: e.target.value})
  }

  sendPost = async () => {
    const data = this.state
    const result = await createPost(data)
    if (result) {
      this.setState({
        showSuccess: true
      })
    } else {
      this.setState({
        showError: true
      })
    }
  }

  render() {
    const { post } = this.props
    const { showSuccess, showError } = this.state

    const alert = 
      showSuccess || showError ? (
      showSuccess ? (
        <Alert color="primary">
          Post successfully saved!
        </Alert>
      ) : (
        <Alert color="danger">
          Error saving post.
        </Alert>
      )
    ) : (
      null
    )

    return (
      <Row>
        <Col>
          <Form 
            className="blog-post-form"
            onSubmit={this.handleSubmit}
          >
            <FormGroup>
              <Label>
                Title:
              </Label>
              <Input 
                type="text" 
                value={this.state.title} 
                onChange={this.handleTitleChange} 
              />
            </FormGroup>
            <FormGroup>
              <Label>
                Body:
              </Label>
              <Input 
                type="textarea" 
                value={this.state.body} 
                onChange={this.handleBodyChange} 
              />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
          <div className="blog-post-alert mt-3">
            {alert}
          </div>
        </Col>
      </Row>
    )
  }
}
  
export default BlogPostForm