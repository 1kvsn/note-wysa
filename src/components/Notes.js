import React from 'react';

import Note from './Note';

class Notes extends React.Component {

	state = {
		notes: [
			{
				id: 1,
				text: "first sample text",
				label: []
			},
			{
				id: 2,
				text: "second text sample",
				label: []
			},
			{
				id: 3,
				text: "third sample",
				label: []
			},
			{
				id: 4,
				text: "fourth text sample",
				label: []
			}
		]
	}


	render() {
		return (
			<>
				<section className="header">
					<div>
						<p>Notes</p>
					</div>
				</section>
				<section>

					{
						this.state.notes.map(note => {
							return (
							<Note key={note.id} data={note} />
							)
						})
					}
				</section>
			</>
		)
	}
}


export default Notes;
