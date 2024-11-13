import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CommissionSectionProps {
  amount: string;
  setAmount: (value: string) => void;
  rate: string;
  setRate: (value: string) => void;
  installment: string;
  setInstallment: (value: string) => void;
  fixedFee: string;
  setFixedFee: (value: string) => void;
}

const CommissionSection = ({
  amount,
  setAmount,
  rate,
  setRate,
  installment,
  setInstallment,
  fixedFee,
  setFixedFee,
}: CommissionSectionProps) => {
  return (
    <div className="space-y-6 relative">
      <div>
        <Label>İşlem Tutarı (TL)</Label>
        <Input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="1000"
        />
      </div>
      <div>
        <Label>Komisyon Oranı (%)</Label>
        <div className="space-y-2">
          <Input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="1.99"
            step="0.01"
          />
          <Slider
            value={[parseFloat(rate) || 0]}
            onValueChange={(value) => setRate(value[0].toString())}
            max={10}
            step={0.01}
          />
        </div>
      </div>
      <div className="relative z-10">
        <Label>Taksit Sayısı</Label>
        <Select value={installment} onValueChange={setInstallment}>
          <SelectTrigger className="bg-white">
            <SelectValue placeholder="Taksit seçin" />
          </SelectTrigger>
          <SelectContent className="bg-white z-50 relative shadow-lg">
            <SelectItem value="1">Peşin</SelectItem>
            <SelectItem value="3">3 Taksit</SelectItem>
            <SelectItem value="6">6 Taksit</SelectItem>
            <SelectItem value="9">9 Taksit</SelectItem>
            <SelectItem value="12">12 Taksit</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="relative z-0">
        <Label>Sabit Ücret (TL)</Label>
        <Input
          type="number"
          value={fixedFee}
          onChange={(e) => setFixedFee(e.target.value)}
          placeholder="0"
          step="0.01"
        />
      </div>
    </div>
  );
};

export default CommissionSection;