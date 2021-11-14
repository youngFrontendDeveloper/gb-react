import { useDispatch, useSelector } from "react-redux";
import { useCallback, useState } from "react";
import { selectName, selectShowName, toggleShowName } from "../../store/profile/profileSlice";


function Profile() {
  // const [name, setName]=useState("")
  // const {  userName } = useSelector( (state) => state );
  const showName = useSelector( selectShowName );
  const userName = useSelector(selectName)
  console.log(showName);
  console.log(userName);
  const dispatch = useDispatch();

  const setShowName = useCallback( () => {
    dispatch( toggleShowName() );
    console.log(showName);
  }, [ dispatch ] );
  //
  // const addName =(e)=>{
  //   setName(e.target.value)
  //   dispatch(changeName)
  // }

  return (
    <div>
      <h1>This is a Profile page</h1>
      {/*<input type="text"*/ }
      {/*value={name}*/ }
      {/*onChange={addName}*/ }
      {/*/>*/ }
      <input type="checkbox"
             checked={ showName }
             value={ showName }
             onChange={ setShowName }/>
      <span>Show Name</span>
      { showName && <div>{ userName }</div> }
    </div>
  );
}

export default Profile;