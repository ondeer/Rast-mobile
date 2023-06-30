Projede bizden kullanıcıların eklediği sosyal medya bilgilerini tablo üzerinden gösterilmemiz isteniyor. Bunun için yaptığım adımları aşağıda belirttim.
- Bana verilen dökümanın hepsini okuyarak ne istendiğini anladım.
- Projeyi daha önceden kullandığım react ile yapmaya karar verdim.
- Css olarak daha önceden de kullandığım module.css ile ilerlemeyi seçtim.
- Figma tasarımını inceleyerek hangi elemanları kullanacağımı ve componenet yapısı hakkında taslak olarak oluşturdum.
- Daha öncesinde datagrid kütüphanesini kullanmadığım için onunla ilgili dökümanlar okuyarak bilgi sahibi oldum.
- Dosyalarımı assets(gerekli resim dosyaları vs.), component, helperFunctions(gerekli birden fazla kullanılar fonksiyonlar) ve mock(headerdaki verileri çekmek için) 4 adet dosya oluşturdum.  
- Component dosyası içerisinde ilk olarak layout dosyası oluşturarak Navbar componentini oluşturdum ve içerisinde gerekli olan logoyu assets dosyası içerisine ekledim. 
Burada yukarıda da belirttiğim gibi linkleri mock dosyasından çekerek ilerledim ve en son sosyal medya ikonlarını ekleyerek navbar kısmını bitirdim.
- Projede kod bütünlüğünü sağlamak için bütün componentlerde functional component, arrow functions kullanıldı. Import yapılırken belli bir sıra kuralı belirlendi.(react(paketler) - componentler - assets - mock - helper - css dosyları) 
- Content dosyasının içerisindeki DataGridComponent componenti ile ana içeriği tutmak için oluşturdum. Bu komponentte de ilk olarak tabloyu oluşturdum ve daha sonrasında header kısmını oluşturarak gerekli css kodlarını yazarak tamamladım.
- Tabloya verilerin yüklenmesi şuan belki az data olduğu için belli olmasada datalar çoğaldıkça bekleme süresi artacağından bir loading komponenti ile buranın yüklendiğini client tarafında gösterdim.
- responsive tasarımı için gerekli css kodlarını yazarak projemi sonlandırdım.