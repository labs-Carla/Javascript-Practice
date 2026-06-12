const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

const sect = document.querySelector("section");

const para = document.createElement("p");
para.textContent = "We hope you enjoyed your ride. Thank you for visiting us!";
sect.appendChild(para);

const text = document.createTextNode (" — the premier source for web development knowledge.",); 
const linkPara = document.querySelector("p");
linkPara.appendChild(text);

sect.appendChild(linkPara);
//sect.removeChild(linkPara);
//linkPara.remove();
//linkPara.parentNode.removeChild(linkPara);

para.style.color = "white";
para.style.backgroundColor = "pink";
para.style.padding = "25px";
para.style.width= "250px";
para.style.textAlign = "center";