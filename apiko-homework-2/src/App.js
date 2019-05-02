import React, { Component } from 'react';
import PostList from './components/PostList';
import MoreButton from './components/MoreButton';
import Search from './components/Search';
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

  handleSearch(e) {
		let searchQuery = e.target.value;
		if (searchQuery) {
			let searchedPosts = this.state.currentPosts.filter(post => {
				return post.body.toLowerCase().indexOf(searchQuery) !== -1;
			})
			this.setState({
				posts: searchedPosts
			})
		} else {
			this.setState({
				posts: this.state.currentPosts
			})
		}
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
        <Search onChange={this.handleSearch}/>
        <PostList posts={this.state.currentPosts} />
        <MoreButton onClick={this.loadMore} />
      </React.Fragment>
    )
  }
}

export default App;
