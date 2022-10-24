const Form = () => {
  return (
    <div className="col-span-1">
      <h1>Form</h1>
      <form className="flex flex-col mt-[20px]">
        <input
          className="input-form"
          type="text"
          id="name"
          name="name"
          placeholder="name"
        />
        <input
          className="input-form mt-[20px]"
          type="number"
          id="age"
          name="age"
          placeholder="age"
        />
        <textarea
          className="px-[20px] pt-[20px] pb-[30px] mt-[20px]"
          placeholder="Bio Description"
        />
        <button className="text-white bg-[#e65656] font-bold self-start px-[30px] py-[10px] rounded-md mt-[30px] hover:bg-[#c66767] transition-colors">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
