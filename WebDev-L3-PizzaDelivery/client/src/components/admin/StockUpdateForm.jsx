import { Minus, Plus, Save } from "lucide-react";
import React, { useState } from 'react';
import Button from "../ui/Button";
import Input from "../ui/Input";

const StockUpdateForm = ({
  item,
  onSubmit,
  onCancel,
}) => {
  const [quantity, setQuantity] = useState("");
  const [action, setAction] = useState("add");

  const handleSubmit = (event) => {
    event.preventDefault();

    const amount = Number(quantity);

    if (!amount || amount <= 0) {
      return;
    }

    onSubmit?.({
      itemId: item.id,
      action,
      quantity: amount,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
    >
      {/* Header */}
      <div className="mb-5">
        <h3 className="text-lg font-bold text-[#172033]">
          Update Stock
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Update the inventory quantity for{" "}
          <span className="font-semibold text-[#27245B]">
            {item?.name}
          </span>
          .
        </p>
      </div>

      {/* Current Stock */}
      <div className="mb-5 rounded-xl bg-[#F8F9FF] p-4">
        <p className="text-xs font-medium text-slate-400">
          Current Stock
        </p>

        <p className="mt-1 text-xl font-extrabold text-[#172033]">
          {item?.quantity}{" "}
          <span className="text-sm font-medium text-slate-400">
            {item?.unit}
          </span>
        </p>
      </div>

      {/* Action */}
      <div className="mb-5">
        <p className="mb-2 text-sm font-semibold text-[#172033]">
          Stock Action
        </p>

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setAction("add")}
            className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition ${
              action === "add"
                ? "border-green-500 bg-green-50 text-green-600"
                : "border-slate-200 text-slate-500 hover:bg-slate-50"
            }`}
          >
            <Plus size={17} />
            Add Stock
          </button>

          <button
            type="button"
            onClick={() => setAction("remove")}
            className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition ${
              action === "remove"
                ? "border-red-500 bg-red-50 text-red-500"
                : "border-slate-200 text-slate-500 hover:bg-slate-50"
            }`}
          >
            <Minus size={17} />
            Remove Stock
          </button>
        </div>
      </div>

      {/* Quantity */}
      <div className="mb-6">
        <Input
          label={`Quantity (${item?.unit || "units"})`}
          type="number"
          min="1"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
          placeholder="Enter quantity"
          required
        />
      </div>

      {/* Actions */}
      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
        <Button
          type="button"
          variant="secondary"
          onClick={onCancel}
        >
          Cancel
        </Button>

        <Button
          type="submit"
          variant="dark"
        >
          <Save size={17} />
          Save Changes
        </Button>
      </div>
    </form>
  );
};

export default StockUpdateForm;