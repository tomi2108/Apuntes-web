
# Ecuaciones diferenciales

## Definición de campo escalar homogéneo

Un campo escalar $f : D \subset \mathbb{R}\^n \rightarrow
\mathbb{R}$ es homogéneo de grado $k$ si:

$$
\forall \bar{x} \in D \,\,,\,\, \forall t\in \mathbb{R}-\{0\} : f(t\bar{x}) = t^kf(\bar{x})
$$




Observemos que $f$ es homogéneo de grado $0$ si:
$f(t\bar{x}) = t^0f(\bar{x}) = f(x)$

### Ej 1:

Sea $f :\mathbb{R}^2 \rightarrow \mathbb{R}/f(x,y)=x^3 + xy^2$
determinar si el campo escalar es homogéneo y si lo es indicar el grado.


$$
f(tx,ty)=(tx)^3 + tx(ty)^2 = t^3x^3 + t^3xy^2= t^3(x^3+xy^2)= t^3f(x,y)
$$




Concluimos que $f$ es homogéneo de grado $3$.

### Ej 2:

$f :D\subset \mathbb{R}^2 \rightarrow \mathbb{R}/f(x,y)=\frac{3x^2}{y^2}$


$$
f(tx,ty)= \frac{3(tx)^2}{(ty)^2}=\frac{3t^2x^2}{t^2y^2}= \frac{3x^2}{y^2}= f(x,y)
$$




Por lo tanto concluimos que $f$ es homogéneo de grado 0.

### Ej 3:

$f :D\subset \mathbb{R}^2 \rightarrow \mathbb{R}/f(x,y)=x+y+1$


$$
f(tx,ty)=tx+ty+1=t(x+y)+1\neq t^k f(x,y)
$$




Concluimos que $f$ no es homogéneo.

Una ecuación difrencial de primer orden $P(x,y)dx + Q(x,y)dy = 0$ es
homogénea si las funciones $P$ y $Q$ son homogéneas del mismo grado.

### Ej:

$xy^2dx+y^3dy = 0$ es una E.D homogénea porque $P(x,y)=xy^2$ es
homogénea de grado 3 y $Q(x,y)=y^3$ también lo es:


$$
\begin{matrix}
P(x,y)=xy^2\\
P(tx,ty)=tx(ty)^2=txt^2y^2=t^3xy^2=t^3P(x,y)\\
Q(x,y)=y^3\\
Q(tx,ty)=(ty)^3=t^3y^3=t^3Q(x,y)
\end{matrix}
$$




De $P(x,y)dx + Q(x,y)dy = 0$ se puede deducir: $Q(x,y)dy = -P(x,y)dx$ y despues:


$$
\frac{dy}{dx} = \frac{-P(x,y)}{Q(x,y)}
$$





$$
y' = f(x,y)
$$
 Siendo una $f$ una función homogénea de grado 0.



Para resolver usamos uno de los siguientes cambios de variable $y=ux$ ó
$x=uy$ vamos a tomar $y=ux$ o lo que es igual $\frac{y}{x}=u$ con
$x\neq 0$ por que la función mas simple acompaña al $dy$.


$$
\begin{matrix}


y=ux\\
y'=u'x+u
\end{matrix}
$$




Reemplazamos en la E.D :


$$
u'x+u=f(x,ux)= f[x(1,u)] = x^0f(1,u)=f(1,u)
$$




Podemos sacar la $x$ afuera de la función por ser $f$ una función
homogénea de grado $0$.


$$
\begin{matrix}
u'x=f(1,u)-u\\
\frac{du}{dx}=f(1,u)-u \\
\frac{du}{f(1,u)-u}=\frac{dx}{x}\\
\int\frac{du}{f(1,u)-u}=\int\frac{1}{x}dx\\
G(u)=\ln|x|+c\\
G(\frac{y}{x})=\ln|x|+c
\end{matrix}
$$




## Ecuaciones diferenciales totales exactas(E.D.T.E) {#ecuaciones-diferenciales-totales-exactasedte}

$P(x,y)dx + Q(x,y)dy = 0 \hspace{5pt}(1) \hspace{15pt} P,Q \in C^1(D)$
con $D$ abierto y simplemente conexo.

Si la expresión $P(x,y)dx + Q(x,y)dy = 0$ es el diferencial de algún
campo escalar
$\phi : D \subset \mathbb{R}^2 \rightarrow \mathbb{R}\;\; /\;\; d\phi(x,y)=0$

$\phi_x(x,y)dx + \phi_y(x,y)dy=0$

Entonces $\phi(x,y)=c$ es la s.g de la E.D.

