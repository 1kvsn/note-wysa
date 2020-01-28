import React from 'react';

import Note from './Note';
const { uuid } = require('uuidv4');


class Notes extends React.Component {

	state = {
		inputText: "",
		label: "Home",
		notes: [
			{
				id: 1,
				text: "React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.",
				label: "home"
			},
			{
				id: 2,
				text: "If you prefer to use your own text editor, you can also download this HTML file, edit it, and open it from the local filesystem in your browser. It does a slow runtime code transformation, so we’d only recommend using this for simple demos. If you prefer to use your own text editor, you can also download this HTML file, edit it, and open it from the local filesystem in your browser. It does a slow runtime code transformation, so we’d only recommend using this for simple demos.",
				label: "work"
			},
			{
				id: 3,
				text: "As your application grows, you might want to consider a more integrated setup. There are several JavaScript toolchains we recommend for larger applications. Each of them can work with little to no configuration and lets you take full advantage of the rich React ecosystem.",
				label: "personal"
			},
			{
				id: 4,
				text: "fourth text sample",
				label: 'work'
			}
		]
	}

	handleInput = ({ target: { value } }) => {
		this.setState({ inputText: value })
	}

	handleSubmit = () => {
		const { inputText, label } = this.state;
		let newNote = {}
		newNote.id = uuid();
		newNote.text = inputText;
		newNote.label = label;
		this.setState({
			notes: [
				...this.state.notes,
				newNote
			],
			inputText: ""
		})
	}

	handleLabelChange = ({ target: { value } }) => {
		this.setState({ label: value })
	}

	render() {
		return (
			<>
				<div className="wrapper">
					<section>
						<textarea 
							onChange={this.handleInput} 
							rows={this.state.inputText ? 4 : 2} 
							cols="40" 
							placeholder="Take a note..."
							value={this.state.inputText}
						/>
						<select value={this.state.label} onChange={this.handleLabelChange}>
							<option selected hidden>Choose label</option>
							<option value="home">Home</option>
							<option value="work">Work</option>
							<option value="personal">Personal</option>
							<option value="finance">Finance</option>
							<option value="fun">Fun</option>
						</select>
						<button type="submit" onClick={this.handleSubmit}>Add</button>
					</section>

					<section className="note-container">
						{
							this.state.notes.map(note => {
								return (
									<Note key={note.id} data={note} />
								)
							})
						}
					</section>
				</div>
			</>
		)
	}
}


export default Notes;
