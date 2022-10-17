import React, {useContext} from 'react';
import AppContext from '../context/AppContext';

import '../styles/components/Success.css';

const Success = () => {
  const {state} = useContext(AppContext);
  const {buyer} = state;
  //const location = useGoogleAddress(buyer[0].address);

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer[0].name}, Gracias por tu comprax`}</h2>
        <span>Tu pedido lelgara en 3 dias a tu direccion:</span>
        
      </div>
    </div>
  );
}

export default Success;