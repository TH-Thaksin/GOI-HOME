const GROUPS = [
  {
    key: "ccbs",
    title: "CCBS",
    subtitle: "Vina Portal — ccbs.vnpt.vn/ccbs/main",
    images: [
      { file: "01 CCBS chu nhom 01.jpg", caption: "Menu Lập HĐ — Đăng ký gói tích hợp Gia đình, Văn phòng - DATA" },
      { file: "01 CCBS chu nhom 02.jpg", caption: "Popup Đăng ký gói tích hợp Gia đình, Văn phòng - DATA" }
    ]
  },
  {
    key: "view360",
    title: "VIEW360",
    subtitle: "Gói cước gia đình",
    images: [
      { file: "02 View360_Chu nhom 01.png", caption: "Tab Tra cứu thuê bao — chủ nhóm" },
      { file: "02 View360_Chu nhom_02.png", caption: "Tab Tra cứu trưởng nhóm/thành viên — chủ nhóm" },
      { file: "02 View360_Thanh vien 01.png", caption: "Tab Tra cứu thuê bao — thành viên" },
      { file: "02 View360_Thanh vien 02.png", caption: "Tab Tra cứu trưởng nhóm/thành viên — Không có dữ liệu" }
    ]
  },
  {
    key: "ecms",
    title: "ECMS",
    subtitle: "Ericsson Charging services",
    images: [
      { file: "03 ECMS chu nhom 01.png", caption: "Trang Offers — chủ nhóm (Provider)" },
      { file: "03 ECMS chu nhom 02.png", caption: "Trang Contract overview — chủ nhóm" },
      { file: "03 ECMS thanh vien 01.png", caption: "Trang Offers — thành viên (Consumer)" },
      { file: "03 ECMS thanh vien 02.png", caption: "Trang Contract overview — thành viên" }
    ]
  },
  {
    key: "onebss",
    title: "ONEBSS",
    subtitle: "Hệ thống điều hành sản xuất kinh doanh tập trung",
    images: [
      { file: "04 oneBSS C1 ma thue bao 01.png", caption: "Tra cứu khách hàng theo Mã thuê bao" },
      { file: "04 oneBSS C1 ma thue bao 02.png", caption: "Danh sách thuê bao khách hàng — menu Tra cứu" },
      { file: "04 oneBSS C1 ma thue bao 03.png", caption: "Tra cứu chi tiết điều hành thi công" },
      { file: "04 oneBSS C2 lien he tap trung 01.png", caption: "Tra cứu khách hàng theo Liên hệ tập trung" },
      { file: "04 oneBSS C2 lien he tap trung 02.png", caption: "Danh sách thuê bao khách hàng — menu Tra cứu" },
      { file: "04 oneBSS C2 tra cuu chi tiet thi cong 03.png", caption: "Tra cứu chi tiết điều hành thi công — Danh sách các biến động" },
      { file: "04 oneBSS C2 tra cuu chi tiet thi cong 04.png", caption: "Tra cứu chi tiết điều hành thi công — Danh sách thuê bao" },
      { file: "04 oneBSS C2 tra cuu tong hop 05.png", caption: "Tra cứu danh bạ" }
    ]
  }
];

const groupGrid = document.getElementById("group-grid");
const viewHome = document.getElementById("view-home");
const viewDetail = document.getElementById("view-detail");
const detailTitle = document.getElementById("detail-title");
const detailSubtitle = document.getElementById("detail-subtitle");
const detailGallery = document.getElementById("detail-gallery");
const backBtn = document.getElementById("back-btn");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxClose = document.getElementById("lightbox-close");
const lightboxPrev = document.getElementById("lightbox-prev");
const lightboxNext = document.getElementById("lightbox-next");

let activeGroup = null;
let activeIndex = 0;

function imgSrc(file) {
  return "images/" + encodeURIComponent(file);
}

function renderHome() {
  groupGrid.innerHTML = "";
  GROUPS.forEach(group => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-top">
        <span class="card-title">${group.title}</span>
        <span class="card-badge">${group.images.length} ảnh</span>
      </div>
      <p class="card-subtitle">${group.subtitle}</p>
      <span class="card-action">Xem hướng dẫn tra cứu &rarr;</span>
    `;
    card.addEventListener("click", () => openGroup(group));
    groupGrid.appendChild(card);
  });
}

function openGroup(group) {
  activeGroup = group;
  detailTitle.textContent = group.title;
  detailSubtitle.textContent = group.subtitle;
  detailGallery.innerHTML = "";
  group.images.forEach((img, idx) => {
    const item = document.createElement("div");
    item.className = "gallery-item";
    item.innerHTML = `
      <img src="${imgSrc(img.file)}" alt="${img.caption}">
      <div class="gallery-caption">${img.caption}</div>
    `;
    item.addEventListener("click", () => openLightbox(idx));
    detailGallery.appendChild(item);
  });
  viewHome.classList.add("hidden");
  viewDetail.classList.remove("hidden");
  window.scrollTo(0, 0);
}

function goHome() {
  viewDetail.classList.add("hidden");
  viewHome.classList.remove("hidden");
  activeGroup = null;
}

function openLightbox(index) {
  if (!activeGroup) return;
  activeIndex = index;
  updateLightbox();
  lightbox.classList.remove("hidden");
}

function updateLightbox() {
  const img = activeGroup.images[activeIndex];
  lightboxImg.src = imgSrc(img.file);
  lightboxImg.alt = img.caption;
  lightboxCaption.textContent = `${activeGroup.title} — ${img.caption} (${activeIndex + 1}/${activeGroup.images.length})`;
}

function closeLightbox() {
  lightbox.classList.add("hidden");
}

function stepLightbox(delta) {
  if (!activeGroup) return;
  const len = activeGroup.images.length;
  activeIndex = (activeIndex + delta + len) % len;
  updateLightbox();
}

backBtn.addEventListener("click", goHome);
lightboxClose.addEventListener("click", closeLightbox);
lightboxPrev.addEventListener("click", () => stepLightbox(-1));
lightboxNext.addEventListener("click", () => stepLightbox(1));
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (lightbox.classList.contains("hidden")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") stepLightbox(-1);
  if (e.key === "ArrowRight") stepLightbox(1);
});

renderHome();
