
const cars = [
    {
        name: "porsche 718",
        imageUrl: "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO3k7KM8JihQ52DDgfNagKyX87TQ9br3uwrD1XEUA%25Y1O8uJWRoW%25h3xFHyTOtw9xeXi69skh5H",
        speed: "275km/h",
        acceleration: "5.1s",
        quartermile: "13.2s",
        fuel:"11.8L/100km",
        power:"220kW/300ps",
        year:"2023"


    }, 
    {  
        name: "Porsche 718 boxster",
        imageUrl: "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOB7I60KBdhQ52DDgfNagKyXE75%25VIJfNj2zhIy0T4up9MV7MRtk6paV1maolzX2c7LVKv1fUOwU7iVgxtuSKym6gbzYq6Q4iIt  ",
        speed: "288km/h",
        acceleration: "5.1s",
        quartermile: "13.0s",
        fuel:"11.8L/100km",
        power:"220kW/300ps",
        year:"2023"
    }, 
    {
        name: "Porsche 718 Cayman style edition",
        imageUrl: "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOiLR60Kqk4WTQvCgf%258nkE8T45cweNl4EikzoGSoNun9MVQajsEf9L51CfxBupV",
        speed: "275km/h",
        acceleration: "4.7s",
        quartermile: "13.0s",
        fuel:"118L/100km",
        power:"220kW/300ps",
        year:"2023"
    },
    {
        name: "Porsche 718 Spyder RS model.",
        imageUrl: "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO9I7KMInJ5GT2rpNFIuMXRxB65%25VezgNjmrgayxbGS19zdh0uIiBwWQrNbgNm5oaQqbUOq42hjdtgF333U8lJRlgZbT75WPfIOaTshnAaDwZu5",
        speed: "308km/h",
        acceleration: "3.4s",
        quartermile: "11.3s",
        fuel:"12L/100km",
        power:"3668kW/500ps",
        year:"2023"
    },
    {
        name: "Porsche 718 Cayman GT4 RS",
        imageUrl: "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO3jZ60KBShQ58eYgfNMkv0DynvQ9%25kW4fIjMl3Drs6eWR6kUjGlHxnCDCWK1m41x0e7%25cIBJ5Rr7VjZarpo0yc",
        speed: "315km/h",
        acceleration: "3.4s",
        quartermile: "11.3s",
        fuel:"17.4L/100km",
        power:"368kW/500ps",
        year:"2023"
    },
    {
        name: "Porsche 911 Carrera ",
        imageUrl: "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOBoV60KBiMWTQ4mgfNPoKyXv6tQ9%25ttefIjMREDrs6eWR6kUjGlHbnURRY40wjEwr1F69swihQXC6%25Il3CgP1Ds",
        speed: "293km/h",
        acceleration: "4.2s",
        quartermile: "12.2s",
        fuel:"12.9L/100km",
        power:"283kW/385PS",
        year:"2023"
    },
    {
        name: "Porsche 911 Carrera 4 Cabriolet",
        imageUrl: "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO8c7KM86lhQ58DGgfNaHKyXv65%25VEEqNjmLU4yxc7gr9Ti36KI5mh5VMCWK1mqb1vH7%25cdJGUbbEeBV7FVWAj1uKVST8x41z6cR4iLACK",
        speed: "289km/h",
        acceleration: "4.4s",
        quartermile: "12.5s",
        fuel:"17.6L/100km",
        power:"283kW/385PS",
        year:"2023"
    },
    {
        name: "Porsche 911 Targa",
        imageUrl: "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO8c7KM86lhQ58DGgfNaHKyXv65%25VEEqNjmLU4yxc7gr9Ti36KI5mh5VMCWK1mqb1vH7%25cdJGrbbEeBV7FVWAj1uKVST8x41z6cR4iLACK",
        speed: "289km/h",
        acceleration: "4.4s",
        quartermile: "12.5s",
        fuel:"17.6L/100km",
        power:"283kW/385PS",
        year:"2023"
    },
    {
        name: "Porsche 911 Turbo S",
        imageUrl: "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOBoV60KBiFWTQ4ngfNPoKyXd6xQ9%25tenfIOuw6eu8q%25LAlmP3feSvg3%25n3IaGuyO3T7KFkuX9A4khYafO",
        speed: "330km/h",
        acceleration: "2.7s",
        quartermile: "10.5s",
        fuel:"12.1LL/100km",
        power:"478kW/650PS",
        year:"2023"
    },
    {
        name: "Porsche 911 GT3",
        imageUrl: "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO3L7KMKwrhQ5YCpNFouiKyXdChQ9%25tenfIOuw6eu8q%25LAlmPkeeSvg3%25n3IaGuyO3T7KFkuX9A4khYafO",
        speed: "318km/h",
        acceleration: "3.4s",
        quartermile: "11.3s",
        fuel:"13L/100km",
        power:"375kW/510PS",
        year:"2023"
    },
    {
        name: "Porsche 911 GT3RS",
        imageUrl: "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO3L7KMHfehQ5YCqgfNP9KyXd67Q9%25tenfIOuw6eu8q%25LAlmPkfeSvg3%25n3IaGuyO3T7KFkuX9A4khYafO",
        speed: "296km/h",
        acceleration: "3.2s",
        quartermile: "10.9s",
        fuel:"13.4L/100km",
        power:"386kW/525PS",
        year:"2023"
    },
    {
        name: "Porsche 911 Dakar",
        imageUrl: "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO3A7KMD2GhQ52gogfNPKKyXc1kQ9%25tWhfIjMREDrxACO8uJWRaVWCAxFH2OEewVP3TexLeuqXWIJeBgf%25oWjrHwo0nq8J",
        speed: "240km/h",
        acceleration: "3.4s",
        quartermile: "14.6s",
        fuel:"11.3L/100km",
        power:"353W/480PS",
        year:"2023"
    },
    {
        name: "Porsche 911 S/T",
        imageUrl: "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO9Uo60KBbhQ5pHGgfNatt0DyEPkT89EWPikIK3aBCrQ%25MZouYUk6paV1maolzX2csLvnmnwiRzGR6U%25arpRZ0Djvaxu2evTEUkp",
        speed: "300km/h",
        acceleration: "3.7s",
        quartermile: "10.9s",
        fuel:"13.4L/100km",
        power:"386kW/525PS",
        year:"2023"
    },

    



]

