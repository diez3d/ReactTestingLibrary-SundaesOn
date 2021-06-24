import axios from 'axios';
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import ScoopOption from './ScoopOption';

const Options = ({ optionType }) =>{
    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);
    useEffect(() => {
        axios
          .get(`http://localhost:3030/${optionType}`)
          .then((response) => setItems(response.data))
          .catch((error) => setError(true));
      }, [optionType]);

      const ItemComponent = optionType === 'scoops' ? ScoopOption : null;
      const optionItems = items.map((item) => (
        <ItemComponent
          key={item.name}
          name={item.name}
          imagePath={item.imagePath}
          /* updateItemCount={(itemName, newItemCount) =>
            updateItemCount(itemName, newItemCount, optionType)
          } */
        />
      ));

    return <Row>{optionItems}</Row>
}; 
export default Options;