
# Integrales de Linea

## Curva suave

La imagen de una función vectorial
$\bar{\sigma} : I \subset \mathbb{R}\rightarrow {\mathbb{R}}^n$
continua, donde $I$ es un conjunto conexo es una curva.

$$
Im(\bar{\sigma})=C
$$
 Si
$$\bar{\sigma}\in C^1 \text{y} {\bar{\sigma}}'(t)\neq \bar{0}\hspace{15pt}\forall t \in I$$

Entonces $C$ es una curva suave y $\bar{\sigma}(t)$ una parametrización

$\bar{\sigma}:\left [ a,b \right ]\rightarrow \mathbb{R}^3\\ Im(\bar{\sigma})=C\\ t_0 \in (a,b)\\ {\bar{\sigma}}'(t_0)\neq \bar{0}\\ \bar{x} =\bar{\sigma}(t_0)+\lambda\cdot{\bar{\sigma}}'(t_0) \lambda \in \mathbb{R}\hspace{20pt}\text{Recta tangente}$

![IntegralesDeLinea1.JPG](f603da71-IntegralesDeLinea1.JPG)

## Longitud del arco de una curva

$$
L(c)=\int_{a}^{b}\left \| {\bar{\sigma}'(t)} \right \|dt
$$

### Ej

Para la parametrización de la siguiente curva

$$
\bar{\sigma}:\left[0,2\pi\right]\rightarrow\mathbb{R}^2\hspace{5pt}/\hspace{5pt}\bar{\sigma}\left(t\right) = \left(\cos t,\sin t\right)
$$

se cumple:

$\left\{\begin{matrix}  x=\cos(t)& & \\  y=\sin(t)& & \end{matrix}\right.\displaystyle{0\leq t \leq 2\pi}$

$x^2 + y^2 = 1$ Es la circunferencia unitaria

![IntegralesDeLinea2.JPG](d1df530e-IntegralesDeLinea2.JPG)

${\bar{\sigma}}' (t) = \left(-\sin(t),\cos(t)\right)\\ \left \| {\bar{\sigma}}'(t) \right \| = \sqrt{\sin^{2}(t)+\cos^{2}(t) }=1$

$\left \| {\bar{\sigma}}'(t) \right \|$ es constante
$\forall t \in \left[0,2\pi\right]$

$$
L(c)=\int_{0}^{2\pi}1dt=t\left|\begin{matrix}2\pi\\0\end{matrix}\right. = 2\pi
$$

## Integral de linea de campo escalar

Sea $f:D\subset \mathbb{R}^n\rightarrow\mathbb{R}$ un campo escalar
continuo en $D$ y $C$ una curva suave tal que $Im(\bar{\sigma})=C$

$\bar{\sigma}:[a,b]\rightarrow\mathbb{R}^n,\hspace{10pt}\bar{\sigma}\text{continua},\hspace{10pt}\bar{\sigma}\in C^1 ,\hspace{10pt} {\bar{\sigma}}'(t)\neq \bar{0}$

La integral del campo escalar $f$ a lo largo de $\bar{\sigma}$ se
define:

$$
\int_{C}fds=\int_{a}^{b}f[\bar{\sigma}(t)]\cdot||{\bar{\sigma}}'(t)||dt
$$

No importa el sentido de la parametrización.

$\hspace{1pt}$

$\hspace{1pt}$

$\hspace{1pt}$

Si el campo escalar $f$ va de $\mathbb{R}^2$ a $\mathbb{R}$ entonces la
integral de linea puede interpretarse como el area debajo de una
superficie de ecuación $f(x,y)=z$ a lo largo de un camino $\bar{\sigma}$

![IntegralesDeLinea3.JPG](4e57870c-IntegralesDeLinea3.JPG)

### Ej: {#ej}

Calcular $\int_{C}fds,\hspace{5pt} f(x,y)=xy$

$\bar{\sigma}:[0,\pi]\rightarrow\mathbb{R}^2\hspace{5pt}/\hspace{5pt}\bar{\sigma}(t)=(2\cos t,2\sin t)$

Hallamos la derivada de la parametrización de la curva:

${\bar{\sigma},}'(t)=(-2\sin (t),2\cos
(t))\hspace{5pt},\hspace{5pt}\|\|{\bar{\sigma},}\'(t)\|\|=2
\hspace{15pt}\forall t \in [0,\pi] $

Reemplazando en la definición queda:

$f,\bar{\sigma},(t)= 4\cos t \sin t\hspace{5pt},
\hspace{5pt}\|\| {\bar{\\sigma},}\'(t)\|\|dt = 2dt $

$$
\int_{C}fds = \int_{0}^{\pi}4 \cos t \sin t \cdot 2 dt=8\int_{0}^{\pi}\cos t \sin t dt = 8\frac{\sin^{2}t}{2}\left|\begin{matrix}\pi\\0\end{matrix}\right. = 0
$$

$\hspace{1pt}$

$\hspace{1pt}$

$\hspace{1pt}$

## Integral de linea de campo vectorial

Sea $\bar{F}:D\subset \mathbb{R}^3\rightarrow\mathbb{R}^3$ un campo
vectorial continuo sobre la trayectoria
$\bar{\sigma}:[a,b]\rightarrow\mathbb{R}^3$

Si $\bar{\sigma}\in C^1$ entonces la integral de linea del campo
vectorial $\bar{F}$ a lo largo de la curva $C = Im(\bar{\sigma})$ se
define :

$$
\int_{C}\bar{F}\cdot\bar{ds}=\int_{a}^{b}\bar{F}[\bar{\sigma}(t)]\cdot||{\bar{\sigma}}'(t)||dt
$$

A la integral de linea de un campo vectorial se la suele llama
**circulación**, algunos solo llaman circulación si $C$ es cerrada
$\oint_{C}\bar{F}\cdot \bar{ds}$

### Propiedades

#### 1. Linealidad {#1-linealidad}

$$
\int_{c}\left ( a\bar{F}+b\bar{G} \right )\cdot \bar{ds} = a\int_{c}\bar{F}\cdot\bar{ds}+b\int_{c}\bar{G}\cdot\bar{ds}
$$

#### 2. Propiedad aditiva respecto del camino de integración {#2-propiedad-aditiva-respecto-del-camino-de-integración}

\$C = C_1 \\cup C_2 \\cup \\cdots \\cup C_n \$

$$
\int_{C}\bar{F}\cdot\bar{ds} = \int_{C_1}\bar{F}\cdot\bar{ds}+\int_{C_2}\bar{F}\cdot\bar{ds} + \cdots + \int_{C_n}\bar{F}\cdot\bar{ds}
$$

#### 3. Importa el sentido de la parametrización {#3-importa-el-sentido-de-la-parametrización}

Si $\bar{\sigma}_1$ y \$ \\bar{\\sigma}\_2\$ son dos parametrizaciones
distintas de la misma curva orientadas en sentidos opuestos entonces:

$$
\int_{\bar{\sigma}_1}\bar{F}\cdot\bar{ds}= - \int_{\bar{\sigma}_2}\bar{F}\cdot\bar{ds}
$$

## Campos de gradientes

Sea $\bar{F}: H\subset\mathbb{R}^{n}\rightarrow\mathbb{R}^{n}$. Se dice
que $\bar{F}$ es un campo de gradientes en $H$ si existe un campo
escalar
$\phi : H\subset\mathbb{R}^{n}\rightarrow\mathbb{R} , \hspace{5pt} \phi \in Dif(H)$
tal que:

$$
\bar{F}=\bigtriangledown\phi
$$

### Ej: {#ej}

El campo $\bar{F}(x,y)=(2x , 3y^2)$ s un campo de gradientes en
$\mathbb{R}^2$ En efecto si $\phi(x,y) = x^2 + y^3$ tenemos:

$$
\bigtriangledown\phi(x,y) = \left ( \frac{\partial \phi }{\partial x} ,\frac{\partial \phi }{\partial y}\right ) = (2x , 3y^2) = \bar{F}(x,y)
$$

Tambien decimos que $\phi$ es función potencial del campo $\bar{F}$

### Propiedad

##### Independencia del camino en integral de linea. {#independencia-del-camino-en-integral-de-linea}

La circulación de $\bar{F}$ desde $\bar{A}$ hasta $\bar{B}$ a lo largo
de cualquier curva suave a trozos $C \subset H$ no depende de la curva
que se utilice y además:

$$
\int_{C}\bar{F}\cdot\bar{ds}=\phi(\bar{B}) - \phi(\bar{A})
$$

![IntegralesDeLinea4-2.JPG](69a46413-IntegralesDeLinea4-2.JPG)

$\hspace{1pt}$

$\hspace{1pt}$

$\hspace{1pt}$

$\hspace{1pt}$

Consecuencia directa del teorema:

La integral a lo largo de todo camino cerrado es $0$

$$
\oint_{C}\bar{F}\cdot\bar{ds}=\phi(\bar{A}) - \phi(\bar{A}) = 0
$$

![IntegralesDeLinea5.JPG](1a0ca8e3-IntegralesDeLinea5.JPG)

Además si $\phi(\bar{A}) = \phi(\bar{B})$ entonces

$$
\int_{C}\bar{F}\cdot\bar{ds}=\phi(\bar{B}) - \phi(\bar{A}) = 0
$$

### Condición necesaria para que un campo sea de gradientes

Como $\bar{F} \in C^1 (H)$ entonces
$\bigtriangledown \phi \in C^1 (H)$ y entonces $\phi \in C^2(H)$

### **La matriz jacobiana de $\bar{F}$ es simetrica.**

$$
D\bar{F} = \begin{pmatrix}

 {\phi}''_{xx} & {\phi}''_{xy}\\
 {\phi}''_{yx}& {\phi}''_{yy}
\end{pmatrix}
$$

Si F es campo de gradientes entonces su matriz jacobiana es simetrica.

En particular nos interesa el teorema reciproco. Es decir si la matriz
NO es simetrica entonces $\bar{F}$ no puede ser campo de gradientes.

$\hspace{1pt}$

$\hspace{1pt}$

$\hspace{1pt}$

#### Ej : $(P(x,y) ,Q(x,y)) =(\phi'_{x} ,\phi'_{y}) $

![IntegralesDeLinea6.JPG](895d6c29-IntegralesDeLinea6.JPG)

### Conjunto simplemente conexo

Un conjunto conexo \$H\\subset \\mathbb{R}\^n \$ se dice simplemente
conexo cuando toda curva cerrada contenida en $H$ puede por deformación
continua reducirse a un punto manteniéndose en el conjunto.

En $\mathbb{R}^2$ la idea se puede reemplazar por si el conjunto $H$
tiene \"agujeros\" o no. Si los tiene entonces no es simplemente conexo.

![IntegralesDeLinea7.JPG](b8ddf2b0-IntegralesDeLinea7.JPG)

$H$ es simplemente conexo.

![IntegralesDeLinea8.JPG](e3d284e3-IntegralesDeLinea8.JPG)

$N$ no es simplemente conexo.

En $\mathbb{R}^3$ estos \"agujeros\" deben ser interpretados como rectas
infinitas, ya que si fuesen solo un segmento la curva _cerrada_ podría
colapsar a punto \"esquivando\" el segmento no incluido en el conjunto
$H$

Con el concepto de conjunto simplemente conexo podemos definir una
condición suficiente para que un campo sea de gradientes.

### Condición suficiente para que un campo sea de gradientes

Sea $\bar{F}: H\subset\mathbb{R}^{n}\rightarrow\mathbb{R}^{n}$ con
matriz jacobiana $D\bar{F}$ continua y **simetrica** en el conjunto $H$
abierto y **simplemente conexo**. Entonces existe
$\phi : H \subset \mathbb{R}^n \rightarrow \mathbb{R}$ tal que
$\bigtriangledown \phi = \bar{F}$

## Construcción de la función potencial

Sea \$\\bar{F} : \\mathbb{R}\^2 \\rightarrow \\mathbb{R}\^2
\\hspace{5pt} /\\hspace{5pt} \\bar{F} (x,y) = (x+y\^2 , 2xy) \$

Sabemos que $\bar{F} \in C^1 (\mathbb{R}^2)$ por sus componentes ser
suma y producto de funciones $C^1 (\mathbb{R}^2)$

Calculamos su matriz jacobiana para ver si es simetrica y saber si
admite función potencial.

$$
D\bar{F} = \begin{pmatrix}

1 &2y \\
 2y&2x
\end{pmatrix}
$$

Como es simetrica y continua en $\mathbb{R}^2$ entonces admite función
potencial por ser $\mathbb{R}^2$ un conjunto abierto y **simplemente
conexo**

$$
\phi : \mathbb{R}^2 \rightarrow \mathbb{R}\hspace{5pt} /\hspace{5pt} \bigtriangledown \phi (x,y) = \bar{F} (x,y)
$$

Como $\bar{F}$ es el gradiente de $\phi$ entonces sus componentes son
las derivadas parciales de $\phi$

$$
\left\{\begin{matrix}

\phi_x'(x,y) = x+y^2 \hspace{5pt} (1)\\
\phi_y'(x,y) = 2xy \hspace{5pt} (2)
\end{matrix}\right.
$$

Integramos $(1)$ respecto de $x$ :

$$
\phi(x,y) = \frac{x^2}{2} + y^2 x + \alpha(y)\hspace{5pt}  (3)
$$

Derivamos $(3)$ respecto de $y$ e igualamos a $(2)$ para hallar
$\alpha(y)$

$$
2xy+ \alpha'(y) = 2xy
$$

$$
\alpha'(y) = 0 \Rightarrow \alpha(y) = c
$$

Luego reemplazando $\alpha(y)$ en nuestra ecuación de $\phi$ nos queda
una familia de funciones potenciales:

$$
\phi : \mathbb{R}^2 \rightarrow \mathbb{R}\hspace{5pt} /\hspace{5pt} \phi (x,y) = \frac{1}{2} x^2 + y^2x + c
$$

$$
\bigtriangledown \phi (x,y) = (x+y^2,2xy)
$$
