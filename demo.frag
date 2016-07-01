precision highp float;

uniform float iGlobalTime;
uniform vec2  iResolution;

vec2 doModel(vec3 p);

#pragma glslify: raytrace = require('glsl-raytrace', map = doModel, steps = 90)
#pragma glslify: normal = require('glsl-sdf-normal', map = doModel)
#pragma glslify: camera = require('glsl-turntable-camera')
#pragma glslify: superformula = require('./')

float supershape(vec3 p) {
  float d = length(p);

  float theta = atan(p.y / p.x);
  float phi = asin(p.z / d);

  float r1=superformula(theta, 8.0, 60.0, 100.0, 30.0, 1.0, 1.0);
  float r2=superformula(phi, 2.0, 10.0, 10.0, 10.0, 1.0, 1.0);
  
  vec3 q = r2 * vec3(r1 * cos(theta) * cos(phi), r1 * sin(theta) * cos(phi), sin(phi));
  d = d - length(q);

  return d;

}

vec2 doModel(vec3 p) {
  float id = 0.0;
  float d  = supershape(p);

  return vec2(d, id);
}


void main() {
  vec3 color = vec3(0.0);
  vec3 ro, rd;

  float rotation = iGlobalTime;
  float height   = 0.0;
  float dist     = 8.0;
  camera(rotation, height, dist, iResolution.xy, ro, rd);

  vec2 t = raytrace(ro, rd, 20.0, 0.005);
  if (t.x > -0.5) {
    vec3 pos = ro + rd * t.x;
    vec3 nor = normal(pos);

    color = nor * 0.5 + 0.5;
  }

  gl_FragColor.rgb = color;
  gl_FragColor.a   = 1.0;
}