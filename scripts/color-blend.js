;(function () {

	function sanitizeRGB (color) {
	  return Math.min(Math.round(color), 255)
	}
  
	var colorBlend = {
	  overlay: function (a, b, intensity) {
		intensity = typeof intensity === 'undefined' ? 1 : intensity
		return a.reduce(function (result, current, index) {
		  var value = (a[index] < 128) ? (2 * b[index] * a[index] / 255) : (255 - 2 * (255 - a[index]) * (255 - b[index]) / 255)
		  value = (value * intensity + (a[index] * (1 - intensity)))
  
		  return result.concat(sanitizeRGB(value))
		}, [])
	  }
	}
  
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	  module.exports = colorBlend
	} else window.colorBlend = colorBlend
  })()