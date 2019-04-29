import React, { Component } from 'react';
import PostList from './components/PostList';
import MoreButton from './components/MoreButton';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      currentPosts: [],
      isLoading: true,
      inputValue: ''
    }
  }

  componentDidMount() {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
          this.setState({
            posts: data,
            currentPosts: data.splice(0, 10),
            isLoading: false
          })
        });
    }, 2000)
  }

  loadMore = () => {
    const Posts = this.state.posts;
    const currentPosts = this.state.currentPosts;
    const newPosts = currentPosts.concat(Posts.splice(0, 10));
    this.setState({ currentPosts: newPosts });
  }

  render() {
    if (this.state.isLoading) {
      return <div className="loader"></div>
    }
    return (
      <React.Fragment>
        <PostList posts={this.state.currentPosts} />
        <MoreButton onClick={this.loadMore} />
      </React.Fragment>
    )
  }
}

export default App;
