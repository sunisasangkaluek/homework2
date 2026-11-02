/**
 * FoodLink: เชื่อมโยงส่วนเกินอาหารสู่ชุมชน
 * Real-Time Surplus Food Sharing & Community Anti-Hunger Platform
 */

const STORAGE_KEYS = {
  LISTINGS: 'foodlink_listings_v1',
  CLAIMS: 'foodlink_claims_v1',
  STATS: 'foodlink_stats_v1',
  SHELTERS: 'foodlink_shelters_v1'
};

const INITIAL_STATS = {
  mealsRescued: 14820,
  foodSavedKg: 5928.0,
  co2SavedKg: 14997.8,
  moneySavedBaht: 892450
};

const INITIAL_LISTINGS = [
  {
    id: 'fl-101',
    storeName: 'ห้องอาหารแกรนด์เทอเรซ โรงแรมสยามซิตี้',
    category: 'hotel',
    emoji: '🏨',
    title: 'ชุดข้าวกล่องบุฟเฟต์มื้อค่ำพรีเมียม (คัดแยกสดใหม่)',
    description: 'อาหารปรุงสุกจากไลน์บุฟเฟต์โรงแรม ประกอบด้วย ข้าวสวย, ปลาแซลมอนย่างซีอิ๊ว, ไก่ผัดเม็ดมะม่วง และผักย่าง บรรจุกล่องซีลสะอาด เก็บในตู้ควบคุมอุณหภูมิ',
    area: 'ปทุมวัน / สยาม / สีลม',
    distanceKm: 1.2,
    offerType: 'foundation_only', // 'free' | 'discount' | 'foundation_only'
    originalPrice: 280,
    salePrice: 0,
    totalQty: 35,
    remainingQty: 25,
    unitWeightKg: 0.45,
    pickupUntil: '23:00',
    minutesRemaining: 55,
    dietTags: ['ปรุงสุกพร้อมทาน', 'ฮาลาล (Halal)'],
    mapX: 46,
    mapY: 36,
    postedAgo: '8 นาทีที่แล้ว'
  },
  {
    id: 'fl-102',
    storeName: 'FreshMart Supermarket สาขาพระราม 9',
    category: 'supermarket',
    emoji: '🛒',
    title: 'ตะกร้าผักสดออร์แกนิกผลไม้และไข่ไก่ (ป้ายเหลืองคุณภาพดี)',
    description: 'ชุดวัตถุดิบสดสำหรับทำอาหารในครัวเรือน ประกอบด้วย ผักคะน้า, แครอท, มะเขือเทศราชินี, กล้วยหอม และไข่ไก่แพ็ค 6 ฟอง สภาพสดใหม่ 100%',
    area: 'ดินแดง / ห้วยขวาง / พระราม 9',
    distanceKm: 0.8,
    offerType: 'discount',
    originalPrice: 220,
    salePrice: 49,
    totalQty: 20,
    remainingQty: 9,
    unitWeightKg: 1.2,
    pickupUntil: '22:45',
    minutesRemaining: 40,
    dietTags: ['วัตถุดิบสด', 'มังสวิรัติ/เจ', 'ฮาลาล (Halal)'],
    mapX: 62,
    mapY: 42,
    postedAgo: '12 นาทีที่แล้ว'
  },
  {
    id: 'fl-103',
    storeName: 'ครัวป้าพร ข้าวแกงใต้รสเด็ด (ตลาดคลองเตย)',
    category: 'restaurant',
    emoji: '🍱',
    title: 'ชุดข้าวราดแกงและกับข้าวถุงพร้อมทาน แจกฟรีให้ชุมชน',
    description: 'แกงส้มปลากะพง, ไข่พะโล้หมูสามชั้น และผัดผักรวมมิตร ปรุงสุกช่วงเย็นวันนี้ ยังร้อนและสะอาด เหมาะสำหรับครอบครัวในชุมชนและผู้สูงอายุ',
    area: 'คลองเตย / สุขุมวิท',
    distanceKm: 2.1,
    offerType: 'free',
    originalPrice: 80,
    salePrice: 0,
    totalQty: 30,
    remainingQty: 14,
    unitWeightKg: 0.4,
    pickupUntil: '22:30',
    minutesRemaining: 28,
    dietTags: ['ปรุงสุกพร้อมทาน'],
    mapX: 58,
    mapY: 68,
    postedAgo: '5 นาทีที่แล้ว'
  },
  {
    id: 'fl-104',
    storeName: 'Artisan Boulangerie & Cafe อารีย์',
    category: 'bakery',
    emoji: '🥐',
    title: 'Surprise Bakery Box (ขนมปังโฮลวีต & ครัวซองต์อบสดวันนี้ 4 ชิ้น)',
    description: 'เบเกอรี่อบสดประจำวันไม่ใส่สารกันบูด คละเมนู เช่น ครัวซองต์เนยสด, ขนมปังซาวโดว์, พายไก่ และมัฟฟินธัญพืช ทานเป็นมื้อเช้าพรุ่งนี้ได้อร่อย',
    area: 'จตุจักร / ลาดพร้าว / บางซื่อ',
    distanceKm: 3.4,
    offerType: 'discount',
    originalPrice: 260,
    salePrice: 65,
    totalQty: 18,
    remainingQty: 6,
    unitWeightKg: 0.5,
    pickupUntil: '22:30',
    minutesRemaining: 25,
    dietTags: ['ปรุงสุกพร้อมทาน', 'มีส่วนผสมของนม/ไข่', 'ฮาลาล (Halal)'],
    mapX: 35,
    mapY: 25,
    postedAgo: '19 นาทีที่แล้ว'
  },
  {
    id: 'fl-105',
    storeName: 'โรงแรมริเวอร์ไซด์ พาเลซ เจริญนคร',
    category: 'hotel',
    emoji: '🏨',
    title: 'อาหารว่างงานสัมมนา & แซนด์วิชทูน่า-อกไก่ (50 ชุด)',
    description: 'ชุด Snack Box จากงานประชุมช่วงบ่ายที่ไม่ได้เปิดกล่อง บรรจุแซนด์วิชโฮลวีตอกไก่/ทูน่า และน้ำผลไม้ 100% ส่งมอบให้มูลนิธิหรือศูนย์เด็กเล็กได้ทันที',
    area: 'ธนบุรี / คลองสาน / บางกอกน้อย',
    distanceKm: 2.9,
    offerType: 'free',
    originalPrice: 150,
    salePrice: 0,
    totalQty: 50,
    remainingQty: 38,
    unitWeightKg: 0.35,
    pickupUntil: '23:30',
    minutesRemaining: 85,
    dietTags: ['ปรุงสุกพร้อมทาน', 'ฮาลาล (Halal)'],
    mapX: 28,
    mapY: 64,
    postedAgo: '3 นาทีที่แล้ว'
  },
  {
    id: 'fl-106',
    storeName: 'Green Bowl Salad & Vegan Kitchen สีลม',
    category: 'restaurant',
    emoji: '🥗',
    title: 'สลัดโรลธัญพืช & ข้าวกล้องเต้าหู้เทอริยากิ (เจ/มังสวิรัติ)',
    description: 'อาหารคลีนเพื่อสุขภาพ ปรุงสดวันนี้ ปราศจากเนื้อสัตว์และผงชูรส ลดราคาพิเศษ 75% ก่อนปิดร้าน',
    area: 'ปทุมวัน / สยาม / สีลม',
    distanceKm: 1.5,
    offerType: 'discount',
    originalPrice: 160,
    salePrice: 40,
    totalQty: 15,
    remainingQty: 7,
    unitWeightKg: 0.4,
    pickupUntil: '23:00',
    minutesRemaining: 50,
    dietTags: ['ปรุงสุกพร้อมทาน', 'มังสวิรัติ/เจ', 'ฮาลาล (Halal)'],
    mapX: 49,
    mapY: 56,
    postedAgo: '14 นาทีที่แล้ว'
  }
];

const INITIAL_SHELTERS = [
  {
    id: 'sh-01',
    name: 'ศูนย์พักพิงบ้านอิ่มใจ (ดินแดง)',
    area: 'ดินแดง / ห้วยขวาง / พระราม 9',
    targetGroup: 'ผู้สูงอายุรายได้น้อยและผู้ไร้บ้าน 60 คน',
    neededMeals: 60,
    fulfilledMeals: 25,
    urgentNote: 'ต้องการข้าวกล่องปรุงสุกพร้อมทานอีก 35 กล่อง สำหรับมื้อค่ำและมื้อเช้าพรุ่งนี้',
    mapX: 68,
    mapY: 32
  },
  {
    id: 'sh-02',
    name: 'ศูนย์พัฒนาเด็กเล็กและครอบครัวชุมชนคลองเตย',
    area: 'คลองเตย / สุขุมวิท',
    targetGroup: 'เด็กเล็กและเยาวชนในชุมชนแออัด 85 คน',
    neededMeals: 85,
    fulfilledMeals: 50,
    urgentNote: 'ต้องการเบเกอรี่ นม ผลไม้สด และวัตถุดิบปรุงอาหารสำหรับครัวกลางชุมชน',
    mapX: 66,
    mapY: 75
  },
  {
    id: 'sh-03',
    name: 'โครงการครัวปันอิ่ม เพื่อผู้ป่วยติดเตียงฝั่งธนบุรี',
    area: 'ธนบุรี / คลองสาน / บางกอกน้อย',
    targetGroup: 'ผู้ป่วยติดเตียงและผู้พิการ 45 ครัวเรือน',
    neededMeals: 45,
    fulfilledMeals: 30,
    urgentNote: 'ต้องการอาหารอ่อน ข้าวต้ม แกงจืด หรือวัตถุดิบผักสดและไข่ไก่',
    mapX: 22,
    mapY: 52
  }
];

const SIMULATED_NEW_POSTS = [
  {
    storeName: 'Haru Bento & Sushi Express ห้วยขวาง',
    category: 'restaurant',
    emoji: '🍱',
    title: 'ชุดเบนโตะข้าวหน้าปลาซาบะย่าง & เกี๊ยวซ่า',
    description: 'ทำสดช่วงค่ำวันนี้ คัดแยกก่อนปิดร้าน 30 นาที รสชาติอร่อย สะอาด บรรจุกล่องไมโครเวฟ',
    area: 'ดินแดง / ห้วยขวาง / พระราม 9',
    distanceKm: 1.1,
    offerType: 'discount',
    originalPrice: 159,
    salePrice: 45,
    totalQty: 12,
    unitWeightKg: 0.42,
    pickupUntil: '23:15',
    minutesRemaining: 65,
    dietTags: ['ปรุงสุกพร้อมทาน']
  },
  {
    storeName: 'Lotus/Tops Daily Community Care บางซื่อ',
    category: 'supermarket',
    emoji: '🛒',
    title: 'ชุดผลไม้ตัดแต่งพร้อมทาน & ขนมปังโฮลเกรน (แจกฟรีชุมชน)',
    description: 'แตงโม มะละกอ สับปะรดปอกพร้อมทาน และขนมปังโฮลเกรนคุณภาพดี ส่งต่อให้ชุมชนลดขยะอาหาร',
    area: 'จตุจักร / ลาดพร้าว / บางซื่อ',
    distanceKm: 1.9,
    offerType: 'free',
    originalPrice: 110,
    salePrice: 0,
    totalQty: 25,
    unitWeightKg: 0.55,
    pickupUntil: '23:30',
    minutesRemaining: 80,
    dietTags: ['วัตถุดิบสด', 'มังสวิรัติ/เจ', 'ฮาลาล (Halal)']
  },
  {
    storeName: 'ห้องอาหารนานาชาติ โรงแรมเพนนินซูล่า ลิงก์',
    category: 'hotel',
    emoji: '🏨',
    title: 'ชุดอาหารปรุงสุกบุฟเฟต์ค่ำ & ซุปฟักทอง (สำหรับมูลนิธิ)',
    description: 'คัดแยกอย่างถูกสุขอนามัยตามมาตรฐาน HACCP พร้อมส่งมอบให้ตัวแทนมูลนิธิหรือ FoodLink Rider',
    area: 'คลองเตย / สุขุมวิท',
    distanceKm: 2.3,
    offerType: 'foundation_only',
    originalPrice: 320,
    salePrice: 0,
    totalQty: 40,
    unitWeightKg: 0.5,
    pickupUntil: '23:45',
    minutesRemaining: 90,
    dietTags: ['ปรุงสุกพร้อมทาน', 'ฮาลาล (Halal)']
  }
];

// Application State
const state = {
  role: 'community', // 'community' | 'foundation' | 'partner'
  listings: [],
  claims: [],
  stats: { ...INITIAL_STATS },
  shelters: [],
  filters: {
    search: '',
    area: 'all',
    priceType: 'all', // 'all' | 'free' | 'discount' | 'foundation'
    category: 'all',
    halalOnly: false,
    vegOnly: false,
    sortBy: 'urgent'
  },
  simIndex: 0,
  simIntervalId: null
};

// =========================================================
// INITIALIZATION & STORAGE
// =========================================================
function loadData() {
  try {
    const savedListings = localStorage.getItem(STORAGE_KEYS.LISTINGS);
    const savedClaims = localStorage.getItem(STORAGE_KEYS.CLAIMS);
    const savedStats = localStorage.getItem(STORAGE_KEYS.STATS);
    const savedShelters = localStorage.getItem(STORAGE_KEYS.SHELTERS);

    state.listings = savedListings ? JSON.parse(savedListings) : structuredClone(INITIAL_LISTINGS);
    state.claims = savedClaims ? JSON.parse(savedClaims) : [];
    state.stats = savedStats ? JSON.parse(savedStats) : { ...INITIAL_STATS };
    state.shelters = savedShelters ? JSON.parse(savedShelters) : structuredClone(INITIAL_SHELTERS);
  } catch (err) {
    console.error('Error loading localStorage data:', err);
    state.listings = structuredClone(INITIAL_LISTINGS);
    state.claims = [];
    state.stats = { ...INITIAL_STATS };
    state.shelters = structuredClone(INITIAL_SHELTERS);
  }
}

function saveData() {
  try {
    localStorage.setItem(STORAGE_KEYS.LISTINGS, JSON.stringify(state.listings));
    localStorage.setItem(STORAGE_KEYS.CLAIMS, JSON.stringify(state.claims));
    localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(state.stats));
    localStorage.setItem(STORAGE_KEYS.SHELTERS, JSON.stringify(state.shelters));
  } catch (err) {
    console.error('Error saving localStorage data:', err);
  }
}

function resetDemoData() {
  localStorage.removeItem(STORAGE_KEYS.LISTINGS);
  localStorage.removeItem(STORAGE_KEYS.CLAIMS);
  localStorage.removeItem(STORAGE_KEYS.STATS);
  localStorage.removeItem(STORAGE_KEYS.SHELTERS);
  loadData();
  renderAll();
  showToast('🔄 รีเซ็ตข้อมูลตัวอย่างเริ่มต้นเรียบร้อยแล้ว');
}

// =========================================================
// RENDERING FUNCTIONS
// =========================================================
function renderStats() {
  document.getElementById('statMealsRescued').textContent = state.stats.mealsRescued.toLocaleString('th-TH');
  document.getElementById('statFoodSavedKg').textContent = Math.round(state.stats.foodSavedKg).toLocaleString('th-TH');
  document.getElementById('statCo2Saved').textContent = Math.round(state.stats.co2SavedKg).toLocaleString('th-TH');
  document.getElementById('statMoneySaved').textContent = '฿' + Math.round(state.stats.moneySavedBaht).toLocaleString('th-TH');
  document.getElementById('myClaimsCount').textContent = state.claims.length;
}

function getFilteredListings() {
  const { search, area, priceType, category, halalOnly, vegOnly, sortBy } = state.filters;
  const query = search.trim().toLowerCase();

  const filtered = state.listings.filter((item) => {
    if (item.remainingQty <= 0) return false;

    if (area !== 'all' && item.area !== area) return false;

    if (priceType === 'free' && item.offerType !== 'free' && item.offerType !== 'foundation_only') return false;
    if (priceType === 'discount' && item.offerType !== 'discount') return false;
    if (priceType === 'foundation' && item.offerType !== 'foundation_only' && item.offerType !== 'free') return false;

    if (category !== 'all' && item.category !== category) return false;

    if (halalOnly && !item.dietTags.some((t) => t.includes('ฮาลาล'))) return false;
    if (vegOnly && !item.dietTags.some((t) => t.includes('มังสวิรัติ') || t.includes('เจ'))) return false;

    if (query) {
      const hay = `${item.title} ${item.storeName} ${item.description} ${item.area} ${item.dietTags.join(' ')}`.toLowerCase();
      if (!hay.includes(query)) return false;
    }

    return true;
  });

  filtered.sort((a, b) => {
    if (sortBy === 'urgent') return a.minutesRemaining - b.minutesRemaining;
    if (sortBy === 'distance') return a.distanceKm - b.distanceKm;
    if (sortBy === 'priceAsc') return a.salePrice - b.salePrice;
    if (sortBy === 'quantityDesc') return b.remainingQty - a.remainingQty;
    return 0;
  });

  return filtered;
}

