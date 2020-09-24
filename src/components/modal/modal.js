import React, { useState } from 'react';
import {useDispatch, useSelector } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import {saveDay, setModal} from '../../redux/actions/calendar-actions';

const ModalExample = () => {

    const [body, setBody] = useState(null);
    const state = useSelector(state=>state);
    const {modal, selectedDay, dayNames, monthNames, year} = state;
    const dispatch = useDispatch();

    const saveData = () => {
        if(body){
            const day = {
                date: selectedDay,
                body
            };
            dispatch(saveDay(day));
        }else {
            alert("To save something, you must first type something")
        }

    };

    const setText = (event) => {
        setBody(event.target.value);
    };

    const closeModal = () => {
        dispatch(setModal(false));
    };

    const getFullDateString = () => {
        return `${dayNames[selectedDay.getDay()-1<0?6:selectedDay.getDay()-1]} - ${selectedDay.getDate()}, ${monthNames[selectedDay.getMonth()]}, ${year}`
    };

    return (
            <Modal isOpen={modal} >
                <ModalHeader toggle={closeModal}>{selectedDay&&getFullDateString()}</ModalHeader>
                <ModalBody>
                    <Input
                        onChange={setText}
                    />
                    <br />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={saveData}>Save</Button>{' '}
                    <Button color="secondary" onClick={closeModal}>Cancel</Button>
                </ModalFooter>
            </Modal>

    );
};

export default ModalExample;