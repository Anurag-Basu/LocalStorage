const inpKey = document.getElementById('inpKey');
const inpVal = document.getElementById('inpVal');
const insertBtn = document.getElementById('insertBtn');
const lsOutput = document.getElementById('lsOutput');
const resetBtn = document.getElementById('resetBtn');

function fetchData(e){
    const key = inpKey.value;
    const value = inpVal.value;
    
    if(key && value){
        localStorage.setItem(key, value);
        location.reload();
    }
    
}

insertBtn.addEventListener('click', fetchData)

for(let i =0; i<localStorage.length; i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    lsOutput.innerHTML += `${key}: ${value} <br/> <br/>`;
}
function clearLocalStorage(){
    localStorage.clear();
    location.reload();
}


resetBtn.addEventListener('click', clearLocalStorage)
console.log(localStorage)