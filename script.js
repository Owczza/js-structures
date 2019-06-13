/****************************************************************************************************
 Część 5 Kolekcje:

 Do wykonania tego zadania musisz wykonać pobrania zawartości pliku data.json

 5.1 Wykonaj funkcje, która zwróci jedynie osoby z podaną rasą w argumencie.
 Input: showOnlyUsersWithRace('Cambodian')
 Output: '5.1: [{id: 8, first_name: "Garvey", last_name: "Islep", email: "gislep7@nps.gov", gender: "Male", …}]'
 Input: showOnlyUsersWithRace(1)
 Output: '5.2: taka rasa nie istnieje'
 Input: showOnlyUsersWithRace('Polish')
 Output: '5.3: []'

 5.2 Wyświetl każdego z userów w konwencji: title first_name last_name work as job_title in company.
 Output:
 Rev Kaylil Hovey work as Recruiting Manager in Browseblab
 Rev Cesare Caroline work as Computer Systems Analyst II in Wordtune
 Mr Xaviera Danilchenko work as Statistician IV in Rhynyx
 Honorable Shandy Sanford work as Data Coordiator in Topdrive
 Honorable Muire Pothecary work as Executive Secretary in Realbridge
 Ms Mano Gwatkins work as Automation Specialist IV in InnoZ
 Honorable Frederica Shackleton work as Help Desk Operator in Yoveo
 Mr Garvey Islep work as Internal Auditor in Livefish
 Rev Aristotle Gozard work as Software Test Engineer IV in Feedspan
 Honorable Bryon Boulder work as Senior Editor in Kazu

 5.3 Skróć zawartość kolekcji do kluczy id, first_name, last_name i dodaj nowy klucz full_name
 składający się z first_name i last_name.
 Output:
 [
 {id:1, first_name: "Kaylil", last_name: "Kaylil", full_name: "Kaylil Hovey"}
 {id:2 ,first_name: "Cesare", last_name: "Cesare", full_name: "Cesare Caroline"}
 {id:3 ,first_name: "Xaviera", last_name: "Xaviera", full_name: "Xaviera Danilchenko"}
 {id:4 ,first_name: "Shandy", last_name: "Shandy", full_name: "Shandy Sanford"}
 {id:5 ,first_name: "Muire", last_name: "Muire", full_name: "Muire Pothecary"}
 {id:6 ,first_name: "Mano", last_name: "Mano", full_name: "Mano Gwatkins"}
 {id:7 ,first_name: "Frederica", last_name: "Frederica", full_name: "Frederica Shackleton"}
 {id:8 ,first_name: "Garvey", last_name: "Garvey", full_name: "Garvey Islep"}
 {id:9 ,first_name: "Aristotle", last_name: "Aristotle", full_name: "Aristotle Gozard"}
 {id:10 ,first_name: "Bryon", last_name: "Bryon", full_name: "Bryon Boulder"}

 5.4 Wyświetl jedynie osoby, które mają co najmniej 30 lat i są kobietami w konwencji 'imię ma X lat'
 i na koniec wyświetl sumę ich lat.
 Output:
 Kaylil ma 33 lat
 Xaviera ma 55 lat
 Shandy ma 76 lat
 Frederica ma 89 lat
 Razem mają: 253 lat

 5.5  Dodaj do kolekcji dodatkowe klucze:
 height: wiek + 100
 weight: wiek + 10
 bmi: weight / (height/100) ^ 2
 Następnie zwróc tablie imion tych osób, które mają BMI w zakresie 18,5–24,99.
 Output: ["Kaylil", "Muire", "Aristotle", "Mano", "Bryon"]

 */

// Kod dla części 5 poniżej:

//5.1
function showOnlyUsersWithRace (Race) {
    //TODO lepiej przeniesc nte if na pcoztek, po co silnik ma wpierw robic filter
  let checkRace = userTable
    .filter(race => race.race === Race);
  if (typeof Race !== "string"){
    return "taka rasa nie istnieje"
  }
  return checkRace;
 }

 console.log("5.1: ", showOnlyUsersWithRace("Cambodian"));
 console.log("5.2: ", showOnlyUsersWithRace(1));
 console.log("5.3: ", showOnlyUsersWithRace("Polish"))

//5.2
var workerAndTitle = userTable
.forEach(user => console.log(user.title + " " + user.first_name + " " + user.last_name + " works as " + user.job_title + " at " + user.company));
 //TODO można uzyć backtick, niepotrzebna zmienna workerAndTItle

//5.3
var userIdentity = userTable
.map(user => ({id: user.id, first_name: user.first_name, last_name: user.last_name, full_name: user.first_name + " " + user.last_name}))


console.log(userIdentity);

//5.4
let womenOverThirty = userTable
  .filter(user => user.gender === "Female" && user.age > 30)
//TODO niepotrzebna zmienna womenDescription
let womenDescription = womenOverThirty
  .forEach(woman => console.log(woman.first_name + " ma " + woman.age + " lat")) 

let justAge = womenOverThirty
  .map(woman => woman.age)
  .reduce((acc, currentAge) => acc + currentAge)

console.log("Razem mają: ", justAge);

//5.5
userTable
  .forEach(user => {
    user["height"] = user.age + 100;
    user["weight"] = user.age + 10;
    user["bmi"] = user.weight / (user.height / 100) ^ 2;
  })
//TODO lepiej użyć map

let healthyBodies = userTable
  .filter(user => user.bmi >= 18.5 && user.bmi <= 34.99) // błąd w zadaniu. Aby wyszedł oczekiwany output trzeba zwiększyć zakres bmi do 34.99
    //TODO to nie jest błąd ^2 to nie jest do potęgi drugiej
  .map(user => user.first_name)

  console.log(healthyBodies);