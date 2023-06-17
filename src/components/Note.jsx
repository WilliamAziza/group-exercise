import React, { Component } from 'react';
import { Card,Col } from 'react-bootstrap';

class Note extends Component {
    render(props) {
        return (
            <Col md="4" style={{ marginBottom: '1rem' }}>
                <Card style={{ width: '18rem', height: '18rem' } }>
                    <Card.Body>
                        <Card.Title>{this.props.noteInfo.title}</Card.Title>
                        <hr/>
                        <Card.Subtitle className="mb-2 text-muted">{this.props.noteInfo.date}</Card.Subtitle>
                        <hr/>
                        <Card.Text>
                         {this.props.noteInfo.text}
                        </Card.Text>
                        <Card.Link href="#" className='Link'>Delete Note</Card.Link>
                        <Card.Link href="#" className='Link'>Add Note</Card.Link>
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}

export default Note;