function renderListings() {
  const grid = document.getElementById('foodListingsGrid');
  const countText = document.getElementById('resultsCountText');
  const resetBtn = document.getElementById('resetFiltersBtn');

  const items = getFilteredListings();

  const hasActiveFilter =
    state.filters.search !== '' ||
    state.filters.area !== 'all' ||
    state.filters.priceType !== 'all' ||
    state.filters.category !== 'all' ||
    state.filters.halalOnly ||
    state.filters.vegOnly;

  resetBtn.hidden = !hasActiveFilter;
  countText.innerHTML = `พบอาหารส่วนเกินพร้อมส่งต่อ <strong>${items.length} รายการ</strong> (${items.reduce((sum, i) => sum + i.remainingQty, 0)} ชุด/กล่อง)`;

  if (items.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; background: #fff; border-radius: 20px; border: 1px dashed var(--border-strong);">
        <div style="font-size: 3rem; margin-bottom: 0.5rem;">🍲</div>
        <h3 style="font-family: var(--font-display); margin-bottom: 0.35rem;">ไม่พบรายการอาหารที่ตรงกับตัวกรองของคุณ</h3>
        <p style="color: var(--text-secondary); margin-bottom: 1rem;">ลองปรับเปลี่ยนพื้นที่ค้นหา หรือกดปุ่มจำลองร้านค้าโพสต์ใหม่ด้านบน</p>
        <button type="button" class="btn btn-outline" onclick="clearAllFilters()">แสดงรายการอาหารทั้งหมด</button>
      </div>
    `;
    renderRadarPins(items);
    return;
  }

  grid.innerHTML = items
    .map((item) => {
      const isFree = item.salePrice === 0;
      const isFoundationOnly = item.offerType === 'foundation_only';
      const discountPercent =
        item.originalPrice > 0 && item.salePrice > 0
          ? Math.round(((item.originalPrice - item.salePrice) / item.originalPrice) * 100)
          : 100;

      let badgeClass = 'badge-free';
      let badgeLabel = '🎁 แจกฟรีให้ชุมชน';
      let bannerClass = '';

      if (isFoundationOnly) {
        badgeClass = 'badge-foundation';
        badgeLabel = '🏠 บริจาคล็อตใหญ่ (มูลนิธิ/ศูนย์พักพิง)';
        bannerClass = 'banner-foundation';
      } else if (!isFree) {
        badgeClass = 'badge-discount';
        badgeLabel = `🏷️ ลดราคา ${discountPercent}%`;
        bannerClass = 'banner-discount';
      }

      const pctRemaining = Math.max(8, Math.min(100, Math.round((item.remainingQty / item.totalQty) * 100)));

      return `
        <article class="food-card" id="card-${item.id}">
          <div class="card-banner ${bannerClass}">
            <div class="card-top-badges">
              <span class="offer-badge ${badgeClass}">${badgeLabel}</span>
              <span class="time-badge">⏰ รับได้ถึง ${item.pickupUntil} น. (อีก ${item.minutesRemaining} นาที)</span>
            </div>
            <div class="store-header">
              <div class="store-emoji" aria-hidden="true">${item.emoji}</div>
              <div class="store-meta">
                <div class="store-name">
                  <span>${escapeHtml(item.storeName)}</span>
                  <span class="verified-check" title="พาร์ทเนอร์ผ่านการรับรองมาตรฐานความปลอดภัยทางอาหาร">✔</span>
                </div>
                <h3 class="food-title">${escapeHtml(item.title)}</h3>
              </div>
            </div>
          </div>

          <div class="card-body">
            <p class="food-desc">${escapeHtml(item.description)}</p>

            <div class="meta-Chips">
              <span class="meta-chip chip-area">📍 ${escapeHtml(item.area)} • ห่าง ${item.distanceKm.toFixed(1)} กม.</span>
              ${item.dietTags.map((tag) => `<span class="meta-chip">${escapeHtml(tag)}</span>`).join('')}
              <span class="meta-chip">🕒 โพสต์เมื่อ ${escapeHtml(item.postedAgo)}</span>
            </div>

            <div class="stock-progress-box">
              <div class="stock-labels">
                <span class="stock-remaining">คงเหลือพร้อมรับ: <strong>${item.remainingQty}</strong> / ${item.totalQty} ชุด</span>
                <span>~${(item.unitWeightKg * item.remainingQty).toFixed(1)} กก.</span>
              </div>
              <div class="progress-track" role="progressbar" aria-valuenow="${item.remainingQty}" aria-valuemin="0" aria-valuemax="${item.totalQty}">
                <div class="progress-fill" style="width: ${pctRemaining}%;"></div>
              </div>
            </div>
          </div>

          <div class="card-footer">
            <div class="price-block">
              <span class="price-current ${!isFree ? 'is-discount' : ''}">
                ${isFree ? 'รับฟรี ฿0' : `฿${item.salePrice} / ชุด`}
              </span>
              <span class="price-original">มูลค่าปกติ ฿${item.originalPrice}</span>
            </div>
            <button type="button" class="btn btn-primary" onclick="openClaimModal('${item.id}')">
              ${isFree ? '🍲 จองสิทธิ์รับอาหาร' : '🛒 จองซื้อราคาประหยัด'}
            </button>
          </div>
        </article>
      `;
    })
    .join('');

  renderRadarPins(items);
}

function renderRadarPins(filteredItems) {
  const layer = document.getElementById('mapPinsLayer');
  if (!layer) return;

  const foodPinsHtml = filteredItems
    .map((item) => {
      const pinClass = item.salePrice === 0 ? 'pin-free' : 'pin-discount';
      const priceText = item.salePrice === 0 ? 'ฟรี' : `฿${item.salePrice}`;
      return `
        <button
          type="button"
          class="map-pin-btn ${pinClass}"
          style="left: ${item.mapX}%; top: ${item.mapY}%;"
          onclick="focusFoodCardFromMap('${item.id}')"
          title="${escapeHtml(item.storeName)} - ${escapeHtml(item.title)}"
        >
          <span>${item.emoji}</span>
          <span>${priceText} (${item.remainingQty})</span>
        </button>
      `;
    })
    .join('');

  const shelterPinsHtml = state.shelters
    .map((sh) => {
      const remainingNeed = Math.max(0, sh.neededMeals - sh.fulfilledMeals);
      return `
        <button
          type="button"
          class="map-pin-btn pin-shelter"
          style="left: ${sh.mapX}%; top: ${sh.mapY}%;"
          onclick="focusShelterFromMap('${sh.id}')"
          title="${escapeHtml(sh.name)}"
        >
          <span>🏠</span>
          <span>ต้องการ ${remainingNeed} มื้อ</span>
        </button>
      `;
    })
    .join('');

  layer.innerHTML = foodPinsHtml + shelterPinsHtml;
}

function renderShelters() {
  const grid = document.getElementById('sheltersGrid');
  if (!grid) return;

  grid.innerHTML = state.shelters
    .map((sh) => {
      const pct = Math.min(100, Math.round((sh.fulfilledMeals / sh.neededMeals) * 100));
      const stillNeeded = Math.max(0, sh.neededMeals - sh.fulfilledMeals);

      return `
        <article class="shelter-card" id="shelter-${sh.id}">
          <div>
            <div class="shelter-top">
              <div>
                <h3 class="shelter-name">${escapeHtml(sh.name)}</h3>
                <p class="shelter-area">📍 ${escapeHtml(sh.area)} • ดูแล: ${escapeHtml(sh.targetGroup)}</p>
              </div>
              <span class="shelter-badge">
                ${stillNeeded > 0 ? `ต้องการอีก ${stillNeeded} มื้อ` : '✅ ครบตามเป้าหมายวันนี้'}
              </span>
            </div>
          </div>

          <p class="shelter-need-desc">📢 ${escapeHtml(sh.urgentNote)}</p>

          <div class="stock-progress-box">
            <div class="stock-labels">
              <span>ได้รับบริจาคแล้ววันนี้: <strong>${sh.fulfilledMeals} / ${sh.neededMeals} มื้อ</strong></span>
              <span>${pct}%</span>
            </div>
            <div class="progress-track">
              <div class="progress-fill" style="width: ${pct}%;"></div>
            </div>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
            <span style="font-size: 0.78rem; color: var(--text-secondary);">✔ ออกใบสำคัญรับบริจาคอิเล็กทรอนิกส์ได้</span>
            <button type="button" class="btn btn-outline btn-sm" onclick="openDonateToShelterModal('${sh.id}')">
              🤝 ส่งมอบอาหารให้ศูนย์นี้
            </button>
          </div>
        </article>
      `;
    })
    .join('');
}

function renderMyClaims() {
  const container = document.getElementById('myClaimsListContainer');
  if (!container) return;

  if (state.claims.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2rem 1rem; color: var(--text-secondary);">
        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🎟️</div>
        <p>คุณยังไม่มีคูปองการจองรับอาหารในขณะนี้</p>
        <small>เลือกรายการอาหารส่วนเกินในหน้าแรกแล้วกด "จองสิทธิ์รับอาหาร" เพื่อรับรหัส QR Code</small>
      </div>
    `;
    return;
  }

  container.innerHTML = state.claims
    .map((c) => {
      return `
        <div class="ticket-card">
          <div>
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
              <span class="offer-badge badge-free" style="font-size: 0.7rem;">ยืนยันสิทธิ์แล้ว</span>
              <small style="color: var(--text-secondary);">จองเมื่อ ${escapeHtml(c.claimedAt)}</small>
            </div>
            <h4 style="font-family: var(--font-display); font-size: 1.05rem;">${escapeHtml(c.foodTitle)} (จำนวน ${c.quantity} ชุด)</h4>
            <p style="font-size: 0.85rem; color: var(--text-secondary);">🏪 ร้าน: <strong>${escapeHtml(c.storeName)}</strong> (${escapeHtml(c.area)})</p>
            <p style="font-size: 0.83rem; color: var(--text-main); margin-top: 0.25rem;">
              👤 ผู้รับ: ${escapeHtml(c.userName)} (${escapeHtml(c.recipientType)}) • ⏰ รับก่อน <strong>${escapeHtml(c.pickupUntil)} น.</strong>
            </p>
            <p style="font-size: 0.8rem; color: var(--primary); margin-top: 0.2rem;">
              🚚 การรับ: ${escapeHtml(c.deliveryMethod)} • ยอดชำระหน้าร้าน: <strong>${c.totalPrice === 0 ? 'ฟรี (0 บาท)' : `฿${c.totalPrice}`}</strong>
            </p>
          </div>
          <div class="ticket-code-box">
            <div class="qr-visual" aria-hidden="true">
              ▛▀▜ ▄ ▛▀▜<br>
              ▌█▐ ▀ ▌█▐<br>
              ▙▄▟ █ ▙▄▟
            </div>
            <div class="ticket-code">${escapeHtml(c.pickupCode)}</div>
            <small style="font-size: 0.7rem; color: var(--text-muted);">รหัสรับอาหาร</small>
          </div>
        </div>
      `;
    })
    .join('');
}

