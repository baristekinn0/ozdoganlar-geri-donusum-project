# 🌿 ÖZDOĞANLAR Geri Dönüşüm Web Sitesi

Modern, profesyonel ve kullanıcı dostu geri dönüşüm firması web sitesi.

## 🚀 Özellikler

### ✨ Yeni Eklenen Özellikler
- **WhatsApp Entegrasyonu**: Header ve floating butonlarda WhatsApp desteği
- **Gelişmiş Header**: Telefon numarası ve WhatsApp butonları
- **Müşteri Yorumları**: Ana sayfada sosyal kanıt bölümü
- **Özellik Kartları**: "Neden ÖZDOĞANLAR?" bölümü
- **Güçlü CTA**: Call-to-action bölümleri
- **SEO Optimizasyonu**: Meta etiketleri, canonical URL, Open Graph
- **Animasyonlu Floating Butonlar**: Tooltip'li, animasyonlu iletişim butonları
- **Responsive Tasarım**: Mobil, tablet ve masaüstü uyumlu

### 📱 Temel Özellikler
- React 18 + Vite
- Tailwind CSS ile modern tasarım
- Framer Motion animasyonlar
- Radix UI komponentleri
- React Router ile sayfa yönetimi
- SEO dostu yapı

## 💻 Kurulum

### Gereksinimler
- Node.js 16+ 
- npm veya yarn

### Adımlar

1. **Bağımlılıkları yükleyin:**
```bash
npm install
```

2. **Geliştirme sunucusunu başlatın:**
```bash
npm run dev
```

3. **Tarayıcıda açın:**
```
http://localhost:3000
```

## 🏗️ Production Build

Canlı yayın için optimize edilmiş build:

```bash
npm run build
```

Build dosyaları `dist/` klasöründe oluşturulacak.

Önizleme için:
```bash
npm run preview
```

## 📂 Proje Yapısı

```
ozdoganlar-geri-donusum-project/
├── src/
│   ├── components/          # React komponentleri
│   │   ├── Header.jsx       # Navbar ve menü
│   │   ├── Footer.jsx       # Alt bilgi
│   │   ├── FloatingActionButton.jsx  # Sabit iletişim butonları
│   │   └── ui/              # UI komponentleri
│   ├── pages/               # Sayfa komponentleri
│   │   ├── HomePage.jsx     # Ana sayfa
│   │   ├── ServicesPage.jsx # Hizmetler
│   │   ├── PricingPage.jsx  # Fiyatlandırma
│   │   ├── GalleryPage.jsx  # Galeri
│   │   └── ContactPage.jsx  # İletişim
│   ├── App.jsx              # Ana uygulama
│   └── main.jsx             # Giriş noktası
├── index.html               # HTML şablonu
└── package.json             # Bağımlılıklar
```

## 🎨 Özelleştirme

### Renkler
Tailwind config dosyasında renkleri özelleştirebilirsiniz:
```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: '#10b981', // Yeşil
      secondary: '#3b82f6', // Mavi
    }
  }
}
```

### İletişim Bilgileri
Telefon numarası ve WhatsApp linklerini güncellemek için:

**Header.jsx** ve **FloatingActionButton.jsx** dosyalarında:
```javascript
// Telefon numarası
tel:05302441477

// WhatsApp
https://wa.me/905302441477
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Teknolojiler

- **React 18**: Modern React özellikleri
- **Vite**: Hızlı build tool
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animasyonlar
- **React Router**: Sayfa yönlendirme
- **Lucide React**: İkonlar
- **Radix UI**: Erişilebilir UI komponentleri

## 🚀 Canlıya Alma Önerileri

### 1. Hosting Seçenekleri
- **Vercel**: En kolay, otomatik deploy
- **Netlify**: Ücretsiz SSL, CDN
- **GitHub Pages**: Ücretsiz hosting
- **Hostinger/Turhost**: Türkiye sunucuları

### 2. Domain Ayarları
- Domain satın alın (örn: ozdoganlar.com)
- DNS ayarlarını hosting'e yönlendirin
- SSL sertifikası aktif edin

### 3. SEO Optimizasyonu
- Google Search Console'a ekleyin
- Sitemap oluşturun
- Google Analytics entegrasyonu
- Meta açıklamalarını özelleştirin

### 4. Performans
- Resimleri optimize edin (WebP format)
- Lazy loading kullanın
- CDN kullanın
- Cache stratejisi uygulayın

## 📞 İletişim

- **Telefon**: 0530 244 14 77
- **WhatsApp**: [Mesaj Gönder](https://wa.me/905302441477)
- **Web**: ozdoganlar.com *(yakında)*

## 📄 Lisans

Bu proje özel mülkiyettir. Tüm hakları saklıdır.

---

**Geliştirici Notu**: Projeyi geliştirirken sorularınız için bana ulaşabilirsiniz!
