// CERTIFICATE LINKS: paste your Google Drive sharing URLs between the quotes.
// Set each file's Google Drive access to "Anyone with the link" > "Viewer".
const certificateLinks = {
  dataAnalytics: "https://drive.google.com/file/d/1nrPnzqMBZwYXIK2yc1r8_H6AVoE54QOH/view?usp=drive_link",           // Data Analytics with Python
  machineLearning: "https://drive.google.com/file/d/1tbqSm23dda-8fzlWohqHyBEF28nwLa_X/view?usp=drive_link",         // Machine Learning Specialization
  customerRetention: "https://drive.google.com/file/d/16UvICI_vU4SQ_dH8Uz_ypfcDTCk7xAkY/view?usp=drive_link",       // Summer Projects '26: Customer Retention Strategy
  rProgramming: "https://drive.google.com/file/d/1U62DjVYt9R_Riq-uS2BKVqQjPypUOqxP/view?usp=drive_link",            // R Programming Fundamentals
  econometricModelling: "https://drive.google.com/file/d/1YQOOarjC8HZ_SNU4IWR0ipbPrSDLIvOH/view?usp=drive_link"     // Econometric Modelling
};

document.querySelectorAll('[data-certificate]').forEach(link => {
  const value = (certificateLinks[link.dataset.certificate] || '').trim();
  let url;
  try { url = new URL(value); } catch { return; }
  if (url.protocol !== 'https:') return;
  link.href = url.href;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.removeAttribute('aria-disabled');
  link.textContent = 'View certificate \u2197';
});


document.getElementById('year').textContent=new Date().getFullYear();
const menu=document.querySelector('.menu'),navigation=document.querySelector('.nav-links');menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));navigation.classList.toggle('open',open);});navigation.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navigation.classList.remove('open');menu.setAttribute('aria-expanded','false');}));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){navigation.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.focus();}});