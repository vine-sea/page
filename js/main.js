









var a=4,b=3;

a=getverb('a');
b=getverb('b');

console.log(
    a +
      "+"+
     b+
         "="+
     add(a,b))
 

function add(a,b) {
    a=parseInt(a);
    b=parseInt(b)

    return a+b;
}

function getverb(variable)
{
       var query = window.location.search.substring(1);/*start with ?*/
    //    console.log(window.location)
    //    console.log(window.location.search)
    //     console.log(query)


       var vars = query.split("&");//?a=7&b=8
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}