
import { Helmet } from "react-helmet";
import ParamGuvendeCalculator from "@/components/paramguvende/ParamGuvendeCalculator";
import CanonicalLink from "@/components/CanonicalLink";
import { getCanonicalUrl } from "@/lib/utils";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

const ParamGuvendeCalculatorPage = () => {
  return (
    <>
      <Helmet>
        <title>Sahibinden Param Güvende Komisyon Hesaplama & Oranları</title>
        <meta 
          name="description" 
          content="Sahibinden.com Param Güvende sisteminde ödenecek komisyon ve işlem bedellerini hesaplayın. Bireysel ve kurumsal satıcılar için güncel oranlar ve hesaplama aracı."
        />
        <meta 
          name="keywords" 
          content="param güvende komisyon, sahibinden param güvende, param güvende işlem bedeli, sahibinden komisyon hesaplama" 
        />
      </Helmet>
      <CanonicalLink path="/param-guvende-komisyon" />
      
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold mb-3">Sahibinden Param Güvende Komisyon Hesaplama & Oranları</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Sahibinden.com Param Güvende sistemini kullanırken ödeyeceğiniz komisyon ve işlem bedellerini hesaplayın. 
            Bireysel ve kurumsal satıcılar için güncel oranları öğrenin.
          </p>
        </div>
        
        <ParamGuvendeCalculator />
        
        <div className="mt-12 space-y-8">
          <h2 className="text-2xl font-bold mb-6">Param Güvende Komisyon Oranları Hakkında</h2>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Bireysel Satıcılar İçin Param Güvende İşlem Bedeli</h3>
            <p className="text-gray-600 mb-4">
              Bireysel satıcılar için Sahibinden - Param Güvende İşlem Bedeli için belirlenmiş oranlar tüm kategorilerde 
              geçerli olup aşağıdaki tabloda detaylı olarak yer almaktadır.
            </p>
            
            <Table className="border mb-6">
              <TableHeader>
                <TableRow>
                  <TableHead className="bg-gray-100 font-semibold">Barem Aralığı</TableHead>
                  <TableHead className="bg-gray-100 font-semibold">Komisyon</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>0-500 TL</TableCell>
                  <TableCell>15%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>501-1500 TL</TableCell>
                  <TableCell>10%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>1501-10000 TL</TableCell>
                  <TableCell>4%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>10000 TL üzeri</TableCell>
                  <TableCell>900 TL</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            
            <p className="text-gray-600 mb-4">
              Alıcının ürünü teslim alması ile başlayan yasal iade hakkı süresi olan 14 günün sonunda ürün bedelinden 
              işlem bedeli düşülerek kalan tutar satıcının hesabına aktarılır.
            </p>
            
            <p className="text-sm text-gray-500 italic">
              * 16 Ocak 2025 tarihi itibariyle bireysel hesap sahibi satıcılardan komisyon bedeli alınmaya başlanacaktır.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Kurumsal Satıcılar İçin Param Güvende İşlem Bedeli</h3>
            <p className="text-gray-600 mb-4">
              Kurumsal satıcılar için Sahibinden - Param Güvende İşlem Bedeli için belirlenmiş oranlar, ürününüzün 
              satışa sunulacağı kategoriye göre değişiklik göstermektedir. Aşağıdaki tabloda inceleyebilirsiniz.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Table className="border">
                <TableHeader>
                  <TableRow>
                    <TableHead className="bg-gray-100 font-semibold">Kategori</TableHead>
                    <TableHead className="bg-gray-100 font-semibold">Komisyon</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Antika</TableCell>
                    <TableCell>12%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Giyim & Aksesuar</TableCell>
                    <TableCell>12%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Kişisel Bakım & Kozmetik</TableCell>
                    <TableCell>12%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Kitap, Dergi & Film</TableCell>
                    <TableCell>12%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Koleksiyon</TableCell>
                    <TableCell>12%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Yiyecek & İçecek</TableCell>
                    <TableCell>12%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Anne & Bebek</TableCell>
                    <TableCell>12%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Bahçe & Yapı Market</TableCell>
                    <TableCell>12%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Diğer Her Şey</TableCell>
                    <TableCell>12%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Ev Dekorasyon</TableCell>
                    <TableCell>12%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Hobi & Oyuncak</TableCell>
                    <TableCell>12%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Saat</TableCell>
                    <TableCell>12%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              
              <Table className="border">
                <TableHeader>
                  <TableRow>
                    <TableHead className="bg-gray-100 font-semibold">Kategori</TableHead>
                    <TableHead className="bg-gray-100 font-semibold">Komisyon</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Müzik</TableCell>
                    <TableCell>11%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Ofis & Kırtasiye</TableCell>
                    <TableCell>11%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Spor</TableCell>
                    <TableCell>11%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Elektrikli Ev Aletleri</TableCell>
                    <TableCell>9%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Takı, Mücevher & Altın</TableCell>
                    <TableCell>9%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Teknik Elektronik</TableCell>
                    <TableCell>9%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Cep Telefonu</TableCell>
                    <TableCell>8%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Bilgisayar</TableCell>
                    <TableCell>8%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Ev Elektroniği</TableCell>
                    <TableCell>8%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Fotoğraf & Kamera</TableCell>
                    <TableCell>8%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Oyun & Konsol</TableCell>
                    <TableCell>8%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <p className="text-sm text-gray-500 italic mt-4">
              * Kurumsal hesap sahipleri sahibinden.com'da mağaza açmış kullanıcılardır.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Sıkça Sorulan Sorular</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Param Güvende nedir?</h4>
                <p className="text-gray-600">
                  Param Güvende, sahibinden.com üzerinden yapılan alışverişlerde güvenli ödeme sağlayan bir hizmettir. 
                  Alıcı ödemeyi yapar, satıcı ürünü gönderir, alıcı ürünü onayladıktan sonra ödeme satıcıya aktarılır.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium">Param Güvende işlem bedeli ne zaman kesilir?</h4>
                <p className="text-gray-600">
                  Param Güvende işlem bedeli, alıcının ürünü teslim alması ve onaylaması sonrasında, satıcıya yapılacak 
                  ödemeden kesilir. Ödeme, yasal iade süresi olan 14 günün sonunda yapılır.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium">Bireysel satıcılar için komisyon ne zaman başlayacak?</h4>
                <p className="text-gray-600">
                  Sahibinden.com'un açıklamasına göre, 16 Ocak 2025 tarihi itibariyle bireysel hesap sahibi satıcılardan 
                  komisyon bedeli alınmaya başlanacaktır.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium">İade durumunda komisyon iadesi yapılır mı?</h4>
                <p className="text-gray-600">
                  Ürün iade edildiğinde, Param Güvende işlem bedeli de alıcıya iade edilir. Satıcı herhangi bir komisyon 
                  ödemesi yapmaz.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold mb-4">Önemli Bilgilendirme</h4>
            <p className="text-gray-700">
              Sahibinden.com, mevcut ve yeni eklenecek olan tüm kategoriler için S - Param Güvende işlem bedeli oranlarını ve 
              taksit limitlerini değiştirme hakkını saklı tutmaktadır. En güncel bilgiler için sahibinden.com'un resmi sayfalarını 
              ziyaret ediniz.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParamGuvendeCalculatorPage;
