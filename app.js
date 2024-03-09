const btn_submit = document.getElementById("button");
const inputVL = document.getElementById("input");
const todo = document.getElementById("todo");

let myArr = JSON.parse(localStorage.getItem("Todolist")) || [];

btn_submit.addEventListener("click", function (e) {
  e.preventDefault();

  if (inputVL.value == "") {
    alert("No Value ❌");
  } else {
    myArr.push(inputVL.value);
    inputVL.value = "";
    localStorage.setItem("Todolist", JSON.stringify(myArr));
    render(myArr);
  }
});
render(myArr);

function render(Arr) {
  todo.innerHTML = null;
  for (let i in Arr) {
    todo.innerHTML += `
      <li>${Arr[i]}<div class="li-inner"><input type="checkbox"><input id="delete-btn" onclick="Delete('${Arr[i]}')" type="button" value="X">
      </div></li>
    `;
  }
}

function Delete(id) {
  let search = [];
  for (let i in myArr) {
    if (myArr[i] == id) {
      const answer = confirm("ban co that su muon xoa?");
      // console.log(answer);
      if (answer == true) {
        delete myArr[i];
      } else {
        return;
      }
    } else {
      search.push(myArr[i]);
    }
  }
  render(myArr);
  localStorage.setItem("Todolist", JSON.stringify(search));
}
