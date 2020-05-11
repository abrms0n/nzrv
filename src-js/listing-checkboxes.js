let brandsString = 'Audio-Technica AudioLab AudioQuest B&W Bang&Olufsen Beats Beyerdynamic Bose Campfire Audio Cellularline Cowon Definitive-Technology Denon Densen Dexibell Dunu Etymotic FENDER FiiO Final-Audio-Design Focal Fostex Grado Harman Kardon HiFiMAN Huawei Invotone JBL JVC K-ARRAY KEF KOSS Klipsch MEE-Audio Mackie Magnat Marshall Master&Dynamic Meters Metz Meze MrSpeakers Musical-Fidelity NAD Nobby OPPO Onkyo PSB Panasonic Pioneer Plantronics PreSonus Proel Quad RCF RHA Radius Reloop Ritmix Sennheiser Shure Simgot Skullcandy SleepPhones Sony Stax Technics Ultrasone V-moda Volta Westone Xiaomi Yamaha Z'

let brands = brandsString.split(' ');

let checkboxes = brands.map(function (brand) {
    return `
    <input type="checkbox" class="checkbox" id="${brand}">
    <label class="checkbox-label" for="${brand}">${brand}</label>
    `
})

$('.listing-container__brands-container_hidden').append(checkboxes);


