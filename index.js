
const title = document.getElementById("input1");
const des = document.getElementById("input2");
const btn = document.getElementById("input");
show();

btn.addEventListener('click', function() {
  let nTitle = localStorage.getItem('nTitle');
  let nDes = localStorage.getItem('nDes');
let date = localStorage.getItem('date');
  if (nTitle == null) {
    t = [];
    d = [];
    td = [];

  } else {
    t = JSON.parse(nTitle);
    d = JSON.parse(nDes);
    td=JSON.parse(date);
}
  if (title.value === "") {
    alert("Please Enter title of notes!!!");
  } else {
    t.push(title.value);
    d.push(des.value);
    td.push(new Date().toDateString());
    localStorage.setItem("nTitle", JSON.stringify(t));
    localStorage.setItem("nDes", JSON.stringify(d));
    localStorage.setItem("date", JSON.stringify(td));
    title.value = "";
    des.value = "";
    show();
  }
});

function show() {
  let nTitle = localStorage.getItem('nTitle');
  let nDes = localStorage.getItem('nDes');
let date = localStorage.getItem('date');
  if (nTitle == null) {
    t = [];
    d = [];
    td = [];

  } else {
    t = JSON.parse(nTitle);
    d = JSON.parse(nDes);
    td=JSON.parse(date);

}
  let html = "";
  t.forEach((item, i) => {
    html += `<div class="col-lg-4 col-md-6"><div class="card" style="width: 25rem;">
      <div class="card-body">
        <h5 class="card-title">${item}</h5>
        <p class="card-text">${d[i]}</p>
        <input class="btn btn-danger" type="submit" name="" value="Delete" onclick="delete1(${i})">
        <input class="btn btn-secondary" type="submit" name="" value="Edit" onclick="edit(${i})">
        <p class="card-text"> ${td[i]}</p>
      </div>
    </div> </div>`
  });
  if (t.length != 0) {
    document.querySelector("#save p").innerHTML = "";
    document.querySelector("#yeah").innerHTML = html;
  } else {
    html = "<p>Nothing to Show!!! Use Add note Section to Create your Notes.</p>";
    document.querySelector("#save p").innerHTML = html;
    document.querySelector("#yeah").innerHTML ="";
  }
}

function delete1(index) {
  let nTitle = localStorage.getItem('nTitle');
  let nDes = localStorage.getItem('nDes');
let date = localStorage.getItem('date');
  if (nTitle == null) {
    t = [];
    d = [];
    td = [];

  } else {
    t = JSON.parse(nTitle);
    d = JSON.parse(nDes);
    td=JSON.parse(date);
}
  t.splice(index, 1);
  d.splice(index, 1);
  td.splice(index,1);
  localStorage.setItem("nTitle", JSON.stringify(t));
  localStorage.setItem("nDes", JSON.stringify(d));
  localStorage.setItem("date", JSON.stringify(td));
  show();
}
function edit(index) {
  title.value = t[index];
  des.value = d[index];
  delete1(index);
}
