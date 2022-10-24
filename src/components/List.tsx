import { Information } from "../interface/interface";

interface Props {
  information: Information["information"];
}

const List: React.FC<Props> = (props) => {
  const { information } = props;
  return (
    <div className="col-span-2">
      <h1>List</h1>
      <div className="flex flex-col">
        {information.map((item, index) => {
          return (
            <div
              className="border-2 border-[#121111] rounded px-[30px] py-[10px] mb-[10px]"
              key={index}
            >
              {item.name} - {item.age} - {item.bio}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
