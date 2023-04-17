
# Gramáticas y lenguajes

## Alfabetos

Un alfabeto es un conjunto finito no vacío, sin elementos que se
obtengan por yuxtaposición, es decir que ningún simbolo se pueda formar
colocando uno a continuación de otro. Se los denota con : $\Sigma$ o $V$

**Palabra**: secuencia finita de letras formada por caracteres de un
alfabeto.

**Palabra Nula**: está formada por 0 letras, se denota $\lambda$ o
$\varepsilon$

**Longitud**: cantidad de letras que forman una palabra.

### Clausura de Kleene de un alfabeto

Se define:

$$
V^* = V^0 \cup V^0 \cup V^1 \cup V^2 \cdots V^n \cup  \cdots
$$


$V^i$: conjunto de palabras de longitud $i$ formadas con las letras del
alfabeto $V$

$V^*$ es el conjunto de todas las palabra de cualquier longitud, que se
pueden escribir con letras del alfabeto $V$

### Concatenación de palabras

Sea $w_1 \in V^*$ , $w_2 \in V^*$ y $w_3 = w_1 \cdot w_2$ entonces $w_3$
está formada por las letras de $w_1$ a continuación por las letras de
$w_2$.


$$
long(w_1 \cdot w_2) = long(w_1) + long( w_2)
$$


Además:
$$
(w_1 \cdot w_2)\cdot w_3 = w_1 \cdot (w_2 \cdot w_3)
$$


$(V^*;\cdot)$ es un semigrupo con neutro $\lambda$ y se lo llama
**Semigrupo libre** generado por $V$

### Inversión, reflexión o transposición

Dada $w \in V^*$, si $w = x_1x_2x_3\cdots x_{n-1}x_n$ se define:

$$
w^R =x_nx_{n-1}\cdots x_3x_2x_1
$$


#### Propiedades de la reflexión

1.  $(w^R)^R = w$
2.  $\lambda^R = \lambda$
3.  $(w \cdot y)\^R = y\^R \cdot w\^R $
4.  $long(w^R) = long(w)$

### Palíndrome

Sea $w \in V^*$, $w$ es palindrome $\Leftrightarrow w=w^R$

### Potencia de una palabra

Sea $w \in V^*$, con $n \in \mathbb{N}_0$ se define:

