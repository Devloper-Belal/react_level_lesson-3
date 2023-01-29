import "./App.css";
import "./theme.css";
import "./sun&moon.css";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "./context/Datacontext";

function App() {
  const { name, changeName,theme,Light,darck,pink,grey,changeCount,count} =
    useContext(DataContext);

  return (
    <div className={`App ${theme} `}>
    
      
      <Link  style={{ marginBottom: "30px" }} to="page2">
      
        page2
      </Link>
      
            
    <div>
       <input onClick={()=> theme=="" ? darck() : Light() } type="checkbox" id="toggle_checkbox" />
      
      
          <label  style={{marginBottom:"20px"}}  htmlFor="toggle_checkbox">
            <div id="star">
              <div className="star" id="star-1">★</div>
              <div className="star" id="star-2">★</div>
            </div>
            <div id="moon" />
          </label>
    </div>
      
          <div>
              <button onClick={()=>  theme=="" ? darck() : Light() }   style={{ marginBottom: "20px" }}>Toggle</button>
          </div>
          
     <div>
          <button onClick={()=> Light()}  style={{ marginRight: "20px" }}>
            lagit
          </button>
          <button onClick={()=> darck()}  style={{ marginRight: "20px" }}>
            darck
          </button>
          <button onClick={()=> grey()}  style={{ marginRight: "20px" }}>
            grey
          </button>
        
          <button onClick={()=> pink()} >pink</button>

      </div>


      <h4 style={{ marginTop: "50px" }}>my name is {name}</h4>
      <button onClick={() => changeName()}>Change Name</button>
      <button onClick={() =>changeCount() }>count {count}</button>
      <br />
    </div>
  );
}

export default App;
