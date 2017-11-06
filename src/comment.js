import React from 'react';

export const Comment = ({text, votes}) => 
	<li>
		{text} <span>votes: {cotes}</span><button onClick={() => thumbUpComment(id)}>Thumb up</button>
	</li>;