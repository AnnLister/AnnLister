var str = '';
var n  = 8, r = 8,  i, j;
for (j = 1; j <=r; j++)
{
    if (j % 2 !== 0)
    {
        for(i = 1; i <= n; i++)
        {
            if (i % 2 === 0)
            {
                str += ' ';
            }
            else str += '#';
        }
        str += '\n';
    }
    else
    {
        for(i = 1; i <= n; i++)
        {
            if (i % 2 !== 0)
            {
                str += ' ';
            }
            else str += '#';
        }
        str += '\n';
    }
}
console.log(str);