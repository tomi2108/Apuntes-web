
# Relaciones de recurrencia

## Sucesiones

Una sucesión es una función f:
$\mathbb{N} \rightarrow \mathbb{R} \forall n \in \mathbb{N}: f(n) = a_n$

Una sucesión recursiva es aquella en la que su termino general hace
referencia a términos anteriores.

Por ej: $a_n = 2 \cdot a_{n-1}$ con $a_1 = 4$

Si queremos saber ahora el valor del término $a_{102}$ no podemos ya que
se necesita el $a_{101}$ y para este el $a_{100}$, etc.

A las sucesiones dadas en forma recursiva se las llama **Relaciones o
ecuaciones de recurrencia**: $a_n = f(a_1,a_2,\text{...}\, a_{n-1})$

## Clasificación de las relaciones de recurrencia

**Orden**: Es la mayor diferencia entre los subíndices de los elementos
de la sucesión que figuran en la relación de recurrencia. Es decir, el
orden indica cuantos términos anteriores hay que conocer para obtener
uno en particular.

**Grado**: Es el mayor exponente al que están elevados los elementos de
la sucesión que figuran en la relación de recurrencia.

**Ecuación homogénea**: Al igual que las ecuaciones algebraicas, las
homogéneas son las que no tienen términos independientes; pero en este
caso no necesariamente los términos independientes son constantes sino
que todos aquellos en los que no figuran elementos de la sucesión. Por
ej: $3n, 4, n^2$

**Coeficientes constantes**: en estas ecuaciones ninguno de los
coeficientes de los elementos de la sucesión depende de n. Por el
contrario, si alguno depende de n, se dice que la ecuación tiene
coeficientes variables.

**Solo estudiaremos ecuaciones lineales, con coeficientes constantes,
tanto de orden 1 como 2, homogéneas y no homogéneas**

## Homogéneas lineales de orden 1

$a_n = k \cdot a_{n-1}$ con $k\in \mathbb{R}-\{0\}$

### Solución:

$a_n = k^n \cdot a_0$

### Demostración:

$p(n): a_n = k^n \cdot a_0 \hspace{10pt} \forall n \geq 0$

#### Paso base

$n=0: \hspace{15pt} a_0 = k^0 \cdot a_0 = a_0 $ entonces se cumple
que $p(0)$ es V

#### Paso inductivo:

Hip. ind: $n=h \hspace{20pt} a_h=k^h \cdot a_0$

Tesis ind: $n=h+1 \hspace{20pt} a_{h+1}=k^{h+1} \cdot a_0$

#### Demostración {#demostración}

$a_{h+1} = k a_{h} = k k^h a_0 = k^{h+1} a_0$

Por lo tanto queda demostrado que $\forall n \in \mathbb{N}_0: p(n)$ es
verdadera

## Homogéneas lineales de orden 2

$c_n a_n + c\_{n-1}a\_{n-1}+ c\_{n-2} a\_{n-2} = 0 $

Supongamos que $a_n = x^n$ es una solución de la ecuación.


$$
c_n x^n + c_{n-1}x^{n-1}+ c_{n-2} x^{n-2} = 0
$$



$$
x^{n-2}\cdot (c_n x^2 + c_{n-1}x + c_{n-2} ) = 0
$$


$c_n x^2 + c_{n-1}x + c_{n-2}$ es la ecuación característica y sus
raíces pueden ser: reales y distintas, reales e iguales o complejas
conjugadas

Sean $r_1 $ y $r_2$ las raíces de la ecuación característica entonces
la solución general será:


$$
\begin{matrix}
\text{Reales y distintas} : a_n = k_1 \cdot (r_1)^n + k_2 \cdot (r_2)^n\\
\text{Reales e iguales } : a_n = k_1 \cdot (r_1)^n + k_2 \cdot n\cdot (r_2)^n
\end{matrix}
$$


### Ej:

Sea
$a_n - 3 a_{n-1} + 2a_{n-2}= 0 \hspace{15pt} \text{con}\ a_0 = 4 \hspace{10pt}\wedge a_1 = 7$

Escribimos la ecuación característica y hallamos sus raíces, luego
armamos un sistema de ecuaciones con las condiciones iniciales y
buscamos las constantes de la solución general.


$$
\begin{matrix}
x^2 -3x + 2 = 0 \Rightarrow x=1 \vee x=2 \Rightarrow \\
a_n = k_1 + k_2\cdot 2^n \Rightarrow \\
a_0 = k_1 + k_2 = 4 \wedge \ a_1 = k_1 + 2\cdot k_2 =7 \Rightarrow\\
k_1=1 \wedge \ k_2=3 \Rightarrow a_n = 1+3\cdot 2^n
\end{matrix}
$$


