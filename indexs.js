 const clock  = document.querySelector('.clock'); 


function showTime() {  
    const date = new Date();  
    const h = date.getHours();   

    const m = date.getMinutes();
    const s = date.getSeconds(); 
    // const day_nigth = 'AM'; 

    // if(h > 12 ) {   
    //     day_nigth = "PM"
    //     h = h - 12;
    
    //    }  
    
    // if( m < 10) { 
    //     m = '0' + m;
    // } 
    
    // if( s  < 10) {  
    //    s = '0' + s;
    
    //    };
 


    const time = h + ':' + m +':'+ s; // + '' + day_nigth;




    // clock.innerHTML= time; 
    clock.textContent = time; //es 


} 

showTime ();  
setInterval(showTime, 1000);  
