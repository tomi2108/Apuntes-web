
# Integrales de superficie

## Campo escalar

Sea \$\\bar{T} : D \\subset \\mathbb{R}\^2 \\rightarrow \\mathbb{R}\^3
,, / ,, \\bar{T}(u,v) = \\left ( x(u,v), y (u,v), z (u,v) \\right ) \$
una parametrización suave de $S$ y $f(x,y,z)$ un campo escalar continuo
en $S=\bar{T} (D)$ entonces:


$$
\iint_{S}f\cdot dr = \iint_{D}f\left [ \bar{T}(u,v) \right ]\cdot \left \| \bar{T}_u (u,v) \times \bar{T}_v (u,v) \right \| dudv
$$




### Ej:

Calcular el área de la porción del plano $x+2y+2z=6$ en el primer
octante.

Despejando $z$ la ecuación queda $z=3-\frac{1}{2} x - y$

![IntegralesDeSuperficie1.JPG](3de4d350-IntegralesDeSuperficie1.JPG)

Definimos una parametrización de la superficie

$$
\bar{T} : D \subset \mathbb{R}^2 \rightarrow \mathbb{R}^3 \,\, / \,\, \bar{T}(u,v) = \left ( u , v , 3-\frac{1}{2} u - v \right )
$$




$\hspace{1pt}$

Graficamos el dominio de integración:

![IntegralesDeSuperficie2.JPG](77859e11-IntegralesDeSuperficie2.JPG)

Definimos el dominio formalmente:

$$
D=\left \{ (u,v) \in \mathbb{R}^2 : 0\leq u \leq 6 \,\,,\,\, 0 \leq v \leq 3-\frac{1}{2}u \right \}
$$




Ahora calculamos
$\left \| \bar{T}_u (u,v) \times \bar{T}_v (u,v) \right \|$ derivando
$\bar{T}$ con respecto a $u$ y despues a $v$:


$$
\bar{T}_u (u,v) \times \bar{T}_v (u,v) = \begin{vmatrix}


i & j  &k \\
 1&0  &-\frac{1}{2} \\
 0&1  &-1
\end{vmatrix} = \left(\frac{1}{2},1,1\right )
$$





$$
\left \| \bar{T}_u (u,v) \times \bar{T}_v (u,v) \right \| = \sqrt{\frac{1}{4} + 1 +1} = \frac{3}{2}
$$




Nos piden el area de la superficie parametrizada por ende el campo
escalar queda \$f(x,y,z) = 1 \$ y la integral es:


$$
a(s) = \iint_{S}dr  = \iint_{D}\left \| \bar{T}_u (u,v) \times \bar{T}_v (u,v) \right \|  du dv =\iint_{D}\frac{3}{2}  du dv
$$





$$
\iint_{D}\frac{3}{2}  du dv = \frac{3}{2} \int_{0}^{6}du\int_{0}^{3-\frac{1}{2}u}dv = \frac{27}{2}
$$




Dejamos el desarrollo de la integral doble a cargo del lector.

### Ej 2:

Calcular el area de la siguiente superficie:


$$
S = \left \{ (x,y,z)  \in \mathbb{R}^3  : x^2+y^2 = 2y \,\,,\,\, 0 \leq z \leq 2-y\right \}
$$




Desarrollamos la primer ecuación de la superficie :
$$
\begin{matrix}


x^2 + y^2 = 2y\\
x^2 + y^2-2y+1=1\\
x^2 + (y-1)^2=1
\end{matrix}
$$




Obtenemos un cilindro el cual tiene su altura restringida por el plano
$z=2-y$

![IntegralesDeSuperficie3.JPG](b2e3af0c-IntegralesDeSuperficie3.JPG)

Realizamos un cambio de variable a coordenadas cilindricas teniendo en
cuenta que el centro del cilindro se encuentra en $(0,1,0)$


