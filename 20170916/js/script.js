if (window.Element && !Element.prototype.closest) {
    Element.prototype.closest = 
    function(s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
            i,
            el = this;
        do {
            i = matches.length;
            while (--i >= 0 && matches.item(i) !== el) {};
        } while ((i < 0) && (el = el.parentElement)); 
        return el;
    };
}

Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,
  touch: true,
  transition: 'slide',
  keyboard: {
    40 : function(){
      Reveal.next();
    },
    38 : function(){
      Reveal.prev();
    }
  },
  dependencies: [
    // Zoom in and out with Alt+click
    { src: './framework/reveal/3.4.1/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },

    // Speaker notes
    { src: './framework/reveal/3.4.1/plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } },
  ]
});

var fragementChanged = document.createEvent("Event");
fragementChanged.initEvent("fragementchanged", true, true);

function readyDrawOutline(event){
  var drawTargets = event.currentSlide.querySelectorAll(".draw-outline");
  if(drawTargets.length < 1) return;

  var exists = event.currentSlide.querySelectorAll(".outline");
  if(exists.length > 0) return;

  for(var i = -1, target = null; target = drawTargets[++i];){
    var odata =  target.getAttribute("data-outline");
    if(!odata) continue;
    var oStyle = window.getComputedStyle(target);
    var cStyle = window.getComputedStyle(target.firstElementChild);
    var _top = parseFloat(oStyle.getPropertyValue("padding-top"));
    var _left = parseFloat(oStyle.getPropertyValue("padding-left"));
    var _w = parseFloat(oStyle.getPropertyValue("width"));
    var _lineH = parseFloat(cStyle.getPropertyValue("line-height"));
    var outlines = odata.split(",");
    var border = 4;

    for(var j = -1, outline = null, docFrag = document.createDocumentFragment(), outlineBox = null, reg = /^([-]*\d+)\:(\d+)\-(\d+)\#(\d+)/, temp, idx, depth, stline, fnline; outline = outlines[++j];){
      temp = outline.trim().match(reg);
      idx = temp[1];
      stline = temp[2];
      fnline = temp[3];
      depth = temp[4];
      outlineBox = document.createElement("span");
      outlineBox.setAttribute("aria-hidden", "true");
      outlineBox.setAttribute("data-index", idx);
      outlineBox.setAttribute("data-depth", depth);
      outlineBox.classList.add("outline");
      outlineBox.style.top = _top + (stline - 1) * _lineH - (border * (3 - depth))  + 'px';
      outlineBox.style.left = _left + (depth - 2) * border * 2 + 'px';
      outlineBox.style.height = (fnline - stline + 1) * _lineH - (border * 2 * (depth - 2))  + 'px';
      outlineBox.style.width = _w + 6 * border - 4 * border * depth + 'px' ;
      docFrag.appendChild(outlineBox);
      target.appendChild(docFrag);
    }
  }
}

Reveal.addEventListener("ready", readyDrawOutline);
Reveal.addEventListener("slidechanged", readyDrawOutline);

Reveal.addEventListener('fragmentshown', function(event){
  fragementChanged.data = {
    fIdx : Reveal.getIndices().f,
    fSlide : event.fragment.closest("section"),
    fType : 'show'
  };
  this.dispatchEvent(fragementChanged);
} );
Reveal.addEventListener('fragmenthidden', function(event){
  fragementChanged.data = {
    fIdx : Reveal.getIndices().f,
    fSlide : event.fragment.closest("section"),
    fType : 'hide'
  };
  this.dispatchEvent(fragementChanged);
} );

Reveal.addEventListener("fragementchanged", function(event){
  var edata = event.data,
    oultine = null,
    op,
    idx;
  if(edata.fType === 'show'){
    idx = edata.fIdx;
    op = 0.75;
  }else if(edata.fType === 'hide'){
    idx = edata.fIdx + 1;
    op = 0;
  }

  oultine = edata.fSlide.querySelector(".outline[data-index='"+ idx +"']");
  if(oultine){
    oultine.style.opacity = op;
  }
});