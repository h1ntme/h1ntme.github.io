jQuery.extend(
    jQuery.expr[':'], { Contains : "jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase())>=0" 
  });

  var Imtech = {};
  Imtech.SearchOnThisPage = function() {
    // --- default values
    this.searchDefaultText = "Search on this page";
    this.startSearchingLength = 3;
    this.textWrapper = "#search-area";
    this.searchBoxWrapper = "#searchOnThisPage";
    this.searchBoxId = "searchOnThisPageTextBox";
    this.activeCssClass = "active";
    this.highlightCssClass = "highlight";
    
    // --- prive variables
    var originalText = "";
    
    // --- public methods
    this.getOriginalText = function() {
      return originalText;
    }
    
    this.init = function() {
      var instance = this;
      
      $(this.searchBoxWrapper).html('<input type="text" id="' + this.searchBoxId + '"/>');
      originalText = $(this.textWrapper).html();
      var searchBox = "#" + this.searchBoxId;
      
      $(searchBox).attr("value", this.searchDefaultText)
      .focus(function() {
        if (this.value == instance.searchDefaultText) {
          this.value = "";
          $(this).addClass(instance.activeCssClass);
        }
      }).
      blur(function() {
        if (this.value == "") {
          $(this).removeClass(instance.activeCssClass);
          this.value = instance.searchDefaultText;
        }
      }).
      keyup(function() {
        $(instance.textWrapper).html(instance.getOriginalText());
        
        if (this.value.length >= instance.startSearchingLength) {
          var searchText = escape(this.value);
          var regx = new RegExp("(" + searchText + ")", 'gi');
          var selector = 'p:Contains("' + searchText + '")';
          $(instance.textWrapper).each(function() {
            var text = $(this).html();
            text = text.replace(regx, '<span class="' + instance.highlightCssClass + '">$1</span>');
            $(this).html(text);
          });
        }
      })
    }
  }