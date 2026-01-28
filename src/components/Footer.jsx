import React from 'react';
import { Link } from 'react-router-dom';
import { Recycle, Phone, Mail, Clock, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

function Footer() {
  const quickLinks = [
    { path: '/', label: 'Ana Sayfa' },
    { path: '/hizmetler', label: 'Hizmetlerimiz' },
    { path: '/fiyatlandirma', label: 'Fiyatlar' },
    { path: '/galeri', label: 'Galeri' },
    { path: '/iletisim', label: 'İletişim' }
  ];

  const services = [
    'Fabrika Hurda Alımı',
    'Bakır Hurda Alımı',
    'Şantiye Hurda Alımı',
    'Paslanmaz Hurda',
    'Metal Geri Kazanım'
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <Recycle className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">ÖZDOĞANLAR</span>
                <p className="text-xs text-gray-400">Geri Dönüşüm</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Profesyonel hurda ve metal geri kazanım hizmetlerinde güvenilir çözüm ortağınız.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-500 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-500 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-500 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-500 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Hızlı Linkler</span>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm hover:text-green-500 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Hizmetlerimiz</span>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-sm hover:text-green-500 transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-lg font-semibold text-white mb-4 block">İletişim</span>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:05302441477" className="text-sm hover:text-green-500 transition-colors block">
                    0530 244 14 77
                  </a>
                  <span className="text-xs text-gray-500">7/24 Hızlı İletişim</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:info@ozdoganlar.com" className="text-sm hover:text-green-500 transition-colors block">
                    info@ozdoganlar.com
                  </a>
                  <span className="text-xs text-gray-500">Detaylı Teklif İçin</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm block">Pazartesi - Cumartesi</span>
                  <span className="text-xs text-gray-500">08:00 - 18:00</span>
                  <span className="text-xs text-green-500 block mt-1">Pazar günü randevlu</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm block">İstanbul, Türkiye</span>
                  <span className="text-xs text-gray-500">Detaylı adres için arayın</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-500">
            © 2025 Özdoğanlar Geri Dönüşüm. Tüm hakları saklıdır.
            <br />
            Profesyonel hurda ve metal geri kazanım hizmetleri
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;