const list = document.createElement('ul')
  
/*data.map( d => d.model )
  .map( d => d[0].toUpperCase() + d.slice(1) )
  .forEach( d => {
    const li = document.createElement('li')
    li.innerText = d
    list.appendChild( li )
  })*/// FRONT-END (CLIENT) JAVASCRIPT HERE

const submit = async function( event ) {
  // stop form submission from trying to load
  // a new .html page for displaying results...
  // this was the original browser behavior and still
  // remains to this day
  event.preventDefault()
  
  const taskName= document.querySelector( '#taskName' ),
        dueDate= document.querySelector('#dueDate'),
        taskPriority= document.querySelector('#taskPriority')
  
        const json = { tasks: taskName.value , date: dueDate.value , priority: taskPriority.value };

        //console.log(json);

  fetch( '/submit', {
    method:'POST',
    body: JSON.stringify(json)

  }).then(async function (response){ //console.log(response)
    let data= await response.json()
    //console.log(data)


    //const list = document.createElement('ul')
    let resultListHTML = '';



const tableparse=document.querySelector('.my-table')
resultHTML = tableparse.innerHTML
for (const key in data) {
  if (data.hasOwnProperty(key)) {
    resultListHTML += '<tr>';
    resultListHTML += `<td>${data[key]['tasks']}</td>`;
    resultListHTML += `<td>${data[key]['date']}</td>`;
    resultListHTML += `<td>${data[key]['priority']}</td>`;
    resultListHTML += `<td> <button class="my-deletebutton" type="button" >Delete Item</button></td>`;
    resultListHTML += '</tr>';
    //console.log(data)
  }
}
tableparse.innerHTML= resultListHTML;


  /*const resultContainer = document.querySelector('#result');
  resultContainer.innerHTML = resultListHTML;
  resultContainer.appendChild(list);*/
      })
      
  }
  

const deletedata = document.createElement('button')

window.onload = function() {
   const button = document.querySelector("button");
  button.onclick = submit;
}