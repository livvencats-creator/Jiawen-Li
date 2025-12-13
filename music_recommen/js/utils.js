// Utility functions
function getMusicData() {
  const stored = localStorage.getItem('musicData');
  if (stored) {
    try { return JSON.parse(stored); } catch (e) { console.error('Error parsing music data:', e); }
  }
  return typeof musicData !== 'undefined' ? musicData : [];
}

function saveMusicData(data) {
  try {
    localStorage.setItem('musicData', JSON.stringify(data));
    if (typeof musicData !== 'undefined') musicData = data;
    return true;
  } catch (e) {
    console.error('Error saving music data:', e);
    return false;
  }
}

function getCheckedValues(name) {
  return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(cb => cb.value);
}

function showMessage(element, text, type) {
  if (!element) return;
  element.textContent = text;
  element.className = `message ${type}`;
  element.style.display = 'block';
  if (type === 'success') setTimeout(() => element.style.display = 'none', 3000);
}

function getNextId(data) {
  return data.length > 0 ? Math.max(...data.map(m => m.id)) + 1 : 1;
}

function handleImagePreview(input, preview, callback) {
  input.addEventListener('change', e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        const data = e.target.result;
        preview.innerHTML = `<img src="${data}" alt="Cover preview" class="preview-image">`;
        if (callback) callback(data);
      };
      reader.readAsDataURL(file);
    }
  });
}

