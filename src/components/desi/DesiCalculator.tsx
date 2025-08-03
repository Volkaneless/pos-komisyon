import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator, Package } from "lucide-react";

const DesiCalculator = () => {
  const [en, setEn] = useState<string>("");
  const [boy, setBoy] = useState<string>("");
  const [yukseklik, setYukseklik] = useState<string>("");
  const [desiSonuc, setDesiSonuc] = useState<number | null>(null);

  const hesapla = () => {
    const enNum = parseFloat(en);
    const boyNum = parseFloat(boy);
    const yukseklikNum = parseFloat(yukseklik);

    if (enNum > 0 && boyNum > 0 && yukseklikNum > 0) {
      const desi = (enNum * boyNum * yukseklikNum) / 3000;
      setDesiSonuc(Math.round(desi * 100) / 100);
    }
  };

  const temizle = () => {
    setEn("");
    setBoy("");
    setYukseklik("");
    setDesiSonuc(null);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl">
          <Package className="w-6 h-6" />
          Desi Hesaplama Aracı
        </CardTitle>
        <CardDescription>
          Paket boyutlarını girerek desi değerini hesaplayın
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="en">En (cm)</Label>
            <Input
              id="en"
              type="number"
              placeholder="En"
              value={en}
              onChange={(e) => setEn(e.target.value)}
              min="0"
              step="0.1"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="boy">Boy (cm)</Label>
            <Input
              id="boy"
              type="number"
              placeholder="Boy"
              value={boy}
              onChange={(e) => setBoy(e.target.value)}
              min="0"
              step="0.1"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="yukseklik">Yükseklik (cm)</Label>
            <Input
              id="yukseklik"
              type="number"
              placeholder="Yükseklik"
              value={yukseklik}
              onChange={(e) => setYukseklik(e.target.value)}
              min="0"
              step="0.1"
            />
          </div>
        </div>

        <div className="flex gap-2">
          <Button onClick={hesapla} className="flex-1">
            <Calculator className="w-4 h-4 mr-2" />
            Desi Hesapla
          </Button>
          <Button variant="outline" onClick={temizle}>
            Temizle
          </Button>
        </div>

        {desiSonuc !== null && (
          <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
            <h3 className="font-semibold text-lg mb-2">Hesaplama Sonucu</h3>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-primary">
                {desiSonuc} Desi
              </p>
              <div className="text-sm text-muted-foreground">
                <p><strong>Formül:</strong> ({en} × {boy} × {yukseklik}) ÷ 3000</p>
                <p><strong>Hacim:</strong> {en && boy && yukseklik ? (parseFloat(en) * parseFloat(boy) * parseFloat(yukseklik)).toLocaleString() : 0} cm³</p>
              </div>
            </div>
          </div>
        )}

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">💡 Desi Hesaplama Formülü</h4>
          <p className="text-sm text-gray-700">
            <strong>Desi = (En × Boy × Yükseklik) ÷ 3000</strong>
            <br />
            Tüm ölçüler santimetre (cm) cinsindendir.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DesiCalculator;