import React from 'react';
import editIcon from '../assets/images/edit-outline.svg';
import deleteIcon from '../assets/images/delete.svg';


class Note extends React.Component {

	render() {
		const note = this.props.data;
		return (
			<div>
				{
					note && (
						<div className="note">
							<p>{note.text}</p>
							<div className="note-base">
								<img src={editIcon} alt="edit" />
								<p>{note.label}</p>
								<img src={deleteIcon} alt="delete" />
							</div>
						</div>
					)
				}
			</div>
		)
	}
}

export default Note;