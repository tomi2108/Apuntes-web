
# Grafos

Un grafo es una estructura formada por vértices unidos a través de
aristas y se utiliza para representar determinadas situaciones.
Formalmente se define como una estructura algebraica de la siguiente
forma:

Un grafo es una terna $G = ( V ; A ;\varphi)$ siendo: $V$: el conjunto
de vértices $V \neq \emptyset$

$A$: el conjunto de aristas $A$

$\varphi$ : la función de incidencia : $A\rightarrow V^{(2)}$

$V^{(2)}$ es el conjunto formado por subconjuntos de $1$ o $2$ elementos
de $V$.

### Ej:

![imagen.png](5a69562e-imagen.png)

## Definiciones

**VÉRTICES ADYACENTES**: $v_i$ es adyacente a $v_j$
$\Leftrightarrow \exists a_k \in A$ tal que
$\varphi(a_k) = \{v_i, v_j \}$ Es decir son aquellos vértices unidos por
alguna arista. En el ejemplo, $v_2$ es adyacente a $v_1$ y a $v_4$ pero
no a $v_3$

**VÉRTICE AISLADO**: el que no es adyacente a ningún otro. En el
ejemplo: $v_5$ es aislado.

**ARISTAS PARALELAS**: $a_i$ es paralela a
$a_j \Leftrightarrow \varphi(a_i) = \varphi(a_j )$ siendo \$a_i \\neq
a_j \$ Es decir son aquellas comprendidas entre los mismos vértices. En
el ejemplo, a1 y a5 son paralelas, están comprendidas entre los mismos
vértices.

**ARISTAS ADYACENTES**: las que tienen un único vértice en común siendo
distintas y no paralelas. En el ejemplo, $a_1$ es adyacente a $a_3$

**BUCLES o LAZOS**: las aristas comprendidas en un mismo vértice. En el
ejemplo, $a_2$ es un bucle.

**ARISTAS INCIDENTES EN UN VÉRTICE**: las que tienen a dicho vértice por
extremo. En el ejemplo, las aristas $a_1$, $a_3$ y $a_5$ son incidentes
en el vértice $v_2$

**GRAFO SIMPLE**: el que no tiene aristas paralelas ni bucles.

## Matriz de adyacencia

Sea un grafo $G = ( V ; A ;\varphi )$ con
$V = \{ v_1, v_2, ... , v_n \}$ y $A = \{ a_1, a_2, ... , a_m \}$

Se define la matriz de adyacencia de $G$ a una matriz booleana de
$n\times n$:

