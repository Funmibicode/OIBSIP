import {
  CheckCircle2,
  ChefHat,
  PackageCheck,
  Truck,
  XCircle,
} from "lucide-react";

const OrderStatus = ({ status }) => {
  const statusConfig = {
    "Order Received": {
      icon: PackageCheck,
      label: "Order Received",
      description: "Your order has been received.",
      classes: "bg-blue-50 text-blue-700 border-blue-100",
      iconClasses: "bg-blue-100 text-blue-600",
    },

    "In Kitchen": {
      icon: ChefHat,
      label: "In Kitchen",
      description: "Your pizza is being prepared.",
      classes: "bg-yellow-50 text-yellow-700 border-yellow-100",
      iconClasses: "bg-yellow-100 text-yellow-600",
    },

    "Sent to Delivery": {
      icon: Truck,
      label: "Sent to Delivery",
      description: "Your order is on its way.",
      classes: "bg-purple-50 text-purple-700 border-purple-100",
      iconClasses: "bg-purple-100 text-purple-600",
    },

    Delivered: {
      icon: CheckCircle2,
      label: "Delivered",
      description: "Your order has been delivered.",
      classes: "bg-green-50 text-green-700 border-green-100",
      iconClasses: "bg-green-100 text-green-600",
    },

    Cancelled: {
      icon: XCircle,
      label: "Cancelled",
      description: "This order has been cancelled.",
      classes: "bg-red-50 text-red-700 border-red-100",
      iconClasses: "bg-red-100 text-red-600",
    },
  };

  const currentStatus = statusConfig[status] || {
    icon: PackageCheck,
    label: status || "Unknown",
    description: "Order status unavailable.",
    classes: "bg-slate-50 text-slate-600 border-slate-100",
    iconClasses: "bg-slate-100 text-slate-500",
  };

  const Icon = currentStatus.icon;

  return (
    <div
      className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${currentStatus.classes}`}
    >
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${currentStatus.iconClasses}`}
      >
        <Icon size={20} strokeWidth={2} />
      </div>

      <div className="min-w-0">
        <p className="text-sm font-bold">
          {currentStatus.label}
        </p>

        <p className="mt-0.5 text-xs opacity-80">
          {currentStatus.description}
        </p>
      </div>
    </div>
  );
};

export default OrderStatus;