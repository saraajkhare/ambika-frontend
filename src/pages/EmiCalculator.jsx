import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PieChartBox from "../components/PieChart";

export default function EmiCalculator() {
  const navigate = useNavigate();

  const [amount, setAmount] = useState(1000000);
  const [rate, setRate] = useState(10.5);
  const [tenure, setTenure] = useState(10);
  const [isYear, setIsYear] = useState(true);

  const months = isYear ? tenure * 12 : tenure;
  const monthlyRate = rate / 12 / 100;

  const emi =
    months > 0
      ? (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1)
      : 0;

  const totalPayment = emi * months;
  const totalInterest = totalPayment - amount;

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-[#b00000] to-[#ff2e2e] py-[90px] px-5 text-center text-white">
        <p className="text-[13px] tracking-[2px] opacity-90 mb-3">
          CALCULATE YOUR EMI
        </p>

        <h1 className="text-[42px] font-bold leading-tight max-w-[900px] mx-auto max-md:text-[30px]">
          Get to Know About Your EMI With <br />
          The Help of EMI Calculator
        </h1>

        <button
          onClick={() => navigate("/contact")}
          className="mt-8 px-9 py-[14px] bg-[#7f0000] rounded-[8px] font-semibold hover:bg-[#5c0000] transition"
        >
          OR CONTACT US
        </button>
      </section>

      {/* ================= MAIN SECTION ================= */}
      <section className="bg-[#f8fafc] py-[80px] px-5">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-[40px] max-[900px]:grid-cols-1">

          {/* ================= LEFT CARD ================= */}
          <div className="bg-white p-[35px] rounded-[16px] shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
            <h3 className="text-[22px] font-bold mb-[25px]">
              EMI Calculator
            </h3>

            {/* Loan Amount */}
            <label className="block font-semibold mb-[6px]">
              Loan Amount
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(+e.target.value)}
              className="w-full px-[14px] py-[12px] rounded-[8px] border border-[#ddd] mb-[18px] text-[15px]"
            />

            {/* Interest */}
            <label className="block font-semibold mb-[6px]">
              Interest Rate (%)
            </label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(+e.target.value)}
              className="w-full px-[14px] py-[12px] rounded-[8px] border border-[#ddd] mb-[18px] text-[15px]"
            />

            {/* Tenure */}
            <label className="block font-semibold mb-[6px]">
              Loan Tenure
            </label>

            <div className="flex gap-[10px] mt-2">
              <input
                type="number"
                value={tenure}
                onChange={(e) => setTenure(+e.target.value)}
                className="flex-1 px-[14px] py-[12px] rounded-[8px] border border-[#ddd]"
              />

              <button
                onClick={() => setIsYear(true)}
                className={`px-[18px] py-[10px] rounded-[6px] font-semibold ${
                  isYear
                    ? "bg-red-600 text-white"
                    : "bg-[#eee] text-black"
                }`}
              >
                Yr
              </button>

              <button
                onClick={() => setIsYear(false)}
                className={`px-[18px] py-[10px] rounded-[6px] font-semibold ${
                  !isYear
                    ? "bg-red-600 text-white"
                    : "bg-[#eee] text-black"
                }`}
              >
                Mo
              </button>
            </div>
          </div>

          {/* ================= RIGHT CARD ================= */}
          <div className="bg-white p-[35px] rounded-[16px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex flex-col items-center">

            {/* VALUES */}
            <div className="w-full grid grid-cols-3 gap-[20px] mb-[30px] max-md:grid-cols-1">
              <div className="bg-[#f1f5f9] p-[18px] rounded-[12px] text-center">
                <p className="text-[13px] text-[#555]">Loan EMI</p>
                <h2 className="text-[20px] font-semibold mt-2">
                  ₹ {emi.toFixed(0)}
                </h2>
              </div>

              <div className="bg-[#f1f5f9] p-[18px] rounded-[12px] text-center">
                <p className="text-[13px] text-[#555]">
                  Total Interest Payable
                </p>
                <h2 className="text-[20px] font-semibold mt-2">
                  ₹ {totalInterest.toFixed(0)}
                </h2>
              </div>

              <div className="bg-[#f1f5f9] p-[18px] rounded-[12px] text-center">
                <p className="text-[13px] text-[#555]">
                  Total Payment
                </p>
                <h2 className="text-[20px] font-semibold mt-2">
                  ₹ {totalPayment.toFixed(0)}
                </h2>
              </div>
            </div>

            {/* PIE CHART */}
            <PieChartBox
              amount={amount}
              interest={totalInterest}
              emi={emi}
              tenure={isYear ? tenure : tenure / 12}
              rate={rate}
            />
          </div>

        </div>
      </section>
    </>
  );
}
