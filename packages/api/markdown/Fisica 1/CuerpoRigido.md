
# Cuerpo rígido

## Cinematica

### Rotación pura

Velocidad de un punto.

$$
\bar{v}_a =\bar{\omega}\times \bar{r}
$$

Donde $\bar{\omega}$ es un vector colineal con el eje de rotación y el
modulo está dado por el valor absoluto de $\omega$ y cuyo sentido esta
dado por la regla del tirabuzón.

## Rototraslación

Velocidad de un punto:

$$
\bar{v}_a =\bar{\omega}\times \bar{r}+\bar{v}_{eje}
$$

Notar que $\bar{v}_{eje} = v_{traslación}$

### Movimientos \"planos\"


$$
\begin{matrix}
\bar{\omega} \perp \bar{v}_{eje}\\
\bar{v_a} = \bar{\omega}\times \bar{r}_{a,eje}+\bar{v}_{eje}\\
\bar{v_a} = \bar{v}_{a,rotacion} + \bar{v}_{a,traslacion}
\end{matrix}
$$


Siempre es posible encontrar un determinado punto $C$ tal que su
velocidad de traslación es el opuesto de su velocidad de rotación, es
decir ese punto está instantaneamente quieto.

Por como se calculan las velocidades angulares siempre hay una **recta**
instantaneamente quieta dentro o fuera del rigido llamado $EIR$ eje
instantaneo de rotación.

Todo movimiento rotrotraslatorio se puede llevar a una rotación pura con
tal de referenciar el movimiento al $EIR$


$$
\bar{v_a} = \bar{\omega}\times \bar{r}_{a,EIR}
$$


### Rodadura

![CuerpoRigido1.JPG](e0e76c91-CuerpoRigido1.JPG)

![CuerpoRigido2.JPG](28591388-CuerpoRigido2.JPG)

![CuerpoRigido3.JPG](abe2ec61-CuerpoRigido3.JPG)


## Dinamica

### Dinamica de la traslación


$$
\large\sum \bar{F}_{ext} = M_{total} \cdot \bar{a}_{cm}
$$


### Dinamica de la rotación

![CuerpoRigido4.JPG](994011a4-CuerpoRigido4.JPG)


$$
\large\sum \bar{M}_{F_{ext}}^o = I_{cr}^{eje} \cdot \bar{\gamma}
$$


Donde $I$ es el momento de inercia de un cuerpo respecto a un eje y
$\bar{\gamma}$ es la aceleración angular.


$$
I_{cr}^{eje} = \sum m_i \cdot d_i^2
$$


![CuerpoRigido5.JPG](718e9810-CuerpoRigido5.JPG)

Además se puede calcular el momento de inercia respecto a otro eje
paralelo, a partir del momento de inercia baricéntrico.

![CuerpoRigido6.JPG](30f95da6-CuerpoRigido6.JPG)

#### Radio de giro

Es la distancia $k$ desde el eje de rotación a al cual debería ubicarse
toda la masa del cuerpo rígido para que su momento de inercia respecto
al eje sea igual al del cuerpo rígido original.

![CuerpoRigido7.JPG](f5e923ce-CuerpoRigido7.JPG)





### Ecuaciones de dinamica para movimientos planos

![CuerpoRigido8.JPG](29fd3396-CuerpoRigido8.JPG)

### Cuplas

Es un par de fuerzas de igual modulo y direccion y sentidos opuestos
separadas uan distancia $d$

![CuerpoRigido9.JPG](3436780d-CuerpoRigido9.JPG)

## Teoremas para cuerpo rígido

### Impulso y cantidad de movimiento


$$
\large\sum \bar{J}_{F_{ext,\Delta t}} = \Delta \bar{p}_{cm,\Delta t}
$$


Recordemos que $\bar{p}_{cm} = M\cdot \bar{v}_{cm}$

y además $\bar{J}_F = \bar {F} \cdot \Delta t$



### Trabajo y energía


$$
\large\sum W_{F_{ext,A-B}} = \Delta E_{C_{CR,A-B}}
$$



$$
\large\sum W_{FNC_{ext,A-B}} = \Delta E_{M_{CR,A-B}}
$$


Ecuaciones de energia para cuerpo rígido:


$$
E_{C_{traslacion}} = \frac{1}{2} m \cdot v_{cm}^2
$$



$$
E_{C_{rotacion}} = \frac{1}{2} I^{cm}_{cr} \cdot \omega^2
$$



$$
E_C = E_{C_{traslacion}} + E_{C_{rotacion}}
$$


Ecuaciones de trabajo para cuerpo rígido:

#### Traslación


$$
W_F = \bar{F} \cdot \Delta \bar{r}_{cm}= |\bar{F}||\Delta\bar{r}|\cos \alpha
$$


#### Rotacion pura alrededor de un eje baricentrico


$$
W_F = \bar{M}_{F}^{cm} \cdot \Delta \bar{\theta}= |\bar{M}_{F}^{cm}||\Delta \bar{\theta}|\cos \alpha
$$


#### Rototraslacion


$$
W_{F_{neto}} = W_{F_{traslacion}} + W_{F_{rotacion}}
$$


### Impulso de momentos y variacion del momento cinetico


$$
\large\sum \bar{J}_{\bar{M}_{\bar{F_{ext}}}^o\Delta t} = \Delta \bar{L}_{{cr}\Delta t}^o
$$


Ecuaciones de momento cinetico para cuerpo rigido

Recordemos que $\bar{M}_F^o = \bar{r} \times \bar{F}\hspace{5pt}$ y
$\hspace{5pt}\bar{J}_{M_F^o \Delta t} = \bar{M}_F^o \cdot \Delta t$

#### Traslacion


$$
\bar{L}_{cm}^o = \bar{r}_{cm} \times \bar{p}_{cm}
$$


#### Rotacion pura al rededor de un eje baricentrico


$$
\bar{L}_{cr}^{cm} = I^{bar}_{cr} \cdot \bar{\omega}
$$


#### Rototraslacion {#rototraslacion}


$$
\large\bar{L}_{cr}^{o} = \bar{L}_{cm}^o + \bar{L}_{cr}^{cm} = \bar{r}_{cm} \times \bar{p}_{cm} + I^{bar}_{cr} \cdot \bar{\omega}
$$
