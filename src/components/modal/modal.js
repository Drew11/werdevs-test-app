import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Alert } from 'reactstrap';
import {saveDay, setModal} from '../../redux/actions/calendar-actions';

const ModalExample = () => {

    const [body, setBody] = useState(null);
    const [daySave, setDaySave] = useState(false);
    const [notSave, setNotSave] = useState(false);
    const state = useSelector(state=>state);
    const {modal, selectedDay, dayNames, monthNames, year} = state;
    const dispatch = useDispatch();

    useEffect(()=>{
            setTimeout(()=>{
                if(daySave){
                    setDaySave(false)
                }else {
                    setNotSave(false);
                }
            }, 4000)
    },[daySave, notSave]);

    const saveData = async () => {
        if(body){
            await setTimeout(()=>{
                const day = {
                    date: selectedDay,
                    body
                };
                dispatch(saveDay(day));
                setDaySave(true);
            }, 1000);
        }else {
            setNotSave(true)
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
                    {notSave?
                        <Alert color="danger">First type something</Alert>:
                        null}
                    {body&&daySave?
                        <Alert color="primary">Data saved in store</Alert>:
                        null}
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