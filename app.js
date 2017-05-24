$( document ).ready(function() {             //// След като зареди документа
	$('.nav-trigger').on('click', function(){  ////// Намери ми нав-тригара при клик 
		$('.nav-trigger').toggleClass('active'); //// След смени класа  
			$('.nav').toggleClass('active'); //// Пак сменя класа 
	});
}); 