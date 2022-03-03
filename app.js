const API_KEY =`d49973a2083e532d824df8f2f9b2e5f8`

 const searchTempereture =()=>{
     const inputField = document.getElementById('city-name')
     const inputValue = inputField.value
      inputField.value =''
     const url = ` https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=d49973a2083e532d824df8f2f9b2e5f8&units=metric`
     console.log(url)
       fetch(url)
      .then(res=>res.json())
      .then(data=>displayTemperture(data))
 }

   const setInnerText =(id,text) =>{
    document.getElementById(id).innerText= text
  }
  const displayTemperture =(tempereture)=>{
    // console.log(tempereture)
     setInnerText('city', tempereture.name)
     setInnerText('temps', tempereture.main.temp)
     setInnerText('condation', tempereture.weather[0].main)
     const url =` http://openweathermap.org/img/wn/${tempereture.weather[0].icon}@2x.png`
     const imgIcon = document.getElementById('icon')
     imgIcon.setAttribute('src',url)
  }