const menuBtn=document.querySelector('.menu-btn');
const navLinks=document.querySelector('.nav-links');
menuBtn?.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.nav-links a').forEach(link=>link.addEventListener('click',()=>navLinks.classList.remove('open')));
async function sendToLine(event){event.preventDefault();const name=document.getElementById('name').value.trim()||'-';const model=document.getElementById('model').value.trim()||'-';const issue=document.getElementById('issue').value.trim()||'-';const text=`จองคิวซ่อม JSK 51 อู่ช่างออย\nชื่อ: ${name}\nรุ่นเจ็ตสกี: ${model}\nอาการ: ${issue}\nเบอร์ติดต่อร้าน: 066-0308970 / 097-2932186`;try{await navigator.clipboard.writeText(text);document.getElementById('formNote').textContent='คัดลอกข้อความแล้ว ✓ เปิด LINE แล้ววางข้อความได้เลย';}catch(e){document.getElementById('formNote').textContent=text;}return false;}
