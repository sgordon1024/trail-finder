/* ============================================================
   Trail Finder — App JS
   Thousand Trails campground map (104 locations)
   ============================================================ */

'use strict';

// ============================================================
// Campground Data
// ============================================================
const CAMPGROUNDS = [

  // ========== NORTHEAST ZONE ==========
  { id:  1, name: 'Moody Beach RV Campground',          city: 'Wells',             state: 'ME', lat: 43.3220, lng: -70.5770, zone: 'Northeast' },
  { id:  2, name: 'Mt Desert Narrows Camping Resort',   city: 'Bar Harbor',        state: 'ME', lat: 44.3876, lng: -68.2039, zone: 'Northeast' },
  { id:  3, name: 'Gateway to Cape Cod RV Campground',  city: 'Rochester',         state: 'MA', lat: 41.7423, lng: -70.8242, zone: 'Northeast' },
  { id:  4, name: 'Sturbridge RV Resort',               city: 'Sturbridge',        state: 'MA', lat: 42.1132, lng: -72.0798, zone: 'Northeast' },
  { id:  5, name: 'Chestnut Lake RV Campground',        city: 'Port Republic',     state: 'NJ', lat: 39.5218, lng: -74.4885, zone: 'Northeast' },
  { id:  6, name: 'Lake & Shore RV Resort',             city: 'Ocean View',        state: 'NJ', lat: 39.1734, lng: -74.7043, zone: 'Northeast' },
  { id:  7, name: 'Sea Pines RV Resort & Campground',   city: 'Swainton',          state: 'NJ', lat: 39.0618, lng: -74.8232, zone: 'Northeast' },
  { id:  8, name: 'Rondout Valley RV Campground',       city: 'Accord',            state: 'NY', lat: 41.7929, lng: -74.2332, zone: 'Northeast' },
  { id:  9, name: 'Circle M RV & Camping Resort',       city: 'Lancaster',         state: 'PA', lat: 40.0379, lng: -76.3055, zone: 'Northeast' },
  { id: 10, name: 'Gettysburg Farm RV Campground',      city: 'Dover',             state: 'PA', lat: 39.9776, lng: -76.8535, zone: 'Northeast' },
  { id: 11, name: 'Hershey RV & Camping Resort',        city: 'Lebanon',           state: 'PA', lat: 40.3387, lng: -76.4513, zone: 'Northeast' },
  { id: 12, name: 'PA Dutch Country RV Resort',         city: 'Manheim',           state: 'PA', lat: 40.1618, lng: -76.3938, zone: 'Northeast' },
  { id: 13, name: 'Scotrun RV Resort',                  city: 'Scotrun',           state: 'PA', lat: 41.0720, lng: -75.3774, zone: 'Northeast' },
  { id: 14, name: 'Spring Gulch RV Campground',         city: 'New Holland',       state: 'PA', lat: 40.1020, lng: -76.0877, zone: 'Northeast' },
  { id: 15, name: 'Timothy Lake North RV Campground',   city: 'East Stroudsburg',  state: 'PA', lat: 41.0023, lng: -75.1835, zone: 'Northeast' },
  { id: 16, name: 'Timothy Lake South RV Campground',   city: 'East Stroudsburg',  state: 'PA', lat: 40.9850, lng: -75.1700, zone: 'Northeast' },

  // ========== SOUTHEAST ZONE ==========
  { id: 17, name: 'Hidden Cove RV Resort',              city: 'Arley',             state: 'AL', lat: 34.0617, lng: -87.1741, zone: 'Southeast' },
  { id: 18, name: 'Orlando RV Resort',                  city: 'Clermont',          state: 'FL', lat: 28.5494, lng: -81.7729, zone: 'Southeast' },
  { id: 19, name: 'Peace River RV & Camping Resort',    city: 'Wauchula',          state: 'FL', lat: 27.5469, lng: -81.8138, zone: 'Southeast' },
  { id: 20, name: 'Three Flags RV Campground',          city: 'Wildwood',          state: 'FL', lat: 28.8578, lng: -82.0258, zone: 'Southeast' },
  { id: 21, name: 'Sunshine Key RV Resort & Marina',    city: 'Big Pine Key',      state: 'FL', lat: 24.6632, lng: -81.3615, zone: 'Southeast' },
  { id: 22, name: 'Fiesta Key RV Resort & Marina',      city: 'Layton',            state: 'FL', lat: 24.8266, lng: -80.8226, zone: 'Southeast' },
  { id: 23, name: 'Clerbrook Golf & RV Resort',         city: 'Clermont',          state: 'FL', lat: 28.5750, lng: -81.8010, zone: 'Southeast' },
  { id: 24, name: 'Clover Leaf Forest RV Resort',       city: 'Brooksville',       state: 'FL', lat: 28.5553, lng: -82.3879, zone: 'Southeast' },
  { id: 25, name: 'Forest Lake Village',                city: 'Zephyrhills',       state: 'FL', lat: 28.2342, lng: -82.1812, zone: 'Southeast' },
  { id: 26, name: 'Lake Magic RV Resort',               city: 'Clermont',          state: 'FL', lat: 28.5200, lng: -81.8200, zone: 'Southeast' },
  { id: 27, name: 'Sherwood Forest RV Resort',          city: 'Kissimmee',         state: 'FL', lat: 28.2920, lng: -81.4071, zone: 'Southeast' },
  { id: 28, name: 'Southern Palms RV Resort',           city: 'Eustis',            state: 'FL', lat: 28.8531, lng: -81.6856, zone: 'Southeast' },
  { id: 29, name: "Toby's RV Resort",                   city: 'Arcadia',           state: 'FL', lat: 27.2151, lng: -81.8579, zone: 'Southeast' },
  { id: 30, name: 'Tropical Palms RV Resort',           city: 'Kissimmee',         state: 'FL', lat: 28.2750, lng: -81.3900, zone: 'Southeast' },
  { id: 31, name: 'Winter Garden RV Resort',            city: 'Winter Garden',     state: 'FL', lat: 28.5650, lng: -81.5860, zone: 'Southeast' },
  { id: 32, name: 'Winter Quarters Pasco RV Resort',    city: 'Lutz',              state: 'FL', lat: 28.1541, lng: -82.4579, zone: 'Southeast' },
  { id: 33, name: 'Breezy Hill RV Resort',              city: 'Pompano Beach',     state: 'FL', lat: 26.2379, lng: -80.1248, zone: 'Southeast' },
  { id: 34, name: 'Bulow RV Resort',                    city: 'Flagler Beach',     state: 'FL', lat: 29.4727, lng: -81.2098, zone: 'Southeast' },
  { id: 35, name: 'Highland Woods RV Resort',           city: 'Pompano Beach',     state: 'FL', lat: 26.2200, lng: -80.1350, zone: 'Southeast' },
  { id: 36, name: 'Rose Bay RV Resort',                 city: 'Port Orange',       state: 'FL', lat: 29.1218, lng: -81.0079, zone: 'Southeast' },
  { id: 37, name: 'Space Coast RV Resort',              city: 'Rockledge',         state: 'FL', lat: 28.3260, lng: -80.7418, zone: 'Southeast' },
  { id: 38, name: 'Sunshine Holiday Daytona',           city: 'Ormond Beach',      state: 'FL', lat: 29.2858, lng: -81.0559, zone: 'Southeast' },
  { id: 39, name: 'Sunshine Holiday RV Resort',         city: 'Fort Lauderdale',   state: 'FL', lat: 26.1224, lng: -80.1373, zone: 'Southeast' },
  { id: 40, name: 'Sunshine Travel RV Resort',          city: 'Vero Beach',        state: 'FL', lat: 27.6386, lng: -80.3973, zone: 'Southeast' },
  { id: 41, name: 'Forest Lake RV & Camping Resort',    city: 'Advance',           state: 'NC', lat: 35.9293, lng: -80.4182, zone: 'Southeast' },
  { id: 42, name: 'Green Mountain Park',                city: 'Lenoir',            state: 'NC', lat: 35.9143, lng: -81.5429, zone: 'Southeast' },
  { id: 43, name: 'Lake Gaston RV & Camping Resort',    city: 'Littleton',         state: 'NC', lat: 36.4499, lng: -77.9085, zone: 'Southeast' },
  { id: 44, name: 'Carolina Landing RV Resort',         city: 'Fair Play',         state: 'SC', lat: 34.5118, lng: -83.1160, zone: 'Southeast' },
  { id: 45, name: 'The Oaks at Point South RV',         city: 'Yemassee',          state: 'SC', lat: 32.6854, lng: -80.8459, zone: 'Southeast' },
  { id: 46, name: 'Cherokee Landing Campground',        city: 'Saulsbury',         state: 'TN', lat: 35.0432, lng: -88.7954, zone: 'Southeast' },
  { id: 47, name: 'Natchez Trace RV Campground',        city: 'Hohenwald',         state: 'TN', lat: 35.5454, lng: -87.5502, zone: 'Southeast' },
  { id: 48, name: 'Bay Landing RV Campground',          city: 'Bridgeport',        state: 'TX', lat: 33.2151, lng: -97.7553, zone: 'Southeast' },
  { id: 49, name: 'Colorado River RV Campground',       city: 'Columbus',          state: 'TX', lat: 29.7049, lng: -96.5288, zone: 'Southeast' },
  { id: 50, name: 'Lake Conroe RV & Camping Resort',    city: 'Willis',            state: 'TX', lat: 30.4488, lng: -95.4747, zone: 'Southeast' },
  { id: 51, name: 'Lake Tawakoni RV Campground',        city: 'Point',             state: 'TX', lat: 32.9326, lng: -95.8763, zone: 'Southeast' },
  { id: 52, name: 'Lake Texoma RV Campground',          city: 'Gordonville',       state: 'TX', lat: 33.8404, lng: -96.7280, zone: 'Southeast' },
  { id: 53, name: 'Lake Whitney RV Campground',         city: 'Whitney',           state: 'TX', lat: 31.9527, lng: -97.3681, zone: 'Southeast' },
  { id: 54, name: 'Medina Lake RV Campground',          city: 'Lakehills',         state: 'TX', lat: 29.5691, lng: -99.0641, zone: 'Southeast' },
  { id: 55, name: 'Chesapeake Bay RV Resort',           city: 'Gloucester',        state: 'VA', lat: 37.4099, lng: -76.5252, zone: 'Southeast' },
  { id: 56, name: 'Harbor View RV & Camping Resort',    city: 'Colonial Beach',    state: 'VA', lat: 38.2551, lng: -76.9613, zone: 'Southeast' },
  { id: 57, name: 'Lynchburg RV Resort',                city: 'Gladys',            state: 'VA', lat: 37.0557, lng: -79.0749, zone: 'Southeast' },
  { id: 58, name: 'Virginia Landing RV Campground',     city: 'Quinby',            state: 'VA', lat: 37.5057, lng: -75.8327, zone: 'Southeast' },
  { id: 59, name: 'Williamsburg RV & Camping Resort',   city: 'Williamsburg',      state: 'VA', lat: 37.2707, lng: -76.7075, zone: 'Southeast' },

  // ========== NORTHWEST ZONE ==========
  { id: 60, name: 'Cultus Lake RV Resort',              city: 'Lindell Beach',     state: 'BC', lat: 49.0630, lng: -121.9580, zone: 'Northwest' },
  { id: 61, name: 'Birch Bay RV Campground',            city: 'Blaine',            state: 'WA', lat: 48.9176, lng: -122.7282, zone: 'Northwest' },
  { id: 62, name: 'Chehalis RV & Camping Resort',       city: 'Chehalis',          state: 'WA', lat: 46.6626, lng: -122.9635, zone: 'Northwest' },
  { id: 63, name: 'Crescent Bar RV Resort',             city: 'Quincy',            state: 'WA', lat: 47.1232, lng: -119.9032, zone: 'Northwest' },
  { id: 64, name: 'Grandy Creek RV Campground',         city: 'Concrete',          state: 'WA', lat: 48.5370, lng: -121.7488, zone: 'Northwest' },
  { id: 65, name: 'La Conner RV & Camping Resort',      city: 'La Conner',         state: 'WA', lat: 48.3929, lng: -122.4998, zone: 'Northwest' },
  { id: 66, name: 'Leavenworth RV Campground',          city: 'Leavenworth',       state: 'WA', lat: 47.5960, lng: -120.6615, zone: 'Northwest' },
  { id: 67, name: 'Little Diamond RV Campground',       city: 'Newport',           state: 'WA', lat: 48.1846, lng: -117.0441, zone: 'Northwest' },
  { id: 68, name: 'Long Beach RV & Camping Resort',     city: 'Seaview',           state: 'WA', lat: 46.3307, lng: -124.0474, zone: 'Northwest' },
  { id: 69, name: 'Mount Vernon RV Campground',         city: 'Bow',               state: 'WA', lat: 48.5463, lng: -122.4149, zone: 'Northwest' },
  { id: 70, name: 'Oceana RV & Camping Resort',         city: 'Ocean City',        state: 'WA', lat: 47.0340, lng: -124.1618, zone: 'Northwest' },
  { id: 71, name: 'Paradise RV Campground',             city: 'Silver Creek',      state: 'WA', lat: 46.5340, lng: -122.1982, zone: 'Northwest' },
  { id: 72, name: 'Thunderbird RV & Camping Resort',    city: 'Monroe',            state: 'WA', lat: 47.8554, lng: -121.9718, zone: 'Northwest' },
  { id: 73, name: 'Bend-Sunriver RV Campground',        city: 'Bend',              state: 'OR', lat: 43.8099, lng: -121.4424, zone: 'Northwest' },
  { id: 74, name: 'Pacific City RV & Camping Resort',   city: 'Cloverdale',        state: 'OR', lat: 45.2015, lng: -123.9629, zone: 'Northwest' },
  { id: 75, name: 'Seaside RV Resort',                  city: 'Seaside',           state: 'OR', lat: 45.9932, lng: -123.9229, zone: 'Northwest' },
  { id: 76, name: 'South Jetty RV & Camping Resort',    city: 'Florence',          state: 'OR', lat: 43.9629, lng: -124.1099, zone: 'Northwest' },
  { id: 77, name: 'Whalers Rest RV & Camping Resort',   city: 'South Beach',       state: 'OR', lat: 44.6193, lng: -124.0499, zone: 'Northwest' },

  // ========== SOUTHWEST ZONE ==========
  { id: 78, name: 'Idyllwild RV Resort',                city: 'Idyllwild',         state: 'CA', lat: 33.7418, lng: -116.7185, zone: 'Southwest' },
  { id: 79, name: 'Lake Minden RV Resort',              city: 'Nicolaus',          state: 'CA', lat: 38.8910, lng: -121.5752, zone: 'Southwest' },
  { id: 80, name: 'Lake of the Springs RV Resort',      city: 'Oregon House',      state: 'CA', lat: 39.3571, lng: -121.2124, zone: 'Southwest' },
  { id: 81, name: 'Morgan Hill RV Resort',              city: 'Morgan Hill',       state: 'CA', lat: 37.1305, lng: -121.6543, zone: 'Southwest' },
  { id: 82, name: 'Oakzanita Springs RV Campground',    city: 'Descanso',          state: 'CA', lat: 32.8543, lng: -116.6082, zone: 'Southwest' },
  { id: 83, name: 'Palm Springs RV Resort',             city: 'Palm Desert',       state: 'CA', lat: 33.7219, lng: -116.3743, zone: 'Southwest' },
  { id: 84, name: 'Pio Pico RV Resort & Campground',    city: 'Jamul',             state: 'CA', lat: 32.7235, lng: -116.8788, zone: 'Southwest' },
  { id: 85, name: 'Ponderosa RV Resort',                city: 'Lotus',             state: 'CA', lat: 38.8382, lng: -120.9118, zone: 'Southwest' },
  { id: 86, name: 'Rancho Oso RV & Camping Resort',     city: 'Santa Barbara',     state: 'CA', lat: 34.5707, lng: -119.8816, zone: 'Southwest' },
  { id: 87, name: 'Russian River RV Campground',        city: 'Cloverdale',        state: 'CA', lat: 38.8024, lng: -123.0182, zone: 'Southwest' },
  { id: 88, name: 'San Benito RV & Camping Resort',     city: 'Paicines',          state: 'CA', lat: 36.7232, lng: -121.2674, zone: 'Southwest' },
  { id: 89, name: 'Snowflower RV Resort',               city: 'Emigrant Gap',      state: 'CA', lat: 39.3029, lng: -120.6688, zone: 'Southwest' },
  { id: 90, name: 'Soledad Canyon RV & Camping Resort', city: 'Acton',             state: 'CA', lat: 34.4688, lng: -118.1935, zone: 'Southwest' },
  { id: 91, name: 'Turtle Beach RV Resort',             city: 'Manteca',           state: 'CA', lat: 37.7963, lng: -121.2160, zone: 'Southwest' },
  { id: 92, name: 'Wilderness Lakes RV Resort',         city: 'Menifee',           state: 'CA', lat: 33.6907, lng: -117.1849, zone: 'Southwest' },
  { id: 93, name: 'Yosemite Lakes RV Resort',           city: 'Groveland',         state: 'CA', lat: 37.8524, lng: -120.2299, zone: 'Southwest' },
  { id: 94, name: 'Thousand Trails Las Vegas RV Resort',city: 'Las Vegas',         state: 'NV', lat: 36.1699, lng: -115.1398, zone: 'Southwest' },
  { id: 95, name: 'Verde Valley RV & Camping Resort',   city: 'Cottonwood',        state: 'AZ', lat: 34.7395, lng: -112.0107, zone: 'Southwest' },
  { id: 96, name: 'Mesa Spirit RV Resort',              city: 'Mesa',              state: 'AZ', lat: 33.4152, lng: -111.8315, zone: 'Southwest' },

  // ========== MIDWEST ZONE ==========
  { id: 97,  name: 'Pine Country RV & Camping Resort',  city: 'Belvidere',         state: 'IL', lat: 42.2594, lng: -88.8443, zone: 'Midwest' },
  { id: 98,  name: 'Horseshoe Lakes RV Campground',     city: 'Clinton',           state: 'IN', lat: 39.6617, lng: -87.3975, zone: 'Midwest' },
  { id: 99,  name: 'Indian Lakes RV Campground',        city: 'Batesville',        state: 'IN', lat: 39.2999, lng: -85.2216, zone: 'Midwest' },
  { id: 100, name: 'Kenisee Lake RV Campground',        city: 'Jefferson',         state: 'OH', lat: 41.7393, lng: -80.7695, zone: 'Midwest' },
  { id: 101, name: 'Wilmington RV Resort',              city: 'Wilmington',        state: 'OH', lat: 39.4451, lng: -83.8277, zone: 'Midwest' },
  { id: 102, name: 'Diamond Caverns RV Resort & Golf',  city: 'Park City',         state: 'KY', lat: 37.2701, lng: -85.9271, zone: 'Midwest' },
  { id: 103, name: 'Bear Cave RV Campground',           city: 'Buchanan',          state: 'MI', lat: 41.8307, lng: -86.3596, zone: 'Midwest' },
  { id: 104, name: 'St Clair RV Resort',                city: 'Saint Clair',       state: 'MI', lat: 42.8193, lng: -82.4877, zone: 'Midwest' },
];

