"use client";

import { useState } from "react";
import { Minus, Plus, Trash } from "react-feather";

const UpdateCart = ({
  quantity,
  slug,
  dispatch,
}: {
  quantity: number;
  slug: string;
  dispatch: any;
}) => {
  const [noOfItems, setNoOfItems] = useState(quantity);

  const handleUpdateCart = (type: string) => {
    switch (type) {
      case "add":
        setNoOfItems((prev) => prev + 1);
        dispatch({
          type: "updateQuantity",
          slug,
          quantity: noOfItems + 1,
          updateCart: true,
        });
        return;
      case "substract":
        setNoOfItems((prev) => prev - 1);
        dispatch({
          type: "updateQuantity",
          slug,
          quantity: noOfItems - 1,
          updateCart: true,
        });
        return;
      default:
        setNoOfItems(0);
        dispatch({ type: "deleteItem", slug });
        return;
    }
  };

  return (
    <div className="flex w-full flex-wrap   gap-3  ">
      <div className="flex max-w-full items-center justify-between rounded-full  border border-primary/10  bg-tertiary-light bg-opacity-[0.01] px-0 py-0 text-primary md:w-fit">
        <button
          disabled={noOfItems === 1}
          className=" flex min-h-[48px] min-w-[48px] items-center justify-center disabled:opacity-30"
          onClick={() => handleUpdateCart("substract")}
        >
          <Minus size={16} />
        </button>
        <p className="w-full text-center text-sm font-semibold leading-none md:px-6">
          {noOfItems}
        </p>
        <button
          className=" flex min-h-[48px] min-w-[48px] items-center justify-center"
          onClick={() => handleUpdateCart("add")}
        >
          <Plus size={16} />
        </button>
      </div>
      <button
        className="border-primary-40 flex h-12 w-12 items-center justify-center rounded-lg border bg-tertiary-light bg-opacity-[0.01]"
        onClick={() => handleUpdateCart("delete")}
      >
        <Trash size={16} />
      </button>
    </div>
  );
};

export default UpdateCart;
