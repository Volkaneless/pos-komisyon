
import { useDolap } from "./DolapContext";

const ImportantInfo = () => {
  const { userRole } = useDolap();

  return (
    <div className="mt-8 p-6 bg-gray-50 rounded-lg border">
      <h4 className="font-semibold mb-3">Önemli Bilgiler</h4>
      <ul className="space-y-2 text-sm">
        {userRole === "seller" ? (
          <>
            <li>• 4999 TL ve altındaki tüm ürünler için %12 oranında hizmet bedeli kesilmektedir</li>
            <li>• 5000 TL ve üzeri fiyatlı satışı yapılan tüm ürünlerde sabit 600 TL hizmet bedeli düşülmektedir</li>
            <li>• Bu rakamlar, satıştan gelen kazançtan düşülür ve kalan para hesabınıza aktarılır</li>
            <li>• Kargo ücretleri genellikle alıcı tarafından ödenir</li>
          </>
        ) : (
          <>
            <li>• 0 - 149 TL arasında satın alınan her bir ürün için 9.99 TL hizmet bedeli düşülür</li>
            <li>• 150 - 249 TL arasında alınan ürünler için ise 16.99 TL komisyon oranı düşülmektedir</li>
            <li>• 250 - 4999 TL arasındaki ürünler için %8 oranında komisyon kesilir</li>
            <li>• 5000 TL ve üzerinde yaptığınız alışverişler için sabit 600 TL hizmet bedeli uygulanır</li>
          </>
        )}
      </ul>
    </div>
  );
};

export default ImportantInfo;
