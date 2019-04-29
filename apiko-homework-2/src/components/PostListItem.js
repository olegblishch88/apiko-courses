import React, { Component } from 'react'

class PostListItem extends Component {
    shouldComponentUpdate(nextProps) {
        return (
            this.props.title !== nextProps.title || this.props.body !== nextProps.body
        )
    }

    render() {
        return (
          <div className="row">
            <div className="col s12 m6">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">{this.props.title}</span>
                  <p>{this.props.body}</p>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default PostListItem;
