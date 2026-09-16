import { CreditCard, Loader2 } from "lucide-react";

const PaymentButton = ({
  amount,
  onPayment,
  loading = false,
  disabled = false,
}) => {
  const formatCurrency = (value) => {
    return `₦${value.toLocaleString()}`;
  };

  const handlePayment = () => {
    if (disabled || loading) return;

    onPayment?.();
  };

  return (
    <button
      type="button"
      onClick={handlePayment}
      disabled={disabled || loading}
      className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#27245B] px-5 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#332F70] disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading ? (
        <>
          <Loader2
            size={18}
            strokeWidth={2}
            className="animate-spin"
          />

          Processing Payment...
        </>
      ) : (
        <>
          <CreditCard size={18} strokeWidth={2} />

          Pay {formatCurrency(amount)}
        </>
      )}
    </button>
  );
};

export default PaymentButton;