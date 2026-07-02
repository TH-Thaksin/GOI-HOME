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
    subgroups: [
      {
        name: "GD0",
        images: [
          { file: "view360/GD0/01 View360_Chu nhom 01_Tra cuu goi.png", caption: "View360_Chu nhom 01_Tra cuu goi" },
          { file: "view360/GD0/02 View360_Chu nhom 02_Tra cuu thanh vien.png", caption: "View360_Chu nhom 02_Tra cuu thanh vien" },
          { file: "view360/GD0/02 View360_Thanh vien 01_Tra cuu goi.png", caption: "View360_Thanh vien 01_Tra cuu goi" },
          { file: "view360/GD0/02 View360_Thanh vien 02_Khong tra cuu duoc chu nhom thanh vien.png", caption: "View360_Thanh vien 02_Khong tra cuu duoc chu nhom thanh vien" }
        ]
      },
      {
        name: "HOME SANH",
        images: [
          { file: "view360/HOME SANH/01 Tra cuu goi.jpg", caption: "01 Tra cuu goi" },
          { file: "view360/HOME SANH/02 Tra cuu thanh vien.jpg", caption: "02 Tra cuu thanh vien" }
        ]
      },
      {
        name: "HOME DINH",
        images: [
          { file: "view360/HOME DINH/01 View360 01 Thanh vien goi Home Dinh_Ttra cuu goi.png", caption: "View360 01 Thanh vien goi Home Dinh_Ttra cuu goi" },
          { file: "view360/HOME DINH/02 View360 02 Thanh vien goi Home Dinh khong tra cuu duoc danh sach thanh vien.png", caption: "View360 02 Thanh vien goi Home Dinh khong tra cuu duoc danh sach thanh vien" },
          { file: "view360/HOME DINH/03 oneBSS 03 Home Dinh tra cuu Chu nhom Thanh vien tren Tra cuu tong hop.png", caption: "oneBSS 03 Home Dinh tra cuu Chu nhom Thanh vien tren Tra cuu tong hop" }
        ]
      },
      {
        name: "HOME TIET KIEM",
        images: [
          { file: "view360/HOME TIET KIEM/01 View360_Chu nhom_Home TK_Tra cuu goi.png", caption: "View360_Chu nhom_Home TK_Tra cuu goi" },
          { file: "view360/HOME TIET KIEM/02 View360_Chu nhom_Home TK_Tra cuu danh sach thanh vien.png", caption: "View360_Chu nhom_Home TK_Tra cuu danh sach thanh vien" },
          { file: "view360/HOME TIET KIEM/03 View360_Thanh vien_Home TK_Tra cuu goi.png", caption: "View360_Thanh vien_Home TK_Tra cuu goi" },
          { file: "view360/HOME TIET KIEM/04 View360_Thanh vien_Home TK_Khong tra cuu duoc chu nhom thanh vien.png", caption: "View360_Thanh vien_Home TK_Khong tra cuu duoc chu nhom thanh vien" }
        ]
      }
    ]
  },
  {
    key: "ecms",
    title: "ECMS",
    subtitle: "Tra cứu xác định số điện thoại chủ nhóm/thành viên qua ECMS",
    images: [
      { file: "03 ECMS chu nhom 01.png", caption: "Hình 1. ECMS – Offer – Provider Yes là số Chủ nhóm gói Home có thành phần di động" },
      { file: "03 ECMS thanh vien 01.png", caption: "Hình 2. ECMS – Offer – Provider No là số thành viên gói Home có thành phần di động" }
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
let activeImages = [];
let activeIndex = 0;

function groupImages(group) {
  if (group.images) return group.images;
  if (group.subgroups) return group.subgroups.flatMap(sg => sg.images);
  return [];
}

function imgSrc(file) {
  return "images/" + file.split("/").map(encodeURIComponent).join("/");
}

function renderHome() {
  groupGrid.innerHTML = "";
  GROUPS.forEach(group => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-top">
        <span class="card-title">${group.title}</span>
        <span class="card-badge">${groupImages(group).length} ảnh</span>
      </div>
      <p class="card-subtitle">${group.subtitle}</p>
      <span class="card-action">Xem hướng dẫn tra cứu &rarr;</span>
    `;
    card.addEventListener("click", () => openGroup(group));
    groupGrid.appendChild(card);
  });
}

function renderGalleryItems(container, images, indexOffset) {
  images.forEach((img, i) => {
    const idx = indexOffset + i;
    const item = document.createElement("div");
    item.className = "gallery-item";
    item.innerHTML = `
      <img src="${imgSrc(img.file)}" alt="${img.caption}">
      <div class="gallery-caption">${img.caption}</div>
    `;
    item.addEventListener("click", () => openLightbox(idx));
    container.appendChild(item);
  });
}

function openGroup(group) {
  activeGroup = group;
  activeImages = groupImages(group);
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
  detailGallery.classList.remove("gallery");

  if (group.subgroups) {
    let offset = 0;
    group.subgroups.forEach(sg => {
      const section = document.createElement("div");
      section.className = "subgroup";
      const heading = document.createElement("h2");
      heading.className = "subgroup-title";
      heading.textContent = sg.name;
      const grid = document.createElement("div");
      grid.className = "gallery";
      section.appendChild(heading);
      section.appendChild(grid);
      detailGallery.appendChild(section);
      renderGalleryItems(grid, sg.images, offset);
      offset += sg.images.length;
    });
  } else {
    detailGallery.classList.add("gallery");
    renderGalleryItems(detailGallery, group.images, 0);
  }

  viewHome.classList.add("hidden");
  viewDetail.classList.remove("hidden");
  window.scrollTo(0, 0);
}

function goHome() {
  viewDetail.classList.add("hidden");
  viewHome.classList.remove("hidden");
  detailGallery.classList.remove("gallery");
  activeGroup = null;
  activeImages = [];
}

function openLightbox(index) {
  if (!activeImages.length) return;
  activeIndex = index;
  updateLightbox();
  lightbox.classList.remove("hidden");
}

function updateLightbox() {
  const img = activeImages[activeIndex];
  lightboxImg.src = imgSrc(img.file);
  lightboxImg.alt = img.caption;
  lightboxCaption.textContent = `${activeGroup.title} — ${img.caption} (${activeIndex + 1}/${activeImages.length})`;
}

function closeLightbox() {
  lightbox.classList.add("hidden");
}

function stepLightbox(delta) {
  if (!activeImages.length) return;
  const len = activeImages.length;
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
