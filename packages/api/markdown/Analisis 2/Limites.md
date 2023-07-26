
# Limites

## Limites de campos escalares

Sea $f: D_f \subset \mathbb{R} \rightarrow \mathbb{R}$ y sea $\bar{x}_0$
un punto de acumulación de $D_f$

Diremos que el número $l \in \mathbb{R}$ es el limite de $f$ cuando
$\bar{x}$ tiende a $\bar{x}_0$

## Propiedades

Sean $f: D_f \subset \mathbb{R} \rightarrow \mathbb{R}$ y
$g: D_g \subset \mathbb{R} \rightarrow \mathbb{R}$ , $\bar{x}_0$ pto de
acumulación de $D_f$ y $D_g$

Y $\lim_{\bar{x}\rightarrow\bar{x}_0}f(\bar{x}) = l_1$,
$\lim_{\bar{x}\rightarrow\bar{x}_0}g(\bar{x}) = l_2$

1.

$$
\lim_{\bar{x}\rightarrow\bar{x}_0}[f(\bar{x})+g(\bar{x})] = l_1 + l_2
$$

1.

$$
\lim_{\bar{x}\rightarrow\bar{x}_0}kf(\bar{x})=k \cdot l_1
$$

1.

$$
\lim_{\bar{x}\rightarrow\bar{x}_0}[f(\bar{x})\cdot g(\bar{x})]=l_1 \cdot l_2
$$

1.

$$
\lim_{\bar{x}\rightarrow\bar{x}_0}[\frac{f(\bar{x})}{g(\bar{x})}]=\frac{l_1}{l_2}
$$

1 y 2 también aplican para campos vectoriales.

## Funciones acotadas e infinitesimos

Si $f(x,y) = h(x,y)g(x,y)$ y $h$ es una función acotada en un
$E^*(x_0,y_0)$ y $g$ es un infinitésimo en $(x_0,y_0)$ entonces:

$$

\lim_{\bar{x}\rightarrow\bar{x}_0}f(x,y) = \lim_{\bar{x}\rightarrow\bar{x}_0}h(x,y)g(x,y)=0

$$

## Funciones acotadas

$\large\begin{matrix} f_1(x,y)=\frac{x^2}{x^2+y^2}\\ f_2(x,y)=\frac{x}{\sqrt{x^2+y^2}}\\ f_3(x,y)=\frac{y}{\sqrt{x^2+y^2}}\\ f_4(x,y)=\frac{|x|}{\sqrt{x^2+y^2}}\\ f_5(x,y)=\frac{|y|}{\sqrt{x^2+y^2}} \end{matrix}$

## Limite importante

$$
\lim_{(x,y)\rightarrow(x_0,y_0)}f(x,y)=0 \Rightarrow \lim_{(x,y)\rightarrow(x_0,y_0)}\frac{\sin[f(x,y)]}{f(x,y)}=1
$$

## Limites sucesivos o reiterados

$$
l_{12} = \lim_{y\rightarrow y_0}\lim_{x\rightarrow x_0}f(x,y)=0
$$

$$
l_{21} = \lim_{x\rightarrow x_0}\lim_{y\rightarrow y_0}f(x,y)=0
$$

Si $\exists l, \exists l_{12}, \exists l_{21}$ entonces
$l=l_{12}=l_{21}$

Nos interesa el corolario: Si $l_{12}\neq l_{21}\Rightarrow \nexists l$

## Propiedad

Si \$f(x,y)\\rightarrow l_1 \$ cuando $(x,y)\rightarrow(x_0,y_0)$ por
una curva $c_1$ y \$f(x,y)\\rightarrow l_2 \$ cuando
$(x,y)\rightarrow(x_0,y_0)$ por una curva $c_2$ siendo

$$
l_1 \neq l_2 \Rightarrow \nexists \lim_{(x,y)\rightarrow(x_0,y_0)}f (x,y)
$$

También podemos aproximarnos por una familia de rectas. Se los llama
limites radiales $y-y_0 = m(x-x_0)$ y si el resultado del limite depende
de $m$ entonces no existe el limite doble.

## Continuidad de una función en un punto

Sea $f: D_f \subset \mathbb{R}^n \rightarrow \mathbb{R}$ y $\bar{x}_0$
pto de acumulación del dominio $D_f$

$f$ es continua en $\bar{x}_0$
$\Leftrightarrow \lim_{\bar{x}\rightarrow \bar{x}_0} f(\bar{x})=f(\bar{x}_0)$

$f$ es continua en un conjunto si es continua en cada punto del
conjunto.

$f: D_f \subset \mathbb{R}^n \rightarrow \mathbb{R}$,
$g: D_g \subset \mathbb{R}^n \rightarrow \mathbb{R}$ dos campos
escalares continuos en $\bar{x}_0$ entonces:

1. $f+g$ es continua en $\bar{x}_0$
2. $f\cdot g$ es continua en $\bar{x}_0$
3. $\frac{f}{g}$ es continua $g(\bar{x}_0)\neq 0$

Las funciones polinomicas son continuas, con dominios adecuados la
composición de funciones continuas es continua.

## Clasifciacion de discontinuidades

Si existe el limite pero no es igual a la imagen entonces la
discontinuidad es **evitable**

Si no existe el limite entonces la discontinuidad es **esencial**
