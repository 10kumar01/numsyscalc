var hidenext=null;
var Num="";
var conf="";
function Show(_show,_hide)
{
    conf=_show;
    if(hidenext===null) 
    {
        hidenext=_hide;
    }
    if(hidenext!==_show)
    {
    Num="";
    document.getElementById(_show).style.display="block";
    document.getElementById(hidenext).style.display="none";
    document.getElementById("Output").value=_show;
    }
    hidenext=_show;
}

function EnterNum(x)
{
    if(conf==="NumPad")
        Num=Num+x;
    else{
        Num=x+Num;
    }
    document.getElementById("Output").value=Num;
}
function Clear()
{
    Num="";
    document.getElementById("Output").value=Num;
}

function Convert(ConvertTo)
{
    if(Num.indexOf("+")==-1 && Num.indexOf("*")==-1 && Num.indexOf("-")==-1)
    {
    if(conf==="BinPad")
    {   
        if(ConvertTo==="Bin")
        {
            document.getElementById("Output").value="already in Bin";
            Num="";
        }
        if(ConvertTo==="Dec")
        {
            const result=parseInt(Num,2);
            Num="";
            document.getElementById("Output").value=result;
        }
        if(ConvertTo==="Hex")
        {
            const result = parseInt(Num,2).toString(16).toUpperCase();
            Num="";
            document.getElementById("Output").value=result;
        }
        if(ConvertTo==="Oct")
        {
            const result=parseInt(Num,2).toString(8);
            Num="";
            document.getElementById("Output").value=result;
    
        }
}
if(conf==="NumPad")
    {
        if(ConvertTo==="Bin")
        {
            const result=parseInt(Num).toString(2);
            Num="";
            document.getElementById("Output").value=result;
        }
        if(ConvertTo==="Dec")
        {
            document.getElementById("Output").value="already in Decimal";
            Num="";
        }
        if(ConvertTo==="Hex")
        {
            const result = parseInt(Num).toString(16).toUpperCase();
            Num="";
            document.getElementById("Output").value=result;
        }
        if(ConvertTo==="Oct")
        {
            const result=parseInt(Num).toString(8);
            Num="";
            document.getElementById("Output").value=result;
    
        }
}
if(conf==="Hexpad")
    {
        if(ConvertTo==="Bin")
        {
            const result=parseInt(Num,16).toString(2);
            Num="";
            document.getElementById("Output").value=result;
        }
        if(ConvertTo==="Hex")
        {
            document.getElementById("Output").value="already in HexaDecimal";
            Num="";
        }
        if(ConvertTo==="Dec")
        {
            const result = parseInt(Num,16);
            Num="";
            document.getElementById("Output").value=result;
        }
        if(ConvertTo==="Oct")
        {
            const result=parseInt(Num,16).toString(8);
            Num="";
            document.getElementById("Output").value=result;
    
        }
}
if(conf==="OctPad")
{
    if(ConvertTo==="Bin")
    {
        const result=parseInt(Num,8).toString(2);
        Num="";
        document.getElementById("Output").value=result;

    }
    if(ConvertTo==="Dec")
    {
        const result=parseInt(Num,8);
        Num="";
        document.getElementById("Output").value=result;

    }
    if(ConvertTo==="Hex")
    {
        const result=parseInt(Num,8).toString(16).toUpperCase();
        Num="";
        document.getElementById("Output").value=result;

    }
    if(ConvertTo==="Oct")
    {
        Num="";
        document.getElementById("Output").value="already in Octal";

    }
}
}
else{
    document.getElementById("Output").value="invalid Number";
}
}

function Arithemaics()
{
         if(conf==="BinPad")
        {
            var r=parseInt(Operations(2)).toString(2);
            document.getElementById("Output").value=r;
           
        } 
        if(conf==="NumPad")
        {
            var r=Operations(0).toString();
            document.getElementById("Output").value=r;
           
        }
        if(conf==="Hexpad")
        {
            var r=parseInt(Operations(16)).toString(16).toUpperCase();
            document.getElementById("Output").value=r;
           
        }
        if(conf==="OctPad")
        {
            var r=parseInt(Operations(8)).toString(8).toUpperCase();
            document.getElementById("Output").value=r;
           
        }
}

function Operations(b)
{
    if(Num.indexOf("+")!=-1)
    {
        var numbers=Num.split("+");
        var x=parseInt(numbers[0],b);
        var y=parseInt(numbers[1],b);
        return x+y;
    }
    if(Num.indexOf("*")!=-1)
    {
        var numbers=Num.split("*");
        var x=parseInt(numbers[0],b);
        var y=parseInt(numbers[1],b);
        return x*y;
    }
    if(Num.indexOf("-")!=-1)
    {
        var numbers=Num.split("-");
        var x=parseInt(numbers[0],b);
        var y=parseInt(numbers[1],b);
        return x-y;
    }
    if(Num.indexOf("/")!=-1)
    {
        var numbers=Num.split("/");
        var x=parseInt(numbers[0],b);
        var y=parseInt(numbers[1],b);
        return x/y;
    }
}

function del()
{
    Num=Num.slice(0,-1);
    document.getElementById("Output").value=Num;
}

function leftbinary(){
    let n=Num.length;
                var string=Num.slice(n-1)+Num.slice(0,n-1);
              Num=string;
              document.getElementById("Output").value=Num;
}
function rightbinary(){
    let n=Num.length;
    var string=Num.slice(1,n)+Num.slice(0,1);
    Num=string;
    document.getElementById("Output").value=Num;
}

//weather
const date = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let day = days[date.getDay()];
let site = 'https://api.openweathermap.org/data/2.5/weather?q=Dehradun&appid=d0ac0b02eb3f727ee5ab0a7c005e6a54';

fetch(site)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        document.querySelector('#temperature').innerHTML = (data.main.temp-273.5).toFixed(0);
        document.querySelector('#city').innerHTML =data.name;
        document.querySelector('#day').innerHTML =day;
        document.querySelector('#date').innerHTML = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
        document.querySelector('#windspeed').innerHTML =data.wind.speed;
        document.querySelector('#humidity').innerHTML = data.main.humidity;
        document.querySelector('#pressure').innerHTML = data.main.pressure;
        document.querySelector('#sunrise-time').innerHTML = data.sys.sunrise;
        document.querySelector('#sunset-time').innerHTML = data.sys.sunset;
        document.querySelector('#weather-status').innerHTML = data.weather[0].main;
    });
