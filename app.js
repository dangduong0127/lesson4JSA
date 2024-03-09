// const btn_submit = document.getElementById("button");
// const inputVL = document.getElementById("input");
// const todo = document.getElementById("todo");
// const checkbox = document.getElementById("myCheckbox");

// let myArr = JSON.parse(localStorage.getItem("Todolist")) || [];

// btn_submit.addEventListener("click", function (e) {
//   e.preventDefault();

//   if (inputVL.value == "") {
//     alert("No Value ❌");
//   } else {
//     myArr.push(inputVL.value);
//     inputVL.value = "";
//     localStorage.setItem("Todolist", JSON.stringify(myArr));
//     render(myArr);
//   }
// });
// render(myArr);

// function render(Arr) {
//   todo.innerHTML = null;
//   for (let i in Arr) {
//     todo.innerHTML += `
//       <li>${Arr[i]}<div class="li-inner"><input type="checkbox" id="myCheckbox"><input id="delete-btn" onclick="Delete('${Arr[i]}')" type="button" value="X">
//       </div></li>
//     `;
//   }
// }

// function Delete(id) {
//   let search = [];
//   for (let i in myArr) {
//     if (myArr[i] == id) {
//       const answer = confirm("ban co that su muon xoa?");
//       // console.log(answer);
//       if (answer == true) {
//         delete myArr[i];
//       } else {
//         return;
//       }
//     } else {
//       search.push(myArr[i]);
//     }
//   }
//   render(myArr);
//   localStorage.setItem("Todolist", JSON.stringify(search));
// }

const btn_submit = document.getElementById("button");
const inputVL = document.getElementById("input");
const todo = document.getElementById("todo");

let myArr = JSON.parse(localStorage.getItem("Todolist")) || [];

btn_submit.addEventListener("click", function (e) {
  e.preventDefault();

  if (inputVL.value == "") {
    alert("No Value ❌");
  } else {
    myArr.push({ task: inputVL.value, completed: false }); // Thêm một đối tượng mới với trường completed
    inputVL.value = "";
    localStorage.setItem("Todolist", JSON.stringify(myArr));
    render(myArr);
  }
});

render(myArr);

function render(Arr) {
  todo.innerHTML = null;
  for (let i in Arr) {
    const task = Arr[i].task;
    const completed = Arr[i].completed
      ? 'style="text-decoration: line-through;"'
      : ""; // Thêm CSS nếu completed là true
    todo.innerHTML += `
      <li ${completed}>${task}<div class="li-inner"><input type="checkbox" onclick="toggleCompleted(${i})" id="checkbox_${i}" ${
      Arr[i].completed ? "checked" : ""
    }><input id="delete-btn" onclick="Delete(${i})" type="button" value="X">
      </div></li>
    `;
  }
}

function Delete(index) {
  const answer = confirm("Bạn có thực sự muốn xóa?");
  if (answer == true) {
    myArr.splice(index, 1); // Xóa phần tử khỏi mảng
    render(myArr);
    localStorage.setItem("Todolist", JSON.stringify(myArr));
  }
}

function toggleCompleted(index) {
  myArr[index].completed = !myArr[index].completed; // Đảo ngược giá trị completed
  render(myArr);
  localStorage.setItem("Todolist", JSON.stringify(myArr));
}
