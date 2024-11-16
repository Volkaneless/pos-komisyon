import { Mail } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Helmet } from "react-helmet";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Mesajınız alındı",
      description: "En kısa sürede size geri dönüş yapacağız.",
    });
  };

  return (
    <>
      <Helmet>
        <title>İletişim | POS Komisyon - Bize Ulaşın</title>
        <meta name="description" content="POS komisyon oranları ve POS cihazları hakkında sorularınız için bizimle iletişime geçin. Size en kısa sürede yardımcı olalım." />
        <link rel="canonical" href="https://poskomisyon.com/contact" />
      </Helmet>

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mail className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold">İletişim</h1>
          </div>
          <p className="text-xl text-gray-600">
            Sorularınız için bize ulaşın
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">İletişim Bilgileri</h2>
              <div className="space-y-4">
                <p>
                  <strong>Adres:</strong><br />
                  Maslak, Büyükdere Cad. No:123<br />
                  Sarıyer/İstanbul
                </p>
                <p>
                  <strong>Telefon:</strong><br />
                  +90 (212) 123 45 67
                </p>
                <p>
                  <strong>E-posta:</strong><br />
                  info@poscompare.com
                </p>
              </div>
            </div>

            <div className="glass-card p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">Bize Yazın</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="input-field w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="input-field w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="input-field w-full"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="button-primary w-full">
                  Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
