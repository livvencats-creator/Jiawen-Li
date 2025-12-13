function loadMusicList() {
    if (typeof musicData === 'undefined') return;
    const musicList = document.getElementById('musicList');
    if (!musicList) return;

    const uploadedMusic = getMusicData().filter(m => m && m.id > 2);
    musicList.innerHTML = '';

    if (!uploadedMusic.length) {
        musicList.innerHTML = `<div class="section" style="text-align: center; padding: 60px 20px;">
            <p style="color: var(--text-light, #666); font-size: 16px; letter-spacing: 0.05em; margin-bottom: 20px;">No uploaded music found.</p>
            <a href="upload.html" style="text-decoration: none; border-bottom: 1px solid var(--border, #e0e0e0); padding-bottom: 2px; color: var(--text-dark, #1a1a1a);">Upload music to get started</a>
        </div>`;
        return;
    }

    uploadedMusic.forEach(music => {
        const item = document.createElement('div');
        item.className = 'edit-item';
        const coverImg = document.createElement('img');
        coverImg.src = music.cover || 'assets/cover1.jpg';
        coverImg.alt = music.title || 'Cover';
        coverImg.onerror = () => coverImg.src = 'assets/cover1.jpg';
        const info = document.createElement('div');
        info.style.flex = '1';
        info.innerHTML = `<h3>${music.title || 'Untitled'}</h3><p>${music.artist || 'Unknown Artist'}</p><p>${music.genres?.join(', ') || 'No genres'} • ${music.scenes?.join(', ') || 'No scenes'}</p>`;
        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'edit-item-buttons';
        ['EDIT', 'DELETE'].forEach((text, i) => {
            const btn = document.createElement('span');
            btn.textContent = text;
            btn.className = i ? 'delete-btn' : 'edit-btn';
            btn.onclick = e => {
                e.stopPropagation();
                if (i) deleteMusic(music.id);
                else { localStorage.setItem('editId', music.id); window.location.href = 'edit-form.html'; }
            };
            buttonsContainer.appendChild(btn);
        });
        item.appendChild(coverImg);
        item.appendChild(info);
        item.appendChild(buttonsContainer);
        item.onclick = e => { if (!e.target.closest('.edit-item-buttons')) { localStorage.setItem('editId', music.id); window.location.href = 'edit-form.html'; } };
        musicList.appendChild(item);
    });
}

function deleteMusic(musicId) {
    if (!confirm('Are you sure you want to delete this music? This action cannot be undone.')) return;
    const allMusicData = getMusicData().filter(m => m.id !== musicId);
    if (saveMusicData(allMusicData)) {
        if (typeof musicData !== 'undefined') musicData = allMusicData;
        loadMusicList();
    } else {
        alert('Error deleting music. Please try again.');
    }
}

document.addEventListener('DOMContentLoaded', loadMusicList);

