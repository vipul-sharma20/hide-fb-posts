a = document.querySelectorAll('div._1dwg');

var check = [/sayat.me/, '/honestly and anonymously/'];
// var check = [/two names/, /inbox/, /be honest/, /honest comments/, /without mentioning their names/, /like my status/];

for(var i=0; i<a.length;i++)
{
    var len = check.length,
    j = 0;
    var count = 0;
    s = a[i].innerHTML.toLowerCase();

    for (; j < len; j++) {
        if (s.match(check[j])) {
            count++;
        }
    }
    
    if (count >= 3)
    {
        a[i].parentElement.parentElement.style.visibility = 'hidden';
    }

}