// ============================================================
// Zone Color Map
// ============================================================
const ZONE_COLORS = {
  Northeast: '#4361ee',
  Southeast: '#e63946',
  Northwest: '#06d6a0',
  Southwest: '#fb8500',
  Midwest:   '#8338ec',
};

// ============================================================
// App State
// ============================================================
let map;
let clusterGroup;
const markers = {};   // id → L.marker
let activeZone  = 'all';
let activeState = 'all';
let searchQuery = '';
let activeId    = null;

// ============================================================
// Marker icon factory
// ============================================================
function makeIcon(zone) {
  const color = ZONE_COLORS[zone] || '#555';
  return L.divIcon({
    className: '',
    html: `<div class="marker-pin" style="background:${color}"></div>`,
    iconSize:   [22, 22],
    iconAnchor: [11, 22],
    popupAnchor:[0, -26],
  });
}

// ============================================================
// Popup HTML
// ============================================================
function popupHTML(c) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${c.lat},${c.lng}`;
  const ttUrl   = `https://thousandtrails.com/explore-campgrounds/?search=${encodeURIComponent(c.name)}`;
  return `
    <div class="popup-card">
      <div class="popup-header">
        <div class="popup-zone">${c.zone} Zone</div>
        <div class="popup-name">${escHtml(c.name)}</div>
      </div>
      <div class="popup-body">
        <div class="popup-location">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          ${escHtml(c.city)}, ${escHtml(c.state)}
        </div>
        <div class="popup-actions">
          <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" class="popup-btn popup-btn-primary">
            Directions
          </a>
          <a href="${ttUrl}" target="_blank" rel="noopener noreferrer" class="popup-btn popup-btn-secondary">
            Website
          </a>
        </div>
      </div>
    </div>`;
}

