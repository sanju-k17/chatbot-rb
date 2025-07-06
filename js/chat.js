// ----- DOM refs -----
const log    = document.getElementById('log');
const input  = document.getElementById('msg');
const sendBtn= document.getElementById('sendBtn');

// ----- send message -----
async function sendMsg(){
  const text = input.value.trim();
  if(!text) return;
  addLine(text,'user'); input.value='';
  const res = await fetch('/chat',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({message:text})
  });
  const data = await res.json();
  addLine(data.reply,'bot');
}

// ----- utilities -----
function addLine(text,cls){
  const p=document.createElement('p');
  p.className=cls; p.textContent=(cls==='user'?'You: ':'Bot: ')+text;
  log.appendChild(p); log.scrollTop=log.scrollHeight;
}

// ----- event listeners -----
sendBtn.addEventListener('click', sendMsg);
input.addEventListener('keydown', e=>{if(e.key==='Enter') sendMsg();});
