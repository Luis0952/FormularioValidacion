import Form from "./Components/Form";
import Header from "./Components/Header";

function App() {
  return (
    <div className="bg-gray-200">
      <Header />
      <div className="md:ml-40 mt-12 md:flex">
        <Form />
      </div>
    </div>
  );
}

export default App;
