import OrderCard from "./OrderCard";

const OrderList = ({
  orders = [],
  onViewOrder,
}) => {
  if (orders.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-200 bg-white px-6 py-12 text-center">
        <h3 className="text-lg font-bold text-[#172033]">
          No orders yet
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Your pizza orders will appear here once you place one.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {orders.map((order) => (
        <OrderCard
          key={order.id}
          order={order}
          onViewOrder={onViewOrder}
        />
      ))}
    </div>
  );
};

export default OrderList;