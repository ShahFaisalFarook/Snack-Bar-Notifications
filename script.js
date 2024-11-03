let toastBox = document.getElementById('toastBox')
function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);
    if(msg.includes("error")){
        toast.classList.add("error")
    }
    if(msg.includes("Invalid")){
        toast.classList.add("invalid")
    }
    setTimeout(() => {
        toast.remove();
    }, 6000);
}
/*  Toast Box scripting */
let successMsg = '<i class="fa-solid fa-circle-check"></i> Submitted Successfully';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i>Invalid input, Check again';

