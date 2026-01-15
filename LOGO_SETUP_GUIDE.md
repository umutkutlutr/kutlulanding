# Logo Ekleme Rehberi

## Hızlı Başlangıç

1. **Logo dosyalarını hazırlayın**
   - Format: PNG (şeffaf arka plan) veya SVG
   - Boyut: 300-400px genişlik
   - Dosya boyutu: 50-200KB

2. **Dosyaları kopyalayın**
   - Klasör: `public/images/logos/`
   - Dosya isimleri aşağıdaki gibi olmalı

3. **Dosya İsimleri**

```
public/images/logos/
├── maison-sacree.png
├── tm-muhendislik.png
├── ledvision.png
├── avitech-metal.png
├── graphene.png
├── vesil.png
├── isil-metal.png
├── sadik-kagit.png
└── diaporta.png
```

## Detaylı Adımlar

### 1. Logo Dosyalarını Hazırlama

#### Format Seçimi
- **PNG (Önerilen)**: Şeffaf arka planlı PNG en iyi sonucu verir
- **SVG**: Vektör formatı, her boyutta keskin görünür
- **JPG**: Şeffaf arka plan yoksa kullanılabilir (önerilmez)

#### Boyutlandırma
- Logo genişliği: **300-400px** (yükseklik otomatik ayarlanır)
- Aspect ratio korunmalı (logo oranı bozulmamalı)
- Çözünürlük: 72-150 DPI (web için yeterli)

#### Optimizasyon
- Dosya boyutunu küçültmek için:
  - [TinyPNG](https://tinypng.com/) - PNG sıkıştırma
  - [Squoosh](https://squoosh.app/) - Görsel optimizasyon
  - [ImageOptim](https://imageoptim.com/) - Mac için

### 2. Dosya İsimlendirme

Dosya isimleri **küçük harf** ve **tire (-)** ile ayrılmalı:

✅ Doğru:
- `maison-sacree.png`
- `tm-muhendislik.png`
- `isil-metal.png`

❌ Yanlış:
- `Maison Sacree.png` (büyük harf, boşluk)
- `tm_muhendislik.png` (alt çizgi)
- `TM Mühendislik.png` (boşluk)

### 3. Dosyaları Ekleme

#### Yöntem 1: Finder/Explorer ile
1. `public/images/logos/` klasörünü açın
2. Logo dosyalarını bu klasöre sürükleyin
3. Dosya isimlerini kontrol edin

#### Yöntem 2: Terminal ile
```bash
# Proje klasörüne gidin
cd /Users/umutkutlu/Desktop/KutluLanding

# Logoları kopyalayın (örnek)
cp ~/Downloads/maison-sacree-logo.png public/images/logos/maison-sacree.png
cp ~/Downloads/tm-logo.png public/images/logos/tm-muhendislik.png
# ... diğer logolar
```

### 4. Test Etme

1. **Development server'ı başlatın** (eğer çalışmıyorsa):
   ```bash
   npm run dev
   ```

2. **Tarayıcıda kontrol edin**:
   - Ana sayfada "References" / "Referanslar" bölümüne gidin
   - Logoların göründüğünü kontrol edin
   - Hover efektini test edin (grayscale → renkli)

3. **Hard refresh yapın** (cache temizlemek için):
   - Mac: `Cmd + Shift + R`
   - Windows/Linux: `Ctrl + Shift + R`

### 5. Sorun Giderme

#### Logo görünmüyor
- ✅ Dosya isminin doğru olduğundan emin olun
- ✅ Dosyanın `public/images/logos/` klasöründe olduğunu kontrol edin
- ✅ Tarayıcı konsolunda (F12) hata var mı bakın
- ✅ Hard refresh yapın (Cmd+Shift+R)

#### Logo çok küçük/büyük
- Logo otomatik ölçeklenir, ancak çok küçükse:
  - Logo dosyasını daha yüksek çözünürlükte hazırlayın (400-500px)
  - Aspect ratio'yu koruyun

#### Logo bulanık
- Daha yüksek çözünürlüklü logo kullanın
- SVG formatı kullanın (vektör, her boyutta keskin)

#### Fallback (baş harfler) görünüyor
- Logo dosyası bulunamıyor demektir
- Dosya ismini ve konumunu kontrol edin
- Tarayıcı konsolunda 404 hatası var mı bakın

## Logo Özellikleri

### Otomatik Özellikler
- ✅ Grayscale (hover'da renkli)
- ✅ Responsive boyutlandırma
- ✅ Object-contain (orantı korunur)
- ✅ Lazy loading (performans)
- ✅ Fallback (logo yoksa baş harfler)

### Görsel Efektler
- Hover'da: Grayscale kaldırılır, renkli görünür
- Hover'da: Kart yukarı kalkar ve hafif büyür
- Hover'da: Border rengi değişir

## Örnek Logo Dosya Yapısı

```
public/
└── images/
    └── logos/
        ├── maison-sacree.png      (300x200px, 80KB)
        ├── tm-muhendislik.png     (350x150px, 95KB)
        ├── ledvision.png          (400x200px, 120KB)
        ├── avitech-metal.png      (300x180px, 75KB)
        ├── graphene.png           (320x200px, 88KB)
        ├── vesil.png              (300x200px, 82KB)
        ├── isil-metal.png         (350x150px, 90KB)
        ├── sadik-kagit.png        (300x200px, 78KB)
        └── diaporta.png           (320x180px, 85KB)
```

## İpuçları

1. **Tutarlılık**: Tüm logolar benzer stil ve boyutta olmalı
2. **Şeffaflık**: PNG'lerde şeffaf arka plan kullanın
3. **Basitlik**: Karmaşık logolar küçük boyutlarda okunmayabilir
4. **Test**: Farklı ekran boyutlarında test edin
5. **Yedekleme**: Orijinal logo dosyalarını yedekleyin

## Destek

Sorun yaşarsanız:
1. Tarayıcı konsolunu kontrol edin (F12)
2. Network tab'ında logo dosyalarının yüklendiğini kontrol edin
3. Dosya isimlerinin ve konumlarının doğru olduğundan emin olun

