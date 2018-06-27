// Questions Array
const questions=[
    {question:'Username'},
    {question:'Password',type:'password'},
    {question:'Please Pick A Person'}
];



//Transition Times
const shakeTime = 100; //Shake Transition Time
const switchTime = 200; //Transition Between Questions

//Init Position At First Question
let position=0;


//Init DOM Elements
const formBox = document.querySelector('#form-box');
const nextBtn = document.querySelector('#next-btn');
const prevBtn = document.querySelector('#prev-btn');
const inputGroup = document.querySelector('#input-group');
const inputField = document.querySelector('#input-field');
const inputLabel = document.querySelector('#input-label');
const inputProgress = document.querySelector('#input-progress');
const progress = document.querySelector('#progress-bar');
const options = document.querySelector('#options');
// EVENTS 

//Get Question on DOM Load
document.addEventListener('DOMContentLoaded',getQuestion);

//Next Button
nextBtn.addEventListener('click',validate)

//Inout Field Enter Click
inputField.addEventListener('keyup',e=>{
    if(e.keyCode==13){
            validate();
    }
})


// Functions
// Get Questions from array & add 
function getQuestion() {
//Get Current Question
inputLabel.innerHTML=questions[position].question;
//Get Current Type
inputField.type = questions[position].type || 'text';
//Get Current Answer
inputField.value = questions[position].answer || '';
//Focus On Element
inputField.focus();
console.log(position)

//Add Option
if(position == 2 ){
    options.style.display = 'inline';
    inputField.style.display='none';
    inputLabel.style.display='none';
    inputProgress.style.display='none'
}

//Set Progress Bar Width - Variable to position
progress.style.width= (position *100)/ questions.length +'%';

// Add User Icon OR Back Arrow Depending On Question
prevBtn.className= position ? 'fas fa-arrow-left' : 'fas fa-user';

showQuestions();


}

//Display Questions to User
function showQuestions(){
    inputGroup.style.opacity=1;
    inputProgress.style.transition='';
    inputProgress.style.width='100%';
}
//Hide Question From User
function hideQuestion(){
    inputGroup.style.opacity=0;
    inputLabel.style.marginLeft=0;
    inputProgress.style.width=0;
    inputProgress.style.transition='';
    inputGroup.style.border=null;
}

//Validate Field
function validate(){
    //Make sure pattern matches if there is one
    if(!inputField.value.match(questions[position].pattern || /.+/)){
        inputFail();
    }else{
        inputPass();
    }
}

// Transform To Createe Shake Motion
function transform(x,y){
    formBox.style.transform = `translate(${x}px,${y}px)`;

}

//Field Input Failed
function inputFail(){
    formBox.className='error';
  //Repeat Shake Motion - set i to number of shakes
for(let i=0;i<6;i++){
    setTimeout(transform,shakeTime*i,((i%2)*2-1)*20,0);
    setTimeout(transform,shakeTime * 6,0,0);
    inputField.focus()
}
}
//Field Input Passed
function inputPass(){
    formBox.className='';
    setTimeout(transform,shakeTime * 0,0,10);
    setTimeout(transform,shakeTime * 1,0,0);
    //Store Answer In Array
    questions[position].answer=inputField.value;

    //Increment Position
    position ++;
    // If New Question , Hide Current And Get Next
    if(questions[position]){
        hideQuestion();
        getQuestion();
    }else{
        // Remove If No More Questions
        hideQuestion();
        formBox.className='close';
        progress.style.width='100%';

        //Form Complete
        formComplete();
    }
}
//Form Complete
function formComplete(){
    const h1 = document.createElement('h1');
    h1.classList.add('end');
    h1.appendChild(document.createTextNode(`Thanks ${questions[0].answer} for Voting!`))
    setTimeout(() => {
        formBox.parentElement.appendChild(h1);
        setTimeout(()=>h1.style.opacity=1,50);
    },1000);
}