const food = {
   name:'pizza',
   type:'fastfood',
   price:'150$',
   delivertime:'30min',
   rate:'5',
   comments:[],
   isready: false,
   ispremium: true,
}
const comment ={
   auther:'John,Jack,Anna',
   date='',
   rate:'2.3',
   text:'',
}
function food() {
   return {
      name,
      type,
      price,
      move (){}

   }
   
}
function order(ispremium) {
   if (ispremium === true) {
      console.log(0.8 * price,rate);    
   }
   else 
   console.log(price,rate);
   
}
function creatComment(ispremium) {
 comment =[]
comments=comment;
   
}
function setRate(rate) {
 rates=avg.rate
   
}
function order(comment) {
  
   
}

function Food(name,type ,price ,delivertime ,isready) {
   this.name= name,
   this.type= type,
   this.price= price,
   this.rate=rate,
   this.isready=isready,
   this.craetcomment= function(auther, rate , text) {
      return {
         auther,
       date,
       rate,
       text,
         date=new date,
         
   
      }
   },
   
this.comment=[];
this.delivertime= delivertime;
}
const pizza = new Food (name:'mix' ,type:'fastfood',price:'150$', isready:false,delivertime:30 )
pizza.craetcomment(auther:'kimi', text:'good')