$$
M_a(G) = (( m_{ij} ))   \text{tal que}\;\; m_{ij} =  \left\{\begin{matrix}
1 \;\text{si}\;\;v_i \;\;\text{es adyacente a}\;\; v_j\\
0 \;\text{si}\;\;v_i \;\;\text{no es adyacente a}\;\; v_j
\end{matrix}\right.
$$


### Ej: {#ej}

![Grafos2.JPG](8b25dfc3-Grafos2.JPG)

## Matriz de incidencia

Sea un grafo $G = ( V ; A ;\varphi )$ con
$V = \{ v_1, v_2, ... , v_n \}$ y $A = \{ a_1, a_2, ... , a_m \}$

Se define la matriz de incidencia de $G$ a una matriz booleana de
$n\times m$:

$$
M_i(G) = (( m_{ij} ))   \text{tal que}\;\; m_{ij} =  \left\{\begin{matrix}
1 \;\text{si}\;\;v_i \;\;\text{es incidente a}\;\; a_j\\
0 \;\text{si}\;\;v_i \;\;\text{no es incidente a}\;\; a_j
\end{matrix}\right.
$$


Ejemplo para el mismo grafo anterior.

![imagen.png](3d6a3532-imagen.png)

## Función grado de un vértice

El grado de un vértice es la cantidad de aristas incidentes en el, si se
trata de un bucle cuenta por $2$.

En un grafo simple se denomina vértice colgante o pendiente al que tiene
grado igual a uno.

En un grafo simple un vértice es aislado si y solo si su grado es cero.

En todo grafo se cumple que la suma de los grados de los vértices es
igual al doble de la cantidad de aristas.


$$
\large \sum g(v_i)= 2 |A|
$$


## Caminos

**CAMINO**: sucesión de aristas adyacentes distintas.

**CICLO** o circuito: camino cerrado. El vértice inicial coincide con el
final.

**LONGITUD** del camino: cantidad de aristas que lo componen.

**CAMINO SIMPLE**: si todos los vértices son distintos.

**CAMINO ELEMENTAL**: si todas las aristas son distintas

## Grafos especiales

### Grafo K-Regular

Sea un grafo $G = (V; A;\varphi )$ y $k\in \mathbb{N}_0$

Se dice que $G$ es k-regular $\Leftrightarrow \forall v \in V: g(v) = k$

### Grafos completos

Se indican $K_n$

Sea $n\in N : K_n = (V; A;\varphi )$ tal que
$\forall v, w \in V: v\neq w \Leftrightarrow \exists a\in A : \varphi (a) = \{v, w\}$

O sea, los $K_n$ son grafos simples de $n$ vértices en los cuales cada
vértice es adyacente a todos los demás.

![Grafos4.JPG](a8b470f3-Grafos4.JPG)

\$\$\$\$

\$\$\$\$

\$\$\$\$

\$\$\$\$

\$\$\$\$

### Grafos bipartitos

Sea un grafo simple \$G = (V; A;\\varphi ) \$con
$V =\{v_1, v_2, ... , v_n\}$ y $A =\{a_1, a_2, ... , a_m\}$

Se dice que $G$ es BIPARTITO $\Leftrightarrow V = V_1 \cup V_2$ con
\$V_1 \\neq \\emptyset;;\\wedge;; V_2\\neq \\emptyset;;\\wedge;;
V_1\\cap V_2 = \\emptyset \$

$\wedge \;\; \forall a_i\in A : \varphi(a_i) = \{v_j , v_k\}$ con
$v_j \in V_1 \;\;\wedge\;\;v_k \in V_2$ o \$ v_k\\in V_1 ;;\\wedge;; v_j
\\in V_2\$

Es decir, los grafos BIPARTITOS son grafos cuyo conjunto de vértices
está particionado en dos subconjuntos no vacíos y disjuntos: $V_1$ y
$V_2$ tales que los vértices de $V_1$ pueden ser adyacentes a los
vértices de $V_2$ pero los de un mismo subconjunto no son adyacentes
entre sí.

![Grafos5.JPG](6ecb848a-Grafos5.JPG)

### Grafos bipartitos completos

Como su nombre lo indica deben ser bipartitos y además completos. Es
decir, el conjunto de vértices debe estar particionado en dos
subconjuntos, cada arista debe tener un vértice de cada subconjunto y
por ser completos cada vértice debe formar una arista con todos los
demás. Pero atención, con todos los demás del subconjunto al que él
**no** pertenece.

Por lo tanto son grafos bipartitos de $n+m$ vértices con TODAS las
aristas posibles.

![Grafos6.JPG](1abdd2c5-Grafos6.JPG)

\$\$\$\$

\$\$\$\$

## Subgrafos

Dado un grafo $G = (V; A; \varphi )$ , se denomina subgrafo al grafo
\$G' = (V'; A' ; \\varphi/\_{A'}) \$tal que

