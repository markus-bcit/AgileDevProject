$(document).ready(function() {
    var data = [
    {
      "id": 1,
      "img": "https://perenual.com/storage/species_image/1_abies_alba/regular/1536px-Abies_alba_SkalitC3A9.jpg",
      "name": "European Silver Fir",
      "price": 25.99,
      "quantity": 10,
      "sname": "Abies alba"
    },
    {
      "id": 2,
      "img": "https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/regular/49255769768_df55596553_b.jpg",
      "name": "Pyramidalis Silver Fir",
      "price": 29.99,
      "quantity": 8,
      "sname": "Abies alba 'Pyramidalis'"
    },
    {
      "id": 3,
      "img": "https://perenual.com/storage/species_image/3_abies_concolor/regular/52292935430_f4f3b22614_b.jpg",
      "name": "White Fir",
      "price": 19.99,
      "quantity": 15,
      "sname": "Abies concolor"
    },
    {
      "id": 4,
      "img": "https://perenual.com/storage/species_image/4_abies_concolor_candicans/regular/49283844888_332c9e46f2_b.jpg",
      "name": "Candicans White Fir",
      "price": 24.99,
      "quantity": 12,
      "sname": "Abies concolor 'Candicans'"
    },
    {
      "id": 5,
      "img": "https://perenual.com/storage/species_image/5_abies_fraseri/regular/36843539702_e80fc436e0_b.jpg",
      "name": "Black Hills Spruce",
      "price": 32.99,
      "quantity": 6,
      "sname": "Picea glauca var. densata"
    },
    {
      "id": 6,
      "img": "https://perenual.com/storage/species_image/6_abies_koreana_aurea/regular/49235570926_99ec10781d_b.jpg",
      "name": "Colorado Blue Spruce",
      "price": 39.99,
      "quantity": 5,
      "sname": "Picea pungens"
    },
    {
      "id": 7,
      "img": "https://perenual.com/storage/species_image/7_abies_lasiocarpa/regular/51002756843_74fae3c2fa_b.jpg",
      "name": "Colorado Spruce",
      "price": 45.99,
      "quantity": 4,
      "sname": "Picea pungens 'Glauca'"
    },
    {
      "id": 8,
      "img": "https://perenual.com/storage/species_image/8_abies_pinsapo_glauca/regular/21657514018_c0d9fed9f4_b.jpg",
      "name": "Norway Spruce",
      "price": 29.99,
      "quantity": 7,
      "sname": "Picea abies"
    },
    {
      "id": 9,
      "img": "https://perenual.com/storage/species_image/9_abies_procera/regular/49107504112_6bd7effb8b_b.jpg",
      "name": "Serbian Spruce",
      "price": 27.99,
      "quantity": 9,
      "sname": "Picea omorika"
    },
    {
      "id": 10,
      "img": "https://perenual.com/storage/species_image/10_acer_johin/regular/pexels-photo-2183508.jpg",
      "name": "Dwarf Alberta Spruce",
      "price": 24.99,
      "quantity": 12,
      "sname": "Picea glauca 'Conica'"
    },
    {
      "id": 11,
      "img": "https://perenual.com/storage/species_image/11_acer_davidii/regular/6868591754_f4ac5b0510_b.jpg",
      "name": "Eastern White Pine",
      "price": 18.99,
      "quantity": 18,
      "sname": "Pinus strobus"
    },
    {
      "id": 12,
      "img": "https://perenual.com/storage/species_image/12_acer_ginnala/regular/10476032513_76ca899bc4_b.jpg",
      "name": "Jack Pine",
      "price": 17.99,
      "quantity": 20,
      "sname": "Pinus banksiana"
    },
    {
      "id": 13,
      "img": "https://perenual.com/storage/species_image/13_acer_ginnala_flame/regular/pexels-photo-1649190.jpg",
      "name": "Limber Pine",
      "price": 29.99,
      "quantity": 7,
      "sname": "Pinus flexilis"
    },
    {
      "id": 14,
      "img": "https://perenual.com/storage/species_image/14_acer_ginnala_mondy/regular/pexels-photo-1789879.jpg",
      "name": "Ponderosa Pine",
      "price": 21.99,
      "quantity": 10,
      "sname": "Pinus ponderosa"
    }
    ];
  
    $('#myTable').DataTable({
      data: data,
      columns: [
        { data: 'id' },
        { data: 'img', render: function(data) {
            return '<img src="' + data + '" width="100" height="100">';
          }
        },{ data: 'sname' },
        { data: 'name' },
        { data: 'price' },
        { data: 'quantity' },
      ]
    });
  });