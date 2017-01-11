/* Code by Wayne(Zhou Zhongwei)*/

//Define a function that gets JSON data from external API
//I used an Free API,its url: https://market.mashape.com/andruxnet/random-famous-quotes 
function getQuote() {
    //make an ajax request,then append content to related elements
    $.ajax({
        url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies",
        contentType: "application/x-www-form-urlencoded",
        method: "POST",
        headers: {
            'X-Mashape-Key': 'ihe54TwpLKmshUBlHlsH68cHNODhp1cqQcOjsn2xyqIQXcc2Cj',
        },
        accept: 'application/json',
    }).done(function(data) {
        data = JSON.parse(data);
        var quote = data.quote;
        var author = data.author;
        $(".m-quote").text(quote);
        $("#author").text(author);
    });
}




//Initial the page when doucument ready

$().ready(function() {
    getQuote();    
    //Add event listener to the button "New Quote"
    $("#new-quote").click(function() {        
        getQuote();        
    });
    //Share the quote to Twitter
    $("#twitter").click(function() {            
        var content = $(".m-quote").text();   
        var author =  $("#author").text();            
        var herf = "https://twitter.com/intent/tweet?text="+ "\“" +content + "\”" + " FROM "+ author +      
                    "  SHARE BY @zhongweizhou" ;
        window.open(herf,"_blank","height = 500, width =611,status = yes");
    });
});
