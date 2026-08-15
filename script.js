const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// เพิ่ม Facebook / TikTok / Google Maps ในส่วน Contact
const contactSection = document.querySelector('#contact .container');

if (contactSection) {
  const socialBox = document.createElement('div');
  socialBox.className = 'social-location-box';

  socialBox.innerHTML = `
    <div class="social-location-head">
      <p class="eyebrow">FOLLOW & LOCATION</p>
      <h3>ติดตามผลงานและดูที่ตั้งอู่ช่างออย</h3>
      <p>Facebook · TikTok · Google Maps</p>
    </div>

    <div class="social-location-links">
      <a class="social-link"
         href="https://www.facebook.com/share/1G5b8mvpBU/?mibextid=wwXIfr"
         target="_blank"
         rel="noopener noreferrer">
        <span>Facebook</span>
        <strong>JSK 51 อู่ช่างออย</strong>
      </a>

      <a class="social-link"
         href="https://www.tiktok.com/@oilnatthawutraksa"
         target="_blank"
         rel="noopener noreferrer">
        <span>TikTok</span>
        <strong>@oilnatthawutraksa</strong>
      </a>

      <a class="social-link"
         href="https://maps.app.goo.gl/nJhJUyC4hGmR8CHF6?g_st=ic"
         target="_blank"
         rel="noopener noreferrer">
        <span>Google Maps</span>
        <strong>ดูเส้นทางไปอู่</strong>
      </a>
    </div>

    <p class="workshop-address">
      📍 ซอยท่าหลา อำเภอถลาง ภูเก็ต 83110
    </p>
  `;

  contactSection.appendChild(socialBox);

  const style = document.createElement('style');
  style.textContent = `
    .social-location-box{
      grid-column:1/-1;
      margin-top:24px;
      padding:28px;
      border:1px solid #2b2b2b;
      border-radius:18px;
      background:linear-gradient(145deg,#151515,#0d0d0d);
    }

    .social-location-head h3{
      margin:0 0 6px;
      font-size:28px;
    }

    .social-location-head p{
      margin:0;
      color:#aaa;
    }

    .social-location-links{
      display:grid;
      grid-template-columns:repeat(3,1fr);
      gap:12px;
      margin-top:20px;
    }

    .social-link{
      display:flex;
      flex-direction:column;
      gap:4px;
      padding:18px;
      border:1px solid #333;
      border-radius:14px;
      background:#101010;
      transition:.2s transform,.2s border-color;
    }

    .social-link:hover{
      transform:translateY(-2px);
      border-color:#ffd400;
    }

    .social-link span{
      font-size:13px;
      color:#ffd400;
    }

    .social-link strong{
      font-size:18px;
      color:#fff;
    }

    .workshop-address{
      margin:18px 0 0;
      color:#ddd;
      font-size:15px;
    }

    @media(max-width:700px){
      .social-location-links{
        grid-template-columns:1fr;
      }

      .social-location-box{
        padding:20px;
      }

      .social-location-head h3{
        font-size:23px;
      }
    }
  `;

  document.head.appendChild(style);
}

async function sendToLine(event){
  event.preventDefault();

  const name = document.getElementById('name').value.trim() || '-';
  const model = document.getElementById('model').value.trim() || '-';
  const issue = document.getElementById('issue').value.trim() || '-';

  const text = `จองคิวซ่อม JSK 51 อู่ช่างออย
ชื่อ: ${name}
รุ่นเจ็ตสกี: ${model}
อาการ: ${issue}
เบอร์ติดต่อร้าน: 066-0308970 / 097-2932186`;

  try{
    await navigator.clipboard.writeText(text);
    document.getElementById('formNote').textContent =
      'คัดลอกข้อความแล้ว ✓ เปิด LINE แล้ววางข้อความได้เลย';
  }catch(e){
    document.getElementById('formNote').textContent = text;
  }

  return false;
}
