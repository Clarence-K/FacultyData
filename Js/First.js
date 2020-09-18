console.log("employees",employees)
var getFirst=function(employees)
{
    return employees.firstName
}

d3.select("body")
  .selectAll("h2")
  .data(employees)
   .enter()
  .append("h2")
  .text(getFirst)
