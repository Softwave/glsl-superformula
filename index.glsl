float SuperFormula( float phi, float m, float n1, float n2, float n3, float a, float b ){
	
	float t1 = abs((1.0 / a) * cos(m * phi / 4.0));
	t1 = pow(t1, n2);

	float t2 = abs((a / b) * sin(m * phi / 4.0));
	t2 = pow(t2, n3);

	float t3 = t1 + t2;

	float r = pow(t3, -1.0 / n1);

	return r;
}

#pragma glslify: export(SuperFormula)
