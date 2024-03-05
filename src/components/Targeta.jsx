import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({status,url,title,conten,more}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {conten}
        </Card.Text>
        <Button variant="success" href={more} disabled={status==="disabled"}>Mas Información</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;