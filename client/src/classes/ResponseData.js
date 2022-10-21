function notfound () {alert('nao achou')}
function sucess () {alert('achou')}

export class responseData {
      
 constructor(userObj) {

   const typesResponses = {
     response404: notfound,
     response200: sucess
   }

   typesResponses[userObj]()

   this.userObj = userObj;
 }

 setResponse(userObj) {
   this.userObj = userObj;
 }

 showLog(log) {
   return console.log(log)
 }

}