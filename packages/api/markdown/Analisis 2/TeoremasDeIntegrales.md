
# Teoremas

## Divergencia y rotacional de un campo vectorial

Sea un campo vectorial
$\bar{f}: D \subset \mathbb{R}^3 \rightarrow \mathbb{R}^3 \,\,/\,\, \bar{f}(x,y,z) = \left ( P(x,y,z) , Q(x,y,z) , R(x,y,z) \right )$
con $\bar{f} \in C^1 (D)$

Se define la divergencia del campo $\bar{f}$ como:

$$
div \bar{f} = \frac{\partial P }{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}
$$

$\hspace{1pt}$

Es un campo escalar.

Si recordamos el operador nabla
$\nabla = (\frac{\partial }{\partial x},\frac{\partial }{\partial y},\frac{\partial }{\partial z})$

$$
div \bar{f} = \nabla\cdot\bar{f}
$$

Si $\bar{f}$ representa un campo de velocidades de un fluido entonces si
$div\bar{f} > 0$ el gas se está expandiendo. Si \$div \\bar{f} \<0 \$ el
gas se esta comprimiendo. Y si \$div \\bar{f} = 0 \$ el campo vectorial
se llama solenoidal.

El rotor o rotacional del campo vectorial $\bar{f}$ se define:

$$
rot \bar{f} = \left ( \frac{\partial R}{\partial y} -\frac{\partial  Q}{\partial z}, \frac{\partial P}{\partial z} -\frac{\partial  R}{\partial x}, \frac{\partial Q}{\partial x} -\frac{\partial  P}{\partial y} \right )
$$

Si introducimos el operador nabla
$\nabla = (\frac{\partial }{\partial x},\frac{\partial }{\partial y},\frac{\partial }{\partial z})$

$$
rot \bar{f} = \nabla \times \bar{f}
$$

Si $rot \bar{f} = \bar{0}$ el campo se llama irrotacional. Si \$
\\bar{f}\$ representa un campo de velocidades de un fluido entonces
$rot \bar{f} = \bar{0}$ en un punto $P$ significa fisicamente que el
fluido no tiene rotaciones en dicho punto $P$.

## Propiedades

Si $\bar{f} \in C^2$ entonces:
$$
div(rot\bar{f}) = 0
$$

$$
\nabla \cdot (\nabla \times \bar{f} )= 0
$$

Sea $f : D \subset \mathbb{R}^3 \rightarrow \mathbb{R}$ un campo
escalar. Si $f \in C^2 (D)$ entonces el rotor de un gradiente es el
vector nulo:

$$
\nabla\times(\nabla f)= \bar{0}
$$

Por ultimo el laplaciano de $f$ se define:

$$
\nabla^2f = \nabla \cdot \nabla f
$$

Si $\nabla^2 f = 0$ el campo escalar es armónico.

## Teorema de la divergencia

Sea \$H \\subset \\mathbb{R}\^3 \$ un macizo con superficie frontera
$S$, orientada con el campo de normales hacia el exterior. Si
$\bar{f}: D \subset \mathbb{R}^3 \rightarrow \mathbb{R}^3$ es de clase
$C^1(D)$ tal que $D \subset H \cup S$ entonces :

$$
\iint_{S}\bar{f}\cdot \bar{n} \cdot \bar{dr}  = \iiint_{H} div\bar{f} dv
$$

### Ej

Sea $\bar{f}(x,y,z) = (xy,y^2+e^{xz^2},\sin (xy))$ y
$H = \begin{Bmatrix}(x,y,z) \in \mathbb{R}^3: 0\leq z \leq 1-x^2 ,0 \leq y \leq 2-z\end{Bmatrix}$
calcular:
$$
\iint_{S}\bar{f}\cdot \bar{n} \cdot \bar{dr}
$$

Notemos que \$\\bar{f} \\in C\^2 \$

Empezamos calculando la divergencia de $\bar{f}$:

$div\bar{f} = y +2y = 3y$

$\hspace{1pt}$

Hallamos el limite de $x$:

Graficamos $z \leq 1-x^2$

![Teoremas%20de%20Integrales.JPG](c6d137ea-Teoremas%20de%20Integrales.JPG)

La integral queda:

$$
\iint_{S}\bar{f}\cdot \bar{n} \cdot \bar{dr} = \iiint_{H} 3y dv
$$

$$
\int_{-1}^{1}dx\int_{0}^{1-x^2}dz\int_{0}^{2-z}3ydy = \frac{184}{35}
$$

Dejamos la resolución de la integral a cargo del lector.

## Teorema de Green

Sea un campo vectorial $\bar{f}(x,y) = \left ( P(x,y),Q(x,y) \right )$
con
$\bar{f} : D_{\bar{f}} \subset \mathbb{R}^2 \rightarrow \mathbb{R}^2 \;\;,\;\; \bar{f}\in C^1\;\;,\;\; D_{\bar{f}} \subset R \cup C$
siendo $C$ la curva cerrada, simple y suave frontera de R. Entonces:

$$
\oint_{C}\bar{f}\cdot \bar{ds} = \iint_{R}\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right) dxdy
$$

### Ej 2

