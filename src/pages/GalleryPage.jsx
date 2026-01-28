import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');

  const categories = ['Tümü', 'Tesis', 'Operasyon', 'Proje'];

  const images = [
    {
      url: 'https://horizons-cdn.hostinger.com/65e9a3ac-0b9c-4a0c-9f18-0edb3111fd62/ee10fd437d871880cf7bfe26ef9a04bf.png',
      title: 'Araç Filosu',
      category: 'Tesis'
    },
    {
      url: 'https://horizons-cdn.hostinger.com/65e9a3ac-0b9c-4a0c-9f18-0edb3111fd62/c6f40ee3537eea17622defbecca8c1c0.png',
      title: 'Ekip Çalışması',
      category: 'Operasyon'
    },
    {
      url: 'https://horizons-cdn.hostinger.com/65e9a3ac-0b9c-4a0c-9f18-0edb3111fd62/cc30523534e6353d77a19ddb909e7789.png',
      title: 'Proje Yönetimi',
      category: 'Proje'
    },
    {
      url: 'https://horizons-cdn.hostinger.com/65e9a3ac-0b9c-4a0c-9f18-0edb3111fd62/128a516c529b47b58c23cb916f2ff065.png',
      title: 'Saha Operasyonu',
      category: 'Operasyon'
    },
    {
      url: 'https://horizons-cdn.hostinger.com/65e9a3ac-0b9c-4a0c-9f18-0edb3111fd62/0ae50ba31d971d9b855d6172aa939fcc.png',
      title: 'Tesis İçi',
      category: 'Tesis'
    },
    {
      url: 'https://horizons-cdn.hostinger.com/65e9a3ac-0b9c-4a0c-9f18-0edb3111fd62/f0029ba06cef4515b66ade9a65c77bd5.png',
      title: 'Büyük Proje',
      category: 'Proje'
    }
  ];

  const filteredImages = selectedCategory === 'Tümü' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Sahadan Görüntüler - Projelerimiz ve Operasyonlar | ÖZDOĞANLAR</title>
        <meta name="description" content="Projelerimiz ve operasyon alanlarımızdan kareler. Profesyonel hurda alım ve geri dönüşüm süreçlerimizi keşfedin." />
        <meta name="keywords" content="hurda alım galerisi, geri dönüşüm projeleri, hurda operasyonları, metal geri kazanım, özdoğanlar referanslar" />
        <link rel="canonical" href="https://ozdoganlar.com/galeri" />
        <meta property="og:title" content="Sahadan Görüntüler - Projelerimiz ve Operasyonlar | ÖZDOĞANLAR" />
        <meta property="og:description" content="Projelerimiz ve operasyon alanlarımızdan kareler. Profesyonel hurda alım ve geri dönüşüm süreçlerimizi keşfedin." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ozdoganlar.com/galeri" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sahadan Görüntüler - Projelerimiz ve Operasyonlar | ÖZDOĞANLAR" />
        <meta name="twitter:description" content="Projelerimiz ve operasyon alanlarımızdan kareler." />
      </Helmet>

      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Sahadan Görüntüler</h1>
            <p className="text-xl text-gray-600">
              Projelerimiz ve operasyon alanlarımızdan kareler
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-3 mb-12 flex-wrap"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-green-500 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer aspect-square"
              >
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-bold mb-2">{image.title}</h3>
                    <span className="inline-block bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                      {image.category}
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Search className="w-5 h-5 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default GalleryPage;