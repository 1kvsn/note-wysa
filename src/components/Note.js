import React from 'react';
import editIcon from '../assets/images/edit-outline.svg';
import deleteIcon from '../assets/images/delete.svg';


const Note = ({ noteData, handleEdit, handleDelete }) => {

	return (
		<div>
			{
				noteData && (
					<div className="note">
						<p>{noteData.text}</p>
						<div className="note-base">
							<img onClick={() => handleEdit(noteData.id)} src={editIcon} alt="edit" />
							<Labels label={noteData.label} />
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
		<>
			{
				label.map(lb => {
					return (
						<p className="label">{lb}</p>
					)
				})
			}
		</>
	)
}

export default Note;