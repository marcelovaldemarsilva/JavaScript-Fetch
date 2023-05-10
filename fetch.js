const tabela= document.querySelector('.tabela tbody')
console.log(tabela)

let configObj={
  method:"GET",
  headers:{
    "Content-Type":"application/json",
    "Accept": "application/json"
  },
  // body:JSON.stringify({   
    
  // })
};

fetch("http://192.168.10.189:8789/mvservices/plano/listar/8",configObj)
.then(function (response){
  return response.json();
  
})
.then(api=>{
  console.log(api.planos[1])
  console.log(api.planos.length)
  const tamanho = api.planos; 
  for(i=0; i<tamanho.length;i++){
   // console.log(api.planos[i].id);
   tabela.innerHTML +="<tr>";
   tabela.innerHTML +=`<td>${api.planos[i].id}</td> <td>${api.planos[i].dsPlano}</td>`;
   tabela.innerHTML +="</tr>";
    
  }
 
})

