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
- Y: RIFT REPRISE — yaklaşık 0,68 saniye önceki dikey konumuna dön; 0,58 saniye koruma, 23 saniye bekleme süresi.
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


## 9) Tempest paketi — yeni düşman, boss ve hava olayı

### TEMPEST HERALD
170.000 puandan itibaren ortaya çıkabilen Tempest Herald, havada süzülen elektrik temalı bir avcıdır. Oyuncunun bulunduğu yüksekliği hedeflemeden önce **GUST CHARGE** uyarısını ve nişan çizgisini gösterir; ardından kısa, hızlı bir dalış gerçekleştirir. Uyarı sırasında şerit değiştirmek, havalanmak veya uygun bir koruma yeteneği kullanmak saldırıdan kaçınmayı sağlar. Düşmanın kanatları ve elektrik halesi Canvas üzerinde çizilir ve saldırı durumuna göre animasyonları değişir.

### THE TEMPEST ARCHON
300.000 puanda başlayan 52 saniyelik boss karşılaşmasıdır ve yenildiğinde 18.000 puan ödül verir. Üç çekirdekli mevcut zayıflık penceresi sistemini kullanır; ancak saldırı biçimi kendine özgüdür: her aşamada daha geniş ve daha hızlı çapraz elektrik salvoları gönderir. Salvolarda değişen güvenli boşluğu takip etmek ve zayıflık penceresinde Echo Wave ile çekirdeklere karşılık vermek gerekir. Boss'un kanatları, zırhı ve dönen enerji halkası ayrı Canvas çizimleriyle canlandırılır.

### ELECTRICAL STORM
310.000–325.000 puan aralığında her koşuda bir kez rastgele seçilen eşikte etkinleşebilen elektrik fırtınasıdır. Daha kuvvetli mavi yağmur ve koyu fırtına bulutlarına ek olarak, yıldırım düşmeden önce yaklaşık **1,02 saniyelik** dikey uyarı çizgisi görünür; gerçek yıldırım darbesi yaklaşık **0,24 saniye** sürer. Yatay konumunu değiştirerek uyarı alanından çıkabilir veya geçerli koruma yeteneğini kullanabilirsin. Darbe alanı önceden gösterildiğinden saldırı rastgele ve uyarısız bir hasar değildir.

### Test Lab
**ENEMY SHOWCASE** artık Tempest Herald'ı da içerir. Yeni **ELECTRICAL STORM TEST** ve **TEMPEST ARCHON BOSS TEST** senaryoları, normal kayıtlarına dokunmadan fırtınayı ve boss karşılaşmasını ayrı ayrı denetlemeye yarar. Test Lab ayrıca yıldırım uyarı/darbe sayaçlarını, yeni hava aralığının ayrıklığını ve Tempest varlıklarının kayıtlarını kontrol eder.

### Performans notu
Parçacık güncellemesi, her karede yeni bir filtrelenmiş dizi üretmek yerine mevcut diziyi yerinde sıkıştırır. Böylece parçacıkların yaşam süresi ve çizimi korunurken kare başına geçici dizi tahsisi azaltılır; görsel parçacık sayısı veya efekt kalitesi düşürülmez.


## 10) Rift Reprise, Rift Lancer, Cinder Regent ve Cinderfall

### RIFT REPRISE — Y
**Y** ile oyuncunun yaklaşık **0,68 saniye önceki dikey konumuna ve hızına** geri dönersin. Bu, tüm dünyayı geri saran bir zaman durdurma değildir; yalnızca karakterin dikey hareketini düzeltir. Etkinleştiğinde **0,58 saniyelik** kısa bir koruma penceresi açar ve tekrar kullanılmadan önce **23 saniye** bekleme süresi gerekir. Oyun, son 1,15 saniyeyi 0,075 saniyelik aralıklarla örnekler ve en fazla 24 konum kaydı tutar. Yetenek, eski ve yeni tehlike/çarpışma koruma yollarına bağlanmıştır; HUD'da etkinlik ve bekleme süresi görünür.

### RIFT LANCER
**195.000** skordan itibaren havuzda yer alabilen yeni elit düşmandır. Mor zırhlı gövdesi ve uzun mızrağı kendisine özel Canvas çizimleriyle oluşturulur. Hücumdan önce oyuncunun yüksekliğine **0,82 saniyelik LANCE LOCK** uyarısı verir; ardından **0,44 saniyelik** kararlı bir hücum gerçekleştirir. Hücum çizgisini dikey olarak kıl payı ıskalamak, saldırı başına bir kez **145 puan + 10 FLOW** değerinde `RIFT EVADE` kazandırır. Uyarı çizgisini gördüğünde dikey şerit değiştirmek saldırıdan kaçınmanın temel yoludur.

### THE CINDER REGENT
**330.000** skorda başlayan, **56 saniyelik** ve yenildiğinde **22.000 puan** veren yeni boss karşılaşmasıdır. Mevcut üç çekirdekli zayıflık penceresi sistemini kullanır. Kendine özgü saldırısı, aşamalar ilerledikçe genişleyen ve hızlanan çapraz kül parçacığı salvolarıdır; her salvo farklı güvenli boşluk bırakır. Boss'un taç benzeri silueti, merkezindeki parlak kor ve yörüngedeki köz parçaları Canvas üzerinde ayrı ayrı canlandırılır.

### CINDERFALL
**355.000–370.000** puan bandında her koşuda bir kez rastgele eşikte başlayan **18–22 saniyelik** kül yağışıdır. Rüzgârla sürüklenen amber renkli köz/kül parçaları ve daha sıcak, isli bir gökyüzü görünümü kullanır. Bu hava olayı **tamamen görseldir; çarpışma veya hasar üretmez** ve oyuncuyu ek bir rastgele tehlikeyle cezalandırmaz.

