import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Clock, Shield, Users, CheckCircle, Star, TrendingUp, Award, MessageCircle } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import { Button } from '@/components/ui/button';

function HomePage() {
  const stats = [
    { icon: Clock, label: '7/24 Hizmet', value: '7/24' },
    { icon: Shield, label: 'Güvenilir', value: '%100' },
    { icon: Users, label: 'Müşteri', value: '500+' }
  ];

  const features = [
    {
      icon: CheckCircle,
      title: 'Anında Değerleme',
      description: 'Hurdalarınız için hızlı ve adil fiyat teklifi'
    },
    {
      icon: TrendingUp,
      title: 'Güncel Fiyatlar',
      description: 'Piyasa fiyatlarına göre en iyi ödeme'
    },
    {
      icon: Shield,
      title: 'Güvenli İşlem',
      description: 'Yasal ve güvenilir alım-satım süreci'
    }
  ];

  const testimonials = [
    {
      name: 'Ahmet Yılmaz',
      company: 'ABC İnşaat',
      text: 'Yıllardır çalıştığımız en güvenilir geri dönüşüm firması. Her zaman piyasanın en iyi fiyatını veriyorlar.',
      rating: 5
    },
    {
      name: 'Mehmet Demir',
      company: 'XYZ Metal',
      text: '7/24 hizmet vermeleri ve hızlı nakliye imkanları sayesinde işlerimiz hiç aksamadı.',
      rating: 5
    },
    {
      name: 'Ayşe Kaya',
      company: 'Kaya Fabrikası',
      text: 'Profesyonel ekip, adil fiyatlar ve zamanında ödeme. Kesinlikle tavsiye ederim.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>ÖZDOĞANLAR Geri Dönüşüm | İstanbul'un En İyi Hurda Alım Firması</title>
        <meta name="description" content="İstanbul'da profesyonel hurda ve metal geri dönüşümü. 20+ yıllık tecrübe, 7/24 hizmet, anında ödeme. Fabrika, şantiye ve kurumsal alımlar. ☎️ 0530 244 14 77" />
        <meta name="keywords" content="hurda alımı, metal geri dönüşümü, istanbul hurda, demir hurda, bakır hurda, alüminyum hurda, geri dönüşüm firması" />
        <meta property="og:title" content="ÖZDOĞANLAR Geri Dönüşüm | En İyi Fiyatlarla Hurda Alımı" />
        <meta property="og:description" content="İstanbul'da profesyonel hurda ve metal geri dönüşümü. 7/24 hizmet, anında değerleme ve ödeme." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ozdoganlar.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ÖZDOĞANLAR Geri Dönüşüm | En İyi Fiyatlarla Hurda Alımı" />
        <meta name="twitter:description" content="İstanbul'da profesyonel hurda ve metal geri dönüşümü. 7/24 hizmet, anında değerleme ve ödeme." />
        <link rel="canonical" href="https://ozdoganlar.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "ÖZDOĞANLAR Geri Dönüşüm",
            "description": "Profesyonel hurda ve metal geri kazanım hizmetleri",
            "url": "https://ozdoganlar.com",
            "telephone": "+905302441477",
            "email": "info@ozdoganlar.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "İstanbul",
              "addressCountry": "TR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "addressCountry": "TR"
            },
            "openingHours": "Mo-Sa 08:00-18:00",
            "priceRange": "$$",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "500"
            },
            "areaServed": {
              "@type": "City",
              "name": "İstanbul"
            }
          })}
        </script>
      </Helmet>

      <section 
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0066cc 0%, #0099ff 100%)'
        }}
      >
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1539295914697-b4acb8513a44"
            alt="ÖZDOĞANLAR Geri Dönüşüm - Endüstriyel hurda geri dönüşüm tesisi"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 mt-8 sm:mt-12 md:mt-16"
              >
                <span className="text-2xl">🏆</span>
                <span className="text-sm font-medium">Türkiye'nin Güvenilir Geri Dönüşüm Merkezi</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Profesyonel
                <br />
                <span className="text-green-300">Geri Dönüşüm</span>
                <br />
                Çözümleri
              </h1>

              <p className="text-lg md:text-xl mb-8 text-white/90">
                Hurda ve metal geri kazanımında 20+ yıllık tecrübe. Fabrika, şantiye ve kurumsal işletmeler için tam hizmet.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => window.location.href = 'tel:05302441477'}
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-xl shadow-xl flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Hemen Ara
                </Button>
                <Button
                  onClick={() => window.open('https://wa.me/905302441477', '_blank')}
                  className="bg-green-500 text-white hover:bg-green-600 px-8 py-6 text-lg font-semibold rounded-xl shadow-xl flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              id="quote-form"
            >
              <QuoteForm variant="hero" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-16 mb-8 md:mb-12 lg:mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-green-300" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Neden ÖZDOĞANLAR?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              20 yılı aşkın tecrübemiz ve güvenilir hizmetimizle yanınızdayız
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-4">
              <Award className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-green-600">Müşteri Yorumları</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Müşterilerimiz Ne Diyor?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Binlerce memnun müşterimizden bazılarının deneyimleri
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 relative"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-blue-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Hemen Fiyat Teklifi Alın!
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Hurdalarınız için en iyi fiyatı almak sadece bir telefon kadar yakın. 
              7/24 hizmetinizdeyiz.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => window.location.href = 'tel:05302441477'}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-xl shadow-xl flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                0530 244 14 77
              </Button>
              <Button
                onClick={() => window.open('https://wa.me/905302441477', 'Merhaba, ')}
                className="bg-green-600 text-white hover:bg-green-700 px-8 py-6 text-lg font-semibold rounded-xl shadow-xl flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp ile Yaz
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default HomePage;