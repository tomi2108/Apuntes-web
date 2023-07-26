
# Integrales Dobles

## Integrales dobles sobre rectangulos

Sea un campo escalar $ f :D\subset \mathbb{R}^2\rightarrow\mathbb{R} \hspace{5pt} \hspace{5pt} z=f(x,y)$ y $R$ un rectangulo del plano $xy$ de ecuaciones
$R = \begin{Bmatrix} (x,y) \in \mathbb{R}^2 : a\leq x\leq b \hspace{2pt} , \hspace{2pt} c\leq y \leq d \end{Bmatrix}$

Comenzamos dividiendo el intervalo $[a,b]$ en $m$ subintervalos de igual
amplitud $\Delta x = \frac{b-a}{m}$

Un intervalo cualquiera queda definido:
$[x_i,x_{i+1}]\hspace{15pt} i\in [0,m-1]$

Luego dividimos el intervalo $[c,d]$ en $n$ subintervalos de igual
amplitud $\Delta y = \frac{c-d}{n}$

Un intervalo cualquiera queda definido:
$[y_j,y_{j+1}]\hspace{15pt} j\in [0,n-1]$

![IntegralesDobles1.JPG](b7a6128a-IntegralesDobles1.JPG)

Sea $R_{ij}$ un subrectángulo cualquiera
$R_{ij} = [x_i,x_{i+1}]\times[y_j,y_{j+1}]$ y $P_{ij}$ un punto
cualquiera perteneciente a ese rectangulo $P_{ij}=(w_i,w_j)$

Calculamos el calor de la funcion en el punto $P_{ij}$ (altura) y
formamos la suma:

$$
\sum_{i=0}^{m-1}\sum_{j=0}^{n-1}f(P_{ij})\Delta x\Delta y
$$

Donde $\Delta x\Delta y$ representa el area del rectangulo y $f(P_{ij})$
la altura.

Haciendo tender $m$ y $n$ a infinito, si el limite de la suma existe
entonces se llama integral doble del campo escalar $f$ sobre $R$ y se
define:

$$
\iint_{R}f(x,y)dxdy = \lim_{m,n\rightarrow+\infty }\sum_{i=0}^{m-1}\sum_{j=0}^{n-1}f(P_{ij})\Delta x\Delta y
$$

Si no existe el limite, la función no es integrable.

Si $f(x,y) \geq 0 \hspace{10pt} \forall (x,y) \in R$ entonces
$\iint_{R}f(x,y)dxdy = Vol(M)$ representa el volumen del macizo $M$ que
tiene como base el rectangulo $R$ y está limitado superiormente por la
grafica de $f$ y lateralmente por los planos $x=a , x=b , y=c , y=d$
(Limites del rectangulo $R$)

![IntegralesDobles2-2.JPG](748e283f-IntegralesDobles2-2.JPG)

$$
M=\begin{Bmatrix}

(x,y,z)\in \mathbb{R}^3 : a\leq x \leq b \hspace{6pt}, \hspace{6pt} c\leq y\leq d\hspace{6pt},\hspace{6pt} 0\leq z \leq f(x,y)
\end{Bmatrix}
$$

Para resolver una integral doble la idea es dejar una variable fija e
integrar con respecto a la otra variable para así obtener una funcion de
Area que podremos integrar nuevamente.

$\hspace{1pt}$

### EJ

Sea $ f :D\\subset \\mathbb{R}\^2\\rightarrow\\mathbb{R} \\hspace{5pt}
/ \\hspace{5pt} z=f(x,y) $ continua en $D$ y $R = [a,b]\times[c,d]$ con
$D\subset R$

La integral definida $\\int\_{c}\^{d}f(x,y) dy $ indica que al
integrar la función de dos variables respecto de $y$ , la $x$ se
mantiene fija y la $y$ se integra entre $y=c$ e $y=d$ o sea, obtendremos
una función de area dependiendo de $x$:

$$
A(x) = \int_{c}^{d}f(x,y) dy
$$

![IntegralesDobles6.JPG](379c6841-IntegralesDobles6.JPG)

Si ahora integramos la funcion $A(x)$ respecto de x:

$$
\int_{a}^{b}A(x)dx = \int_{a}^{b}\left [\int_{c}^{d}f(x,y) dy \right ]dx
$$

Se puede escribir:
$$
\int_{a}^{b}dx\int_{c}^{d}f(x,y)dy
$$

Esto significa que primer integramos con respcto a $y$ y luego con
respecto a $x$

No importa el orden de integración, siempre y cuando se mantengan los
limites correspondientes a cada variable las integrales tendrán el mismo
resultado.

