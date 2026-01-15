# Client Logos

Bu klasöre müşteri logolarını ekleyin.

## Logo Dosya Adları

Lütfen logoları şu isimlerle kaydedin:

1. `maison-sacree.png` - Maison Sacree
2. `tm-muhendislik.png` - TM Mühendislik
3. `ledvision.png` - Ledvision
4. `avitech-metal.png` - Avitech Metal
5. `graphene.png` - Graphene
6. `vesil.png` - Vesil
7. `isil-metal.png` - Işıl Metal
8. `sadik-kagit.png` - Sadık Kağıt
9. `diaporta.png` - Diaporta

## Logo Gereksinimleri

### Format
- **Format**: PNG (şeffaf arka plan tercih edilir) veya SVG
- **Renk**: Renkli veya grayscale (site otomatik olarak grayscale gösterir, hover'da renkli olur)

### Boyut ve Kalite
- **Minimum genişlik**: 200px
- **Önerilen genişlik**: 300-400px
- **Aspect ratio**: Logo oranına göre (genellikle 4:3 veya 16:9)
- **Çözünürlük**: 72-150 DPI (web için yeterli)
- **Dosya boyutu**: Mümkün olduğunca küçük (50-200KB arası ideal)

### Tasarım Önerileri
- Logolar beyaz veya açık renkli arka plan üzerinde görünecek
- Şeffaf arka plan (PNG) kullanırsanız, logo her arka plana uyum sağlar
- Logo merkeze hizalı olmalı
- Fazla padding (boşluk) bırakmayın - logo kartın içinde otomatik padding alacak

## Logo Ekleme Adımları

1. Logo dosyalarını hazırlayın (yukarıdaki gereksinimlere göre)
2. Dosyaları bu klasöre (`public/images/logos/`) kopyalayın
3. Dosya isimlerinin yukarıdaki listeyle eşleştiğinden emin olun
4. Tarayıcıyı yenileyin - logolar otomatik görünecek

## Fallback (Yedek)

Eğer bir logo yüklenemezse veya dosya bulunamazsa, firma adının baş harfleri gösterilecek:
- Maison Sacree → MS
- TM Mühendislik → TM
- Ledvision → LV
- vb.

## Test

Logo ekledikten sonra:
1. Tarayıcıyı yenileyin (hard refresh: Cmd+Shift+R / Ctrl+Shift+R)
2. Logoların göründüğünü kontrol edin
3. Hover efektinin çalıştığını kontrol edin (grayscale → renkli)
4. Mobil görünümde de test edin

## Notlar

- Logolar otomatik olarak `object-contain` ile ölçeklenir
- Hover'da grayscale kaldırılır ve renkli görünür
- Logo yüklenemezse fallback (baş harfler) gösterilir
- Tüm logolar aynı yükseklikte görünecek (responsive)

