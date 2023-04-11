# Fisica con integrales

## Integrales de linea

### Campo escalar

Recordamos la definición:

$$
\int_{C}fds=\int_{a}^{b}f\hspace{5pt}[\bar{\sigma}\hspace{5pt}(t)]\cdot||{\bar{\sigma}\hspace{5pt}}'(t)||dt
$$




#### Densidad y masa

Conociendo la densidad lineal de un alambre $C$

$$
 \delta (x,y)=\frac{dm}{ds}
 $$




Donde $dm = \text{diferencial de masa}$ y
$ds =\text{diferencial de longitud}$ (volumen en una dimensión)

Si:
$C=Im(\bar{\sigma})\hspace{5pt},\hspace{5pt}\bar {\sigma}:[a,b]\rightarrow \mathbb{R}^2$

Entonces la masa
$$
m(c) = \int_{C}\delta (x,y)ds
$$




Si la curva estuviera en $\mathbb{R}^3$:

$$
m(c) = \int_{C}\delta (x,y,z)ds
$$




Es decir, la función de densidad $\delta (x,y)$ está funcionando como
nuestro campo escalar y la ecuacion $\bar{\sigma}\hspace{5pt}(t)$ del cable como
la curva.

##### Ejemplo:

Calcular la masa de un alambre cuya forma es de la curva intersección de
las superficies $z=2-x^2-2y^2\hspace{2pt},\hspace{2pt} z=x^2$ entre
$(0,1,0)$ y $(1,0,1)$ en el primer octante si su densidad es
$\delta (x,y,z) = kxy\hspace{5pt},\hspace{5pt} k>0$

La curva está dada como intersección de dos superficies:

