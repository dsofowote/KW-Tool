integration.on('adServed', function (e) {
		try {
			var unit = currentWindow.frameElement;
			unit.height = "0";
			unit.width = "0";
			unit.parentElement.style.height = 0;
			unit.parentElement.style.width = 0;
		} catch (err) {
			console.log("inskin - no iframe found to collapse");
		}
});