import { useEffect, useState } from "react";


import FolderMain from "./FolderMain";
import OpenFolder from "./OpenFolder";
import Folder from "./Folder";
import ChildFolder from "./ChildFolder";
import OpenChildFolder from "./OpenChildFolder";
import Document from "./Document";
import BottomLine from "./BottomLine";
import RoundUp from "./RoundUp";

const Home = () => {
  const [cars, setCars] = useState(null);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  
  

  useEffect(() => {
    fetch("https://dev21.becollective.com/api/v2/coding-challenges/dirs")
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
      {/* Dummy Folders */}
      <FolderMain text="Planes" />
      <FolderMain text="Bikes" />

      {/* Logic starts here */}
      {!show ? (
        <FolderMain text="Cars" callback={() => setShow(true)} />
      ) : (
        <OpenFolder text="Cars" callback={() => setShow(open)} />
      )}

      {/*Sub Folders map for children 'type':'folder' return car names ###################### */}
      {show && cars
        ? cars.map((car, index) => (
            <div key={index}>
              <Folder text={car.name} callback={() => setOpen(!open)} />
            </div>
          ))
        : null}

      {cars
        ? cars.map((dataIn) => {
            return (
              <div>
                {dataIn.children.map((child, index) => (
                  <div key={index}>
                    {show && child.type === 'folder' ? (
                      <ChildFolder text={child.name}> 
                      
                     { open && child.type === 'file' ? <Document /> : ''}
                      
                      </ChildFolder>
                    ) : (
                      ""
                    )}
                  </div>
                ))}
              </div>
            );
          })
        : ""}

      {/*Sub Folders map for children 'type':'file' return car Document Names ###################### */}
      {open && cars
        ? cars.map((dataIn) => {
            return (
              <div>
                {dataIn.children.map((child, index) => (
                  <div key={index}>
                    {child.type === "file" ? (
                      <Document text={child.name} />
                    ) : (
                      ""
                    )}
                  </div>
                ))}
              </div>
            );
          })
        : ""}

      {/* <OpenChildFolder text="Cars" callback={() => setShow(open)}/> */}

      {/* <div>{cars && cars[0].name}</div>
      <div>{cars && cars[1].name}</div>
      <div>{cars && cars[2].name}</div>
      <div>{cars && cars[3].name}</div>
       */}

      {/* <div>{ cars[1].children[0].type }</div> */}
      <br />
      {/* <div>{cars && JSON.stringify(cars, null, 2)}</div> */}

      <BottomLine text=''/>      
      <RoundUp text='' />
      
    </>
  );
};

export default Home;
