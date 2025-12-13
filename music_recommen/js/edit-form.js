document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('editForm');
    const coverPreview = document.getElementById('coverPreview');
    const messageDiv = document.getElementById('message');
    const editId = Number(localStorage.getItem('editId'));
    const musicToEdit = editId ? musicData.find(m => m.id === editId) : null;
    
    if (!editId || !musicToEdit) {
        showMessage(messageDiv, 'No music selected for editing. Redirecting...', 'error');
        setTimeout(() => window.location.href = 'edit.html', 2000);
        return;
    }

    // Pre-fill form
    const fieldMap = { songTitle: musicToEdit.title, artist: musicToEdit.artist, reason: musicToEdit.reason, major: musicToEdit.contributor?.major, occupation: musicToEdit.contributor?.occupation, playbackLink: musicToEdit.link };
    Object.entries(fieldMap).forEach(([id, val]) => document.getElementById(id).value = val || '');
    if (musicToEdit.cover) coverPreview.innerHTML = `<img src="${musicToEdit.cover}" alt="Cover preview" class="preview-image">`;
    [musicToEdit.genres, musicToEdit.scenes].forEach((arr, i) => {
        if (Array.isArray(arr)) arr.forEach(v => {
            const cb = document.querySelector(`input[name="${i ? 'scene' : 'genre'}"][value="${v}"]`);
            if (cb) cb.checked = true;
        });
    });

    let coverImageData = musicToEdit.cover || null;
    handleImagePreview(document.getElementById('coverInput'), coverPreview, data => coverImageData = data);

    form.addEventListener('submit', e => {
        e.preventDefault();
        const fields = ['songTitle', 'artist', 'reason', 'major', 'occupation', 'playbackLink'].map(id => document.getElementById(id).value.trim());
        const [title, artist, reason, major, occupation, playbackLink] = fields;
        const genres = getCheckedValues('genre');
        const scenes = getCheckedValues('scene');

        if (!title || !artist || !genres.length || !scenes.length || !reason || !major || !occupation) {
            showMessage(messageDiv, 'Please fill in all required fields and select at least one genre and scenario.', 'error');
            return;
        }

        const allMusicData = getMusicData();
        const index = allMusicData.findIndex(m => m.id === editId);
        if (index === -1) {
            showMessage(messageDiv, 'Music not found in data. Please try again.', 'error');
            return;
        }

        allMusicData[index] = { id: editId, title, artist, genres, scenes, reason, cover: coverImageData || musicToEdit.cover || 'assets/cover1.jpg', contributor: { major, occupation }, link: playbackLink || 'https://open.spotify.com/' };

        if (saveMusicData(allMusicData)) {
            showMessage(messageDiv, 'Music updated successfully! Redirecting...', 'success');
            setTimeout(() => window.location.href = 'edit.html', 1500);
        } else {
            showMessage(messageDiv, 'Error saving data. Please try again.', 'error');
        }
    });
});

