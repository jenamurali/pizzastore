import React, { useState } from "react";
import './pizzacart.css';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement("#modal")

export const PizzaCart = (props) => {
    var subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    const [size,setSize] = useState([]);
    const [topping,setTopping] = useState([]);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
    const addItem = () =>{
        console.log(size,topping);
    }
    return (
        <div className="card-container">
            <img alt="monster" src={props.img_url}></img>
            <div className="rating">
                <p >Type: {props.isVeg ? "Veg" : "Non-Veg"}</p>
                <p >Rating: {props.rating}</p>
            </div>
            <h2>{props.name}</h2>
            <p className="description">{props.description}</p>
            <div className='price'>
                <p>Rs.{props.price}/-</p>
            </div>

            <div className="btn-group">
                <button type="button" className="btn btn-success btn-sm" onClick={openModal}>
                    Add +
                </button>
                <button type="button" className="btn btn-warning btn-sm">
                    Remove -
                </button>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Select Pizza"
            >
                <div className="modalHeader">
                    <h2 ref={_subtitle => (subtitle = _subtitle)}>Please Select Your Option</h2>
                    <button className="btn btn-danger btn-sm" onClick={closeModal} style={{ "height": "30px", "margin": "0 10px" }}>X</button>
                </div>
                <form>
                    <div className="mb-3">
                        <label  className="form-label">{props.size[0].title}</label>
                        <select className="form-select" multiple={props.size[0].isRadio}
                            onChange={(e) => setSize(Array.from(e.target.selectedOptions, (item) => item.value))}
                            name="size"
                        >
                            <option value="">Please select...</option>
                            {props.size && props.size[0].items.map((dat,idx) => 
                                <option key={idx} value={dat.size}>{dat.size}</option>
                            )}
                        </select>
                    </div>

                    <div className="mb-3">
                        <label  className="form-label">{props.toppings[0].title}</label>
                        <select className="form-select" multiple={props.toppings[0].isRadio}
                            onChange={(e) => setTopping(Array.from(e.target.selectedOptions, (item) => item.value))}
                            name="topping"
                        >
                            <option value="">Please select...</option>
                            {props.toppings && props.toppings[0].items.map((dat,idx) => 
                                <option key={idx} value={dat.name}>{dat.name}</option>
                            )}
                        </select>
                    </div>
                </form>
                <button className="btn btn-primary btn-sm" style={{ "height": "30px", "margin": "0 10px" }}
                    onClick={addItem}
                >ADD</button>
            </Modal>
        </div>
    )
}