$$
\left\{\begin{matrix}
w^0 = \lambda\\
w^1 = w\\
w^n = w\cdot w^{n-1}
\end{matrix}\right.
$$


**Propiedad:** $long(w^n) = n\cdot long(w)$

# Lenguaje

Sea $L$ un conjunto y $V$ un alfabeto.

Diremos que $L$ es un lenguaje $\Leftrightarrow L \subseteq V^*$

O sea un lenguajes es todo subconjunto de $V^*$

### Observaciones

1.  Los elementos de $L$ son palabras.
2.  Los lenguajes pueden ser finitos o infinitos.
3.  Como $L \subseteq V^*$ entocnes $L \in P(V^*)$
4.  Se pueden aplicar todas las propiedades y operaciones de conjuntos

Algunos lenguajes especiales son $L= \{\lambda \} = \Lambda$ se llama
**Lenguaje nulo** y $L= \emptyset$ se llama **Lenguaje vacío**

## Operaciones con lenguajes

### Concatenacion de lenguajes

$L = L_1 \cdot L_2 = {x\cdot y x\in L_1\wedge y \in
L_2 } $

Son todas las palabras que se pueden formar concatenando cualquier
palabra de $L_1$ con cualquier palabras de $L_2$

#### Propiedades

1.  $|L_1 \cdot L_2| \leq |L_1|\cdot |L_2|$

2.  $(P(V^*);\cdot )$ semigrupo con neutro $\Lambda$

3.  $L_1 \cdot L_2 \neq L_2 \cdot L_1$

4.  $L = \emptyset$ es elemento **absorbente** de la concatenación

5.  Si $L_1 \subset L_2$ y $L_3 \subset L_4$ entonces
    $L_1 \cdot L_3 \subset L_2 \cdot L_4$

### Lenguaje inverso, reflejo o traspuesto


$$
L^R = \{w^R \hspace{5pt}/ \hspace{5pt} w \in L\}
$$


Es decir $L^R$ tiene todas las palabras de $L$ pero reflejadas.

### Potencia de un lenguaje

Sea $L$ un lenguaje, con $n \in \mathbb{N}_0$ se define:


$$
\left\{\begin{matrix}
L^0 = \Lambda\\
L^1 = L\\
L^n = L\cdot L^{n-1}
\end{matrix}\right.
$$


### Clausura de Kleene de un lenguaje


$$
L^* = \bigcup_{n=0}^{\infty } L ^n = L^0\cup L^1 \cup L^2 \cdots \cup L^n\cup \cdots
$$


O sea, en la clausura de un lenguaje están todas las palabras que se
obtienen concatenando las de $L$ cualquier cantidad de veces.

**Observaciones**:

1.  $\Lambda^* = \Lambda$

2.  $\emptyset^* = \Lambda$

3.  $\forall L: \lambda \in L^*$

### Clausura positiva de un lenguaje


$$
L^+ = \bigcup_{n=1}^{\infty } L ^n =  L^1 \cup L^2 \cdots \cup L^n\cup \cdots
$$


**Observaciones**:

1.  $\Lambda^+ = \Lambda$

2.  $\emptyset^+ = \emptyset$

### Complemento de un lenguaje


$$
\bar{L} = V^* - L
$$


#### Ej:

Sea $V= \{a,b\}$

$L_1 = \{w \in V^* \hspace{5pt}/\hspace{5pt} w \hspace{5pt}\text{comienza con} \hspace{5pt}a \}$

Entonces el complemento de $L_1$ es:

$\bar{L}_1 = \{w \in V^* \hspace{5pt}/\hspace{5pt} w \hspace{5pt}\text{ no comienza con} \hspace{5pt}a \}$

# Gramáticas

Una gramática es una cuaterna $G = (V_n;V_t;P;S)$ siendo:

$V_n$: Vocabulario o alfabeto de **no terminales**

$V_t$: Vocabulario o alfabeto de **terminales**

$P$: Producciones

$S$: símbolo variable inicial

***Requisitos***

1.  $V_n$ y $V_t$ son finitos.

2.  $V_n \cap V_t = \emptyset$

3.  $P$ es finito y $P \subset (V^+ - V_t^*)$ siendo $V = V_n \cup V_t
    $

4.  $S$ pertenece a $V_n$

**Observaciones**

1\) La gramática va a generar palabras formadas por las letras del
alfabeto de **terminales** $V_t$. El otro alfabeto, $V_n$, contiene las
variables o **no terminales** que se usan para ir formando las palabras.

2\) Las producciones son reglas gramaticales. En vez de escribirlas en
forma de par ordenado $( a ; b )$ , se escriben como $a → b$ y se lee
\"$a$ produce $b$\". Ello significa que la parte "$a$" puede
reemplazarse por "$b$". Por ello, en la primera parte no puede haber
terminales solas ni $\lambda$. Siempre al menos debe haber una variable
para hacer el reemplazo.

3\) El lenguaje generado por la gramática $G$ se llama $L(G)$.

4\) Puede haber varias gramáticas que generen un mismo lenguaje, pero el
lenguaje que genera una gramática es único.

### Ej:

Sea la gramática $G = \{\left(\{S,X,Y\},\{a,b,c\},P,S \right)\}$ con el
conjunto $P$ :
$$
\begin{matrix}
S\rightarrow aSb + aX\\
X\rightarrow cX + bY\\
Y\rightarrow a
\end{matrix}
$$


Para hallar palabras de $L(G)$ debemos ir aplicando sucesivas veces las
producciones hasta lograr palabras, comenzando por alguna de las
producciones que comienzan con el símbolo inicial $S$.






## Árbol de derivación

Es un árbol cuya raíz es el símbolo inicial, y cada vértice tiene tantos
hijos como producciones diferentes existan que parten de dicho vértice.
Es decir: Si $A\rightarrow B$, entonces $A$ es padre de B. Si
$A \rightarrow B + C$, entonces $A$ tiene dos hijos: $B$ y $C$. En este
tipo de arboles, las hojas son las palabras del lenguaje, y cada rama
nos da la derivación de dicha palabra.

Construiremos el árbol de derivación de la gramática de arriba.

Comenzamos con las producciones de $S$

![Gramaticas1.JPG](a1631cc8-Gramaticas1.JPG)

Ahora consideremos las producciones de $X$, con lo que podemos agregar:

![Gramaticas2.JPG](cde6e94e-Gramaticas2.JPG)

