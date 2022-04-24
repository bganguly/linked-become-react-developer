import { useReducer} from "react";

const CheckBoxUsingHooks = () => {
  let [checked, toggle] = useReducer(
    (checked) => !checked,
    false
  );

  return <>
    <input  
      type="checkbox"
      value={checked}
      onChange={toggle}
    />
    <p>the value of checkbox is {checked ? "checked" : "not checked"}</p>
  </>
  

}

export default CheckBoxUsingHooks;