let r = 0; let g = 0; let b = 0;

function changeBodyBg(color){
    document.body.style.background = color;
}

function changecolour(color)
{
    r++;
    setTimeout(changeBodyBg(color),1000);
}

function colors()
{   
    //changeBodyBg('rgb(255,255,0)');
    let timeout = 255 * 20;
    for(let i = 0; i <=255;i++)
    {
        setTimeout(function()
        {
            let colour = "rgb("+i+","+"0"+","+"0"+")";
            changeBodyBg(colour);
        },i * 20)
    }
    
    for(let i = 0; i <=255;i++)
    {
        setTimeout(function()
        {
            let colour = "rgb("+"255"+","+i+","+"0"+")";
            changeBodyBg(colour);
        },i * 20 + timeout)
    }
    for(let i = 0; i <=255;i++)
    {
        setTimeout(function()
        {
            let colour = "rgb("+"255"+","+"255"+","+i+")";
            changeBodyBg(colour);
        },i * 20 + 2 * timeout)
    }
    for(let i = 255; i >=0;i--)
    {
        setTimeout(function()
        {
            let colour = "rgb("+255+","+(255)+","+i+")";
            changeBodyBg(colour);
        },i * 20 + 3 * timeout)
    }
    for(let i = 0; i <=255;i++)
    {
        setTimeout(function()
        {
            let colour = "rgb("+(i)+","+"0"+","+i+")";
            changeBodyBg(colour);
        },i * 20 + 4 * timeout)
    }



    //body.style.backgroundColor="rgb(255,255,255)";
    /*for(let i = 0; i <= 255;i +=10)
    {
        /*for(let j = 0; j <=255;j++)
        {
            for(let k = 0;k <=255; k++)
            {
                let colour = "rgb("+i+","+j+","+k+")";
                changeBodyBg(colour);
                //body.style.backgroundColor=colour;
                
            }
        }*/
        /*let colour = "rgb("+i+","+i+","+i+")";
        changecolour(colour);
        
        //setTimeout(function(){changeBodyBg(colour);console.log("hello");},1000);
        
        
    }*/
}

