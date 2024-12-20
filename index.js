<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gambar Klik ke Halaman Baru</title>
    <style>
        .clickable-img {
            cursor: pointer;
            max-width: 100%;
            height: auto;
        }
    </style>
</head>
<body>
    <div>
        <img 
            src="gambar.jpg" 
            alt="Klik untuk membuka halaman baru" 
            class="clickable-img" 
            id="myImage"
        >
    </div>

    <script>
        // JavaScript untuk membuat gambar membuka halaman baru saat diklik
        document.getElementById('myImage').addEventListener('click', function() {
            window.open('https://example.com', '_blank'); // Ganti URL dengan tujuan halaman baru
        });
    </script>
</body>
</html>
