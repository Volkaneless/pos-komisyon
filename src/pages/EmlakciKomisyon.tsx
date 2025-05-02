
import { useState } from "react";
import { Calculator, Building, Percent, ChartBar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/components/ui/use-toast";
import { Helmet } from "react-helmet";
import MetaTags from "@/components/MetaTags";
import CanonicalLink from "@/components/CanonicalLink";

const EmlakciKomisyon = () => {
  const [propertyType, setPropertyType] = useState("konut");
  const [saleType, setSaleType] = useState("satis");
  const [propertyValue, setPropertyValue] = useState("");
  const [commissionRate, setCommissionRate] = useState(2);
  const [kdvIncluded, setKdvIncluded] = useState(true);
  const [calculations, setCalculations] = useState<{
    commission: number;
    kdv: number;
    total: number;
    netToSeller: number;
  } | null>(null);
  
  const { toast } = useToast();

  const handleCalculate = () => {
    const value = parseFloat(propertyValue);
    
    if (isNaN(value) || value <= 0) {
      toast({
        title: "Geçersiz değer",
        description: "Lütfen geçerli bir gayrimenkul değeri girin.",
        variant: "destructive"
      });
      return;
    }
    
    // Calculate commission
    let baseCommission = (value * commissionRate) / 100;
    
    // KDV calculation (18%)
    const kdv = baseCommission * 0.18;
    
    // Total with KDV
    const total = baseCommission + kdv;
    
    // Net to seller
    const netToSeller = value - (kdvIncluded ? total : baseCommission);
    
    setCalculations({
      commission: baseCommission,
      kdv,
      total,
      netToSeller
    });
  };

  const handleClear = () => {
    setPropertyValue("");
    setCommissionRate(2);
    setCalculations(null);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(value);
  };

  return (
    <>
      <MetaTags 
        title="Emlakçı Komisyon Oranları & Hesaplama 2025"
        description="2025 emlakçı komisyon oranları ve komisyon hesaplama. Satış ve kiralama işlemlerinde emlakçı komisyon oranları, vergiler ve net tutarlar hakkında güncel bilgiler."
        keywords="emlakçı komisyon, emlak komisyonu, emlakçı komisyonu hesaplama, gayrimenkul komisyon oranları, 2025 emlak komisyonu"
        canonicalPath="/emlakci-komisyon"
      />
      <CanonicalLink path="/emlakci-komisyon" includeHome={true} />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Emlakçı Komisyon Oranları & Hesaplama 2025</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gayrimenkul alım satım ve kiralama işlemlerinde emlakçı komisyon oranlarını hesaplayın
            ve güncel bilgilere ulaşın.
          </p>
        </div>
        
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-primary/10 to-blue-100 rounded-xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Emlakçı Komisyonu Nedir?</h2>
              <p className="text-gray-700 mb-4">
                Emlakçı komisyonu, gayrimenkul alım satım ve kiralama işlemlerinde emlakçılara ödenen hizmet bedelidir. 
                Bu komisyon, işlemin türüne ve gayrimenkulün değerine göre değişiklik gösterebilir.
              </p>
              <p className="text-gray-700 mb-4">
                2025 yılında emlakçı komisyon oranları, Türkiye genelinde satış işlemleri için genellikle %2-4 
                arasında, kiralama işlemleri için ise 1 aylık kira bedeli olarak uygulanmaktadır.
              </p>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center text-primary">
                  <Building size={64} className="mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Emlak İşlemleri</h3>
                  <p className="text-gray-600">Profesyonel ve şeffaf hizmet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Calculator */}
        <div id="calculator" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Emlakçı Komisyon Hesaplayıcı</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 border-l-4 border-l-primary">
              <div className="mb-6">
                <Label htmlFor="propertyType">Gayrimenkul Türü</Label>
                <RadioGroup 
                  defaultValue="konut" 
                  className="grid grid-cols-2 gap-4 mt-2"
                  value={propertyType}
                  onValueChange={setPropertyType}
                >
                  <div className="flex items-center space-x-2 border rounded-md p-3">
                    <RadioGroupItem value="konut" id="konut" />
                    <Label htmlFor="konut">Konut</Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md p-3">
                    <RadioGroupItem value="isyeri" id="isyeri" />
                    <Label htmlFor="isyeri">İşyeri</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="mb-6">
                <Label htmlFor="saleType">İşlem Türü</Label>
                <RadioGroup 
                  defaultValue="satis" 
                  className="grid grid-cols-2 gap-4 mt-2"
                  value={saleType}
                  onValueChange={setSaleType}
                >
                  <div className="flex items-center space-x-2 border rounded-md p-3">
                    <RadioGroupItem value="satis" id="satis" />
                    <Label htmlFor="satis">Satış</Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md p-3">
                    <RadioGroupItem value="kira" id="kira" />
                    <Label htmlFor="kira">Kiralama</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="mb-6">
                <Label htmlFor="propertyValue">
                  {saleType === "satis" ? "Gayrimenkul Değeri (TL)" : "Aylık Kira Bedeli (TL)"}
                </Label>
                <div className="flex items-center mt-2">
                  <span className="text-gray-500 mr-2">₺</span>
                  <Input
                    id="propertyValue"
                    type="number"
                    placeholder="0"
                    value={propertyValue}
                    onChange={(e) => setPropertyValue(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between">
                  <Label htmlFor="commissionRate">Komisyon Oranı (%{commissionRate})</Label>
                  {saleType === "kira" && (
                    <span className="text-sm text-gray-500">Genellikle 1 aylık kira</span>
                  )}
                </div>
                {saleType === "satis" ? (
                  <Slider
                    id="commissionRate"
                    min={0.5}
                    max={5}
                    step={0.1}
                    value={[commissionRate]}
                    onValueChange={(values) => setCommissionRate(values[0])}
                    className="mt-2"
                  />
                ) : (
                  <div className="flex items-center space-x-2 mt-2">
                    <RadioGroup 
                      defaultValue="1" 
                      className="grid grid-cols-3 gap-2"
                      value={commissionRate.toString()}
                      onValueChange={(value) => setCommissionRate(parseFloat(value))}
                    >
                      <div className="flex items-center space-x-1 border rounded-md p-2">
                        <RadioGroupItem value="1" id="oneMonth" />
                        <Label htmlFor="oneMonth" className="text-sm">1 ay</Label>
                      </div>
                      <div className="flex items-center space-x-1 border rounded-md p-2">
                        <RadioGroupItem value="0.5" id="halfMonth" />
                        <Label htmlFor="halfMonth" className="text-sm">½ ay</Label>
                      </div>
                      <div className="flex items-center space-x-1 border rounded-md p-2">
                        <RadioGroupItem value="2" id="twoMonth" />
                        <Label htmlFor="twoMonth" className="text-sm">2 ay</Label>
                      </div>
                    </RadioGroup>
                  </div>
                )}
              </div>
              
              <div className="mb-6">
                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox"
                    id="kdvIncluded"
                    checked={kdvIncluded}
                    onChange={(e) => setKdvIncluded(e.target.checked)}
                    className="rounded border-gray-300"
                  />
                  <Label htmlFor="kdvIncluded">KDV dahil hesapla (%18)</Label>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={handleCalculate}
                >
                  Hesapla
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={handleClear}
                >
                  Temizle
                </Button>
              </div>
            </Card>
            
            <Card className="p-6 rounded-xl shadow-lg bg-white">
              <h3 className="text-xl font-semibold text-primary mb-6">Hesaplama Sonucu</h3>
              {!calculations ? (
                <div className="flex flex-col items-center justify-center h-64">
                  <Calculator size={48} className="text-gray-300 mb-4" />
                  <p className="text-gray-500">
                    Sonuç görmek için değerleri girip "Hesapla" butonuna tıklayın
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium">Gayrimenkul Değeri</span>
                      <span className="font-semibold">{formatCurrency(parseFloat(propertyValue))}</span>
                    </div>
                    <hr />
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium">Komisyon ({commissionRate}%)</span>
                      <span className="font-semibold">{formatCurrency(calculations.commission)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium">KDV (18%)</span>
                      <span className="font-semibold">{formatCurrency(calculations.kdv)}</span>
                    </div>
                    <hr className="border-t-2 border-gray-400" />
                    <div className="flex justify-between items-center py-3">
                      <span className="font-bold">Toplam Komisyon</span>
                      <span className="font-bold text-lg text-primary">
                        {formatCurrency(calculations.total)}
                      </span>
                    </div>
                    <hr />
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium">Satıcının Eline Geçen</span>
                      <span className="font-semibold text-green-600">{formatCurrency(calculations.netToSeller)}</span>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
        
        {/* Commission Rates */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">2025 Emlakçı Komisyon Oranları</h2>
          
          <Tabs defaultValue="konut" className="mb-8">
            <TabsList className="grid grid-cols-2 mb-6">
              <TabsTrigger value="konut">Konut</TabsTrigger>
              <TabsTrigger value="isyeri">İşyeri</TabsTrigger>
            </TabsList>
            
            <TabsContent value="konut">
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse bg-white border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="py-3 px-4 text-left font-semibold border-b">İşlem Türü</th>
                      <th className="py-3 px-4 text-left font-semibold border-b">Standart Oran</th>
                      <th className="py-3 px-4 text-left font-semibold border-b">Kim Öder?</th>
                      <th className="py-3 px-4 text-left font-semibold border-b">KDV</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Satış İşlemi</td>
                      <td className="py-3 px-4">%2</td>
                      <td className="py-3 px-4">Alıcı ve satıcı eşit olarak</td>
                      <td className="py-3 px-4">%18</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Kiralama İşlemi</td>
                      <td className="py-3 px-4">1 aylık kira</td>
                      <td className="py-3 px-4">Kiracı ve mal sahibi eşit olarak</td>
                      <td className="py-3 px-4">%18</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Lüks Konut Satışı</td>
                      <td className="py-3 px-4">%3-4</td>
                      <td className="py-3 px-4">Anlaşmaya göre değişir</td>
                      <td className="py-3 px-4">%18</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="isyeri">
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse bg-white border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="py-3 px-4 text-left font-semibold border-b">İşlem Türü</th>
                      <th className="py-3 px-4 text-left font-semibold border-b">Standart Oran</th>
                      <th className="py-3 px-4 text-left font-semibold border-b">Kim Öder?</th>
                      <th className="py-3 px-4 text-left font-semibold border-b">KDV</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Satış İşlemi</td>
                      <td className="py-3 px-4">%3</td>
                      <td className="py-3 px-4">Alıcı ve satıcı eşit olarak</td>
                      <td className="py-3 px-4">%18</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Kiralama İşlemi</td>
                      <td className="py-3 px-4">1 aylık kira</td>
                      <td className="py-3 px-4">Kiracı ve mal sahibi eşit olarak</td>
                      <td className="py-3 px-4">%18</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Ticari Alan Kiralama</td>
                      <td className="py-3 px-4">1-2 aylık kira</td>
                      <td className="py-3 px-4">Anlaşmaya göre değişir</td>
                      <td className="py-3 px-4">%18</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Önemli Bilgiler</h3>
            <div className="space-y-3">
              <p className="mb-2">
                Emlakçı komisyon oranları, yasal düzenlemeler çerçevesinde belirlenmiş standartlar 
                olmakla birlikte, şu noktalara dikkat etmenizde fayda vardır:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Komisyon oranları pazarlığa açıktır ve emlak ofisine göre değişebilir.</li>
                <li>Komisyon ücretine %18 KDV eklenir.</li>
                <li>Gayrimenkulün değeri ve özelliklerine göre komisyon oranları değişebilir.</li>
                <li>Bazı özel durumlarda (örneğin pahalı mülkler) komisyon oranları düşürülebilir.</li>
                <li>Emlakçılık Yasası'na göre, yazılı sözleşme olmadan komisyon talep edilemez.</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Sıkça Sorulan Sorular</h2>
          
          <div className="space-y-4">
            <Card className="border border-gray-200 p-5">
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-4">
                  <Percent className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Emlakçı komisyonu yasal olarak zorunlu mudur?</h3>
                  <p className="text-gray-600">
                    Emlakçı ile çalışıldığında, komisyon ödenmesi kanunen zorunludur. Ancak komisyon oranı 
                    taraflar arasında serbestçe belirlenebilir. Emlakçı ile mutlaka yazılı bir sözleşme yapılması önerilir.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="border border-gray-200 p-5">
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-4">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Komisyon tutarı üzerinden KDV ödenir mi?</h3>
                  <p className="text-gray-600">
                    Evet, emlak komisyonu üzerinden %18 KDV ödenir. Bu, emlakçının düzenleyeceği fatura 
                    üzerinde belirtilmelidir. KDV, komisyon tutarına ek olarak hesaplanır.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="border border-gray-200 p-5">
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Emlakçı komisyonunu kim öder?</h3>
                  <p className="text-gray-600">
                    Genel uygulamada, komisyon alıcı ve satıcı tarafından eşit olarak ödenir. 
                    Kiralama işlemlerinde ise kiracı ve mal sahibi genellikle yarı yarıya öder. Ancak bu 
                    durum taraflar arasında serbestçe belirlenebilir ve sözleşmede açıkça belirtilmelidir.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="border border-gray-200 p-5">
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-4">
                  <ChartBar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">2025'te emlakçı komisyon oranları değişti mi?</h3>
                  <p className="text-gray-600">
                    2025 yılı için emlakçı komisyon oranlarında resmi bir değişiklik yapılmamıştır. Ancak 
                    piyasa koşullarına göre uygulamada farklılıklar görülebilir. Konut satışlarında %2, 
                    işyeri satışlarında %3 ve kiralamada 1 aylık kira bedeli standart oran olarak kabul edilmektedir.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-primary/10 p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-3">En Uygun POS Çözümleri</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Gayrimenkul sektöründeki işlemleriniz için uygun POS cihazı ve ödeme çözümleri hakkında bilgi edinmek ister misiniz?
            Komisyon oranları ve ödeme çözümleri hakkında detaylı bilgi için:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/pos-types/banka" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Banka POS Çözümleri
            </a>
            <a href="/calculator" className="bg-white text-primary border border-primary px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              POS Komisyon Hesaplayıcı
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmlakciKomisyon;
