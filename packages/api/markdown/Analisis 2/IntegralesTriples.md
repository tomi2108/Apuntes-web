
# Integrales Triples

Sea un campo escalar \$ f :D\\subset
\\mathbb{R}\^3\\rightarrow\\mathbb{R} \\hspace{5pt} \$ y acotado en
$R = [a,b]\times[c,d]\times[e,f]$

La integral triple se define:

$$
\iiint_{R}f(x,y,z)dxdydz = \int_{a}^{b}dx\int_{c}^{d}dy\int_{e}^{f}f(x,y,z) dz
$$




Como en integrales dobles, no importa el orden de integración siempre y
cuando se respeten los limites con sus variables correspondientes. Si
$f$ es continua las 6 integrales iteradas son iguales.

El concepto de integrar con respecto a una variable manteniendo el resto
fija se sigue manteniendo y es la manera adecuada para resolver este
tipo de integrales.

### Relación con integrales dobles

Si en el dominio de integración una variable depende de las otras dos la
integral triple puede escribirse como una integral doble de otra
intregal asi:

Sea
$H=\begin{Bmatrix} (x,y,z) \in \mathbb{R}^3 : (x,y)\in D \;\;\wedge\;\; \varphi_1(x,y)\leq z \leq \varphi_2(x,y) \end{Bmatrix}$

Entonces $H$ es un macizo proyectable en el plano $xy$ y su proyección
es $D$.

La integral queda de la siguiente forma:


$$
\iiint_{R}f(x,y,z)dxdydz = \iint_{D}dxdy\left [\int_{\varphi_1(x,y)}^{\varphi_2(x,y)}f(x,y,z)dz  \right ]
$$




## Ej:

Sea
$H=\begin{Bmatrix} (x,y,z) \in \mathbb{R}^3 : 0\leq x \leq 1 \;,\; 0\leq y \leq 1 \;, \; 0\leq z \leq x^2+y^2 \end{Bmatrix}$
Calcular \$\\iiint\_{H}f(x,y,z)dV \$, siendo $f(x,y,z)=x$ y el volumen
del solido $H$

Tenemos el campo escalar $f :D\subset \mathbb{R}^3 \;\;/\;\; f(x,y,z)=x$

Y las funciones de z son:
$$
 \left\{\begin{matrix}


\varphi_1(x,y)=0\\
\varphi_2(x,y)=x^2+y^2
\end{matrix}\right.
$$




La integral queda:


$$
\iiint_{H}x \cdot dx\cdot dy\cdot dz = \int_{0}^{1}dx\int_{0}^{1}dy\int_{0}^{x^2+y^2}xdz
$$




Integramos una vez con respecto a $z$ y aplicamos Barrow:


$$
\int_{0}^{1}dx\int_{0}^{1}(x^2+y^2)xdy = \int_{0}^{1}dx\int_{0}^{1}(x^3+y^2x)dy
$$




Integramos con respecto a $y$ y aplicamos Barrow:


$$
\int_{0}^{1}dx\left [\left. x^3y+x\frac{y^3}{3}\right |_{0}^1 \right ] = \int_{0}^{1}(x^3+\frac{x}{3})dx
$$




Por ultimo, integramos con respecto a $x$:


$$
\left.\frac{x^4}{4}+\frac{1}{3}\cdot\frac{x^2}{2}\right|_{0}^{1} =\frac{1}{4} + \frac{1}{6} = \frac{5}{12}
$$




Ahora para calcular el volumen del macizo $H$ debemos tomar como campo
escalar $f(x,y,z)=1$


$$
Vol(H)= \iiint_{H}dx\, dy\, dz
$$




Definimos la integral e integramos con respecto a $z$ :


$$
\int_{0}^{1}dx\int_{0}^{1}dy\int_{0}^{x^2+y^2}dz =


\int_{0}^{1}dx\int_{0}^{1}(x^2+y^2)dy
$$




Integramos con respecto a $y$ y luego con respecto a $x$ :


$$
\left.\int_{0}^{1}x^2y+\frac{y^3}{3}\right|_{0}^{1}dx =


\int_{0}^{1}(x^2+\frac{1}{3})dx = \left.\frac{x^3}{3}+\frac{1}{3}x \right|_{0}^{1}=\frac{2}{3}
$$




## Cambio de variable

### Coordenadas cilindricas


$$
 \left\{\begin{matrix}


x=r\cos \theta\\
y=r\sin\theta\\
z=z
\end{matrix}\right.\hspace{15pt} r \geq 0, \;\; 0\leq \theta \leq 2\pi , \;\; z \in \mathbb{R}
$$





$$
\bar{T}: H^* \subset \mathbb{R}^3 \rightarrow H \subset \mathbb{R}^3 \;\;/\;\;\bar{T}(r,\theta,z) =  (r\cos \theta,r\sin\theta,z)
$$




Para este cambio de variable $J_\bar{T} = r$


$$
\iiint_{H}f(x,y,z) dx\, dy\, dz = \iiint_{H^*}r\cdot f(r\cos \theta,r\sin\theta,z) dr\, d\theta \, dz
$$




### Coordenadas esfericas


$$
 \left\{\begin{matrix}


x=\rho \sin \varphi \cos \theta\\
y=\rho \sin \varphi \sin \theta \\
z=\rho \cos \varphi
\end{matrix}\right.\hspace{15pt} \rho \geq 0, \;\; 0\leq \theta \leq 2\pi , \;\; 0 \leq \varphi \leq \pi
$$





$$
\bar{T}: H^* \subset \mathbb{R}^3 \rightarrow H \subset \mathbb{R}^3 \;\;/\;\;\bar{T}(\rho,\theta,\varphi) =  (\rho \sin \varphi \cos \theta,\rho \sin \varphi \sin \theta,\rho \cos \varphi )
$$




Para este cambio de variable $J_\bar{T} = \rho^2 \sin \varphi$


$$
\iiint_{H}f(x,y,z) dx dy dz = \iiint_{H^*}\rho^2 \sin \varphi f(\rho \sin \varphi \cos \theta,\rho \sin \varphi \sin \theta,\rho \cos \varphi ) d\rho \, d\theta \, d\varphi
$$
