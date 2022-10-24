import { useState } from "react";
import { Information } from "../interface/interface";

interface Props {
  information: Information["information"];
  setInformation: React.Dispatch<
    React.SetStateAction<Information["information"]>
  >;
}

interface InputData {
  name: string;
  age: string;
  bio: string;
}

const Form: React.FC<Props> = ({ information, setInformation }: Props) => {
  const [inputValue, setInputValue] = useState<InputData>({
    name: "",
    age: "",
    bio: "",
  });
  // handle Change Input :
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };
  console.log(inputValue);

  // handle Submit :
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInformation([
      ...information,
      {
        name: inputValue.name,
        age: parseInt(inputValue.age),
        bio: inputValue.bio,
      },
    ]);

    // after submit information then set inputValue = empty :
    setInputValue({ name: "", age: "", bio: "" });
  };

  return (
    <div className="col-span-1">
      <h1>Form</h1>
      <form
        className="flex flex-col mt-[20px]"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          onChange={handleChange}
          className="input-form"
          type="text"
          id="name"
          name="name"
          placeholder="name"
          value={inputValue.name}
        />
        <input
          onChange={handleChange}
          className="input-form mt-[20px]"
          type="number"
          id="age"
          name="age"
          placeholder="age"
          value={inputValue.age}
        />
        <textarea
          onChange={handleChange}
          id="bio"
          name="bio"
          className="px-[20px] pt-[20px] pb-[30px] mt-[20px]"
          placeholder="Bio Description"
          value={inputValue.bio}
        />
        <button className="text-white bg-[#e65656] font-bold self-start px-[30px] py-[10px] rounded-md mt-[30px] hover:bg-[#c66767] transition-colors">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
