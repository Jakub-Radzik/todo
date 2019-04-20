var input = document.querySelectorAll("input");
// input[0]- #task
// input[1]- #l1
// input[2]- #l2
// input[3]- #l3

  function addTask(){

      let taskTxt = `<span>${input[0].value}</span>`;
      let bgClass='';

      if(input[1].checked){
          bgClass='bg-info';
      } else if(input[2].checked){
          bgClass='bg-warning';
      }   else{
          bgClass='bg-danger';
      }

      let card = `
      <div class="card mb-3 ${bgClass}">
          <div class="card-body">
              <span onclick="this.parentElement.parentElement.style.display = 'none';" class="btn btn-danger border border-dark">&times;</span>
              ${taskTxt} 
          </div>
      </div>
      `;
      
      if(input[0].value){
          document.querySelector(".tasks").innerHTML+= card;
          document.querySelector(".hint").innerHTML="";
          input[0].value="";
      } else{
          document.querySelector(".hint").innerHTML="Write your task!"
      }

      
  }

  function save(x){

    localStorage.setItem("Tasks",'');

    switch(x){
      case 1:
        let newData = document.querySelector(".tasks").innerHTML;
        let oldData = localStorage.getItem('Tasks');
        let data = `${oldData}${newData}`
        localStorage.setItem('Tasks', data);
      break;
      case 2:
        localStorage.setItem('Tasks', document.querySelector(".tasks").innerHTML);
      break;
    }
  }

  function showSaved(x){

    if (typeof(Storage) !== "undefined") {
      if(localStorage.getItem("Tasks") != null){
        switch(x){

          case 1:
            document.querySelector(".tasks").innerHTML += localStorage.getItem('Tasks');
            localStorage.clear();
          break;

          case 2:
            document.querySelector(".tasks").innerHTML = localStorage.getItem('Tasks');
            localStorage.clear();
          break;

        }
      }
    }
  }

  function del(x){

    switch(x){
      case 1:
        document.querySelector(".tasks").innerHTML='';
      break;
      
      case 2:
        localStorage.clear();
      break;
    }
  }
  
  