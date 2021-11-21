import { useEffect, useState } from "react";


import Body from "./Body";
import FolderMain from "./FolderMain";
import OpenFolder from "./OpenFolder";
import Folder from "./Folder";
import ChildFolder from "./ChildFolder";
import OpenChildFolder from "./OpenChildFolder";
import Document from "./Document";
import BottomLine from "./BottomLine";

const Home = () => {
  const [cars, setCars] = useState(null);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  let url = new URL("https://dev21.becollective.com/api/v2/coding-challenges/dirs");
  
  useEffect(() => {  
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCars(data);
        console.log(data);
      });
  }, []);


  return (
    <>
      {/* {cars && <Body cars={cars}>
            
            
            </Body>} */}
      
      <FolderMain text="Planes" />
      <FolderMain text="Bikes" />
      {!show ? <FolderMain text="Cars" callback={() => setShow(true)} /> :  <OpenFolder text="Cars" callback={() => setShow(open)}/> }
      
      {/*Sub Folders ###################### */}
      {show && cars
        ? cars.map((car, index) => (
            <div key={index}>
              <Folder text={car.name} callback={() => setOpen(!open)} />
            </div>
          ))
        : null}

    <Document text="Rolls Royce"/>

      {cars ? cars.map((dataIn) => {
        return (
          <div>
            {dataIn.children.map((child, index) => (
              <div key={index}>
                {show && child.type === 'folder' ? <ChildFolder text={child.name} /> : '' }              
              </div>
            ))}
          </div>
        );
      }) : ''} 

        {/* <OpenChildFolder text="Cars" callback={() => setShow(open)}/> */}
        
        <Document text="Rolls Royce"/>

      {/* <div>{cars && cars[0].name}</div>
      <div>{cars && cars[1].name}</div>
      <div>{cars && cars[2].name}</div>
      <div>{cars && cars[3].name}</div> */}
      {/* <div>{cars && cars[3].name[0].type}</div> */}

      
      
      {/* <div>{ cars[1].children[0].type }</div> */}
      <br/>
      {/* <div>{cars && JSON.stringify(cars, null, 2)}</div> */}

    <BottomLine />  

 



    </>
  );
};

export default Home;