function renderAll() {
  renderStats();
  renderListings();
  renderShelters();
  renderMyClaims();
}

// =========================================================
// INTERACTIVE ACTIONS & MODALS
// =========================================================
function focusFoodCardFromMap(itemId) {
  const item = state.listings.find((i) => i.id === itemId);
  if (!item) return;

  const infoBox = document.getElementById('radarSelectedInfo');
  if (infoBox) {
    infoBox.innerHTML = `📍 เลือกหมุด: <strong>${escapeHtml(item.storeName)}</strong> — ${escapeHtml(item.title)} (คงเหลือ ${item.remainingQty} ชุด)`;
  }

  const cardEl = document.getElementById(`card-${itemId}`);
  if (cardEl) {
    cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    cardEl.classList.remove('highlight-flash');
    void cardEl.offsetWidth;
    cardEl.classList.add('highlight-flash');
  }
}

function focusShelterFromMap(shelterId) {
  const sh = state.shelters.find((s) => s.id === shelterId);
  if (!sh) return;

  const cardEl = document.getElementById(`shelter-${shelterId}`);
  if (cardEl) {
    cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

window.focusFoodCardFromMap = focusFoodCardFromMap;
window.focusShelterFromMap = focusShelterFromMap;

function openClaimModal(itemId) {
  const item = state.listings.find((i) => i.id === itemId);
  if (!item || item.remainingQty <= 0) return;

  const dialog = document.getElementById('claimFoodDialog');
  document.getElementById('claimItemId').value = item.id;

  const recipientSelect = document.getElementById('claimRecipientType');
  if (state.role === 'foundation' || item.offerType === 'foundation_only') {
    recipientSelect.value = 'ตัวแทนมูลนิธิ / ศูนย์พักพิง';
  } else {
    recipientSelect.value = 'ประชาชนทั่วไปในชุมชน';
  }

  const qtyInput = document.getElementById('claimQuantity');
  const maxAllowed =
    recipientSelect.value.includes('มูลนิธิ') || item.offerType === 'foundation_only'
      ? item.remainingQty
      : Math.min(4, item.remainingQty);

  qtyInput.max = item.remainingQty;
  qtyInput.value = item.offerType === 'foundation_only' ? Math.min(10, item.remainingQty) : 1;

  document.getElementById('claimQtyHint').textContent =
    item.offerType === 'foundation_only'
      ? `รายการนี้สำหรับมูลนิธิ/ศูนย์พักพิง สามารถเบิกรับได้สูงสุด ${item.remainingQty} ชุด`
      : `คงเหลือ ${item.remainingQty} ชุด (ประชาชนทั่วไปแนะนำ 1-${maxAllowed} ชุด เพื่อแบ่งปันเพื่อนบ้าน)`;

  document.getElementById('claimItemSummary').innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.75rem;">
      <div>
        <strong style="font-size: 1rem; color: var(--text-main);">${escapeHtml(item.emoji)} ${escapeHtml(item.title)}</strong>
        <p style="font-size: 0.84rem; color: var(--text-secondary);">${escapeHtml(item.storeName)} • ${escapeHtml(item.area)}</p>
      </div>
      <span class="time-badge">รับก่อน ${escapeHtml(item.pickupUntil)} น.</span>
    </div>
  `;

  updateClaimPricePreview();
  dialog.showModal();
}

window.openClaimModal = openClaimModal;

function updateClaimPricePreview() {
  const itemId = document.getElementById('claimItemId').value;
  const item = state.listings.find((i) => i.id === itemId);
  if (!item) return;

  const qty = Math.max(1, Math.min(item.remainingQty, parseInt(document.getElementById('claimQuantity').value, 10) || 1));
  const totalPay = item.salePrice * qty;
  const savedMoney = (item.originalPrice - item.salePrice) * qty;
  const savedKg = (item.unitWeightKg * qty).toFixed(1);

  document.getElementById('claimPriceSummary').innerHTML = `
    <div>
      <strong style="display: block; color: var(--text-main);">
        ยอดชำระหน้าร้าน (${qty} ชุด): <span style="color: var(--primary); font-size: 1.15rem;">${totalPay === 0 ? 'รับฟรี ฿0' : `฿${totalPay}`}</span>
      </strong>
      <small style="color: var(--text-secondary);">
        ช่วยประหยัดค่าอาหารได้ <strong>฿${savedMoney}</strong> และลดขยะอาหารได้ <strong>${savedKg} กก.</strong>
      </small>
    </div>
    <span style="font-size: 1.5rem;">🌱</span>
  `;
}

function openDonateToShelterModal(shelterId) {
  const shelter = state.shelters.find((s) => s.id === shelterId);
  if (!shelter) return;

  document.getElementById('postMatchedShelterId').value = shelter.id;
  document.getElementById('matchedShelterName').textContent = `${shelter.name} (${shelter.area})`;
  document.getElementById('matchedShelterBanner').hidden = false;

  document.getElementById('postArea').value = shelter.area;
  document.getElementById('postOfferType').value = 'foundation_only';
  document.getElementById('postQuantity').value = Math.max(10, shelter.neededMeals - shelter.fulfilledMeals);
  handleOfferTypeChange();

  document.getElementById('postFoodDialog').showModal();
}

window.openDonateToShelterModal = openDonateToShelterModal;

function handleOfferTypeChange() {
  const offerType = document.getElementById('postOfferType').value;
  const salePriceInput = document.getElementById('postSalePrice');
  const priceHint = document.getElementById('postPriceHint');
  const origPrice = parseInt(document.getElementById('postOriginalPrice').value, 10) || 120;

  if (offerType === 'discount') {
    salePriceInput.disabled = false;
    salePriceInput.value = Math.round(origPrice * 0.35);
    priceHint.textContent = 'แนะนำลดราคา 50–80% เพื่อช่วยให้ระบายอาหารได้ไวก่อนปิดร้าน';
  } else {
    salePriceInput.disabled = true;
    salePriceInput.value = 0;
    priceHint.textContent = 'แจกฟรี (0 บาท) สำหรับช่วยเหลือชุมชนและมูลนิธิ';
  }
}

function clearAllFilters() {
  state.filters = {
    search: '',
    area: 'all',
    priceType: 'all',
    category: 'all',
    halalOnly: false,
    vegOnly: false,
    sortBy: 'urgent'
  };

  document.getElementById('searchInput').value = '';
  document.getElementById('areaFilterSelect').value = 'all';
  document.getElementById('filterHalal').checked = false;
  document.getElementById('filterVeg').checked = false;
  document.getElementById('sortSelect').value = 'urgent';

  document.querySelectorAll('.filter-pill').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.priceFilter === 'all');
  });
  document.querySelectorAll('.cat-tab').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.cat === 'all');
  });

  renderListings();
}

window.clearAllFilters = clearAllFilters;

// =========================================================
// REAL-TIME SIMULATION ENGINE
// =========================================================
function triggerSimulatedPost() {
  const template = SIMULATED_NEW_POSTS[state.simIndex % SIMULATED_NEW_POSTS.length];
  state.simIndex += 1;

  const newItem = {
    ...structuredClone(template),
    id: 'fl-sim-' + Date.now(),
    remainingQty: template.totalQty,
    mapX: Math.floor(22 + Math.random() * 58),
    mapY: Math.floor(24 + Math.random() * 54),
    postedAgo: 'เพิ่งโพสต์เมื่อสักครู่'
  };

  state.listings.unshift(newItem);
  saveData();
  renderListings();

  const ticker = document.getElementById('liveTickerMessage');
  if (ticker) {
    ticker.innerHTML = `🔔 <strong>ประกาศใหม่เมื่อสักครู่!</strong> ${escapeHtml(newItem.storeName)} ลงประกาศ "${escapeHtml(newItem.title)}" จำนวน ${newItem.totalQty} ชุด ในย่าน${escapeHtml(newItem.area)}`;
  }

  showToast(`⚡ มีอาหารส่วนเกินมาใหม่! "${newItem.title}" จาก ${newItem.storeName}`);
}

// =========================================================
// UTILITIES
// =========================================================
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4200);
}

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// =========================================================
// EVENT LISTENERS SETUP
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
  loadData();
  renderAll();

  // Role Switcher
  const roleButtons = document.querySelectorAll('.role-btn');
  roleButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      roleButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      state.role = btn.dataset.role;

      const iconEl = document.getElementById('roleBannerIcon');
      const titleEl = document.getElementById('roleBannerTitle');
      const descEl = document.getElementById('roleBannerDesc');

      if (state.role === 'community') {
        iconEl.textContent = '🍲';
        titleEl.textContent = 'คุณกำลังใช้งานในโหมด: ประชาชนในชุมชน';
        descEl.textContent = 'สามารถจองรับอาหารแจกฟรีสำหรับชุมชน และซื้ออาหารลดราคาพิเศษ 50-80% จากร้านค้าใกล้บ้าน';
      } else if (state.role === 'foundation') {
        iconEl.textContent = '🏠';
        titleEl.textContent = 'คุณกำลังใช้งานในโหมด: ตัวแทนมูลนิธิ / ศูนย์พักพิง';
        descEl.textContent = 'ปลดล็อกการจองรับอาหารบริจาคล็อตใหญ่ (Bulk Donation) จากโรงแรมและซูเปอร์มาร์เก็ต พร้อมประสานอาสาสมัครจัดส่งฟรี';
      } else {
        iconEl.textContent = '🏪';
        titleEl.textContent = 'คุณกำลังใช้งานในโหมด: พาร์ทเนอร์ร้านอาหาร / โรงแรม / ซูเปอร์มาร์เก็ต';
        descEl.textContent = 'สามารถลงประกาศส่งต่ออาหารส่วนเกินแบบเรียลไทม์ หรือกดส่งมอบอาหารให้ศูนย์พักพิงที่กำลังขาดแคลนได้โดยตรง';
      }
    });
  });

  // Search & Filter Listeners
  document.getElementById('searchInput').addEventListener('input', (e) => {
    state.filters.search = e.target.value;
    renderListings();
  });

  document.getElementById('areaFilterSelect').addEventListener('change', (e) => {
    state.filters.area = e.target.value;
    renderListings();
  });

  document.querySelectorAll('.filter-pill').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      state.filters.priceType = btn.dataset.priceFilter;
      renderListings();
    });
  });

  document.querySelectorAll('.cat-tab').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cat-tab').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      state.filters.category = btn.dataset.cat;
      renderListings();
    });
  });

  document.getElementById('filterHalal').addEventListener('change', (e) => {
    state.filters.halalOnly = e.target.checked;
    renderListings();
  });

  document.getElementById('filterVeg').addEventListener('change', (e) => {
    state.filters.vegOnly = e.target.checked;
    renderListings();
  });

  document.getElementById('sortSelect').addEventListener('change', (e) => {
    state.filters.sortBy = e.target.value;
    renderListings();
  });

  document.getElementById('resetFiltersBtn').addEventListener('click', clearAllFilters);

  // Toggle Radar Map
  const toggleMapBtn = document.getElementById('toggleMapBtn');
  const radarMapContainer = document.getElementById('radarMapContainer');
  toggleMapBtn.addEventListener('click', () => {
    const isHidden = radarMapContainer.hidden;
    radarMapContainer.hidden = !isHidden;
    toggleMapBtn.setAttribute('aria-expanded', String(isHidden));
  });

  // Quantity controls inside Claim Modal
  document.getElementById('qtyMinusBtn').addEventListener('click', () => {
    const input = document.getElementById('claimQuantity');
    const val = Math.max(1, (parseInt(input.value, 10) || 1) - 1);
    input.value = val;
    updateClaimPricePreview();
  });

  document.getElementById('qtyPlusBtn').addEventListener('click', () => {
    const input = document.getElementById('claimQuantity');
    const max = parseInt(input.max, 10) || 50;
    const val = Math.min(max, (parseInt(input.value, 10) || 1) + 1);
    input.value = val;
    updateClaimPricePreview();
  });

  document.getElementById('claimQuantity').addEventListener('input', updateClaimPricePreview);

  // Submit Claim Form
  document.getElementById('claimFoodForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const itemId = document.getElementById('claimItemId').value;
    const item = state.listings.find((i) => i.id === itemId);
    if (!item) return;

    const qty = Math.max(1, Math.min(item.remainingQty, parseInt(document.getElementById('claimQuantity').value, 10) || 1));
    const userName = document.getElementById('claimUserName').value.trim();
    const recipientType = document.getElementById('claimRecipientType').value;
    const deliveryMethod = document.getElementById('claimDeliveryMethod').value;

    // Deduct stock
    item.remainingQty -= qty;

    // Update impact stats
    const weightSaved = item.unitWeightKg * qty;
    const co2Prevented = weightSaved * 2.53; // ~2.53 kg CO2e per kg of food waste avoided
    const moneySaved = (item.originalPrice - item.salePrice) * qty;

    state.stats.mealsRescued += qty;
    state.stats.foodSavedKg += weightSaved;
    state.stats.co2SavedKg += co2Prevented;
    state.stats.moneySavedBaht += moneySaved;

    // Create Claim Coupon
    const randomCode = 'FL-' + Math.floor(100000 + Math.random() * 900000);
    const nowStr = new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' }) + ' น.';

    state.claims.unshift({
      id: 'claim-' + Date.now(),
      pickupCode: randomCode,
      foodTitle: item.title,
      storeName: item.storeName,
      area: item.area,
      quantity: qty,
      totalPrice: item.salePrice * qty,
      pickupUntil: item.pickupUntil,
      userName,
      recipientType,
      deliveryMethod,
      claimedAt: nowStr
    });

    saveData();
    renderAll();

    document.getElementById('claimFoodDialog').close();
    document.getElementById('myClaimsDialog').showModal();
    showToast(`🎉 จองสำเร็จ! รหัสรับอาหารของคุณคือ ${randomCode} (ช่วยลดขยะอาหารได้ ${weightSaved.toFixed(1)} กก.)`);
  });

  // Open Post Food Modal
  const openPostFn = () => {
    document.getElementById('postMatchedShelterId').value = '';
    document.getElementById('matchedShelterBanner').hidden = true;
    handleOfferTypeChange();
    document.getElementById('postFoodDialog').showModal();
  };

  document.getElementById('openPostModalBtn').addEventListener('click', openPostFn);
  document.getElementById('heroPostFoodBtn').addEventListener('click', openPostFn);

  document.getElementById('clearMatchedShelterBtn').addEventListener('click', () => {
    document.getElementById('postMatchedShelterId').value = '';
    document.getElementById('matchedShelterBanner').hidden = true;
  });

  document.getElementById('postOfferType').addEventListener('change', handleOfferTypeChange);
  document.getElementById('postOriginalPrice').addEventListener('input', handleOfferTypeChange);

  // Submit Post New Surplus Food Form
  document.getElementById('postFoodForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const storeName = document.getElementById('postStoreName').value.trim();
    const category = document.getElementById('postStoreCategory').value;
    const title = document.getElementById('postTitle').value.trim();
    const area = document.getElementById('postArea').value;
    const description = document.getElementById('postDescription').value.trim();
    const offerType = document.getElementById('postOfferType').value;
    const originalPrice = parseInt(document.getElementById('postOriginalPrice').value, 10) || 100;
    const salePrice = offerType === 'discount' ? parseInt(document.getElementById('postSalePrice').value, 10) || 30 : 0;
    const qty = parseInt(document.getElementById('postQuantity').value, 10) || 10;
    const unitWeightKg = parseFloat(document.getElementById('postUnitWeight').value) || 0.4;
    const pickupUntil = document.getElementById('postPickupUntil').value || '23:30';
    const matchedShelterId = document.getElementById('postMatchedShelterId').value;

    const checkedTags = Array.from(document.querySelectorAll('input[name="dietTags"]:checked')).map((el) => el.value);
    if (checkedTags.length === 0) checkedTags.push('ปรุงสุกพร้อมทาน');

    const emojiMap = {
      restaurant: '🍱',
      supermarket: '🛒',
      hotel: '🏨',
      bakery: '🥐'
    };

    const newListing = {
      id: 'fl-user-' + Date.now(),
      storeName,
      category,
      emoji: emojiMap[category] || '🍲',
      title,
      description,
      area,
      distanceKm: Number((0.5 + Math.random() * 3.0).toFixed(1)),
      offerType,
      originalPrice,
      salePrice,
      totalQty: qty,
      remainingQty: qty,
      unitWeightKg,
      pickupUntil,
      minutesRemaining: 60,
      dietTags: checkedTags,
      mapX: Math.floor(25 + Math.random() * 55),
      mapY: Math.floor(25 + Math.random() * 55),
      postedAgo: 'เพิ่งโพสต์เมื่อสักครู่'
    };

    state.listings.unshift(newListing);

    // If matched to a shelter, also update shelter progress!
    if (matchedShelterId) {
      const shelter = state.shelters.find((s) => s.id === matchedShelterId);
      if (shelter) {
        shelter.fulfilledMeals = Math.min(shelter.neededMeals, shelter.fulfilledMeals + qty);
        state.stats.mealsRescued += qty;
        state.stats.foodSavedKg += qty * unitWeightKg;
        state.stats.co2SavedKg += qty * unitWeightKg * 2.53;
        state.stats.moneySavedBaht += qty * originalPrice;
      }
    }

    saveData();
    renderAll();

    document.getElementById('postFoodDialog').close();
    e.target.reset();
    showToast(`🚀 เผยแพร่ประกาศ "${title}" จำนวน ${qty} ชุด เข้าสู่ระบบเรียลไทม์สำเร็จ!`);
  });

  // Open My Claims Dialog
  document.getElementById('openMyClaimsBtn').addEventListener('click', () => {
    renderMyClaims();
    document.getElementById('myClaimsDialog').showModal();
  });

  // Close Dialog buttons & backdrop click light-dismiss
  document.querySelectorAll('[data-close-dialog]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const dialogId = btn.getAttribute('data-close-dialog');
      const dialog = document.getElementById(dialogId);
      if (dialog) dialog.close();
    });
  });

  document.querySelectorAll('dialog.app-dialog').forEach((dialog) => {
    dialog.addEventListener('click', (e) => {
      const rect = dialog.getBoundingClientRect();
      const clickedInDialog =
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width;
      if (!clickedInDialog) {
        dialog.close();
      }
    });
  });

  // Live Simulation Controls
  document.getElementById('triggerSimNowBtn').addEventListener('click', triggerSimulatedPost);

  const simToggle = document.getElementById('realtimeSimToggle');
  const startSimInterval = () => {
    if (state.simIntervalId) clearInterval(state.simIntervalId);
    state.simIntervalId = setInterval(() => {
      if (simToggle.checked) {
        triggerSimulatedPost();
      }
    }, 38000);
  };
  startSimInterval();

  // Reset Demo Data
  document.getElementById('resetDemoDataBtn').addEventListener('click', resetDemoData);
});
