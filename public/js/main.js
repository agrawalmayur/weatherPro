const cityName=document.getElementById("cityName")
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById('city_name');

const  temp_status = document.getElementById('temp_status');
const  real_val = document.getElementById('real_val');

const datahide = document.querySelector('.middle_layer')

const getInfo = async(event)=>{
    event.preventDefault();
   let cityVal = cityName.value;
if(cityVal == ""){
    city_name.innerText = `Plz write the name before search`;
    datahide.classList.add('data_hide');
}else{
    try{
    let url =`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=679328f9d9f686f8c9adbc8505260c17`;
   const response = await fetch(url);
   const data = await response.json();
   //console.log(data);
   const arrData = [data];
   city_name.innerText  = `${arrData[0].name}, ${arrData[0].sys.country}`;
   real_val.innerText = arrData[0].main.temp;
//temp_status.innerText = arrData[0].weather[0].main;
const tempMood =arrData[0].weather[0].main;
if(tempMood =="Clear"){
    temp_status.innerHTML = "🌞";
}else if(tempMood =="Clouds"){
    temp_status.innerHTML = "🌩️";
}else if(tempMood =="Rain"){
    temp_status.innerHTML = "⛈️";
}else {
    temp_status.innerHTML = "🤡";
}
datahide.classList.remove('data_hide');

}catch{
    city_name.innerText = `Plz enter the correct City name`;
}}
}
submitBtn.addEventListener("click",getInfo);

