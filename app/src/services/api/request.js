const request = (url)=>{
    return fetch(url)
        .then((response)=>{
            if(response.ok) {
                return response.json();
            }else{
                console.log('Network response was not ok.');
            }    
        })
        .then((json)=>{
            console.log(json)
            return json;
        })
}

export default request