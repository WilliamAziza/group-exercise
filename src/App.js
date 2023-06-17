import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NoteForm from './components/NoteForm';
import Notes from './components/Notes';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.css'
 
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      notes:[
        {
          title: 'Note Title',
          date: '12/4/2025',
          text: "John is a boy"
        }
      ]
    }
  }

    addNewNote =(note)=>{
      this.setState({
        notes:[...this.state.notes, note]
      })
    }
  render() {
    return (
      
        <Container fluid>
      <Row>
      <Col md='4'>
      <NoteForm AddNote={this.addNewNote}/>
      
      </Col>

      <Col md='8'>
       <Notes notesData={this.state.notes}/>
      </Col>
      </Row>
    </Container>
      
    );
  }
}

export default App;
