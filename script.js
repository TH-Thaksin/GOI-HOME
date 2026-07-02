const GROUPS = [
  {
    key: "ccbs",
    title: "CCBS",
    subtitle: "Công cụ chính xác định số điện thoại chủ nhóm/thành viên/acc fiber",
    images: [
      { file: "01 CCBS chu nhom 01.jpg", caption: "Hình 1. CCBS – Lập HĐ – Đăng ký gói tích hợp Gia đình, Văn phòng – DATA" },
      { file: "01 CCBS chu nhom 02.jpg", caption: "Hình 2. Màn hình pop up thông tin chủ nhóm/thành viên và acc fiber" }
    ]
  },
  {
    key: "view360",
    title: "VIEW360",
    subtitle: "Tra cứu gói cước, danh sách thành viên gói Home từ CCBS – View360",
    note: "Lưu ý: dữ liệu View360 không online nên có trường hợp KH đã huỷ gói Home/huỷ thành viên gói Home nhưng tra cứu vẫn còn thông tin gói.",
    images: [
      { file: "02 View360_Chu nhom 01.png", caption: "Hình 1. Số điện thoại tra cứu là số chủ nhóm: View360 – CCBS – Gói cước gia đình – Tra cứu thuê bao: tra cứu được gói đang dùng" },
      { file: "02 View360_Chu nhom_02.png", caption: "Hình 2. Số điện thoại tra cứu là số chủ nhóm: View360 – CCBS – Gói cước gia đình – Tra cứu trưởng nhóm/thành viên: tra cứu được danh sách thành viên" },
      { file: "02 View360_Thanh vien 01.png", caption: "Hình 3. Số điện thoại tra cứu là số thành viên: View360 – CCBS – Gói cước gia đình – Tra cứu thuê bao: tra cứu được gói đang dùng" },
      { file: "02 View360_Thanh vien 02.png", caption: "Hình 4. Số điện thoại tra cứu là số thành viên: View360 – CCBS – Gói cước gia đình – Tra cứu trưởng nhóm/thành viên: không tra cứu được số chủ nhóm và danh sách thành viên" }
    ]
  },
  {
    key: "ecms",
    title: "ECMS",
    subtitle: "Tra cứu xác định số điện thoại chủ nhóm/thành viên qua ECMS",
    note: "Ghi chú: chủ nhóm và thành viên cùng code Value.",
    images: [
      { file: "03 ECMS chu nhom 01.png", caption: "Hình 1. ECMS – Offer – Provider Yes là số Chủ nhóm gói Home có thành phần di động" },
      { file: "03 ECMS thanh vien 01.png", caption: "Hình 2. ECMS – Offer – Provider No là số thành viên gói Home có thành phần di động" },
      { file: "03 ECMS chu nhom 02.png", caption: "Hình 3. ECMS – Contract overview – Rate plan and services – CS Community – Value – chủ nhóm" },
      { file: "03 ECMS thanh vien 02.png", caption: "Hình 4. ECMS – Contract overview – Rate plan and services – CS Community – Value – thành viên" }
    ]
  },
  {
    key: "onebss",
    title: "ONEBSS",
    subtitle: "Tra cứu Acc fiber từ OneBSS",
    images: [
      { file: "04 oneBSS C1 ma thue bao 01.png", caption: "Hình 1. Cách 1: Tiếp nhận yêu cầu tập trung – nhập Mã thuê bao là SĐT di động" },
      { file: "04 oneBSS C1 ma thue bao 02.png", caption: "Hình 2. Tra cứu chi tiết thi công" },
      { file: "04 oneBSS C1 ma thue bao 03.png", caption: "Hình 3. Chọn mã có code DA – tra cứu được dữ liệu" },
      { file: "04 oneBSS C2 lien he tap trung 01.png", caption: "Hình 4. Cách 2: Tiếp nhận yêu cầu tập trung – nhập Liên hệ tập trung là SĐT di động" },
      { file: "04 oneBSS C2 lien he tap trung 02.png", caption: "Hình 5. Tra cứu chi tiết thi công" },
      { file: "04 oneBSS C2 tra cuu chi tiet thi cong 03.png", caption: "Hình 6. Tra cứu chi tiết thi công – chọn mã có code DA" },
      { file: "04 oneBSS C2 tra cuu chi tiet thi cong 04.png", caption: "Hình 7. Xác định được Acc fiber" },
      { file: "04 oneBSS C2 tra cuu tong hop 05.png", caption: "Hình 8. Tra cứu tổng hợp đối chiếu lại thông tin" }
    ]
  }
];

const groupGrid = document.getElementById("group-grid");
const viewHome = document.getElementById("view-home");
const viewDetail = document.getElementById("view-detail");
const detailTitle = document.getElementById("detail-title");
const detailSubtitle = document.getElementById("detail-subtitle");
const detailGallery = document.getElementById("detail-gallery");
const detailNote = document.getElementById("detail-note");
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
  if (group.note) {
    detailNote.textContent = group.note;
    detailNote.classList.remove("hidden");
  } else {
    detailNote.textContent = "";
    detailNote.classList.add("hidden");
  }
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
