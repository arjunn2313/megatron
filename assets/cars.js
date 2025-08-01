const cars = [
  {
    id: 1,
    name: "Chevrolet Tahoe",
    link: "car-details.html",
    img: "assets/img/car/Chevrolet.png",
    thumb: [
      "assets/img/taho/tahoe-1.jpg",
      "assets/img/taho/tahoe-2.jpg",
      "assets/img/taho/taho-3.jpg",
      "assets/img/taho/tahoe-4.jpg",
      "assets/img/taho/tahoe-5.jpg",
      "assets/img/taho/tahoe-6.jpg",
      "assets/img/taho/tahoe-7.jpg",
      "assets/img/taho/tahoe-8.jpg",
      "assets/img/taho/tahoe-9.jpg",
    ],
    year: 2018,
    transmission: "Automatic",
    horsepower: "355 HP",
    fuel: "Petrol",
    seats: "7 People",
    mileage: "1,30,000 mi",
    price: "72,000 AED",
    specs: "GCC Specs",
    parkingSensors: "Yes",
    rearCamera: "Yes",
    ownership: "First Owner",
    registration: "Dubai",
    cleanTitle: "Yes",
    waterFlood: "No",
    electricalProblem: "No",
    minorAccident: "Yes",
    majorAccident: "No",
    convenience:
      "Spacious interior with three-row seating for up to 8 passengers",
  },
  {
    id: 2,
    name: "BMW X5",
    link: "#",
    img: "assets/img/car/BMW1.png",
    thumb: [
      "assets/img/bmw/bmw (4).jpg",
      "assets/img/bmw/bmw (2).jpg",
      "assets/img/bmw/bmw (5).jpg",
      "assets/img/bmw/bmw (6).jpg",
      "assets/img/bmw/bmw (7).jpg",
      "assets/img/bmw/bmw (8).jpg",
      "assets/img/bmw/bmw (9).jpg",
      "assets/img/bmw/bmw (1).jpg",
    ], 
    year: 2016,
    fuel: "Petrol",
    seats: "5 People",
    mileage: "86,000 km",
    price: "50,000 AED",
    specs: "Non GCC Specs",
    transmission: "Automatic",
    horsepower: "300 HP",
    parkingSensors: "Yes",
    rearCamera: "Yes",
    ownership: "First Owner",
    registration: "Dubai",
    cleanTitle: "Yes",
    waterFlood: "No",
    electricalProblem: "No",
    minorAccident: "Yes",
    majorAccident: "No",
    convenience:
      "Spacious interior with three-row seating for up to 8 passengers",
  },
  {
    id: 3,
    name: "Mitsubishi Attrage",
    link: "#",
    img: "assets/img/car/mitsubishi.png",
    thumb: [
      "assets/img/Attrage/attrage (4).jpg",
      "assets/img/Attrage/attrage (2).jpg",
      "assets/img/Attrage/attrage (5).jpg",
      "assets/img/Attrage/attrage (6).jpg",
      "assets/img/Attrage/attrage (7).jpg",
      "assets/img/Attrage/attrage (8).jpg",
      "assets/img/Attrage/attrage (9).jpg",
      "assets/img/Attrage/attrage (1).jpg",
    ],
    year: 2023,
    fuel: "Petrol",
    seats: "5 People",
    mileage: "38,000 km",
    price: "26,000 AED", // corrected from 28,000 AED
    specs: "GCC Specs",
    transmission: "Automatic",
    horsepower: "76 HP", // corrected from 120 HP
    parkingSensors: "No",
    rearCamera: "Yes",
    ownership: "First Owner",
    registration: "Dubai",
    cleanTitle: "Yes",
    waterFlood: "No",
    electricalProblem: "No",
    minorAccident: "Yes", // corrected from No
    majorAccident: "No",
    convenience: "Compact size with great fuel efficiency",
    steeringSide: "Left", // added
  },
  {
    id: 4,
    name: "Toyota Camry",
    link: "#",
    img: "assets/img/car/toyota.png",
    thumb: [
      "assets/img/camry/camry (1).jpg",
      "assets/img/camry/camry (5).jpg",
      "assets/img/camry/camry (4).jpg",
      "assets/img/camry/camry (2).jpg",
      "assets/img/camry/camry (6).jpg",
      "assets/img/camry/camry (7).jpg",
      "assets/img/camry/camry (8).jpg",
      "assets/img/camry/camry (9).jpg",
    ],
    year: 2019,
    fuel: "Petrol",
    seats: "5 People",
    mileage: "1,50,000 km",
    price: "47,000 AED", // corrected price
    specs: "Non GCC Specs",
    transmission: "Automatic",
    horsepower: "203-208 HP", // updated horsepower range
    parkingSensors: "No", // corrected as per given info
    rearCamera: "Yes",
    ownership: "First Owner", // corrected ownership
    registration: "Dubai",
    cleanTitle: "Yes",
    waterFlood: "No",
    electricalProblem: "No",
    minorAccident: "Yes",
    majorAccident: "No",
    convenience: "Reliable sedan with comfortable interior",
    steeringSide: "Left", // added missing key
  },
  {
    id: 5,
    name: "Nissan Sentra",
    link: "#",
    img: "assets/img/car/sentra.png",
    thumb: [
      "assets/img/sentra-2016/sentra 2016 (4).jpg",
      "assets/img/sentra-2016/sentra 2016 (5).jpg",
      "assets/img/sentra-2016/sentra 2016 (1).jpg",
      "assets/img/sentra-2016/sentra 2016 (2).jpg",
    ],
    year: 2016,
    fuel: "Petrol",
    seats: "5 People",
    mileage: "1,00,000 km",
    price: "18,000 AED", // corrected price
    specs: "GCC Specs",
    transmission: "Automatic",
    horsepower: "130 HP", // corrected horsepower
    parkingSensors: "No",
    rearCamera: "Yes", // corrected to Yes
    ownership: "First Owner", // corrected ownership
    registration: "Sharjah",
    cleanTitle: "Yes",
    waterFlood: "No",
    electricalProblem: "No",
    minorAccident: "Yes", // corrected
    majorAccident: "No",
    convenience: "Affordable sedan ideal for city driving",
    steeringSide: "Left",
  },
  {
    id: 6,
    name: "Nissan Sentra",
    link: "#",
    img: "assets/img/car/nissan-sentra.png",
    thumb: [
      "assets/img/sentra-2019/sentra 2019 (1).jpg",
      "assets/img/sentra-2019/sentra 2019 (5).jpg",
      "assets/img/sentra-2019/sentra 2019 (4).jpg",
      "assets/img/sentra-2019/sentra 2019 (2).jpg",
      "assets/img/sentra-2019/sentra 2019 (6).jpg",
      "assets/img/sentra-2019/sentra 2019 (7).jpg",
      "assets/img/sentra-2019/sentra 2019 (8).jpg",
      "assets/img/sentra-2019/sentra 2019 (9).jpg",
    ],
    year: 2019, // corrected year
    fuel: "Petrol",
    seats: "5 People",
    mileage: "54,000 km",
    price: "35,000 AED",
    specs: "Non GCC Specs",
    transmission: "Automatic",
    horsepower: "203-208 HP", // corrected horsepower
    parkingSensors: "No", // corrected
    rearCamera: "Yes",
    ownership: "First Owner",
    registration: "Dubai",
    cleanTitle: "Yes",
    waterFlood: "No",
    electricalProblem: "No",
    minorAccident: "Yes", // corrected
    majorAccident: "No",
    convenience: "Modern design with advanced infotainment system",
    steeringSide: "Left", // added
  },
  {
    id: 7,
    name: "Ford Explorer",
    link: "#",
    img: "assets/img/car/ford.png",
    thumb: [
      "assets/img/ford/ford (1).jpg",
      "assets/img/ford/ford (2).jpg",
      "assets/img/ford/ford (3).jpg",
      "assets/img/ford/ford (4).jpg",
      "assets/img/ford/ford (5).jpg",
      "assets/img/ford/ford (6).jpg",
      "assets/img/ford/ford (7).jpg",
      "assets/img/ford/ford (8).jpg",
      "assets/img/ford/ford (9).jpg",
      "assets/img/ford/ford (10).jpg",
    ],
    year: 2019,
    fuel: "Petrol",
    seats: "5 People", // corrected from 7
    mileage: "68,000 miles", // corrected mileage & unit
    price: "55,000 AED",
    specs: "Non GCC Specs",
    transmission: "Automatic",
    horsepower: "280 HP", // corrected from 290
    parkingSensors: "Yes",
    rearCamera: "Yes",
    ownership: "Second Owner",
    registration: "Abu Dhabi",
    cleanTitle: "Yes",
    waterFlood: "No",
    electricalProblem: "No",
    minorAccident: "Yes",
    majorAccident: "No",
    convenience: "Spacious SUV with family-friendly features",
    steeringSide: "Left", // added
  },

  {
    id: 8,
    name: "Nissan Quest",
    link: "#",
    img: "assets/img/car/nissan-quest.png",
    thumb: [
      "assets/img/quest/quest (1).jpg",
      "assets/img/quest/quest (2).jpg",
      "assets/img/quest/quest (3).jpg",
      "assets/img/quest/quest (4).jpg",
      "assets/img/quest/quest (5).jpg",
      "assets/img/quest/quest (6).jpg",
      "assets/img/quest/quest (7).jpg",
      "assets/img/quest/quest (8).jpg",
      "assets/img/quest/quest (9).jpg",
      "assets/img/quest/quest (10).jpg",
    ],
    year: 2013,
    fuel: "Petrol",
    seats: "7 People",
    mileage: "1,48,000 km",
    price: "22,000 AED",
    specs: "Non GCC Specs",
    transmission: "Automatic",
    horsepower: "260 HP",
    parkingSensors: "Yes",
    rearCamera: "Yes",
    ownership: "Third Owner",
    registration: "Dubai",
    cleanTitle: "Yes",
    waterFlood: "No",
    electricalProblem: "No",
    minorAccident: "Yes", // corrected from No
    majorAccident: "No",
    convenience: "Comfortable minivan with large cargo space",
    steeringSide: "Left", // added
  },
  {
    id: 9,
    name: "Toyota Rav4",
    link: "#",
    img: "assets/img/car/toyota-2.png",
    thumb: [
      "assets/img/rav/rav (3).jpg",
      "assets/img/rav/rav (4).jpg",
      "assets/img/rav/rav (5).jpg",
      "assets/img/rav/rav (6).jpg",
      "assets/img/rav/rav (1).jpg",
      "assets/img/rav/rav (2).jpg",
      "assets/img/rav/rav (7).jpg",
      "assets/img/rav/rav (8).jpg",
      "assets/img/rav/rav (9).jpg",
      "assets/img/rav/rav (10).jpg",
    ],
    year: 2019,
    fuel: "Petrol",
    seats: "5 People",
    mileage: "63,000 km",
    price: "67,000 AED", // corrected from 65,000
    specs: "Non GCC Specs",
    transmission: "Automatic",
    horsepower: "203 HP", // corrected from 200 HP
    parkingSensors: "No", // corrected from Yes
    rearCamera: "Yes",
    ownership: "First Owner",
    registration: "Dubai",
    cleanTitle: "Yes",
    waterFlood: "No",
    electricalProblem: "No",
    minorAccident: "Yes", // corrected from No
    majorAccident: "No",
    convenience: "Compact SUV with sporty handling",
    steeringSide: "Left", // added
  },
  {
    id: 10,
    name: "Hyundai Elantra",
    link: "#",
    img: "assets/img/car/hyundai-elentra.png",
    thumb: [
      "assets/img/hyundai/h (1).jpg",
      "assets/img/hyundai/h (2).jpg",
      "assets/img/hyundai/h (3).jpg",
    ],
    year: 2016, // corrected from 2020
    fuel: "Petrol",
    seats: "5 People",
    mileage: "46,000 km",
    price: "28,000 AED", // corrected from 30,000 AED
    specs: "Non GCC Specs",
    transmission: "Automatic",
    horsepower: "147 HP",
    parkingSensors: "No", // corrected from Yes
    rearCamera: "Yes",
    ownership: "First Owner",
    registration: "Sharjah",
    cleanTitle: "Yes",
    waterFlood: "No",
    electricalProblem: "No",
    minorAccident: "Yes", // corrected from No
    majorAccident: "No",
    convenience: "Fuel-efficient sedan with modern features",
    steeringSide: "Left", // added
  },
];
