var res = fetch ("https://restcountries.com/v3.1/all");

res.then((data) => {
    return data.json();
}).then ((data1) => foo(data1))
.catch((error) => console.log(error))

var container = document.createElement("div");
container.className="container";

var row = document.createElement("div");
row.className="row";

function foo(data1)
{
    for (var i=0; i<data1.length; i++)
    {
        var col = document.createElement("div");
        col.className="col-lg-4";
       var break1= document.createElement("br");

        var a= data1[i].flags.png;
        col.innerHTML =`
        
<div class="card text-center" style="width: 18rem;">
<h5 class="card-title-center">${data1[i].name.common}</h5>
  <img src="${a}" class="card-img-top" alt="..." height="200">
  <div class="card-body">
    
    <p class="card-text-center">Capital: ${data1[i].capital}</p>
        <p class="card-text-center">Region: ${data1[i].region}</p>
            <p class="card-text-center">Country Code:  ${data1[i].cca2}</p>
    <a href="#" class="btn btn-primary">Click for Weather</a>
  </div>
</div>
<br>
        `
        row.append(col);
        
        container.append(row);
       
        document.body.append(container);
       
    }
}