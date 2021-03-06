	var elements = {
	  top: $('#selector-top'),
	  left: $('#selector-left'),
	  right: $('#selector-right'),
	  bottom: $('#selector-bottom')
	};
  
	const isProductDetailPage = /\/product\/[a-zA-Z0-9_-]+\/\d+\/category\/\d+\/display\/\d+\//g.test(window.location.pathname)
  
	if (isProductDetailPage) {
	  $(document).mousemove(e => {
	    if (e.target.id.indexOf('selector') !== -1 || e.target.tagName === 'BODY' || e.target.tagName === 'HTML') return;
	    var $target = $(e.target);
	    targetOffset = $target[0].getBoundingClientRect(),
	      targetHeight = targetOffset.height,
	      targetWidth = targetOffset.width;
	    elements.top.css({
	      left: (targetOffset.left - 4),
	      top: (targetOffset.top - 4),
	      width: (targetWidth + 5)
	    });
	    elements.bottom.css({
	      top: (targetOffset.top + targetHeight + 1),
	      left: (targetOffset.left - 3),
	      width: (targetWidth + 4)
	    });
	    elements.left.css({
	      left: (targetOffset.left - 5),
	      top: (targetOffset.top - 4),
	      height: (targetHeight + 7)
	    });
	    elements.right.css({
	      left: (targetOffset.left + targetWidth + 1),
	      top: (targetOffset.top - 4),
	      height: (targetHeight + 7)
	    });
	  })
	}
