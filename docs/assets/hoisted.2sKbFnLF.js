import"./hoisted.BWP51zZr.js";let r="Copy",c=Array.from(document.querySelectorAll("figure[data-rehype-pretty-code-figure]"));for(let o of c){let e=o.querySelector("figcaption");e.style.display="flex",e.style.justifyContent="space-between";let n=document.createElement("div"),t=document.createElement("button");t.className="copy-code",t.innerHTML=r,e.setAttribute("tabindex","0"),e.appendChild(t),e.parentNode.insertBefore(n,e),n.appendChild(e),t.addEventListener("click",async()=>{await i(o,t)})}async function i(o,e){let t=o.querySelector("code").innerText;await navigator.clipboard.writeText(t),e.innerText="Copied!",setTimeout(()=>{e.innerText=r},700)}
