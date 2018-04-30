// Modal / Modal.js

import React from 'react'

import Button from 'material-ui/Button'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContextText,
  DialogTitle
} from 'material-ui/Dialog'

import './Modal.scss'

class Modal extends React.Component {

  static getDerivedStateFromProps(props, current_state) {
    if (props.default_state !== current_state.data) {
      return {
        data: props.default_state,
        error: false
      }
    } else {
      return null
    }
  }

  state = {
    data: this.props.default_state,
    error: false
  }

  handle_close = () => {
    const { close } = this.props
    close()
    this.reset()
  }

  handle_submit = () => {
    const { submit } = this.props
    const error = this.check_and_set_error()
    if (!error) {
      submit(this.state.data)
      this.handle_close()
    }
  }

  handle_change = (e) => {

    const name = e.target.name
    const value = e.target.value

    const data = { ...this.state.data, [name]: value }

    this.setState({ data }, () => {
      if (this.state.error) {
        this.check_and_set_error()
      }
    })
  }

  reset = () => {
    this.setState({ data: {}, error: false })
  }

  check_and_set_error = () => {
    //TODO: better err handling per child obj, instead of all
    let error = false
    Object.keys(this.state.data).forEach((k) => {
      if (error === false) {
        error = this.state.data[k] == undefined
      }
    })
    if (Object.keys(this.state.data).length === 0 && this.props.strict) {
      error = true
    }
    this.setState({ error })
    return error
  }

  render() {

    const { 
      children,
      open,
      title,
      button
    } = this.props

    const { error } = this.state

    return (
      <Dialog
        className="modal"
        open={open}
        onClose={this.handle_close}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent className="modal__content">
          {React.Children.map(children, child => (
            React.cloneElement(child, { onChange: this.handle_change, error })
            )
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handle_close}>
            Cancel
          </Button>
          <Button color="primary" onClick={this.handle_submit}>
            {button}
          </Button>
        </DialogActions>
      </Dialog>
    )

  }

}

export default Modal
