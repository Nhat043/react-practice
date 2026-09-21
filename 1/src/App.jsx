
import { MyButton2 } from "./Button";
import { useState } from "react";
import { ProductList, SearchProductBar } from "./Product";
// function MyButton() {
//   return <button>Click me</button>;
// }

const user = {
  name: "Nhat",
  age: 22,
};

function Profile() {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.age + 1}</p>
    </div>
  );
}


function MyButton({ count, onClick }) {


  return <button onClick={onClick}>Click me Shared {count}</button>;
}

function App() {
  const [count, setCount] = useState(0);

  function handleClick2() {
    setCount(count + 1);
    console.log(count);
  }

  const [searchName, setSearchName] = useState("");


  return (
    <main>
      <h1>React first app</h1>
      <Profile />

      <MyButton count={count} onClick={handleClick2} />
      <MyButton count={count} onClick={handleClick2} />
      <MyButton2 />
      <hr />
      <h1>Product List</h1>
      <SearchProductBar value={searchName} onChange={(event) => setSearchName(event.target.value)} />
      <ProductList name={searchName} />
    </main>
  );
}

export default App;