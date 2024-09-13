// todo Selectors for displaying prayer times in UI elements.
let Fajr = document.querySelector(".Fajr")
let Dhuhr = document.querySelector(".Dhuhr")
let Asr = document.querySelector(".Asr")
let Maghrib = document.querySelector(".Maghrib")
let Isha = document.querySelector(".Isha")
let nextPrayerName = "";
let timeUntilNextPrayer = "";
// todo Array of Muslim-majority countries, their capitals, and flags for use in UI components.
const muslimCountries = [
    { country: "Afghanistan", capital: "Kabul", flag: '<i class="flag-icon flag-icon-af"></i>', arabicCountry: "أفغانستان", arabicCapital: "كابول" },
    { country: "Albania", capital: "Tirana", flag: '<i class="flag-icon flag-icon-al"></i>', arabicCountry: "ألبانيا", arabicCapital: "تيرانا" },
    { country: "Algeria", capital: "Algiers", flag: '<i class="flag-icon flag-icon-dz"></i>', arabicCountry: "الجزائر", arabicCapital: "الجزائر" },
    { country: "Azerbaijan", capital: "Baku", flag: '<i class="flag-icon flag-icon-az"></i>', arabicCountry: "أذربيجان", arabicCapital: "باكو" },
    { country: "Bahrain", capital: "Manama", flag: '<i class="flag-icon flag-icon-bh"></i>', arabicCountry: "البحرين", arabicCapital: "المنامة" },
    { country: "Bangladesh", capital: "Dhaka", flag: '<i class="flag-icon flag-icon-bd"></i>', arabicCountry: "بنغلاديش", arabicCapital: "دكا" },
    { country: "Benin", capital: "Porto-Novo", flag: '<i class="flag-icon flag-icon-bj"></i>', arabicCountry: "بنين", arabicCapital: "بورتو نوفو" },
    { country: "Brunei", capital: "Bandar Seri Begawan", flag: '<i class="flag-icon flag-icon-bn"></i>', arabicCountry: "بروناي", arabicCapital: "بندر سيري بيغاوان" },
    { country: "Burkina Faso", capital: "Ouagadougou", flag: '<i class="flag-icon flag-icon-bf"></i>', arabicCountry: "بوركينا فاسو", arabicCapital: "واغادوغو" },
    { country: "Cameroon", capital: "Yaoundé", flag: '<i class="flag-icon flag-icon-cm"></i>', arabicCountry: "الكاميرون", arabicCapital: "ياوندي" },
    { country: "Chad", capital: "N'Djamena", flag: '<i class="flag-icon flag-icon-td"></i>', arabicCountry: "تشاد", arabicCapital: "انجمينا" },
    { country: "Comoros", capital: "Moroni", flag: '<i class="flag-icon flag-icon-km"></i>', arabicCountry: "جزر القمر", arabicCapital: "موروني" },
    { country: "Djibouti", capital: "Djibouti", flag: '<i class="flag-icon flag-icon-dj"></i>', arabicCountry: "جيبوتي", arabicCapital: "جيبوتي" },
    { country: "Egypt", capital: "Cairo", flag: '<i class="flag-icon flag-icon-eg"></i>', arabicCountry: "مصر", arabicCapital: "القاهرة" },
    { country: "Gabon", capital: "Libreville", flag: '<i class="flag-icon flag-icon-ga"></i>', arabicCountry: "الغابون", arabicCapital: "ليبرفيل" },
    { country: "Gambia", capital: "Banjul", flag: '<i class="flag-icon flag-icon-gm"></i>', arabicCountry: "غامبيا", arabicCapital: "بانجول" },
    { country: "Guinea", capital: "Conakry", flag: '<i class="flag-icon flag-icon-gn"></i>', arabicCountry: "غينيا", arabicCapital: "كوناكري" },
    { country: "Guinea-Bissau", capital: "Bissau", flag: '<i class="flag-icon flag-icon-gw"></i>', arabicCountry: "غينيا بيساو", arabicCapital: "بيساو" },
    { country: "Indonesia", capital: "Jakarta", flag: '<i class="flag-icon flag-icon-id"></i>', arabicCountry: "إندونيسيا", arabicCapital: "جاكرتا" },
    { country: "Iran", capital: "Tehran", flag: '<i class="flag-icon flag-icon-ir"></i>', arabicCountry: "إيران", arabicCapital: "طهران" },
    { country: "Iraq", capital: "Baghdad", flag: '<i class="flag-icon flag-icon-iq"></i>', arabicCountry: "العراق", arabicCapital: "بغداد" },
    { country: "Ivory Coast", capital: "Yamoussoukro", flag: '<i class="flag-icon flag-icon-ci"></i>', arabicCountry: "ساحل العاج", arabicCapital: "ياموسوكرو" },
    { country: "Jordan", capital: "Amman", flag: '<i class="flag-icon flag-icon-jo"></i>', arabicCountry: "الأردن", arabicCapital: "عمان" },
    { country: "Kazakhstan", capital: "Astana", flag: '<i class="flag-icon flag-icon-kz"></i>', arabicCountry: "كازاخستان", arabicCapital: "أستانا" },
    { country: "Kuwait", capital: "Kuwait City", flag: '<i class="flag-icon flag-icon-kw"></i>', arabicCountry: "الكويت", arabicCapital: "مدينة الكويت" },
    { country: "Kyrgyzstan", capital: "Bishkek", flag: '<i class="flag-icon flag-icon-kg"></i>', arabicCountry: "قيرغيزستان", arabicCapital: "بشكيك" },
    { country: "Lebanon", capital: "Beirut", flag: '<i class="flag-icon flag-icon-lb"></i>', arabicCountry: "لبنان", arabicCapital: "بيروت" },
    { country: "Libya", capital: "Tripoli", flag: '<i class="flag-icon flag-icon-ly"></i>', arabicCountry: "ليبيا", arabicCapital: "طرابلس" },
    { country: "Malaysia", capital: "Kuala Lumpur", flag: '<i class="flag-icon flag-icon-my"></i>', arabicCountry: "ماليزيا", arabicCapital: "كوالالمبور" },
    { country: "Maldives", capital: "Malé", flag: '<i class="flag-icon flag-icon-mv"></i>', arabicCountry: "المالديف", arabicCapital: "ماليه" },
    { country: "Mali", capital: "Bamako", flag: '<i class="flag-icon flag-icon-ml"></i>', arabicCountry: "مالي", arabicCapital: "باماكو" },
    { country: "Mauritania", capital: "Nouakchott", flag: '<i class="flag-icon flag-icon-mr"></i>', arabicCountry: "موريتانيا", arabicCapital: "نواكشوط" },
    { country: "Morocco", capital: "Rabat", flag: '<i class="flag-icon flag-icon-ma"></i>', arabicCountry: "المغرب", arabicCapital: "الرباط" },
    { country: "Mozambique", capital: "Maputo", flag: '<i class="flag-icon flag-icon-mz"></i>', arabicCountry: "موزمبيق", arabicCapital: "مابوتو" },
    { country: "Niger", capital: "Niamey", flag: '<i class="flag-icon flag-icon-ne"></i>', arabicCountry: "النيجر", arabicCapital: "نيامي" },
    { country: "Nigeria", capital: "Abuja", flag: '<i class="flag-icon flag-icon-ng"></i>', arabicCountry: "نيجيريا", arabicCapital: "أبوجا" },
    { country: "Oman", capital: "Muscat", flag: '<i class="flag-icon flag-icon-om"></i>', arabicCountry: "عمان", arabicCapital: "مسقط" },
    { country: "Pakistan", capital: "Islamabad", flag: '<i class="flag-icon flag-icon-pk"></i>', arabicCountry: "باكستان", arabicCapital: "إسلام آباد" },
    { country: "Palestine", capital: "Jerusalem", flag: '<i class="flag-icon flag-icon-ps"></i>', arabicCountry: "فلسطين", arabicCapital: "القدس" },
    { country: "Qatar", capital: "Doha", flag: '<i class="flag-icon flag-icon-qa"></i>', arabicCountry: "قطر", arabicCapital: "الدوحة" },
    { country: "Saudi Arabia", capital: "Riyadh", flag: '<i class="flag-icon flag-icon-sa"></i>', arabicCountry: "السعودية", arabicCapital: "الرياض" },
    { country: "Senegal", capital: "Dakar", flag: '<i class="flag-icon flag-icon-sn"></i>', arabicCountry: "السنغال", arabicCapital: "داكار" },
    { country: "Sierra Leone", capital: "Freetown", flag: '<i class="flag-icon flag-icon-sl"></i>', arabicCountry: "سيراليون", arabicCapital: "فريتاون" },
    { country: "Somalia", capital: "Mogadishu", flag: '<i class="flag-icon flag-icon-so"></i>', arabicCountry: "الصومال", arabicCapital: "مقديشو" },
    { country: "Sudan", capital: "Khartoum", flag: '<i class="flag-icon flag-icon-sd"></i>', arabicCountry: "السودان", arabicCapital: "الخرطوم" },
    { country: "Syria", capital: "Damascus", flag: '<i class="flag-icon flag-icon-sy"></i>', arabicCountry: "سوريا", arabicCapital: "دمشق" },
    { country: "Togo", capital: "Lomé", flag: '<i class="flag-icon flag-icon-tg"></i>', arabicCountry: "توجو", arabicCapital: "لومي" },
    { country: "Tunisia", capital: "Tunis", flag: '<i class="flag-icon flag-icon-tn"></i>', arabicCountry: "تونس", arabicCapital: "تونس" },
    { country: "Turkey", capital: "Ankara", flag: '<i class="flag-icon flag-icon-tr"></i>', arabicCountry: "تركيا", arabicCapital: "أنقرة" },
    { country: "Turkmenistan", capital: "Ashgabat", flag: '<i class="flag-icon flag-icon-tm"></i>', arabicCountry: "تركمانستان", arabicCapital: "عشق آباد" },
    { country: "Uganda", capital: "Kampala", flag: '<i class="flag-icon flag-icon-ug"></i>', arabicCountry: "أوغندا", arabicCapital: "كمبالا" },
    { country: "United Arab Emirates", capital: "Abu Dhabi", flag: '<i class="flag-icon flag-icon-ae"></i>', arabicCountry: "الإمارات", arabicCapital: "أبو ظبي" },
    { country: "Uzbekistan", capital: "Tashkent", flag: '<i class="flag-icon flag-icon-uz"></i>', arabicCountry: "أوزبكستان", arabicCapital: "طشقند" },
    { country: "Yemen", capital: "Sana'a", flag: '<i class="flag-icon flag-icon-ye"></i>', arabicCountry: "اليمن", arabicCapital: "صنعاء" },
    { country: "India", capital: "New Delhi", flag: '<i class="flag-icon flag-icon-in"></i>', arabicCountry: "الهند", arabicCapital: "نيودلهي" },
    { country: "Russia", capital: "Moscow", flag: '<i class="flag-icon flag-icon-ru"></i>', arabicCountry: "روسيا", arabicCapital: "موسكو" },
    { country: "France", capital: "Paris", flag: '<i class="flag-icon flag-icon-fr"></i>', arabicCountry: "فرنسا", arabicCapital: "باريس" },
    { country: "Germany", capital: "Berlin", flag: '<i class="flag-icon flag-icon-de"></i>', arabicCountry: "ألمانيا", arabicCapital: "برلين" },
    { country: "United Kingdom", capital: "London", flag: '<i class="flag-icon flag-icon-gb"></i>', arabicCountry: "المملكة المتحدة", arabicCapital: "لندن" },
    { country: "United States", capital: "Washington, D.C.", flag: '<i class="flag-icon flag-icon-us"></i>', arabicCountry: "الولايات المتحدة", arabicCapital: "واشنطن العاصمة" }
];
// todo Selector for the dropdown form element in the UI.
let formSelect = document.querySelector(".form-select");
let flagContainer = document.querySelector(".flag");
// Function to populate the dropdown with options based on the muslimCountries array.
function populateDropdown(countries) {
    // formSelect.innerHTML = "";
    countries.forEach((country) => {
        let option = document.createElement("option");
        option.value = country.country;
        option.setAttribute('data-capital', country.capital);
        option.setAttribute('data-flag', country.flag);
        option.setAttribute('arabicCountry', country.arabicCountry);
        option.setAttribute('arabicCapital', country.arabicCapital);
        option.textContent = `${country.arabicCapital} - ${country.arabicCountry}`;
        formSelect.appendChild(option);
    });
}
// todo Initialize dropdown on page load.
populateDropdown(muslimCountries);
let capitall = '';
let countrry = '';
// todo Event listener for dropdown changes to update current location display and fetch prayer times.
formSelect.addEventListener('change', function () {
    let selectedOption = formSelect.options[formSelect.selectedIndex];
    capitall = selectedOption.getAttribute('data-capital');
    countrry = selectedOption.value;
    let flag = selectedOption.getAttribute('data-flag');
    let arabicCapital = selectedOption.getAttribute('arabicCapital');
    let arabicCountry = selectedOption.getAttribute('arabicCountry');

    flagContainer.innerHTML = `<i class="fa-solid fa-location-dot" style="color: #ffffff;"></i> - بلدك الحالية  :  ${arabicCapital} - ${arabicCountry} - ${flag}`;
    
    console.log('Capital: ' + capitall);
    console.log('Country: ' + countrry);
    getPrayerTimesByCity(capitall,countrry)

});
// todo Converts time from 24-hour format to 12-hour format for display.
function convertTo12HourFormat(time24) {
    let [hours, minutes] = time24.split(':'); 
    hours = parseInt(hours); 
    let period = 'صباحا';
    if (hours >= 12) {
        period = 'مساءا'; 
    }
    hours = hours % 12 || 12; 
    minutes = minutes.padStart(2, '0'); 
    return `${hours}:${minutes} ${period}`;
}
// todo Fetches prayer times for a specified city and country from an API and updates UI elements accordingly.
let prayerTimesArray = [];
let currentDate = new Date().toISOString().split('T')[0]; 
function getPrayerTimesByCity(c, C) {
    return new Promise((resolve, reject) => {
        axios.get(`https://api.aladhan.com/v1/timingsByCity/{date}?city=${c}&country=${C}`)
        // axios.get(`http://api.aladhan.com/v1/timingsByCity/${currentDate}?city=${c}&country=${C}`)
        .then(response => {
            let timings = response.data.data.timings;  
            resolve(timings); 
        })
        .catch(error => {
            reject(error);  
        });
    }).then(timings => {
        let fajrTime = convertTo12HourFormat(timings.Fajr);
        let dhuhrTime = convertTo12HourFormat(timings.Dhuhr);
        let asrTime = convertTo12HourFormat(timings.Asr);
        let maghribTime = convertTo12HourFormat(timings.Maghrib);
        let ishaTime = convertTo12HourFormat(timings.Isha);
        prayerTimesArray = [fajrTime, dhuhrTime, asrTime, maghribTime, ishaTime];
        Fajr.textContent = `${fajrTime} `;
        Dhuhr.textContent = `${dhuhrTime} `;
        Asr.textContent = `${asrTime} `;
        Maghrib.textContent = `${maghribTime} `;
        Isha.textContent = `${ishaTime} `;
        // console.log(prayerTimesArray)
    }).catch(error => {
        console.error('Error fetching prayer times:', error);
    });
}
// todo writting function to show the Current Time
function calculateReminingTime(){
    let now = new Date();
    let currentTime =  `${now.getHours()}:${now.getMinutes()}`;
    let thecurrentTime = document.querySelector(".time");
    thecurrentTime.textContent = convertTo12HourFormat(currentTime)
}
setInterval(()=>{
    calculateReminingTime()
},1000)
// todo calculate the remaining time for the next time
function calculateTheRemaining(array){
    for (const element of array) {
        console.log(element)
    }
}
calculateReminingTime(prayerTimesArray)