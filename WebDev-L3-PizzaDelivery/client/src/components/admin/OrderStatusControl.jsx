import { Check, ChevronDown } from "lucide-react";
import React, { useState } from 'react';

const OrderStatusControl = ({
  currentStatus,
  onStatusChange,
  disabled = false,
}) => {
  const [status, setStatus] = useState(currentStatus || "Order Received");

  const statuses = [
    "Order Received",
    "In Kitchen",
    "Sent to Delivery",
    "Delivered",
    "Cancelled",
  ];

  const handleChange = (event) => {
    const newStatus = event.target.value;

    setStatus(newStatus);
    onStatusChange?.(newStatus);
  };

  return (
    <div className="space-y-2">
      <label
        htmlFor="order-status"
        className="text-sm font-semibold text-[#172033]"
      >
        Order Status
      </label>

      <div className="relative">
        <select
          id="order-status"
          value={status}
          onChange={handleChange}
          disabled={disabled}
          className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 pr-10 text-sm font-medium text-[#172033] outline-none transition focus:border-[#27245B] focus:ring-2 focus:ring-[#27245B]/10 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
        >
          {statuses.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <ChevronDown
          size={18}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
        />
      </div>

      {status !== currentStatus && (
        <div className="flex items-center gap-1.5 text-xs font-medium text-green-600">
          <Check size={14} strokeWidth={2.5} />
          Status changed
        </div>
      )}
    </div>
  );
};

export default OrderStatusControl;