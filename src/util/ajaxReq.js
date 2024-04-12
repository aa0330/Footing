const xhr = new XMLHttpRequest()

function xhrGet(url,data){
    xhr.open('get',url)
    xhr.onreadystatechange = ()=>{
        if(xhr.status == 200 && xhr.readyState == 4){
            let res = xhr.responseText
            return  
        }
    }


} 
