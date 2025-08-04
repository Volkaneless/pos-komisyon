import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import EnhancedMetaTags from "@/components/SEO/EnhancedMetaTags";
import { Calculator, Home, TrendingUp, Info } from "lucide-react";

const KiraArtisOrani = () => {
  const [eskiKira, setEskiKira] = useState("");
  const [artisOrani, setArtisOrani] = useState("");
  const [sonuc, setSonuc] = useState<{
    yeniKira: number;
    artissMiktari: number;
  } | null>(null);

  const currentMonth = new Date().toLocaleDateString('tr-TR', { month: 'long', year: 'numeric' });
  const tufeOrani = 64.7; // 2025 Ağustos TÜFE tahmini

  const hesapla = () => {
    const eski = parseFloat(eskiKira);
    const oran = parseFloat(artisOrani);
    
    if (eski && oran) {
      const artisMiktari = (eski * oran) / 100;
      const yeniKira = eski + artisMiktari;
      
      setSonuc({
        yeniKira: Math.round(yeniKira),
        artissMiktari: Math.round(artisMiktari)
      });
    }
  };

  const temizle = () => {
    setEskiKira("");
    setArtisOrani("");
    setSonuc(null);
  };

  const faqData = [
    {
      question: "2025 yılında kira artış oranı ne kadar?",
      answer: "2025 yılında kira artış oranı TÜFE'nin %25'i olarak uygulanmaktadır. Ağustos 2025 itibariyle tahmini oran %16-17 civarındadır."
    },
    {
      question: "Kira artışı nasıl hesaplanır?",
      answer: "Kira artışı, mevcut kira bedeli üzerinden TÜFE'nin %25'i oranında hesaplanır. Formül: Yeni Kira = Eski Kira + (Eski Kira × Artış Oranı / 100)"
    }
  ];

  return (
    <>
      <EnhancedMetaTags
        title={`Kira Artış Oranı Hesaplama ${currentMonth} | 2025 Kira Artışı`}
        description={`${currentMonth} kira artış oranı hesaplama aracı. 2025 TÜFE bazlı kira artış hesaplayıcısı. Güncel kira artış oranları ve hesaplama.`}
        keywords="kira artış oranı, kira artışı hesaplama, 2025 kira artışı, TÜFE kira artışı, kira hesaplayıcı"
        canonicalPath="/kira-artis-orani-hesaplama"
        schemaType="FAQPage"
        faqs={faqData}
      />

      <div className="container mx-auto px-4 pt-24 pb-12 min-h-screen">
        {/* Hero Section */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Home className="w-12 h-12 text-primary" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Kira Artış Oranı Hesaplama ({currentMonth})
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            2025 yılı güncel TÜFE bazlı kira artış hesaplayıcısı
          </p>
          <p className="text-sm md:text-base text-gray-500">
            {currentMonth} dönemine göre kira artış oranı hesaplama aracı
          </p>
        </div>

        {/* Calculator */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-6 h-6" />
                Kira Artış Hesaplayıcısı
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label>Mevcut Kira Bedeli (TL)</Label>
                <Input
                  type="number"
                  value={eskiKira}
                  onChange={(e) => setEskiKira(e.target.value)}
                  placeholder="Örn: 5000"
                />
              </div>
              
              <div>
                <Label>Artış Oranı (%)</Label>
                <Input
                  type="number"
                  value={artisOrani}
                  onChange={(e) => setArtisOrani(e.target.value)}
                  placeholder={`Örn: ${(tufeOrani * 0.25).toFixed(1)}`}
                />
                <p className="text-sm text-gray-500 mt-1">
                  2025 tahmini oran: %{(tufeOrani * 0.25).toFixed(1)}
                </p>
              </div>

              <div className="flex gap-4">
                <Button onClick={hesapla} className="flex-1">
                  <Calculator className="w-4 h-4 mr-2" />
                  Hesapla
                </Button>
                <Button onClick={temizle} variant="outline" className="flex-1">
                  Temizle
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                Hesaplama Sonucu
              </CardTitle>
            </CardHeader>
            <CardContent>
              {sonuc ? (
                <div className="space-y-4">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-3">Yeni Kira Bedeli</h3>
                    <p className="text-3xl font-bold text-primary">
                      {sonuc.yeniKira.toLocaleString('tr-TR')} TL
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Artış Miktarı</h4>
                    <p className="text-xl font-semibold text-green-600">
                      +{sonuc.artissMiktari.toLocaleString('tr-TR')} TL
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Aylık Artış</h4>
                    <p className="text-lg">
                      {Math.round(sonuc.artissMiktari / 12).toLocaleString('tr-TR')} TL/ay
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <Calculator className="w-16 h-16 mx-auto mb-4 opacity-30" />
                  <p>Hesaplama yapmak için değerleri girin</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Current Rates */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle>2025 Kira Artış Oranları</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <h3 className="font-semibold text-blue-800 mb-2">TÜFE Oranı</h3>
                  <p className="text-2xl font-bold text-blue-600">%{tufeOrani}</p>
                  <p className="text-sm text-blue-600">({currentMonth})</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <h3 className="font-semibold text-green-800 mb-2">Kira Artış Oranı</h3>
                  <p className="text-2xl font-bold text-green-600">%{(tufeOrani * 0.25).toFixed(1)}</p>
                  <p className="text-sm text-green-600">(TÜFE'nin %25'i)</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <h3 className="font-semibold text-orange-800 mb-2">Geçerlilik</h3>
                  <p className="text-lg font-bold text-orange-600">{currentMonth}</p>
                  <p className="text-sm text-orange-600">Güncel dönem</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Info Section */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="w-6 h-6" />
                Kira Artışı Hakkında Önemli Bilgiler
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">📋 Yasal Düzenlemeler</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Kira artışı yıllık %25 ile sınırlı</li>
                    <li>• TÜFE'nin %25'i oranında artış uygulanır</li>
                    <li>• 12 aylık süre dolmadan artış yapılamaz</li>
                    <li>• Yazılı bildirim zorunluluğu</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">⚖️ Kiracı Hakları</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Belirlenen orandan fazla artış reddedilebilir</li>
                    <li>• Tahliye davasına karşı koruma</li>
                    <li>• Uzlaşma hakkı</li>
                    <li>• Hukuki başvuru imkanı</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Kira Artışı Hakkında SSS
            </h2>
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Warning */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 text-center">
          <h3 className="font-semibold text-amber-800 mb-2">⚠️ Önemli Uyarı</h3>
          <p className="text-amber-700">
            Bu hesaplama aracı bilgilendirme amaçlıdır. Kesin hukuki bilgi için hukuk danışmanı ile görüşünüz. 
            TÜFE oranları TÜİK tarafından aylık olarak güncellenmektedir.
          </p>
        </div>
      </div>
    </>
  );
};

export default KiraArtisOrani;