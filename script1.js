

var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);

// a) to print the countries in Asia region //
var asia=result.filter((a)=>a.region==="Asia").map((a)=>a.name);
console.log(asia);
// b to ptint  the countries having less than 200000//
var pop=result.filter((pop)=>pop.population<200000).map((pop)=>pop.name);
console.log(pop);
//to print the total population of the country//
var tot=result.filter((a,b)=>a+b.population,0);
console.log(tot);

// to print the countries using US dollars 

var us=result.filter((a)=>{
    
for(var i=0;i<a.currencies.length;i++)
{
if(a.currencies[i].code==="USD")
{
return true;
}
}
});
console.log(us);
// to print the country name ,flag ,capital using for loop
result.forEach(function(country)  {
var countryname=(country.name)?country.name:"";
var cap=(country.capital)?country.capital[0]:"";
var flag=(country.flag)?country.flag:"";
console.log("country name:"+country+"Capital:"+cap+"flag:"+flag);
    
});


}