// Alt sayfaları (raf türleri) ve sitemap.xml'i üretir. Ana sayfa site/index.html elle yazılır.
// Çalıştır: node build.mjs
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const SITE = "https://temelrafsistemleri.com";
const TEL = "+905334352268";
const TEL_TXT = "0533 435 22 68";
const WA = "905334352268";
const TODAY = new Date().toISOString().slice(0, 10);

const home = readFileSync("site/index.html", "utf8");
const drawings = [...home.matchAll(/<svg class="product-draw"[\s\S]*?<\/svg>/g)].map((m) => m[0]);

const pages = [
  {
    slug: "palet-rafi",
    draw: 0,
    name: "Palet rafı",
    title: "Palet Rafı | Ağır Tip Depo Raf Sistemi",
    desc: "Ağır tip palet rafı: Euro ve standart palet için bölme ölçüleri, kat yükü, koridor genişliği ve aksesuarlar. Ücretsiz keşif ve yerleşim planı.",
    h1: "Ağır tip palet rafı",
    lead: "Forkliftle yüklenen paletler için seçici palet rafı. Her palet kendi adresinde durur, istediğiniz palete diğerlerine dokunmadan ulaşırsınız.",
    facts: [["Bölme", "1.800–3.600 mm"], ["Kat yükü", "Genellikle 1.000–3.000 kg"], ["Yükseklik", "Genellikle 3–12 m"]],
    body: `
<h2>Palet rafı nasıl kurulur?</h2>
<p>Sistem iki ana parçadan oluşur. <strong>Dikme çerçeveleri</strong>, iki dikmenin çapraz ve yatay bağlantılarla birleştirilmesiyle oluşur ve zemine ankrajlanır. <strong>Traversler</strong> ise çerçeveler arasına, dikmedeki deliklere kancalanarak takılır ve paleti taşır. Kancalı yapı sayesinde kat yükseklikleri sonradan değiştirilebilir.</p>
<p>Seçici palet rafında her palet konumu ayrı bir adrestir. Depo yönetim sisteminizde ya da basit bir tabloda “A sırası, 4. bölme, 2. kat” diye takip edebilirsiniz.</p>

<h2>Ölçüler: palet, bölme ve derinlik</h2>
<ul>
<li><strong>Euro palet (800 × 1200 mm):</strong> 2.700 mm travers boyuna yan yana 3 palet, 1.800 mm boya 2 palet sığar.</li>
<li><strong>Standart palet (1000 × 1200 mm):</strong> 2.700 mm boyda 2 palet rahat çalışır. Bazı projelerde 3.300–3.600 mm bölmeye 3 palet konur.</li>
<li><strong>Çerçeve derinliği:</strong> 1.200 mm paletler genellikle 1.100 mm çerçeveye, önden ve arkadan biraz taşarak oturur.</li>
<li><strong>Kat aralığı:</strong> Paletle birlikte yük yüksekliği, travers profilinin yüksekliği ve forkliftin kaldırma payı toplanarak bulunur. Payı 100 mm'nin altına indirmek darbe riskini artırır.</li>
</ul>

<h2>Koridor genişliği forkliftinize göre</h2>
<p>Raf sıraları arasındaki koridor, depoya kaç palet sığacağını en çok etkileyen ölçüdür. Kabaca şu değerlerle planlanır, kesin ölçü forkliftinizin teknik föyünden alınır:</p>
<ul>
<li>Dengeli (karşı ağırlıklı) forklift: 3,3–3,8 m</li>
<li>Reach truck: 2,7–3,0 m</li>
<li>Dar koridor (VNA) istifleyici: 1,6–1,9 m, zemin düzlüğü ve kılavuz ray gerektirir</li>
</ul>
<p>Ana sayfadaki <a href="/#planlayici">depo planlayıcıda</a> bu üç seçeneği deneyip palet adresi sayısının nasıl değiştiğini görebilirsiniz.</p>

<h2>Kat yükünü ne belirler?</h2>
<p>Bir katın taşıyabileceği yük travers profilinin kesitine ve boyuna bağlıdır. Çerçevenin taşıyabileceği toplam yük ise ilk travers yüksekliği ve kat aralıklarıyla değişir. Aralık büyüdükçe dikmenin burkulma boyu uzar ve taşıma kapasitesi düşer. Bu yüzden “bu raf kaç kilo taşır” sorusunun tek cevabı yoktur. Hesap, kat yükseklikleri belli olduktan sonra yapılır ve sonuç her bölmeye asılan yük etiketine yazılır.</p>

<h2>Aksesuarlar</h2>
<ul>
<li><strong>Palet destek kirişi:</strong> Paleti traversler arasında derinlemesine destekler, palet tabanı zayıfsa gereklidir.</li>
<li><strong>Tel ızgara veya sac kat:</strong> Paletsiz koli ya da küçük yükler için kat yüzeyi oluşturur.</li>
<li><strong>Dikme koruyucu ve sıra sonu bariyeri:</strong> Forklift trafiği olan köşelerde dikmeyi darbeye karşı korur.</li>
<li><strong>Arka file ve sırt bağlantısı:</strong> Sırt sırta sıralarda yükün arka koridora düşmesini önler.</li>
</ul>

<h2>Daha yoğun depolama gerekiyorsa</h2>
<p>Aynı üründen çok sayıda paletiniz varsa koridorları azaltan sistemler düşünülebilir: forkliftin raf içine girdiği <strong>sürmeli (drive-in) raf</strong>, paletlerin eğimli makaralarla öne aktığı <strong>dinamik raf</strong> veya paletlerin arka arkaya itildiği <strong>push-back raf</strong>. Bunlar her palete doğrudan erişimi kaybettirir. Hangisinin uyduğuna ürün çeşitliliği ve stok devir hızınıza bakarak keşifte birlikte karar veririz.</p>`,
    faq: [
      ["Bir bölmeye kaç palet konur?", "2.700 mm travers boyunda 3 Euro palet ya da 2 standart palet. Bölme boyu palet tipine ve kat yüküne göre seçilir."],
      ["Palet rafı zemine sabitlenmek zorunda mı?", "Evet. Her dikme ayağı zemine dübelle ankrajlanır. Ankrajsız raf, forklift darbesinde ya da dengesiz yüklemede devrilebilir."],
      ["Kaç kat yapılabilir?", "Kullanılabilir yüksekliğe ve yük yüksekliğine bağlı. Örneğin 8 m net yükseklikte ve 1,5 m yük yüksekliğinde genellikle zemin dahil 4 kat çıkar."],
      ["Mevcut forkliftimle kaç metreye kadar çıkabilirim?", "Forkliftin kaldırma yüksekliği ve o yükseklikteki taşıma kapasitesi sınırı belirler. Keşifte forklift etiketine bakıp üst katı buna göre planlarız."]
    ]
  },
  {
    slug: "orta-ve-hafif-tip-raf",
    draw: 1,
    name: "Orta ve hafif tip raf",
    title: "Orta ve Hafif Tip Raf | Koli ve Yedek Parça Rafı",
    desc: "Elle yüklenen koli, kasa ve yedek parça için orta ve hafif tip depo rafı. Kat yükü, derinlik, katlı raf platformu ve e-ticaret toplama düzeni.",
    h1: "Orta ve hafif tip raf",
    lead: "Elle yüklenen koli, kasa ve yedek parça için. Kat aralığı malınıza göre ayarlanır, ihtiyaç değişince sökmeden yeniden düzenlenir.",
    facts: [["Kat yükü", "Genellikle 100–800 kg"], ["Derinlik", "400–1.000 mm"], ["Yükseklik", "Genellikle 2–3 m"]],
    body: `
<h2>Hafif tip ile orta tip arasındaki fark</h2>
<p><strong>Hafif tip raf</strong> genellikle kat başına 100–250 kg taşır. Arşiv kutusu, ofis malzemesi, küçük parça ve kiler için yeterlidir. <strong>Orta tip raf</strong> daha kalın dikme ve kat kirişiyle kat başına 300–800 kg'a çıkar. Ağır koli, motor parçası, boya ve hırdavat gibi yoğun ürünler için seçilir.</p>
<p>İkisi de elle yükleme içindir. Forkliftle palet koyacaksanız <a href="/palet-rafi/">palet rafı</a> gerekir.</p>

<h2>Kat yüzeyi seçenekleri</h2>
<ul>
<li><strong>Sac kat:</strong> Temizlenmesi kolay, küçük parçalar düşmez. Atölye ve yedek parça depolarında yaygındır.</li>
<li><strong>Yonga levha veya MDF kat:</strong> Daha ekonomiktir, kuru ortamlarda koli depolamaya uygundur.</li>
<li><strong>Tel ızgara kat:</strong> Hava ve ışık geçirir, sprinkler suyunun alt katlara ulaşmasına izin verir.</li>
</ul>

<h2>E-ticaret ve toplama düzeni</h2>
<p>Siparişleri elle topluyorsanız rafın yüksekliği kadar dizilişi de önemlidir. Çok satan ürünleri bel ile göz hizasındaki katlara, ağır ürünleri alt katlara koymak toplama süresini kısaltır. Koridoru 900–1.200 mm tutmak tek kişinin araba ile rahat geçmesine yeter. Her kata raf adresi etiketi koyup ürünleri adresle eşleştirirseniz yeni gelen bir çalışan da ürünü kolayca bulur.</p>

<h2>Yükseklik yetmiyorsa: katlı raf platformu</h2>
<p>Tavan yüksek ama ürünler elle toplanıyorsa raflar iki ya da üç kat üst üste kurulabilir. Raf dikmelerinin taşıdığı yürüme yolu, merdiven ve korkuluk ile üst katlara erişilir. Daha geniş açık alan gerekiyorsa <a href="/mezanin-kat/">mezanin kat</a> daha uygun olabilir.</p>`,
    faq: [
      ["Cıvatasız raf sağlam mı?", "Kancalı (cıvatasız) raflar kat kirişini dikmeye kilitler ve doğru kurulduğunda etiketinde yazan yükü güvenle taşır. Uzun ve dar raflar duvara ya da birbirine bağlanmalıdır."],
      ["Katlar sonradan yer değiştirebilir mi?", "Evet. Kat kirişleri dikmedeki deliklere takılı olduğundan aralık genellikle 25–50 mm adımlarla değiştirilebilir."],
      ["Raflar duvara sabitlenmeli mi?", "Yüksekliği derinliğinin yaklaşık 4–5 katını geçen raflar devrilmeye karşı duvara, tavana ya da sırt sırta birbirine bağlanır."]
    ]
  },
  {
    slug: "kantilever-raf",
    draw: 2,
    name: "Kantilever raf",
    title: "Kantilever Raf | Boru, Profil ve Kereste Rafı",
    desc: "Boru, profil, kereste, levha gibi uzun malzemeler için tek veya çift taraflı kantilever raf. Kol boyu, dikme aralığı ve dış ortam seçenekleri.",
    h1: "Kantilever raf",
    lead: "Boru, profil, kereste ve levha gibi uzun malzemeler için. Önünde dikme olmadığı için yük yandan, tek hamlede alınıp konur.",
    facts: [["Kol boyu", "Genellikle 600–1.500 mm"], ["Tip", "Tek veya çift taraflı"], ["Ortam", "İç mekân ve açık alan"]],
    body: `
<h2>Ne zaman kantilever?</h2>
<p>Palet rafında uzun bir boru iki bölmeye yayılır ve aradaki dikme yüklemeyi zorlaştırır. Kantilever rafta kollar tek taraflı dikmeden dışarı doğru uzanır. Önde hiçbir engel kalmaz, 6 m'lik bir profili forklift ya da vinçle tek seferde yerleştirebilirsiniz. Yapı market, metal ticareti, ahşap ve PVC doğrama atölyeleri bu sistemi en çok kullananlardır.</p>

<h2>Tek taraflı mı, çift taraflı mı?</h2>
<ul>
<li><strong>Tek taraflı:</strong> Duvar dibine kurulur, kollar koridora bakar.</li>
<li><strong>Çift taraflı:</strong> Depo ortasında iki koridora da hizmet eder, alanı daha verimli kullanır.</li>
</ul>

<h2>Dikme aralığı ve yükün oturması</h2>
<p>Uzun malzemenin sehim yapmaması için yük, aynı seviyedeki en az üç kola oturacak şekilde planlanır. Dikme aralığı malzemenin boyuna ve sertliğine göre seçilir. Kol uçlarındaki stoperler yuvarlak yüklerin kaymasını önler. Kol yükü ve dikme yükü ayrı ayrı hesaplanıp etikete yazılır.</p>

<h2>Açık alanda kullanım</h2>
<p>Stok sahası açıktaysa sıcak daldırma galvaniz kantilever tercih edilir. Kollara eğimli yüzey ya da çatı eklenerek yağmur suyu yönlendirilebilir.</p>`,
    faq: [
      ["Kantilever raf ne kadar yük taşır?", "Kol uzunluğuna, kol kesitine ve dikme yüksekliğine göre değişir. Hafif tipte kol başına yüzlerce kilo, ağır tipte tonlar mertebesinde yük taşınabilir. Kesin değer projede hesaplanır."],
      ["Kollar yükseklik ayarlı mı?", "Evet. Kollar dikmeye cıvatayla ya da kancayla takılır, aralık ihtiyaca göre değiştirilir."],
      ["Levha (sac, MDF) da konur mu?", "Konur. Levha için kolların üzerine kat ya da ızgara eklenerek düz bir yüzey oluşturulur."]
    ]
  },
  {
    slug: "mezanin-kat",
    draw: 3,
    name: "Mezanin kat",
    title: "Mezanin Kat | Depoya Çelik Ara Kat",
    desc: "Yüksek tavanlı depo ve atölyelere çelik mezanin kat: döşeme seçenekleri, m² yükü, merdiven, korkuluk, palet kapısı ve zemin kontrolü.",
    h1: "Mezanin kat",
    lead: "Yüksek tavanlı depoya, binaya dokunmadan ikinci bir kullanım katı. Altı depo olarak kalır, üstü ofis, toplama alanı ya da hafif raf olur.",
    facts: [["Taşıyıcı", "Çelik kolon ve kiriş"], ["Döşeme", "Sac, ızgara veya panel"], ["Kurulum", "Sökülüp taşınabilir"]],
    body: `
<h2>Mezanin ne kazandırır?</h2>
<p>Tavanı 5–6 m'yi geçen bir depoda üst boşluk çoğu zaman kullanılmaz. Çelik mezanin bu boşluğu yürünebilir bir kata çevirir. Taşınmaya ya da ek bina yapmaya göre çok daha kısa sürede kurulur. İhtiyaç değiştiğinde sökülüp başka yere taşınabilir.</p>

<h2>Döşeme ve taşıma yükü</h2>
<p>Mezanin, üzerinde ne olacağına göre metrekare başına taşıma yüküyle tasarlanır. Ofis ve hafif depolama için daha düşük, ağır koli ya da raf için daha yüksek bir değer seçilir. Döşeme seçenekleri:</p>
<ul>
<li><strong>Trapez sac ve üzerine panel:</strong> Ofis ve toplama alanları için düz, sessiz bir yüzey.</li>
<li><strong>Çelik ızgara:</strong> Işık ve sprinkler suyu geçer, yağlı ortamlarda kaymaz.</li>
<li><strong>Kalın panel veya sac döşeme:</strong> Ağır ve tekerlekli yükler için.</li>
</ul>

<h2>Güvenlik parçaları</h2>
<ul>
<li>Merdiven ve tutamaklı korkuluk, ara korkuluk ve topuk levhası</li>
<li>Paletin forkliftle üst kata verildiği yerde, korkuluğu hiçbir zaman açık bırakmayan palet kapısı</li>
<li>Kolon diplerinde forklift trafiğine karşı koruyucu</li>
</ul>

<h2>Keşifte neye bakıyoruz?</h2>
<p>Kolonlar yükü zemine noktasal olarak verir. Bu yüzden zemin betonunun kalınlığı ve durumu kontrol edilir, gerekirse kolon ayağı plakası büyütülür. Binanın yangın kaçış yolları, sprinkler ve aydınlatma düzeni de mezanin yerleşimini etkiler. Bunları keşifte sizinle birlikte kontrol ederiz.</p>
<p>Üst katta yalnızca elle toplanan raflar olacaksa <a href="/orta-ve-hafif-tip-raf/">raf taşıyıcılı katlı platform</a> daha ekonomik bir seçenek olabilir.</p>`,
    faq: [
      ["Mezanin için binada değişiklik gerekir mi?", "Mezanin kendi kolonlarıyla zemine oturur, binanın taşıyıcı sistemine bağlanmaz. Yine de yangın, kaçış yolu ve ruhsat şartları binaya göre değişir ve keşifte kontrol edilir."],
      ["Üstüne ofis yapılabilir mi?", "Evet. Döşemeye panel, üstüne bölme duvar ve tavan eklenerek ofis yapılabilir. Taşıma yükü buna göre seçilir."],
      ["Mezanin sökülüp taşınabilir mi?", "Cıvatalı çelik yapı olduğu için sökülüp yeniden kurulabilir."]
    ]
  },
  {
    slug: "market-rafi",
    draw: 4,
    name: "Market rafı",
    title: "Market Rafı ve Gondol Raf | Mağaza Raf Sistemleri",
    desc: "Market, eczane, kırtasiye ve mağazalar için gondol raf: duvar rafı, orta ada, uç gondol, kasa önü standı, etiket kanalı ve reyon planı.",
    h1: "Market ve gondol rafı",
    lead: "Mağaza içi duvar ve ada rafları. Reyon planınıza göre ölçülendirilir, etiket kanalı ve aksesuarlarıyla birlikte kurulur.",
    facts: [["Yükseklik", "Genellikle 1.400–2.200 mm"], ["Raf derinliği", "Genellikle 300–500 mm"], ["Tip", "Duvar, ada, uç gondol"]],
    body: `
<h2>Gondol raf çeşitleri</h2>
<ul>
<li><strong>Duvar rafı:</strong> Tek taraflı, duvar boyunca uzanır. Mağazanın en yüksek ve en dolu yüzeyidir.</li>
<li><strong>Orta ada (çift taraflı gondol):</strong> İki koridora birden ürün sunar. Görüş hattını kapatmamak için genellikle duvar rafından alçak tutulur.</li>
<li><strong>Uç gondol:</strong> Ada sonlarına konur. Kampanya ve yeni ürün için mağazanın en çok görülen yeridir.</li>
<li><strong>Kasa önü standı:</strong> Ödeme sırasında alınan küçük ürünler için.</li>
</ul>

<h2>Reyon planı</h2>
<p>Ana koridorlarda iki alışveriş arabasının yan yana geçebilmesi, ara koridorlarda ise bir araba ile bir müşterinin rahat geçebilmesi hedeflenir. Rafları yerleştirmeden önce mağaza planını çiziyor, giriş, kasa ve soğuk dolap yerlerine göre müşterinin dolaşacağı yolu birlikte belirliyoruz.</p>

<h2>Aksesuarlar</h2>
<ul>
<li>Fiyat etiket kanalı ve ön çıta</li>
<li>Askılı ürünler için delikli arka panel ve askı kancası</li>
<li>Tel sepet, bölme teli ve ürün itici</li>
<li>Alt baza ve baza kapağı</li>
</ul>
<p>Mağazanızın arka deposu için <a href="/orta-ve-hafif-tip-raf/">orta tip raf</a> ya da <a href="/palet-rafi/">palet rafı</a> da aynı keşifte planlanabilir.</p>`,
    faq: [
      ["Raf rengi seçilebilir mi?", "Evet. Gondol raflar elektrostatik toz boyalıdır ve mağaza kimliğinize uygun renkte yapılabilir."],
      ["Raf yükseklikleri ayarlanır mı?", "Raf kolları arka dikmedeki deliklere takılır, ürün yüksekliğine göre aralık değiştirilir."],
      ["Eczane ve kırtasiye için de uygun mu?", "Uygun. Raf derinliği ve aksesuarlar daha küçük ürünlere göre seçilir."]
    ]
  },
  {
    slug: "arsiv-rafi",
    draw: 5,
    name: "Arşiv rafı",
    title: "Arşiv Rafı ve Hareketli Arşiv Sistemi",
    desc: "Klasör, dosya kutusu ve evrak için sabit arşiv rafı ve raylı hareketli (kompakt) arşiv. Kapasite, zemin yükü ve kilit seçenekleri.",
    h1: "Arşiv rafı",
    lead: "Klasör, dosya kutusu ve evrak için. Yer darsa raylar üzerinde hareket eden kompakt arşiv aynı odaya çok daha fazla dosya sığdırır.",
    facts: [["Tip", "Sabit veya hareketli"], ["Kat aralığı", "Klasör yüksekliğine göre"], ["Kilit", "İsteğe bağlı"]],
    body: `
<h2>Sabit arşiv rafı</h2>
<p>Klasör ve arşiv kutusu ölçüsüne göre kat aralığı ayarlanan, kancalı ya da cıvatalı raflardır. Kat aralığını klasör yüksekliğine göre seçmek, aynı yüksekliğe bir kat daha sığdırmayı sağlar. Her rafa ve kata adres etiketi konarak dosyalar düzenli tutulur.</p>

<h2>Hareketli (kompakt) arşiv</h2>
<p>Raflar zemine döşenen raylar üzerinde, kol ya da volanla yana kayar. Her raf arasında koridor bırakmak yerine yalnızca ihtiyaç duyulan yerde tek bir koridor açılır. Böylece aynı odaya sabit rafa göre yaklaşık iki kat dosya sığar.</p>

<h2>Zemin yükünü atlamayın</h2>
<p>Dolu bir arşiv metrekare başına beklenenden çok daha ağırdır. Özellikle üst katlardaki arşiv odalarında binanın döşeme taşıma kapasitesi göz önüne alınmalıdır. Keşifte oda ölçüsü ve kat bilgisiyle birlikte bunu da konuşuruz.</p>

<h2>Gizlilik ve erişim</h2>
<p>Kişisel veri içeren dosyalar için hareketli arşivin kilitlenebilir modeli ya da kapılı dolap tipi raflar seçilebilir. Böylece arşive yetkisiz erişim fiziksel olarak da sınırlanır.</p>`,
    faq: [
      ["Hareketli arşiv ne kadar yer kazandırır?", "Oda ölçüsüne bağlı olarak aynı alanda sabit rafa göre yaklaşık iki kat kapasite sağlar."],
      ["Mevcut zemine ray döşenebilir mi?", "Genellikle evet. Raylar zemine sabitlenir ya da yükseltilmiş bir zemin içine gömülür. Zeminin düz olması önemlidir."],
      ["Arşiv rafı kilitlenebilir mi?", "Hareketli arşivlerde merkezi kilit, sabit raflarda kapılı dolap seçeneği vardır."]
    ]
  },
  {
    slug: "raf-denetimi",
    draw: 0,
    name: "Raf denetimi",
    title: "Raf Denetimi ve Hasar Kontrolü | EN 15635",
    desc: "Palet rafı ve depo raf sistemlerinde periyodik kontrol: EN 15635'e göre yeşil, sarı, kırmızı hasar sınıfları, rapor ve onarım.",
    h1: "Raf denetimi ve hasar kontrolü",
    lead: "Eğilmiş bir dikme ya da yerinden çıkmış bir travers kilidi, raf sırasının tamamını riske atar. Düzenli kontrol, hasarı büyümeden yakalar.",
    facts: [["Standart", "EN 15635"], ["Uzman kontrolü", "En az yılda bir"], ["Çıktı", "Rapor ve onarım listesi"]],
    body: `
<h2>Neden düzenli kontrol?</h2>
<p>Raf hasarlarının büyük kısmı forklift darbesiyle oluşur ve çoğu zaman bildirilmez. Alt kottaki küçük bir ezik dikmenin taşıma kapasitesini belirgin şekilde düşürebilir. EN 15635 standardı, depo raf sistemlerinin kullanımı ve bakımı için en az yılda bir kez uzman kontrolü yapılmasını, aradaki dönemde de depo ekibinin düzenli görsel kontrol yapmasını öngörür.</p>

<h2>Hasar sınıfları</h2>
<ul>
<li><strong>Yeşil:</strong> Hasar sınırın altında. Parça kullanılabilir, bir sonraki kontrolde tekrar bakılır.</li>
<li><strong>Sarı:</strong> Onarım gerekir. Bölüm yeniden yüklenmez, hasarlı parça kısa süre içinde değiştirilir.</li>
<li><strong>Kırmızı:</strong> Ciddi hasar. Bölüm hemen boşaltılır ve onarılana kadar kullanılmaz.</li>
</ul>

<h2>Kontrolde neye bakılır?</h2>
<ul>
<li>Dikmelerde ezik, eğilme ve çatlak</li>
<li>Travers kilitlerinin yerinde olup olmadığı, traverste kalıcı sehim</li>
<li>Çerçeve çaprazlarında hasar</li>
<li>Zemin ankrajları ve ayak plakaları</li>
<li>Yük etiketinin yerinde ve güncel olması, etiketteki yükün aşılmaması</li>
<li>Rafın düşeyliği ve sıraların hizası</li>
</ul>

<h2>Ne teslim ediyoruz?</h2>
<p>Kontrol sonunda her bulgunun yerini (sıra, bölme, kat), sınıfını ve fotoğrafını içeren bir rapor ile onarım listesi veriyoruz. Kırmızı sınıftaki bölümleri kontrol sırasında yerinde işaretleyip sizi hemen bilgilendiriyoruz.</p>
<p>Rafın kurulumundan itibaren güvenli kalması için <a href="/palet-rafi/">palet rafı</a> sayfasındaki dikme koruyucu ve sıra sonu bariyeri gibi aksesuarlara da göz atın.</p>`,
    faq: [
      ["Raf kontrolü ne sıklıkla yapılmalı?", "EN 15635'e göre en az yılda bir kez uzman kontrolü yapılması, aradaki dönemde depo ekibinin düzenli görsel kontrol yapması önerilir. Yoğun forklift trafiği olan depolarda daha sık kontrol gerekir."],
      ["Başka firmanın kurduğu rafı da kontrol ediyor musunuz?", "Evet. Kontrol, rafı kimin kurduğundan bağımsız olarak yapılır."],
      ["Hasarlı dikme tamir edilebilir mi?", "Hasarlı dikme düzeltilmez, değiştirilir. Bunun için bölüm boşaltılır ve dikme ya da çerçeve yenisiyle değiştirilir."]
    ]
  }
];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const header = `<header class="site-header">
  <div class="wrap header-in">
    <a class="brand" href="/" aria-label="Temel Raf Sistemleri ana sayfa">
      <svg class="brand-mark" viewBox="0 0 40 40" aria-hidden="true">
        <rect x="4" y="3" width="5" height="34" fill="var(--dikme)"/>
        <rect x="31" y="3" width="5" height="34" fill="var(--dikme)"/>
        <rect x="9" y="12" width="22" height="4" fill="var(--travers)"/>
        <rect x="9" y="25" width="22" height="4" fill="var(--travers)"/>
      </svg>
      <span class="brand-text"><b>Temel</b> Raf Sistemleri</span>
    </a>
    <nav class="nav" aria-label="Ana menü">
      <a href="/#urunler">Raf çeşitleri</a>
      <a href="/#planlayici">Depo planlayıcı</a>
      <a href="/#surec">Nasıl çalışıyoruz</a>
      <a href="/raf-denetimi/">Raf denetimi</a>
    </nav>
    <a class="btn btn-small" href="/#teklif">Teklif iste</a>
  </div>
</header>`;

