const data = [
  {
    category: "DNA",
    questions: [
      {
        question: "Quais são as ligações que compõem o DNA, e qual a sua ordem correta?",
        options: ["citosina, adenina, guanina, timina","adenina, timina, guanina, citosina","citosina, timina, adenina, guanina","adenina, citosina, guanina, timina"],
        answer: "adenina, timina, guanina, citosina",
        explanation: "Adenina faz par com a Timina, formando o par de bases A-T, e ocorre dupla ligação entre essas bases. Do mesmo modo que a Guanina se liga à Citosina e forma o par de bases G-C, por tripla ligação. E as duas cadeias se ligam através de fracas pontes de hidrogênio entre as bases nitrogenadas dos nucleotídeos, responsáveis pela manutenção da estrutura de dupla hélice do DNA."
      },
      {
        question: " Qual a principal função do RNA?",
        options: ["produção de energia", "produção de anticorpos", "produção de gordura", "produção de proteínas"],
        answer: "produção de proteínas",
        explanation: "A principal função do RNA é permitir que toda a informação contida no DNA possa ser copiada e transportada até as estruturas responsáveis pela elaboração de proteínas, ou seja, o RNA desempenha papel fundamental no processo de produção das proteínas."
      },
      {
        question: "Como são classificadas as bases nitrogenadas que contém no DNA?",
        options: ["pirimidinas, purinas", "fosfato, carbono", "enzima, desoxirribose", "enzima e perinas"],
        answer: "pirimidinas, purinas",
        explanation: "Adenina e guanina são classificadas como PÚRICAS, pois elas são moléculas compostas por dois anéis. Citosina e timina são classificadas como PIRIMÍDICAS, pois elas são moléculas formadas por um único anel."
      },
      {
        question: "Quais os nomes dos processos que acontece no RNA para a produção de proteínas?",
        options: ["síntese de proteínas, Calcinação", " fosfodiéster, tradução", "tradução e transcrição", "transcrição, Calcinação"],
        answer: "tradução e transcrição",
        explanation: "Os nomes dos processos que são realizados para a produção de proteínas são RNAmn que é responsável por conter todas as informações necessárias para que determinada proteína seja sintetizada e o RNAt que é o encarregado de transportar os aminoácidos corretos que constituirão a proteína que será produzida"
      },
      {
        question: "O RNA contêm uma ligação diferente do DNA, qual o nome dessa ligação?",
        options: ["adenina", "guanina", "uracila", "timina"],
        answer: "uracila",
        explanation: "Se a citosina do DNA é desaminada formando uma uracila, esta vai especificar a incorporação de uma adenina na cadeia 'filha' durante a replicação, em vez da guanina, que teria sido especificada pela citosina. Felizmente, uma U do DNA é reconhecida com o 'erro* pelas enzimas celulares, antes que uma base incorreta seja inserida na cadeia 'filha'. Essas enzimas eliminam a U, substituindo-a por um a C."
      },
    ],
  },
  {
    category: "sintesep",
    questions: [
      {
        question: "(Univag/2020)A síntese proteica, conhecida como ____________ , tem início a partir da síntese do RNA mensageiro no ___________ , processo chamado de __________ . Em seguida, as moléculas de RNA mensageiro se associam aos ribossomos no ___________ para a finalização do processo.",
        options: ["duplicação – citoplasma – tradução – núcleo celular", "tradução – núcleo celular – transcrição – citoplasma", " transcrição – citoplasma – tradução – núcleo celular", "tradução – núcleo celular – duplicação – citoplasma", "transcrição – citoplasma – duplicação – núcleo celular"],
        answer: "tradução – núcleo celular – transcrição – citoplasma",
        explanation: "O DNA é formado por genes, que quando expressos em características físicas e visíveis correspondem ao fenótipo de uma espécie e também específicas de um indivíduos. Por meio de processos contínuos de replicação, tradução e transcrição, esses genes são responsáveis pela formação de todas as proteínas existentes no organismo animal e que formam o fenótipo. Inicia-se com a replicação, em que a fita dupla de DNA se abre por ação da enzima helicase. Posteriormente, sob ação de outra enzima, a polimerase, inicia-se a formação de uma fita de RNA mensageiro a partir da sequência de bases nitrogenadas do DNA, processo chamado de transcrição. As sequências de bases nitrogenadas codificantes são chamadas de éxons, e as não codificantes, de íntrons. Ao final da formação do RNAm, os íntrons serão descartados. Esse RNAm migra para o citoplasma celular, local em que a informação gênica presente na molécula é sintetizada em forma de proteína. Essa “leitura” de genes e formação da proteína é a parte chamada tradução. A sequência correta, portanto, ficou: A síntese proteica, conhecida como tradução, tem início a partir da síntese do RNA mensageiro no núcleo celular , processo chamado de transcrição . Em seguida, as moléculas de RNA mensageiro se associam aos ribossomos no citoplasma para a finalização do processo.",
      },
      {
        question: "(Enem 2018 – PPL) A ricina, substância tóxica extraída da mamona, liga-se ao açúcar galactose presente na membrana plasmática de muitas células do nosso corpo. Após serem endocitadas, penetram no citoplasma da célula, onde destroem os ribossomos, matando a célula em poucos minutos. SADAVA, D. et al. Vida: a ciência da biologia. Porto Alegre: Artmed, 2009 (adaptado). O uso dessa substância pode ocasionar a morte de uma pessoa ao inibir, diretamente, a síntese de:",
        options: ["RNA", "DNA", "lipídios.", "proteínas.", "carboidratos."],
        answer: "proteínas.",
        explanation: "Os ribossomos são as estruturas celulares onde ocorre o processo de tradução = síntese de proteínas."
      },
      {
        question: "(UNIFESP)Com a finalidade de bloquear certas funções celulares, um pesquisador utilizou alguns antibióticos em uma cultura de células de camundongo. Entre os antibióticos usados, a tetraciclina atua diretamente na síntese de proteína, a mitomicinainibe a ação das polimerases do DNA e a estreptomicina introduz erros na leitura dos códons do RNA mensageiro. Esses antibióticos atuam, respectivamente, no:",
        options: ["ribossomo, ribossomo, núcleo.", "ribossomo, núcleo, ribossomo.", "núcleo, ribossomo, ribossomo.", "ribossomo, núcleo, núcleo.", "núcleo, núcleo, ribossomo."],
        answer: "ribossomo, núcleo, ribossomo.",
        explanation:"A estreptomicina atua no ribossomo (local de ocorrência da síntese de proteínas); a mitomicina atua no núcleo (onde agem as polimerases do DNA, durante o processo de replicação) e a estreptomicina atua no ribossomo, onde ocorre a “leitura” do RNA mensageiro."
      },
      {
        question: "(UVV/2020) A síntese de proteínas é controlada pelo DNA, presente no núcleo das células, e ocorre no citoplasma. Consiste em um processo complexo, composto por três etapas (transcrição, ativação e tradução), as quais contam com a participação de moléculas de RNA e ribossomos, além dos próprios aminoácidos. Durante a síntese de proteínas, a transferência de informação do DNA e a determinação da sequência de aminoácidos, que comporá determinada proteína, é uma atribuição do",
        options: ["anticódon.", "ribossomo", "RNA mensageiro", "RNA ribossômico.", "RNA transportador."],
        answer: "RNA mensageiro",
        explanation:"A molécula de RNA mensageiro contém a informação genética que será traduzida nos ribossomos. É a sequência de bases nitrogenadas do RNA mensageiro quem determina a sequência de aminoácidos na cadeia polipeptídica formada."
      },
      {
        question: "O processo de síntese de proteínas é denominado de tradução e se baseia na união de aminoácidos a fim de se formar uma proteína. Qual tipo de RNA está envolvido no processo?",
        options: ["Apenas RNA mensageiro e RNA transportador.", "Apenas RNA mensageiro e RNA ribossômico.", "Apenas RNA transportador e RNA ribossômico.", "RNA mensageiro, transportador e ribossômico.", "Nenhum tipo de RNA, pois a síntese de proteína ocorre graças a moléculas de DNA."],
        answer: "RNA mensageiro, transportador e ribossômico.",
        explanation:"Os três tipos de RNA estão envolvidos na síntese de proteínas. O RNA ribossômico participa da formação dos ribossomos, o RNA mensageiro possui a sequência de bases que guiam a síntese e o RNA transportador carrega os aminoácidos que serão usados na formação de uma nova proteína."
      },
      {
        question: "(PUC-RS-2001) Na síntese proteica, observam-se os seguintes eventos: I. o gene (segmento de DNA) é transcrito em RNA mensageiro; II. o RNA mensageiro combina-se com um complexo de ribossomo, RNAstransportadores e aminoácidos; III. a proteína é sintetizada. Num experimento de laboratório hipotético, realizou-se uma síntese proteica utilizando-se: DNA de um gene humano, RNAs transportadores de ovelha e aminoácidos de coelho. Ao final do experimento, obteve-se uma proteína:",
        options: ["humana.", "de ovelha.", " de coelho.", "quimérica de homem e ovelha.", "híbrida de homem e coelho"],
        answer: "humana.",
        explanation:"Uma proteína humana foi sintetizada, pois o DNA utilizado na transcrição de um RNA mensageiro foi DNA humano."
      },
    ],
  },
  {
    category: "cromo",
    questions: [
      {
        question: "(PUC-SP) Na aula de Biologia, o professor fez a seguinte afirmação: “A produção de ribossomos depende, indiretamente, da atividade dos cromossomos”. Em seguida, pediu a seus alunos que analisassem a afirmação e a explicassem. Foram obtidas cinco explicações diferentes, que se encontram a seguir citadas. Assinale a única afirmação correta:",
        options: [
          "Os cromossomos são constituídos, essencialmente, por RNA ribossômico e proteínas, materiais utilizados na produção de ribossomos.",
          "Os cromossomos são constituídos, essencialmente, por RNA mensageiro e proteínas, materiais utilizados na produção de ribossomos.",
          "Os cromossomos contêm DNA; este controla a síntese de ribonucleoproteínasque formarão o nucléolo e que, posteriormente, farão parte dos ribossomos.",
          "Os cromossomos são constituídos, essencialmente, por RNA transportador eproteínas, materiais utilizados na produção de ribossomos.",
          "Os cromossomos, produzidos a partir do nucléolo, fornecem material para a organização dos ribossomos.",
        ],
        answer: "Os cromossomos contêm DNA; este controla a síntese de ribonucleoproteínasque formarão o nucléolo e que, posteriormente, farão parte dos ribossomos.",
        explanation:"Os cromossomos contêm DNA; este controla a síntese de ribonucleoproteínas que formarão o nucléolo e que, posteriormente, farão parte dos ribossomos.",
      },
      {
        question: "(UCPel) Podemos dizer que cromossomo é um filamento de cromatina espiralado, visível ao microscópio óptico por ocasião da divisão celular. O conjunto de dados sobre tamanho, forma, número e características dos cromossomos de uma espécie é chamado de:",
        options: [
          "Cariótipo.", 
          "Cromonema.", 
          "Código genético.", 
          "Centrômero.",
          "Cromátide."
      ],
        answer: "Cariótipo.",
        explanation:"Denominamos de cariótipo o conjunto de cromossomos de uma espécie.",
      },
      {
        question: "(UFLA) Na espécie humana, o numero diploide de cromossomos é 46. Quantos cromossomos serão encontrados, respectivamente, nos espermatozoides, óvulos e células epidérmicas?",
        options: [
          "23,23,46", 
          "22,22,46", 
          "22,22,44", 
          "23,23,44"
      ],
        answer: "23,23,46",
        explanation:"Como os gametas são haploides, os espermatozoides e óvulos apresentam apenas 23 cromossomos. Já as células epidérmicas são somáticas e, consequentemente, diploides, com 46 cromossomos.",
      },
      {
        question: "(USJ-SC) As estruturas grossas e bem individualizadas, visíveis no núcleo durante o período de divisão celular, são denominadas de:",
        options: [
          "cariótipos.", 
          "cromossomos.", 
          "nucléolos.", 
          "cromatina."
      ],
        answer: "cromossomos.",
        explanation:"Os cromossomos são uma sequência de DNA, que contém os genes além de outras informações, estando ele no início da divisão celular, momento no qual está condensando e assim mais grosso.",
      },
      {
        question: "(UFSM) Associe as colunas - COLUNA 1 : 1- genoma 2- gene 3- cromossomo 4- cariótipo - COLUNA 2:( ) segmento de DNA que contém instrução para a formação de uma proteína. ( ) estrutura formada por uma única molécula de DNA, muito longa, associada a proteínas, visível durante a divisão celular. ( ) conjunto de genes de uma espécie.",
        options: [
          "1 – 2 – 3.", 
          "2 – 3 – 1.", 
          "2 – 4 – 1.", 
          "3 – 2 – 4.",
          "3 – 4 - 1."
      ],
        answer: "2 – 3 – 1.",
        explanation:"O material genético pode apresentar diferentes conformações, por conta disto, é dado alguns nomes para definir o estado em que a molécula de DNA se encontra, ou para se referir a alguma estrutura ou porção do código genético. O gene é uma sequência de DNA responsável por sintetizar algum tipo de proteína específica. O conjuntos de genes que formam uma espécie é conhecido como genoma. Cromossomos.Material genético condensado a partir de proteínas chamadas de histonas.",
      },
      {
        question: "(UECE) Uma célula humana que contém 22 cromossomos autossomos e um cromossomo Y é um (uma):",
        options: [
          "célula somática;", 
          "óvulo;", 
          "espermatozóide;", 
          "zigoto.",
      ],
        answer: "espermatozóide;",
        explanation:"O espermatozoides é a célula humana que contem 22 cromossomos autossomos é um cromossomo y, caracterizando-se como uma célula haploide.As células diploides são as células comuns, as células de qualquer tecido como o conjuntivo, o nervoso, hepático, entre outros. São células com 46 cromossomos cada. As células haploides são células com metade da carga genética, são os gametas sexuais, os espermatozoides e os óvulos, elas possuem apenas 23 cromossomos cada, e quando um gameta masculino encontra um feminino forma uma célula diploide, com 46 cromossomos.",
      },

    ],
  },
  {
    category: "doengen",
    questions: [
      {
        question: "(UFMG) – A identificação do fator que origina indivíduos com síndrome de Down se tornou possível pela utilização da técnica de",
        options: [
          "contagem e identificação dos cromossomos.",
          "cultura de células e tecidos.",
          "mapeamento do genoma humano.",
          "produção de DNA recombinante",
        ],
        answer: "contagem e identificação dos cromossomos.",
        explanation:"Como a síndrome de Down é uma alteração cromossômica numérica, basta fazer a contagem e identificar os cromossomos do indivíduo para descobrir se ele possui a síndrome.",
      },
      {
        question: "(UERR/2020) Em relação a algumas alterações que podem ocorrer na sequência dos pares de bases nitrogenadas de uma molécula de DNA, ou mudanças na estrutura ou na quantidade de cromossomos de um indivíduo. Essas alterações são denominadas:",
        options: [
          "deleções.", 
          "proteínas.", 
          "mutações.", 
          "mutantes.",
          "seleção natural."
      ],
        answer: "mutações.",
        explanation:"Qualquer alteração na sequência de bases de uma molécula de DNA caracteriza uma mutação gênica. Já alterações na estrutura ou no número de cromossomos caracterizam as mutações cromossômicas",
      },
      {
        question: "(Enem/2015) A cariotipagem é um método que analisa células de um indivíduo para determinar seu padrão cromossômico. Essa técnica consiste na montagem fotográfica, em sequência, dos pares de cromossomos e permite identificar um indivíduo normal (46, XX ou 46, XY) ou com alguma alteração cromossômica. A investigação do cariótipo de uma criança do sexo masculino com alterações morfológicas e comprometimento cognitivo verificou que ela apresentava fórmula cariotípica 47, XY, +18.A alteração cromossômica da criança pode ser classificada como",
        options: [
          "estrutural, do tipo deleção.", 
          "numérica, do tipo euploidia.", 
          "numérica, do tipo poliploidia.", 
          "estrutural, do tipo duplicação.",
          "numérica, do tipo aneuploidia"
      ],
        answer: "numérica, do tipo aneuploidia",
        explanation:"A questão apresenta uma situação conhecida como trissomia do 18 (Síndrome de Edwards). Neste caso, a pessoa apresenta um cromossomo 18 a mais, totalizando 47 cromossomos (algo similar à Síndrome de Down em que a pessoa apresenta uma trissomia do 21). Situações em que o indivíduo apresenta um (ou poucos) cromossomo(s) a mais ou a menos caracterizam as aneuploidias.",
      },
    ],
  },
  {
    category: "mutagen",
    questions: [
      {
        question: "Denominamos de mutação as alterações que ocorrem na estrutura do material genético. uma dessas alterações é a troca de uma base nitrogenada por outra , uma alteração estrutural no cromossomo é conhecida como?",
        options: [
          "Deleção",
          "Inserção",
          "Adição",
          "Substituição",
          "inversão",
        ],
        answer: "Substituição",
        explanation:"Denomina-se de substituição a mutação em que ocorre a troca de uma base nitrogenada por outra. Essa troca de base no DNA pode, por exemplo, levar a mudanças na proteína a ser produzida ou desencadear uma produção incompleta da proteína.",
      },
      {
        question: "Um dos fatores mais importantes para que a evolução ocorra é a mutação , uma vez que esse processo está relacionado com mudanças no material genético do indivíduo. As mutações garantem:",
        options: [
          "que a seleção natural selecione os organismos mutantes.", 
          "que a variabilidade genética aumente em uma população.", 
          "que as características sejam passadas de um descendente para outro.", 
          "que os organismos adquiram apenas características vantajosas para sua sobrevivência.",
          "que os organismos consigam sobreviver no ambiente."
      ],
        answer: "que a variabilidade genética aumente em uma população.",
        explanation:"As mutações genéticas são eventos que permitem que ocorram um acréscimo da variabilidade genética de forma que as características adaptativas comecem a aparecer. Compreenda que as mutações genéticas nem sempre ocorrem de modo a beneficiar determinada espécie, justamente por elas ocorrem de maneira aleatória.",
      },
      {
        question: "As mutações podem trazer algum benefício para o organismo, mas, algumas vezes são prejudiciais. fato é que as mutações não surgem com o intuito de suprir necessidade. diante disso, podemos concluir que as mutações são:",
        options: [
          "direcionais.", 
          "neutras.", 
          "aleatórias.", 
          "parciais.",
          "tendenciosas."
      ],
        answer: "aleatórias.",
        explanation:"As mutações são chamadas de aleatórias, pois não surgem em um organismo com um objetivo específico. As mudanças no DNA ocorrem completamente ao acaso.",
      },
      {
        question: "Na reprodução assexuada, os descendentes são iguais ao progenitor. Entretanto, algumas vezes , podem ocorrer mutações, aumentando assim: ",
        options: [
          "o número de descendentes.", 
          "a variabilidade genética.", 
          "a capacidade reprodutiva desse seres.", 
          "semelhanças entre descendentes e progenitores.",
          "a capacidade meiótica."
      ],
        answer: "a variabilidade genética.",
        explanation:"A variabilidade genética pode ser definida, de uma maneira simples, como a variedade de genes presentes em uma população. Como na reprodução assexuada não ocorre recombinação, a mutação é um processo que contribui para o aumento da variabilidade.",
      },
      {
        question: "(UNESP) A respeito das mutações gênicas, foram apresentadas as cinco afirmações seguintes. I. As mutações podem ocorrer tanto em células somáticas como em células germinativas. II. Somente as mutações ocorridas em células somáticas poderão produzir alterações transmitidas à sua descendência, independentemente do seu sistema reprodutivo. III. Apenas as mutações que atingem as células germinativas da espécie humana podem ser transmitidas aos descendentes. IV. As mutações não podem ser “espontâneas”, mas apenas causadas por fatores mutagênicos, tais como agentes químicos e físicos. V. As mutações são fatores importantes na promoção da variabilidade genética e para a evolução das espécies. Assinale a alternativa que contém todas as afirmações corretas",
        options: [
          "I, II e III.", 
          "I, III e V.", 
          "I, IV e V.", 
          "II, III e IV.",
          "II, III e V."
      ],
        answer: "I, IV e V.",
        explanation:"A alternativa II está errada porque as mutações são alterações no DNA causadas por uma replicação incorreta ou por fatores externos, como radiação e exposição a produtos químicos.",
      },
    ],
  },
  {
    category: "heranca",
    questions: [
      {
        question: "A Genética é responsável pelo estudo da hereditariedade. Considera-se que essa ciência tenha iniciado seu desenvolvimento após experimentos aplicados por um monge chamado:",
        options: [
          "Darwin.",
          "Lamarck.",
          "Mendel.",
          "Morgan.",
          "Dawkins.",
        ],
        answer: "Mendel.",
        explanation:"Sabe-se que foi a partir dos estudos de Gregor Mendel que iniciou-se o desenvolvimento da Genética.",
      },
      {
        question: "(UDESC SC/2012) Relacione os conceitos dos verbetes, utilizados na genética, da primeira coluna com o significado da segunda coluna. (1) Genótipo (2) Fenótipo (3) Alelo dominante (4) Alelo recessivo (5) Cromossomos homólogos (6) Lócus gênico ----- ( ) Expressa-se mesmo em heterozigose. ( ) Pareiam-se durante a meiose. ( ) Conjunto de características morfológicas ou funcionais do indivíduo. ( ) Local ocupado pelos genes nos cromossomos. ( ) Constituição genética dos indivíduos. ( ) Expressa-se apenas em homozigose.",
        options: [
          "4 – 6 – 5 – 2 – 1 – 3", 
          "3 – 5 – 6 – 2 – 1 – 4", 
          "3 – 5 – 1 – 6 – 2 – 4", 
          "3 – 5 – 2 – 6 – 1 – 4",
          "4 – 3 – 1 – 5 – 6 – 2"
      ],
        answer: "3 – 5 – 2 – 6 – 1 – 4",
        explanation:"1- Genótipo: sequencia de genes que determina as características genéticas do indivíduo. 2- Fenótipo: resultado da interação do genótipo e de influências ambientais, é tudo aquilo efetivamente expresso morfologicamente e fisiologicamente no indivíduo. 3- Alelo Dominante: aquele alelo que, mesmo na presença de um alelo recessivo, em heterozigose, é capaz de expressar a característica no fenótipo do organismo. 4- Alelo recessivo: aquele que só é capaz de expressar a característica no organismo se acompanhado de outro alelo recessivo, ou seja, em homozigose. 5- Cromossomos homólogos: são aqueles que possuem genes codificantes para as mesmas características e são pareados durante a divisão celular. 6- Lócus gênico: consiste em um marcador biológico que representa o local mais comum onde um determinado gene está.",
      },
      {
        question: "(Vesp-SP) Considere o heredograma que representa uma família portadora de caráter recessivo condicionado por gene situado em um dos cromossomos sexuais. A respeito dessa genealogia, podemos afirmar que:",
        options: [
          "a mulher 2 é homozigota.", 
          "as filhas do casal 3 e 4 são certamente portadoras do gene.", 
          "as mulheres 2 e 3 são certamente portadoras do gene.", 
          "todas as filhas do casal 1 e 2 são portadoras do gene.",
          "os homens 1 e 4 são certamente portadores do gene."
      ],
        answer: "as mulheres 2 e 3 são certamente portadoras do gene.",
        explanation:"Podemos afirmar apenas que as mulheres 2 e 3 são portadoras do gene. A mulher 3 é portadora, pois seu filho nasceu afetado e ela é responsável por transmitir o cromossomo X a ele. Em virtude de a mulher 3 ser portadora, seu pai ou sua mãe devem possuir o gene. O pai e a mãe são normais, sendo assim, a mãe deve possuir o gene, uma vez que se o pai o possuísse, ele seria afetado.",
        link: "https://s5.static.brasilescola.uol.com.br/img/2014/01/heredograma.jpg"
      },
      
    ],
  },
  {
    category: "sangue",
    questions: [
      {
        question: "Existe mais de 1 tipo de sangue, nomeadamente os mais conhecidos são A,B,O o famoso ABO, mais tem mais um tipo sanguíneo, qual é?",
        options: [
          "E",
          "C",
          "0",
          "1",
        ],
        answer: "0",
        explanation:"Três tipos de sangue: tipo A, tipo B e tipo O, outro tipo é o 0 (zero), dando origem à famosa classificação ABO dos grupos sanguíneos. Algumas fontes chamam a classificação dos grupos sanguíneos de ABO e outras de AB0 (A,B,Zero). As duas formas são aceitáveis.",
      },
      {
        question: "Após uma aula de biologia sobre a genética do sistema ABO, um garoto questionou seus pais sobre o tipo de sangue que possuíam. A mãe informoulhe que o tipo sanguíneo dela era A e que o do pai era B. Segundo essas informações, o garoto pode apresentar quais tipos sanguíneos:",
        options: [
          "Somente sangue A ou B.", 
          "Somente sangue A, B ou AB.", 
          "Somente sangue A, B ou O.", 
          "Somente sangue A ou O.",
          "A, B, AB ou O."
      ],
        answer: "A, B, AB ou O.",
        explanation:"Levando-se em consideração que os pais podem apresentar os genótipos IA i e IB i, o filho pode ter qualquer um dos tipos sanguíneos.",
      },
      {
        question: "Considerando-se as particularidades de cada tipo sanguíneo, marque a alternativa que indica corretamente quais tipos sanguíneos uma pessoa do sangue AB pode receber.",
        options: [
          "A e B", 
          "A, B e AB", 
          "Apenas AB", 
          "Apenas O",
          "A, B, AB e O"
      ],
        answer: "A, B, AB e O",
        explanation:"Uma pessoa com sangue AB pode receber sangue de qualquer doador, pois não possui aglutininas no seu plasma.",
      },
      
    ],
  },
  {
    category: "ciclo",
    questions: [
      {
        question: "(COMVEST) Estudos com células e organismos vivos identificaram alguns fenômenos associados ao envelhecimento. Durante o ciclo celular ocorre o encurtamento dos telômeros. Sabe-se que apenas a enzima telomerase é capaz de recuperar o comprimento dos telômeros. Nos mamíferos, a maioria das células adultas não produz telomerase, geralmente sintetizada por células-tronco. Considerando os conhecimentos sobre biologia celular, genética e as informações fornecidas, assinale a alternativa correta.",
        options: [
          "Repetições de nucleotídeos que formam os telômeros promovem a transferência nuclear de genes e, com a restauração limitada, haverá morte celular.",
          "Telômeros são constituídos por genes não codificantes, sendo o prejuízo restrito ao processo de estabilização dos cromossomos a cada replicação.",
          "Com a capacidade restrita de recuperação dos telômeros, genes indispensáveis à sobrevivência da célula podem ser eliminados.",
          "A presença dos genes nas extremidades dos cromossomos possibilita que os telômeros codifiquem proteínas essenciais para a divisão celular",
        ],
        answer: "Com a capacidade restrita de recuperação dos telômeros, genes indispensáveis à sobrevivência da célula podem ser eliminados.",
        explanation:"A cópia do telómero é parcial e não completa, o que significa que esta estrutura proteica diminui o seu tamanho a cada divisão celular. Quando estes atingem uma determinada medida, a célula fica incapaz de se reproduzir e, então, origina erros que conduzem à sua própria morte, apoptose ou morte celular programada.",
      },
      {
        question: "(UDESC) O Ciclo Celular se divide em duas etapas: Divisão Celular e Interfase e esta é subdividida nas etapas G1 – S – G2. Com relação ao ciclo, analise as proposições e assinale (V) para verdadeira e (F) para falsa. -- ( ) Na fase de Interfase a célula mantém seu material genético condensado para formar os cromossomos. ( ) Na fase S ocorre a duplicação do DNA. ( ) Durante a etapa denominada de G2 ocorre a verificação e a correção de erros na duplicação do DNA. ( ) Na fase G1 a célula realiza suas funções típicas e o seu DNA não se encontra duplicado. ( ) Os neurônios de um indivíduo adulto passam da fase de Interfase para Divisão Celular constantemente.",
        options: [
          "F – F – V – F – F", 
          "F – V – V – V – V", 
          "F – V – V – V – F", 
          "F – F – V – F – V",
          "V – F – F – F – V"
      ],
        answer: "F – V – V – V – F",
        explanation:"I - Verdade. A duplicação do DNA cromossômico dar-se na fase S da interfase. II - Falso. O pareamento dos cromossomos homólogos ocorre na matáfase. III - Falso. A condensação do DNA inicia-se após a fase G2: na prófase. IV - Falso. O processo de duplicação para qualquer divisão celular (meiose ou mitose) acontece sempre na fase S da interface do ciclo celular. V - Falso. Na fase G2, a célula cresce de tamanho em função da síntese de moléculas orgânicas como o DNA, inclusive",
      },
      {
        question: "(UNICENTRO) O ciclo celular pode ser interrompido em determinadas fases para evitar a produção de células com erro no DNA. A ausência de controle da divisão celular relaciona-se diretamente com o desenvolvimento de neoplasia (câncer). Um exemplo de controle do ciclo celular é a interrupção em G1 pela proteína p53, quando uma lesão no DNA é detectada. Se essa proteína for alterada e/ou inativada, poderá ocorrer, em curto prazo, com uma célula, que",
        options: [
          "Permanecerá em G0.", 
          "Interromperá a síntese de DNA.", 
          "Duplicará seus cromossomos.", 
          "Se tornará poliploide.",
      ],
        answer: "Interromperá a síntese de DNA.",
        explanation:'O ciclo celular é um processo que acontece a todo momento em nosso corpo. Milhares de células estão continuamente se dividindo e substituindo outras células que já atingiram seu "prazo de validade". No entanto, existem alguns fatores que podem levar a divisão ininterrupta destas células. Neste momento, as proteínas apoptóticas, como a p53 entram em cena, de forma a cessar a produção de DNA que leva posteriormente a divisão celular.',
      },
      
    ],
  },
  {
    category: "mendel",
    questions: [
      {
        question: "(UFMT) Leia as afirmações abaixo relativas à transmissão dos caracteres na reprodução sexuada. I – Os caracteres são transmitidos dos pais para os filhos devido a informações contidas no sangue dos pais, que se concentram no esperma do homem e nas excreções vaginais da mulher. II – Os caracteres são transmitidos dos pais para os filhos devido a informações contidas no interior das células reprodutoras masculinas e femininas, chamadas gametas, que se unem na fecundação. III – Os cromossomos existem aos pares nas células e os genes ocupam um lugar definido no cromossomo, chamado locus gênico, assim, os genes também existem aos pares. Os pares de cromossomos semelhantes são chamados cromossomos homólogos, e os pares de genes que ocupam um mesmo locus nestes cromossomos são chamados genes alelos. Das afirmações acima está (estão) correta (s):",
        options: [
          "I, apenas",
          "II e III, apenas",
          "III, apenas",
          "I, II e III",
        ],
        answer: "II e III, apenas",
        explanation:"I – Os caracteres são transmitidos dos pais para os filhos devido a informações contidas no sangue dos pais, que se concentram no esperma do homem e nas excreções vaginais da mulher (FALSO- É NO ÓVULO NÃO NAS SECREÇÕES) ** II – Os caracteres são transmitidos dos pais para os filhos devido a informações contidas no interior das células reprodutoras masculinas e femininas, chamadas gametas, que se unem na fecundação. (VERDADEIRO) ** III – Os cromossomos existem aos pares nas células e os genes ocupam um lugar definido no cromossomo, chamado locus gênico, assim, os genes também existem aos pares. Os pares de cromossomos semelhantes são chamados cromossomos homólogos, e os pares de genes que ocupam um mesmo locus nestes cromossomos são chamados genes alelos. (VERDADEIRA)",
      },
      {
        question: "Um estudante, ao iniciar o curso de Genética, anotou o seguinte: I. Cada caráter hereditário é determinado por um par de fatores e, como estes se separam na formação dos gametas, cada gameta recebe apenas um fator do par. II. Cada par de alelos presentes nas células diploides separa-se na meiose, de modo que cada célula haploide só recebe um alelo do par. III. Antes da divisão celular se iniciar, cada molécula de DNA se duplica e, na mitose, as duas moléculas resultantes se separam, indo para células diferentes. A primeira lei de Mendel está expressa em:",
        options: [
          " I, somente.", 
          "II, somente.", 
          "I e II, somente.", 
          "II e III, somente.",
          "I, II e III."
      ],
        answer: "I e II, somente.",
        explanation:'As leis de Mendel são os princípios que estabelecem como ocorre a herança, ou seja, o processo de transmissão de características dos pais para os filhos. A primeira lei é chamada "princípio de uniformidade" estabelece que ao se cruzarem dois indivíduos de raça pura (homozigoto), a primeira geração filial (heterozigota) será a mesma entre eles (fenótipos e genótipos). Ou seja, essa lei estabelece como acontece a separação dos fatores hereditários durante a formação dos gametas, o qual está exemplificado nas asserções I e II',
      },
      {
        question: "(UECE) Um dos conceitos utilizados para compreensão de genética diz que a propriedade de um alelo de produzir o mesmo fenótipo tanto em condição homozigótica como em condição heterozigótica é causada por um gene",
        options: [
          "homozigoto", 
          "dominante", 
          "recessivo", 
          "autossomo",
      ],
        answer: "dominante",
        explanation:'Aquele alelo que manifesta seu efeito tanto em condição homozigótica quanto em condição heterozigótica é o alelo dominante.',
      },
      {
        question: "(Fuvest) Considere os seguintes cruzamentos para ervilha, sabendo que V representa o gene que determina cor amarela dos cotilédones e é dominante sobre o alelo v, que determina cor verde. (I. VV x vv) (II. Vv x Vv) (III. Vv x vv) -- Um pé de ervilha, heterozigoto e que, portanto, pode produzir vagens com sementes amarelas e com sementes verdes, pode resultar:",
        options: [
          "Apenas do cruzamento I.", 
          "Apenas do cruzamento II.", 
          "Apenas do cruzamento III.", 
          "Apenas dos cruzamentos II e III.",
          "Dos cruzamentos I, II e III.",
      ],
        answer: "Dos cruzamentos I, II e III.",
        explanation:'No cruzamento I, temos VV x vv, dos quais temos a probabilidade de obter indivíduos 100% Vv. Já no cruzamento II, Vv x Vv, temos a probabilidade de 25% VV, 50% Vv e 25% vv. Por fim, no cruzamento III, Vv x vv, a probabilidade é de 50% Vv e 50% vv. Isso significa que em todos os cruzamentos podemos obter heterozigotos.',
      },
      
    ],
  },
  {
    category: "genes",
    questions: [
      {
        question: "Onde podemos encontrar os genes?",
        options: [
          "Citoplasma",
          "No ribossomo",
          "No cromossomo",
          "NdA",
        ],
        answer: "No cromossomo",
        explanation:"Os genes estão dentro dos cromossomos, os quais seencontram no núcleo da célula.",
      },
      {
        question: "As formas alternativas de um determinado gene são denominadas de?",
        options: [
          "Cromátides", 
          "Fenótipo", 
          "Uracila", 
          "Alelos",
      ],
        answer: "Alelos",
        explanation:'Os alelos são formas alternativas de um gene, que atuam sobre a mesma característica, ocupando loci correspondentes, em cromossomos homólogos. Os alelos atuam sobre a mesma característica, mas não são obrigatoriamente iguais.',
      },
      {
        question: "Oque é um gene recessivo?",
        options: [
          "São aqueles que determinam uma característica hereditária mesmo quando em dose simples nos genótipo", 
          "São aqueles que encontram-se escondidos quando em par com os genes dominantes.", 
          "É responsável pelo controlo da transcrição dos genes estruturais. Quando o repressor, codificado pelo gene regulador, se liga ao operador, o promotor é bloqueado o que impede a transcrição.", 
          "NdA",
      ],
        answer: "São aqueles que encontram-se escondidos quando em par com os genes dominantes.",
        explanation:'Os genes recessivos são os ficam escondidos (recessivos) com a presença de um gene dominante manifestando suas características na ausência de seu alelo dominante.',
      },
      {
        question: "Qual a função do gene?",
        options: [
          "É responsável pelas características herdadas geneticamente", 
          "É responsável pela produção de Energia", 
          "É responsável pela respiração celular", 
          "Nda",
      ],
        answer: "É responsável pelas características herdadas geneticamente",
        explanation:'Genes são porções de DNA que apresentam as informações necessárias para que ocorra a síntese de uma molécula de RNA mensageiro e consequentemente uma proteína. São eles, portanto, responsáveis por carregar as informações necessárias para que nossas características se expressem.',
      },
      {
        question: "Os genes são fundamentais para a síntese de proteínas, funcionando como verdadeiros moldes para a determinação da sequência de aminoácidos que será produzida pela célula. Os genes podem ser definidos como:",
        options: [
          "um trecho do DNA.", 
          "sequência de duas bases nitrogenadas.", 
          "um trecho de RNA.", 
          "o DNA condensado.",
          "o DNA associado a proteínas histonas."
      ],
        answer: "um trecho do DNA.",
        explanation:'Caso tenha errado: Os genes podem ser definidas como porções do DNA que serão usadas como moldes para a determinação da sequência de aminoácidos a ser sintetizada.',
      },
      
    ],
  },
  {
    category: "genofeno",
    questions: [
      {
        question: "Imagine que você passou uma semana na praia e, ao voltar, notou que  sua pele está mais escura que antes da viagem. Essa coloração ocorreu em decorrência de uma variação em seu:",
        options: [
          "gene.",
          "fenótipo.",
          "genótipo.",
          "cariótipo.",
          "heredograma.",
        ],
        answer: "fenótipo.",
        explanation:"A tonalidade de pele foi alterada em razão dos fatores ambientais que afetaram o fenótipo do indivíduo. Nesse caso, o que ocorreu foi um aumento da produção de melanina em decorrência da exposição à radiação solar.",
      },
      {
        question: "Qual a diferença entre o genótipo e o fenótipo?",
        options: [
          "A diferença é que o fenótipo faz parte do código genético, e o genótipo faz parte dos traços físicos.", 
          "A diferença entre genótipo e fenótipo está no fato de que o genótipo se refere aos genes, e o fenótipo, às características físicas, morfológicas e comportamentais.", 
          "A diferença são as características.", 
          "A diferença é que o fenótipo é o DNA recebido dos pais, e o genótipo é influenciado pelo meio ambiente.",
          "A diferença está nos comportamentos e características hereditárias que é influenciada pelo fenótipo.",
      ],
        answer: "A diferença entre genótipo e fenótipo está no fato de que o genótipo se refere aos genes, e o fenótipo, às características físicas, morfológicas e comportamentais.",
        explanation:'genótipo se refere ao conjunto de genes, enquanto fenótipo diz respeito às características físicas de um indivíduo. Ao contrário do fenótipo, o genótipo de um organismo não pode ser modificado.A principal diferença está no fato de que o fenótipo sofre influência do meio, enquanto o genótipo não. Além disso, o fenótipo pode ser alterado temporariamente, enquanto o genótipo não. Uma forma de compreender na prática a diferença entre genótipo e fenótipo é usar o exemplo de uma mulher que nasceu com o cabelo preto, mas se tornou ruiva com o auxílio de tinturas. Ao pintar o cabelo de ruivo, essa mulher está alterando o fenótipo, porém, o genótipo permanece inalterado. A raiz do cabelo dessa mulher continuará nascendo com a cor preta (característica genética) independentemente de quantas vezes ela utilize a tintura ruiva.',
      },
      {
        question: "(UFC) alguns estudos com gêmeos idênticos mostraram que o QI, a altura e os talentos artísticos podem ser diferentes entre esses indivíduos. A melhor explicação para essas diferenças é que:",
        options: [
          "A hereditariedade e o ambiente não possuem influência sobre a expressão dos fenótipos.", 
          "O ambiente e os genes interagem no desenvolvimento e expressão das características herdadas.", 
          "O genótipo dos gêmeos depende da interação da dieta e do controle hormonal.",
          "As características QI, altura e talentos artísticos dependem apenas do ambiente.", 
          "Os alelos responsáveis por essas características possuem efeitofenotípico múltiplo.",
      ],
        answer: "O ambiente e os genes interagem no desenvolvimento e expressão das características herdadas.",
        explanation:'Como são gêmeos idênticos, possuem o mesmo patrimônio genético. Dessa forma, a melhor explicação para essas diferenças é que a expressão das características herdadas depende de uma interação entre os genes e o ambiente.',
      },
      {
        question: "A afirmação de que o fenótipo é determinado exclusivamente pelo genótipo está correta?",
        options: [
          "Sim, pois o fenótipo nada mais é do que a expressão dos genes.", 
          "Sim, pois somente os genes podem determinar as características de um indivíduo.", 
          "Não, pois o fenótipo depende também da interação entre o genótipo e o ambiente.", 
          "Não, pois o fenótipo também se relaciona com o cariótipo do indivíduo.",
      ],
        answer: "Não, pois o fenótipo depende também da interação entre o genótipo e o ambiente.",
        explanation:'O fenótipo é a manifestação do genótipo do indivíduo, que pode ser influenciada pela interação com o meio.',
      },
      {
        question: "A constituição genetica de um organismo é difinida como:",
        options: [
          "fenótipo", 
          "bactéria", 
          "rna", 
          "genotipo",
          "genes"
      ],
        answer: "genotipo",
        explanation:'O genótipo é definido como a composição genética de um indivíduo, ou seja, o conjunto de todos os genes daquele organismo.',
      },
      {
        question: "(UFMG) Um estudante de 23 anos, doador de sangue tipo universal, é moreno, tem estatura mediana e pesa 85Kg. Todas as alternativas apresentam características hereditárias desse estudante que são influenciadas pelo ambiente, EXCETO",
        options: [
          "cor da pele", 
          "peso", 
          "altura", 
          "grupo sanguíneo",
      ],
        answer: "grupo sanguíneo",
        explanation:'O grupo sanguíneo do indivíduo não sofre alteração do ambiente. Já a altura, peso e cor da pele podem sofrer influência do meio.',
      },
      
    ],
  },
];

export default data;
