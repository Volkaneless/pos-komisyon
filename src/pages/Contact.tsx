import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import MetaTags from "@/components/MetaTags";
const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    toast({
      title: "Mesajınız alındı",
      description: "En kısa sürede size geri dönüş yapacağız."
    });
  };
  return <>
      <MetaTags title="İletişim | POS Komisyon - Bize Ulaşın" description="POS komisyon oranları ve POS cihazları hakkında sorularınız için bizimle iletişime geçin. Size en kısa sürede yardımcı olalım." canonicalPath="/contact" priority={20} />

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Bizimle İletişime Geçin</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            POS cihazları ve komisyon oranları hakkında sorularınız mı var? Size yardımcı olmaktan mutluluk duyarız.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-xl space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Adres</h3>
                  <p className="text-gray-600">
                    Maslak, Büyükdere Cad. No:123<br />
                    Sarıyer/İstanbul
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Telefon</h3>
                  <p className="text-gray-600">+90 (212) 123 45 67</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">E-posta</h3>
                  <p className="text-gray-600">volkaneles0@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Çalışma Saatleri</h3>
                  <p className="text-gray-600">
                    Pazartesi - Cuma: 09:00 - 18:00<br />
                    Cumartesi: 09:00 - 13:00
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-xl">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.1461981207147!2d29.0196383!3d41.1115863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5c7b4b09f3b%3A0x5f3b5b0f5fb6f84f!2sMaslak%2C%20B%C3%BCy%C3%BCkdere%20Cd.%2C%2034485%20Sar%C4%B1yer%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1647523697854!5m2!1str!2str" width="100%" height="300" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-lg"></iframe>
            </div>
          </div>

          <div className="glass-card p-8 rounded-xl">
            <h2 className="text-2xl font-semibold mb-6">Bize Mesaj Gönderin</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Ad Soyad</Label>
                <Input id="name" type="text" placeholder="Adınız ve soyadınız" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-posta</Label>
                <Input id="email" type="email" placeholder="E-posta adresiniz" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Telefon</Label>
                <Input id="phone" type="tel" placeholder="Telefon numaranız" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mesajınız</Label>
                <Textarea id="message" placeholder="Mesajınızı buraya yazın..." className="min-h-[150px]" required />
              </div>

              <button type="submit" className="button-primary w-full">
                Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </>;
};
export default Contact;