const footerLinks = pages.map((p) => `<li><a href="/${p.slug}/">${p.name}</a></li>`).join("");
const footer = `<footer class="site-footer">
  <div class="wrap footer-in">
    <div>
      <p class="brand-text"><b>Temel</b> Raf Sistemleri</p>
      <p>Depo, palet, market ve arşiv rafı. Keşif, projelendirme, montaj.</p>
      <p class="f-contact"><a href="tel:${TEL}">${TEL_TXT}</a> <a href="https://wa.me/${WA}" target="_blank" rel="noopener">WhatsApp</a></p>
    </div>
    <nav aria-label="Raf çeşitleri"><ul class="f-links">${footerLinks}</ul></nav>
    <p class="credit">© ${new Date().getFullYear()} Temel Raf Sistemleri. Web tasarım: <a href="https://selvarn.com" target="_blank" rel="noopener nofollow">Selvarn</a></p>
  </div>
</footer>`;

const waFloat = home.match(/<a class="wa-float"[\s\S]*?<\/a>/)[0];

function page(p) {
  const url = `${SITE}/${p.slug}/`;
  const others = pages.filter((o) => o.slug !== p.slug);
  const waText = encodeURIComponent(`Merhaba, ${p.name.toLocaleLowerCase("tr-TR")} için keşif ve teklif istiyorum.`);
  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: p.h1,
      serviceType: p.name,
      description: p.desc,
      url,
      areaServed: "TR",
      provider: { "@type": "Organization", name: "Temel Raf Sistemleri", url: SITE + "/", telephone: "+90 533 435 22 68" }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana sayfa", item: SITE + "/" },
        { "@type": "ListItem", position: 2, name: p.name, item: url }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: p.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } }))
    }
  ];
  return `<!doctype html>
<html lang="tr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(p.title)} | Temel Raf Sistemleri</title>
<meta name="description" content="${esc(p.desc)}">
<link rel="canonical" href="${url}">
<meta name="theme-color" content="#1b4f9c">
<meta property="og:type" content="article">
<meta property="og:locale" content="tr_TR">
<meta property="og:site_name" content="Temel Raf Sistemleri">
<meta property="og:title" content="${esc(p.title)}">
<meta property="og:description" content="${esc(p.desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE}/og.png">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,300..900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/styles.css?v=__V__">
${ld.map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join("\n")}
</head>
<body>
<a class="skip" href="#icerik">İçeriğe geç</a>
${header}
<main id="icerik">
<section class="page-hero">
  <div class="wrap page-hero-in">
    <div>
      <nav class="crumbs" aria-label="Konum"><a href="/">Ana sayfa</a> <span aria-hidden="true">/</span> <span aria-current="page">${p.name}</span></nav>
      <h1>${p.h1}</h1>
      <p class="lead">${p.lead}</p>
      <div class="hero-actions">
        <a class="btn" href="/#teklif">Ücretsiz keşif iste</a>
        <a class="btn btn-line" href="https://wa.me/${WA}?text=${waText}" target="_blank" rel="noopener">WhatsApp'tan yaz</a>
      </div>
    </div>
    <div class="page-figure">
      ${drawings[p.draw].replace('class="product-draw"', 'class="product-draw page-draw"')}
      <dl class="specs">${p.facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}</dl>
    </div>
  </div>
</section>
<section class="section page-body">
  <div class="wrap page-grid">
    <article class="prose">${p.body}
<h2>Sık sorulanlar</h2>
<div class="faq">
${p.faq.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("\n")}
</div>
    </article>
    <aside class="side">
      <div class="side-box">
        <p class="side-title">Ölçünüzü birlikte alalım</p>
        <p>Keşif ücretsiz. Yerleşim çizimi teklifle birlikte gelir.</p>
        <a class="btn" href="/#teklif">Teklif iste</a>
        <p class="side-phone"><a href="tel:${TEL}">${TEL_TXT}</a></p>
      </div>
      <nav class="side-links" aria-label="Diğer raf çeşitleri">
        <p class="side-title">Diğer raf çeşitleri</p>
        <ul>${others.map((o) => `<li><a href="/${o.slug}/">${o.name}</a></li>`).join("")}</ul>
      </nav>
    </aside>
  </div>
</section>
</main>
${footer}
${waFloat}
</body>
</html>
`;
}