## Integrando en superficies mas complejas

La idea basica es la misma pero ya no integraremos en un rectangulo $R$
ahora el dominio de integración estará limitado por distintas funciones.

Sea $ f :D\\subset \\mathbb{R}\^2\\rightarrow\\mathbb{R} \\hspace{5pt}
/ \\hspace{5pt} z=f(x,y) $ continua en $D$

### Regiones de tipo $1$

Llamamos $L$ a una región donde los limites de $x$ son constantes y los
limites de $y$ dependen de $x$ con funciones
$\varphi_1(x) , \varphi_2(x)$

Entonces:
$$
L=\begin{Bmatrix}

(x,y)\in\mathbb{R}^2: a\leq x\leq b \, , \, \varphi_1(x) \leq y \leq \varphi_2 (x)
\end{Bmatrix}
$$

$$
\iint_{L}f(x,y)dydx=\int_{a}^{b}\int_{\varphi_1(x)}^{\varphi_2(x)}f(x,y)dydx
$$

La integral doble se resuelve de la misma forma que cualquier otra,
tomando $x$ como una constante e integrando respecto de $y$ pero al
evaluar la primer integral aplicaremos la *regla de Barrow* reemplazando
esta vez con funciones de $x$ en lugar de valores constantes de $y$.

La grafica de la región podría ser algo asi:

![IntegralesDobles3.JPG](49f57563-IntegralesDobles3.JPG)

### Regiones de tipo $2$

Llamamos $L$ a una región donde los limites de $y$ son constantes y los
limites de $x$ dependen de $y$ con funciones
$\varphi_1(y) , \varphi_2(y)$

Entonces:
$$
L=\begin{Bmatrix}

(x,y)\in\mathbb{R}^2: c\leq y\leq d \, , \, \varphi_1(y) \leq x \leq \varphi_2 (y)
\end{Bmatrix}
$$

$$
\iint_{L}f(x,y)dxdy=\int_{c}^{d}\int_{\varphi_1(y)}^{\varphi_2(y)}f(x,y)dxdy
$$

La grafica de la región podría ser algo asi:

![IntegralesDobles4.JPG](d9a09bba-IntegralesDobles4.JPG)

**Tanto para regiones de tipo $1$ como de tipo $2$ es importante tener
en cuenta el orden de integración además de definir bien los limites. Se
debe integrar en ulitmo lugar la variable que tenga valores constantes y
en primer lugar la variable que dependa de funciones de la otra
variable. Además es importante utilizar como limite inferior a la
función que esté mas cercana al eje coordenado correspondiente**

## Ej

Sea $D$ la región del primer cuadrante limitada por $y=2x^2$ e $y=2$
calcular:
$$
\iint_{D}(1+xy)dxdy
$$

Es muy util siempre graficar la región de integración en un plano:

![IntegralesDobles5.JPG](282e364c-IntegralesDobles5.JPG)

Comenzaremos integrando con $y$ como función de $x$ ya que las
ecucaciones dadas son de la forma $y=\varphi(x)$

Para esto definiremos los limites de integración de $y$ como funciones
de $x$ y resultán así
$$
y_0=2x^2,y_1=2
$$

Entonces:
$$
\iint_{D}(1+xy)dxdy =

\int_{0}^{1}dx\int_{2x^2}^{2}(1+xy)dy
$$

$$
\int_{0}^{1}dx\left.\begin{matrix}

\begin{bmatrix}
y+x\frac{y^{2}}{2}
\end{bmatrix}\end{matrix}\right|_{2x^2}^{2}
$$

Evaluamos con regla de Barrow:

$$
\int_{0}^{1}\left [ (2+2x)-(2x^2+2x^5) \right ]dx =

\int_{0}^{1}(2+2x-2x^2-2x^5)
$$

Resolvemos la integral de 1 variable:

$$
\left.\begin{matrix}

2x+x^2-\frac{2x^3}{3}-\frac{x^6}{3}
\end{matrix}\right|_{0}^1  = 2+1-\frac{2}{3}-\frac{1}{3}= 2
$$

**Ahora cambiaremos el orden de integración ajustando los limites de la
región**

Escribimos los limites en función de $y$ y quedan:

$$
x_0=0,x_1=\sqrt{\frac{y}{2}}
$$

Entonces(cambiamos el orden de los diferenciales):

$$
\iint_{D}(1+xy)dydx =

\int_{0}^{2}dy\int_{0}^{\sqrt{\frac{y}{2}}}(1+xy)dx
$$

