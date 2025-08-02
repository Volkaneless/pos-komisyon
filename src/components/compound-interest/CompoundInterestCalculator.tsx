import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Trash2 } from "lucide-react";

interface CalculationResult {
  futureValue: number;
  totalGain: number;
  totalInterest: number;
}

const CompoundInterestCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const [compoundingFrequency, setCompoundingFrequency] = useState("annually");
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [result, setResult] = useState<CalculationResult | null>(null);

  const calculateCompoundInterest = () => {
    const P = parseFloat(principal) || 0;
    const r = (parseFloat(interestRate) || 0) / 100;
    const t = parseFloat(timePeriod) || 0;
    const PMT = parseFloat(monthlyContribution) || 0;
    
    let n = 1; // Annual compounding by default
    if (compoundingFrequency === "monthly") n = 12;
    if (compoundingFrequency === "daily") n = 365;
    if (compoundingFrequency === "quarterly") n = 4;

    // Compound interest formula: A = P(1 + r/n)^(nt)
    const futureValuePrincipal = P * Math.pow(1 + r/n, n * t);
    
    // Future value of annuity (monthly contributions)
    let futureValueAnnuity = 0;
    if (PMT > 0 && n === 12) {
      // Monthly contributions
      futureValueAnnuity = PMT * (Math.pow(1 + r/n, n * t) - 1) / (r/n);
    }
    
    const futureValue = futureValuePrincipal + futureValueAnnuity;
    const totalContributions = P + (PMT * 12 * t);
    const totalGain = futureValue - totalContributions;
    const totalInterest = futureValue - P - (PMT * 12 * t);

    setResult({
      futureValue,
      totalGain,
      totalInterest,
    });
  };

  const clearCalculator = () => {
    setPrincipal("");
    setInterestRate("");
    setTimePeriod("");
    setCompoundingFrequency("annually");
    setMonthlyContribution("");
    setResult(null);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <Card className="p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-6">Bileşik Faiz Hesaplama Aracı</h3>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="principal">Ana Para (TL)</Label>
              <Input
                id="principal"
                type="number"
                placeholder="100000"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="interestRate">Yıllık Faiz Oranı (%)</Label>
              <Input
                id="interestRate"
                type="number"
                step="0.1"
                placeholder="15"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="timePeriod">Yatırım Süresi (Yıl)</Label>
              <Input
                id="timePeriod"
                type="number"
                placeholder="10"
                value={timePeriod}
                onChange={(e) => setTimePeriod(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="frequency">Bileşik Dönem</Label>
              <Select value={compoundingFrequency} onValueChange={setCompoundingFrequency}>
                <SelectTrigger>
                  <SelectValue placeholder="Dönem seçin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Günlük</SelectItem>
                  <SelectItem value="monthly">Aylık</SelectItem>
                  <SelectItem value="quarterly">Üç Aylık</SelectItem>
                  <SelectItem value="annually">Yıllık</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="monthlyContribution">Aylık Ek Yatırım (TL) - Opsiyonel</Label>
              <Input
                id="monthlyContribution"
                type="number"
                placeholder="1000"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(e.target.value)}
              />
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-2 gap-4">
          <Button 
            className="w-full bg-primary hover:bg-primary/90"
            onClick={calculateCompoundInterest}
          >
            <Calculator className="h-4 w-4 mr-2" /> Bileşik Faiz Hesapla
          </Button>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={clearCalculator}
          >
            <Trash2 className="h-4 w-4 mr-2" /> Temizle
          </Button>
        </div>
      </div>

      <div>
        {result && (
          <Card className="p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Hesaplama Sonuçları</h3>
            
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="text-sm text-green-700 font-medium">Toplam Değer</h4>
                <p className="text-2xl font-bold text-green-800">
                  {result.futureValue.toLocaleString('tr-TR', { 
                    minimumFractionDigits: 2, 
                    maximumFractionDigits: 2 
                  })} TL
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="text-sm text-blue-700 font-medium">Toplam Kazanç</h4>
                <p className="text-xl font-bold text-blue-800">
                  {result.totalGain.toLocaleString('tr-TR', { 
                    minimumFractionDigits: 2, 
                    maximumFractionDigits: 2 
                  })} TL
                </p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 className="text-sm text-purple-700 font-medium">Bileşik Faiz Kazancı</h4>
                <p className="text-xl font-bold text-purple-800">
                  {result.totalInterest.toLocaleString('tr-TR', { 
                    minimumFractionDigits: 2, 
                    maximumFractionDigits: 2 
                  })} TL
                </p>
              </div>
            </div>
          </Card>
        )}

        <Card className="p-6 rounded-xl shadow-sm mt-6">
          <h4 className="text-lg font-semibold mb-4">Önemli Bilgiler</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Bileşik faiz hesaplaması tahmini değerler içerir</li>
            <li>• Gerçek yatırım getirileri piyasa koşullarına göre değişebilir</li>
            <li>• Vergi ve komisyon ücretleri hesaplamaya dahil değildir</li>
            <li>• Uzun vadeli yatırımlarda bileşik faiz etkisi daha belirgindir</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default CompoundInterestCalculator;