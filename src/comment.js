import React from 'react';

const Comment = ({text, votes, id, thumbsUp, thumbsDown, removeComment, addComment}) => 
    <li>
        {text} <span>votes: <strong>{votes}</strong> </span> 
        <button onClick={() => thumbsUp(id)}>Thumb Up</button> 
        <button onClick={() => thumbsDown(id)}>Thumb Down</button>
        <button onClick={() => removeComment(id)}>x</button>
        <button onClick={() => addComment(id)}>Add new comment</button>
    </li>;
export default Comment;