async function getData(uId) {
    let myPromise = new Promise((resolve)=> {
        fetch(uId)
        .then(response => {
            console.log("Received Response: ");
            resolve("skc@gmail.com");
        });
    })

    return myPromise;
}

async function main(){
    let mailId = await getData("skc");
    console.log("Email id of the user is: " + mailId);
}

    
console.log("start Solution");
main();
console.log("end Solution");