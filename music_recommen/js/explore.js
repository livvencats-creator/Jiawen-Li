function filterAndDisplayMusic() {
  if (typeof musicData === 'undefined') return;
  const grid = document.querySelector(".grid");
  if (!grid) return;

  const scene = localStorage.getItem("scene");
  const genre = localStorage.getItem("genre");
  let result = Array.isArray(musicData) ? musicData : [];
  
  if (scene?.trim()) result = result.filter(m => m?.scenes?.includes(scene));
  if (genre?.trim()) result = result.filter(m => m?.genres?.includes(genre));

  // Randomly shuffle the results
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  grid.innerHTML = '';
  if (!result.length) {
    const filterText = [scene ? `Scene: ${scene}` : '', genre ? `Genre: ${genre}` : ''].filter(Boolean).join(', ');
    grid.innerHTML = `<div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-light, #666); font-size: 16px; letter-spacing: 0.05em;">
      <p style="margin-bottom: 20px;">No music found matching your selections${filterText ? ` (${filterText})` : ''}.</p>
      <a href="scene.html" style="text-decoration: none; border-bottom: 1px solid var(--border, #e0e0e0); padding-bottom: 2px; color: var(--text-dark, #1a1a1a);">Try different selections</a>
    </div>`;
    return;
  }

  result.forEach(m => {
    if (!m?.id) return;
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<img src="${m.cover || 'assets/cover1.jpg'}" alt="${m.title || 'Music cover'}" onerror="this.src='assets/cover1.jpg'" /><p>${m.title || 'Untitled'}</p>`;
    card.onclick = () => { localStorage.setItem("currentId", m.id); location.href = "detail.html"; };
    grid.appendChild(card);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', filterAndDisplayMusic);
} else {
  setTimeout(filterAndDisplayMusic, 10);
}
