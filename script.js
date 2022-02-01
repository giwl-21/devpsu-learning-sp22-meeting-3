



function activate_button(){

}

$(document).ready(() => {
    $("#activate").click(()=>{
        activate_button();
    });
});

// async function generateArnieLink(){
//     var b = await fetch("https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg/471px-Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg").then((response)=>{
//         console.log("Arnie Loaded!!", response);
//         return response.blob();
//     }).then((myBlob)=>{
//         let objectURL = URL.createObjectURL(myBlob);
//         return objectURL;
//     }).catch((error)=>{
//         console.log('There has been a problem with your fetch operation: ' + error.message);
//     });
//     return b;
// }

// function loadArnie(){
//     fetch("https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg/471px-Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg").then((response)=>{
//         console.log("Arnie Loaded!!");
//         return response.blob();
//     }).then((myBlob)=>{
//         let objectURL = URL.createObjectURL(myBlob);
//         image = document.createElement('img');
//         image.src = objectURL;
//         document.body.appendChild(image);
//     }).then(()=>{
//         console.log("All done...");
//     }).catch((error)=>{
//         console.log('There has been a problem with your fetch operation: ' + error.message);
//     });
// }