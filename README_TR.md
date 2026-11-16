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

Aynı dosya adlarını kullanman yeterli. Depodaki varsayılan kurulumda bu ses dosyaları bulunmadığı için `config.js` içindeki isteğe bağlı müzik ve özel efekt yolları boş bırakılmıştır. Böylece eksik dosya istekleri yapılmaz. Özel WAV/MP3 dosyası eklemediğinde zıplama, halka, kalkan ve diğer temel efektler oyunun yerleşik Web Audio sentezleyicisiyle çalınır. Müzik, tarayıcıların otomatik oynatma kuralı nedeniyle START düğmesine bastıktan sonra başlar. Ses motoru tarayıcı tarafından askıya alınırsa oyun bir sonraki kullanıcı girdisinde yeniden uyandırmayı dener. **SOUND LOST** korku olayı artık yalnızca arka plan müziğini keser; zıplama ve halka gibi oynanış geri bildirimleri devam eder.

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
- ↓ / S: yerde kay; havadayken en az 78 px yüksekteyken DIVE SLAM başlat
- J (havada): 0,42 saniyelik PERFECT PARRY penceresi aç; başarılı savurma için gelen mermiyi pencere içinde yakala
- Z: FLOW göstergesi %100 olduğunda 4,5 saniyelik FLOW BURST etkinleştir
- X / Shift: Shadow Dash
- ← / A ve → / D: geri / ileri hareket
- Uçuş sırasında ↑ / ↓: havada hareket et
- P veya ESC: duraklat / devam et
- M: sesi aç / kapat

## Küçük not

Bu proje, orijinal Bloody Flight oyununun düzenlenebilir geliştirme sürümüdür. İstediğin zaman yeni PNG'ler, sesler ve ayarlarla kendi varyantını oluşturabilirsin. Kod yapısını daha sonra karakter animasyonları, farklı seviyeler, yeni düşmanlar ve yeni güçlendirmeler eklemek için de genişletebilirsin.

## 8) Yeni savaş mekanikleri

### FLOW ve FLOW BURST
Halka toplamak, near-miss yapmak, uçuşta düşman yok etmek, Shadow Dash ile engel kırmak, DIVE SLAM isabeti ve PERFECT PARRY başarıları FLOW göstergesini doldurur. Gösterge %100 olduğunda **Z** ile 4,5 saniyelik FLOW BURST açılır. Bu sırada puan ödülleri 1,25× olur, yatay hareket 1,28× hızlanır ve bir Shadow Dash yükü yenilenir. FLOW BURST sırasında gösterge yeniden dolmaz.

### DIVE SLAM
Oyuncu uçuşta değilken havadaysa ve yerden en az 78 piksel uzaktaysa **↓** basışı hızlı bir dalış başlatır. Yere iniş, yakındaki spike/block/rock engellerine, Collapse hazard alanlarına ve ağır yer düşmanlarına hasar veren bir şok dalgası üretir. DIVE SLAM'ın 2,35 saniyelik bekleme süresi vardır.

### PERFECT PARRY ve RIPOSTE
Havadayken **J**, 0,42 saniyelik bir PERFECT PARRY penceresi açar ve 10 saniyelik bekleme süresini başlatır. J'ye basmak tek başına puan veya düşman imhası sağlamaz; gelen boss mermisini 118 piksel yakalama yarıçapına pencere içinde sokmalısın. Başarılı parry mermiyi yok eder, +240 puan ve +27 FLOW verir, oyuncuyu hafifçe yukarı sektirir ve ileri doğru bir Echo Wave RIPOSTE gönderir. Bu dalga özel düşmanları ve zayıflık penceresindeki boss çekirdeklerini vurabilir. Pencere boşa giderse deneme kaçırılmış sayılır ve kalan bekleme süresi 5,5 saniyeye iner.

### RIFT SENTINEL
145.000 skordan itibaren Rift Sentinel ortaya çıkabilir. Önce cyan kalkanını kırmalısın; bunu güçlü bir çarpışma, Echo Wave veya DIVE SLAM ile yapabilirsin. Kalkan 1,75 saniye boyunca açık kalır ve bu sırada yapacağın ayrı bir ikinci isabet düşmanı yok eder. Tek bir kesintisiz Dash/Uçuş teması iki vuruş olarak sayılmaz; doğrudan çarpışmayla kalkanı kırdığında Sentinel 1,05 saniye önünde sendeleyerek ikinci saldırı için fırsat verir. Gövde temasıyla bitirici vuruş için kalkan kırıldıktan sonra ayrı bir yeteneği yeniden etkinleştirmelisin. Düşmanın üzerinde **GUARDED / EXPOSED** durumu görünür. Onu yenmek **SENTINEL BROKEN** başarımını açar.

**COMBAT MECHANICS TEST** ve yeni **RIFT SENTINEL TEST**, bu savaş mekaniklerini records-disabled eğitim alanında denemek için TEST LAB'e eklenmiştir.
