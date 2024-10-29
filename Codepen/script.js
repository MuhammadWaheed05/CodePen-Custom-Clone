function fun()
{
    
    let html = document.getElementById("htmlArea").value;
    let css = document.getElementById("cssArea").value;
    let output = document.getElementById("iframeArea");
    console.log(output);
    output.contentDocument.body.innerHTML= html + "<style>" + css + "</style>";
}