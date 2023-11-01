// if('serviceWorker' in navigator){
//     navigator.serviceWorker.register('/sw.js')
//     .then((reg) => console.log('service worker registered', reg))
//     .catch((err) => console.log('service worker not registered', err));
// }


const checkPermission = () => {
    if(!('serviceWorker' in navigator)){
        throw new Error("No support for service worker!")
    }

    if(!('Notification' in window)){
        throw new Error('No support for notification API');
    }
}


const registerSW = async () => {
    const registration = await navigator.serviceWorker.register('sw.js');
    return registration;
}



const requestNotificatioNPermission = async () =>{
    const permission = await Notification.requestPermission();

    if(permission !== 'granted'){
        throw new Error("Notification permission not granted")
    }else{
        new Notification("Hello World");
    }
}

checkPermission()
registerSW()



const button = document.querySelector("button");

button.addEventListener("click", () => {
    requestNotificatioNPermission()

    
})
