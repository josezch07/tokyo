let menu = document.getElementById("menu")
let bars =document.getElementById("bars")
 
  bars.style.color ="rgb(247, 247, 12)"
 menu.style.right="-100%"
bars.onclick = ()=>{
    if(menu.style.right=="-100%"){
        menu.style.right="-0"
        bars.style.color= "#000"
    }else{
        menu.style.right="-100%"
        bars.style.color ="rgb(247, 247, 12)"
    }
}
let next =document.getElementById("next")
let bg =document.getElementById("bg")
let prev = document.getElementById("prev")
let hText = document.getElementById("hText")
let pText = document.getElementById("pText")
     
 bg.style.backgroundImage = "url(IMG/4.jpg)"
   let arreglo = [`IMG/4.jpg`,
   `IMG/2.jpg`,
   `IMG/3.jpg`,
   `IMG/1.jpg`]
    
   
   
  let i = 0
  
next.onclick = ()=>{
    if(i < 3){
bg.style.backgroundImage = 'url("'+arreglo[i+1]+'")';
i++;
if(bg.style.backgroundImage == 'url("'+arreglo[0]+'")'){
    hText.innerHTML = "Shibuya CROSSING"
    pText.innerHTML = "Shibuya Crossing is best known for the incredible 'scamble' that occurs every time the traffic lights turn red, stopping all vehicles in every direction to allow a huge wave of pedestrians to flood into the intersection for a few moments.<br><br> Tokyo's Shibuya Crossing: At peak times, thousands of pedestrians scramble across what's believed to be the world's busiest crosswalk. Its popularity is easily explained. Along with Shinjuku Station, the district's Shibuya Station bears the honor of being one of the world's busiest train stations."
}
if(bg.style.backgroundImage == 'url("'+arreglo[1]+'")'){
    hText.innerHTML = "HARAJUKU"
    pText.innerHTML = "Harajuku is a Tokyo neighborhood best known for its bright colors and trendy shops. It is where Japan's kawaii culture began and continues to thrive. Harajuku is full of cafes and apparel stores with creative pop-culture vibes such as the Kawaii Monster Cafe Harajuku."
}
if(bg.style.backgroundImage == 'url("'+arreglo[2]+'")'){
    hText.innerHTML = "Tokyo Tower"
    pText.innerHTML = "At the base of the tower, you'll find a shopping complex called Foot Town, which features an array of international shops and restaurants, and even an aquarium and an anime theme park. Due to construction work, one side of the main observation deck (the lower deck) will be closed through late 2019."
}
if(bg.style.backgroundImage == 'url("'+arreglo[3]+'")'){
    hText.innerHTML = "Tokyo SKY TREE"
    pText.innerHTML = "With a whopping height of 634 meters, Tokyo Skytree was recognized as the world's tallest tower by Guinness World Records on November 11, 2011. It took over the function of Tokyo's central radio tower, a position formerly held by Tokyo Tower since 1958.<br><br> Tokyo Sky Tree was designed by the Nikken Sekkei architectural firm, and construction began in 2008. A core column of reinforced concrete, encasing elevator shafts and an emergency staircase, is surrounded by a framework of steel tubes."
}


}

prev.onclick = ()=>{

if(i > 0){
bg.style.backgroundImage = 'url("'+arreglo[i-1]+'")';

i--;
if(bg.style.backgroundImage == 'url("'+arreglo[0]+'")'){
    hText.innerHTML = "Shibuya CROSSING"
    pText.innerHTML = "Shibuya Crossing is best known for the incredible 'scamble' that occurs every time the traffic lights turn red, stopping all vehicles in every direction to allow a huge wave of pedestrians to flood into the intersection for a few moments.<br><br> Tokyo's Shibuya Crossing: At peak times, thousands of pedestrians scramble across what's believed to be the world's busiest crosswalk. Its popularity is easily explained. Along with Shinjuku Station, the district's Shibuya Station bears the honor of being one of the world's busiest train stations."
}
if(bg.style.backgroundImage == 'url("'+arreglo[1]+'")'){
    hText.innerHTML = "HARAJUKU"
    pText.innerHTML = "Harajuku is a Tokyo neighborhood best known for its bright colors and trendy shops. It is where Japan's kawaii culture began and continues to thrive. Harajuku is full of cafes and apparel stores with creative pop-culture vibes such as the Kawaii Monster Cafe Harajuku."
}
if(bg.style.backgroundImage == 'url("'+arreglo[2]+'")'){
    hText.innerHTML = "Tokyo Tower"
    pText.innerHTML = "At the base of the tower, you'll find a shopping complex called Foot Town, which features an array of international shops and restaurants, and even an aquarium and an anime theme park. Due to construction work, one side of the main observation deck (the lower deck) will be closed through late 2019."
}
if(bg.style.backgroundImage == 'url("'+arreglo[3]+'")'){
    hText.innerHTML = "Tokyo SKY TREE"
    pText.innerHTML = "With a whopping height of 634 meters, Tokyo Skytree was recognized as the world's tallest tower by Guinness World Records on November 11, 2011. It took over the function of Tokyo's central radio tower, a position formerly held by Tokyo Tower since 1958.<br><br> Tokyo Sky Tree was designed by the Nikken Sekkei architectural firm, and construction began in 2008. A core column of reinforced concrete, encasing elevator shafts and an emergency staircase, is surrounded by a framework of steel tubes."
}

}
}    
    
}
window.addEventListener('scroll', function(){
const navbar =document.getElementById('navbar')
navbar.classList.toggle("sticky", window.scrollY > 0)
if(window.scrollY > 0){
    bars.style.color = "#000"
}
if(window.scrollY == 0){
    bars.style.color ="rgb(247, 247, 12)"
}
})
