import React, { useContext } from 'react';

import { NoteContext } from './NoteContext';


const View = ({ filteredNotes }) => {

	const {
		notes,
		label,
		setInputText,
		setLabel,
		setNotes,
		editMode,
		setEditMode,
		viewByLabel,
		setViewByLabel
	} = useContext(NoteContext);

	return (
		<div className="view-container">
			<div className="view">
				<p>Total Notes: {notes && notes.length}</p>
				<select
					className="filter-label"
					value={viewByLabel}
					onChange={e => setViewByLabel(e.target.value)}
				>
					<option value="none" selected disabled hidden>
						Select label
      		</option>
					<option value="home">Home</option>
					<option value="work">Work</option>
					<option value="personal">Personal</option>
					<option value="finance">Finance</option>
					<option value="fun">Fun</option>
				</select>
			</div>
			{
				viewByLabel && filteredNotes.length === 0 ? (
					<p>No notes present with this label. Displaying all notes.</p>
				) : null
			}
		</div>
	)
}

export default View;