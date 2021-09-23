/** 
 * jQuery: Send new jobalert query to database
 */
jQuery(document).ready(function ($) {


  /** 
   * Create new job alert ajax function
   */
  jQuery(document).on('click', '#submit_search_trainingsaanbod', (e) => {

    e.preventDefault();

    const formData = $('#form_trainingsaanbod').serialize();
    const replaceableList = document.querySelector('.replace_list');
    const count = document.querySelector('#count');

    jQuery.ajax({
      type: 'POST',
      url: mvr__trainingsaanbod_ajax.ajaxurl,
      data: {
        action: 'mvr_get_new_trainingsaanbod_results',
        payload: formData,
        nonce: mvr__trainingsaanbod_ajax.security
      },
      beforeSend: function () {
        replaceableList.classList.add('loading');
      },
      success: function (response) {
        replaceableList.innerHTML = response.data.html;
        count.innerHTML = response.data.count;
        replaceableList.classList.remove('loading');
      },
      error: function (error) {
        console.log(error);
      }
    });

  });

})

const switchButtons = document.querySelectorAll( '.switch-layout-button' );
const switchbuttons = [...switchButtons];
switchbuttons.forEach( (btn) => {
  
  
  btn.addEventListener( 'click', (e) => {
    const layout = document.querySelector('#layout_switcher');
    
    console.log(layout);

    switchbuttons.forEach ( (insidebtn) => {
      insidebtn.classList.remove('active');
      if (insidebtn === btn) {
        btn.classList.add('active');

        if (btn.dataset.type === 'list') {
          if (layout.classList.contains('list_view')) {
            return true;
          } else {
            layout.classList.remove('block_view');
            layout.classList.add('list_view');
          }
        } else if (btn.dataset.type === 'block') {
          if (layout.classList.contains('block_view')) {
            return true;
          } else {
            layout.classList.remove('list_view');
            layout.classList.add('block_view');
          }
        }
      }
    })

  })

});