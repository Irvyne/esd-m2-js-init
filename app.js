var title = $("#title");
var button = $("#button");

title.html("<h2>zefzef</h2>zezef");

button.on("click", function(){
        if (confirm("T sur?")) {
                title.text("OK");
        } else {
                title.text("KO");
        }
});

button.on("mouseover", function() {
	title.innerHTML = "Mouseover!!!";
});

button.on("mouseout", function() {
        title.innerHTML = "Mouseout!!!";
});

var p = $(".paragraph");
p.css("backgroundColor", "red");
