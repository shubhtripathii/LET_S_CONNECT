let map;

async function initMap() {

  const position = { lat: 22.74, lng: 75.87 };
  const position1 = { lat: 22.75, lng: 75.89 };
  const position2 = { lat: 22.75, lng: 75.91 };
  const position3 = { lat: 22.73, lng: 75.88 };


  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");


  map = new Map(document.getElementById("map"), {
    zoom: 14,
    center: position,
    center: position1,
    center: position2,
    center: position3,
    mapId: "DEMO_MAP_ID",
    
  });

  
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Person C",
  });
  
  const marker1 = new AdvancedMarkerElement({
    map: map,
    position: position1,
    title: "Person A",
  }); 
  
  const marker2 = new AdvancedMarkerElement({
    map: map,
    position: position2,
    title: "Person B",
  });
  
  const marker3 = new AdvancedMarkerElement({
    map: map,
    position: position3,
    title: "Person D",
    animation: google.maps.Animation.BOUNCE,
  });
   
}

initMap();
