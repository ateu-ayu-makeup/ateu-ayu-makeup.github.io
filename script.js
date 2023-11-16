// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Klik di luar elemen
const hm = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }
});

// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display = 'none';
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }
};
// kirim pesanbke wa
function sendToWhatsapp(){

	let number = "+6289515549484";


	let name = document.getElementById('name').value;
	let tanggal = document.getElementById('email').value;
	let alamat = document.getElementById('alamat').value;
	let message = document.getElementById('message').value;

	var url = "https://wa.me/" + number + "?text="
	+ "Name : " +name+ "%0a"
	+ "Tanggal : " +tanggal+ "%0a"
	+ "Alamat : " +alamat+ "%0a"
	+ "Message : " +message+ "%0a%0a";

	window.open(url, '_blank').focus();
}