//Event Bubling (goes up) 
        //or you can set 3rd parameter of eventListner as false

            // document.querySelector('.grandParent').addEventListener('click', ()=> {
            //     console.log('grandParent')
            // })
            // document.querySelector('.parent').addEventListener('click', ()=> {
            //     console.log('parent')
            // })
            // document.querySelector('.child').addEventListener('click', ()=> {
            //     console.log('child')
            // })

// Event Capturing or strikling (go down)

            // document.querySelector('.grandParent').addEventListener('click', ()=> {
            //     console.log('grandParent')
            // }, true)
            // document.querySelector('.parent').addEventListener('click', ()=> {
            //     console.log('parent')
            // }, true)
            // document.querySelector('.child').addEventListener('click', ()=> {
            //     console.log('child')
            // }, true)

// Event deligation
// 1.          document.querySelector('.parent').addEventListener('click', (e)=>{
//                 console.log(e.target.classList.value);
//                 if(e.target.tagName == 'LI'){
//                     // console.log(e.target);
//                 }
//             })

// 2.           
                document.querySelector('#form').addEventListener('keyup', (e)=>{
                    console.log(e.target.dataset.uppercase)
                    if(e.target.dataset.uppercase != undefined){
                        e.target.value = e.target.value.toUpperCase();
                    }
                })
