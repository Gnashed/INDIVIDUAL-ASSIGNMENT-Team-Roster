import React from 'react';
import Card from 'react-bootstrap/Card';

export default function PlayerCard() {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Player</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Team name</Card.Subtitle>
          <Card.Img variant="top" src="https://i.pinimg.com/236x/f0/d7/16/f0d716059ad9f19447c78c692c403c62--google-images-bleach-anime.jpg" />
          <Card.Text>
            <p>name</p>
            <p>role</p>
            <p>summary goes here</p>
          </Card.Text>
          <Card.Link href="###">View</Card.Link>
          <Card.Link href="###">Edit</Card.Link>
          <Card.Link href="###">Delete</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}
