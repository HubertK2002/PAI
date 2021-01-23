function zaplac()
{
    const cena = [30,60,41,53,31,31,25,43,37,22,51,29];
    
    const koszt=[];
    for(var i = 0; i <cena.length; i++)
    {
        if(document.getElementById("k"+(i+1)).value >=0 || document.getElementById("k"+(i+1)).value < 0)
        koszt[i] = document.getElementById("k"+(i+1)).value;
        else koszt[i] = 0;
        
    }

    var suma = 0;
    for(var i = 0; i <koszt.length; i++)
    {
        suma += cena[i] * koszt[i];
    }
    
    document.getElementById("wynik").innerHTML = "<l>Koszt wynosi "+suma+" zł</l>";



}