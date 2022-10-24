import Form from "./components/Form";
import List from "./components/List";

const App: React.FC = () => {
  return (
    <div className="bg-[#ededed] min-h-screen">
      <div className="max-w-[1200px] mx-[auto] grid grid-cols-3 pt-[100px] gap-x-[90px]">
        <Form />
        <List />
      </div>
    </div>
  );
};

export default App;
