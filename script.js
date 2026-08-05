/* ============ KONFIGURASI ============ */
// GANTI nomor di bawah ini dengan nomor WhatsApp bisnis Anda (format: kode negara tanpa +, tanpa spasi)
const WA_NUMBER = "6282280662066";
const WA_DEFAULT_MSG = "Halo Tatang_Decoration, saya ingin tanya-tanya soal dekorasi acara saya.";

function waLink(msg){
  return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg);
}
["navWaBtn","heroWaBtn","ctaWaBtn","floatWaBtn"].forEach(id=>{
  document.getElementById(id).href = waLink(WA_DEFAULT_MSG);
});

/* ============ NAVIGASI HALAMAN ============ */
function showPage(name, el){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById("page-"+name).classList.add("active");
  document.querySelectorAll(".navlink").forEach(b=>b.classList.remove("active"));
  if(el){ el.classList.add("active"); }
  else{
    document.querySelectorAll(".navlink").forEach(b=>{
      if(b.textContent.trim()===(name==="home"?"Beranda":"Galeri")) b.classList.add("active");
    });
  }
  document.querySelector("nav.links").classList.remove("open");
  window.scrollTo({top:0,behavior:"smooth"});
}

/* ============ DATA KATEGORI & KONSEP ============ */
// Field "img" adalah path ke file foto Anda, taruh di dalam folder images/.
// Kalau file belum ada / gagal dimuat, kartu akan otomatis menampilkan
// kotak placeholder berisi nama file yang perlu diisi, jadi tampilan tidak rusak.
const CATEGORIES = [
  {
    key:"pernikahan", label:"Pernikahan", theme:"#1F3B2C", tint:"#E7EEE7",
    desc:"Dekorasi akad, resepsi, dan pelaminan. Jika Ingin Lebih Tau banya Konsep Hubungi Lewat WhatsApp",
    items:[
      {img:"gambar weding/Tunangan dan Pernikahan 4 x 2.5 meter/foto30.jpeg", title:"cokelat mahogani 4 x 2.5 meter", tag:"Akad", desc:"dekorasi pelaminan pernikahan dengan konsep elegan dan mewah. Latar belakang menggunakan kain berwarna cokelat mahogani yang dipadukan dengan rangkaian bunga bernuansa putih, cokelat, oranye, dan merah bata."},
      {img:"gambar weding/Tunangan dan Pernikahan 6 meter/foto52.jpeg", title:"Dekorasi Modern Elegan 6 meter", tag:"Wedding", desc:"Dekorasi pelaminan bergaya modern minimalis dengan dominasi warna putih, hijau, dan cokelat alami. Latar belakang dihiasi bunga putih, dedaunan kering, serta lampu LED berbentuk oval yang memberikan kesan elegan dan mewah."},
      {img:"gambar weding/Tunangan dan Pernikahan 5 x 2.5 meter/foto42.jpeg", title:"Nuansa Wayang 5 x 2.5 meter", tag:"Resepsi", desc:"Dekorasi pelaminan mengusung konsep adat tradisional Jawa yang ditandai dengan ornamen gunungan wayang berwarna emas sebagai latar belakang. Dipadukan dengan rangkaian bunga putih dan cokelat serta pencahayaan hangat, dekorasi ini menghadirkan nuansa klasik, megah, dan tetap elegan dengan sentuhan budaya Indonesia."},
      {img:"gambar weding/Tunangan dan Pernikahan 6 meter/foto57.jpeg", title:"Dekorasi Luxury Glamour 6 meter", tag:"Wedding", desc:"Dekorasi pelaminan bertema luxury glamour dengan perpaduan warna biru, putih, dan krem. Rangkaian bunga berwarna biru dan putih dipadukan dengan lampu gantung kristal serta kain drapery pada langit-langit, menciptakan suasana yang mewah, romantis, dan berkelas. Sofa abu-abu di bagian tengah menjadi pusat perhatian sekaligus area utama untuk prosesi dan sesi foto pengantin."}
    ]
  },
  {
    key:"lamaran", label:"Lamaran", theme:"#C98374", tint:"#F6E8E4",
    desc:"Konsep intim untuk sesi seserahan dan tukar cincin. Jika Ingin Lebih Tau banya Konsep Hubungi Lewat WhatsApp",
    items:[
      {img:"gambar weding/Tunangan dan Pernikahan 3 - 3.5 meter/foto8.jpeg", title:"Putih Minimalis 3 - 3.5 meter", tag:"Indoor", desc:"Dekorasi pelaminan bertema modern elegan dengan dominasi bunga berwarna oranye, merah, putih, dan hijau. Menggunakan sofa abu-abu sebagai pusat dekorasi, dipadukan dengan pencahayaan hangat serta tanaman hijau di bagian bawah yang memberikan kesan mewah, segar, dan nyaman."},
      {img:"gambar weding/Tunangan dan Pernikahan 3 - 3.5 meter/foto11.jpeg", title:"Lamaran Hijau Putih 3 - 3.5 meter", tag:"Outdoor", desc:"Dekorasi pelaminan bergaya garden party yang didominasi warna hijau dan putih. Dihiasi berbagai jenis bunga, dedaunan, serta ornamen kipas dekoratif dengan dua kursi putih sebagai tempat duduk pengantin. Konsep ini memberikan suasana alami, segar, dan romantis yang cocok untuk acara di area terbuka."},
      {img:"gambar weding/Tunangan dan Pernikahan 3 - 3.5 meter/foto16.jpeg", title:"Backdrop Foto Lamran Sederhana 3 - 3.5 meter", tag:"Dokumentasi", desc:"Dekorasi pelaminan dengan tema klasik mewah menggunakan latar kain merah marun yang dipadukan dengan rangkaian bunga berwarna merah muda, merah, putih, dan hijau. Sofa abu-abu di bagian depan serta lampu gantung (chandelier) memberikan kesan elegan dan hangat."}
    ]
  },
  {
    key:"Tedak siten & Siraman", label:"Tedak siten & Siraman", theme:"#B8925A", tint:"#F3EAD8",
    desc:"Dekorasi Tedak siten & Siraman. Jika Ingin Lebih Tau banya Konsep Hubungi Lewat WhatsApp",
    items:[
      {img:"gambar weding/Siraman 3-5 meter/foto85.jpeg", title:"Siraman 3-5 meter", tag:"Outdoor", desc:"Dekorasi bertema modern garden dengan ornamen lengkung berwarna biru muda yang dipadukan dengan rangkaian bunga merah, merah muda, dan putih. Latar belakang berupa dinding tanaman hijau serta lampu gantung menciptakan suasana segar, elegan, dan romantis. Dekorasi ini cocok digunakan sebagai area prosesi siraman atau spot foto pada acara outdoor."},
      {img:"gambar weding/Tidak siten atau Turun tanah/foto97.jpeg", title:"Tedak siten minimalis", tag:"Indoor", desc:"Dekorasi untuk prosesi Tedak Siten mengusung konsep minimalis dengan latar pintu kayu tradisional yang dihiasi bunga putih dan hijau. Perpaduan unsur kayu, tanaman, dan pencahayaan hangat memberikan kesan alami, sederhana, namun tetap elegan. Dekorasi ini mencerminkan nuansa budaya Jawa yang hangat dan sakral."},
      {img:"gambar weding/Siraman 3-5 meter/foto86.jpeg", title:"Siraman 3-5 meter", tag:"Outdoor", desc:"Dekorasi siraman bergaya natural rustic dengan dominasi dedaunan hijau serta rangkaian bunga berwarna oranye, cokelat, merah, dan putih. Lampu gantung bernuansa hangat memperkuat kesan alami dan mewah, sehingga dekorasi ini sangat cocok digunakan sebagai latar prosesi siraman maupun sesi dokumentasi di area terbuka."}
    ]
  },
];

