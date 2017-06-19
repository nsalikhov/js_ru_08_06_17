import React, { PropTypes, Component } from 'react'
import Comment from './Comment'

export default class CommentList extends Component {
    static defaultProps  = {
        comments: []
    }

    constructor(props) {
        super(props)

        this.state = {
            areCommentsVisible: true
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleComments}>{this.state.areCommentsVisible ? 'hide comments' : 'show comments'}</button>

                {this.state.areCommentsVisible && <ul>{this.props.comments.map(x => <Comment key={x.id} {...x} />)}</ul>}
            </div>
        )
    }

    toggleComments = (ev) => {
        ev.preventDefault()

        this.setState({
            areCommentsVisible: !this.state.areCommentsVisible
        })
    }    
}