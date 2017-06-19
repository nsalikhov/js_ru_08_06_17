import React, { Component } from 'react'

export default function Comment({ user, text }) {
    return (
        <li>
            <div>
                <b>{user}</b>
            </div>
            <div>{text}</div>
        </li>
    )
}