Si consideramos ahora la producción de $Y$, ya obtenemos una expresión
formada solamente por terminales, es decir ua palabra del lenguaje, la
recuadramos:

![imagen.png](843854b7-imagen.png)

Pero debemos continuar con la otra rama, otra vez la variable $X$

![imagen.png](4253761f-imagen.png)

Y seguimos de esta forma ahora con $X$ y con $Y$:

![Gramaticas5.JPG](3fbe245d-Gramaticas5.JPG)

Podemos ver que todo el subárbol derecho del árbol principal genera las
palabras de la forma $ac^nba$, con $n\geq 0$ pero aún falta el subárbol
izquierdo, es decir el que tiene por raíz. $aSb$

![Gramaticas6.JPG](35a7a193-Gramaticas6.JPG)

Luego, por cada sub-árbol de mas a la izquierda, lo que agregan es una
\"a\" mas a izquierda y una \"b\" a derecha simultáneamente. Por lo
tanto el lenguaje que genera esta Gramática es:


$$
L(G) = \{ a^mac^nbab^m \hspace{5pt}/\hspace{5pt} n\geq 0 , m\geq 0  \}
$$


Dos gramáticas son **equivalentes** si generan el mismo Lenguaje.

### Tipos de Gramáticas


$$
\begin{vmatrix}
\text{Tipo} &\text{Nombre}  &\text{Producciones} \\
 0&\text{Irrestricta}  &\text{Cualquier forma} \\
 1&\text{Sensible al contexto}  &aXb\rightarrow aYb\hspace{5pt} \text{donde}\hspace{5pt} a,b,Y\in V^*, X \in V_n  \\
 2& \text{Independiente del contexto} &X \rightarrow Y \hspace{5pt}\text{donde}\hspace{5pt} X \in V_n \\
 3& \text{Regular} & X\rightarrow Y \hspace{5pt}\text{donde}\hspace{5pt} X \in V_n, Y\hspace{5pt}\text{puede ser}\hspace{5pt} Vt,tV,t,\lambda
\end{vmatrix}
$$


Se dice que un Lenguaje $L$ es regular si existe una gramática regular
que lo genera.

#### Ej:

Sea $G= {(A,B,C),{0,1,2},P,A } $