function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ============================================================
// Map init
// ============================================================
function initMap() {
  map = L.map('map', {
    center: [39.5, -97],
    zoom: 4,
    zoomControl: false,
    attributionControl: true,
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(map);

  L.control.zoom({ position: 'bottomright' }).addTo(map);

  clusterGroup = L.markerClusterGroup({
    showCoverageOnHover: false,
    maxClusterRadius: 48,
    spiderfyOnMaxZoom: true,
    disableClusteringAtZoom: 11,
  });

  CAMPGROUNDS.forEach(c => {
    const m = L.marker([c.lat, c.lng], { icon: makeIcon(c.zone) });
    m.bindPopup(popupHTML(c), { maxWidth: 300, className: 'tt-popup' });
    m.campId = c.id;
    m.on('click', () => {
      highlightItem(c.id);
    });
    markers[c.id] = m;
    clusterGroup.addLayer(m);
  });

  map.addLayer(clusterGroup);
}

// ============================================================
// State select population
// ============================================================
function buildStateSelect() {
  const sel = document.getElementById('stateSelect');
  const states = [...new Set(CAMPGROUNDS.map(c => c.state))].sort();
  states.forEach(s => {
    const o = document.createElement('option');
    o.value = s;
    o.textContent = s;
    sel.appendChild(o);
  });
}

// ============================================================
// Filtering
// ============================================================
function getFiltered() {
  const q = searchQuery.toLowerCase().trim();
  return CAMPGROUNDS.filter(c => {
    if (activeZone !== 'all' && c.zone !== activeZone) return false;
    if (activeState !== 'all' && c.state !== activeState) return false;
    if (q) {
      return (
        c.name.toLowerCase().includes(q) ||
        c.city.toLowerCase().includes(q) ||
        c.state.toLowerCase().includes(q) ||
        c.zone.toLowerCase().includes(q)
      );
    }
    return true;
  });
}

// ============================================================
// Render list + sync markers
// ============================================================
function render() {
  const filtered = getFiltered();
  const list  = document.getElementById('campgroundList');
  const count = document.getElementById('listCount');
  const badge = document.getElementById('countBadge');

  const n = filtered.length;
  count.textContent = `${n} campground${n !== 1 ? 's' : ''}`;
  badge.textContent = `${n} park${n !== 1 ? 's' : ''}`;

  // Sync map markers
  clusterGroup.clearLayers();
  const visibleIds = new Set(filtered.map(c => c.id));
  filtered.forEach(c => clusterGroup.addLayer(markers[c.id]));

  // Rebuild list
  list.innerHTML = '';

  if (n === 0) {
    list.innerHTML = `
      <li class="empty-state">
        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <p>No campgrounds found</p>
      </li>`;
    return;
  }

  const frag = document.createDocumentFragment();
  filtered.forEach(c => {
    const li = document.createElement('li');
    li.className = 'campground-item' + (c.id === activeId ? ' active' : '');
    li.dataset.id = c.id;
    li.setAttribute('role', 'button');
    li.setAttribute('tabindex', '0');
    li.setAttribute('aria-label', `${c.name}, ${c.city}, ${c.state}`);
    li.innerHTML = `
      <span class="item-dot" style="background:${ZONE_COLORS[c.zone]}"></span>
      <div class="item-info">
        <div class="item-name">${escHtml(c.name)}</div>
        <div class="item-location">${escHtml(c.city)}, ${escHtml(c.state)}</div>
      </div>`;

    const activate = () => {
      highlightItem(c.id);
      flyTo(c.id);
      if (window.innerWidth <= 768) closeSidebar();
    };

    li.addEventListener('click', activate);
    li.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') activate(); });
    frag.appendChild(li);
  });
  list.appendChild(frag);
}

// ============================================================
// Highlight list item
// ============================================================
function highlightItem(id) {
  activeId = id;
  document.querySelectorAll('.campground-item').forEach(el => {
    el.classList.toggle('active', +el.dataset.id === id);
  });
  const el = document.querySelector(`.campground-item[data-id="${id}"]`);
  if (el) el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}

// ============================================================
// Fly to marker + open popup
// ============================================================
function flyTo(id) {
  const c = CAMPGROUNDS.find(x => x.id === id);
  if (!c) return;
  map.flyTo([c.lat, c.lng], 13, { duration: 1.1 });
  setTimeout(() => {
    const m = markers[id];
    if (m) clusterGroup.zoomToShowLayer(m, () => m.openPopup());
  }, 1200);
}

// ============================================================
// Fit all visible
// ============================================================
function fitAll() {
  const f = getFiltered();
  if (!f.length) return;
  const bounds = L.latLngBounds(f.map(c => [c.lat, c.lng]));
  map.fitBounds(bounds, { padding: [40, 40], maxZoom: 10 });
}

// ============================================================
// Sidebar
// ============================================================
function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebarOverlay').classList.add('active');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('active');
}

function setupSidebar() {
  document.getElementById('sidebarToggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.contains('open') ? closeSidebar() : openSidebar();
  });
  document.getElementById('sidebarOverlay').addEventListener('click', closeSidebar);
}

