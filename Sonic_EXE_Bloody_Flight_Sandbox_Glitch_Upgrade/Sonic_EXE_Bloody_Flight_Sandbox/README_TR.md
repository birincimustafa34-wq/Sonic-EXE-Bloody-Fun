# Sonic.EXE: Bloody Flight — Editable Sandbox Project

Bu paket, oyunu tek bir HTML dosyası olmaktan çıkarıp geliştirilebilir bir proje klasörüne dönüştürür. Oyun kodunu değiştirmeden görselleri, müziği ve temel oynanış ayarlarını düzenleyebilirsin.

## 1) Başlatma

1. ZIP dosyasını tamamen bir klasöre çıkar. ZIP'in içinden çalıştırma.
2. `START_GAME.bat` dosyasına çift tıklayarak oyunu aç (istersen doğrudan `index.html` de açabilirsin).
3. `OPEN_EDITOR.bat` dosyası Sandbox Editor'ü açar (istersen doğrudan `editor.html` de açabilirsin).

Bazı tarayıcılar yerel dosya güvenliği nedeniyle belirli özellikleri kısıtlarsa, proje klasöründe terminal açıp `python -m http.server 8000` komutunu çalıştır; sonra `http://localhost:8000` adresini aç.

## 2) Görselleri değiştirme

`assets/images/` klasöründeki PNG'leri kendi görsellerinle değiştir. Dosya adlarını aynı tuttuğun sürece oyun otomatik yükler:

| Dosya | Kullanım | Öneri |
|---|---|---|
| `background.png` | Arka plan / orman / ay | 960×448, yatay |
| `player.png` | Oyuncu karakteri | Şeffaf PNG, yaklaşık 96×96 |
| `ring.png` | Kan kırmızısı halka | Şeffaf PNG, kare |
| `emerald.png` | Chaos Emerald | Şeffaf PNG, kare |
| `shield.png` | Blood Shield | Şeffaf PNG, kare |
| `spike.png` | Diken engeli | Şeffaf PNG |
| `block.png` | Blok engeli | Şeffaf PNG |
| `bat.png` | Yarasa engeli | Şeffaf PNG |
| `rock.png` | Kaya engeli | Şeffaf PNG |

ZIP içindeki PNG'ler başlangıç örnekleridir; dilediğinde aynı adla kendi dosyalarınla değiştirebilirsin. Bir görsel dosyası eksikse oyun kendi çizdiği varsayılan piksel görselini kullanır. Böylece klasördeki her dosyanın hazır olması gerekmez.

## 3) Müzik ve ses efektleri

`assets/audio/` klasörüne şu isimlerle dosyalar ekleyebilirsin:

- `background.mp3` — arka plan müziği (oyun başlayınca çalar ve döngüye girer)
- `jump.wav` — zıplama
- `ring.wav` — halka toplama
- `emerald.wav` — Emerald / uçuş etkinleştirme
- `shield.wav` — kalkan toplama
- `hit.wav` — çarpma / oyun sonu

Aynı dosya adlarını kullanman yeterli. Dosya yoksa arka plan müziği sessiz kalır; oyunun yerleşik üretilen ses efektleri çalışmayı sürdürür. Müzik, tarayıcıların otomatik oynatma kuralı nedeniyle START düğmesine bastıktan sonra başlar.

## 4) Sandbox Editor ve config.js

`editor.html` dosyasını açarak oyun başlığını, başlangıç mesajını, başlangıç/en yüksek hızı, yer çekimini, zıplama gücünü, uçuş/kalkan sürelerini ve müzik ses düzeyini değiştirebilirsin.

`config.js` oyun ayarlarının ana dosyasıdır. Düzenleyicide **config.js dosyasını indir** düğmesine bastığında yeni bir `config.js` iner. İndirdiğin dosyayı proje ana klasöründeki eski `config.js` ile değiştir.

Görsel veya ses dosyasının adını değiştirmek istersen `config.js` içindeki `images` ya da `sounds` yollarını da güncelle.

## 5) Skora bağlı glitch sistemi

Oyun ilerledikçe görüntü bozulması otomatik olarak artar. Yaklaşık 220 skorda çok hafif parazit başlar; 3.000 skora yaklaştıkça tarama çizgileri, kırmızı veri parçacıkları ve kısa yatay görüntü kaymaları daha sık ve belirgin hale gelir. Artış kademeler arasında yumuşaktır; bir anda sıçrama yapmaz. Efekt yalnızca görseldir ve karakterin çarpışma alanlarını veya oyun fiziğini değiştirmez. Bu özelliği kullanmak için herhangi bir dosyayı değiştirmen gerekmez.

## 6) Klasör yapısı

```text
Sonic_EXE_Bloody_Flight_Sandbox/
├── index.html          # Oyun
├── editor.html         # Görsel Sandbox ayar düzenleyicisi
├── config.js           # Oyun ayarları ve dosya yolları
├── README_TR.md        # Bu kılavuz
└── assets/
    ├── images/         # PNG görseller
    └── audio/          # MP3 / WAV müzik ve sesler
```

## 7) Kontroller

- SPACE / ↑ / W: zıpla (havada ikinci kez bas: double jump)
- ↓ / S: kay
- Uçuş sırasında ↑ / ↓: havada hareket et
- P veya ESC: duraklat / devam et
- M: sesi aç / kapat

## Küçük not

Bu proje, orijinal Bloody Flight oyununun düzenlenebilir geliştirme sürümüdür. İstediğin zaman yeni PNG'ler, sesler ve ayarlarla kendi varyantını oluşturabilirsin. Kod yapısını daha sonra karakter animasyonları, farklı seviyeler, yeni düşmanlar ve yeni güçlendirmeler eklemek için de genişletebilirsin.