Sea
$R = \left \{ (x,y) \in \mathbb{R}^2: \left | y \right | \leq x \;\;,\;\; x^2+y^2 \leq 2x \right \}$
y $\bar{f}(x,y) = \left ( xe^{\sin x} -y , x+y \ln^4[y^2+1] \right )$

Calcular la circulación de $\bar{f}$ a lo largo de $C$ donde $C$ es la
curva frontera de $R$

Operamos la segunda ecuación de $R$ y graficamos:

$$
\begin{matrix}

x^2+y^2 \leq 2x\\
x^2-2x+y^2 \leq 0\\
x^2-2x+1+y^2 \leq 1\\
(x-1)^2 + y^2 \leq 1
\end{matrix}
$$

$\hspace{1pt}$

$\hspace{1pt}$

![Teoremas%20de%20Integrales2.JPG](a5c578ab-Teoremas%20de%20Integrales2.JPG)

Sabemos que $C=C_1 \cup C_2 \cup C_3$

Sin aplicar el teorema de Green la integral queda así:

$$
\oint_{C}\bar{f}\cdot \bar{ds} = \int_{C_1}\bar{f}\cdot \bar{ds} +\int_{C_2}\bar{f}\cdot \bar{ds} + \int_{C_3}\bar{f}\cdot \bar{ds}
$$

Y deberíamos parametrizar cada una de las curvas, pero si aplicamos el
teorema de Green podemos simplificar el ejercicio:

Sabemos que $\bar{f} \in C^1$ por ser suma, producto y composición de
funciones $C^1$ entonces podemos reescribir la integral:

$$
\oint_{C}\bar{f}\cdot \bar{ds} = \iint_{R}\left( \frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right) dx dy = \iint_{R} 2\cdot dxdy
$$

Luego:

$$
2\iint_{R}dxdy = 2\left [ \frac{2\cdot1}{2} +\frac{\pi}{2} \right ] = 2+ \pi
$$

Sabemos que $\iint_{R}dxdy$ representa el area de la región $R$ y esta
está compuesta por un triangulo y medio circulo.
$a(t)= \frac{b\cdot h}{2}$ y $a(c)= \frac{\pi \cdot r^2}{2}$ mirando el
grafico podemos identificar facilmente todos los parametros necesarios
para calcular las areas.

### Generalización del teorema de Green

Si $Q_x-P_y = k$ entonces:

$$
\oint_{C}\bar{f}\cdot \bar{ds} = k \iint_{R}dxdy
$$
 donde la segundra

integral representa el area de $R$

Dada una curva $C$ cerrada simple en $\mathbb{R}^2$ y además un conjunto
de curvas $c_i$ donde $c_i \cap c_j = \emptyset$ con $i\neq j$

![Teoremas%20de%20Integrales3.JPG](e1646665-Teoremas%20de%20Integrales3.JPG)

Entonces:

$$
\oint_{C}\bar{f}\cdot \bar{ds} -\sum_{i=1}^{k}\oint_{C_i}\bar{f}\cdot \bar{ds} = \iint_{R}\left( \frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right) dx dy
$$

Es decir, el area encerrada por la curva $C$ menos la sumatoria de las
areas encerradas por las curvas $c_i$ es igual a la región $R$.

#### Ej 3

Dado
$\bar{f} : \mathbb{R}^2 -\{\bar{A}\} \rightarrow \mathbb{R}^2 \;/\; \bar{f} = (P,Q)$
suponga matriz jacobiana continua con $Q'_x - P'_y = 6$

Calcule $\oint_{C_1}\bar{f}\cdot \bar{ds}$ sabiendo que
$\oint_{C_2}\bar{f}\cdot \bar{ds} = 12$ , $C_1$ es una circunferencia de
radio $8$ , $C_2$ es un cuadrado de lado $5$.

Primero graficamos:

![Teoremas%20de%20Integrales4.JPG](2c13e88e-Teoremas%20de%20Integrales4.JPG)

La matriz jacobiana continua significa que
$\bar{f} \in C^1 (\mathbb{R}^2-\{\bar{A}\})$

Por la generalización del teorema de Green sabemos que:

$$
\oint_{C_1}\bar{f}\cdot \bar{ds} -\oint_{C_2}\bar{f}\cdot \bar{ds} = \iint_{R}( Q_x - P_y) dx dy
$$

$$
\oint_{C_1}\bar{f}\cdot \bar{ds} - 12 = 6\iint_{R} dx dy
$$

$$
\oint_{C_1}\bar{f}\cdot \bar{ds}  = 6a(R) + 12
$$

$$
a(R) = area(circulo) - area(cuadrado)
$$

$$
a(r)= 64\pi - 25
$$

$$
\oint_{C_1}\bar{f}\cdot \bar{ds}  = 64\pi - 25 + 12
$$

$$
\oint_{C_1}\bar{f}\cdot \bar{ds}  = 384\pi - 138
$$

## Teorema del rotor o de stokes

Sea $S$ una superficie abierta, simple y orientada con curva de borde
$C$ y suave orientada según $S$ y sea
$\bar{f} : D \subset \mathbb{R}^3 \rightarrow \mathbb{R}^3 \;\;/\;\; f \in C^1 (D) \,\,,\,\, D\subset S \cup C$
entonces:

$$
\oint_{C}\bar{f} \cdot \bar{ds} = \iint_{S} rot\bar{f} \cdot \bar{n}\; dr
$$
