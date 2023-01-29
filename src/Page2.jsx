import {useContext } from "react";
import DataContext from "./context/Datacontext";
const Page2 = () => {
  const {name,changeName,theme,Light,darck} = useContext(DataContext);
  return (
    <div className={`App ${theme}`}>
    <h1>hello {name}</h1>
    <button onClick={()=>
      changeName()
      } >Change Name</button>
        <div>
              <button onClick={()=>  theme=="" ? darck() : Light() }   style={{ marginBottom: "20px" }}>Toggle</button>
          </div>
    </div>
  );
}

export default Page2;