\$V'\\subseteq V ;;\\wedge;; A'\\subseteq A ;;\\wedge;; \\varphi/\_{A'}
\$es la función restringida a $A'$

Para obtener subgrafos de un grafo dado se puede:

1.  suprimir uno o varios vértices y las aristas incidentes en ellos
2.  suprimir solamente una o varias aristas.

Si se suprime un vértice $v$, el subgrafo restante es $\tilde{G}_v$

Si se suprime una arista $a$, el subgrafo restante es $\tilde{G}_a$

## Relación de conexión

Dado un grafo $G = (V; A;\varphi )$ , en el conjunto de vértices se
define la siguiente relación:

$$
v_i R v_j \Leftrightarrow \exists \text{camino de}\;\; v_i \;\;\text{a}\;\; v_j \;\;\vee\;\; v_i = v_j
$$


Esta relación es de equivalencia y por lo tanto pueden hallarse las
clases de equivalencia, a las que se denomina COMPONENTES CONEXAS.

### Grafos Conexos

Un grafo es conexo si y sólo si tiene una única componente conexa.

Es decir, un grafo es conexo si y sólo si existe algún camino entre todo
par de vértices.

## Definiciones {#definiciones}

**ISTMO O PUNTO DE CORTE** Dado un grafo $G = (V; A;\varphi )$ conexo,
$v\in V$ es istmo \$\\Leftrightarrow \\tilde{G}\_v \$ es no conexo.

Es decir, un istmo es un vértice tal que su supresión desconecta al
grafo.

**PUENTE**: Dado un grafo $G = (V; A;\varphi )$ conexo, $a\in A$ es
puente $\Leftrightarrow \tilde{G}_a$ es no conexo.

Es decir, un puente es una arista tal que su supresión desconecta al
grafo.

**CONJUNTO DESCONECTANTE**: Dado un grafo $G = (V; A; \varphi)$ conexo,

$B\subseteq A$ es desconectante ,$\Leftrightarrow \tilde{G}_B$ es no
conexo.

Es decir, un conjunto de aristas es desconectante si y sólo si su
supresión desconecta al grafo.

**CONJUNTO DE CORTE**: Un conjunto $B$ desconectante es también de
corte\$\\Leftrightarrow \\forall C \\subset B, C \$ no es desconectante.

O sea, para ser conjunto de corte debe estar formado por el mínimo
número de aristas, o bien solamente por las necesarias para desconectar
al grafo.

**CONECTIVIDAD**: Es el menor número de vértices cuya supresión
desconecta al grafo.

## Grafos eulerianos

Se denomina **camino euleriano** al camino que pasa por todas las
aristas una sola vez; y **ciclo euleriano** al ciclo que pasa por todas
las aristas una sola vez.

La condición necesaria y suficiente para que en un grafo exista
**camino** euleriano es:

1.  El grafo debe ser conexo
2.  Todos los vértices deben tener grado par, o a lo sumo dos grado
    impar

La condición necesaria y suficiente para que en un grafo exista
**ciclo** euleriano es:

1.  El grafo debe ser conexo
2.  Todos los vértice deben tener grado par.

### Caminos y ciclos Hamiltonianos

Se denomina **camino hamiltoniano** al camino que pasa una sola vez por
cada vértice; y **ciclo hamiltoniano** al ciclo que pasa una sola vez
por cada vértice.

**Importante** : no necesariamente va a pasar por todas las aristas,
pues en muchos casos repetiría vértices y no sería hamiltoniano.

## Isomorfismos de grafos

Dados dos grafos: $G1 = (V_1; A_1; \varphi_1)$ y \$ G_2 = (V_2 ; A_2 ;
\\varphi_2)\$

Se dice que son isomorfos si y solo si existen dos funciones biyectivas:

$f: V_1 \rightarrow V_2$ y $g : A_1 \rightarrow A_2$ tales que:


$$
\forall a \in A_1 :\varphi_2( g(a) ) = f( \varphi_1(a))
$$


Si no hay aristas paralelas, entonces es suficiente: \$ \\forall u,v
\\in V_1 : {u, v}\\in A_1 \\Rightarrow{ f(u), f(v) } \\in A_2\$

Esto significa que si en el primer grafo hay una arista entro dos
vértices, los correspondientes a estos vertices en el segundo grafo
también deben estar unidos por una arista.

En pocas palabras, **dos grafos son isomorfos cuando tienen la misma
estructura**, es decir sus vértices están relacionados de igual forma
aunque estén dibujados de manera distinta.

### Condiciones necesarias para que dos grafos sean isomorfos

1.  Deben tener la misma cantidad de vértices.
2.  Deben tener la misma cantidad de aristas.
3.  Deben tener los mismos grados de los vértices.
4.  Deben tener cadenas de las mismas longitudes.
5.  Si uno tiene ciclos, el otro también debe tenerlos.
6.  Etc.

Observación: las condiciones mencionadas **son necesarias** (es decir
que sí o sí se deben cumplir para que los grafos sean isomorfos) pero
**no son suficientes** ( o sea que aunque se cumplan puede ser que los
grafos no sean isomorfos)

**Importante**: Si dadas dos matrices de adyacencia correspondientes a
dos grafos, ellas no son iguales, no significa que los grafos no sean
isomorfos, pues tal vez reordenando una de ellas se pueda lograr que
sean iguales.

Para poder afirmar que dos grafos no son isomorfos hay que mostrar
alguna propiedad estructural no compartida o bien probar que todos los
ordenamientos posibles de las matrices no coinciden. Esto último no es
práctico pues como sabemos la cantidad de ordenamientos posibles de $n$
elementos es igual a $n!$, lo cual es una cantidad bastante elevada

# Dígrafos

Un dígrafo es una terna $G = (V ; A ;\delta )$ siendo:

$V$ el conjunto de vértices $V \neq \emptyset$

$A$ el conjunto de aristas o arcos

y $\delta$ la función de incidencia: $\delta:A\rightarrow V\times V$

En este caso la función de incidencia se dice dirigida

**Observaciones**

La función de incidencia $\delta$ le hace corresponder a cada arista un
**PAR ORDENADO** de vértices, al primero se lo llama **EXTREMO INICIAL**
de la arista, y el segundo es el **VÉRTICE FINAL**.

Los caminos y los ciclos se definen de la misma forma que para los
grafos no dirigidos, pero hay que respetar el sentido de las aristas.

Si todos los vértices son distintos se trata de un **camino simple**.

Si todas las aristas son distintas, se trata de un **camino elemental**.

## Función grado en un dígrafo

**GRADO POSITIVO**: cantidad de aristas que inciden positivamente en el
vértice (son las que "entran" al vértice). Se denota $g^+(v)$

**GRADO NEGATIVO**: cantidad de aristas que inciden negativamente en el
vértice (son las que "salen" del vértice). Se denota $g^-(v)$

**GRADO TOTAL**: es la suma de los grados positivo y negativo. Se denota
$g(v)$

**GRADO NETO**: es la diferencia entre el grado positivo y el negativo.
Se denota $g_N(v)$

### Ej: {#ej}

![Grafos7.JPG](0e712a08-Grafos7.JPG)

### Propiedades

1.  $\sum g^+(v_i) = |A|$

2.  $\sum g^-(v_i) = |A|$

3.  $\sum g(v_i) = 2|A|$

4.  $\sum g_N(v_i) = 0$

## Pozos y fuentes

En los dígrafos puede haber vertices especiales de los que no \"sale\"
ninguna arista y se denominan **pozos**. Otros, a los que no \"llega\"
ninguna aristas y se los denominan **fuentes**.

**POZO**: es un vértice $v$ tal que $g^-(v) = 0$ O sea, $v$ no es
extremo inicial de ninguna arista.

**FUENTE**: es un vértice $v$ tal que $g^+(v) = 0$ O sea, $v$ no es
extremo final de ninguna arista

## Matriz de adyacencia {#matriz-de-adyacencia}

Sea un grafo $G = ( V ; A ;\delta )$ con $V = \{ v_1, v_2, ... , v_n \}$
y $A = \{ a_1, a_2, ... , a_m \}$

Se define la matriz de adyacencia de $G$ a una matriz booleana de
$n\times n$:


$$
M_a(G) = (( m_{ij} ))   \text{tal que}\;\; m_{ij} =  \left\{\begin{matrix}
1 \;\text{si}\;\;\exists a \in A: \delta(a) = (v_i ; v_j)\\
0 \;\text{en caso contrario}
\end{matrix}\right.
$$


### Ej: {#ej}

![Grafos8.JPG](0993a47b-Grafos8.JPG)

## Matriz de incidencia {#matriz-de-incidencia}

Sea un grafo $G = ( V ; A ;\delta )$ con $V = \{ v_1, v_2, ... , v_n \}$
y $A = \{ a_1, a_2, ... , a_m \}$

Si no tiene bucles ni aristas paralelas ,se define la matriz de
incidencia de $G$ a una matriz de $n\times m$:


$$
M_i(G) = (( m_{ij} ))   \text{tal que}\;\; m_{ij} =  \left\{\begin{matrix}
1 \;\text{si}\;\;v_i \;\;\text{es vértice inicial de}\;\; a_j\\
-1 \;\text{si}\;\;v_i \;\;\text{es vértice final de}\;\; a_j\\
0 \;\text{si}\;\;v_i \;\;\text{no es extremo de}\;\; a_j
\end{matrix}\right.
$$


Ejemplo para el mismo dígrafo anterior.

![Grafos9.JPG](965511e1-Grafos9.JPG)

## Grafo asociado a un dígrafo

Dado un dígrafo, si se cambian las aristas dirigidas por aristas no
dirigidas, se obtiene el grafo asociado. Es decir hay que ignorar el
sentido de las aristas.\
Si en el dígrafo original hay aristas paralelas o antiparalelas, en el
grafo asociado sólo se representa una de ellas.

### Conexidad en dígrafos

Todo dígrafo cuyo grafo asociado sea conexo, se denomina DÍGRAFO CONEXO.

Todo dígrafo en el que exista algún camino entre todo par de vértices se
denomina **DÍGRAFO FUERTEMENTE CONEXO**

## Caminos de Euler y Hamilton en dígrafos

Se definen de forma similar que para grafos no dirigidos, pero hay que
respetar el sentido de las aristas.

Condición necesaria y suficiente para que exista **ciclo** de Euler en
un dígrafo:


$$
\forall v \in  V : g^+(v) = g^-(v)
$$


\$\$\$\$

\$\$\$\$

## Isomorfismo de dígrafos

El concepto de isomorfismo de dígrafos es igual que para grafos, pero
hay que tener en cuenta la dirección de las aristas, es decir el grado
positivo y negativo de cada vértice y, por lo tanto eso debe respetarse
para la asignación, es decir la correspondencia debe establecerse entre
los vértices del mismo grado positivo o negativo

![imagen.png](10d5950f-imagen.png)

# Arboles

Llamaremos árbol a todo grafo conexo y sin ciclos.

**Condición necesaria y suficiente**:

Un árbol es un grafo en el cual entre todo par de vértices existe un
único camino simple.

### Propiedades básicas de los árboles

Si a un árbol se le agrega una arista entre dos de sus vértices, deja de
ser árbol.

Todas las aristas de un árbol son puentes.

En todo árbol se cumple que:\$ \|V\| = \|A\| + 1\$

Se denomina **BOSQUE** al grafo no conexo en el cual cada una de las
componentes es un árbol.

En un bosque de $k$ componentes se cumple que $|V| = |A| + k$

### Árboles dirigidos

Un dígrafo se denomina árbol dirigido cuando su grafo asociado es un
árbol.

De los árboles dirigidos nos interesa estudiar los árboles con raíz.

El árbol con raíz es un árbol dirigido en el cual el grado entrante
(positivo) de cada vértice es igual a $1$, salvo un único vértice con
grado positivo igual a cero, llamado raíz.

Un vértice $v$ de un árbol se dice que es **HOJA** cuando $g(v) = 1$ Los
**VÉRTICES INTERNOS** son todos aquellos que no son la raíz ni las
hojas.

Se llama **RAMA** a todo camino que va desde la raíz a alguna hoja.

**Otras definiciones**

**Antecesor**: $v$ es antecesor de $w \Leftrightarrow$ existe un único
camino simple de $v$ a $w$.

**Sucesor**: $w$ es sucesor de $v$ si $v$ es antecesor de $w$

**Padre**: $v$ es padre de $w$ existe una arista de $v$ a $w$.

**Hijo**: $w$ es hijo de $v$ si existe una arista de $v$ a $w$.

**Hermanos**: $v$ y $w$ son hermanos si tienen el mismo padre.

Podríamos decir que se reconocen como en el árbol genealógico.

![imagen.png](87b31a33-imagen.png)

### Mas definiciones

El **NIVEL DE UN VÉRTICE** se define en forma recursiva:

1.  El nivel de la raíz es cero: \$n(r) = 0 \$
2.  Cada vértice tiene un nivel mas que su padre.

**ALTURA** de un árbol: es el mayor **NIVEL** alcanzado por las
**HOJAS**.

Se dice que un árbol está **BALANCEADO** cuando todas las hojas están en
el nivel **MAYOR o en UNO MENOS**.

En el ejemplo anterior, la altura del árbol es: $h = 4$ ¿Es balanceado?
No, pues las hojas $f$ y $g$ están en el nivel $2$.

## Arboles n-arios

Un árbol con raíz es n-ario
$\Leftrightarrow \forall v\in V: g^-(v) \leq n$

Es decir, cada vértice puede tener a lo sumo $n$ hijos

Si $n=2$ entonces se dice árbol **BINARIO**.

Si $n=3$ entonces se dice árbol **TERNARIO**.

Un árbol se dice **n-ario regular** cuando todos los vértices tienen la
misma cantidad de hijos, salvo las hojas que no tienen hijos.

Un árbol se **dice n-ario regular pleno** o **completo** cuando además
de ser n-ario regular, todas las hojas se hallan en el mismo nivel.

## Subárbol

Sea $G = ( V ; A ;\delta )$ un árbol con raíz $r$. Sea $v\in V$, se
llama subárbol con raíz $v$, y se indica $T(v)$, al árbol que consta de
$v$, todos sus descendientes y las aristas entre ellos.

## Recorrido de un árbol

![Grafos12.JPG](41e4580a-Grafos12.JPG)

\$\$\$\$

![imagen.png](abcd4ebb-imagen.png)

## Representación de expresiones algebraicas

![imagen.png](8df85426-imagen.png)

Si leemos este árbol en orden simétrico, obtenemos la expresión usual:
$a*b$

Cuando representamos expresiones algebraicas, son comunes los siguientes
nombres:

**Notación Polaca**: es el **orden PREVIO**: $*ab$

**Notación usual o infija**: es el **orden SIMÉTRICO**: $a*b$

**Notación polaca inversa**: es el **orden POSTERIOR**: $ab*$
