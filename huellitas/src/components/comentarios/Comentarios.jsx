import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { BiStarFill, BiStar } from 'react-icons/bi/index.esm';
import './comentarios.css';

const CommentForm = ({ onCommentSubmit }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = () => {
        if (rating > 0 && comment.trim() !== '') {
            onCommentSubmit({ rating, comment });
            setRating(0);
            setComment('');
        }
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h3>Add a Comment</h3>
                    <div className="d-flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <div key={star} onClick={() => handleRatingChange(star)} className="star">
                                {star <= rating ? <BiStarFill /> : <BiStar />}
                            </div>
                        ))}
                    </div>
                    <Form.Group controlId="comment">
                        <Form.Label>Your Comment</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            value={comment}
                            onChange={handleCommentChange}
                        />
                    </Form.Group>
                    <Button variant="primary" onClick={handleSubmit}>
                        Submit Comment
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

const Comentarios = () => {
    const handleCommentSubmit = (comment) => {
        console.log('New comment submitted:', comment);
    };

    return (
        <section className="py-1">
            <Container>
                <Row>
                    <Col>
                        <div className="text-center mb-4">
                            <h2 className="title-product px-5">Comentarios</h2>
                        </div>
                        <div className="row-comentarios">
                            <CommentForm onCommentSubmit={handleCommentSubmit} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Comentarios;
