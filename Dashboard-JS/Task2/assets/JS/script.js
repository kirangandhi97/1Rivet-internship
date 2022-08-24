const usresList = [
    {
        item:"Skippy Peanut Butter 16OZ",
        date:"08 Nov, 8:35pm",
        type:"Discarded",
        cost:"$40.27",
        last:"18 Aug",
        list:"Grocery",
        Auto:"No"
    },
    {
        item:"Skippy Peanut Butter 16OZ",
        date:"09 Nov, 8:35pm",
        type:"Want",
        cost:"$70.27",
        last:"18 Aug",
        list:"Grocery",
        Auto:"No"
    },
    {
        item:"Skippy Peanut Butter 16OZ",
        date:"08 Nov, 8:35pm",
        type:"Discarded",
        cost:"$40.27",
        last:"18 Aug",
        list:"Grocery",
        Auto:"No"
    },
    {
        item:"Skippy Peanut Butter 16OZ",
        date:"08 Nov, 8:35pm",
        type:"Discarded",
        cost:"$40.27",
        last:"18 Aug",
        list:"Grocery",
        Auto:"No"
    },
    {
        item:"Skippy Peanut Butter 16OZ",
        date:"08 Nov, 8:35pm",
        type:"Discarded",
        cost:"$40.27",
        last:"18 Aug",
        list:"Grocery",
        Auto:"No"
    },
    {
        item:"Skippy Peanut Butter 16OZ",
        date:"08 Nov, 8:35pm",
        type:"Discarded",
        cost:"$40.27",
        last:"18 Aug",
        list:"Grocery",
        Auto:"No"
    },
    {
        item:"Skippy Peanut Butter 16OZ",
        date:"08 Nov, 8:35pm",
        type:"Discarded",
        cost:"$40.27",
        last:"18 Aug",
        list:"Grocery",
        Auto:"No"
    },
        
]


// const userTable = document.querySelector("#myTable");

buildTable(usresList);
function buildTable(data){
    var table = document.getElementById("myTable")

    for( var i = 0; i< data.length; i++){
        var row = `<tr>
                        <td>${data[i].item}</td>
                        <td>${data[i].date}</td>
                        <td>${data[i].type}</td>
                        <td>${data[i].cost}</td>
                        <td>${data[i].last}</td>
                        <td>${data[i].list}</td>
                        <td>${data[i].Auto}</td>
                  </tr>`
             table.innerHTML += row
    }
}



//Get Data
// function getData(data) {
//     data.forEach((user) => {

//         const tRow = document.createElement('tr');
//         console.log(tRow);
//         for (item in user) {
//             const tcolumn = document.createElement('td');
//             // console.log(tcolumn);
//             // const value = user[item];
//             // console.log(value);
//             tcolumn.textContent = user[item];
//             tRow.appendChild(tcolumn)
//         }
//         userTable.appendChild(tRow);
//     });

// }

// getData(usresList);



// filter data
// const searchFunc = () =>{
//     let filter = document.getElementById('myInput').ariaValueMax.toUpperCase();
// }
