$(function(){
  var LocsB = [
    {
        lat: 37.570153,
        lon: 126.99934,
        title: '[A] Gwangjang Market',
        html: '88 Cheonggyecheon-ro, Jongno 5-ga, Jongno-gu',
        zoom: 15,
        icon: 'https://maps.google.com/mapfiles/markerA.png',
        animation: google.maps.Animation.DROP
    },
    {
        lat: 37.568669,
        lon: 127.008778,
        title: '[B] Dongdaemun Market',
        html: 'Euljiro 6-ga, Jung-gu',
        zoom: 15,
        icon: 'https://maps.google.com/mapfiles/markerB.png',
        animation:google.maps.Animation.DROP
    },
    {
        lat: 37.580717,
        lon: 126.969982,
        title: '[C] Tonging Market',
        html: '18 Jahamun-ro 15 gil, Cheongunhyoja-dong, Jongno-gu',
        zoom: 15,
        icon: 'https://maps.google.com/mapfiles/markerC.png',
      animation:google.maps.Animation.DROP
    },
    {
        lat: 37.571488,
        lon: 126.987096,
        title: '[D] Insa-dong',
        html: '72-4 Jongno 3-ga, Jongno-gu',
        zoom: 15,
        icon: 'https://maps.google.com/mapfiles/markerD.png',
      animation:google.maps.Animation.DROP
    },
    {
        lat: 37.559179,
        lon: 126.977669,
        title: '[E] Namdaemun Market',
        html: 'Namdaemunsijang 4-gil, Namchang-dong, Jung-gu',
        zoom: 15,
        icon: 'https://maps.google.com/mapfiles/markerE.png',
      animation:google.maps.Animation.DROP
    },
    /*
    {
        lat: 37.526309,
        lon: 126.933582,
        title: 'Yeouido Hangang Park',
        html: 'Han River, 330 Yeouidong-ro, Yeoeuido-dong, Yeongdeungpo-gu',
        zoom: 15,
        icon: 'https://maps.google.com/mapfiles/markerE.png',
      animation:google.maps.Animation.DROP
    }*/
];
  
  new Maplace({
    locations: LocsB,
    map_div: '#gmap',
    controls_type: 'list',
    controls_title: 'Choose a place',
    
    start: 20,
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
