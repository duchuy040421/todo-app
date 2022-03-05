function create({content="",type=""}){
    const other = document.getElementById(type);

    if(other){
        const task = document.createElement('div');

        task.onclick = function(e){
            create({content:content,type:type==='done'?'todo':'done'})
            other.removeChild(task);
        }

        task.classList.add('task');
        task.attributes.onclick = function moveto(){
            create({content:content,type:type})
        }
        task.innerHTML = 
        `<div class="task__body">
            <p>${content}</p>
         </div>`;

         other.appendChild(task);
           
    }


}

function addNew(){
    const content = document.getElementById('text-input');
    if(content.value !== ''){
        create({content:content.value,type:'todo'});
        content.value = '';
    }
}



