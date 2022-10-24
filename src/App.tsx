import Form from "./components/Form";
import List from "./components/List";

import { useState } from "react";
import { Information } from "./interface/interface";

const App: React.FC = () => {
  const [information, setInformation] = useState<Information["information"]>([
    { name: "Dang Quoc Dat", age: 20, bio: "Front end Developer" },
  ]);
  return (
    <div className="bg-[#ededed] min-h-screen">
      <div className="max-w-[1200px] mx-[auto] grid grid-cols-3 pt-[100px] gap-x-[90px]">
        <Form information={information} setInformation={setInformation} />
        <List information={information} />
      </div>
    </div>
  );
};

export default App;
