document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.createElement('div');
  overlay.id = 'membership-overlay';
  overlay.className = 'fixed bottom-0 left-0 right-0 bg-teal-700 text-white text-sm px-4 py-2 flex flex-wrap items-center justify-between space-y-2 md:space-y-0 z-50';
  overlay.innerHTML = `
    <span id="member-info" class="mr-4">Not logged in</span>
    <nav class="flex space-x-4 flex-wrap text-white underline">
      <a href="https://studio-hub-eight.vercel.app/" target="_blank">Studio Hub</a>
      <a href="https://studio-hub-eight.vercel.app/resources" target="_blank">Resources</a>
      <a href="https://studio-hub-eight.vercel.app/events" target="_blank">Events</a>
      <a href="https://studio-hub-eight.vercel.app/messages" target="_blank">Messages</a>
      <a href="https://studio-hub-eight.vercel.app/bulletin" target="_blank">Bulletin</a>
    </nav>
    <button id="member-login-btn" class="bg-white text-teal-700 px-2 py-1 rounded">Login</button>
  `;
  document.body.appendChild(overlay);
  const infoEl = document.getElementById('member-info');
  const btn = document.getElementById('member-login-btn');
  function update() {
    const data = JSON.parse(localStorage.getItem('memberInfo') || '{}');
    if (data.name) {
      infoEl.textContent = `Logged in as ${data.name} (${data.id})`;
      btn.textContent = 'Logout';
    } else {
      infoEl.textContent = 'Not logged in';
      btn.textContent = 'Login';
    }
  }
  btn.addEventListener('click', () => {
    const data = JSON.parse(localStorage.getItem('memberInfo') || '{}');
    if (data.name) {
      localStorage.removeItem('memberInfo');
      update();
    } else {
      const name = prompt('Enter your name');
      if (!name) return;
      const id = prompt('Enter membership ID');
      if (!id) return;
      localStorage.setItem('memberInfo', JSON.stringify({ name, id }));
      update();
    }
  });
  update();
});
