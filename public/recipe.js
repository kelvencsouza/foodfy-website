function hideShow() {
    const hideShowButton = document.querySelectorAll('.second_title');
    console.log(hideShowButton);
    for (let i = 0; i < hideShowButton.length; i += 1) {
      hideShowButton.item(i).addEventListener('click', () => {
        const detailsContent = document.querySelectorAll('.description_list')[i];
  
        if (hideShowButton.item(i).innerHTML == 'ESCONDER') {
          hideShowButton.item(i).innerHTML = 'MOSTRAR';
  
          detailsContent.style.display = 'none';
        } else if (hideShowButton.item(i).innerHTML == 'MOSTRAR') {
          hideShowButton.item(i).innerHTML = 'ESCONDER';
  
          detailsContent.style.display = 'block';
        }
      });
    }
  }
  activeMenuItems();
  hideShow();
  