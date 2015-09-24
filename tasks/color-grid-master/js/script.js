$(function() {
	

	
	var defaults = {
		grid     : [20,20],
		cellSize : 40
	}
		
	
	function buildGrid() {
		var html = '';
		for (i=1;i<=defaults.grid[0];i++) {
			for(j=1;j<=defaults.grid[1];j++) {
				html += '<i data-color="" data-row="' + j + '" data-col="' + i + '" ></i>';
			}
		}
		$('#grid').html(html);
		
		// apply predefined css
		$('#grid').css({
			width  : defaults.grid[0] * defaults.cellSize,
			height : defaults.grid[1] * defaults.cellSize
		})
		
		// apply saved data
		window.requestAnimationFrame(function () {
			if(savedStorage.getCellData() != null) {
				
				for (i=0;i<savedStorage.getCellData().length;i++) {
					$('i[data-row="'+ savedStorage.getCellData()[i].row +'"][data-col="'+ savedStorage.getCellData()[i].col +'"]')
					.attr('data-color', savedStorage.getCellData()[i].color)
					.css('background-color', savedStorage.getCellData()[i].color);
				}

			}
		});
		
	}
	
	buildGrid();

	
	// arrange grid cells
	var z = 1;
	
	$('i').each(function() {
		$(this).css({
			top : parseInt($(this).attr('data-row')-1) * defaults.cellSize,
			left : parseInt($(this).attr('data-col')-1) * defaults.cellSize
		})
		
	}).draggable({
		start: function() {
			
			// origin row, col, top, left
			oldPositionRow = $(this).attr('data-row');
			oldPositionCol = $(this).attr('data-col');
			oldPositionTop = $(this).position().top;
			oldPositionLeft = $(this).position().left;
			
			z += 1;
			$(this).css('z-index',z)

		},
		stop: function() {
			
			// dragged element gets new position data attributes
			if(typeof newPositionRow != 'undefined'){
				$(this).attr('data-row',newPositionRow).attr('data-col',newPositionCol);
			
				saveAllChanges();
			}
			
			

			
		},
		grid: [ defaults.cellSize, defaults.cellSize ],
		containment: "parent"
	}).droppable({
		drop: function( event, ui ) {

			newPositionRow = $(this).attr('data-row');
			newPositionCol = $(this).attr('data-col');

			// hovered block gets position data attributes of the origin block; then animate to that position
			$(this).css('z-index',z-1)
			.attr('data-row',oldPositionRow).attr('data-col',oldPositionCol)
			.animate({
				top : oldPositionTop,
				left : oldPositionLeft
			  }, 400, function() {
				// Animation complete.
			});

			
			
		}
	})
	
	// init color picker
	
	$('#grid').spectrum({
		change: function(color) {
			$('i[data-row="'+ rowcol[0] +'"][data-col="'+ rowcol[1] +'"]')
				.attr('data-color', color.toHexString())
				.css('background-color', color.toHexString());

			saveAllChanges();
			rowcol.length = 0;
		},
		show: function() {
			$('.sp-container').css('top',parseInt(location[1])+66)
			.css('left',parseInt(location[0]))
			location.length = 0;
		}
	})
		var location = [];
		var rowcol = []
		
	$('#grid i').on('click',function(e){
		location.length = rowcol.length = 0;
		location.push(e.target.style.left,e.target.style.top);
		rowcol.push(e.target.getAttribute('data-row'),e.target.getAttribute('data-col'))
	})


	/* cell */
	
	function Cell(row, col, color) {
		this.row   = row;
		this.col   = col;
		this.color = color;
	}
	
	Cell.prototype.serialize = function () {
		return {
			row: this.row,
			col: this.col,
			color: this.color
		};
	};

	

	
	var savedCells = [];
	
	function saveAllChanges() {
		savedCells.length = 0;	
		$('i[data-color!=""]').each(function(){
			var temp = new Cell($(this).attr('data-row'),$(this).attr('data-col'),$(this).attr('data-color'));
			savedCells.push(temp.serialize())
		})

		
		
		// Wait till the browser is ready to render (avoids glitches)
		window.requestAnimationFrame(function () {
			savedStorage.setCellData(JSON.stringify(savedCells));
		});
	
	}
	
	
	
	
	
	
	
	/* local storage */
	
	function LocalStorageManager() {
		this.cellsStateKey = "cellsState";
		this.storage = window.localStorage;
	}
	
	// Cell state getters/setters and clearing
	LocalStorageManager.prototype.getCellData = function () {
		var dataJSON = this.storage.getItem(this.cellsStateKey);
		return dataJSON ? JSON.parse(dataJSON) : null;
	};

	LocalStorageManager.prototype.setCellData = function (data) {
		this.storage.setItem(this.cellsStateKey, data);
	};
	
	savedStorage = new LocalStorageManager;
	
	$('#btn-clear').on('click',function(){
		savedStorage.setCellData(null);
	})
	

	

});