// ============================================================
// Zone filter pills
// ============================================================
function setupZonePills() {
  document.getElementById('zonePills').addEventListener('click', e => {
    const pill = e.target.closest('.pill');
    if (!pill) return;
    document.querySelectorAll('#zonePills .pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    activeZone = pill.dataset.zone;
    render();
  });
}

// ============================================================
// State select
// ============================================================
function setupStateSelect() {
  document.getElementById('stateSelect').addEventListener('change', e => {
    activeState = e.target.value;
    render();
  });
}

// ============================================================
// Search
// ============================================================
function setupSearch() {
  const input   = document.getElementById('searchInput');
  const clearBtn = document.getElementById('searchClear');

  input.addEventListener('input', () => {
    searchQuery = input.value;
    clearBtn.classList.toggle('visible', searchQuery.length > 0);
    render();
  });

  clearBtn.addEventListener('click', () => {
    searchQuery = '';
    input.value = '';
    clearBtn.classList.remove('visible');
    render();
    input.focus();
  });
}

// ============================================================
// Reset
// ============================================================
function setupReset() {
  document.getElementById('resetBtn').addEventListener('click', () => {
    activeZone  = 'all';
    activeState = 'all';
    searchQuery = '';
    activeId    = null;

    document.getElementById('searchInput').value = '';
    document.getElementById('searchClear').classList.remove('visible');
    document.getElementById('stateSelect').value = 'all';

    document.querySelectorAll('#zonePills .pill').forEach((p, i) => {
      p.classList.toggle('active', i === 0);
    });

    render();
    fitAll();
  });
}

// ============================================================
// Map controls
// ============================================================
function setupMapControls() {
  document.getElementById('fitAllBtn').addEventListener('click', fitAll);

  document.getElementById('locateBtn').addEventListener('click', () => {
    map.locate({ setView: true, maxZoom: 10 });
  });

  map.on('locationerror', () => {
    alert('Could not get your location. Please check browser permissions.');
  });
}

// ============================================================
// Service Worker registration
// ============================================================
function registerSW() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(err => {
        console.warn('SW registration failed:', err);
      });
    });
  }
}

// ============================================================
// Boot
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initMap();
  buildStateSelect();
  setupSidebar();
  setupZonePills();
  setupStateSelect();
  setupSearch();
  setupReset();
  setupMapControls();
  render();
  registerSW();
});
