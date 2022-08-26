import React from 'react';
import { Control, Errors, LocalForm } from 'react-redux-form';
import "./newTask.css"
import {
    Card, CardImg, CardText, CardBody,
    Breadcrumb, BreadcrumbItem, Button, Modal, ModalBody, ModalHeader, Row, Col, Label
} from 'reactstrap';



const NewTask = () => {
    return (
        <div className='NewTask'>
            <LocalForm className='container-fluid'>
                <Row className="form-group justify-content-center">
                    <Label htmlFor="newTask" md={12}></Label>
                    <Col md={3} className="newTask-col">
                        <Control.text type='text' model=".newTask" name="newTask"
                            placeholder="New Task"
                            className="form-control"
                            validators={{}}
                        />
                        <button className='btn btn-primary'>+</button>
                        <Errors
                            className="text-danger"
                            model=".newTask"
                            show="touched"
                            messages={{}}
                        />
                    </Col>
                </Row>
            </LocalForm>
        </div>
    )
}

export default NewTask