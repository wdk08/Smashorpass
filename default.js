/* =========================
   GLOBAL STATE
========================= */
let gender = "Female";
let peopleJSON = null;

/* =========================
   LOAD PEOPLE DATA
========================= */
function loadPeopleData(callback){
  if(peopleJSON){
    callback();
    return;
  }

  fetch("people.json")
    .then(r => r.json())
    .then(data => {
      peopleJSON = data;
      callback();
    });
}

/* =========================
   GENDER TOGGLE
========================= */
function switchGender(g){
  if(g === gender) return;
  gender = g;
  updateGenderButtons();

  if(typeof startGame === "function"){
    startGame(); // each game defines its own
  }
}

function updateGenderButtons(){
  const f = document.getElementById("femaleBtn");
  const m = document.getElementById("maleBtn");

  if(!f || !m) return;

  f.classList.toggle("active", gender === "Female");
  m.classList.toggle("active", gender === "Male");
}

/* =========================
   HELPER: GET CURRENT POOL
========================= */
function getPeopleByGender(){
  if(!peopleJSON) return {};
  return peopleJSON[gender] || {};
}
