getPic=function(employees)
{
    return employees.photo
}

d3.select("body")
.append("div")
.selectAll("a")
.data(employees)
.enter()
.append("img")
.attr("src",getPic)
.text(getPic);