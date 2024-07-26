//let isdobopen=false;
let dateofbirth;
const settingicon=document.getElementById("icon");
const settingcontent=document.getElementById("settingContent");
const initialText=document.getElementById("initial");
const afterdobbtn=document.getElementById("afterdobbutton");
const dobbuttontxt=document.getElementById("dobbutton");
const dobinput=document.getElementById("dob");



const yearEl=document.getElementById("year");
const monthEl=document.getElementById("month");
const dayEl=document.getElementById("day");
const hourEl=document.getElementById("hour");
const minuteEl=document.getElementById("minute");
const secondEl=document.getElementById("second");

const makeTwodigitnumber = (number) => {
    return number > 9 ? number : `0${number}`;

};





//used for only setting icon which is used like toggle
const toggleDateofbirth = () => {
    settingcontent.classList.toggle("hide");
    // if(isdobopen){
    //     settingcontent.classList.add("hide");
    // }else{
    //     settingcontent.classList.remove("hide");


    // }
    // isdobopen = !isdobopen;
};

const updateage = () => {

    const currentDate = new Date();
    const datediff= currentDate-dateofbirth;
    const year=Math.floor(datediff/(1000*60*60*24*365));
    const month=Math.floor(datediff/(1000*60*60*24*365))%12;
    const day=Math.floor(datediff/(1000*60*60*24))%30;
    const hour=Math.floor(datediff/(1000*60*60))%24;
    const minutes=Math.floor(datediff/(1000*60))%60;
    const second=Math.floor(datediff/(1000))%60;

    yearEl.innerHTML=makeTwodigitnumber(year);
    monthEl.innerHTML=makeTwodigitnumber(month);
    dayEl.innerHTML=makeTwodigitnumber(day);
    hourEl.innerHTML=makeTwodigitnumber(hour);
    minuteEl.innerHTML=makeTwodigitnumber(minutes);
    secondEl.innerHTML=makeTwodigitnumber(second);


    


};

const localstoragegetter = () =>{
    const year=localStorage.getItem("year");
    const month=localStorage.getItem("month");
    const date=localStorage.getItem("date");

    if(year && month && date){
        dateofbirth = new Date(year,month,date);
    }
    updateage();

};


const contentToggler = () =>{
    updateage();
    if(dateofbirth){

        initialText.classList.add("hide");
        afterdobbtn.classList.remove("hide");
        setInterval(()=>updateage(),1000);

    }else{
        afterdobbtn.classList.add("hide");
        initialText.classList.remove("hide");

    }

};


const setDOBHandler = () => {
    const dateString = dobinput.value;
    dateofbirth=dateString ? new Date(dateString) : null;

    
    
    if(dateofbirth){
        localStorage.setItem("year",dateofbirth.getFullYear());
        localStorage.setItem("month",dateofbirth.getMonth());
        localStorage.setItem("date",dateofbirth.getDate());


       
    }
        
    
    setInterval(()=>updateage(),1000);
    contentToggler();




};
localstoragegetter();
contentToggler();




settingicon.addEventListener("click",toggleDateofbirth);  
dobbuttontxt.addEventListener("click",setDOBHandler);   


//now we will used for timer
