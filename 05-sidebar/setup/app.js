const sidebarToggleBtn = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');

function showSidebar() {
  sidebar.classList.add('show-sidebar');
};

function hideSidebar() {
  sidebar.classList.remove('show-sidebar');
};

sidebarToggleBtn.addEventListener('click', showSidebar);
closeBtn.addEventListener('click', hideSidebar);
