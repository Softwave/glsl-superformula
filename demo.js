var glslify = require('glslify')
var toy = require('gl-toy')

var shader = glslify('./demo.frag')
var start = Date.now()

toy(shader, function(gl, shader) {
	shader.uniforms.iResolution = [gl.drawingBufferWidth, gl.drawingBufferHeight]
	shader.uniforms.iGlobalTime = (Date.now() - start) / 1000
})





