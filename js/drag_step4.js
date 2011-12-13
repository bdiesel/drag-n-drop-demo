var dragObject = new function () {
    var me = this;
    
    var targetNode; 
    var eventNoticeNode, dragEventNoticeNode;
    
    var dataTransferCommentString;
    
    me.init = function () {
    
        if (EventHelpers.hasPageLoadHappened(arguments)) {
            return;
        }   
      
        targetNode=document.getElementById('dropTarget');
        eventNoticeNode = document.getElementById('eventNotice');
        dragEventNoticeNode = document.getElementById('dragEventNotice');
        
        /* These are events for the draggable objects */
				dragNode=document.getElementById('toDrag');        
				EventHelpers.addEvent(dragNode, 'dragstart', dragStartEvent);
				
        /* These are events for the object to be dropped */
        EventHelpers.addEvent(targetNode, 'dragover', dragOverEvent);
        EventHelpers.addEvent(targetNode, 'drop', dropEvent);
    }
    
    function dragStartEvent(e) {
        e.dataTransfer.setData('Text', this.alt);
    }
    
    function dragOverEvent(e) {
        EventHelpers.preventDefault(e);
    }
    
    function dropEvent(e) {
        this.innerHTML = e.dataTransfer.getData('Text');
        EventHelpers.preventDefault(e);
    }
    
}

EventHelpers.addPageLoadEvent('dragObject.init');
