/* =========================================================
   KONFIGURASI WHATSAPP
   ========================================================= */

   const WA_NUMBER = "6282280662066";

   const WA_DEFAULT_MSG =
     "Halo Tatang_Decoration, saya ingin tanya-tanya soal dekorasi acara saya.";
   
   function waLink(msg){
     return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg);
   }
   
   
   /* =========================================================
      TOMBOL WHATSAPP
      ========================================================= */
   
   [
     "navWaBtn",
     "heroWaBtn",
     "ctaWaBtn",
     "floatWaBtn"
   ].forEach(id => {
   
     const el = document.getElementById(id);
   
     if(el){
       el.href = waLink(WA_DEFAULT_MSG);
     }
   
   });
   
   
   /* =========================================================
      NAVIGASI HALAMAN
      ========================================================= */
   
   function showPage(name, el){
   
     document
       .querySelectorAll(".page")
       .forEach(p => p.classList.remove("active"));
   
     const page =
       document.getElementById("page-" + name);
   
     if(page){
       page.classList.add("active");
     }
   
     document
       .querySelectorAll(".navlink")
       .forEach(b => b.classList.remove("active"));
   
     if(el){
   
       el.classList.add("active");
   
     }else{
   
       document
         .querySelectorAll(".navlink")
         .forEach(b => {
   
           if(
             b.textContent.trim() ===
             (name === "home" ? "Beranda" : "Galeri")
           ){
             b.classList.add("active");
           }
   
         });
   
     }
   
     const navLinks =
       document.querySelector("nav.links");
   
     if(navLinks){
       navLinks.classList.remove("open");
     }
   
     window.scrollTo({
       top: 0,
       behavior: "smooth"
     });
   
   }
   
   
   /* =========================================================
      DATA KATEGORI
      ========================================================= */
   
   const CATEGORIES = [
   
     /* =======================================================
        PERNIKAHAN
        ======================================================= */
   
     {
       key: "pernikahan",
   
       label: "Pernikahan",
   
       theme: "#1F3B2C",
   
       tint: "#E7EEE7",
   
       desc:
         "Dekorasi akad, resepsi, dan pelaminan. Jika Ingin Lebih Tau banya Konsep Hubungi Lewat WhatsApp",
   
       items: [
   
         /* ---------------------------------------------------
            KONSEP 1
            --------------------------------------------------- */
   
         {
           img:
             "gambar weding/Tunangan dan Pernikahan 4 x 2.5 meter/foto30.jpeg",
   
           title:
             "Dekorasi Pernikahan 4 meter",
   
           tag:
             "Wedding",
   
           desc:
             "",
   
           photos: [
   
             "gambar weding/Tunangan dan Pernikahan 4 x 2.5 meter/foto30.jpeg",
             "gambar weding/Tunangan dan Pernikahan 4 x 2.5 meter/foto31.jpeg",
             "gambar weding/Tunangan dan Pernikahan 4 x 2.5 meter/foto32.jpeg",
             "gambar weding/Tunangan dan Pernikahan 4 x 2.5 meter/foto33.jpeg",
             "gambar weding/Tunangan dan Pernikahan 4 x 2.5 meter/foto34.jpeg",
             "gambar weding/Tunangan dan Pernikahan 4 x 2.5 meter/foto35.jpeg",
             "gambar weding/Tunangan dan Pernikahan 4 x 2.5 meter/foto36.jpeg",
             "gambar weding/Tunangan dan Pernikahan 4 x 2.5 meter/foto37.jpeg",
             "gambar weding/Tunangan dan Pernikahan 4 x 2.5 meter/foto23.jpeg",
             "gambar weding/Tunangan dan Pernikahan 4 x 2.5 meter/foto24.jpeg",
             "gambar weding/Tunangan dan Pernikahan 4 x 2.5 meter/foto25.jpeg",
             "gambar weding/Tunangan dan Pernikahan 4 x 2.5 meter/foto26.jpeg",
             "gambar weding/Tunangan dan Pernikahan 4 x 2.5 meter/foto27.jpeg",
             "gambar weding/Tunangan dan Pernikahan 4 x 2.5 meter/foto28.jpeg",
             "gambar weding/Tunangan dan Pernikahan 4 x 2.5 meter/foto29.jpeg"
   
           ]
   
         },
   
   
         /* ---------------------------------------------------
            KONSEP 2
            --------------------------------------------------- */
   
         {
           img:
             "gambar weding/Tunangan dan Pernikahan 6 meter/foto52.jpeg",
   
           title:
             "Dekorasi Pernikahan 6 meter",
   
           tag:
             "Wedding",
   
           desc:
             "",
   
           photos: [
   
             "gambar weding/Tunangan dan Pernikahan 6 meter/foto52.jpeg",
             "gambar weding/Tunangan dan Pernikahan 6 meter/foto53.jpeg",
             "gambar weding/Tunangan dan Pernikahan 6 meter/foto54.jpeg",
             "gambar weding/Tunangan dan Pernikahan 6 meter/foto55.jpeg",
             "gambar weding/Tunangan dan Pernikahan 6 meter/foto56.jpeg",
             "gambar weding/Tunangan dan Pernikahan 6 meter/foto57.jpeg",
             "gambar weding/Tunangan dan Pernikahan 6 meter/foto58.jpeg",
             "gambar weding/Tunangan dan Pernikahan 6 meter/foto59.jpeg",
             "gambar weding/Tunangan dan Pernikahan 6 meter/foto60.jpeg",
             "gambar weding/Tunangan dan Pernikahan 6 meter/foto61.jpeg",
             "gambar weding/Tunangan dan Pernikahan 6 meter/foto62.jpeg",
             "gambar weding/Tunangan dan Pernikahan 6 meter/foto63.jpeg",
             "gambar weding/Tunangan dan Pernikahan 6 meter/foto64.jpeg",
             "gambar weding/Tunangan dan Pernikahan 6 meter/foto65.jpeg",
             "gambar weding/Tunangan dan Pernikahan 6 meter/foto66.jpeg",
             "gambar weding/Tunangan dan Pernikahan 6 meter/foto67.jpeg",
             "gambar weding/Tunangan dan Pernikahan 6 meter/foto68.jpeg",
             "gambar weding/Tunangan dan Pernikahan 6 meter/foto69.jpeg",
             "gambar weding/Tunangan dan Pernikahan 6 meter/foto70.jpeg",
             "gambar weding/Tunangan dan Pernikahan 6 meter/foto71.jpeg",
             "gambar weding/Tunangan dan Pernikahan 6 meter/foto72.jpeg",
             "gambar weding/Tunangan dan Pernikahan 6 meter/foto73.jpeg",
             "gambar weding/Tunangan dan Pernikahan 6 meter/foto74.jpeg",
             "gambar weding/Tunangan dan Pernikahan 6 meter/foto75.jpeg",
             "gambar weding/Tunangan dan Pernikahan 6 meter/foto49.jpeg",
             "gambar weding/Tunangan dan Pernikahan 6 meter/foto50.jpeg",
             "gambar weding/Tunangan dan Pernikahan 6 meter/foto51.jpeg"
   
           ]
   
         },
   
   
         /* ---------------------------------------------------
            KONSEP 3
            --------------------------------------------------- */
   
         {
           img:
             "gambar weding/Tunangan dan Pernikahan 5 x 2.5 meter/foto42.jpeg",
   
           title:
             "Dekorasi Pernikahan 5 meter",
   
           tag:
             "wedding",
   
           desc:
             "",
   
           photos: [
   
             "gambar weding/Tunangan dan Pernikahan 5 x 2.5 meter/foto42.jpeg",
             "gambar weding/Tunangan dan Pernikahan 5 x 2.5 meter/foto43.jpeg",
             "gambar weding/Tunangan dan Pernikahan 5 x 2.5 meter/foto44.jpeg",
             "gambar weding/Tunangan dan Pernikahan 5 x 2.5 meter/foto45.jpeg",
             "gambar weding/Tunangan dan Pernikahan 5 x 2.5 meter/foto46.jpeg",
             "gambar weding/Tunangan dan Pernikahan 5 x 2.5 meter/foto47.jpeg",
             "gambar weding/Tunangan dan Pernikahan 5 x 2.5 meter/foto48.jpeg",
             "gambar weding/Tunangan dan Pernikahan 5 x 2.5 meter/foto38.jpeg",
             "gambar weding/Tunangan dan Pernikahan 5 x 2.5 meter/foto39.jpeg",
             "gambar weding/Tunangan dan Pernikahan 5 x 2.5 meter/foto40.jpeg",
             "gambar weding/Tunangan dan Pernikahan 5 x 2.5 meter/foto41.jpeg"

   
           ]
   
         },
   
   
         /* ---------------------------------------------------
            KONSEP 4
            --------------------------------------------------- */
   
         {
           img:
             "gambar weding/dekor 10 meter/foto76.jpeg",
   
           title:
             "Dekorasi Pernikahan 10 meter",
   
           tag:
             "Wedding",
   
           desc:
             "",
   
           photos: [
   
             "gambar weding/dekor 10 meter/foto76.jpeg",
             "gambar weding/dekor 10 meter/foto77.jpeg",
             "gambar weding/dekor 10 meter/foto78.jpeg",
             "gambar weding/dekor 10 meter/foto79.jpeg",
             "gambar weding/dekor 10 meter/foto80.jpeg",
             "gambar weding/dekor 10 meter/foto81.jpeg",
   
             
   
           ]
   
         }
   
       ]
   
     },
   
   
     /* =======================================================
        LAMARAN
        ======================================================= */
   
     {
       key: "lamaran",
   
       label: "Lamaran",
   
       theme: "#C98374",
   
       tint: "#F6E8E4",
   
       desc:
         "Konsep intim untuk sesi seserahan dan tukar cincin. Jika Ingin Lebih Tau banya Konsep Hubungi Lewat WhatsApp",
   
       items: [
   
         /* ---------------------------------------------------
            KONSEP 1
            --------------------------------------------------- */
   
         {
           img:
             "gambar weding/Tunangan dan Pernikahan 3 - 3.5 meter/foto8.jpeg",
   
           title:
             "Putih Minimalis 3 - 3.5 meter",
   
           tag:
             "Indoor/Outdoor",
   
           desc:
             "",
   
           photos: [
   
             "gambar weding/Tunangan dan Pernikahan 3 - 3.5 meter/foto8.jpeg",
             "gambar weding/Tunangan dan Pernikahan 3 - 3.5 meter/foto9.jpeg",
             "gambar weding/Tunangan dan Pernikahan 3 - 3.5 meter/foto10.jpeg",
             "gambar weding/Tunangan dan Pernikahan 3 - 3.5 meter/foto11.jpeg",
             "gambar weding/Tunangan dan Pernikahan 3 - 3.5 meter/foto12.jpeg",
             "gambar weding/Tunangan dan Pernikahan 3 - 3.5 meter/foto13.jpeg",
             "gambar weding/Tunangan dan Pernikahan 3 - 3.5 meter/foto14.jpeg",
             "gambar weding/Tunangan dan Pernikahan 3 - 3.5 meter/foto15.jpeg",
             "gambar weding/Tunangan dan Pernikahan 3 - 3.5 meter/foto16.jpeg",
             "gambar weding/Tunangan dan Pernikahan 3 - 3.5 meter/foto17.jpeg",
             "gambar weding/Tunangan dan Pernikahan 3 - 3.5 meter/foto18.jpeg",
             "gambar weding/Tunangan dan Pernikahan 3 - 3.5 meter/foto19.jpeg",
             "gambar weding/Tunangan dan Pernikahan 3 - 3.5 meter/foto20.jpeg",
             "gambar weding/Tunangan dan Pernikahan 3 - 3.5 meter/foto21.jpeg",
             "gambar weding/Tunangan dan Pernikahan 3 - 3.5 meter/foto22.jpeg",
             "gambar weding/Tunangan dan Pernikahan 3 - 3.5 meter/foto7.jpeg",
             "gambar weding/Tunangan dan Pernikahan 3 - 3.5 meter/foto1.jpeg",
             "gambar weding/Tunangan dan Pernikahan 3 - 3.5 meter/foto2.jpeg",
             "gambar weding/Tunangan dan Pernikahan 3 - 3.5 meter/foto3.jpeg",
             "gambar weding/Tunangan dan Pernikahan 3 - 3.5 meter/foto4.jpeg",
             "gambar weding/Tunangan dan Pernikahan 3 - 3.5 meter/foto5.jpeg",
             "gambar weding/Tunangan dan Pernikahan 3 - 3.5 meter/foto6.jpeg"
   
           ]
   
         },
   
   
       ]
   
     },
   
   
     /* =======================================================
        TEDAK SITEN & SIRAMAN
        ======================================================= */
   
     {
       key: "Tedak siten & Siraman",
   
       label: "Tedak siten & Siraman",
   
       theme: "#B8925A",
   
       tint: "#F3EAD8",
   
       desc:
         "Dekorasi Tedak siten & Siraman. Jika Ingin Lebih Tau banya Konsep Hubungi Lewat WhatsApp",
   
       items: [
   
         /* ---------------------------------------------------
            KONSEP 1
            --------------------------------------------------- */
   
         {
           img:
             "gambar weding/Siraman 3-5 meter/foto85.jpeg",
   
           title:
             "Siraman 3-5 meter",
   
           tag:
             "Outdoor",
   
           desc:
             "",
   
           photos: [
   
             "gambar weding/Siraman 3-5 meter/foto85.jpeg",
             "gambar weding/Siraman 3-5 meter/foto86.jpeg",
             "gambar weding/Siraman 3-5 meter/foto87.jpeg",
             "gambar weding/Siraman 3-5 meter/foto88.jpeg",
             "gambar weding/Siraman 3-5 meter/foto89.jpeg",
             "gambar weding/Siraman 3-5 meter/foto90.jpeg",
             "gambar weding/Siraman 3-5 meter/foto91.jpeg",
             "gambar weding/Siraman 3-5 meter/foto76.jpeg",
             "gambar weding/Siraman 3-5 meter/foto77.jpeg",
             "gambar weding/Siraman 3-5 meter/foto78.jpeg",
             "gambar weding/Siraman 3-5 meter/foto79.jpeg",
             "gambar weding/Siraman 3-5 meter/foto80.jpeg",
             "gambar weding/Siraman 3-5 meter/foto81.jpeg",
             "gambar weding/Siraman 3-5 meter/foto82.jpeg",
             "gambar weding/Siraman 3-5 meter/foto83.jpeg",
             "gambar weding/Siraman 3-5 meter/foto84.jpeg"
   
           ]
   
         },
   
   
         /* ---------------------------------------------------
            KONSEP 2
            --------------------------------------------------- */
   
         {
           img:
             "gambar weding/Tidak siten atau Turun tanah/foto97.jpeg",
   
           title:
             "Tedak siten minimalis",
   
           tag:
             "Indoor",
   
           desc:
             "",
   
           photos: [
   
             "gambar weding/Tidak siten atau Turun tanah/foto92.jpeg",
             "gambar weding/Tidak siten atau Turun tanah/foto93.jpeg",
             "gambar weding/Tidak siten atau Turun tanah/foto94.jpeg",
             "gambar weding/Tidak siten atau Turun tanah/foto95.jpeg",
             "gambar weding/Tidak siten atau Turun tanah/foto96.jpeg",
             "gambar weding/Tidak siten atau Turun tanah/foto97.jpeg",
             "gambar weding/Tidak siten atau Turun tanah/foto98.jpeg"

   
           ]
   
         },
  
   
       ]
   
     }
   
   ];
   
   
   /* =========================================================
      KATEGORI AKTIF
      ========================================================= */
   
   let activeCat = CATEGORIES[0].key;
   
   
   /* =========================================================
      VARIABEL CAROUSEL POPUP
      ========================================================= */
   
   let currentModalCategory = null;
   
   let currentModalItem = null;
   
   let currentModalPhoto = 0;
   
   
   /* =========================================================
      VISUAL FOTO
      ========================================================= */
   
   function visualHtml(it, cat){
   
     return `
   
       <div
         class="visual-frame"
         style="background:${cat.tint};"
       >
   
         <img
           src="${it.img}"
           alt="${it.title}"
           loading="lazy"
           onerror="this.parentElement.classList.add('img-error')"
         >
   
         <div
           class="img-placeholder"
           style="color:${cat.theme};"
         >
   
           <svg
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             stroke-width="1.4"
           >
   
             <rect
               x="3"
               y="6"
               width="18"
               height="14"
               rx="1.5"
             />
   
             <circle
               cx="12"
               cy="13"
               r="3.4"
             />
   
             <path
               d="M8 6l1.2-2h5.6L16 6"
             />
   
           </svg>
   
           <span>
   
             Taruh foto di<br>
   
             <code>${it.img}</code>
   
           </span>
   
         </div>
   
       </div>
   
     `;
   
   }
   
   
   /* =========================================================
      RENDER CHIP KATEGORI
      ========================================================= */
   
   function renderChips(){
   
     const row =
       document.getElementById("chipRow");
   
     if(!row) return;
   
     row.innerHTML =
   
       CATEGORIES.map(c => `
   
         <button
           class="chip ${c.key === activeCat ? "active" : ""}"
           onclick="selectCategory('${c.key}')"
         >
   
           ${c.label}
   
         </button>
   
       `).join("");
   
   }
   
   
   /* =========================================================
      PILIH KATEGORI
      ========================================================= */
   
   function selectCategory(key){
   
     activeCat = key;
   
     renderChips();
   
     const cat =
       CATEGORIES.find(c => c.key === key);
   
     if(!cat) return;
   
   
     const title =
       document.getElementById("catTitle");
   
     const desc =
       document.getElementById("catDesc");
   
   
     if(title){
       title.textContent = cat.label;
     }
   
   
     if(desc){
       desc.textContent = cat.desc;
     }
   
   
     const grid =
       document.getElementById("galleryGrid");
   
     if(!grid) return;
   
   
     grid.innerHTML =
   
       cat.items.map(
   
         (it, idx) => `
   
           <div
             class="card"
             onclick="openModal('${cat.key}', ${idx})"
           >
   
             <div class="card-visual">
   
               ${visualHtml(it, cat)}
   
             </div>
   
   
             <div class="card-body">
   
               <span class="tag">
   
                 ${it.tag}
   
               </span>
   
   
               <h3>
   
                 ${it.title}
   
               </h3>
   
   
               <p>
   
                 ${it.desc}
   
               </p>
   
             </div>
   
           </div>
   
         `
   
       ).join("");
   
   }
   
   
   /* =========================================================
      MEMBUAT CAROUSEL POPUP
      ========================================================= */
   
   function createModalCarousel(it, cat){
   
     const photos =
       Array.isArray(it.photos) && it.photos.length
         ? it.photos
         : [it.img];
   
   
     return `
   
       <div class="modal-carousel">
   
         <div
           class="modal-track"
           id="modalTrack"
         >
   
           ${photos.map((photo, index) => `
   
             <div
               class="modal-slide"
               data-photo-index="${index}"
             >
   
               <div
                 class="visual-frame"
                 style="background:${cat.tint};"
               >
   
                 <img
                   src="${photo}"
                   alt="${it.title} - Foto ${index + 1}"
                   onerror="this.parentElement.classList.add('img-error')"
                 >
   
   
                 <div
                   class="img-placeholder"
                   style="color:${cat.theme};"
                 >
   
                   <svg
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     stroke-width="1.4"
                   >
   
                     <rect
                       x="3"
                       y="6"
                       width="18"
                       height="14"
                       rx="1.5"
                     />
   
                     <circle
                       cx="12"
                       cy="13"
                       r="3.4"
                     />
   
                     <path
                       d="M8 6l1.2-2h5.6L16 6"
                     />
   
                   </svg>
   
   
                   <span>
   
                     Foto ${index + 1}
   
                   </span>
   
                 </div>
   
               </div>
   
             </div>
   
           `).join("")}
   
         </div>
   
   
         ${
           photos.length > 1
           ? `
   
             <button
               type="button"
               class="modal-arrow modal-arrow-prev"
               onclick="previousModalPhoto(event)"
               aria-label="Foto sebelumnya"
             >
   
               <span>‹</span>
   
             </button>
   
   
             <button
               type="button"
               class="modal-arrow modal-arrow-next"
               onclick="nextModalPhoto(event)"
               aria-label="Foto berikutnya"
             >
   
               <span>›</span>
   
             </button>
   
   
             <div
               class="modal-counter"
               id="modalCounter"
             >
   
               1 / ${photos.length}
   
             </div>
   
           `
           : ""
         }
   
       </div>
   
     `;
   
   }
   
   
   /* =========================================================
      BUKA POPUP
      ========================================================= */
   
   function openModal(catKey, idx){
   
     const cat =
       CATEGORIES.find(c => c.key === catKey);
   
     if(!cat) return;
   
   
     const it =
       cat.items[idx];
   
     if(!it) return;
   
   
     currentModalCategory = catKey;
   
     currentModalItem = idx;
   
     currentModalPhoto = 0;
   
   
     const modalVisual =
       document.getElementById("modalVisual");
   
   
     if(modalVisual){
   
       modalVisual.innerHTML =
         createModalCarousel(it, cat);
   
     }
   
   
     const modalTag =
       document.getElementById("modalTag");
   
     const modalTitle =
       document.getElementById("modalTitle");
   
     const modalDesc =
       document.getElementById("modalDesc");
   
   
     if(modalTag){
   
       modalTag.textContent =
         it.tag + " — " + cat.label;
   
     }
   
   
     if(modalTitle){
   
       modalTitle.textContent =
         it.title;
   
     }
   
   
     if(modalDesc){
   
       modalDesc.textContent =
         it.desc +
         " Detail warna, bunga, dan ukuran dapat disesuaikan dengan lokasi dan anggaran acara Anda.";
   
     }
   
   
     const modalWaBtn =
       document.getElementById("modalWaBtn");
   
   
     if(modalWaBtn){
   
       modalWaBtn.href =
   
         waLink(
   
           "Halo Tatang_Decoration, saya tertarik dengan konsep \"" +
   
           it.title +
   
           "\" (" +
   
           cat.label +
   
           "). Bisa tolong info lebih lanjut?"
   
         );
   
     }
   
   
     const overlay =
       document.getElementById("modalOverlay");
   
   
     if(overlay){
   
       overlay.classList.add("open");
   
     }
   
   
     document.body.style.overflow = "hidden";
   
   
     updateModalPhoto();
   
   }
   
   
   /* =========================================================
      UPDATE FOTO POPUP
      ========================================================= */
   
   function updateModalPhoto(){
   
     const track =
       document.getElementById("modalTrack");
   
     if(!track) return;
   
   
     track.style.transform =
       "translateX(-" +
       (currentModalPhoto * 100) +
       "%)";
   
   
     const counter =
       document.getElementById("modalCounter");
   
   
     const cat =
       CATEGORIES.find(
         c => c.key === currentModalCategory
       );
   
   
     if(
       counter &&
       cat &&
       cat.items[currentModalItem]
     ){
   
       const photos =
         Array.isArray(
           cat.items[currentModalItem].photos
         )
         ? cat.items[currentModalItem].photos
         : [cat.items[currentModalItem].img];
   
   
       counter.textContent =
   
         (currentModalPhoto + 1) +
   
         " / " +
   
         photos.length;
   
     }
   
   }
   
   
   /* =========================================================
      FOTO SEBELUMNYA
      ========================================================= */
   
   function previousModalPhoto(event){
   
     if(event){
   
       event.stopPropagation();
   
       event.preventDefault();
   
     }
   
   
     const cat =
       CATEGORIES.find(
         c => c.key === currentModalCategory
       );
   
   
     if(!cat) return;
   
   
     const item =
       cat.items[currentModalItem];
   
   
     if(!item) return;
   
   
     const photos =
       Array.isArray(item.photos)
         ? item.photos
         : [item.img];
   
   
     if(photos.length <= 1) return;
   
   
     currentModalPhoto--;
   
   
     if(currentModalPhoto < 0){
   
       currentModalPhoto =
         photos.length - 1;
   
     }
   
   
     updateModalPhoto();
   
   }
   
   
   /* =========================================================
      FOTO BERIKUTNYA
      ========================================================= */
   
   function nextModalPhoto(event){
   
     if(event){
   
       event.stopPropagation();
   
       event.preventDefault();
   
     }
   
   
     const cat =
       CATEGORIES.find(
         c => c.key === currentModalCategory
       );
   
   
     if(!cat) return;
   
   
     const item =
       cat.items[currentModalItem];
   
   
     if(!item) return;
   
   
     const photos =
       Array.isArray(item.photos)
         ? item.photos
         : [item.img];
   
   
     if(photos.length <= 1) return;
   
   
     currentModalPhoto++;
   
   
     if(
       currentModalPhoto >= photos.length
     ){
   
       currentModalPhoto = 0;
   
     }
   
   
     updateModalPhoto();
   
   }
   
   
   /* =========================================================
      TUTUP MODAL
      ========================================================= */
   
   function closeModal(){
   
     const overlay =
       document.getElementById("modalOverlay");
   
   
     if(overlay){
   
       overlay.classList.remove("open");
   
     }
   
   
     document.body.style.overflow = "";
   
   }
   
   
   /* =========================================================
      KLIK ESCAPE + KEYBOARD CAROUSEL
      ========================================================= */
   
   document.addEventListener(
     "keydown",
     function(e){
   
       if(e.key === "Escape"){
   
         closeModal();
   
         return;
   
       }
   
   
       const overlay =
         document.getElementById("modalOverlay");
   
   
       if(
         overlay &&
         overlay.classList.contains("open")
       ){
   
         if(e.key === "ArrowLeft"){
   
           previousModalPhoto();
   
         }
   
   
         if(e.key === "ArrowRight"){
   
           nextModalPhoto();
   
         }
   
       }
   
     }
   );
   
   
   /* =========================================================
      SWIPE FOTO DI HP
      ========================================================= */
   
   let touchStartX = 0;
   
   let touchEndX = 0;
   
   
   document.addEventListener(
     "touchstart",
     function(e){
   
       const overlay =
         document.getElementById("modalOverlay");
   
   
       if(
         !overlay ||
         !overlay.classList.contains("open")
       ){
   
         return;
   
       }
   
   
       touchStartX =
         e.changedTouches[0].screenX;
   
     },
     {
       passive: true
     }
   );
   
   
   document.addEventListener(
     "touchend",
     function(e){
   
       const overlay =
         document.getElementById("modalOverlay");
   
   
       if(
         !overlay ||
         !overlay.classList.contains("open")
       ){
   
         return;
   
       }
   
   
       touchEndX =
         e.changedTouches[0].screenX;
   
   
       const distance =
         touchEndX - touchStartX;
   
   
       if(Math.abs(distance) < 50){
   
         return;
   
       }
   
   
       if(distance < 0){
   
         nextModalPhoto();
   
       }else{
   
         previousModalPhoto();
   
       }
   
     },
     {
       passive: true
     }
   );
   
   
   /* =========================================================
      KLIK AREA LUAR MODAL
      ========================================================= */
   
   document.addEventListener(
     "click",
     function(e){
   
       const overlay =
         document.getElementById("modalOverlay");
   
   
       if(
         overlay &&
         e.target === overlay
       ){
   
         closeModal();
   
       }
   
     }
   );
   
   
   /* =========================================================
      INIT
      ========================================================= */
   
   renderChips();
   
   selectCategory(activeCat);