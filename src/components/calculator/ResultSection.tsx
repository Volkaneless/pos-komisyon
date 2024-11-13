import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ResultSectionProps {
  amount: string;
  rate: string;
  installment: string;
  fixedFee: string;
}

const ResultSection = ({
  amount,
  rate,
  installment,
  fixedFee,
}: ResultSectionProps) => {
  const calculateResults = () => {
    if (!amount || !rate) return null;

    const amountNum = parseFloat(amount);
    const rateNum = parseFloat(rate);
    const installmentNum = parseInt(installment);
    const fixedFeeNum = parseFloat(fixedFee) || 0;

    const baseCommission = (amountNum * rateNum) / 100;
    const totalCommission = baseCommission + fixedFeeNum;
    const netIncome = amountNum - totalCommission;

    const installmentAmount = installmentNum > 1 
      ? (amountNum / installmentNum).toFixed(2)
      : amountNum;

    const data = Array.from({ length: 12 }, (_, i) => ({
      month: `${i + 1}. Ay`,
      komisyon: ((amountNum * (i + 1) * rateNum) / 100).toFixed(2),
    }));

    return {
      commission: totalCommission.toFixed(2),
      netIncome: netIncome.toFixed(2),
      installmentAmount,
      data,
    };
  };

  const results = calculateResults();

  if (!results) return null;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4">
          <h3 className="text-sm text-gray-600">Toplam Komisyon</h3>
          <p className="text-2xl font-semibold">{results.commission} TL</p>
        </Card>
        <Card className="p-4">
          <h3 className="text-sm text-gray-600">Net Gelir</h3>
          <p className="text-2xl font-semibold">{results.netIncome} TL</p>
        </Card>
        <Card className="p-4">
          <h3 className="text-sm text-gray-600">Taksit Tutarı</h3>
          <p className="text-2xl font-semibold">{results.installmentAmount} TL</p>
        </Card>
      </div>

      <Card className="p-4">
        <h3 className="text-lg font-semibold mb-4">Aylık Komisyon Grafiği</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={results.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="komisyon"
                stroke="#8884d8"
                name="Komisyon (TL)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};

export default ResultSection;