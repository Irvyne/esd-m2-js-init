var downloads = $(".download");
var reset = $("#reset");
var p = $(".paragraph");

downloads.on("click", function() {
	var el = $(this);

	el.hide(); // el.css("display", "none") OU el.css({"display": "none"})

	// Tag Google Analytics => https://developers.google.com/analytics/devguides/collection/analyticsjs/events
	ga('send', 'event', 'Boutton', 'click', el.text());
});

reset.on("click", function() {
	downloads.show();
	p.slideDown();
});

p.on("click", function() {
	$(this).slideUp(500);
});

















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

button.on("mouseenter", function() {
	title.text("Mouseover!!! <h1>ezfzef</h1>");
});

button.on("mouseleave", function() {
        title.text("Mouseout!!!");
});

var p = $(".paragraph");
p.css({"backgroundColor": "red", color: "deeppink", fontSize: "40px"});
