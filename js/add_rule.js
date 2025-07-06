// ----- DOM refs -----
const patternInp = document.getElementById('pattern');
const replyInp   = document.getElementById('reply');
const statusTxt  = document.getElementById('status');
const saveBtn    = document.getElementById('saveBtn');

// ----- save rule -----
async function saveRule(){
  const pattern = patternInp.value.trim();
  const reply   = replyInp.value.trim();
  if(!pattern||!reply){alert('Both fields are required.');return;}

  const res = await fetch('/add-rule',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({pattern,reply})
  });
  const data = await res.json();
  statusTxt.textContent = data.message || 'Rule added.';
  patternInp.value=''; replyInp.value='';
}

// ----- event listeners -----
saveBtn.addEventListener('click', saveRule);
replyInp.addEventListener('keydown', e=>{ if(e.key==='Enter') saveRule(); });
