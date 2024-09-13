// ================================================ changing Background =========================================
let images  = [
    "https://images.pexels.com/photos/295813/pexels-photo-295813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1659294/pexels-photo-1659294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2087389/pexels-photo-2087389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/26615654/pexels-photo-26615654/free-photo-of-dome-of-the-rock-in-jerusalem-in-israel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1040906/pexels-photo-1040906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/28275993/pexels-photo-28275993/free-photo-of-blue-mosque-sultan-ahmed-cami.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/27634395/pexels-photo-27634395/free-photo-of-the-blue-mosque-in-istanbul-turkey.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/27532969/pexels-photo-27532969/free-photo-of-cami.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/28348637/pexels-photo-28348637/free-photo-of-siluet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/28289056/pexels-photo-28289056/free-photo-of-hassan-ii-mosque.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/27469030/pexels-photo-27469030/free-photo-of-a-tall-tower-with-a-clock-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1428607/pexels-photo-1428607.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2404046/pexels-photo-2404046.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2240863/pexels-photo-2240863.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2475746/pexels-photo-2475746.jpeg?auto=compress&cs=tinysrgb&w=600"
];

document.addEventListener('DOMContentLoaded', function(){
    function changeBackgroundImage() {
        const randomIndex = Math.floor(Math.random() * images.length); // Get a random index
        document.body.style.backgroundImage = `url('${images[randomIndex]}')`; // Set the new background image
    }
    setInterval(changeBackgroundImage, 5000);
});

// ================================================ countries =========================================
function getCountry() {
    for (const country of muslimCountries) {
        console.log("capital: " + country.capital);
    }
}