$$
C\left\{\begin{matrix}


z=2-x^{2}-2y^{2}\\
z=x^2
\end{matrix}\right.
$$




$x\geq 0 \hspace{2pt},\hspace{2pt}y\geq0 \hspace{2pt},\hspace{2pt}z\geq0$
por estar limitado el ejercicio al primer octante

Reemplazamos $z=0$ e igualamos las ecuaciones para hayar la proyección
de la curva en el plano $xy$

$$
x^2 = 2-x^2-2y^2 \\ 2x^2 + 2y^2 = 2 \\ x^2 + y^2 = 1
$$

Definimos una parametrización de la curva

Para $x$ e $y$ podemos usar $\cos (t) $ y $\sin (t) $ y como
tenemos que $z=x^2$ entonces $z=\cos^2 (t)$


$$
\bar{\sigma}\left(t\right) = \left(\cos t\hspace{5pt},\hspace{5pt}\sin t\hspace{5pt},\hspace{5pt}\cos^2 (t)\hspace{5pt}\right)
$$




Debemos definir los limites de $t$ , para esto usamos las condiciones
iniciales de los puntos donde se debe integrar.

$$
\left\{\begin{matrix} \cos (t_0)=1\\ \sin (t_0)=0\\ \cos^2 (t_0)=1 \end{matrix}\right. \Rightarrow t_0=0
$$

$$
\left\{\begin{matrix} \cos (t_1)=0\\ \sin (t_1)=1\\ \cos\^2
(t_1)=0 \end{matrix}\right. \Rightarrow t_1=\frac{\pi}{2}
$$

$$
 0\leq t \leq \frac{\pi}{2}
 $$

Entonces una parametrización suave del arco de curva $C$ es:


$$
\bar{\sigma}:\left[0,\frac{\pi}{2}\right]\rightarrow\mathbb{R}^3\hspace{5pt}/\hspace{5pt}\bar{\sigma}\left(t\right) = \left(\cos t\hspace{5pt},\hspace{5pt}\sin t\hspace{5pt},\hspace{5pt}\cos^2 (t)\hspace{5pt}\right)
$$

Hallamos la derivada pues nos servirá para calcular la masa.

$$
\bar{\sigma}'(t) = \left(-\sin(t)\hspace{5pt},\hspace{5pt}\cos(t)\hspace{5pt},\hspace{5pt}-\sin(2t)\hspace{5pt}\right)\\
\left\| \bar{\sigma}'(t) \right\| = \sqrt{1+\sin^{2}(2t)}
$$

Ahora calculamos la masa usando la integral de linea:


$$
 m(c) = \int_{C}kxy\cdot ds = \int_{0}^{\frac{\pi}{2}}k\cos t\sin t \cdot\sqrt{1+\sin^2 (2t)} dt
 $$




Resolviendo la integral llegamos a
$$
m(c) = \frac{k^{(\pi+2)}}{8}
$$




#### Coordenadas del centro de masa:


$$
x_g =\frac{\int_{C}x\cdot\delta(x,y,z)\cdot ds}{Masa} =\frac{\int_{C}x\cdot\delta(x,y,z)\cdot ds}{\int_{C}\delta(x,y,z)\cdot ds}
$$





$$
y_g =\frac{\int_{C}y\cdot\delta(x,y,z)\cdot ds}{Masa} =\frac{\int_{C}y\cdot\delta(x,y,z)\cdot ds}{\int_{C}\delta(x,y,z)\cdot ds}
$$





$$
z_g =\frac{\int_{C}z\cdot\delta(x,y,z)\cdot ds}{Masa} =\frac{\int_{C}z\cdot\delta(x,y,z)\cdot ds}{\int_{C}\delta(x,y,z)\cdot ds}
$$




#### Momentos de inercia con respecto a los planos coordenados:


$$
I_x =\int_{C}(y^2+z^2)\cdot\delta(x,y,z)\cdot ds
$$





$$
I_y =\int_{C}(x^2+z^2)\cdot\delta(x,y,z)\cdot ds
$$





$$
I_z =\int_{C}(x^2+y^2)\cdot\delta(x,y,z)\cdot ds
$$




$\hspace{1pt}$

$\hspace{1pt}$

$\hspace{1pt}$

### Campo vectorial

Se puede calcular el trabajo $W$ de un campo de fuerzas $\bar{F}$ a lo
largo de una curva $C=Im(\bar{\sigma})$ con la integral.

Recordamos la definición:

$$
W = \int_{C}\bar{F}\cdot\bar{ds}=\int_{a}^{b}\bar{F}\hspace{5pt}[\bar{\sigma}\hspace{5pt}(t)]\cdot||{\bar{\sigma}\hspace{5pt}}'(t)||dt
$$




### Campo conservativos

Un campo $\bar{F}$ es conservativo cuando es un campo de gradientes.

Se dice que $\bar{F}$ es un campo de gradientes en $H$ si existe un
campo escalar
$\phi : H\subset\mathbb{R}^{n}\rightarrow\mathbb{R} , \hspace{5pt} \phi \in Dif(H)$
tal que: $\bar{F}=\bigtriangledown\phi$

Se cumplen las siguientes dos condiciones:

$$
\oint_{C}\bar{F}\cdot\bar{ds} = 0  \hspace{15pt} \forall \hspace{5pt} C\hspace{5pt} \text{cerrada}
$$





$$
\int_{C_1}\bar{F}\cdot\bar{ds} = \int_{C_2}\bar{F}\cdot\bar{ds}\hspace{15pt} \forall \hspace{5pt} C_1 , C_2 \hspace{5pt} \text{con extremos inicial y final iguales}
$$




## Integrales dobles

Dado un campo escalar $f(x,y) \geq 0 \hspace{15pt} \forall (x,y) \in R$

**Ya no tenemos un alambre $C$ sino una región $R$**

Entonces:
$$
Vol(M) =\iint_{R} f(x,y) dx dy
$$




Con $M$ el macizo tal que:

$$
M = \left \{ (x,y,z)\in \mathbb{R}^3 :(x,y) \in R \;\;\wedge\;\; 0\leq z\leq f(x,y)           \right \}
$$




Además si tenemos una función de densidad $\delta (x,y)=f(x,y)$

Entonces:
$$
Masa(R) =\iint_{R}\delta (x,y) dx dy
$$




#### Coordenadas del centro de masa: {#coordenadas-del-centro-de-masa}


$$
x_g =\frac{\iint_{R}x\cdot\delta (x,y) dx dy}{Masa} =\frac{\iint_{R}x\cdot\delta (x,y) dx dy}{\iint_{R}\delta (x,y) dx dy}
$$





$$
y_g =\frac{\iint_{R}y\cdot\delta (x,y) dx dy}{Masa} =\frac{\iint_{R}y\cdot\delta (x,y) dx dy}{\iint_{R}\delta (x,y) dx dy}
$$




#### Momentos de inercia:


$$
I_x =\iint_{R}y^2\cdot\delta (x,y) dx dy
$$





$$
I_y =\iint_{R}x^2\cdot\delta (x,y) dx dy
$$




## Integrales Triples

Dado un macizo $H$
$$
Vol(H)= \iiint_{H}dx\hspace{5pt} dy\hspace{5pt} dz
$$




Dada una función de densidad $f(x,y,z)=\delta(x,y,z)$ la masa del macizo
$H$ se calcula:


$$
Masa(H)= \iiint_{H}\delta(x,y,z)dx\hspace{5pt} dy\hspace{5pt} dz
$$




#### Coordenadas del centro de masa: {#coordenadas-del-centro-de-masa}


$$
x_g =\frac{\iiint_{H}x\cdot\delta(x,y,z)\cdot dx dy dz}{Masa} =\frac{\iiint_{H}x\cdot\delta(x,y,z)\cdot dx dy dz}{\iiint_{H}\delta(x,y,z)\cdot dx dy dz}
$$





$$
y_g =\frac{\iiint_{H}y\cdot\delta(x,y,z)\cdot dx dy dz}{Masa} =\frac{\iiint_{H}x\cdot\delta(x,y,z)\cdot dx dy dz}{\iiint_{H}\delta(x,y,z)\cdot dx dy dz}
$$





$$
z_g =\frac{\iiint_{H}z\cdot\delta(x,y,z)\cdot dx dy dz}{Masa} =\frac{\iiint_{H}x\cdot\delta(x,y,z)\cdot dx dy dz}{\iiint_{H}\delta(x,y,z)\cdot dx dy dz}
$$




#### Momentos de inercia: {#momentos-de-inercia}


$$
I_x =\iiint_{H}(y^2+z^2)\cdot\delta (x,y,z) dx dy dz
$$





$$
I_y =\iiint_{H}(x^2+z^2)\cdot\delta (x,y,z) dx dy dz
$$





$$
I_z =\iiint_{H}(x^2+y^2)\cdot\delta (x,y,z) dx dy dz
$$




## Integrales de superficie

### Campo escalar {#campo-escalar}

Dada una función de densidad $\delta (x,y,z) = f (x,y,z)$ y una
superficie $S$ de parametrización $\bar{T}$ :


$$
Masa (S) = \iint_{S} \delta(x,y,z) \cdot dr  = \iint_{S} \delta[\bar{T}(u,v)]  \cdot ||\bar{T}_u(u,v) \times \bar{T}_v(u,v) ||dudv
$$




#### Coordenadas del centro de masa: {#coordenadas-del-centro-de-masa}


$$
x_g =\frac{\iint_{S}x\cdot\delta(x,y,z)\cdot dx dy dz}{Masa} =\frac{\iint_{S}x\cdot\delta(x,y,z)\cdot dx dy dz}{\iint_{S}\delta(x,y,z)\cdot dx dy dz}
$$





$$
y_g =\frac{\iint_{S}y\cdot\delta(x,y,z)\cdot dx dy dz}{Masa} =\frac{\iint_{S}y\cdot\delta(x,y,z)\cdot dx dy dz}{\iint_{S}\delta(x,y,z)\cdot dx dy dz}
$$





$$
z_g =\frac{\iint_{S}z\cdot\delta(x,y,z)\cdot dx dy dz}{Masa} =\frac{\iint_{S}z\cdot\delta(x,y,z)\cdot dx dy dz}{\iint_{S}\delta(x,y,z)\cdot dx dy dz}
$$




### Momentos de inercia {#momentos-de-inercia}


$$
I_x =\iint_{S}(y^2+z^2)\cdot\delta (x,y,z) dx dy dz
$$





$$
I_y =\iint_{S}(x^2+z^2)\cdot\delta (x,y,z) dx dy dz
$$





$$
I_z =\iint_{S}(x^2+y^2)\cdot\delta (x,y,z) dx dy dz
$$




### Campo vectorial {#campo-vectorial}

Si $\bar{f}$ es un campo de velocidades de un fluido entonces la
integral de superficie representa el flujo (caudal).


$$
\iint_{S}\bar{f}\cdot \bar{n}\cdot dr = \iint_{D}\bar{f}\left [ \bar{T}(u,v) \right ]\cdot \left ( \bar{T}_u (u,v) \times \bar{T}_v (u,v) \right ) dudv
$$
