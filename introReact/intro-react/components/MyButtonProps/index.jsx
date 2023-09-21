export function MyButtonProps(props) {
  return (
    <button className="bg-blue-800 text-white p-3 rounded-md my-3">
      {props.btnText}
    </button>
  );
}
