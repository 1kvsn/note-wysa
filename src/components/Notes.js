import React, { useContext, useEffect } from 'react';

import Note from './Note';
import { NoteContext } from './NoteContext';

const { uuid } = require('uuidv4');

const Notes = () => {

	const {
		inputText,
		notes,
		label,
		setInputText,
		setLabel,
		setNotes,
		editMode,
		setEditMode,
	} = useContext(NoteContext);


	const handleSubmit = () => {
		if (!inputText) return;

		let newNote = {};
		newNote.id = uuid();
		newNote.text = inputText;
		newNote.label = label;

		setNotes([newNote, ...notes]);
		setInputText("");

		if (editMode) {
			setEditMode(false);
		}
		setLabel([]);
	}

	const handleDelete = (id) => {
		let remainingNotes = notes.filter(note => note.id !== id)
		setNotes([...remainingNotes])
	}

	const handleEdit = (id) => {
		if (editMode) return;

		let selectedNote = notes.find(note => note.id === id);
		handleDelete(selectedNote.id);
		setInputText(selectedNote.text);

		if (selectedNote.label.length) {
			setLabel(selectedNote.label)
		}
		setEditMode(true);
	}


	useEffect(() => {
		const data = localStorage.getItem('notes');
		if (data) {
			setNotes(JSON.parse(data));
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('notes', JSON.stringify(notes));
	})

	return (
		<>
			<div className="wrapper">
				<section className="form">
					<textarea
						autoFocus
						onChange={e => setInputText(e.target.value)}
						rows={inputText ? 6 : 2}
						placeholder="Take a note..."
						value={inputText}
						className="input"
					/>
					<select
						className="select-label"
						value={label[0] || "Add label"}
						onChange={e => setLabel([e.target.value])}

					>
						<option value="Add label" hidden>Add label</option>
						<option value="home">Home</option>
						<option value="work">Work</option>
						<option value="personal">Personal</option>
						<option value="finance">Finance</option>
						<option value="fun">Fun</option>
					</select>
					<button className="button" type="submit" onClick={handleSubmit}>{editMode ? "Save" : "Add"}</button>
				</section>

				<section className="note-container">
					{
						notes.map(note => {
							return (
								<Note
									key={note.id}
									noteData={note}
									handleEdit={handleEdit}
									handleDelete={handleDelete}
								/>
							)
						})
					}
				</section>
			</div>
		</>
	)
}


export default Notes;
