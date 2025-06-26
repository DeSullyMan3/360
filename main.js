async function check() {
  const password = document.getElementById('pw').value;
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  const correctHash = 'f15f1c7b9ce93806b400fc20c273c99bc18201c16b85c00f7b93eb5b594e4a76'; // SHA-256 of "appelsap"
  if (hashHex === correctHash) {
    window.location.href = "menu.html";
  } else {
    document.getElementById("error").style.display = "block";
  }
}
