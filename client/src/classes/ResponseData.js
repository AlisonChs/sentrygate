
// Erros internos/externos
import { Unavaiable } from '../hooks/responses/Unavailable';
import { InternalSeverError } from '../hooks/responses/InternalServerError';
import { GatewayTimeout } from '../hooks/responses/GatewayTimeout';
import { Forbidden } from '../hooks/responses/Forbidden';

export class responseData {
      
 constructor (
  
  // Códigos simples para formulários
    userObj,
    sucess, 
    notfound,
    found,

 ) {

   const typesResponses = {
     response404: notfound,
     response200: sucess,
     response302: found,
     response403: Forbidden,
     response503: Unavaiable,
     response504: GatewayTimeout,
     response500: InternalSeverError 
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