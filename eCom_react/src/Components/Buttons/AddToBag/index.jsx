function AddToBag() {
  return (
    <div>
      <button onClick={Add}>Add to bag</button>
    </div>
  );
}
export default AddToBag;

function Add() {
  return (
    alert("I am clicked")
  )
}