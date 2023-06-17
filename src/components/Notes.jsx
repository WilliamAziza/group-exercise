import React from 'react';
import Note from './Note';
import { Container, Row } from 'react-bootstrap';

const Notes = (props)=> {
    
        return (
            <Container>
               <Row>
                
                    {
                        props.notesData.map((note, index)=>{
                            return      <Note noteInfo={note} key={index}/> 
                            
                        })
                    }
               </Row>
            </Container>
        );
    }


export default Notes;
