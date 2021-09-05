import React from 'react';
import { Jumbotron } from 'reactstrap';

const Intro = (props) => {
    
const styleText = { 
    borderColor: 'rgb(51, 51, 51)',
    margin: '2% 10% 0 10%',
    width: "80%",
    height: "50%",
    color: '#fff',
    background: '#333',
    padding: '2%'
    };

  return (
    <div>
      <Jumbotron style={styleText}>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </Jumbotron>
    </div>
  );
};

export default Intro;