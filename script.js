const toggle=document.querySelector('.mobile-toggle');
const links=document.querySelector('.links');
toggle?.addEventListener('click',()=>links.classList.toggle('open'));
document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));

document.getElementById('enquiryForm')?.addEventListener('submit',function(e){
 e.preventDefault();
 const f=new FormData(this);
 const msg=`Hi NTR1M Skate Academy! I'd like to enquire about lessons.

My name: ${f.get('name')||'-'}
Participant: ${f.get('participant')||f.get('name')||'-'}
Age: ${f.get('age')||'-'}
Experience: ${f.get('experience')||'-'}
Area / postal code: ${f.get('area')||'-'}
Programme: ${f.get('programme')||'-'}
Preferred schedule: ${f.get('schedule')||'-'}
Goals / message: ${f.get('goals')||'-'}`;
 window.open('https://wa.me/6596187518?text='+encodeURIComponent(msg),'_blank');
});