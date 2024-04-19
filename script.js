const BTN_tra = document.querySelector('#travels');
const BTN_org = document.querySelector('#organization');
const BTN_emp = document.querySelector("#employees");
const Card_tra = document.querySelector('#card-tra');
const Card_org = document.querySelector('#card-org');
const Card_emp = document.querySelector('#card-emp');


const buttonHandler = (e) => {
    const id = e.target.id;


    switch(id) {
        case 'travels':  
          BTN_tra.classList.add("button-active");
          BTN_emp.classList.remove("button-active");
          BTN_org.classList.remove("button-active");

        Card_tra.classList.remove(...Card_tra.classList);
        Card_tra.classList.add("product-card","card-active");
        Card_emp.classList.remove(...Card_emp.classList);
        Card_emp.classList.add("product-card", "card-3");
        Card_org.classList.remove(...Card_org.classList);
        Card_org.classList.add("product-card", "card-2");
          break;
      
        case 'organization':  
        BTN_tra.classList.remove("button-active");
        BTN_emp.classList.remove("button-active");
        BTN_org.classList.add("button-active");

        Card_org.classList.remove(...Card_org.classList);
        Card_org.classList.add("product-card","card-active");
        Card_emp.classList.remove(...Card_emp.classList);
        Card_emp.classList.add("product-card", "card-2");
        Card_tra.classList.remove(...Card_tra.classList);
        Card_tra.classList.add("product-card", "card-3");
          break;
      
          case 'employees':  
          BTN_tra.classList.remove("button-active");
          BTN_emp.classList.add("button-active");
          BTN_org.classList.remove("button-active");

        Card_emp.classList.remove(...Card_emp.classList);
        Card_emp.classList.add("product-card","card-active");
        Card_org.classList.remove(...Card_org.classList);
        Card_org.classList.add("product-card", "card-2");
        Card_tra.classList.remove(...Card_tra.classList);
        Card_tra.classList.add("product-card", "card-3");
          break;
      }
    
}


BTN_tra.addEventListener("click", buttonHandler);
BTN_org.addEventListener("click", buttonHandler);
BTN_emp.addEventListener("click", buttonHandler);