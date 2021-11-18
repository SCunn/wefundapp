import { useEffect, useState } from 'react';

import Body from './Body';

const Home = () => {
   const [cars, setCars] = useState(null);
   

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
        <Body />
  );
}


export default Home;