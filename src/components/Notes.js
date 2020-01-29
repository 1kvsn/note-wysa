import React, { useContext, useEffect, useState } from 'react';

import Note from './Note';
import View from './View';
import { NoteContext } from './NoteContext';

const { uuid } = require('uuidv4');

const Notes = () => {

	const [filteredNotes, setFilteredNotes] = useState([]);

	const {
		inputText,
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
			setLabel([]);
		}
	}

	const handleDelete = (id) => {
		let remainingNotes = notes.filter(note => note.id !== id)
		setNotes([...remainingNotes])
	}

	const handleEdit = (id) => {
		let selectedNote = notes.find(note => note.id === id);
		handleDelete(selectedNote.id);
		setInputText(selectedNote.text);
		setEditMode(true);
	}

	useEffect(() => {
		let filteredNotes = notes.filter(note => note.label.includes(viewByLabel))
		setFilteredNotes([...filteredNotes])
		console.log(filteredNotes);
	}, [viewByLabel || notes]);

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
						value={label[0]}
						onChange={e => setLabel([e.target.value])}
					>
						<option selected hidden>Add label</option>
						<option value="home">Home</option>
						<option value="work">Work</option>
						<option value="personal">Personal</option>
						<option value="finance">Finance</option>
						<option value="fun">Fun</option>
					</select>
					<button className="button" type="submit" onClick={handleSubmit}>{editMode ? "Save" : "Add"}</button>
				</section>

				<View filteredNotes={filteredNotes}/>

				<section className="note-container">
					
					{
						viewByLabel && filteredNotes.length ? filteredNotes.map(note => {
							return (
								<Note
									key={note.id}
									noteData={note}
									handleEdit={handleEdit}
									handleDelete={handleDelete}
								/>
							)
						}) : notes.map(note => {
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