$\left\{\begin{matrix} \phi_x(x,y)=P(x,y)\\ \phi_y(x,y)=Q(x,y) \end{matrix}\right. \Rightarrow \left\{\begin{matrix} \phi_{xy}(x,y)=P_y(x,y)\\ \phi_{yx}(x,y)=Q_x(x,y) \end{matrix}\right.$

Y por el teorema de Schwarz $P_y(x,y)=Q_x(x,y)$ que es el criterio de
exactitud para determinar si $(1)$ es una E.D.

Recordemos que si
$\bar{f} : D \subset \mathbb{R}^2 \rightarrow \mathbb{R}^2 \,\,/\,\, \bar{f}(x,y)=\left ( P(x,y) , Q(x,y) \right )$
es un campo de gradientes existe una función potencail
$\phi : D \subset \mathbb{R}^2 \rightarrow \mathbb{R} \,\,/\,\, \nabla\phi = \bar{f}$
precisamente los conjuntos de nivel de la función potencial $\phi$ serán
la s.g de la E.D.

### Ej


$$
\left\{\begin{matrix}


xy^2 dx + (yx^2+1)dy = 0\\
y(1)=0
\end{matrix}\right.
$$





$$
\begin{matrix}


P: \mathbb{R}^2 \rightarrow \mathbb{R}\,\,/\,\, P(x,y)=xy^2\\
Q: \mathbb{R}^2 \rightarrow \mathbb{R}\,\,/\,\, Q(x,y)=yx^2+1
\end{matrix} \hspace{15pt} P,Q  \in C^1(\mathbb{R}^2)
$$




Derivamos $P$ respecto de $y$ y $Q$ respecto de $x$.


$$
\begin{matrix}


P_y(x,y)=2xy\\
Q_x(x,y)=2xy
\end{matrix} \Rightarrow \text{La E.D es del tipo T.E}
$$




Entonces sabemos que existe una función que cumple:

$$
\left\{\begin{matrix}


\phi_x(x,y)=xy^2\hspace{15pt}(1)\\
\phi_y(x,y)=yx^2+1\hspace{15pt}(2)
\end{matrix}\right.
$$




Integramos $(1)$ respecto de $x$:


$$
\phi(x,y)=\frac{1}{2}x^2y^2+\alpha(y)
$$




Derivamos $\phi$ respecto de y e igualamos a $(2)$ para encontrar
$\alpha(y)$:


$$
x^2y +\alpha'(y) = yx^2 +1
$$





$$
\alpha'(y) = 1 \Rightarrow \alpha(y)=y+c_1
$$




Entonces la solución general de la ecuación diferencial queda:


$$
\frac{1}{2}x^2y^2+y = c_2
$$




Con la condición $y(1)=0$ queda $c_2=0$ y la solución del ej
queda:
$$
\frac{1}{2}x^2y^2+y = 0
$$


Veamos un ejemplo de una E.D que no es del tipo T.E pero puede reducirse
a una T.E.


$$
(2y^2+3x)dx+2xydy=0
$$





$$
\begin{matrix}


P(x,y)=2y^2+3x\hspace{10pt},\hspace{10pt}
P_y(x,y)=4y\\
Q(x,y)=2xy\hspace{10pt},\hspace{10pt}Q_x(x,y)=2y
\end{matrix}\Rightarrow \text{No es T.E}
$$




Sea:
$$
\begin{matrix}


P(x,y)dx+Q(x,y)dy=0\\
P_y(x,y)\neq Q_x(x,y)
\end{matrix}
$$




Supongamos que existe un factor integrante que depende de $x$: $\mu (x)$


$$
\begin{matrix}


\mu(x)\left[ P(x,y)dx+Q(x,y)dy   \right]=0\\
\mu(x)P(x,y)dx+ \mu(x)Q(x,y)dy = 0
\end{matrix}
$$




Para que sea una T.E se tiene que cumplir:


$$
\large\begin{matrix}


\left [\mu(x)Q(x,y)  \right ]_x = \left [ \mu(x)P(x,y) \right ]_y\\
\mu'(x)Q(x,y)+\mu(x)Q_x(x,y)= \mu(x)P_y(x,y)\\
\mu'(x)Q(x,y)= \mu(x)P_y(x,y)-\mu(x)Q_x(x,y)\\
\mu'(x)Q(x,y)= \mu(x)[P_y(x,y)-Q_x(x,y)]\\
\frac{\mu'(x)}{\mu(x)}=\frac{P_y(x,y)-Q_x(x,y)}{Q(x,y)}
\end{matrix}
$$




Para que exista el factor integrante $\mu(x)$ la expresión de arriba
tiene que depende solo de $x$; en ese caso queda:


$$
\large\mu(x)=e^{\int \frac{P_y-Q_x}{Q}dx}
$$




Entonces resolvemos el ejemplo:


$$
\frac{P_y-Q_x}{Q} = \frac{4y-2y}{2xy}=\frac{2y}{2xy}=\frac{1}{x}\rightarrow \text{Depende solo de x}
$$




Luego existe el factor integrante
$\mu(x)=e^{\int \frac{1}{x}dx} = e^{\ln|x|}= |x|\Rightarrow \mu(x)=x$

Planteamos la E.D de nuevo pero multiplicando por el factor integrante.


$$
x(2y^2+3x)dx+x2xydy=0
$$





$$
(2xy^2+3x^2)dx+2x^2ydy=0
$$




Ahora si derivamos $P$ y $Q$ queda:


$$
\begin{matrix}


P(x,y)=2xy^2+3x^2\hspace{10pt},\hspace{10pt}
P_y(x,y)=4xy\\
Q(x,y)=2x^2y\hspace{10pt},\hspace{10pt}Q_x(x,y)=4xy
\end{matrix}\Rightarrow \text{Si es T.E}
$$




Entonces sabemos que existe una función que cumple:

$$
\left\{\begin{matrix}


\phi_x(x,y)=2xy^2+3x^2\hspace{15pt}(1)\\
\phi_y(x,y)=2x^2y\hspace{15pt}(2)
\end{matrix}\right.
$$




Integramos $(1)$ con respecto a $x$ para hallar $\phi(x,y)$


$$
\phi(x,y)=x^2y^2+x^3+\alpha(y)
$$




Derivamos respecto de $y$ e igualamos a $(2)$ para hallar $\alpha(y)$


$$
2x^2y+\alpha'(y)=2x^2y
$$





$$
\alpha'(y) = 0 \Rightarrow \alpha(y)=c_1
$$




Entonces la solución general queda: $x^2y^2+x^3=c$

##### Nota

También se puede plantear un factor integrante que dependa de $\mu(y)$ y
en ese caso queda:
$$
\large\mu(y)=e^{\int \frac{Q_x-P_y}{P}dy}
$$
