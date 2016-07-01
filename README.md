# glsl-superformula

A GLSL function for generating 3D [supershapes](https://en.wikipedia.org/wiki/Superformula). 

Inspired by Daniel Shiffman's [3D Supershapes Processing tutorial](https://www.youtube.com/watch?v=akM4wMZIBWg). 

[Demo](https://softwave.github.io/glsl-superformula/)


## Screenshots

![screenshot](http://i.imgur.com/tA1uRcf.png)

## Usage 

[![NPM](https://nodei.co/npm/glsl-superformula.png)](https://nodei.co/npm/glsl-superformula/)

``` glsl
#pragma glslify: superformula = require('glsl-superformula')

vec2 doModel(vec3 p) {
	float id = 1.0;
	float d = length(p);
	float theta = atan(p.y / p.x);
	float phi = asin(p.z / d);

	float r1 = superformula(theta, 8.0, 60.0, 100.0, 30.0, 1.0, 1.0);
	float r2 = superformula(phi, 2.0, 10.0, 10.0, 10.0, 1.0, 1.0);

	vec3 q = r2 * vec3(r1 * cos(theta) * cos(phi), r1 * sin(theta) * cos(phi), sin(phi));
	d = d - length(q);

	return vec2(d, id);
}

```

## License

MIT. See [LICENSE.md](https://github.com/Softwave/glsl-superformula/blob/master/LICENSE.md) for details.