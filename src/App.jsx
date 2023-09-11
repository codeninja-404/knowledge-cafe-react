import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <div className="container mx-auto py-6 px-2 lg:px-6">
      <Header></Header>
      <Blogs></Blogs>
      </div>
    </>
  );
}

export default App;
