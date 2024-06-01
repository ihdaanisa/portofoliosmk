 //selecting all required elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".image");

window.onload = () => {
  //once window loaded
  filterItem.onclick = (selectedItem) => {
    //when user clicked on filterItem div
    if (selectedItem.target.classList.contains("item")) {
      //if user click element has .item class
      filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in the first element
      selectedItem.target.classList.add("active"); //add that active class on the user selected element or item
      let filterName = selectedItem.target.getAttribute("date-name"); //getting date-name value of the user selected item and storing in a filtername variable
      filterImg.forEach((image) => {
        let filterImages = image.getAttribute("date-name"); //getting image date-name value
        //if user selected item date-name value is equal to image date-name value
        // or user selected item date-name value is equal to "all"
        if ((filterImages == filterName) || filterName == "all") {
          image.classList.remove("hide");
          image.classList.add("show");
        } else {
          image.classList.add("hide");
          image.classList.remove("show");
        }
      });
    }
  };
  for (let index = 0; index <  filterImg.length; index++){
    filterImg[index].setAttribute("onclick", "preview(this)"); //adding onclick attribute in all avaibale images
  }
};


//selecting all required elements 
const previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
categoryName = previewBox.querySelector(".title p"),
closeIcon = previewBox.querySelector(".icon");

//fullscreen preview image function
function preview(element){
  let selectedPrevImg =  element.querySelector("img").src; //getting user clicked image source link and store in a variable 
  let selectedImgCategorry = element.getAttribute("date-name"); //getting user clicked date-name value
  categoryName.textContent = selectedImgCategorry; //passing the date-name value to category name variable
    previewImg.src =selectedPrevImg; // passing the user clciked image source in the preview image source
  previewBox.classList.add("show"); //show the preview box
  closeIcon.onclick = ()=>{ //if user click on the  close icon of the preview box
    previewBox.classList.remove("show"); //hide the preview box
  }
}

