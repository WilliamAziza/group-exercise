import React from 'react';
import { connect } from 'react-redux';
import { addNote, deleteNote } from './actions/noteActions';

class Notebook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      date: '',
      text: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, date, text } = this.state;
    const newNote = {
      title,
      date,
      text,
    };
    this.props.addNote(newNote);
    this.setState({
      title: '',
      date: '',
      text: '',
    });
  };

  handleDelete = (noteId) => {
    this.props.deleteNote(noteId);
  };

  render() {
    const { title, date, text } = this.state;
    const { notes } = this.props;

    return (
      <div>
        <h1>Notebook</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={this.handleInputChange}
          />
          <input
            type="date"
            name="date"
            value={date}
            onChange={this.handleInputChange}
          />
          <textarea
            name="text"
            placeholder="Note text"
            value={text}
            onChange={this.handleInputChange}
          ></textarea>
          <button type="submit">Add Note</button>
        </form>

        <h2>All Notes</h2>
        {notes.length === 0 ? (
          <p>No notes found.</p>
        ) : (
          <ul>
            {notes.map((note) => (
              <li key={note.id}>
                <h3>{note.title}</h3>
                <p>{note.date}</p>
                <p>{note.text}</p>
                <button onClick={() => this.handleDelete(note.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (note) => dispatch(addNote(note)),
    deleteNote: (noteId) => dispatch(deleteNote(noteId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notebook);
