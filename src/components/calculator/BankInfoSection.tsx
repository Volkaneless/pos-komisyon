import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BankInfoProps {
  bankName: string;
  setBankName: (value: string) => void;
  posType: string;
  setPosType: (value: string) => void;
}

const BankInfoSection = ({
  bankName,
  setBankName,
  posType,
  setPosType,
}: BankInfoProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label>Banka / Finans Kuruluşu</Label>
        <Input
          value={bankName}
          onChange={(e) => setBankName(e.target.value)}
          placeholder="Örn: Garanti BBVA"
        />
      </div>
      <div className="relative">
        <Label>POS Türü</Label>
        <Select value={posType} onValueChange={setPosType}>
          <SelectTrigger className="bg-white">
            <SelectValue placeholder="POS türü seçin" />
          </SelectTrigger>
          <SelectContent className="bg-white z-50 relative shadow-lg">
            <SelectItem value="physical">Fiziksel POS</SelectItem>
            <SelectItem value="virtual">Sanal POS</SelectItem>
            <SelectItem value="mobile">Mobil POS</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default BankInfoSection;