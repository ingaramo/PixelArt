var nombreColores = ['White', 'LightYellow',
'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
'LightGreen', 'PaleGreen', 'PaleTurquoise',
'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
'BlueViolet', 'DarkViolet', 'DarkOrchid',
'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];
let click;

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
const botonGuardar = document.getElementById('guardar');
botonGuardar.addEventListener('click',guardarPixelArt);


const preloadImg = document.querySelector('.imgs img');
$(".imgs img").click(function(){
  let idActual = this.getAttribute("id");
  console.log(idActual)
  cargarSuperheroe(eval(idActual))});



const botonBorrar = document.getElementById('borrar');
botonBorrar.addEventListener('click',borrar);
function borrar(){
  let $grilla = $('#grilla-pixeles').children().animate({ 'background-color': 'white'}, 2500);

}

colorPersonalizado.addEventListener('change', function() {
    console
    // Se guarda el color de la rueda en colorActual
    let colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    let colorDiv = document.getElementById('color-personalizado');
    colorDiv.style.backgroundColor = colorActual;
    let indicadorDeColor = document.getElementById('indicador-de-color');
    indicadorDeColor.style.backgroundColor = colorActual;
    }
  );

function generarPaleta(){
  for (let i = 0 ; i<nombreColores.length ; i++){
    let colorDiv = document.createElement('p');
    let nombreColor = nombreColores[i];
    let paleta = document.querySelector('#paleta');
    colorDiv.style.backgroundColor = nombreColor;
    colorDiv.className = 'color-paleta';
    colorDiv.addEventListener('click',seleccionarColorPaleta);
    paleta.appendChild(colorDiv);
    
    
  }
}
function crearGrilla (){
  for(let i = 0; i<1749 ; i++){
    let pixelDiv = document.createElement('div');
    let grillaPixeles = document.getElementById("grilla-pixeles");
    grillaPixeles.appendChild(pixelDiv);
    pixelDiv.addEventListener('mousedown',pintarPixel);
    pixelDiv.addEventListener('mouseup',function(){click=false});
    pixelDiv.addEventListener('mouseover',pintarEnMovimiento);  

    
  }
}
function seleccionarColorPaleta(){
  let color = this.style.backgroundColor //this hace referncia al div clickeado
  let indicadorDeColor = document.getElementById('indicador-de-color');
  indicadorDeColor.style.backgroundColor = color;
}
function pintarEnMovimiento(){
  if(click){
    let color = document.getElementById('indicador-de-color').style.backgroundColor;
    this.style.backgroundColor = color;  }
}
function pintarPixel(){
  let color = document.getElementById('indicador-de-color').style.backgroundColor;
  this.style.backgroundColor = color;
  click=true;  
  
}


crearGrilla();
generarPaleta();