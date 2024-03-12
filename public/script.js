const BASE_URL = 'http://localhost:3000/';

async function makeCall(){
    let number = document.getElementById('number').value;
    let name = document.getElementById('name').value;
    let voice = document.getElementById('voice').value;
    if(!number || number == ''){
      alert("You must enter a phone number");
    } else {
      let url = BASE_URL + 'call?number='+encodeURIComponent(number.replaceAll('-', '').replaceAll(' ', ''))+'&name='+encodeURIComponent(name) + '&voice='+voice;
      const response = await fetch(url);
      const jsonData = await response.json();
      if(jsonData.success = true){
        document.getElementById('submit').innerHTML = 'Calling...';
      } else {
        
      }
    }
}