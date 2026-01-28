# 🚀 ÖZDOĞANLAR Geri Dönüşüm - Canlıya Alma Rehberi

## Yöntem 1: Vercel (ÖNERİLEN - En Kolay)

### Adım 1: GitHub'a Yükleme
```bash
# Proje klasöründe terminal açın
git init
git add .
git commit -m "Initial commit"

# GitHub'da yeni repo oluşturun, sonra:
git remote add origin https://github.com/KULLANICI_ADINIZ/ozdoganlar-geri-donusum.git
git push -u origin main
```

### Adım 2: Vercel'e Deploy
1. https://vercel.com adresine gidin
2. "Sign Up" ile GitHub hesabınızla giriş yapın
3. "Add New Project" butonuna tıklayın
4. GitHub'daki repoyu seçin
5. Build ayarları otomatik gelecek:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. "Deploy" butonuna tıklayın
7. 2-3 dakika içinde siteniz canlıya alınır!

### Adım 3: Domain Bağlama (İsteğe Bağlı)
1. Vercel Dashboard > Settings > Domains
2. "ozdoganlar.com" ekleyin
3. Domain sağlayıcınızda (GoDaddy, Namecheap, vb.) şu DNS kayıtlarını ekleyin:
   - A Record: `76.76.21.21`
   - CNAME: `cname.vercel-dns.com`

**ÜCRETSİZ Vercel URL:** `https://ozdoganlar-geri-donusum.vercel.app`

---

## Yöntem 2: Netlify (Alternatif)

### Adım 1: Build Oluşturma
```bash
npm run build
```

### Adım 2: Netlify'a Deploy
1. https://netlify.com adresine gidin
2. "Sign Up" ile giriş yapın
3. Drag & Drop ile `dist` klasörünü sürükleyin
4. VEYA GitHub'a yükleyip bağlayın

### Build Ayarları:
- Build command: `npm run build`
- Publish directory: `dist`

---

## Yöntem 3: Hostinger / Turhost (Türk Hosting)

### Adım 1: Build Oluşturma
```bash
npm run build
```

### Adım 2: cPanel'e Yükleme
1. Hosting cPanel'e giriş yapın
2. File Manager > public_html klasörüne gidin
3. `dist` klasöründeki TÜM dosyaları yükleyin
4. `.htaccess` dosyası oluşturun (aşağıdaki içerikle)

### .htaccess İçeriği:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## Yöntem 4: GitHub Pages (Ücretsiz)

### package.json'a ekle:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  },
  "homepage": "https://KULLANICI_ADINIZ.github.io/ozdoganlar-geri-donusum"
}
```

### Kurulum:
```bash
npm install --save-dev gh-pages
npm run deploy
```

**URL:** `https://KULLANICI_ADINIZ.github.io/ozdoganlar-geri-donusum`

---

## 📋 Canlıya Almadan ÖNCE Kontrol Listesi

- [ ] `npm run build` komutu hatasız çalışıyor mu?
- [ ] Tüm linkler ve telefon numaraları doğru mu?
- [ ] Görseller yükleniyor mu?
- [ ] Responsive tasarım mobilde çalışıyor mu?
- [ ] Form gönderimi test edildi mi?

---

## 🔧 Canlıya Aldıktan SONRA Yapılacaklar

### 1. Google Search Console
1. https://search.google.com/search-console
2. "Add Property" > Domain adınızı ekleyin
3. DNS doğrulaması yapın
4. Sitemap ekleyin: `https://ozdoganlar.com/sitemap.xml`

### 2. Google Analytics (İsteğe Bağlı)
1. https://analytics.google.com
2. Yeni property oluşturun
3. Tracking code'u `index.html` içine ekleyin

### 3. Google My Business
1. https://business.google.com
2. İşletme kaydı oluşturun
3. Adres, telefon, çalışma saatleri ekleyin
4. Fotoğraflar yükleyin

### 4. WhatsApp Business
1. Ticari WhatsApp hesabı oluşturun
2. Otomatik mesajlar ayarlayın
3. Katalog ekleyin

---

## 💰 Tahmini Maliyetler

| Hizmet | Aylık Maliyet | Yıllık Maliyet |
|--------|---------------|----------------|
| **Vercel (Önerilen)** | ₺0 (Ücretsiz) | ₺0 |
| **Netlify** | ₺0 (Ücretsiz) | ₺0 |
| **Hostinger** | ~₺50 | ~₺600 |
| **Domain (.com)** | - | ~₺200-400 |

**EN EKONOMİK:** Vercel (ücretsiz) + .com.tr domain (₺50/yıl)

---

## 🆘 Sorun Giderme

### Build Hatası
```bash
# node_modules'ü temizle ve tekrar yükle
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Sayfalar 404 Veriyor
- Vercel/Netlify otomatik halleder
- cPanel için `.htaccess` ekleyin (yukarıda)

### Görseller Görünmüyor
- Görsellerin `public` klasöründe olduğundan emin olun
- Veya absolute URL kullanın

---

## 📞 İletişim

Deployment sırasında sorun yaşarsanız:
- GitHub Issues: Repo'da issue açın
- Hosting desteği: Provider'ınıza başvurun