const inputEl = document.getElementById("search")

function searchMovies() {

   let result =  cars.filter((movie)=>{

        return movie.name.toUpperCase().includes(inputEl.value.toUpperCase());
    
    })

    displayMovies(result)

}

function red() {

} 
function white() {

}
function black(){

}
function grey(){

}





const display = document.getElementById("field")


function displayCars(data){
    let string = ''
    for(let i = 0; i < data.length; i++){
        string += `
            <div class="car">
                <div>
                    <div class="overlay">
                            <h2>${data[i].name}</h2>
                        </div>
            
                        <img src="${data[i].imageUrl}" alt="" width="100%">
                        
                </div>
                

                <div class="p">
                    <span>top speed :<span class="bold">${data[i].speed}</span></span>
                    <span>0-100 km/h : <span class="bold">${data[i].acceleration}</span></span>
                    <span>1/4 mile : <span class="bold">${data[i].quartermile}</span></span>
                    <span>Fuel : <span class="bold">${data[i].fuel}</span></span>
                    <span>Power : <span class="bold">${data[i].power}</span></span>
                    <span>Year:<span class="bold">${data[i].year}</span></span>
                    
                    <div class="color-picker">
                    
                        <span onclick="red()" class="red">.</span>
                        <span onclick="white()" class="white">.</span>
                        <span onclick="black()" class="black">.</span>
                        <span onclick="grey()" class="grey">.</span>
                        
                    </div>
                </div>
        
                
            </div> 
        `
    }

    display.innerHTML = string
}

displayCars(cars);


window.addEventListener("keyup", (e)=>{
    if(e.key == "Enter"){
        searchMovies()
    }

})

