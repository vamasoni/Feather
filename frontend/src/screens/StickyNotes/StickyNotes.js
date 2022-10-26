import React, { useEffect, useState } from "react";
import { Accordion, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import Card from "react-bootstrap/Card";
import axios from 'axios';

const StickyNotes = () => {

  const [notes, setNotes] = useState([]);

  const deleteHandler = (id) => {
    if (window.confirm("Are your sure?")) {
    }
  };

  const fetchNotes = async() => {
    const {data}=await axios.get('/api/notes');
    setNotes(data);
  };

  console.log(notes);

  useEffect(() => {
      fetchNotes();
  }, [])

  return (
    <MainScreen title="Sticky Notes">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      {notes.map((note) => (
        <Accordion key={note._id}>
          <Card style={{ margin: 10 }} className="border-warning">
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 10,
                }}
              >
                <Accordion.Button
                  as={Card.Text} variant="link"
                  className="btn btn-outline-light"
                >
                  {note.title}
                </Accordion.Button>
              </span>
              <div>
                <Button variant="outline-dark" href={`/note/${note._id}`}>
                  Edit
                </Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Accordion.Collapse>
              <Card.Body>
                <h4>
                  <Badge className="badge bg-dark">
                    Category - {note.category}
                  </Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">Noted on: Date</footer>
                </blockquote>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default StickyNotes;
