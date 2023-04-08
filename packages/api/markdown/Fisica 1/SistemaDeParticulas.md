
# Sistema de particulas

## Cinematica:

### Centro de masa

Posición:


$$
\large\begin{matrix}
x_{cm}=\frac{\sum_{1}^n m_i\cdot x_i}{M}\\
y_{cm}=\frac{\sum_{1}^n m_i\cdot y_i}{M}\\
z_{cm}=\frac{\sum_{1}^n m_i\cdot z_i}{M}
\end{matrix}
$$


Velocidad:


$$
\large\begin{matrix}
v_{x_{cm}}=\frac{\sum_{1}^n m_i\cdot v_{x_i}}{M}\\
v_{y_{cm}}=\frac{\sum_{1}^n m_i\cdot v_{y_i}}{M}\\
v_{z_{cm}}=\frac{\sum_{1}^n m_i\cdot v_{z_i}}{M}
\end{matrix}
$$


Aceleración:


$$
\large\begin{matrix}
a_{x_{cm}}=\frac{\sum_{1}^n m_i\cdot a_{x_i}}{M}\\
a_{y_{cm}}=\frac{\sum_{1}^n m_i\cdot a_{y_i}}{M}\\
a_{z_{cm}}=\frac{\sum_{1}^n m_i\cdot a_{z_i}}{M}
\end{matrix}
$$


Energía:


$$
\large E_{c_{sistema}} = \sum E_{c_i} = \sum \frac{1}{2} m_i \cdot v_i^2
$$


Esto es distinto a la energía cinetica del centro de masa:


$$
\large E_{c_{cm}} = \frac{1}{2} M \cdot v_{cm}^2
$$


Cantidad de movimiento:


$$
\bar{p}_{sistema} = \sum \bar{p}_i = \sum m_i\cdot \bar{v}_i
$$


Esto es igual a calcular la cantidad de movimiento del centro de masa:


$$
\bar{p}_{cm} = M \cdot \bar{v}_{cm}
$$


## Dinamica:


$$
\large \sum \bar{F}_{exteriores} = M_{total} \cdot  \bar{a}_{cm}
$$


## Teoremas

### Impulso y cantidad de movimiento


$$
\large\sum \bar{J}_{F_{externas}\Delta t} = \sum \Delta \bar{p}_{i\Delta t}=\Delta \bar{p}_{sistema \Delta t} = \Delta \bar{p}_{cm\Delta t}
$$


Recordemos que $\bar{J}_F = \bar {F} \cdot \Delta t$

### Trabajo y energía


$$
\large\sum W_{F_{\text{Int y Ext}}A-B} = \Delta E_{c_{sist}A-B}
$$



$$
\large\sum W_{F_{NC \text{ Int y Ext}}A-B} = \Delta E_{M_{sist}A-B}
$$


Recordemos que $W_{F} = \bar{F} \cdot \bar{\Delta r}$

### Momento cinetico e impulso de momentos


$$
\large\sum \bar{J}_{\bar{M}_{\bar{F_{ext}}}^o\Delta t} = \Delta \bar{L}_{{sist}\Delta t}^o
$$


La sumatoria de impulsos de momentos de fuerzas externas respecto de un
punto $o$ en un lapso $\Delta t$ es igual a la variación de momento
cinetico del sistema respecto del punto $o$ en ese mismo $\Delta t$

Recordemos que $\bar{L} = \bar{p} \times \bar{r}$ siendo $\bar{r}$ un
vector posición de la particula respecto a un punto $o$

Y además que $\bar{M}_F^o = \bar{r} \times \bar{F}\hspace{5pt}$ y
$\hspace{5pt}\bar{J}_{M_F^o \Delta t} = \bar{M}_F^o \cdot \Delta t$

\## Choques

### Elasticos (ideal)


$$
\Delta E_{c_{sist}} = 0
$$


### Explosivos (gana energía cinetica)


$$
\Delta E_{c_{sist}} > 0
$$


### Inelasticos (pierde energía cinetica)


$$
\Delta E_{c_{sist}} < 0
$$


Además si los cuerpos permanecen pegados se llaman **Plasticos**

### Coeficiente de restitución

##### (choques unidimensionales)


$$
e = - \frac{v'_2-v'_1}{v_2-v_1}
$$


Donde $v$ es la velocidad antes del choque y $v'$ despues del choque de
dos cuerpos $1$ y $2$


$$
\begin{matrix}
e = 1 \hspace{10pt}\text{En elasticos}\\
e = 0 \hspace{10pt}\text{En plasticos}\\
0<e <1 \hspace{10pt}\text{En inelasticos}
\end{matrix}
$$
