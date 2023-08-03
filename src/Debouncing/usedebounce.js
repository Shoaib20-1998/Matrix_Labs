


function usedebounce(handlechange,delay){

    let id;   
    function bounce(e){
        if(id){
            clearTimeout(id)
        }
        id=setTimeout(()=>{
            handlechange(e)
        },delay)
    }

    return bounce
}

export default usedebounce