var dragObject = new function () {
	var me = this;
	
	var dragNode;
	var eventNoticeNode, dragEventNoticeNode;
	
	/* runs when the page is loaded */
	me.init = function () {
	
		if (EventHelpers.hasPageLoadHappened(arguments)) {
			return;
		}	
		
	/* The node being dragged */
		dragNode=document.getElementById('toDrag');
		
	/* The nodes that report to the user what is happening to that node*/
		eventNoticeNode = document.getElementById('eventNotice');
		dragEventNoticeNode = document.getElementById('dragEventNotice');
		
	/* The drag event handlers */
		EventHelpers.addEvent(dragNode, 'dragstart', dragStartEvent);
		EventHelpers.addEvent(dragNode, 'drag', dragEvent); 
		EventHelpers.addEvent(dragNode, 'dragend', dragEndEvent); 
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

}
EventHelpers.addPageLoadEvent('dragObject.init');