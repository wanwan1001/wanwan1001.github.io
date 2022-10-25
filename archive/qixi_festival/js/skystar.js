// poem
var words=[
    '有趣的设计民工',
    '常年跨学科人士',
    '设计是会坚持一辈子的事情',
    '因为热爱',
    '用匠心 做设计',
    '用设计的方法打造理想的用户体验',
    '想成为牛逼的设计师',
    '为用户体验设计的未来而努力'
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-45,15)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let text = document.querySelector('.text').querySelector('h1');
      setTimeout(function(){
        textone.innerHTML = 'Linning\'s UX Design';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = 'Bad Script'
          text.innerHTML = '';
      },28000)


 
