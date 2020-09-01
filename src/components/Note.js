import React, { Fragment } from 'react';
import editIcon from '../assets/images/edit-outline.svg';
import deleteIcon from '../assets/images/delete.svg';


const Note = ({ noteData, handleEdit, handleDelete }) => {

	return (
		<div>
			{
				noteData && (
					<div className="note">
						<p className="note-text">{noteData.text}</p>
						<Labels label={noteData.label} />
						
						<div className="note-base hide">
							<img onClick={() => handleEdit(noteData.id)} src={editIcon} alt="edit" />
							<img onClick={() => handleDelete(noteData.id)} src={deleteIcon} alt="delete" />
						</div>
					</div>
				)
			}
		</div>
	)
}

// renders labels on note
const Labels = ({ label }) => {
	return (
		<Fragment>
			{
				label.map(lb => {
					return (
						<p className="label">{lb}</p>
					)
				})
			}
		</Fragment>
	)
}

export default Note;