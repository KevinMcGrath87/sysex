const sysexHeader = [0xF0, 0x07, 0x00, 0x78, 0x14, 0x09];
const endSysex = [0x7F, 0xF7]

const edit = 0x20;
const f1 = 0x22;
// const f2 = ;
// const f3 = ; 
// const f4 = ;
// const f5 = ;
// const f6 = ; 
// const exit = ;
let sysexMessage = null;







if (navigator.requestMIDIAccess) {
  navigator.requestMIDIAccess().then(success, failure);
}


function success (midiAccess){
  midiAccess.addEventListener('statechange', updateDevices);

  const inputs = midiAccess.inputs;
  const inputSelect = document.getElementById('selectInport')
  
  inputs.forEach(input => {
    let option = input.name;
    let inPort = document.createElement('option');
    inPort.textContent = option;
    inputSelect.appendChild(inPort)
    input.addEventListener('midimessage', handleInput);

  })

  const outputs = midiAccess.outputs;
  const outputSelect = document.getElementById('selectOutport')
  outputs.forEach(output => {
    let option = output.name;
    let outputPort = document.createElement("option");
    outputPort.textContent = option;
    outputPort.id = option;  
    outputSelect.appendChild(outputPort)
    output.addEventListener('change', setOutPort)
    
    
  })

  const buttons = document.querySelectorAll('.button')
  buttons.forEach(button => {
    button.addEventListener('click', handleButton)
  });

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => {
    key.addEventListener('click', playNote);
  });

  
  }

function updateDevices(event){

  //  console.log(
  //    `
  //    Name:  ${event.port.name}
  //    Brand: ${event.port.manufacturer} 
  //    State: ${event.port.state}
  //    Type: ${event.port.type}
  //    Sysex: ${event.port}
  //    `   
  //   )
}
function failure(){
  alert('could not connect')
}

//select MIDI outport
const setOutPort = (outport) =>{
  console.log(outport)
}




const handleInput = (input) => {
  const command = input.data[0];
  const note = input.data[1];
  const velocity = input.data[2];
  

  switch (command) {
    case 144: //note on 
    if (velocity > 0) {
      noteOn(note, velocity)
    } else {
      noteOff(note, velocity);
    }
    break;
    case 128: //noteoff
      noteOff(note, velocity);
      break;
  }
}

//callback functions 
const handleButton = (event) => {
  const id = event.target.id;
    console.log(id)
  }
  

outlets = 1;

let cctls = [
  {name: "VCO 1 PITCH", cc: 34 }
];

function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInt.local = 1;

function anything(val){
  let name = messagename;
  for (c in cctls){
    let param = cctls[c];
  }
  if (param.name) {
    if (val === undefined){
      let getRandomInt = (0, 127);
    }
    outlet(0, val, param.cc);
  }
}


  

  
  
  



  



const noteOn = (note, velocity) => {
  console.log(note, velocity)

  
}
const playNote =(event)=>{
  console.log(event.target)
}

const noteOff = (note, velocity) => {
  console.log(note, velocity)
}

const handleOutput = () => {
  console.log('here')
}

