import React, { useRef } from 'react';
import './TshirtForm.css'; // Import your CSS file

const TshirtForm = (props) => {
    const nameRef = useRef();
    const descRef = useRef();
    const priceRef = useRef();
    const largeRef = useRef();
    const mediumRef = useRef();
    const smallRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const description = descRef.current.value;
        const price = priceRef.current.value;
        const largeQuantity = largeRef.current.value;
        const mediumQuantity = mediumRef.current.value;
        const smallQuantity = smallRef.current.value;

        const obj={
            id: Math.random(),
            name:name,
            description:description,
            price:price,
            largeQuantity:largeQuantity,
            mediumQuantity:mediumQuantity,
            smallQuantity:smallQuantity
        };

        props.onSubmit(obj);
    };

    return (
        <div className="tshirt-form-container">
            <form onSubmit={submitHandler}>
                <label htmlFor="TshirtName">TshirtName</label>
                <input type="text" id="TshirtName" ref={nameRef} />
                <label htmlFor="Description">Description</label>
                <input type="text" id="Description" ref={descRef} />
                <label htmlFor="Price">Price</label>
                <input type="number" id="Price" ref={priceRef} />
                <div className="quantity-inputs">
                    <label className="quantity-label" htmlFor="Large">L</label>
                    <input type="number" id="Large" ref={largeRef} />

                    <label className="quantity-label" htmlFor="Medium">M</label>
                    <input type="number" id="Medium" ref={mediumRef} />

                    <label className="quantity-label" htmlFor="Small">S</label>
                    <input type="number" id="Small" ref={smallRef} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default TshirtForm;
