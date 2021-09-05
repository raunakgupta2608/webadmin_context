import React, { useContext } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Redirect, useRouteMatch } from 'react-router-dom';
import { useHistory } from 'react-router';

import { Context } from '../Store';

const Logout = (props) => {
    const {modal, handleModal} = props;
    const [token, setToken] =  useContext(Context);
    const { path, url } = useRouteMatch();

    const history = useHistory();

  
    const toggleModal = () => {
      console.log("Path ", path);
      console.log("Url ", url);
      history.push('/cool/intro');
      handleModal(!modal);
    }

    const logoutImpl = () => {
      setToken({token: "none"});
      toggleModal();
      <Redirect to="/login" />
    }

  return (
    <div>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Logout</ModalHeader>
        <ModalBody>
            Are you sure you want to Logout?
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={logoutImpl}>Yes</Button>
          <Button color="secondary" onClick={toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Logout;