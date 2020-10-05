const Form = document.querySelector('form')
const Search = document.getElementById('city-search')
const messageOne = document.querySelector('.status')
const messageTwo = document.querySelector('.location')
const messageThree = document.querySelector('#V1')
const messageFour = document.querySelector('#V2')
const messageFive = document.querySelector('#V3')

// function initMap(){
//     let Input = document.getElementById('city-search')
//     let autocomplete = new google.maps.places.Autocomplete(Input)

//     autocomplete.addListener('places_changed',function (){
//         let place = autocomplete.getPlace()
//     })
// }

Form.addEventListener('submit',(event)=>{
    event.preventDefault()

    let Location = Search.value
    
    fetch('/weather?address='+Location).then((res)=>res.json()).then((data)=>{
        if (data.error) {
            messageOne.textContent = ''
            messageTwo.textContent = data.Error
            messageThree.textContent = ''
            messageFour.textContent = ''
            messageFive.textContent = ''
        }
        else {
            messageOne.textContent = data.Description
            messageTwo.textContent = data.Location
            messageThree.textContent = data.Temperature
            messageFour.textContent = data.FeelsLike
            messageFive.textContent = data.Humidity
        }
    })
})