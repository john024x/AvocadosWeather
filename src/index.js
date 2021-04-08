console.log('Happy hacking :)')
const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "&lang=es&units=metric&appid=3c12fdf84f55a4f0917e5d4a57113ee2";
const appNode = document.querySelector('#mount');
const icoURL = "http://openweathermap.org/img/wn/";//01d@4x.png"
appNode.className = "margin:0 auto flex flex-wrap"; 

var request = new XMLHttpRequest()


let boton_buscar = document.querySelector('#btn_buscar');
const action = () =>{
	let city = document.querySelector('#input_ciudad').value
    let urlAPI = `${baseURL}${city}${apiKey}`
    console.log(urlAPI)
    window.fetch(urlAPI).then(respuesta => respuesta.json()).then(ResponseJson =>{
    const TodosLosItems = []
    console.log( ResponseJson.weather)
        ResponseJson.weather.forEach(item => {
            const title = document.createElement('h1');
            title.textContent = ResponseJson.name;
            title.style="font-size:1.5rem";
            title.style.fontFamily = "Minion";
            title.className = "text-2x1 text-white"; 

            const description = document.createElement('label');
            description.textContent = item.description;
            description.style="font-size:1rem";
            description.style.fontFamily = "Minion";
            description.className = "text-2x1 text-white"; 

            const br = document.createElement('br');
            const temp = document.createElement('label');
            temp.textContent = ResponseJson.main.temp+"º";
            temp.style="font-size:1rem";
            temp.style.fontFamily = "Minion";
            temp.className = "text-2x1 text-white"; 

            const img = document.createElement('img');
            img.src = `${icoURL}${item.icon}`+"@4x.png";
            img.className = "rounded-full h-55 w-55 flex items-center justify-center...";
        
            const container = document.createElement('div')
            container.append(title,temp,br,description,img);
            container.className = "hover:bg-indigo-700 m-4 bg-indigo-900 rounded-md"; 
            TodosLosItems.push(container)
        });
            appNode.append(...TodosLosItems);
    })
}

boton_buscar.addEventListener('click',action)




