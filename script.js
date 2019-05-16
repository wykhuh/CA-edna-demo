(function(){

  var mymap = L.map('map').setView([37, -120], 6);

  L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(mymap);

  MyMap.samples.forEach((sample) => {
    let popup = '';
    for(let key in sample) {
      popup += `<b>${key}:</b> ${sample[key]}<br>`
    }

    L.marker([sample.latitude, sample.longitude])
      .bindPopup(popup)
      .addTo(mymap);
  })

})()


