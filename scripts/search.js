function storeSearchterm(term) {


 term.addEventListener("keypress",(e)=>{
    //  e.preventDefault
if(e.key=="Enter"){
    let input_val = document.getElementById("searchbar").value
     localStorage.setItem("search_term",(input_val))

     window.location.href="search.html"
    }
 })

}

export default storeSearchterm