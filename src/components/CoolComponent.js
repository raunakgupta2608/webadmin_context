import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import CreateGroup from './CreateGroup';
import ListOfGroups from './ListOfGroups';
import groupArrays  from '../Arrays';
import Intro from './Jumbotron';
import { Route, Switch, useRouteMatch, NavLink } from 'react-router-dom';

const CoolComponent = (props) => {

  const styleForm = { 
    borderColor: 'rgb(51, 51, 51)',
    margin: '2% 10% 0 10%',
    width: "80%",
    height: "50%",
    color: '#fff',
    background: '#333',
    padding: '2%'
  };

  const linkStyle = {
    color: 'aliceblue',
    textDecoration: 'none'
  }

  const { path, url } = useRouteMatch();
  console.log("Path ", path);
  console.log("Url ", url);


  return (
    <>
    <Container style={styleForm}>
        <Row>
          <Col md={4}>
            <NavLink to={`${url}/creategroup`} style={linkStyle}>
              <div className="btn btn-success">
                Create Group
              </div>
            </NavLink>
          </Col>
          <Col md={4}>         
            <NavLink to={`${url}/listofgroup`} style={linkStyle}>
              <div className="btn btn-success">
                List of Group
              </div>
            </NavLink>
          </Col>
          <Col md={4}>
            <NavLink to={`${url}/findgroup`} style={linkStyle}>
              <div className="btn btn-success">
                Find Group
              </div>
            </NavLink>
          </Col>
        </Row>
    </Container>

    <Switch>
        <Route path={`${url}/intro`}>
           <Intro />
        </Route>
        <Route path={`${path}/creategroup`}>
            <CreateGroup />
        </Route>
        <Route path={`${path}/listofgroup`}>
            <ListOfGroups array={groupArrays}/>
        </Route>
    </Switch>
    </>
  );
}

export default CoolComponent;