$$
\left\{\begin{matrix}


x=\cos u\\
y-1=\sin u \\
z= v
\end{matrix}\right. \hspace{20pt}
\begin{matrix}
0\leq u \leq 2\pi\\
0 \leq v \leq 2-(1+\sin u )\\
0 \leq v \leq 1- \sin u
\end{matrix}
$$




Ahora podemos definir la parametrización de $S$ :


$$
\bar{T} : D \subset \mathbb{R}^2 \rightarrow \mathbb{R}^3 \,\, / \,\, \bar{T}(u,v) = \left ( \cos u ,1+ \sin u , v \right )
$$




Definimos el dominio formalmente:

$$
D=\left \{ (u,v) \in \mathbb{R}^2 : 0\leq u \leq 2\pi \,\,,\,\, 0 \leq v \leq 1-\sin u \right \}
$$




Ahora calculamos
$\left \| \bar{T}_u (u,v) \times \bar{T}_v (u,v) \right \|$ derivando
$\bar{T}$ con respecto a $u$ y despues a $v$:


$$
\bar{T}_u (u,v) \times \bar{T}_v (u,v) = \begin{vmatrix}


i & j  &k \\
 -\sin u&\cos u  &0 \\
 0&0 &1
\end{vmatrix} = \left(\cos u,\sin u,0\right )
$$





$$
\left \| \bar{T}_u (u,v) \times \bar{T}_v (u,v) \right \| = 1
$$




Como nos piden el area de la superficie parametrizada entonces se toma
\$f(x,y,z) = 1 \$ y la integral queda:

$$
a(s) = \iint_{S}dr  = \iint_{D} 1\cdot  du dv
$$





$$
\iint_{D} dudv = \int_{0}^{2\pi}du \int_{0}^{1-\sin u } dv = \int_{0}^{2\pi} (1-\sin u) du
$$





$$
\left.\begin{matrix}( u + \cos u )\end{matrix}\right| _{0}^{2\pi} = 2\pi
$$




## Campo vectorial


$$
\iint_{S}\bar{f}\cdot \bar{n}\cdot dr = \iint_{D}\bar{f}\left [ \bar{T}(u,v) \right ]\cdot \left ( \bar{T}_u (u,v) \times \bar{T}_v (u,v) \right ) dudv
$$




Donde $\bar{n} = \bar{T}_u (u,v) \times \bar{T}_v (u,v)$ es un vector
normal a la superficie y dicta su orientación.

Si $\bar{f}$ es un campo de velocidades de un fluido entonces la
integral de superficie representa el flujo (caudal).

### Ej: {#ej}

Calcular el flujo a traves de la superficie $S$ indicando la orientación
elegida para la superficie con $\bar{f}(x,y,z) = (-y,x,z)$ :


$$
S = \left \{ (x,y,z)  \in \mathbb{R}^3 : z = 1-x^2 \,\,,\,\, z \geq 0 \,\,,\,\, 0 \leq y \leq 1 \right \}
$$




Definimos una parametrización de $S$ :


$$
\bar{T} : D \subset \mathbb{R}^2 \rightarrow \mathbb{R}^3 \,\,/\,\, \bar{T} (u,v) = (u,v,1-u^2)
$$





$$
D = \left \{ (u,v)\in \mathbb{R}^2 : -1\leq u \leq 1 \,\, , \,\, 0\leq v \leq 1 \right \}
$$




Calculamos el vector normal:


$$
\bar{T}_u (u,v) \times \bar{T}_v (u,v) = \begin{vmatrix}


i &j  &k \\
 1&0  &-2u \\
 0&  1& 0
\end{vmatrix} = (2u,0,1)
$$




Luego la integral queda:


$$
\iint_{S} \bar{f} \cdot \bar{n}\cdot dr = \iint_{D} (-v,u,1-u^2)\cdot (2u,0,1) dudv
$$




Realizamos el producto y resolvemos la integral:


$$
\iint_{D} (-2uv+1-u^2) du dv = \int_{-1}^{1}du\int_{0}^{1} (-2uv+1-u^2) dv = -\frac{1}{3}
$$




**Analogamente a las integrales de linea de campo vectorial si existen
dos parametrizaciones de una misma superficie con orientación opuesta
entonces:**


$$
\iint_{\varphi_1} \bar{f} \cdot \bar{n}\cdot dr = -\iint_{\varphi_2} \bar{f} \cdot \bar{n}\cdot dr
$$
