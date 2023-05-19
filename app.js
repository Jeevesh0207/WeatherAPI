
let one=document.getElementById("One")
let Two=document.getElementById("Two")
let Three=document.getElementById("Three")
let Four=document.getElementById("Four")
let Five=document.getElementById("Five")
let Six=document.getElementById("Six")
let Seven=document.getElementById("Seven")
let Eight=document.getElementById("Eight")
let Nine=document.getElementById("Nine")
// let image=document.getElementById("Image")

let Latitude=prompt("Tell Me Your Latitude",26.7922)
let Longitude=prompt("Tell Me Your Longitude",82.127167)

// const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
const url = "https://weatherapi-com.p.rapidapi.com/current.json?q="+ Latitude+"%2C"+Longitude;

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a5f854a4a4msh945ec253c144a4ap115a70jsn37a5f41be8ec',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

let p=fetch(url,options)

p.then((response)=>{
  return response.json()
}).then((value)=>{
  console.log(value)
  // console.log(value.current.condition.text)
  // image.src=value.current.condition.icon
  one.innerHTML=value.location.name
  Two.innerHTML=value.location.region
  Three.innerHTML=value.location.country
  Four.innerHTML=value.current.condition.text
  Five.innerHTML=value.current.humidity
  Six.innerHTML=value.current.temp_c
  Seven.innerHTML=value.current.wind_dir
  Eight.innerHTML=value.current.wind_kph
  Nine.innerHTML=value.current.cloud


})