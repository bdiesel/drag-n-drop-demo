var dragObject = new function () {
	var me = this;
	
	var dragNode, targetNode; 
	var eventNoticeNode, dragEventNoticeNode;
	
	/* runs when the page is loaded */
	me.init = function () {
	
		if (EventHelpers.hasPageLoadHappened(arguments)) {
			return;
		}	
		
	/* The node being dragged */
		dragNode=document.getElementById('toDrag');
		targetNode=document.getElementById('dropTarget');
    eventNoticeNode = document.getElementById('eventNotice');
    dragEventNoticeNode = document.getElementById('dragEventNotice');
		
	/* The drag event handlers */
		EventHelpers.addEvent(dragNode, 'dragstart', dragStartEvent);
		EventHelpers.addEvent(dragNode, 'drag', dragEvent); 
		EventHelpers.addEvent(dragNode, 'dragend', dragEndEvent); 
	/* The drop event handlers */
		EventHelpers.addEvent(targetNode, 'dragover', dragOverEvent);
		EventHelpers.addEvent(targetNode, 'dragleave', dragLeaveEvent);
		EventHelpers.addEvent(targetNode, 'drop', dropEvent);
	}
	
	/* The dragstart event handler logs to the user when the event started.*/
	function dragStartEvent(e) {
		eventNoticeNode.innerHTML = "Drag Event started." 
	}
	
	/* The drag event reports to the user that dragging is on. */
	function dragEvent(e) {
		dragEventNoticeNode.innerHTML = "Currently dragging. ";
	}
	
	/*The dragend event logs to the user when the event had finished *and* also reports that dragging has now stopped. */
	function dragEndEvent(e) {
		dragEventNoticeNode.innerHTML = "No."
		eventNoticeNode.innerHTML = "Drag Event Stopped"
	}

/*Target Events **/

	function dragOverEvent(e) {
		eventNoticeNode.innerHTML = "dragOver"
  	EventHelpers.preventDefault(e);
  }

	function dragLeaveEvent(e) {
		eventNoticeNode.innerHTML = "dragLeave"
  	EventHelpers.preventDefault(e);
  }


  function dropEvent(e) {
		eventNoticeNode.innerHTML = "drop"
		//EventHelpers.preventDefault(e);
  }

}

EventHelpers.addPageLoadEvent('dragObject.init');