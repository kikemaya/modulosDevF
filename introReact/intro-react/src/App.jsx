// function MyButton() {
//   return (
//     <button className="bg-blue-800 text-white p-3 rounded-md my-3">
//       I'm a button
//     </button>
//   );
// }

import { EscapeBack } from '../components/EscapeBack';

// import { MyButton } from '../components/MyButton';
// import { MyButtonProps } from '../components/MyButtonProps';

function App() {
  return (
    <>
      <h1 className="text-4xl font-bold underline">Hello world!</h1>
      {/* <MyButton /> */}

      {/* 
      <MyButtonProps btnText="Click!" />
      <MyButtonProps btnText="Iniciar" />
      */}

      <EscapeBack />
    </>
  );
}

export default App;