let activeCat = CATEGORIES[0].key;

/* ============ RENDER FOTO + PLACEHOLDER FALLBACK ============ */
function visualHtml(it, cat){
  return `
    <div class="visual-frame" style="background:${cat.tint};">
      <img src="${it.img}" alt="${it.title}" loading="lazy"
           onerror="this.parentElement.classList.add('img-error')">
      <div class="img-placeholder" style="color:${cat.theme};">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
          <rect x="3" y="6" width="18" height="14" rx="1.5"/>
          <circle cx="12" cy="13" r="3.4"/>
          <path d="M8 6l1.2-2h5.6L16 6"/>
        </svg>
        <span>Taruh foto di<br><code>${it.img}</code></span>
      </div>
    </div>`;
}

function renderChips(){
  const row = document.getElementById("chipRow");
  row.innerHTML = CATEGORIES.map(c=>
    `<button class="chip ${c.key===activeCat?'active':''}" onclick="selectCategory('${c.key}')">${c.label}</button>`
  ).join("");
}

function selectCategory(key){
  activeCat = key;
  renderChips();
  const cat = CATEGORIES.find(c=>c.key===key);
  document.getElementById("catTitle").textContent = cat.label;
  document.getElementById("catDesc").textContent = cat.desc;
  const grid = document.getElementById("galleryGrid");
  grid.innerHTML = cat.items.map((it,idx)=>`
    <div class="card" onclick="openModal('${key}', ${idx})">
      <div class="card-visual">
        ${visualHtml(it, cat)}
      </div>
      <div class="card-body">
        <span class="tag">${it.tag}</span>
        <h3>${it.title}</h3>
        <p>${it.desc}</p>
      </div>
    </div>
  `).join("");
}

function openModal(catKey, idx){
  const cat = CATEGORIES.find(c=>c.key===catKey);
  const it = cat.items[idx];
  document.getElementById("modalVisual").innerHTML = visualHtml(it, cat);
  document.getElementById("modalTag").textContent = it.tag + " — " + cat.label;
  document.getElementById("modalTitle").textContent = it.title;
  document.getElementById("modalDesc").textContent = it.desc + " Detail warna, bunga, dan ukuran dapat disesuaikan dengan lokasi dan anggaran acara Anda.";
  document.getElementById("modalWaBtn").href = waLink(
    "Halo Puspa Dekorasi, saya tertarik dengan konsep \"" + it.title + "\" (" + cat.label + "). Bisa tolong info lebih lanjut?"
  );
  document.getElementById("modalOverlay").classList.add("open");
}
function closeModal(){
  document.getElementById("modalOverlay").classList.remove("open");
}
document.addEventListener("keydown", e=>{ if(e.key==="Escape") closeModal(); });

/* init */
renderChips();
selectCategory(activeCat);