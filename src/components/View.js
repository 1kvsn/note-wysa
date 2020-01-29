import React, { useContext } from 'react';

import { NoteContext } from './NoteContext';


const View = ({ handleView }) => {

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
		<div className="">
			<div>
				<p>Total Notes: {notes && notes.length}</p>
				<select
					className="select-label"
					value={viewByLabel}
					onChange={e => setViewByLabel(e.target.value)}
				>
					<option selected >all</option>
					<option value="home">Home</option>
					<option value="work">Work</option>
					<option value="personal">Personal</option>
					<option value="finance">Finance</option>
					<option value="fun">Fun</option>
				</select>
			</div>
		</div>
	)
}

export default View;