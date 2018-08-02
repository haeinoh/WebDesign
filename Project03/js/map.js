$(function(){
  var LocsA = [
    {
        lat: 37.579617,
        lon: 126.977041,
        title: '[A] Gyeongbokgung Palace',
        html: '161 Sajik-ro, Sejongno, Jongno-gu',
        zoom: 15,
        icon: 'https://maps.google.com/mapfiles/markerA.png',
        animation: google.maps.Animation.DROP
    },
    {
        lat: 37.551169,
        lon: 126.988227,
        title: '[B] N Seoul Tower',
        html: '105 Namsangongwon-gil, Yongsan 2ga-dong, Yongsan-gu',
        zoom: 15,
        icon: 'https://maps.google.com/mapfiles/markerB.png',
        animation:google.maps.Animation.DROP
    },
    {
        lat: 37.581587,
        lon: 126.984964,
        title: '[C] Bukchon Hanok Village',
        html: 'Gye-dong, Jongno-gu',
        zoom: 15,
        icon: 'https://maps.google.com/mapfiles/markerC.png',
      animation:google.maps.Animation.DROP
    },
    {
        lat: 37.568931,
        lon: 126.981102,
        title: '[D] Cheonggyecheon',
        html: 'Gwang-Tong bridge, Cheonggyecheon-ro, Jongno-gu',
        zoom: 15,
        icon: 'https://maps.google.com/mapfiles/markerD.png',
      animation:google.maps.Animation.DROP
    },
    {
        lat: 37.561775,
        lon: 126.984896,
        title: '[E] Myeong-dong',
        html: 'Chungmuro 1ga, Jung-gu',
        zoom: 15,
        icon: 'https://maps.google.com/mapfiles/markerE.png',
      animation:google.maps.Animation.DROP
    }
];
  
  new Maplace({
    locations: LocsA,
    map_div: '#gmap-list',
    controls_type: 'list',
    controls_title: 'Choose a place',
    
    start: 20,
    //view_all_text: 'India',
    //type: 'polyline'/*'circle'*/,
    shared: {
        zoom: 20,
        html: '%index'
    },
    circleRadiusChanged: function(index, point, marker) {
      $('#radiusInfo').text(
        ' - point #' + (index+1) + ' size: ' + parseInt(marker.getRadius()) + 'mt.'
      );
    }
  }).Load();
  
});