const V = process.env.V || String(Date.now()).slice(-6);
for (const p of pages) {
  mkdirSync(`site/${p.slug}`, { recursive: true });
  writeFileSync(`site/${p.slug}/index.html`, page(p).replace("__V__", V));
}

// 404
const notFound = page({
  slug: "404", draw: 0, name: "Sayfa bulunamadı", title: "Sayfa bulunamadı", desc: "Aradığınız sayfa taşınmış ya da kaldırılmış olabilir.",
  h1: "Bu sayfa burada değil", lead: "Adres yanlış yazılmış ya da sayfa taşınmış olabilir. Raf çeşitlerine aşağıdan ulaşabilirsiniz.",
  facts: [], body: `<h2>Raf çeşitleri</h2><ul>${pages.map((o) => `<li><a href="/${o.slug}/">${o.name}</a></li>`).join("")}</ul>`, faq: []
})
  .replace(/<link rel="canonical"[^>]*>\n/, '<meta name="robots" content="noindex">\n')
  .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\n?/g, "")
  .replace(/<h2>Sık sorulanlar<\/h2>\s*<div class="faq">\s*<\/div>/, "")
  .replace("__V__", V);
writeFileSync("site/404.html", notFound);

const urls = [{ loc: SITE + "/", pr: "1.0" }, ...pages.map((p) => ({ loc: `${SITE}/${p.slug}/`, pr: "0.8" }))];
writeFileSync(
  "site/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u.loc}</loc><lastmod>${TODAY}</lastmod><priority>${u.pr}</priority></url>`).join("\n")}
</urlset>
`
);
writeFileSync("site/robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);

// Ana sayfadaki css/js sürüm parametresi
writeFileSync("site/index.html", home.replace(/styles\.css\?v=[^"]+/, `styles.css?v=${V}`).replace(/app\.js\?v=[^"]+/, `app.js?v=${V}`));
console.log("ok", pages.length, "sayfa, v=" + V);