$$
\int_{0}^{2}dy\left.\begin{matrix}

\begin{bmatrix}
x+y\frac{x^{2}}{2}
\end{bmatrix}\end{matrix}\right|_{0}^{\sqrt{\frac{y}{2}}}
$$

Evaluamos con regla de Barrow y separamos en dos integrales:

$$
\int_{0}^{2}dy\left [ \sqrt{\frac{y}{2}} +\frac{1}{2} y\left (\sqrt{\frac{y}{2}}  \right )^2   \right ]=\int_{0}^{2} \frac{\sqrt{y}}{\sqrt{2}} dy + \int_{0}^{2}\frac{y^{2}}{4}dy
$$

Resolvemos las integrales de 1 variable:

$$
\frac{1}{\sqrt{2}} \cdot

\left.\begin{matrix}
\frac{y^{\frac{3}{2}}}{\frac{3}{2}}
\end{matrix}\right|*{0}^{2} +
\frac{1}{4} \cdot
\left.\begin{matrix}
\frac{y^3}{3}
\end{matrix}\right|*{0}^{2}
$$

$$
\frac{2}{3\sqrt{2}}\cdot 2^{\frac{3}{2}} + \frac{1}{12}\cdot 8 = 2
$$

Observemos que se llegó al mismo resultado pero una de las integrales
resultó mas compleja de resolver por el uso de raices y la agudeza
algebraica que se requiere para manejarlas correctamente.

## Cambios de variables

### Transformacion lineal

Recordemos en Analisis matematico 1

Si $f$ es continua entonces y definimos una función de x tal que:

$$
x:[c,d]\rightarrow[a,b]\hspace{5pt} / \hspace{5pt} x=g(t)
$$

Y ademas tenemos que $g\in C^1$ e inyectiva y que $g(c) = a $ y
$g(d) = b$

Entonces:

$$
\int_{a}^{b}f(x)dx = \int_{c}^{d}f(g(t))\cdot g'(t)dt
$$

De la misma forma en integrales dobles debemos definir dos funciones:

