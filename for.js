const button=document.querySelector('#put');
const result=document.querySelector('#result');

function puton(){
const text=document.querySelector('#text').value;
const number=document.querySelector('#number').value;
result.innerHTML='';
for(let i=0;i<number;i++){
    const p=document.createElement('p');//<p>タグを作っている
    p.textContent=text;
    result.appendChild(p);

}
}
button.addEventListener('click',puton);