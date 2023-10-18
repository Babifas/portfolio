AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
function sendMail(){
var params={
  name:document.getElementById("name").value,
  email:document.getElementById("email").value,
  message:document.getElementById("message").value
};
const serviceId="service_8of2pds";
const templaateId="template_skmarkp";
emailjs.send(serviceId,templaateId,params).then((res)=>{
  document.getElementById("name").value="";
  document.getElementById("email").value="";
  document.getElementById("message").value="";
  console.log(res);
  alert("You message sent successfully");
})
.catch((err)=>console.log(err));
}

