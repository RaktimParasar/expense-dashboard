import Sidebar from "./components/Sidebar";
import Cards from "./components/Cards";
import Transaction from "./components/Transaction";

const App = () => {
  return (
    <main className="container">
      <Sidebar />
      <Cards />
      <Transaction />
    </main>
  );
};

export default App;
