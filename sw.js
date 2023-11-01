//install service worker
self.addEventListener('install', evt =>{
    console.log('service worker has been installed');
});
//activate service worker this is just a listener event of service worker
self.addEventListener('activate', evt => {
    console.log('service worker has been activated');
});

//FETCH EVENT
self.addEventListener('fetch', evt => {
    console.log('fetch event', evt);
})