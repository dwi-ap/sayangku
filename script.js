document.getElementById('birthdayButton').addEventListener('click', function() {
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = "Selamat tahun sayangku semoga panjang umur sehat selalu dan di lancarkan rezekinya semoga sukses dan apa yang di inginkan semoga tercapai Aamiinn";
    messageDiv.classList.remove('hidden');
    this.disabled = true; // Disable button after click
    this.innerHTML = "I loveyou sayanggg!";
    this.style.backgroundColor = "#ccc"; // Change button color
});
