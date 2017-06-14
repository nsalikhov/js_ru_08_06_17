import React, { Component } from 'react'
import Comment from './Comment'

export default function CommentList({ isCommentsVisible, toggleComments, comments }) {
    return (
        <div>
            <button onClick={toggleComments}>{isCommentsVisible ? 'hide comments' : 'show comments'}</button>

            {isCommentsVisible &&
                <ul>{comments.map(x => <Comment key={x.id} {...x} />)}</ul>}
        </div>
    )
}