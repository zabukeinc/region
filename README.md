# region


<h3>Instalation</h3>
Run MySQL client
<br>
<ul>
  <li>npm install</li>
  <li>npm run build</li>
  <li>npx sequelize-cli db:create</li>
  <li>Import region.sql to your local database "region"</li>
  <li>npm run dev</li>
</ul>


<h3>End Point</h3>

<b>Get Provinsi</b> <br>
http://localhost:3000/api/provinsi
<br>
<b>Get Kota</b><br>
http://localhost:3000/api/kota/:provinsi_id
<br>
<b>Get Kecamatan</b><br>
http://localhost:3000/api/kecamatan/:kabkot_id
<br>
<b>Get Kelurahan</b><br>
http://localhost:3000/api/kelurahan/:kecamatan_id
