import React from 'react';
/*import {thumbsUp} from './index';
import {thumbsDown} from './index';
import {removeComment} from './index';
import {editComment} from './actions';*/

const Comment = ({text, votes, id, thumbsUp, thumbsDown, removeComment}) => 
    <li>
        {text} <span>votes: <strong>{votes}</strong> </span> 
        <button onClick={() => thumbsUp(id)}>Thumb Up</button> 
        <button onClick={() => thumbsDown(id)}>Thumb Down</button>
        <button onClick={() => removeComment(id)}>x</button>
    </li>;

export default Comment;