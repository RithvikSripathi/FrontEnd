const strong=Array.from(document.getElementsByTagName("strong"));
        const para=document.querySelector("p");
        para.addEventListener("mouseenter",()=>{
           strong.forEach((st)=>{
                st.style.color="red";
           })
        })
        para.addEventListener("mouseleave",()=>{
            strong.forEach((st)=>{
                st.style.color="black";
           })
        })