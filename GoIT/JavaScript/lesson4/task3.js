var ellipsis = function(str)
{
    if (str.length <= 20)
        return str;
    else
        return str.substring(0,20) + '...';
};
console.log(ellipsis('Я люблю програмувати на мові програмування javascript!!!'));