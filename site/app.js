const el = id => document.getElementById(id);
const viewport = el('viewport');
let floor = floors[0];
let active = null;
let scale = 1;

function normalize(value) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function list(container, entries) {
  container.replaceChildren();
  for (const place of entries) {
    const button = document.createElement('button');
    const level = floors.find(item => item.id === place.floor);
    button.textContent = [place.code, place.name, level.name].filter(Boolean).join(' · ');
    button.onclick = () => select(place);
    container.append(button);
  }
}

function renderFloor() {
  el('floor').textContent = floor.name;
  el('map').src = floor.map;
  el('map').alt = floor.name + ' schematic. All marked places are listed below the map.';
  el('drawing').style.aspectRatio = floor.width + '/' + floor.height;
  list(el('directory'), places.filter(place => place.floor === floor.id));
}

function resize(next, target) {
  const oldWidth = el('drawing').offsetWidth || viewport.clientWidth;
  const cx = target ? target.x / floor.width : (viewport.scrollLeft + viewport.clientWidth / 2) / oldWidth;
  const cy = target ? target.y / floor.height : (viewport.scrollTop + viewport.clientHeight / 2) / (oldWidth * floor.height / floor.width);
  scale = Math.max(1, Math.min(6, next));
  const width = viewport.clientWidth * scale;
  el('drawing').style.width = width + 'px';
  viewport.scrollTo(cx * width - viewport.clientWidth / 2, cy * width * floor.height / floor.width - viewport.clientHeight / 2);
  el('out').disabled = scale === 1;
  el('zoom').disabled = scale === 6;
}

function select(place) {
  active = place;
  floor = floors.find(item => item.id === place.floor);
  renderFloor();
  el('results').replaceChildren();
  el('search').value = '';
  el('selected').textContent = [place.code, place.name].filter(Boolean).join(' · ');
  el('share').hidden = false;
  el('share').textContent = 'Copy link';
  el('pin').hidden = false;
  el('pin').style.left = 100 * place.x / floor.width + '%';
  el('pin').style.top = 100 * place.y / floor.height + '%';
  const url = new URL(location.href);
  url.searchParams.set('room', place.id);
  history.replaceState(null, '', url);
  resize(Math.max(1, 1000 / viewport.clientWidth), place);
  document.activeElement.blur();
  el('floor').scrollIntoView({block:'nearest'});
}

el('search').oninput = event => {
  const query = normalize(event.target.value);
  const matches = query ? places.filter(p => [p.code,p.name].some(s => normalize(s).includes(query))) : [];
  list(el('results'), matches);
  if (query && !matches.length) el('results').textContent = 'No matching place. Try a shorter name or code.';
};

el('zoom').onclick = () => resize(scale * 1.5, active);
el('out').onclick = () => resize(scale / 1.5, active);
el('fit').onclick = () => resize(1);
el('share').onclick = async () => {
  try {
    await navigator.clipboard.writeText(location.href);
    el('share').textContent = 'Copied';
  } catch {
    window.prompt('Copy this room link', location.href);
  }
};
window.addEventListener('resize', () => resize(scale, active));

renderFloor();
resize(1);
const requested = new URL(location.href).searchParams.get('room');
const initial = places.find(place => place.id === requested);
if (initial) select(initial);
else if (requested) {
  el('selected').textContent = 'Unknown room link. Search for your room above.';
}
