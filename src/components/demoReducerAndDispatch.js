import { useReducer} from "react";

const CheckBoxUsingHooks = () => {
  let [checked, toggle] = useReducer(
    (checked) => !checked,
    false
  );

  return <>
    <button  
      onClick= {() => (disptach({type: 'YELL'}))}
    >
      YELL
    </button>
    <p>the value of checkbox is {checked ? "checked" : "not checked"}</p>
  </>
  

}

export default CheckBoxUsingHooks;