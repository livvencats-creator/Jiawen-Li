document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('uploadForm');
    const coverPreview = document.getElementById('coverPreview');
    const messageDiv = document.getElementById('message');
    let coverImageData = null;

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
        allMusicData.push({ id: getNextId(allMusicData), title, artist, genres, scenes, reason, cover: coverImageData || 'assets/cover1.jpg', contributor: { major, occupation }, link: playbackLink || 'https://open.spotify.com/' });

        if (saveMusicData(allMusicData)) {
            showMessage(messageDiv, 'Music uploaded successfully! Redirecting...', 'success');
            form.reset();
            coverPreview.innerHTML = '';
            coverImageData = null;
            document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
            setTimeout(() => window.location.href = 'index.html', 1500);
        } else {
            showMessage(messageDiv, 'Error saving data. Please try again.', 'error');
        }
    });
});

