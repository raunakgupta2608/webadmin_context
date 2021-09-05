import React, { useEffect, useState } from 'react';
import { Container, Row, Col, FormGroup, Input } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import '../App.css';
// import baseUrl from '../api/url';
// import axois from 'axios';

const ListOfGroups = ({array}) => {
  const style = { 
    margin: '2% 10% 5% 10%',
    width: "80%",
    color: '#fff',
    background: '#333',
    padding: '2%'
  };

  const inputCss = { 
    background: 'rgb(51, 51, 51)',
    color: '#fff',
    border: 'none'
  };

  const rowCss = {
    margin: '0px 0px 2%',
    border: '1px solid rgb(255, 255, 255)',
    padding: '5px'
  }

  const updateRow = (e) => {
    setRowData({...array[key], 
      [e.target.name]: e.target.value
    });
  }

  const getInputField = ()=> {
    return document.getElementById(`row${key}`).querySelectorAll('input');
  }

  const setDisableAndCSS = () => {
    document.getElementById(`done${key}`).classList.remove('d-none');
    let inputs = getInputField();
    inputs.forEach((inp)=> {
      inp.disabled = !disabled;
      inp.style.backgroundColor="#fff";
      inp.style.color="rgb(51, 51, 51)";
    });
  }

  const editGroup = (key) => {
    if(edit.length === 0) {
      setKey(key);
      // setDisableAndCSS();
      const arr = edit.push(key);
      setEdit(arr);
    }
    else{
      toast.error('Please complete the previous Edit!!');
      return
    }
  };

  const doneEdit = () => {
    document.getElementById(`done${key}`).classList.add('d-none');
    array[key] = rowData;
    setRowData({
      groupname:'',
      projectname:'',
      departmentname:'',
      admin:'',
      users:'',
      city:'',
      state:'',
      zip:''
    });
    let inputs = getInputField();
    inputs.forEach((inp)=> {
      inp.disabled = true;
      inp.style.backgroundColor="rgb(51, 51, 51)";
      inp.style.color="rgb(255, 255, 255)"
    });
    setKey(null);
    setEdit([]);
  };

  const [disabled, setDiabled] = useState(true);
  const [edit, setEdit] = useState([]);
  const [key, setKey] = useState(null);
  const [rowData, setRowData] = useState({
    groupname:'',
    projectname:'',
    departmentname:'',
    admin:'',
    users:'',
    city:'',
    state:'',
    zip:''
  });

  const getApi = async () => {
    // const res = await axois.get(`${baseUrl}courses`);
    // console.log(await res.data);
  }
  // const getApi = async () => {
  //   const response =  await fetch(`${baseUrl}courses`);
  //   console.log(await response.json());
  // }

  useEffect(() => {
    // console.log(baseUrl);
    // getApi();
    if(key !== null)
      setDisableAndCSS();
  },[key]);

  return (
    <>
    <ToastContainer />
    <Container style={style}>
      <Row style={rowCss}>
        <Col>Group Name</Col>
        <Col>Project Name</Col>
        <Col>Department Name</Col>
        <Col>Admin</Col>
        <Col>Users</Col>
        <Col>City</Col>
        <Col>State</Col>
        <Col>Zip</Col>
        <Col>Edit</Col>
        <Col>Done</Col>
      </Row>
      {
          array.map((ele,key) => {
              return (
                <Row key={key} id={`row${key}`} style={rowCss}>
                    <Col>
                      <FormGroup>
                        <Input style={inputCss} 
                          type="text" name="groupname" defaultValue={ele.groupname} disabled={disabled}
                          onChange={updateRow}
                        />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Input style={inputCss} 
                          type="text" name="projectname" defaultValue={ele.projectname} disabled={disabled}
                          onChange={updateRow}
                        />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Input style={inputCss} 
                          type="text" name="departmentname" defaultValue={ele.departmentname} disabled={disabled}
                          onChange={updateRow}
                        />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Input style={inputCss} 
                          type="text" name="admin" defaultValue={ele.admin} disabled={disabled}
                          onChange={updateRow}
                        />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Input style={inputCss} 
                          type="text" name="users" defaultValue={ele.users} disabled={disabled}
                          onChange={updateRow}
                        />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Input style={inputCss} 
                          type="text" name="city" defaultValue={ele.city} disabled={disabled}
                          onChange={updateRow}
                        />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Input style={inputCss} 
                          type="text" name="state" defaultValue={ele.state} disabled={disabled}
                          onChange={updateRow}
                        />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Input style={inputCss} 
                          type="text" name="zip" defaultValue={ele.zip} disabled={disabled}
                          onChange={updateRow}
                        />
                      </FormGroup>
                    </Col>
                    <Col style={{cursor: 'pointer'}}><EditIcon onClick={() => editGroup(key)}/></Col>
                    <Col style={{cursor: 'pointer'}}><DoneIcon className="d-none" id={`done${key}`} onClick={() => doneEdit()}/></Col>
                </Row>
              )
          })
      }
    </Container>
    </>
  );
}

export default ListOfGroups;