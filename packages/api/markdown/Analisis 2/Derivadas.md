# Derivadas

## Superficies parametrizadas

Sea
$\bar{\sigma}: D_{uv} \subset \mathbb{R}^2 \rightarrow \mathbb{R}^3 / \bar{\sigma} (u,v) = \left (x(u,v),y(u,v),z(u,v) \right )$
con $D_{uv}$ conexo y $\bar{\sigma}$ continua entonces:

$$
Im(\bar{\sigma}) = S
$$

![Derivadas1.JPG](1b3e72ca-Derivadas1.JPG)

### Ej

Sea
$\bar{\sigma}: D_{uv} \subset \mathbb{R}^2 \rightarrow \mathbb{R}^3 / \bar{\sigma} (u,v) = \left (u \cos v,u \sin v ,u \right )$
y

$D_{uv} = \{(u,v) \in \mathbb{R}^2: 0 \leq u \leq 2, 0 \leq v \leq 2\pi\}$

Escribimos la parametrización con ecuaciones cartesianas

$$
\left\{\begin{matrix}

x=u \cos v \hspace{15pt} (1)\\
y= u \sin v\hspace{15pt} (2)\\
z = u \hspace{15pt} (3)
\end{matrix}\right.
$$

$$
\begin{matrix}

\text{De}(1)\hspace{10pt} x^2=u^2\cos^2 v \\
\text{De}(2)\hspace{10pt} y^2=u^2\sin^2 v\\
x^2+y^2=u^2\hspace{10pt}\text{como}\hspace{10pt} u\geq 0 \\
u = \sqrt{x^2+y^2}\\
z = \sqrt{x^2+y^2}, z\leq 2
\end{matrix}
$$

![Derivadas2-2.JPG](4a0e2eb4-Derivadas2-2.JPG)

## Derivabilidad

## Derivada de una función vectorial

Sea $\bar{f} : D\subset \mathbb{R} \rightarrow \mathbb{R}^n$,
$t_0 \in D$ Si existe con norma finita

$$
\lim_{h\rightarrow 0} \frac{\bar{f}(t_0+h)-\bar{f}(t_0)}{h}
$$
 diremos

que $\bar{f}$ es derivable en $t_0$

$$
\bar{f}'(t_0)=\lim_{h\rightarrow 0} \frac{\bar{f}(t_0+h)-\bar{f}(t_0)}{h}
$$

O bien,

$$
\bar{f}'(t_0)=\lim_{t\rightarrow t_0} \frac{\bar{f}(t)-\bar{f}(t_0)}{t-t_0}
$$

Una función vectorial es derivble en un punto $t_0$ si y solo si las
componentes son derivalbes en ese punto.

![imagen.png](32983747-imagen.png)

![imagen.png](e1d03284-imagen.png)

Si $\bar{f}(t)$ representa la posición de una particula en cada instante
$t$:

Vector velocidad: $\bar{v}(t) =\bar{f}' (t)$

Rapidez : $s(t)= ||\bar{f}' (t)||$

Vector aceleración: $\bar{a}(t) = \bar{v}' (t) = \bar{f}'' (t)$

### Ej: {#ej}

Sea
$\bar{f} : D\subset [0,4] \rightarrow \mathbb{R}^2 /\bar{f}(t) = \left(\sqrt{t},2-t\right)$

$C = Im(\bar{f})$

Primero encontremos los limites de $x$ y despues escribamos $y$ en
función de $x$

$$
\begin{matrix}

0\leq t \leq 4\\
0\leq \sqrt{t} \leq \sqrt{4} \\
0\leq \sqrt{t} \leq 2\\
0\leq  x \leq 2
\end{matrix}
$$

$$
\left\{\begin{matrix}

x=\sqrt{t} \rightarrow x^2 = t \\
y = 2-t \rightarrow y = 2- x^2, 0 \leq x \leq 2
\end{matrix}\right.
$$

Graficamos y hallamos el vector tangente.

![Derivadas5.JPG](3a44f3f2-Derivadas5.JPG)

## Punto regular de una curva

Un punto $P_0 = \bar{f} (t_0)$ es un punto regular de $C= Im(\bar{f})$
si y solo si $\exists \bar{f}'(t_0) \;\;\wedge\;\; \bar{f}'(t_0) \neq 0$

En el ejemplo, $P_0 = (1,1) =\bar{f} (1) $ es un punto regular

## Punto simple

Un punto $P_0 = \bar{f} (t_0)$ es un punto simple de la curva $C$ cuando
es imágen de un solo punto del dominio.

## Recta tangente y plano normal

### Recta tangente

$\bar{x} = P_0 + \lambda \cdot \bar{f}'(t_0) , \;\; \lambda \in \mathbb{R}$

### Plano normal

$\bar{f}' (t_0) \cdot (\bar{x} - P_0) = 0$

![Derivadas6.JPG](c1ec8d4b-Derivadas6.JPG)

## Derivadas de campos esclares

Sea $f : D \subset \mathbb{R} ^2 \rightarrow \mathbb{R} / z= f(x,y)$ y
$P_0= (x_0,y_0) \in D$

Derivada parcial de $f$ en el punto $P_0$ se denota por: $f_x (P_0),$

$f_x' (P_0)$

$\frac{\partial f}{\partial x}(P_0)$

$D_1 f(P_0)$

Si el limite existe entonces:

$$
f_x (P_0) = \lim_{h\rightarrow 0} \frac{f(x_0+h,y_0)-f(x_0,y_0)}{h}
$$

Analogamente:

$$
f_y (P_0) = \lim_{h\rightarrow 0} \frac{f(x_0,y_0+h)-f(x_0,y_0)}{h}
$$

### Interpretación geometrica de las derivadas parciales

![Derivadas7.JPG](839a4d52-Derivadas7.JPG)

## Derivada direccional de un campo escalar

Sea $f : D \subset \mathbb{R} ^n \rightarrow \mathbb{R} / z= f(x,y)$ ,
$P_0 \in D $ y $ \bar{v} \in \mathbb{R}\^n$

Si el limite existe la derivada en dirección de $\bar{v}$ se define:

$$
f'(P_0,\bar{v}) =\lim_{h\rightarrow 0} \frac{f(P_0+h\bar{v})-f(P_0)}{h}
$$

Caso particular $\bar{v}= \bar{0}$, la derivada en dirección del vector
nulo siempre existe y vale $0$.

![Derivadas8.JPG](88561d12-Derivadas8.JPG)

$\bar{x} = P_0 + h\cdot \bar{v} , h \in \mathbb{R}$ son puntos de una
recta.

Cuando $||\bar{v}|| = 1$ la derivada recibe el nombre de **derivada
direccional**

En este caso las derivadas parciales son un caso particular cuando se
deriva en la dirección de los versores canónicos.

## Propiedad de homogeneidad

$$
f'(P_0,k\bar{v}) = k f'(P_0, \bar{v})
$$

### Utilidad

$$
f'(P_0,\breve{v}) =  \frac{1}{||\bar{v}||}\cdot f'(P_0, \bar{v})
$$

## Derivada direccional de un campo vectorial

Sea $\bar{f} : D \subset \mathbb{R}\^n \rightarrow \mathbb{R}\^m
$, $P_0\in D $, $\breve{v} \in \mathbb{R}^m$ $/ ||\breve{v}|| = 1$

$$
\bar{f}'(P_0,\bar{v}) =\lim_{h\rightarrow 0} \frac{\bar{f}(P_0+h\bar{v})-\bar{f}(P_0)}{h}
$$

Este limite existe si y solo si existen los limites de todas las
componentes.

## Derivadas parciales sucesivas

![Derivadas9.JPG](269b91ae-Derivadas9.JPG)

## Teorema de Schwarz

Sea $f:D_f \subset \mathbb{R}^2 \rightarrow \mathbb{R}$ y el punto
$P_0=(x_0,y_0)$ interior a $D_f$ ,si existen $f_x, f_y$ y $f_{xy}$ en un
entorno de $P_0$ y $f_{xy}$ es continua en $P_0$ , entonces existe y
$f_{yx}(P_0)$resultando $f_{yx}(P_0)=f_{xy}(P_0)$

## Diferenciabilidad

Sea $f:D\subset \mathbb{R}^2\rightarrow \mathbb{R}\;\;/\;\;z=f(x,y)$ y
$P_0=(x_0,y_0)\in D$

$f$ es diferenciable en $P_0$ si $f_x(P_0)$ y $f_y(P_0)$ existen y:

$$
\lim_{(x,y)\rightarrow (x_0,y_0)}\frac{f(x,y)-[f(x_0,y_0)+f_x(x_0,y_0)(x-x_0)+f_y(x_0,y_0)(y-y_0)]}{||(x,y)- (x_0,y_0)||} = 0
$$

### Plano tangente

$$
 z= f(x_0,y_0)+f_x(x_0,y_0)(x-x_0)+f_y(x_0,y_0)(y-y_0)
 $$

## Gradiente

Sea $f:D\subset \mathbb{R}^n\rightarrow \mathbb{R}$, $P_0=(x_0,y_0)$

El vector cuyas componentes son las $n$ derivadas parciales de $f$ en
$P_0$ se llama gradiente de la función en $P_0$ y se denota:

$$
\bar{\nabla}f(P_0)=\left ( \frac{\partial f}{\partial x},\frac{\partial f}{\partial x_2},\cdots,\frac{\partial f }{\partial x_n} \right )=grad(f)
$$

Para que exista el vector gradiente en un punto deben existir las $n$
derivadas parciales en ese punto.

### Caso general

Sea $f:D\subset \mathbb{R}^n\rightarrow \mathbb{R}\;\;/\;\;z=f(x,y)$ y
$P_0=(x_0,y_0)\in D$ tal que existen las $n$ derivadas parciales en
$P_0$ entonces $f$ es diferenciable en $P_0$ si:

$$
\lim_{\bar{x}\rightarrow P_0}\frac{f(\bar{x})-f(P_0)-\nabla f(P_0) \cdot(\bar{x}-P_0)}{||\bar{x}- P_0||} = 0
$$

Si $f$ es diferenciable en $P_0$ entonces $f$ es continua en $P_0$.

Si $f$ no es continua en $P_0$ entonces $f$ no es diferenciable en $P_0$

Si $f$ es diferenciable en $P_0$ entonces existe
$f'(P_0,\bar{v}) \;\;\forall \bar{v}$ y:

$$
f'(P_0,\bar{v}) = \bar{\nabla} f (P_0) \cdot \bar{v}
$$

Las funciones polinomicas son diferenciables en $\mathbb{R}^n$

## Propiedades de la matriz jacobiana

Si $\bar{f}: D\subset \mathbb{R}^n \rightarrow \mathbb{R}^n$ y
$P_0 \in D$ es tal que existen todas las derivadas parciales de
$\bar{f}$ en $P_0$ y son continuas en un $E(P_0)$ entonces
$D\bar{f}(P_0)$ es continua y $\bar{f}$ es diferenciable en $P_0$

## Componentes de un vector normal al plano tangente

$$
\bar{N}=\left (f_x(x_0,y_0),f_y(x_0,y_0),-1  \right )
$$

![Derivadas10.JPG](a0d1ad12-Derivadas10.JPG)

## Ecuación del plano tangente

![Derivadas11.JPG](8d5d4b68-Derivadas11.JPG)

## Ecuación vectorial de la recta normal

En el punto $(x_0,y_0,f(x,y))$

![Derivadas12.JPG](b8487a62-Derivadas12.JPG)

## Derivada direccional maxima, minima y nula

![Derivadas13.JPG](92fa5cd4-Derivadas13.JPG)

![Derivadas14.JPG](0c5f265f-Derivadas14.JPG)

![Derivadas15.JPG](1d6fd8cf-Derivadas15.JPG)

## Formula de aproximacion lineal de campos escalares

![Derivadas16.JPG](183b296e-Derivadas16.JPG)

## En superficies parametrizadas

![Derivadas17.JPG](22674736-Derivadas17.JPG)

## Teorema de composición de funciones

![Derivadas18.JPG](84e93ec4-Derivadas18.JPG)

## Caso particular

![Derivadas19.JPG](26d5e098-Derivadas19.JPG)

![Derivadas20.JPG](38d87422-Derivadas20.JPG)

## Apliación de la regla de la cadena

![Derivadas21.JPG](449e4c2e-Derivadas21.JPG)

![Derivadas22.JPG](779d5b33-Derivadas22.JPG)

![Derivadas23.JPG](02fc3194-Derivadas23.JPG)

![Derivadas24.JPG](c374038b-Derivadas24.JPG)
