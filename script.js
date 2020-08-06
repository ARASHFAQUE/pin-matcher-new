function generateBtnClicked(){
    const generatePin = (Math.random() * 9000);
    const pin = 1000 + parseInt(generatePin);
    document.getElementById('generate-pin').value = pin;
}
function inputNum(num){
    let existingNum = document.getElementById('numberInput').value;
    document.getElementById('numberInput').value = existingNum + num;
}
function pinSubmit(){
    let generatedPin = document.getElementById('generate-pin').value;
    let inputtedPin = document.getElementById('numberInput').value;
    if(generatedPin == inputtedPin){
        document.getElementById('rightPin').style.display = "block";
        document.getElementById('wrongPin').style.display = "none";

    }
    else{
        document.getElementById('wrongPin').style.display = "block";
        document.getElementById('rightPin').style.display = "none";

        tryLeft()
    }
}
function tryLeft(){
    const tryLeftNumber = document.getElementById('try-left');
    const tryLeftValue = parseFloat(tryLeftNumber.innerText);
    const remainingTry = tryLeftValue - 1;
    if(remainingTry > 0){
        tryLeftNumber.innerText = remainingTry;
    }
    else{
        document.getElementById('submit-button').style.display = "none";
        document.getElementById('only-para').innerText = `Too Many Attempts
        Try Again Later`;  
    }
}
function deleteAll(){
    document.getElementById('numberInput').value = "";
}
function deleteOneByOne(){
    let current = document.getElementById('numberInput').value;
    if(current != ''){
        document.getElementById('numberInput').value = (current.slice(0,-1));
    }
}