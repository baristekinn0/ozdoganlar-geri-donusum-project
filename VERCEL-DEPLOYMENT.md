# 🚀 ÖZDOĞANLAR - Vercel Deployment Rehberi

## ✅ Proje Temizlendi!

Aşağıdaki gereksiz dosyalar silindi:
- ❌ `.DS_Store` dosyaları (macOS sistem dosyaları)
- ❌ `__MACOSX` klasörü (macOS arşiv dosyaları)
- ❌ `dist/` klasörü (eski build dosyaları - Vercel yeniden oluşturacak)
- ✅ `.gitignore` dosyası eklendi

---

## 📋 Vercel'e Deploy - Adım Adım

### ADIM 1: GitHub Hesabı Oluştur (5 dakika)
1. **https://github.com** adresine git
2. **"Sign up"** butonuna tıkla
3. Email ve şifre ile kayıt ol
4. Email'ini doğrula

### ADIM 2: Yeni Repository Oluştur (2 dakika)
1. GitHub'da sağ üstte **"+"** işaretine tıkla
2. **"New repository"** seç
3. Repository bilgilerini doldur:
   - **Repository name:** `ozdoganlar-geri-donusum`
   - **Description:** `ÖZDOĞANLAR Geri Dönüşüm Web Sitesi`
   - **Public** seçili olsun
   - ✅ **"Add a README file"** işaretini KALDIR (bizde zaten var)
4. **"Create repository"** butonuna tıkla

### ADIM 3: Projeyi GitHub'a Yükle (5 dakika)

#### A) Terminalden (Windows/Mac/Linux):

**Windows için:** Proje klasöründe Git Bash veya PowerShell aç
**Mac/Linux için:** Terminal aç ve proje klasörüne git

```bash
# Proje klasörüne git
cd /path/to/ozdoganlar-geri-donusum-project

# Git'i başlat
git init

# Tüm dosyaları ekle
git add .

# İlk commit
git commit -m "İlk yükleme - ÖZDOĞANLAR Geri Dönüşüm"

# GitHub'a bağlan (GitHub'daki repo URL'ini kopyala)
git remote add origin https://github.com/KULLANICI_ADIN/ozdoganlar-geri-donusum.git

# Ana branch'i main yap
git branch -M main

# GitHub'a yükle
git push -u origin main
```

**ÖNEMLİ:** İlk push'ta GitHub kullanıcı adı ve şifre isteyecek!

#### B) GitHub Desktop ile (Daha Kolay):

1. **GitHub Desktop**'ı indir: https://desktop.github.com
2. GitHub hesabınla giriş yap
3. **File → Add Local Repository**
4. Proje klasörünü seç
5. **"Create a repository"** tıkla
6. **"Publish repository"** tıkla

### ADIM 4: Vercel Hesabı Oluştur (2 dakika)
1. **https://vercel.com** adresine git
2. **"Sign Up"** → **"Continue with GitHub"** seç
3. GitHub ile giriş yapıp Vercel'e izin ver

### ADIM 5: Projeyi Vercel'e Deploy Et (3 dakika)
1. Vercel Dashboard'da **"Add New..." → "Project"** tıkla
2. GitHub'daki **"ozdoganlar-geri-donusum"** repo'sunu bul ve seç
3. **"Import"** butonuna tıkla
4. Build ayarlarını kontrol et (otomatik gelecek):
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```
5. **"Deploy"** butonuna tıkla
6. ⏳ 2-3 dakika bekle...
7. ✅ **Tebrikler!** Siteniz canlıda!

### ADIM 6: Vercel URL'ini Kaydet
Deploy bittiğinde sana bir URL verilecek:
```
https://ozdoganlar-geri-donusum.vercel.app
```

Bu linki kaydet ve tarayıcıda aç! 🎉

---

## 🌐 Kendi Domain'ini Bağla (Opsiyonel)

### Domain Aldıktan Sonra:

1. **Vercel Dashboard** → Proje seç
2. **Settings** → **Domains**
3. **"Add"** butonuna tıkla
4. Domain adını yaz: `ozdoganlar.com.tr`
5. Vercel sana DNS kayıtlarını gösterecek:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

6. **İsim Tescil/Natro** panelinde:
   - **DNS Yönetimi** bölümüne git
   - Yukarıdaki kayıtları ekle
   - Kaydet

7. ⏳ 15-30 dakika bekle (DNS yayılması)
8. ✅ `https://ozdoganlar.com.tr` artık çalışıyor!

---

## 🔄 Güncelleme Nasıl Yapılır?

Site canlıya alındıktan sonra güncelleme yapmak çok kolay:

### Yöntem 1: Terminal ile
```bash
cd /path/to/ozdoganlar-geri-donusum-project

# Değişiklikleri kaydet
git add .
git commit -m "Site güncellendi"
git push
```

### Yöntem 2: GitHub Desktop ile
1. Değişiklikleri yap
2. GitHub Desktop'ta değişiklikleri gör
3. Commit message yaz
4. **"Commit to main"**
5. **"Push origin"**

⚡ **Otomatik Deploy:** Her `git push` yaptığında Vercel otomatik olarak yeni versiyonu yayınlar (1-2 dakika)!

---

## ✅ Kontrol Listesi

Deploy öncesi kontroller:
- [x] Gereksiz dosyalar silindi
- [x] `.gitignore` eklendi
- [x] README hazır
- [ ] GitHub hesabı oluşturuldu
- [ ] Repository oluşturuldu
- [ ] Kod GitHub'a yüklendi
- [ ] Vercel hesabı oluşturuldu
- [ ] Proje deploy edildi
- [ ] Site test edildi

---

## 🆘 Sorun Giderme

### "Git komutu bulunamadı"
- **Windows:** https://git-scm.com/download/win adresinden Git indir
- **Mac:** Terminal'de `git --version` yaz, otomatik yüklenecek
- **Linux:** `sudo apt install git`

### "Permission denied" hatası
GitHub şifre yerine **Personal Access Token** kullanman gerekebilir:
1. GitHub → Settings → Developer settings → Personal access tokens → Generate new token
2. `repo` yetkisini ver
3. Token'ı kopyala
4. Git push yaparken şifre yerine token'ı kullan

### "Build failed" hatası
1. Vercel'de build loglarına bak
2. Muhtemelen eksik bağımlılık vardır
3. Vercel'de **"Redeploy"** dene

---

## 📞 Yardım

Deploy sırasında sorun yaşarsan:
- **GitHub Docs:** https://docs.github.com
- **Vercel Docs:** https://vercel.com/docs
- **Bana ulaş:** Deploy adımlarını beraber yapalım!

---

## 🎉 Başarılı Deploy Sonrası

Site canlıya alındıktan sonra:
1. ✅ Tüm sayfaları test et
2. ✅ Mobil görünümü kontrol et
3. ✅ WhatsApp/Telefon butonlarını dene
4. ✅ Form gönderimini test et
5. ✅ Hızı kontrol et (PageSpeed Insights)

**Not:** İlk deploy 3-5 dakika sürebilir. Sonraki güncellemeler 1-2 dakika!

---

**Son Not:** Deploy işlemi takılırsan adım adım beraber yaparız! 🚀
