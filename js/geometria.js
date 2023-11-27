
//Perimetro y Area del cuadrado

const valueResult = document.getElementById('result');

const perimSquare = (side) => side * 4;
const areaSquare = (side) => side * side;

function calcularPerimSquare() {
    let inputSide = document.getElementById('inputSide');
    let value = Number(inputSide.value);

    const result = `El perimetro del Cuadrado es: ${perimSquare(value)} cm`;
    valueResult.innerText = result;
}

function calcularAreaSquare() {
    let inputSide = document.getElementById('inputSide');
    let value = Number(inputSide.value);

    const result = `El area del Cuadrado es: ${areaSquare(value)} cm^2`;
    valueResult.innerText = result;
}



//Perimetro y Area del triangulo

const perimTriangulo = (side1, side2, base) => {
    if (!side1 || !side2 || !base || side1 <= 0 || side2 <= 0 || base <= 0) {
        return 0;
    }
    return side1 + side2 + base;
};

const areaTriangulo = (base, height) => {
    if (!base || !height || base <= 0 || height <= 0) {
        return 0;
    }
    return (base * height) / 2;
};


function calcularPerimTriangulo(){
    let side1 = document.getElementById('inputSide1');
    let side2 = document.getElementById('inputSide2');
    let side3 = document.getElementById('inputSide3');
    side1 = Number(side1.value);
    side2 = Number(side2.value);
    side3 = Number(side3.value);

    const result = `El perimetro del Triangulo es: ${perimTriangulo(side1, side2, side3)} cm`;
    valueResult.innerText = result;
}

function calcularAreaTriangulo(){
    let base = document.getElementById('inputBase');
    let height = document.getElementById('inputHeight');
    base = Number(base.value);
    height= Number(height.value);


    const result = `El area del Triangulo es: ${areaTriangulo(base, height)} cm^2`;
    valueResult.innerText = result;
}


//Radio del circulo

const areaCirculo = (radio) => (radio * radio) * Math.PI;
const perimCirculo = (radio) => diamCirculo(radio) * Math.PI;
const diamCirculo = (radio) => radio*2;


function calcularDiametroCirculo(){
    let radio = document.getElementById('inputRadio');
    radio = Number(radio.value);

    const result = `El diametro del Circulo es: ${diamCirculo(radio)} cm^2`;
    valueResult.innerText = result;
}

function calcularPerimCirculo(){
    let radio = document.getElementById('inputRadio');
    radio = Number(radio.value);
    
    const result = `El perimetro del Circulo es: ${perimCirculo(radio)} cm^2`;
    valueResult.innerText = result;
}   

function calcularAreaCirculo(){
    let radio = document.getElementById('inputRadio');
    radio = Number(radio.value);

    const result = `El area del Circulo es: ${areaCirculo(radio)} cm^2`;
    valueResult.innerText = result;
}













