import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableTshirts.module.css";
import TshirtComponent from "./Tshirt/Tshirt";
import AddTshirt from "./AddTshirt";



const AvailableTshirts = () => {
  const [Tshirts, setTshirts] = useState([]);

  const addTshirt = (newTshirt) => {
    setTshirts((prevTshirts) => {
      return [newTshirt, ...prevTshirts];
    });
  };

  const TshirtList = Tshirts.map((tshirt) => (
    <TshirtComponent
      id={tshirt.id}
      key={tshirt.id}
      name={tshirt.name}
      description={tshirt.description}
      price={tshirt.price}
    />
  ));

  return (
    <>
      <AddTshirt onAddTshirt={addTshirt} />
      <section className={classes.Tshirts}>
        <Card>
          <ul>{TshirtList}</ul>
        </Card>
      </section>
    </>
  );
};

export default AvailableTshirts;
