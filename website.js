function showSatellite() {
    var city = document.getElementById("city").value;
    var satelliteType = document.getElementById("satellite-type").value;
    var mapDiv = document.getElementById("map");
    mapDiv.style.display = "block";
    var imagePath;
    if (satelliteType === "CopernicusImagery") {
        imagePath = city + satelliteType + ".gif";
        mapDiv.innerHTML = "<img src='SatelliteImagery/" + imagePath + "' class='center' >";
    } else if (satelliteType === "Copernicus") {
        imagePath = city + satelliteType + ".html";
        mapDiv.innerHTML = "<iframe src='SatelliteImagery/" + imagePath + "' width='50%' height='600px' class='center'></iframe>";
    } else if (satelliteType === "NightLights") {
        imagePath = city + satelliteType + ".png";
        mapDiv.innerHTML = "<img src='SatelliteImagery/" + imagePath + "' class='center' >";
    }
}

function updateSatelliteTypes() {
    var satelliteType = document.getElementById("satellite-type").value;
    var cityTypeDropdown = document.getElementById("city");
    cityTypeDropdown.innerHTML = "";

    if (satelliteType === "CopernicusImagery") {
        addOption(cityTypeDropdown, "Dubai", "Dubai, UAE");
        addOption(cityTypeDropdown, "LasVegas", "Las Vegas, USA");
        addOption(cityTypeDropdown, "Chongqing", "Chongqing, China");
        addOption(cityTypeDropdown, "NufloDeChavez", "Nuflo de Chavez, Bolivia");
        addOption(cityTypeDropdown, "Zurich", "Zurich, Switzerland");
    } else if (satelliteType === "Copernicus") {
        addOption(cityTypeDropdown, "Bolivia", "Bolivia");
        addOption(cityTypeDropdown, "China", "China");
        addOption(cityTypeDropdown, "UAE", "United Arab Emirates");
        addOption(cityTypeDropdown, "NV", "Nevada, USA");
    } else if (satelliteType === "NightLights") {
        addOption(cityTypeDropdown, "Bolivia", "Bolivia");
        addOption(cityTypeDropdown, "Botswana", "Botswana");
        addOption(cityTypeDropdown, "China", "China");
        addOption(cityTypeDropdown, "Philippines", "Philippines");
        addOption(cityTypeDropdown, "Switzerland", "Switzerland");
        addOption(cityTypeDropdown, "UAE", "United Arab Emirates");
    }
}

function addOption(selectElement, value, text) {
    var option = document.createElement("option");
    option.value = value;
    option.text = text;
    selectElement.appendChild(option);
}

window.addEventListener('load', function() {
    updateSatelliteTypes();
});

function showMap() {
    var city = document.getElementById("city").value;
    var mapType = document.getElementById("map-type").value;
    var mapDiv = document.getElementById("map");
    mapDiv.style.display = "block";
    var imagePath = city + mapType + ".html";
    mapDiv.innerHTML = "<iframe src='WhereIs/" + imagePath + "' width='50%' height='600px' class='center'></iframe>";
}

function showImage() {
    var city = document.getElementById("city").value;
    var mapType = document.getElementById("map-type").value;
    var mapDiv = document.getElementById("map");
    mapDiv.style.display = "block";
    var imagePath =  city + mapType + ".png";
    mapDiv.innerHTML = "<img src='Geography/" + imagePath + "'>";
}

function showImage2() {
    var city = document.getElementById("city").value;
    var mapType = document.getElementById("map-type").value;
    var mapDiv = document.getElementById("map");
    mapDiv.style.display = "block";
    var imagePath =  city + mapType + ".png";
    mapDiv.innerHTML = "<img src='Infastructure/" + imagePath + "'>";
}


const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    menu.classList.toggle('open');
});


window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(function() {
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'block'; 
    }, 50)
});


