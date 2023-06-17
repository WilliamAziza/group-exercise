import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class NoteForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            date: '',
            text: ''
        }
    }
    handleChange =(e) => {
        e.preventDefault()
        this.setState({[e.target.name]:e.target.value})
        console.log(this.state)
    }
    handleSubmit =(e)=>{
        e.preventDefault()
        console.log(this.state,"Form subitted")
        this.props.AddNote(this.state)
        this.setState({
            title: '',
            date: '',
            text: ''
        })
        
    }
    
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}> 
                    <Form.Group className="mb-3" >
                        <Form.Label>Note Title</Form.Label>
                        <Form.Control type="text" 
                        placeholder="Note Title" 
                        name='title'
                        onChange={this.handleChange}
                        />

                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Note Date</Form.Label>
                        <Form.Control type="date" placeholder="Note date" 
                        name='date'
                        onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Text</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Type Note"
                            style={{ height: '100px' }}
                            name='text'
                            onChange={this.handleChange}
                        />

                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default NoteForm;