$$
\left\{\begin{matrix}

x=x(u,v)\\
y=y(u,v)
\end{matrix}\right.
$$
$$
\bar{T} : D^* \subset \mathbb{R}^2 \rightarrow D\subset \mathbb{R}^2 \hspace{2pt} / \hspace{2pt}

\bar{T}(u,v)=\left [x(u,v),y(u,v)   \right ]
$$

$\bar{T}$ debe ser inyectiva, $\bar{T} \in C^1$ y además $J_{\bar{T}}(u,v)\neq 0$

$J_t$ siendo el jacobiano, es decir:

$$
J_{\bar{T}}(u,v)=det\begin{pmatrix}

x_u(u,v) &x_v(u,v) \\
 y_u(u,v)& y_v(u,v)
\end{pmatrix}
$$

Entonces:

$$
\iint_{D}f(x,y)dx dy = \iint_{D^*}f\left [ x(u,v),y(u,v) \right ]\cdot  J_{\bar{T}}dx dy
$$

#### Ej 2

Resuelva la siguiente integral usando el cambio de coordenadas indicado:

$$
\iint_{D}(6-x-y)^{-1}dxdy \hspace{10pt},\hspace{10pt} D:\left | x+y \right |\leq 2 \hspace{5pt}\wedge\hspace{5pt} y \leq x+2 \leq 4
$$

Usando $(x,y)=(v,u-v)$

Definimos las funciones de x e y:

$$
\bar{T}\left\{\begin{matrix}

x=v\\
y=u-v
\end{matrix}\right.
$$

Calculamos el $J_{\bar{T}}$:

$$
J_{\bar{T}}=det\begin{pmatrix}

0 &1 \\
 1&-1
\end{pmatrix}= -1
$$

Reescribimos las ecuaciones de $D$ para definir $D^*$

$$
\left | v+u-v \right |\leq 2 \hspace{5pt}\wedge\hspace{5pt} (u-v) \leq (v+2) \leq 4
$$

De la primer ecuación obtenemos $-2\leq u \leq 2$ y la segunda podemos
separar las desigualdades y tomar $(u-v) \leq (v+2)$

Luego obtenemos que $v \\geq \\frac{1}{2} u -1 $

Por ultimo nos queda $v+2 \leq 4$ de la cual podemos decir $v \leq 2$

Desarrollemos las ecuaciones de $D$ para poder graficarla:

$$
D^{*}\left\{\begin{matrix}

-2\leq u \leq 2\\
v \geq \frac{1}{2} u -1\\
v \leq 2
\end{matrix}\right. \hspace{30pt}
D\left\{\begin{matrix}
-2\leq x+y \leq 2\\
y \leq x+2\\
x \leq 2
\end{matrix}\right. \hspace{30pt}
$$

Los graficos quedán así:

![IntegralesDobles7.JPG](7ff04a0d-IntegralesDobles7.JPG)

Entonces podemos reescribir la integral de la siguiente forma:

$$
\iint_{D}\frac{1}{(6-x-y)}dxdy =

\iint_{D^*}\frac{1}{(6-u)}\cdot 1 dudv
$$

Como podemos ver en el grafico tenemos que los valores de $u$ no depende
de $v$ tenemos una región de tipo $1$ y podemos resolver así:

$$
\int_{-2}^{2}du\int_{\frac{1}{2}u-1}^{2}\frac{1}{6-u}dv
$$

Estamos integrando una función que depende solo de $u$ con respecto a
$v$ por ende puede salir multiplicando la función y restamos los limites
de integración por Barrow ya que $\int dv = v$

$$
\int_{-2}^{2}\frac{1}{6-u}(2-\frac{1}{2}u+1)du = \int_{-2}^{2}\frac{1}{6-u}(3-\frac{1}{2}u)du
$$

$$
\int_{-2}^{2} \frac{1}{6-u}\cdot \frac{1}{2}(6-u) du
$$

$$
\frac{1}{2}\int_{-2}^{2} du = \frac{1}{2}\cdot 4 = 2
$$

### Coordenadas polares

![IntegralesDobles8.JPG](599fd8ff-IntegralesDobles8.JPG)

$$
\left\{\begin{matrix}

x=r\cos\theta\\
y=r\sin\theta
\end{matrix}\right.\hspace{15pt} x^2+y^2=r^2
$$

Recordemos que siempre $r\geq 0$ y $\theta < 2\pi$

Entonces definimos:

$$
\bar{T}: [0,+\infty )\times [0,2\pi)\rightarrow \mathbb{R}^{2}\hspace{5pt}/\hspace{5pt}\bar{T}(r,\theta)=(r\cos\theta,r\sin\theta)
$$

$\hspace{1pt}$

$\hspace{1pt}$

$\hspace{1pt}$

![IntegralesDobles10.JPG](d959f922-IntegralesDobles10.JPG)

Además para este cambio de variable $J_{\bar{T}} = r$ siempre.

Siendo $f$ continua en $D$ :

$$
\iint_{D}f(x,y)dxdy = \iint_{D_r\theta} f(r\cos\theta, r\sin\theta)\cdot r\, drd\theta
$$

### Coordenadas elípticas

$$
\left\{\begin{matrix}

x=ar\cos\theta\\
y=br\sin\theta
\end{matrix}\right.\hspace{15pt} x^2+y^2=r^2
$$

Recordemos que siempre $r\geq 0$ y $\theta < 2\pi$ y además $a>0$ y
$b>0$

Para este cambio de variable $J_{\bar{T}} = a\cdot b\cdot r$ siempre.

Siendo $f$ continua en $D$ :

$$
\iint_{D}f(x,y)dxdy = \iint_{D^*} f(ar\cos\theta, br\sin\theta)\cdot abr\, drd\theta
$$

Con estas coordenadas se puede asegurar que
$\\frac{x\^2}{a\^2}+\\frac{y\^2}{b\^2} = r\^2 $

#### Ej

Calcular el area de
$D=\begin{Bmatrix} (x,y)\in\mathbb{R}^2: \frac{x^2}{a^2}+\frac{y^2}{b^2}\leq 1 \end{Bmatrix}$

Usaremos coordenadas elípticas ya que sabemos que $r^2 \leq 1$ por ende
$r\leq 1$

Entonces definimos nuestras ecuaciones para $x$ e $y$:

$$
\bar{T}\left\{\begin{matrix}

x=ar\cos\theta \\
y=br\sin\theta
\end{matrix}\right. \hspace{10pt}
0\leq r \leq 1 \;\wedge\;
0 \leq \theta \leq 2\pi

$$

Además recordemos que: $J_{\bar{T}} = a\cdot b \cdot r$

Nos piden el area de la superficie de integración, es decir nuestro
campo escalar es $f(x,y)=1$

La integral queda asi:

$$
a(D)= \int_{0}^{2\pi}d\theta\int_{0}^{1}abr\cdot dr
$$

Resolviendo la primer integral:

$$
\frac{ab}{2} \int_{0}^{2\pi} d\theta = \frac{ab}{2} 2\pi = \pi \cdot a \cdot b
$$
