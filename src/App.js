import "./App.css";
import data from "./data";
import Card from "./card";
import Head from "./Head";
function App() {
  const newarr = data.map((item) => {
    return <Card {...item} />;
  });

  return (
    <>
      <Head/>
      <section>{newarr}</section>
    </>
  );
}

export default App;
