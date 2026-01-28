import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

function QuoteForm({ variant = 'default' }) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    scrapType: '',
    message: ''
  });

  const scrapTypes = [
    'Fabrika Hurdası',
    'Bakır ve Kablo',
    'Şantiye Hurdası',
    'Demir ve Çelik',
    'Paslanmaz',
    'Alüminyum',
    'Pirinç (Sarı)',
    'Bronz',
    'Kurşun',
    'Değerli Madenler',
    'Karışık Hurda'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.scrapType) {
      toast({
        title: "Eksik Bilgi",
        description: "Lütfen zorunlu alanları doldurun.",
        variant: "destructive"
      });
      return;
    }

    // Store in localStorage
    const submissions = JSON.parse(localStorage.getItem('quoteSubmissions') || '[]');
    submissions.push({
      ...formData,
      date: new Date().toISOString()
    });
    localStorage.setItem('quoteSubmissions', JSON.stringify(submissions));

    toast({
      title: "Teklif Talebiniz Alındı! ✅",
      description: "En kısa sürede size dönüş yapacağız.",
      className: "bg-green-500 text-white"
    });

    setFormData({
      name: '',
      phone: '',
      email: '',
      scrapType: '',
      message: ''
    });
  };

  const containerClass = variant === 'hero' 
    ? 'bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-2xl'
    : 'bg-white rounded-2xl p-6 shadow-lg border border-gray-200';

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className={containerClass}
    >
      <h3 className={`text-xl font-bold mb-4 ${variant === 'hero' ? 'text-white' : 'text-gray-900'}`}>
        Hızlı Teklif Formu
      </h3>
      
      <div className="space-y-4">
        <div>
          <label className={`block text-sm font-medium mb-2 ${variant === 'hero' ? 'text-white' : 'text-gray-700'}`}>
            Adınız Soyadınız *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/90 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 placeholder-gray-500"
            placeholder="Adınızı girin"
            required
          />
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${variant === 'hero' ? 'text-white' : 'text-gray-700'}`}>
            Telefon Numaranız *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/90 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 placeholder-gray-500"
            placeholder="05XX XXX XX XX"
            required
          />
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${variant === 'hero' ? 'text-white' : 'text-gray-700'}`}>
            E-posta Adresiniz
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/90 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 placeholder-gray-500"
            placeholder="ornek@email.com"
          />
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${variant === 'hero' ? 'text-white' : 'text-gray-700'}`}>
            Hurda Türünü Seçin *
          </label>
          <select
            name="scrapType"
            value={formData.scrapType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/90 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900"
            required
          >
            <option value="">Seçiniz</option>
            {scrapTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${variant === 'hero' ? 'text-white' : 'text-gray-700'}`}>
            Mesajınız
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-3 rounded-lg bg-white/90 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 placeholder-gray-500 resize-none"
            placeholder="Hurda miktarı, konum ve diğer detaylar..."
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
        >
          <Send className="w-5 h-5" />
          Teklif İste
        </Button>
      </div>
    </motion.form>
  );
}

export default QuoteForm;