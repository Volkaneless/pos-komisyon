
import { Mail, Phone, MapPin, Clock, MessageSquare, Users, Globe } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import MetaTags from "@/components/MetaTags";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    processing: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormState(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, processing: true }));
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted", formState);
      toast({
        title: "Mesajınız alındı",
        description: "En kısa sürede size geri dönüş yapacağız."
      });
      
      // Reset form
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        processing: false
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Adres",
      content: "Maslak, Büyükdere Cad. No:123\nSarıyer/İstanbul"
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Telefon",
      content: "+90 552 493 26 18"
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "E-posta",
      content: "volkaneles0@gmail.com"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Çalışma Saatleri",
      content: "Pazartesi - Cuma: 09:00 - 18:00\nCumartesi: 09:00 - 13:00"
    }
  ];
  
  const supportOptions = [
    {
      icon: <MessageSquare className="w-6 h-6 text-primary" />,
      title: "Genel Sorular",
      description: "POS cihazları veya komisyon oranları hakkında sorularınız mı var?",
      action: "İletişime Geçin",
      link: "#contact-form"
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "İş Birlikleri",
      description: "İş birliği veya ortaklık teklifleri için bizimle iletişime geçin.",
      action: "İş Birliği Teklifi Gönderin",
      link: "#contact-form"
    },
    {
      icon: <Globe className="w-6 h-6 text-primary" />,
      title: "Teknik Destek",
      description: "Hesaplayıcılar veya site kullanımı ile ilgili teknik destek alın.",
      action: "Destek Alın",
      link: "#contact-form"
    }
  ];

  return <>
      <MetaTags title="İletişim | POS Komisyon - Bize Ulaşın" description="POS komisyon oranları ve POS cihazları hakkında sorularınız için bizimle iletişime geçin. Size en kısa sürede yardımcı olalım." canonicalPath="/contact" priority={20} />

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Bizimle İletişime Geçin</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            POS cihazları ve komisyon oranları hakkında sorularınız mı var? Size yardımcı olmaktan mutluluk duyarız.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {supportOptions.map((option, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all duration-200">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-primary/10 rounded-full p-4 mb-4">
                  {option.icon}
                </div>
                <h2 className="text-xl font-semibold mb-2">{option.title}</h2>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <a href={option.link} className="text-primary font-medium hover:underline">
                  {option.action}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-12">
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-xl space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600 whitespace-pre-line">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card p-8 rounded-xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.1461981207147!2d29.0196383!3d41.1115863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5c7b4b09f3b%3A0x5f3b5b0f5fb6f84f!2sMaslak%2C%20B%C3%BCy%C3%BCkdere%20Cd.%2C%2034485%20Sar%C4%B1yer%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1647523697854!5m2!1str!2str" 
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                className="rounded-lg"
                title="Ofis konumumuz"
              />
            </div>
          </div>

          <div className="glass-card p-8 rounded-xl" id="contact-form">
            <h2 className="text-2xl font-semibold mb-6">Bize Mesaj Gönderin</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ad Soyad <span className="text-red-500">*</span></Label>
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="Adınız ve soyadınız" 
                    value={formState.name}
                    onChange={handleChange}
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-posta <span className="text-red-500">*</span></Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="E-posta adresiniz"
                    value={formState.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="Telefon numaranız"
                    value={formState.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Konu <span className="text-red-500">*</span></Label>
                  <select
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Seçiniz</option>
                    <option value="general">Genel Soru</option>
                    <option value="support">Teknik Destek</option>
                    <option value="business">İş Birliği</option>
                    <option value="feedback">Geri Bildirim</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mesajınız <span className="text-red-500">*</span></Label>
                <Textarea 
                  id="message" 
                  placeholder="Mesajınızı buraya yazın..." 
                  className="min-h-[150px]"
                  value={formState.message}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="privacy" className="rounded border-gray-300" required />
                <label htmlFor="privacy" className="text-sm text-gray-700">
                  <a href="/gizlilik-politikasi" className="text-primary hover:underline" target="_blank">Gizlilik Politikası</a>'nı okudum ve kabul ediyorum.
                </label>
              </div>

              <Button 
                type="submit" 
                className="w-full"
                disabled={formState.processing}
              >
                {formState.processing ? 'Gönderiliyor...' : 'Gönder'}
              </Button>
            </form>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Sık Sorulan Sorular</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-8">
            <div>
              <h3 className="text-lg font-medium mb-2">Ne kadar sürede dönüş yapıyorsunuz?</h3>
              <p className="text-gray-600">Genellikle 24 saat içerisinde tüm mesajlara dönüş yapmaya çalışıyoruz.</p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">POS başvurusu yapabilir miyim?</h3>
              <p className="text-gray-600">Sitemiz üzerinden direkt başvuru yapamıyorsunuz, ancak size en uygun POS çözümü için yönlendirme yapabiliriz.</p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Ücretsiz danışmanlık hizmeti veriyor musunuz?</h3>
              <p className="text-gray-600">Evet, işletmeniz için en uygun POS çözümü konusunda ücretsiz danışmanlık hizmeti veriyoruz.</p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Web sitenizde reklam verebilir miyim?</h3>
              <p className="text-gray-600">İş birliği ve reklam talepleriniz için bizimle iletişime geçebilirsiniz.</p>
            </div>
          </div>
        </div>
      </div>
    </>;
};
export default Contact;
