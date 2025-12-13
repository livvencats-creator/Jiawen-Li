const music = musicData.find(m => m.id === Number(localStorage.getItem("currentId")));
if (music) {
    const updates = {
        coverDisplay: () => { const el = document.getElementById('coverDisplay'); if (el) el.innerHTML = `<img src="${music.cover}" alt="${music.title}" class="detail-cover" />`; },
        songInfo: () => { const el = document.getElementById('songInfo'); if (el) el.innerText = `${music.title} — ${music.artist}`; },
        reason: () => { const el = document.getElementById('reason'); if (el) el.innerText = music.reason || 'No reason provided.'; },
        scenes: () => { const el = document.getElementById('scenes'); if (el) el.innerText = music.scenes?.join(', ') || 'N/A'; },
        contributor: () => { const el = document.getElementById('contributor'); if (el && music.contributor) el.innerText = music.contributor.major && music.contributor.occupation ? `${music.contributor.major} / ${music.contributor.occupation}` : music.contributor.major || music.contributor.occupation || 'N/A'; },
        playbackLink: () => { const link = document.getElementById('playbackLink')?.querySelector('a'); if (link && music.link) { link.href = music.link; link.innerText = music.link; } }
    };
    Object.values(updates).forEach(fn => fn());
}