## No homogéneas lineales de orden 1

$c_n \cdot a_n + c_{n-1} \cdot a_{n-1} = f(n)$

La solución general está dada por la suma solución de la ecuación
homogénea asociada y una solución particular de la ecuación dada.

$a_n = a_{nH} + a_{nP}$

**NOTA**: La solución de la ecuación homogénea asociada es la general,
sin tener en cuenta las condiciones iniciales.

La solución particular se plantea como función del mismo tipo que
$f(n)$. Si no, se va multiplicando por $n$ sucesivamente hasta hallarla.

Por ultimo se plantean condiciones iniciales para despejar las
constantes.

$\hspace{5pt}$

$\hspace{5pt}$

$\hspace{5pt}$

La siguiente tabla muestra de que tipo es probable que exista una
solución particular de acuerdo a la forma del término independiente de
la ecuación:


$$
\begin{vmatrix}
K(\text{constante}) & B(\text{constante})\\
K\cdot n & B\cdot n + C \\
K\cdot n^2 & B \cdot n^2 +C \cdot n + D\\
K \cdot n^t & \text{Polinomio completo de grado}\hspace{5pt} t\\
K \cdot a^n & B \cdot a^n
\end{vmatrix}
$$


### Ej:

Resolver: $a_{n+1} = 2a_{n} + 1$ con $a_1 = 1$

Ecuación homogénea asociada: $a_{n+1} = 2a_n$ cuya solución general
es:$a\_{nH} = k \\cdot 2\^n $ (sin tener en cuenta las condiciones
iniciales)

Solución particular: como en este caso el término independiente es $1$,
el planteo también es una constante $B$. Es decir supongo que
$a_{nP} = B$ Reemplazo en la ecuación original, para poder despejar el
valor de $B$:


$$
a_{n+1}= 2a_n + 1 \Rightarrow B = 2B + 1 \Rightarrow B=-1 \Rightarrow a_{nP} = -1
$$


Formo la solución total: $a_n = a_{nH} + a_{nP} = k \cdot 2^n -1$

Recién ahora uso las condiciones iniciales para hallar la constante $k$

$$
1=k\cdot 2 - 1 \Rightarrow k=1
$$


Por lo tanto $a_n = 2\^n -1 $ es la solución particular pedida.

## No homogéneas lineales de orden 2

$c_n \cdot a_n + c_{n-1} \cdot a_{n-1}+ c_{n-2} \cdot a_{n-2} = f(n)$

$a_n = a_{nH} + a_{nP}$

### Ej

Resolver:
$a_{n+2} - 4a_{n+1} +3a_n = -2 \hspace{15pt} \text{con}\hspace{15pt} a_0 = 7 \\wedge\ a_1 = 12$

Vamos a hallar la solución general de la homogénea asociada. Para ello
planteamos la ecuación característica.

$x^2 - 4x + 3 = 0 \Rightarrow x = 1 \hspace{10pt} \vee \hspace{10pt} x=3 \Rightarrow a_{nH} = k_1 \cdot 1^n + k_2 \cdot 3^n = k_1 + k_2 \cdot 3^n$

Buscamos una solución particular: Para ello proponemos una constante $B$
y reemplazamos en la ecuación original.

$B-4B+3B = -2 \Rightarrow 0=-2$ ABSURDO

Entonces proponemos $a_{nP} = B\cdot n$ y reemplazamos en la ecuación
original.

$ B\cdot(n+2)-4B\cdot(n+1)+3B\cdot n = -2 \Rightarrow B \cdot n +
2 B-4B\cdot n -4B +3B\cdot n = -2 \Rightarrow -2B = -2 \Rightarrow
B=1 $

Entonces: $a_{nP} = 1\cdot n = n$

Armamos la solución total:
$a_n = a_{nH} + a_{nP} = k_1 + k_2 \cdot 3^n + n$

Por ultimo planteamos las condiciones iniciales y buscamos la solución
particular pedida.

$a_0 = 7 \wedge a_1=12 \Rightarrow k_1 + k_2 = 7\wedge
k_1 + 3k_2 + 1 = 12 $

Resolviendo queda: $k_1 = 5 \hspace{10pt}\wedge\hspace{10pt} k_2 = 2$

Por lo tanto la solución pedida es: $5 + 2\cdot 3^n + n$
