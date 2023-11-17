// kirim pesanbke wa
function sendToWhatsapp(){

	let number = "+6285780464535";
	
	let name = document.getElementById('name').value;
	let tanggal = document.getElementById('email').value;
	let alamat = document.getElementById('alamat').value;
	let pesann = document.getElementById('pesann').value;

	var url = "https://wa.me/" + number + "?text="
	+ "Nama : " +name+ "%0a"
	+ "Tanggal : " +tanggal+ "%0a"
	+ "Alamat : " +alamat+ "%0a"
	+ "Makeup untuk acara : " +pesann+ "%0a%0a";

	window.open(url, '_blank').focus();
}