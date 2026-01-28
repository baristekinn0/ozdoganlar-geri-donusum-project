import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Factory, Zap, HardHat, Wrench, FlaskConical, Recycle, CheckCircle, Gem } from 'lucide-react';

function ServicesPage() {
  const services = [
    {
      icon: Factory,
      title: 'Fabrika & Tesis Hurda',
      description: 'Üretim hatları, çelik konstrüksiyon, makine parkı ve tesis içi metal ekipmanların profesyonel sökümü ve hurda yönetimi.',
      features: [
        'Üretim hattı sökümü',
        'Çelik konstrüksiyon',
        'Makine demontajı'
      ],
      image: 'https://horizons-cdn.hostinger.com/65e9a3ac-0b9c-4a0c-9f18-0edb3111fd62/ee10fd437d871880cf7bfe26ef9a04bf.png',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Zap,
      title: 'Bakır & Kablo Hurda',
      description: 'Enerji, data ve endüstriyel kablo, parlak bakır, kablo hatlarının güvenli sökümü ve en yüksek fiyatla değerlendirilmesi.',
      features: [
        'Enerji kabloları',
        'Elektrik panoları',
        'Bakır hatlar'
      ],
      image: 'https://horizons-cdn.hostinger.com/65e9a3ac-0b9c-4a0c-9f18-0edb3111fd62/c6f40ee3537eea17622defbecca8c1c0.png',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: HardHat,
      title: 'Şantiye & İnşaat',
      description: 'Kaba inşaat, demir-çelik, profil ve çelik şantiye hurdalarının planlı şekilde sahadan alınması ve nakliyesi.',
      features: [
        'İnşaat demirleri',
        'Profil ve çelik',
        'Karışık hurda'
      ],
      image: 'https://horizons-cdn.hostinger.com/65e9a3ac-0b9c-4a0c-9f18-0edb3111fd62/cc30523534e6353d77a19ddb909e7789.png',
      color: 'from-gray-700 to-gray-800'
    },
    {
      icon: Wrench,
      title: 'Demir & Çelik Hurda',
      description: 'DKP, ekstra, pik, talaş ve karışık demir esaslarının soğuk hadde ve et dökümde kullanılması için yönetim.',
      features: [
        'Üretim hattı sökümü',
        'Çelik konstrüksiyon',
        'Makine demontajı'
      ],
      image: 'https://horizons-cdn.hostinger.com/65e9a3ac-0b9c-4a0c-9f18-0edb3111fd62/128a516c529b47b58c23cb916f2ff065.png',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FlaskConical,
      title: 'Paslanmaz & Krom',
      description: 'Gıda, kimya ve proses tesislerindeki paslanmaz çelik, 304 kalite, krom ve değerli metal alaşımları.',
      features: [
        'Enerji kabloları',
        'Elektrik panoları',
        'Bakır hatlar'
      ],
      image: 'https://horizons-cdn.hostinger.com/65e9a3ac-0b9c-4a0c-9f18-0edb3111fd62/0ae50ba31d971d9b855d6172aa939fcc.png',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Gem,
      title: 'Maden & Değerli Metaller',
      description: 'Bakır, sarı, alüminyum, pirinç gibi değerli madenlerin profesyonel alımı ve en yüksek fiyatla değerlendirilmesi.',
      features: [
        'Bakır ve türevleri',
        'Sarı metal (Pirinç)',
        'Alüminyum alaşımları'
      ],
      image: 'https://horizons-cdn.hostinger.com/65e9a3ac-0b9c-4a0c-9f18-0edb3111fd62/c6f40ee3537eea17622defbecca8c1c0.png',
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: Recycle,
      title: 'Metal Geri Kazanım',
      description: 'Hurdaya ayrılan metal stoklarının geri kazanımı. En yüksek verim ve çevre dostu süreç yönetimi.',
      features: [
        'İnşaat demirleri',
        'Profil ve çelik',
        'Karışık hurda'
      ],
      image: 'https://horizons-cdn.hostinger.com/65e9a3ac-0b9c-4a0c-9f18-0edb3111fd62/f0029ba06cef4515b66ade9a65c77bd5.png',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Hizmetlerimiz - Endüstriyel ve Kurumsal Geri Dönüşüm | ÖZDOĞANLAR</title>
        <meta name="description" content="Endüstriyel ve kurumsal geri dönüşüm ihtiyaçlarınız için kapsamlı çözümler. Fabrika, bakır, şantiye, demir, paslanmaz ve metal geri kazanım hizmetleri." />
        <meta name="keywords" content="fabrika hurdası, bakır hurda, şantiye hurdası, demir hurda, paslanmaz hurda, metal geri kazanım, maden alımı, hurda hizmetleri istanbul" />
        <link rel="canonical" href="https://ozdoganlar.com/hizmetler" />
        <meta property="og:title" content="Hizmetlerimiz - Endüstriyel ve Kurumsal Geri Dönüşüm | ÖZDOĞANLAR" />
        <meta property="og:description" content="Endüstriyel ve kurumsal geri dönüşüm ihtiyaçlarınız için kapsamlı çözümler. Fabrika, bakır, şantiye, demir, paslanmaz ve metal geri kazanım hizmetleri." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ozdoganlar.com/hizmetler" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hizmetlerimiz - Endüstriyel ve Kurumsal Geri Dönüşüm | ÖZDOĞANLAR" />
        <meta name="twitter:description" content="Endüstriyel ve kurumsal geri dönüşüm ihtiyaçlarınız için kapsamlı çözümler." />
      </Helmet>

      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Hizmetlerimiz</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Endüstriyel ve kurumsal geri dönüşüm ihtiyaçlarınız için kapsamlı çözümler
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-t-4 border-green-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-70`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl">
                      <service.icon className="w-10 h-10 text-green-500" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;