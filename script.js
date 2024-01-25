console.log('' || 0  || NaN || undefined)
// Output: undefined
console.log(1 && true && "damn" && 999)
// Output: 999

var value = 0 ;
if(!!value )
{
        console . log ( "value is truthy" ) ;
}
else
{
        console . log ( "value is falsy" ) ;
}