Tipo $0$:
$$
P = \left\{\begin{matrix}
A \rightarrow A2 + 11B\\
1B \rightarrow 01+0C21\\
C22 \rightarrow 2 + 2C
\end{matrix}\right.
$$


Tipo $1$:
$$
P = \left\{\begin{matrix}
A \rightarrow 0BC\\
0B \rightarrow 011+0B1\\
1C \rightarrow 12 + 12C
\end{matrix}\right.
$$


Tipo $2$:
$$
P = \left\{\begin{matrix}
A \rightarrow BC\\
B \rightarrow 01+0B1\\
C \rightarrow 2 + 2C
\end{matrix}\right.
$$


Tipo $3$:
$$
P = \left\{\begin{matrix}
A \rightarrow 1B + 0A\\
B \rightarrow 0 + 0C\\
C \rightarrow 2 + 2C
\end{matrix}\right.
$$


## Expresiones regulares

Una $E.R.$ es una secuencia de elementos que verifica:
$$
\begin{matrix}
\lambda\hspace{5pt} \text{es}\hspace{5pt} ER \\
a \in V \Rightarrow a\hspace{5pt}\text{es}\hspace{5pt} ER\\
\text{Si}\hspace{5pt}X,Y\hspace{5pt}\text{son}\hspace{5pt}ER \Rightarrow X\cdot Y \hspace{5pt}\text{es}\hspace{5pt}ER\\
\text{Si}\hspace{5pt}X,Y\hspace{5pt}\text{son}\hspace{5pt}ER \Rightarrow X + Y \hspace{5pt}\text{es}\hspace{5pt}ER\\
\text{Si}\hspace{5pt}X\hspace{5pt}\text{es}\hspace{5pt}ER \Rightarrow X^* \hspace{5pt}\text{es}\hspace{5pt}ER
\end{matrix}
$$


O sea, las expresiones regulares sólo pueden contener letras del
alfabeto, la palabra nula $\lambda$, concatenaciones $(\cdot)$,
disyunciones $(+)$ y clausuras de Kleene $(*)$

**Propiedad**: Para cada Lenguaje regular, existe una expresión regular
que lo define.

### Ej:

El lenguaje regular:
$L =\{1^n0^m2^{2p+1}(0 \hspace{5pt}\vee\hspace{5pt} 1 ) \hspace{5pt}/\hspace{5pt} n\geq 0, m\geq 1, p\geq 0\}$
Se puede indicar con la $ER$:
$$
1^*00^*(22)^*2(0\hspace{5pt}+\hspace{5pt} 1)
$$

# Autómatas

Cada lenguaje tiene su propia maquina reconocedora del mismo.


$$
\begin{vmatrix}
\text{Lenguaje Tipo} & \text{Maquina que lo reconoce}\\
 0&\text{Maquina de Turing} \\
 1&\text{Autómata linealmente acotado} \\
 2&\text{Autómata de pila (Push Down)} \\
 3&\text{Autómata Finito}
\end{vmatrix}
$$


En esta asignatura solo estudiaremos los **Autómatas Finitos**

## Autómatas Finitos

Un autómata Finito es una $5$-upla: $(Q,V,\delta,q_0,F)$ donde:

$Q$: Conjunto finito de estados.

$V$: Vocabulario o alfabeto de entrada.

$\delta$: $Q \times V \rightarrow Q$ Función de transición.

$q_0$: Estado inicial.

$F$: Conjunto de estados finales $F\neq \emptyset$ y $F\subset Q$

Los Autómatas Finitos se pueden representar con **Tablas de transición**
o con **Diagramas de transición de estados**.

Un Autómata acepta una palabra si y solo si al ir ingresando letra por
letra desde el estado inicial llega a un estado final cuando termina la
palabra.

### Clasificación de los A.F.

Los Autómatas finitos pueden ser **Deterministicos** (A.F.D) o **No
Deterministicos** (A.F.N)

Un Autómata finito es **Deterministico** si no tiene transiciones por
$\lambda$ y $\delta$ cumple unicidad.


## Metodo para obtener la E.R. a partir del A.F.

![Gramaticas7.JPG](42ee2256-Gramaticas7.JPG)

Se escribe $p = aq$

![Gramaticas8.JPG](c0ea8afb-Gramaticas8.JPG)

Se escribe: $p=aq+br$

![Gramaticas9.JPG](1c346a79-Gramaticas9.JPG)

Se escribe $p=a^*$

![Gramaticas10.JPG](d2794c39-Gramaticas10.JPG)

Se escribe: $p= a^*(bq)$


![Gramaticas11.JPG](bfc0c497-Gramaticas11.JPG)

Se escribe $p = \lambda$

## Obtencion de la G.R. a partir del A.F

Sea $A=(Q,V,\delta ,q_0,F)$ queremos hallar una Gramatica
$G=(V_n,V_t,P,S)$ que genere el mismo lenguaje que es reconocido por el
Autómata.

Los elementos de la gramatica se obtienen de la siguiente forma:

$V_n = Q$ (Los estados pasan a ser las variables)

$V_t = V$ (El alfabeto de terminales es el alfabeto de entrada del A.F)

$S = q_0$ (El símbolo inicial es el que era estado inicial)

Y las producciones $P$ son tales que: $q\rightarrow a \delta(q,a)$ y
$q\rightarrow \lambda$ si $q$ es estado final.

## Obtención del A.F. a partir de la G.R.

Dada $G=(V_n,V_t,P,S)$ queremos hallar un Autómata
$A=(Q,V,\delta ,q_0,F)$ que reconozca el lenguaje generado por esta
gramática.

Los elementos del Autómata se obtienen de la siguiente forma:

$Q = V_n \cup{f} $ (Los estados son las variables más un nuevo estado
que se agrega)

$V = V_t$ (El alfabeto de entrada es el alfabeto de terminales)

$q_0 = S$ (El estado inicial es el que era el símbolo inicial)

$F = \{ q\in V_n \hspace{5pt}/\hspace{5pt} q \rightarrow \lambda \}\cup \{f\}$ (Los
estados finales son todos los que producían la palabra nula y además el
estado que se agrega)

Y la función de transición $\delta$ es tal que:


$$
\begin{matrix}
\delta(q,a)=p \hspace{5pt}\text{si}\hspace{5pt}q\rightarrow ap\\
\delta(q,a)=f \hspace{5pt}\text{si}\hspace{5pt}q\rightarrow a\\
\delta(t,a)=\emptyset
\end{matrix}
$$
