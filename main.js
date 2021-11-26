let content = document.querySelectorAll('#content');
let container = document.querySelectorAll("#container");
content[0].addEventListener("scroll",()=>{
    let fig = document.querySelector('figure');
    let scroll=content[0].scrollTop;
    if(scroll<=200)
    { 
        content[0].children[0].setAttribute("style",`transform:translate(0px,${scroll}px); opacity:1;`);
        content[0].children[1].setAttribute("style",`transform:translate(0px,${scroll}px); opacity:${scroll/200};`);
    }
    else if(scroll>200 && scroll<400)
    {
        
        content[0].children[0].setAttribute("style",`opacity:0;`);
        content[0].children[1].setAttribute("style",`transform:translate(0px,${scroll}px); opacity:1;`);
    }
    else if(scroll>=400 && scroll<600)
    {
        content[0].children[1].setAttribute("style",`transform:translate(0px,${scroll}px); opacity:1;`);
        content[0].setAttribute("style",`border-radius:${(scroll-400)/2}px;transform: scale(${1-(scroll-400)*0.0035});`);
    }
    else if(scroll>=600 && scroll<800)
    {
        content[0].children[1].setAttribute("style",`transform:translate(${600-(scroll)}px,${scroll}px); opacity:1;`);
        if(scroll>700)
        {
            content[0].setAttribute("style",`transform:translate(-5px,36px) scale(0.18);border-width:${(scroll-600)*1.35}px ${(scroll-600)*2.43}px;border-color:transparent;border-style:none; border-radius:100px;`);
        }
        else
        {
            content[0].setAttribute("style",`transform:translate(-5px,36px) scale(0.18);opacity:${1-};border-width:${(scroll-600)*1.35}px ${(scroll-600)*2.43}px;border-color:transparent;border-style:none; border-radius:100px;opacity`);
        }
    }
    else if(scroll>=800 && scroll<=1000)
    {
        content[0].children[1].setAttribute("style",`transform:translate(-199px,${scroll}px); opacity:1;`);
        content[0].children[1].children[1].setAttribute("style",`opacity:${(scroll-800)/200};`);
    }
    else
    {
        content[0].children[1].setAttribute("style",`transform:translate(-200px,${scroll}px); opacity:1; overflow:none;`);
    }
    console.log(scroll);
});
