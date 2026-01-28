import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, Clock, AlertCircle, MapPin } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';

function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      value: '0530 244 14 77',
      subtitle: '7/24 Hızlı İletişim',
      link: 'tel:05302441477',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-500'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '0530 244 14 77',
      subtitle: 'Fotoğraf Gönderin',
      link: 'https://wa.me/905302441477',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-500'
    },
    {
      icon: Mail,
      title: 'E-posta',
      value: 'info@ozdoganlar.com',
      subtitle: 'Detaylı Teklif İçin',
      link: 'mailto:info@ozdoganlar.com',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-500'
    },
    {
      icon: Clock,
      title: 'Çalışma Saatleri',
      value: 'Pazartesi - Cumartesi',
      subtitle: '08:00 - 18:00',
      extra: 'Pazar günü randevlu',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-500'
    },
    {
      icon: MapPin,
      title: 'Adres',
      value: 'İstanbul, Türkiye',
      subtitle: 'Detaylı adres için arayın',
      link: null,
      bgColor: 'bg-red-50',
      iconColor: 'text-red-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>İletişim - Bizimle İletişime Geçin | ÖZDOĞANLAR</title>
        <meta name="description" content="Bizimle iletişime geçin, size en kısa sürede dönüş yapalım. 7/24 hızlı teklif hattı: 0530 244 14 77" />
        <meta name="keywords" content="özdoğanlar iletişim, hurda alım iletişim, hurda teklif, istanbul hurda telefon, 0530 244 14 77" />
        <link rel="canonical" href="https://ozdoganlar.com/iletisim" />
        <meta property="og:title" content="İletişim - Bizimle İletişime Geçin | ÖZDOĞANLAR" />
        <meta property="og:description" content="Bizimle iletişime geçin, size en kısa sürede dönüş yapalım. 7/24 hızlı teklif hattı: 0530 244 14 77" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ozdoganlar.com/iletisim" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="İletişim - Bizimle İletişime Geçin | ÖZDOĞANLAR" />
        <meta name="twitter:description" content="7/24 hızlı teklif hattı: 0530 244 14 77" />
      </Helmet>

      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">İletişim</h1>
            <p className="text-xl text-gray-600">
              Bizimle iletişime geçin, size en kısa sürede dönüş yapalım
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">İletişim Bilgileri</h2>
              
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className={`${info.bgColor} rounded-xl p-6 shadow-sm hover:shadow-md transition-all`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${info.iconColor} bg-white rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <info.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-lg font-bold text-green-600 hover:text-green-700 transition-colors block"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-lg font-bold text-gray-900">{info.value}</p>
                        )}
                        <p className="text-sm text-gray-600">{info.subtitle}</p>
                        {info.extra && (
                          <p className="text-xs text-green-600 mt-1">{info.extra}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-green-50 border border-green-200 rounded-xl p-6"
              >
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Acil Durum Hattı</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Acil hurda ihtiyaçlarınız için 7/24 ulaşabilirsiniz.
                    </p>
                    <a 
                      href="tel:05302441477"
                      className="text-lg font-bold text-green-600 hover:text-green-700"
                    >
                      0530 244 14 77
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Hızlı Teklif Formu</h2>
              <QuoteForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;