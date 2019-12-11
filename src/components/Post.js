import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {
    state = {
        post: null
    }
    componentDidMount(){
        // console.log(this.props);
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => {
                this.setState({
                    id: id
                })
                console.log(res)
            })
    }
    render() {

        return (
            <div className="container">
                <h4>{this.state.id}</h4>
            </div>
        )
    }
}


export default Post