var getLast=function(employees)
{
return employees.lastName
}


d3.select("body")
.append("ol")
.selectAll("li")
.data(employees)
.enter()
.append("li")
.text(getLast)