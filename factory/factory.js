app.factory('myfactory',function () {
    return {
        object1:function(input)
        {
            var output=""
            // if(!input)
            // {
            //     return input;
            // }
            for(let i=1;i < input.lngth;i++)
            {
                if(input[i]===input[i].toUpperCase())
                {
                    output=output+" ";
                }
                  output = output+input[i]
            }
            console.log(output);
            return output;
        }
    }
    
})
