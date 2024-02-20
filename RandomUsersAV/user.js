//Asincrono 
// Esperar a que se ejecute por completo una instrucción,sin obstruir
// el hilo de procesos.


/*
    Formas de manejar la sincronia:
    1.Callbacks ->Desuso!!!
    2. Promesas
    3. Async / Await -> La mejor opción
*/

//CALLBACKS
/*
    function getUsersWithCallback(callback){
        fetch('https://randomuser.me/api/')//Consulta a un Endpoint
        .then(Response =>Response.json())// Traducir a entender json
        .then(data => {
            const {results} = data;//Desustructurar un objeto
            
            callback(null,results)//1.Error / 2.Respuesta
        })
        .catch(error =>  {
            console.error(error)
            callback(error,null)
        })
    }
    getUsersWithCallback((error,results) =>{
        if(error ) console.error(error)
         const name = document.getElementById('name')
        const surname = document.getElementById('surname')
        const phone = document.getElementById('phone')
        for (const user of results) {
            name.innerText = user.name.first
            surname.innerText = user.name.last
            phone.innerText = user.phone
        }
        console.log(typeof results)
 
    })
    */ 
//PROMESAS
/*

const getUserWhitPromise = ()=>{
    return new Promise((resolve,reject)=>{
        fetch('https://randomuser.me/api/')//Consulta a un Endpoint
        .then(Response =>Response.json())// Traducir a entender json
        .then(data =>{
            const{results} = data
            resolve(results)
        })
        .catch(error => reject(error))
    })
}
getUserWhitPromise()
    .then(results =>{
        const name = document.getElementById('name')
        const surname = document.getElementById('surname')
        const phone = document.getElementById('phone')
        for (const user of results) {
            name.innerText = user.name.first
            surname.innerText = user.name.last
            phone.innerText = user.phone
        }
    })
    .catch(error => console.error(error))
*/

//ASYNC / AWAIT
const getUsersWithaAsync = async ()=>{
    try {
        const response = await fetch('https://randomuser.me/api/?results=10') //automaticamento lo guarda en la constante
        const {results} = await response.json() //desestructuro y lo parseo
        const tabla = document.getElementById('tabla')
        for (const user of results) {
            tabla.innerHTML += `
                <tr>
                    <th>${user.name.first}</th>
                    <th>${user.name.last}</th>
                    <th>${user.phone}</th>
                </tr>
                `
        }
    } catch (error) { 
        console.error(error)
    }
}
function CrearFila(){
   
}
getUsersWithaAsync()



