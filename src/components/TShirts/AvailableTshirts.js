import React from 'react';
import TshirtItem from './TshirtItem';

const AvailableTshirts=(props)=>{
    const {items}=props;
    console.log(items);
    const tshirtList = items.map((tshirt) => (
        <TshirtItem
          key={tshirt.id}
          id={tshirt.id} 
          name={tshirt.name}
          description={tshirt.description}
          price={tshirt.price}
          largeQuantity={tshirt.largeQuantity}
          mediumQuantity={tshirt.mediumQuantity}
          smallQuantity={tshirt.smallQuantity}
        />
      ));

    return(
        <div>
            {tshirtList}
        </div>
    );
};


export default AvailableTshirts;