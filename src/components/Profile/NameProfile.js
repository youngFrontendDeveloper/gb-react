function NameProfile({name, checkbox}) {
  return (
    <>
      <span>Show name</span>
      {
        checkbox &&
        <div>{ name }</div> }</>
  );
}

export default NameProfile;