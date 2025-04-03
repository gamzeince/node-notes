## **📌 Node.js Notlar Uygulaması**

Bu proje, Node.js ve fs modülünü kullanarak notlarınızı kolayca ekleyip, silebileceğiniz basit bir uygulama. Uygulama sayesinde dosya okuma, yazma, ekleme ve silme işlemlerini öğrenmiş oldum.

<p align="center">
  <img src="https://github.com/user-attachments/assets/23968cb4-4235-4185-b0cf-b85c5a83c770" alt="Kodun Çıktısı" width="600"/>
</p>
<p align="center"><i>Yukarıdaki görsel, uygulamanın çalıştırılmasından sonra elde edilen çıktıyı göstermektedir.</i></p>



## **🖥️ Proje Hakkında**


✅ Kullanıcıdan alınan notları notlar.json dosyasına kaydediyorum.

✅ Kaydedilen notları istediğiniz zaman listeleyebilirsiniz.

✅ Belirli bir ID'ye sahip olan notları silebilirsiniz.


## **🖥️ Kullanılan Teknolojiler**
Node.js

fs (File System)

## **🖥️ Örnek Kullanım**

1️⃣ Yeni Not Ekleme
Komut: node index.js ekle "Bu benim ilk notum!"

2️⃣ notları Listeleme
node index.js listele

3️⃣ Not Silme
node index.js sil 1


## **🖥️ Hata Yönetimi**
Projede hata yönetimi için try/catch yapısı kullanıldı. Eğer dosya okuma sırasında bir hata meydana gelirse, dosya otomatik olarak oluşturulur. Böylece her şey güvenle işlemeye devam eder.




