import "./App.css";
import "./theme.css";
import "./sun&moon.css";
import { useReducer} from "react";
import { Link } from "react-router-dom";



/////
const initialData= {name:"belal",age:22,count:0,theme:""}
////

const reducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_NAME":
        return { ...state, name: action.NEW_VALUE };
      case "CHANGE_AGE":
          return { ...state, age: action.NEW_VALUE };
          case "CHANGE_COUNT":
          return { ...state, count: action.NEW_VALUE };
          case "NEW_COLOR":
          return { ...state, theme: action.NEW_VALUE };
        
      
      default:
        return state;
    }
  };

function App() {
  const [allData, dispatch] = useReducer(reducer,initialData);

  return (

    <div className={`App ${allData.theme}` }>
        <Link style={{marginBottom:"30px"}} to="page2"> page2</Link>
      
       <div >
        <input type="checkbox" id="toggle_checkbox" />
        <label onClick={ ()=>   dispatch(allData.theme=="" ? {type:"NEW_COLOR",NEW_VALUE: "darck"} : {type:"NEW_COLOR",NEW_VALUE: ""} )}  style={{marginBottom:"20px"}}  htmlFor="toggle_checkbox">
          <div id="star">
            <div className="star" id="star-1">★</div>
            <div className="star" id="star-2">★</div>
          </div>
          <div id="moon" />
        </label>
      </div>
            <button onClick={ ()=>   dispatch(allData.theme=="" ? {type:"NEW_COLOR",NEW_VALUE: "darck"} : {type:"NEW_COLOR",NEW_VALUE: ""} )}  style={{marginBottom:"20px"}}>Toggle</button>
            
  <div >
    
           <button onClick={ ()=>   dispatch({type:"NEW_COLOR",NEW_VALUE: ""})}  style={{marginRight:"20px"}}>lagit</button>
            <button onClick={ ()=>   dispatch({type:"NEW_COLOR",NEW_VALUE: "darck"})}   style={{marginRight:"20px"}}>darck</button>
            <button onClick={ ()=>   dispatch({type:"NEW_COLOR",NEW_VALUE: "grey"})}  style={{marginRight:"20px"}}>grey</button>
            <button onClick={ ()=>   dispatch({type:"NEW_COLOR",NEW_VALUE: "pink"})}   >pink</button>
  </div>
        
    

      <h4 style={{marginTop:"50px"}}>my name is {allData.name}</h4>
      <button onClick={ ()=>    dispatch({ type: "CHANGE_NAME", NEW_VALUE: "BELAL_BALASMEH"}) } >Change Name</button>
      <br />
      <h4>my age is {allData.age}</h4>
      <button onClick={ ()=>   dispatch({ type: "CHANGE_AGE", NEW_VALUE: 55 })} >Change age</button>
      <br />    <br />
    
      <button onClick={ ()=>   dispatch({ type: "CHANGE_COUNT", NEW_VALUE: allData.count+1 })} >Count {allData.count}</button>
    </div>
  );
}

export default App;
