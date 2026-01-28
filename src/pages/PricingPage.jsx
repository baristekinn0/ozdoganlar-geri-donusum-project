import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Package, Zap, FlaskConical, Boxes, FileStack, Wrench, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

function PricingPage() {
  const prices = [
    {
      icon: Package,
      name: 'Ekstra Demir',
      category: 'Birinci sınıf',
      price: '-- TL',
      gradient: 'from-red-400 to-red-500',
      iconBg: 'bg-red-50',
      iconColor: 'text-red-500'
    },
    {
      icon: Zap,
      name: 'Bakır',
      category: 'Parlak bakır',
      price: '-- TL',
      gradient: 'from-yellow-400 to-yellow-500',
      iconBg: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      icon: FlaskConical,
      name: 'Paslanmaz',
      category: '304 kalite',
      price: '-- TL',
      gradient: 'from-purple-400 to-purple-500',
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-500'
    },
    {
      icon: Boxes,
      name: 'Alüminyum',
      category: 'Temiz alüminyum',
      price: '-- TL',
      gradient: 'from-blue-400 to-blue-500',
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-500'
    },
    {
      icon: FileStack,
      name: 'DKP Sac',
      category: 'Soğuk hadde',
      price: '-- TL',
      gradient: 'from-green-400 to-green-500',
      iconBg: 'bg-green-50',
      iconColor: 'text-green-500'
    },
    {
      icon: Wrench,
      name: 'Karışık Demir',
      category: 'Çeşitli türler',
      price: '-- TL',
      gradient: 'from-indigo-400 to-indigo-500',
      iconBg: 'bg-indigo-50',
      iconColor: 'text-indigo-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Güncel Hurda Fiyatları - Anlık Piyasa Fiyatlarımız | ÖZDOĞANLAR</title>
        <meta name="description" content="Anlık piyasa fiyatlarımız - Son güncelleme: Bugün. Demir, bakır, paslanmaz, alüminyum ve diğer metal fiyatları." />
        <meta name="keywords" content="hurda fiyatları, demir fiyatı, bakır fiyatı, paslanmaz fiyatı, alüminyum fiyatı, pirinç fiyatı, güncel hurda fiyatları, metal fiyatları istanbul" />
        <link rel="canonical" href="https://ozdoganlar.com/fiyatlandirma" />
        <meta property="og:title" content="Güncel Hurda Fiyatları - Anlık Piyasa Fiyatlarımız | ÖZDOĞANLAR" />
        <meta property="og:description" content="Anlık piyasa fiyatlarımız - Son güncelleme: Bugün. Demir, bakır, paslanmaz, alüminyum ve diğer metal fiyatları." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ozdoganlar.com/fiyatlandirma" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Güncel Hurda Fiyatları - Anlık Piyasa Fiyatlarımız | ÖZDOĞANLAR" />
        <meta name="twitter:description" content="Anlık piyasa fiyatlarımız. Demir, bakır, paslanmaz, alüminyum ve diğer metal fiyatları." />
      </Helmet>

      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Güncel Hurda Fiyatları</h1>
            <p className="text-xl text-gray-600 mb-2">
              Anlık piyasa fiyatlarımız - Son güncelleme: <span className="font-semibold text-green-600">Bugün</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {prices.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 ${item.iconBg} rounded-xl flex items-center justify-center`}>
                    <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-white">{item.price}</div>
                    <div className="text-sm text-white/80">kg başına</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{item.name}</h3>
                <p className="text-white/90 text-sm mb-4">{item.category}</p>
                <Button 
                  variant="secondary"
                  className="w-full bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-sm"
                >
                  Teklif Al
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center"
          >
            <p className="text-gray-700 mb-4 flex items-center justify-center gap-2">
              <span className="text-2xl">ℹ️</span>
              <span>Fiyatlar piyasa koşullarına göre değişkenlik gösterebilir</span>
            </p>
            <Button 
              onClick={() => window.location.href = 'tel:05302441477'}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg rounded-xl flex items-center gap-2 mx-auto"
            >
              <Phone className="w-5 h-5" />
              Kesin Fiyat İçin Ara
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default PricingPage;