### Test Lab ve performans
Test Lab'e **RIFT LANCER TEST**, **CINDER REGENT BOSS** ve **CINDERFALL WEATHER** yalıtılmış senaryoları eklendi. Reprise geçmiş örnekleri, yeni boss/düşman kayıtları, hava aralığı ayrıklığı, parçacık bütçesi ve senaryo başlatma durumları canlı tanılama kontrollerinde izlenir.

Parçacık güncellemesi diziyi yerinde sıkıştırmayı sürdürür. Ek olarak, patlama/ışık parçacığı üretimi **1.800 etkin parçacık** üst sınırıyla korunur: mevcut parçacıklar silinmez veya seyreltilmez; olağan oynanışta efektler aynı şekilde işlenir, yalnızca olağanüstü yoğunlukta yeni kozmetik parçacık eklenmesi sınırlanır. Bu sınır bir FPS garantisi değildir; cihaz bazlı performans ölçümü ayrıca yapılmalıdır.


## 11) GitHub Pages yayın kurulumu

Depo, `main` dalına gönderilen her değişiklikte kök dizindeki oyun dosyalarını GitHub Pages'e dağıtmak için `.github/workflows/deploy-pages.yml` iş akışını kullanır.

İlk kurulumda Pages kaynağı henüz seçilmemişse bir defaya mahsus:
1. GitHub deposunda **Settings → Pages** sayfasını aç.
2. **Build and deployment → Source** bölümünde **GitHub Actions** seç.
3. Sonraki `main` gönderimleri dağıtımı otomatik başlatır; **Actions** sekmesinde `Deploy game to GitHub Pages` akışının sonucunu görebilirsin.

Canlı adres:
`https://birincimustafa34-wq.github.io/Sonic-EXE-Bloody-Fun/`

Not: Kaynak kodunun `main` dalında bulunması, Pages sitesinin ayrıca etkinleştirildiği anlamına gelmez. Site 404 verirse önce Settings → Pages kaynağını ve Actions dağıtım durumunu kontrol et. Ana oyun girişi `index.html` dosyasıdır.

## 12) Savaş okunabilirliği ve kare döngüsü iyileştirmeleri

Magnet Core da pickup koleksiyonlarını ayrı ayrı dolaşır; her kare `concat()` ile geçici birleşik dizi oluşturmaz.

Kasım 2026 güncellemesinde **THE CINDER REGENT** saldırılarına 0,72 saniyelik ön uyarı eklendi. Oyun, mermi dizisinin boş bıraktığı koridoru ve mermilerin ortak dikey hareketini hesaba katarak oyuncuya tahmini güvenli hattı gösterir. Cinder mermilerinin dikey konumu artık her kare bir önceki konuma salınım eklemek yerine sabit başlangıç yüksekliği, yaş ve sınırlı salınımdan hesaplanır; böylece zamanla biriken rastgele kayma önlenir.

**Rift Lancer** artık 0,82 saniyelik daha okunabilir bir `LANCE LOCK` uyarısı verir. Hücum süresi 0,44 saniyeye ayarlandı ve ek yatay itiş azaltıldı. Hücumu dikey yönde kıl payı ıskalayan oyuncu, aynı hücum başına yalnızca bir kez **145 puan + 10 FLOW** değerinde `RIFT EVADE` ödülü kazanabilir.

Koleksiyon ve geçici görsel efekt döngülerinde ring, emerald, shield, score sigil, ember, world-detail ve trail dizileri yerinde sıkıştırılır. Bu yöntem her kare yeni filtrelenmiş dizi üretimini azaltır; aktif parçacıkların veya görsel kalite seviyesinin düşürülmesini gerektirmez. Test Lab artık Cinder mermi verisini, güvenli hat telemetrisini ve Rift Lancer hücum zamanlamasını ayrıca denetler.

Doğrulama: güncel inline JavaScript kaynak kodu parse kontrolünden geçti ve ilgili kaynak/test invariants kontrolleri doğrulandı. Gerçek tarayıcıda masaüstü ve dokunmatik oynanış testi ayrıca yapılmalıdır; bu kaynak kontrolleri tek başına FPS veya oynanış kusursuzluğu garantisi değildir.


## 13) VOID AURORA ve mobil güç kontrolleri

### VOID AURORA
**390.000–410.000** skor bandında her koşuda bir kez rastgele eşikte başlayan **20–25 saniyelik** bir atmosfer olayıdır. Gökyüzünde dört katmanlı, turkuaz, cyan ve mor tonlarında yumuşak aurora şeritleri ile ince yıldız parıltıları oluşturur. Şeritler sabit sayıda Canvas eğrisiyle çizilir; her kare yeni parçacık grubu oluşturmaz. Olay tamamen kozmetiktir: hasar, çarpışma veya hareket değişikliği üretmez. Test Lab'de **VOID AURORA TEST** ile doğrudan önizlenebilir.

### Mobil güç kullanımı
Mobil güç arayüzünde yetenek seçimi ile yeteneği etkinleştirme birbirinden ayrıldı: **SELECT** düğmesi sıradaki özel yeteneği seçer; **CAST** seçili yeteneği kullanır. **RIFT REPRISE Y** için ayrıca doğrudan bir kısayol bulunur. Böylece tek dokunuşun hem yetenek kullanıp hem sıradaki güce geçmesi engellenir.

### Test Lab izolasyonu
Yüksek skorlu Lancer, Cinder Regent, Cinderfall ve Void Aurora önizlemeleri, normal koşunun eski boss karşılaşmalarını başlatan sayaçlarını bastırır. Hava olaylarının önizlemeleri de önceki skor pencerelerini tamamlanmış işaretleyerek yeni test sırasında eski yağışların sıraya girmesini önler.
