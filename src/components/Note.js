import React from 'react';


class Note extends React.Component {

	render() {
		const note = this.props.data;
		return (
			<div>
				{note && note.text}
			</div>
		)
	}
}

export default Note;