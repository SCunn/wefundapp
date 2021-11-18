import { useEffect, useState } from 'react';

import Body from './Body';
import FolderMain from './FolderMain';
import Folder from './Folder';

const Home = () => {
    const [cars, setCars] = useState(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
           fetch('https://dev21.becollective.com/api/v2/coding-challenges/dirs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setCars(data);
                // console.log(data);
            })
    }, []);

   return (
       <>
        {/* {cars && <Body cars={cars}>
            
            
            </Body>} */}
            
            <FolderMain text="Cars" callback={() => setShow(!show) } /> 
            {/* {show ? <Folder text={cars.name} /> : null  } */}
            {show ? (cars.map((car) => (
          <div key={car.id}>
            <Folder text={car.name} />
          </div>
        ))): (null)  }
        </>
  );
}


export default Home;