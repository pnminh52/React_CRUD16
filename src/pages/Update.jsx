import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Update = ({ products, onUpdate }) => {
  const { id } = useParams();
  const crtPrd = products.find((item) => item.id == id);
  const finalUpdate = (e) => {
    e.preventDefault();
    const updateData = { ...crtPrd, ...inputValue };
    onUpdate(updateData);
  };
  const [inputValue, setInputValue] = useState({});
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  return (
    <div>
      <form action="" onSubmit={finalUpdate}>
        <input
          defaultValue={crtPrd?.name}
          type="text"
          name="name"
          placeholder="name"
          onInput={onChange}
        />
        <input
          defaultValue={crtPrd?.des}
          type="text"
          name="des"
          placeholder="des"
          onInput={onChange}
        />
        <input
          defaultValue={crtPrd?.price}
          type="text"
          name="price"
          placeholder="price"
          onInput={onChange}
        />
        <input
          defaultValue={crtPrd?.img}
          type="text"
          name="img"
          placeholder="img"
          onInput={onChange}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;
